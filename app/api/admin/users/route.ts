import { NextResponse } from "next/server";
import { listAdminUsers, updateAdminUserRole } from "@/lib/admin/auth/admin-users";
import { parseAdminRole } from "@/lib/admin/auth/roles";
import {
  isNextResponse,
  requireSuperAdminSession,
} from "@/lib/admin/auth/session-access";

export async function GET() {
  const session = await requireSuperAdminSession();
  if (isNextResponse(session)) return session;

  try {
    const users = await listAdminUsers();
    return NextResponse.json({ users });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "讀取管理員列表失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const session = await requireSuperAdminSession();
  if (isNextResponse(session)) return session;

  try {
    const body = (await request.json()) as {
      email?: string;
      role?: string;
    };

    const email = body.email?.trim().toLowerCase();
    const role = parseAdminRole(body.role);

    if (!email || !role) {
      return NextResponse.json(
        { error: "請提供有效的 Email 與權限" },
        { status: 400 },
      );
    }

    const user = await updateAdminUserRole(session.email, email, role);

    return NextResponse.json({
      user,
      message: "權限已更新。對方重新登入後會套用新權限。",
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "更新管理員權限失敗";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
