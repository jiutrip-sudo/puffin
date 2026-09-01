import {
  CHECKOUT_OFFICE_EMAIL,
} from "@/lib/checkout/manual-payment";

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

function resolveConfirmationFromAddress(): string {
  return (
    process.env.CONFIRMATION_EMAIL_FROM?.trim() ??
    `大樂旅行社 <${CHECKOUT_OFFICE_EMAIL}>`
  );
}

export async function sendViaResend(
  input: SendEmailInput,
): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { sent: false, error: "RESEND_API_KEY 未設定" };
  }

  const from = resolveConfirmationFromAddress();

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
