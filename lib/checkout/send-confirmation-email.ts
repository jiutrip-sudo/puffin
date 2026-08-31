import { CHECKOUT_OFFICE_EMAIL } from "./manual-payment";
import {
  buildCustomerConfirmationEmail,
  buildStaffBookingNotificationEmail,
} from "./confirmation-email-template";
import type { CheckoutConfirmationEmailData } from "./confirmation-email-types";

type SendEmailInput = {
  to: string[];
  subject: string;
  html: string;
  text: string;
};

type SendEmailResult = {
  sent: boolean;
  id?: string;
  error?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

async function sendViaResend(input: SendEmailInput): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { sent: false, error: "RESEND_API_KEY 未設定" };
  }

  const from =
    process.env.CONFIRMATION_EMAIL_FROM?.trim() ??
    `大樂旅行社 <${CHECKOUT_OFFICE_EMAIL}>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
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

export type CheckoutConfirmationEmailResult = {
  customer: SendEmailResult;
  staff: SendEmailResult;
};

export async function sendCheckoutConfirmationEmails(
  data: CheckoutConfirmationEmailData,
): Promise<CheckoutConfirmationEmailResult> {
  const customerContent = buildCustomerConfirmationEmail(data);
  const staffContent = buildStaffBookingNotificationEmail(data);

  const customerEmail = data.leadTravelerEmail.trim();
  const customerResult = isValidEmail(customerEmail)
    ? await sendViaResend({
        to: [customerEmail],
        subject: customerContent.subject,
        html: customerContent.html,
        text: customerContent.text,
      })
    : { sent: false, error: "旅客 Email 無效或未填寫" };

  const staffInbox =
    process.env.CONFIRMATION_EMAIL_STAFF?.trim() ?? CHECKOUT_OFFICE_EMAIL;

  const staffResult = isValidEmail(staffInbox)
    ? await sendViaResend({
        to: [staffInbox],
        subject: staffContent.subject,
        html: staffContent.html,
        text: staffContent.text,
      })
    : { sent: false, error: "內部通知信箱無效" };

  return {
    customer: customerResult,
    staff: staffResult,
  };
}
