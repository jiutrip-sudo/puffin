import { COMPANY_INFO } from "@/lib/company-info";
import {
  CHECKOUT_OFFICE_ADDRESS,
  CHECKOUT_OFFICE_EMAIL,
  CHECKOUT_OFFICE_PHONE,
} from "./manual-payment";
import { getCheckoutOfficeContactBlock } from "./build-confirmation-email-data";
import type {
  CheckoutConfirmationEmailContent,
  CheckoutConfirmationEmailData,
} from "./confirmation-email-types";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function travelerSummary(data: CheckoutConfirmationEmailData): string {
  const parts = [`${data.adults} 成人`];
  if (data.children > 0) parts.push(`${data.children} 兒童`);
  if (data.infants > 0) parts.push(`${data.infants} 嬰兒`);
  return parts.join("、");
}

function orderReference(data: CheckoutConfirmationEmailData): string {
  return data.confirmationCode ?? data.bookingId;
}

function buildStepsHtml(steps: string[]): string {
  return steps
    .map((step) => `<li style="margin:0 0 8px;">${escapeHtml(step)}</li>`)
    .join("");
}

function buildNotesHtml(notes: string[]): string {
  return notes
    .map(
      (note) =>
        `<li style="margin:0 0 6px;color:#5c6370;">${escapeHtml(note)}</li>`,
    )
    .join("");
}

function buildTravelersHtml(data: CheckoutConfirmationEmailData): string {
  return data.travelers
    .map(
      (traveler) =>
        `<tr><td style="padding:6px 0;border-bottom:1px solid #e8eaed;">${escapeHtml(traveler.name)}</td><td style="padding:6px 0;border-bottom:1px solid #e8eaed;color:#5c6370;">${escapeHtml(traveler.typeLabel)}</td></tr>`,
    )
    .join("");
}

function buildBankAccountText(
  bankAccount: NonNullable<
    CheckoutConfirmationEmailData["paymentInstructions"]["bankAccount"]
  >,
): string[] {
  return [
    "── 匯款帳戶 ──",
    `戶名：${bankAccount.holderName}`,
    `機構名稱代號：${bankAccount.institutionLine}`,
    `帳號：${bankAccount.accountNumber}`,
    "",
  ];
}

function buildBankAccountHtml(
  bankAccount: NonNullable<
    CheckoutConfirmationEmailData["paymentInstructions"]["bankAccount"]
  >,
): string {
  return `
              <div style="margin:0 0 16px;padding:14px 16px;border-radius:10px;background:#fff;border:1px solid #d9e5dd;">
                <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#1a1d21;">匯款帳戶</p>
                <p style="margin:0;font-size:14px;line-height:1.65;">
                  戶名：<strong>${escapeHtml(bankAccount.holderName)}</strong><br />
                  機構名稱代號：${escapeHtml(bankAccount.institutionLine)}<br />
                  帳號：<strong style="font-size:15px;">${escapeHtml(bankAccount.accountNumber)}</strong>
                </p>
              </div>`;
}

