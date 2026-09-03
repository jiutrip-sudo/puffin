export type AdminRole = "super_admin" | "ops";

export const ADMIN_ROLE_LABELS: Record<AdminRole, string> = {
  super_admin: "最高管理員",
  ops: "一般營運",
};

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function resolveSuperAdminEmails(): string[] {
  const configured = process.env.ADMIN_SUPER_EMAILS?.trim();
  if (!configured) return [];

  return configured
    .split(/[,;]/)
    .map((entry) => normalizeEmail(entry))
    .filter(Boolean);
}

export function isEnvSuperAdmin(email: string): boolean {
  const normalized = normalizeEmail(email);
  if (!normalized) return false;
  return resolveSuperAdminEmails().includes(normalized);
}

export function isSuperAdminRole(role: AdminRole | undefined | null): boolean {
  return role === "super_admin";
}

export function parseAdminRole(value: unknown): AdminRole | null {
  if (value === "super_admin" || value === "ops") return value;
  return null;
}
