import { getPricingConfig } from "@/lib/trip-pricing/fetch";
import {
  localeFromDisplayCurrency,
} from "@/lib/i18n/display-money";
import type { LocalBookingRecord } from "@/lib/booking/types";
import { buildCheckoutConfirmationEmailData } from "./build-confirmation-email-data";
import { buildCustomerConfirmationEmail } from "./confirmation-email-template";
import { CHECKOUT_OFFICE_EMAIL } from "./manual-payment";

type SendEmailResult = {
  sent: boolean;
  id?: string;
  error?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function resolveConfirmationFromAddress(): string {
  return (
    process.env.CONFIRMATION_EMAIL_FROM?.trim() ??
    `大樂旅行社 <${CHECKOUT_OFFICE_EMAIL}>`
  );
}

async function sendViaResend(input: {
  to: string[];
  subject: string;
  html: string;
  text: string;
}): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { sent: false, error: "RESEND_API_KEY 未設定" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resolveConfirmationFromAddress(),
      to: input.to,
      subject: input.subject,
      html: input.html,
      text: input.text,
    }),
  });

  const payload = (await response.json()) as { id?: string; message?: string };

  if (!response.ok) {
    return {
      sent: false,
      error: payload.message ?? `郵件服務回應異常（${response.status}）`,
    };
  }

  return { sent: true, id: payload.id };
}

/** 供應商確認後，寄送付款說明給旅客 */
export async function sendPaymentInstructionsEmail(
  record: LocalBookingRecord,
): Promise<SendEmailResult> {
  const config = getPricingConfig(record.packageId);
  if (!config) {
    return { sent: false, error: "找不到套餐設定" };
  }

  const locale = localeFromDisplayCurrency(
    record.pricing.displayCurrency ?? "TWD",
  );

  const emailData = buildCheckoutConfirmationEmailData(
    record.session,
    config,
    {
      bookingId: record.id,
      confirmationCode: record.confirmationCode,
    },
    {
      total: record.pricing.total,
      supplierTotal: record.pricing.supplierTotal,
      retailTotalIsk: record.pricing.retailTotalIsk,
      corivoTotal: record.pricing.corivoTotal,
      promoCode: record.pricing.promoCode,
      promoDiscount: record.pricing.promoDiscount,
      displayAmountDue: record.pricing.displayAmountDue,
      displayTotal: record.pricing.displayTotal,
    },
    { locale, awaitingSupplier: false },
  );

  const customerEmail = emailData.leadTravelerEmail.trim();
  if (!isValidEmail(customerEmail)) {
    return { sent: false, error: "旅客 Email 無效或未填寫" };
  }

  const content = buildCustomerConfirmationEmail(emailData);
  return sendViaResend({
    to: [customerEmail],
    subject: content.subject,
    html: content.html,
    text: content.text,
  });
}