/** 旅客預訂確認信（匯款／現金人工收款） */
export function buildCustomerConfirmationEmail(
  data: CheckoutConfirmationEmailData,
): CheckoutConfirmationEmailContent {
  const orderRef = orderReference(data);
  const subject = `【預訂確認】${data.packageTitle} · 訂單 ${orderRef}`;

  const textLines = [
    `${data.leadTravelerName} 您好，`,
    "",
    "感謝您透過大樂旅行社預訂冰島行程，您的訂單已成立。",
    "",
    "── 訂單摘要 ──",
    `行程：${data.packageTitle}`,
    `出發：${data.startDate} → ${data.endDate}（${data.tripDays} 天）`,
    `住宿：${data.accommodationLabel}`,
    `租車：${data.vehicleLabel}`,
    `旅客：${travelerSummary(data)}`,
    data.selectedExtrasCount > 0
      ? `自選活動：${data.selectedExtrasCount} 項`
      : null,
    `訂單號：${orderRef}`,
    `預訂 ID：${data.bookingId}`,
    "",
    "── 付款資訊 ──",
    `付款方式：${data.paymentMethodLabel}`,
    `套餐總價：${data.totalAmountFormatted}`,
    `${data.amountDueLabel}：${data.amountDueFormatted}`,
    "",
    ...(data.paymentInstructions.bankAccount
      ? buildBankAccountText(data.paymentInstructions.bankAccount)
      : []),
    data.paymentInstructions.title,
    ...data.paymentInstructions.steps.map((step, index) => `${index + 1}. ${step}`),
    "",
    "注意：",
    ...data.paymentInstructions.notes.map((note) => `· ${note}`),
    "",
    "── 聯絡我們 ──",
    getCheckoutOfficeContactBlock(),
    "",
    `${COMPANY_INFO.name}`,
  ].filter((line) => line !== null);

  const html = `
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:'PingFang TC','Microsoft JhengHei',sans-serif;color:#1a1d21;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f5f7;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e8eaed;">
          <tr>
            <td style="padding:28px 28px 20px;background:#1f4d3a;color:#ffffff;">
              <p style="margin:0 0 8px;font-size:13px;opacity:0.9;">${escapeHtml(COMPANY_INFO.name)}</p>
              <h1 style="margin:0;font-size:22px;line-height:1.35;font-weight:700;">預訂確認</h1>
              <p style="margin:10px 0 0;font-size:14px;line-height:1.5;opacity:0.95;">
                ${escapeHtml(data.leadTravelerName)} 您好，訂單已成立。請依下方說明完成付款，顧問將人工確認款項。
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px;">
              <h2 style="margin:0 0 12px;font-size:15px;font-weight:700;">訂單摘要</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;line-height:1.55;">
                <tr><td style="padding:4px 0;color:#5c6370;width:96px;">行程</td><td style="padding:4px 0;">${escapeHtml(data.packageTitle)}</td></tr>
                <tr><td style="padding:4px 0;color:#5c6370;">出發日期</td><td style="padding:4px 0;">${escapeHtml(data.startDate)} → ${escapeHtml(data.endDate)}（${data.tripDays} 天）</td></tr>
                <tr><td style="padding:4px 0;color:#5c6370;">住宿</td><td style="padding:4px 0;">${escapeHtml(data.accommodationLabel)}</td></tr>
                <tr><td style="padding:4px 0;color:#5c6370;">租車</td><td style="padding:4px 0;">${escapeHtml(data.vehicleLabel)}</td></tr>
                <tr><td style="padding:4px 0;color:#5c6370;">旅客</td><td style="padding:4px 0;">${escapeHtml(travelerSummary(data))}</td></tr>
                ${
                  data.selectedExtrasCount > 0
                    ? `<tr><td style="padding:4px 0;color:#5c6370;">自選活動</td><td style="padding:4px 0;">${data.selectedExtrasCount} 項</td></tr>`
                    : ""
                }
                <tr><td style="padding:4px 0;color:#5c6370;">訂單號</td><td style="padding:4px 0;font-weight:700;">${escapeHtml(orderRef)}</td></tr>
              </table>

              <div style="margin:20px 0;padding:16px;border-radius:10px;background:#f3f6f4;border:1px solid #d9e5dd;">
                <p style="margin:0 0 6px;font-size:13px;color:#5c6370;">付款方式</p>
                <p style="margin:0 0 10px;font-size:15px;font-weight:700;">${escapeHtml(data.paymentMethodLabel)}</p>
                <p style="margin:0;font-size:14px;line-height:1.6;">
                  套餐總價：<strong>${escapeHtml(data.totalAmountFormatted)}</strong><br />
                  ${escapeHtml(data.amountDueLabel)}：<strong style="color:#1f4d3a;">${escapeHtml(data.amountDueFormatted)}</strong>
                </p>
              </div>

              <h2 style="margin:0 0 10px;font-size:15px;font-weight:700;">${escapeHtml(data.paymentInstructions.title)}</h2>
              ${
                data.paymentInstructions.bankAccount
                  ? buildBankAccountHtml(data.paymentInstructions.bankAccount)
                  : ""
              }
              <ol style="margin:0 0 14px;padding-left:20px;font-size:14px;line-height:1.55;">
                ${buildStepsHtml(data.paymentInstructions.steps)}
              </ol>
              <ul style="margin:0;padding-left:18px;font-size:13px;line-height:1.5;">
                ${buildNotesHtml(data.paymentInstructions.notes)}
              </ul>

              <h2 style="margin:24px 0 10px;font-size:15px;font-weight:700;">旅客名單</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;">
                ${buildTravelersHtml(data)}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 28px;background:#f8f9fa;border-top:1px solid #e8eaed;font-size:13px;line-height:1.6;color:#5c6370;">
              <strong style="color:#1a1d21;">聯絡我們</strong><br />
              地址：${escapeHtml(CHECKOUT_OFFICE_ADDRESS)}<br />
              電話：${escapeHtml(CHECKOUT_OFFICE_PHONE)}<br />
              信箱：<a href="mailto:${escapeHtml(CHECKOUT_OFFICE_EMAIL)}" style="color:#1f4d3a;">${escapeHtml(CHECKOUT_OFFICE_EMAIL)}</a>
              <p style="margin:12px 0 0;">${escapeHtml(COMPANY_INFO.name)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html, text: textLines.join("\n") };
}

/** 內部通知信：提醒顧問人工跟進付款 */
export function buildStaffBookingNotificationEmail(
  data: CheckoutConfirmationEmailData,
): CheckoutConfirmationEmailContent {
  const orderRef = orderReference(data);
  const subject = `【新預訂待收款】${orderRef} · ${data.paymentMethodLabel}`;

  const textLines = [
    "有新的線上預訂待人工收款確認：",
    "",
    `訂單號：${orderRef}`,
    `預訂 ID：${data.bookingId}`,
    `行程：${data.packageTitle}`,
    `出發：${data.startDate} → ${data.endDate}`,
    `付款方式：${data.paymentMethodLabel}`,
    `${data.amountDueLabel}：${data.amountDueFormatted}（總價 ${data.totalAmountFormatted}）`,
    "",
    `主要聯絡人：${data.leadTravelerName}`,
    `Email：${data.leadTravelerEmail}`,
    `電話：${data.leadTravelerPhone}`,
    "",
    "旅客：",
    ...data.travelers.map(
      (traveler) => `· ${traveler.name}（${traveler.typeLabel}）`,
    ),
    "",
    "請於 3 個工作天內聯絡旅客並確認付款。",
  ];

  const html = `
<!DOCTYPE html>
<html lang="zh-Hant">
<head><meta charset="utf-8" /><title>${escapeHtml(subject)}</title></head>
<body style="font-family:'PingFang TC','Microsoft JhengHei',sans-serif;font-size:14px;line-height:1.6;color:#1a1d21;">
  <h1 style="font-size:18px;margin:0 0 12px;">新預訂待收款</h1>
  <p style="margin:0 0 16px;">請人工跟進付款與訂單狀態。</p>
  <table style="border-collapse:collapse;width:100%;max-width:560px;">
    <tr><td style="padding:4px 8px;color:#5c6370;">訂單號</td><td style="padding:4px 8px;"><strong>${escapeHtml(orderRef)}</strong></td></tr>
    <tr><td style="padding:4px 8px;color:#5c6370;">預訂 ID</td><td style="padding:4px 8px;">${escapeHtml(data.bookingId)}</td></tr>
    <tr><td style="padding:4px 8px;color:#5c6370;">行程</td><td style="padding:4px 8px;">${escapeHtml(data.packageTitle)}</td></tr>
    <tr><td style="padding:4px 8px;color:#5c6370;">出發</td><td style="padding:4px 8px;">${escapeHtml(data.startDate)} → ${escapeHtml(data.endDate)}</td></tr>
    <tr><td style="padding:4px 8px;color:#5c6370;">付款</td><td style="padding:4px 8px;">${escapeHtml(data.paymentMethodLabel)} · ${escapeHtml(data.amountDueLabel)} ${escapeHtml(data.amountDueFormatted)}</td></tr>
    <tr><td style="padding:4px 8px;color:#5c6370;">聯絡人</td><td style="padding:4px 8px;">${escapeHtml(data.leadTravelerName)} / ${escapeHtml(data.leadTravelerPhone)} / ${escapeHtml(data.leadTravelerEmail)}</td></tr>
  </table>
</body>
</html>`;

  return { subject, html, text: textLines.join("\n") };
}
