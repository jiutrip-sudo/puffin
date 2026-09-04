import { buildBookingLookupUrl } from "@/lib/booking/booking-lookup-url";
import { formatIsk } from "@/lib/trip-pricing/calculate";
import { formatDisplayDate, computeTripEndDate } from "@/lib/trip-date-utils";
import { getPricingConfig } from "@/lib/trip-pricing/fetch";
import { CHECKOUT_OFFICE_EMAIL } from "@/lib/checkout/manual-payment";
import type { LocalBookingRecord } from "@/lib/booking/types";
import { sendViaResend } from "@/lib/admin/email/resend";

export async function sendPaymentConfirmedEmail(
  record: LocalBookingRecord,
): Promise<{ sent: boolean; error?: string }> {
  const session = record.session;
  const lead =
    session.travelers.find((traveler) => traveler.type === "ADULT") ??
    session.travelers[0];
  const email = lead?.email?.trim() ?? "";

  if (!email) {
    return { sent: false, error: "旅客 Email 未填寫" };
  }

  const config = getPricingConfig(session.packageId);
  const tripDays = config?.tripDurationDays ?? 1;
  const endDate = session.startDate
    ? computeTripEndDate(session.startDate, tripDays)
    : "";

  const lookupUrl = buildBookingLookupUrl(record.confirmationCode, email);
  const amountDueLabel = session.payFullAmount ? "已付全額" : "已付訂金";

  const subject = `款項已確認 — 訂單 ${record.confirmationCode}`;
  const text = [
    `${lead?.firstName ?? ""} ${lead?.lastName ?? ""} 您好，`,
    "",
    "我們已確認您的款項，訂單狀態已更新為「款項已確認」。",
    "",
    `訂單號：${record.confirmationCode}`,
    `行程：${session.packageTitle}`,
    `出發：${formatDisplayDate(session.startDate)} → ${formatDisplayDate(endDate)}`,
    `${amountDueLabel}：${formatIsk(record.pricing.amountDue)}`,
  ].join("\n");

  const html = `
    <div style="font-family:sans-serif;line-height:1.65;color:#1a1d21;">
      <p>${lead?.firstName ?? ""} ${lead?.lastName ?? ""} 您好，</p>
      <p>我們已確認您的款項，訂單狀態已更新為<strong>款項已確認</strong>。</p>
      <div style="margin:16px 0;padding:14px 16px;border-radius:10px;background:#f8f6fc;border:1px solid #e0d9ef;">
        <p style="margin:0 0 6px;"><strong>訂單號：</strong>${record.confirmationCode}</p>
        <p style="margin:0 0 6px;"><strong>行程：</strong>${session.packageTitle}</p>
        <p style="margin:0 0 6px;"><strong>出發：</strong>${formatDisplayDate(session.startDate)} → ${formatDisplayDate(endDate)}</p>
        <p style="margin:0;"><strong>${amountDueLabel}：</strong>${formatIsk(record.pricing.amountDue)}</p>
      </div>
      <p><a href="${lookupUrl}" style="color:#6d5f9e;font-weight:700;">查詢訂單狀態</a></p>
      <p style="color:#5c6570;font-size:14px;">若有疑問請聯絡 ${CHECKOUT_OFFICE_EMAIL}</p>
    </div>
  `;

  const result = await sendViaResend({
    to: [email],
    subject,
    html,
    text: `${text}\n\n查詢訂單：${lookupUrl}`,
  });

  return { sent: result.sent, error: result.error };
}
