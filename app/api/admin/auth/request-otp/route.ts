import { NextResponse } from "next/server";
import { isAdminEmailAllowed, normalizeAdminEmail } from "@/lib/admin/auth/allowlist";
import {
  generateOtpCode,
  hashOtpCode,
  OTP_TTL_SECONDS,
} from "@/lib/admin/auth/otp";
import {
  checkAndIncrementOtpRateLimit,
  isOtpStoreAvailable,
  writeOtpRecord,
} from "@/lib/admin/auth/otp-store";
import { sendAdminOtpEmail } from "@/lib/admin/email/send-admin-otp-email";
import { resolveOtpPepper } from "@/lib/admin/auth/otp-pepper";

const GENERIC_ERROR = "無法登入，請確認 Email 是否正確或稍後再試";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = normalizeAdminEmail(body.email ?? "");

    if (!email) {
      return NextResponse.json({ error: "請輸入 Email" }, { status: 400 });
    }

    if (!isAdminEmailAllowed(email)) {
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 403 });
    }

    if (!(await isOtpStoreAvailable())) {
      return NextResponse.json(
        { error: "登入服務暫時無法使用，請稍後再試" },
        { status: 503 },
      );
    }

    const rate = await checkAndIncrementOtpRateLimit(email);
    if (!rate.allowed) {
      return NextResponse.json(
        { error: "驗證碼寄送過於頻繁，請 15 分鐘後再試" },
        { status: 429 },
      );
    }

    const code = generateOtpCode();
    const stored = await writeOtpRecord(email, {
      hash: hashOtpCode(code, resolveOtpPepper()),
      attempts: 0,
      createdAt: new Date().toISOString(),
    });

    if (!stored) {
      return NextResponse.json(
        { error: "無法建立驗證碼，請稍後再試" },
        { status: 503 },
      );
    }

    const emailResult = await sendAdminOtpEmail(email, code);
    if (!emailResult.sent) {
      return NextResponse.json(
        { error: emailResult.error ?? "驗證碼郵件發送失敗" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      expiresInSeconds: OTP_TTL_SECONDS,
      message: "驗證碼已寄出，請查收 Email",
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "寄送驗證碼時發生錯誤";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
