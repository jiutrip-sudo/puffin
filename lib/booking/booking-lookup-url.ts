import { normalizeConfirmationCode } from "./normalize-confirmation-code";

function normalizeLookupEmail(email?: string | null): string {
  return email?.trim().toLowerCase() ?? "";
}

/** 站內查單路徑（可預填訂單號與 Email） */
export function buildBookingLookupPath(
  confirmationCode?: string | null,
  email?: string | null,
): string {
  const params = new URLSearchParams();
  const code = confirmationCode
    ? normalizeConfirmationCode(confirmationCode)
    : "";
  const normalizedEmail = normalizeLookupEmail(email);

  if (code) params.set("code", code);
  if (normalizedEmail) params.set("email", normalizedEmail);

  const query = params.toString();
  return query ? `/booking/lookup?${query}` : "/booking/lookup";
}

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

/** 旅客查詢訂單完整 URL（郵件、後台通知用） */
export function buildBookingLookupUrl(
  confirmationCode?: string | null,
  email?: string | null,
): string {
  const origin = resolveSiteOrigin();
  const path = buildBookingLookupPath(confirmationCode, email);
  return `${origin}${path}`;
}
