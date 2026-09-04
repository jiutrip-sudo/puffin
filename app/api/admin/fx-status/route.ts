import { NextResponse } from "next/server";
import { getFxDriftStatus } from "@/lib/admin/fx-drift-check";
import {
  isNextResponse,
  requireAdminSession,
} from "@/lib/admin/auth/session-access";

export async function GET() {
  const session = await requireAdminSession();
  if (isNextResponse(session)) return session;

  try {
    const status = await getFxDriftStatus();
    return NextResponse.json(status);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "匯率偏離檢查失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
