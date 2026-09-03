import { getSql, hasDatabase } from "@/lib/db/client";
import { ensureAuthTables } from "@/lib/db/ensure-auth-tables";
import { normalizeAdminEmail, resolveAdminAllowedEmails } from "./allowlist";
import {
  type AdminRole,
  isEnvSuperAdmin,
  parseAdminRole,
  resolveSuperAdminEmails,
} from "./roles";

export type AdminUserRow = {
  email: string;
  role: AdminRole;
  name: string | null;
  hasLoggedIn: boolean;
  isEnvSuperAdmin: boolean;
  updatedAt: string | null;
};

type UserRecord = {
  email: string;
  role: AdminRole;
  name: string | null;
  updated_at: string | Date | null;
};

async function ensureRoleColumn(): Promise<void> {
  await ensureAuthTables();
  const sql = getSql();
  await sql`
    ALTER TABLE users
    ADD COLUMN IF NOT EXISTS role text NOT NULL DEFAULT 'ops'
  `;
  await sql`
    ALTER TABLE users
    ADD COLUMN IF NOT EXISTS "adminUpdatedAt" timestamptz
  `;
}

async function countSuperAdmins(): Promise<number> {
  if (!hasDatabase()) return 0;
  await ensureRoleColumn();
  const sql = getSql();
  const envSupers = resolveSuperAdminEmails();
  const rows = (await sql`
    SELECT COUNT(*)::int AS count
    FROM users
    WHERE role = 'super_admin'
  `) as Array<{ count: number }>;
  const dbCount = rows[0]?.count ?? 0;
  return Math.max(dbCount, envSupers.length);
}

export async function getUserRoleFromDb(
  email: string,
): Promise<AdminRole | null> {
  if (!hasDatabase()) return null;

  await ensureRoleColumn();
  const sql = getSql();
  const normalized = normalizeAdminEmail(email);
  const rows = (await sql`
    SELECT role
    FROM users
    WHERE lower(email) = ${normalized}
    LIMIT 1
  `) as Array<{ role: string | null }>;

  return parseAdminRole(rows[0]?.role);
}

export async function resolveUserRole(email: string): Promise<AdminRole> {
  const normalized = normalizeAdminEmail(email);
  if (!normalized) return "ops";

  if (isEnvSuperAdmin(normalized)) {
    return "super_admin";
  }

  const existing = await getUserRoleFromDb(normalized);
  if (existing) {
    return existing;
  }

  const superCount = await countSuperAdmins();
  if (superCount === 0) {
    return "super_admin";
  }

  return "ops";
}

export async function ensureUserOnSignIn(
  email: string,
  profile?: { name?: string | null; image?: string | null },
): Promise<AdminRole> {
  if (!hasDatabase()) {
    return resolveUserRole(email);
  }

  await ensureRoleColumn();
  const sql = getSql();
  const normalized = normalizeAdminEmail(email);
  const role = await resolveUserRole(normalized);
  const envSuper = isEnvSuperAdmin(normalized);

  const rows = (await sql`
    SELECT id, role
    FROM users
    WHERE lower(email) = ${normalized}
    LIMIT 1
  `) as Array<{ id: string; role: string | null }>;

  if (rows[0]) {
    const nextRole: AdminRole =
      envSuper ? "super_admin" : parseAdminRole(rows[0].role) ?? role;

    await sql`
      UPDATE users
      SET
        role = ${nextRole},
        name = COALESCE(${profile?.name ?? null}, name),
        image = COALESCE(${profile?.image ?? null}, image)
      WHERE id = ${rows[0].id}
    `;
    return nextRole;
  }

  await sql`
    INSERT INTO users (email, name, image, role)
    VALUES (
      ${normalized},
      ${profile?.name ?? null},
      ${profile?.image ?? null},
      ${role}
    )
  `;

  return role;
}

export async function listAdminUsers(): Promise<AdminUserRow[]> {
  const allowed = resolveAdminAllowedEmails();
  const byEmail = new Map<string, AdminUserRow>();

  for (const email of allowed) {
    byEmail.set(email, {
      email,
      role: isEnvSuperAdmin(email) ? "super_admin" : "ops",
      name: null,
      hasLoggedIn: false,
      isEnvSuperAdmin: isEnvSuperAdmin(email),
      updatedAt: null,
    });
  }

  if (!hasDatabase()) {
    return [...byEmail.values()].sort((a, b) => a.email.localeCompare(b.email));
  }

  await ensureRoleColumn();
  const sql = getSql();
  const rows = (await sql`
    SELECT email, role, name, "adminUpdatedAt" AS updated_at
    FROM users
    WHERE email IS NOT NULL
  `) as UserRecord[];

  for (const row of rows) {
    const email = normalizeAdminEmail(row.email);
    if (!email || !allowed.includes(email)) continue;

    const role = isEnvSuperAdmin(email)
      ? "super_admin"
      : parseAdminRole(row.role) ?? "ops";

    byEmail.set(email, {
      email,
      role,
      name: row.name,
      hasLoggedIn: true,
      isEnvSuperAdmin: isEnvSuperAdmin(email),
      updatedAt:
        row.updated_at instanceof Date
          ? row.updated_at.toISOString()
          : row.updated_at,
    });
  }

  return [...byEmail.values()].sort((a, b) => a.email.localeCompare(b.email));
}

export async function updateAdminUserRole(
  actorEmail: string,
  targetEmail: string,
  role: AdminRole,
): Promise<AdminUserRow> {
  const actor = normalizeAdminEmail(actorEmail);
  const target = normalizeAdminEmail(targetEmail);

  if (!target || !resolveAdminAllowedEmails().includes(target)) {
    throw new Error("目標 Email 不在後台授權名單內");
  }

  if (isEnvSuperAdmin(target) && role !== "super_admin") {
    throw new Error("環境變數指定的最高管理員無法降級");
  }

  if (actor === target && role !== "super_admin") {
    throw new Error("無法將自己的權限降為一般營運");
  }

  if (!hasDatabase()) {
    throw new Error("DATABASE_URL 未設定，無法更新權限");
  }

  await ensureRoleColumn();
  const sql = getSql();

  const existing = (await sql`
    SELECT id
    FROM users
    WHERE lower(email) = ${target}
    LIMIT 1
  `) as Array<{ id: string }>;

  if (existing[0]) {
    await sql`
      UPDATE users
      SET role = ${role}, "adminUpdatedAt" = NOW()
      WHERE id = ${existing[0].id}
    `;
  } else {
    await sql`
      INSERT INTO users (email, role, "adminUpdatedAt")
      VALUES (${target}, ${role}, NOW())
    `;
  }

  const users = await listAdminUsers();
  const updated = users.find((user) => user.email === target);
  if (!updated) {
    throw new Error("更新後找不到管理員資料");
  }

  return updated;
}
