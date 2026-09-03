import { NextResponse } from "next/server";
import { auth } from "./auth";
import { resolveUserRole } from "./admin-users";
import { type AdminRole, isSuperAdminRole, parseAdminRole } from "./roles";

export type AdminSession = {
  email: string;
  role: AdminRole;
};

export async function getAdminSession(): Promise<AdminSession | null> {
  const session = await auth();
  const email = session?.user?.email?.trim().toLowerCase();
  if (!email) return null;

  const role =
    parseAdminRole(session?.user?.role) ?? (await resolveUserRole(email));

  return { email, role };
}

export async function requireAdminSession(): Promise<
  AdminSession | NextResponse
> {
  const admin = await getAdminSession();
  if (!admin) {
    return NextResponse.json({ error: "未授權" }, { status: 401 });
  }
  return admin;
}

export async function requireSuperAdminSession(): Promise<
  AdminSession | NextResponse
> {
  const result = await requireAdminSession();
  if (result instanceof NextResponse) return result;

  if (!isSuperAdminRole(result.role)) {
    return NextResponse.json({ error: "需要最高管理員權限" }, { status: 403 });
  }

  return result;
}

export function isNextResponse(value: unknown): value is NextResponse {
  return value instanceof NextResponse;
}
