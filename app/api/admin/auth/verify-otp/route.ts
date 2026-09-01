import { NextResponse } from "next/server";
import {
  isAdminEmailAllowed,
  normalizeAdminEmail,
} from "@/lib/admin/auth/allowlist";
import {
  verifyOtpAgainstRecord,
} from "@/lib/admin/auth/otp";
import {
  deleteOtpRecord,
  incrementOtpAttempts,
  readOtpRecord,
} from "@/lib/admin/auth/otp-store";
import {
  adminSessionCookieOptions,
  ADMIN_SESSION_COOKIE,
  resolveAdminSessionTtlSeconds,
  signAdminSession,
} from "@/lib/admin/auth/session";

function resolveOtpPepper(): string {
  const secret = process.env.ADMIN_SESSION_SECRET?.trim();
  if (secret) return secret;
  if (process.env.NODE_ENV === "production") {
    throw new Error("ADMIN_SESSION_SECRET 未設定");
  }
  return "dev-admin-session-secret-change-me";
}

const GENERIC_ERROR = "驗證碼無效或已過期";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; code?: string };
    const email = normalizeAdminEmail(body.email ?? "");
    const code = body.code?.trim() ?? "";

    if (!email || !code) {
      return NextResponse.json({ error: "請輸入 Email 與驗證碼" }, { status: 400 });
    }

    if (!isAdminEmailAllowed(email)) {
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 403 });
    }

    const record = await readOtpRecord(email);
    if (!record) {
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
    }

    const pepper = resolveOtpPepper();
    const verification = verifyOtpAgainstRecord(code, record, pepper);

    if (verification.exceededAttempts) {
      await deleteOtpRecord(email);
      return NextResponse.json(
        { error: "驗證次數過多，請重新索取驗證碼" },
        { status: 400 },
      );
    }

    if (!verification.valid) {
      await incrementOtpAttempts(email, record);
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
    }

    await deleteOtpRecord(email);

    const token = signAdminSession(email);
    const response = NextResponse.json({ ok: true, email });
    response.cookies.set(
      ADMIN_SESSION_COOKIE,
      token,
      adminSessionCookieOptions(resolveAdminSessionTtlSeconds()),
    );
    return response;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "驗證時發生錯誤";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
