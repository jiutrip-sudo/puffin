export function resolveOtpPepper(): string {
  const pepper =
    process.env.OTP_PEPPER?.trim() ?? process.env.ADMIN_SESSION_SECRET?.trim();
  if (pepper) return pepper;
  if (process.env.NODE_ENV === "production") {
    throw new Error("OTP_PEPPER 或 ADMIN_SESSION_SECRET 未設定");
  }
  return "dev-admin-otp-pepper-change-me";
}
