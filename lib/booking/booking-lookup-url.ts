import { normalizeConfirmationCode } from "./normalize-confirmation-code";

function resolveSiteOrigin(): string {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    "";

  if (configured) {
    return configured.replace(/\/$/, "");
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    return `https://${vercelUrl.replace(/\/$/, "")}`;
  }

  return "http://localhost:3000";
}

/** 旅客查詢訂單頁（可預填訂單號） */
export function buildBookingLookupUrl(confirmationCode?: string | null): string {
  const origin = resolveSiteOrigin();
  const normalized = confirmationCode
    ? normalizeConfirmationCode(confirmationCode)
    : "";

  if (normalized) {
    return `${origin}/booking/lookup?code=${encodeURIComponent(normalized)}`;
  }

  return `${origin}/booking/lookup`;
}
