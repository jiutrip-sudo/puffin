import { sendViaResend } from "@/lib/admin/email/resend";

export async function sendAdminOtpEmail(
  email: string,
  code: string,
): Promise<{ sent: boolean; error?: string }> {
  const subject = "帕芬假期後台登入驗證碼";
  const text = [
    "您正在登入帕芬假期營運後台。",
    "",
    `驗證碼：${code}`,
    "",
    "此驗證碼 10 分鐘內有效。若您未申請登入，請忽略此信。",
  ].join("\n");

  const html = `
    <div style="font-family:sans-serif;line-height:1.6;color:#1a1d21;">
      <p>您正在登入<strong>帕芬假期營運後台</strong>。</p>
      <p style="margin:20px 0;font-size:28px;font-weight:700;color:#6d5f9e;">${code}</p>
      <p style="color:#5c6570;">此驗證碼 10 分鐘內有效。若您未申請登入，請忽略此信。</p>
    </div>
  `;

  const result = await sendViaResend({
    to: [email],
    subject,
    html,
    text,
  });

  return { sent: result.sent, error: result.error };
}
