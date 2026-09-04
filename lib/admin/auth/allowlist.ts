function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isAdminAllowlistConfigured(): boolean {
  return Boolean(process.env.ADMIN_ALLOWED_EMAILS?.trim());
}

export function resolveAdminAllowedEmails(): string[] {
  const configured = process.env.ADMIN_ALLOWED_EMAILS?.trim();
  if (!configured) {
    return [];
  }

  return configured
    .split(/[,;]/)
    .map((entry) => normalizeEmail(entry))
    .filter(Boolean);
}

export function isAdminEmailAllowed(email: string): boolean {
  const normalized = normalizeEmail(email);
  if (!normalized) return false;
  const allowed = resolveAdminAllowedEmails();
  return allowed.includes(normalized);
}

export function normalizeAdminEmail(email: string): string {
  return normalizeEmail(email);
}
