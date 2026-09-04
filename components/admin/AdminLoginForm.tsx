"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { AdminOtpInput } from "./AdminOtpInput";

const RESEND_COOLDOWN_SECONDS = 60;
const DEFAULT_OTP_TTL_SECONDS = 600;

type AdminLoginFormProps = {
  googleEnabled?: boolean;
};

export function AdminLoginForm({ googleEnabled = false }: AdminLoginFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") ?? "/admin/bookings";

  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [otpExpiresInSeconds, setOtpExpiresInSeconds] = useState(
    DEFAULT_OTP_TTL_SECONDS,
  );

  useEffect(() => {
    if (resendCooldown <= 0) return;

    const timer = window.setInterval(() => {
      setResendCooldown((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [resendCooldown]);

  const signInWithGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      await signIn("google", { callbackUrl: nextPath });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google 登入失敗");
      setLoading(false);
    }
  };

  const requestOtp = useCallback(async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await fetch("/api/admin/auth/request-otp", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as {
        error?: string;
        message?: string;
        expiresInSeconds?: number;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "無法寄送驗證碼");
      }

      setMessage(data.message ?? "驗證碼已寄出");
      setOtpExpiresInSeconds(data.expiresInSeconds ?? DEFAULT_OTP_TTL_SECONDS);
      setResendCooldown(RESEND_COOLDOWN_SECONDS);
      setCode("");
      setStep("otp");
    } catch (err) {
      setError(err instanceof Error ? err.message : "寄送失敗");
    } finally {
      setLoading(false);
    }
  }, [email]);

  const verifyOtp = useCallback(
    async (codeOverride?: string) => {
      const otp = (codeOverride ?? code).trim();
      if (otp.length < 6 || loading) return;

      setLoading(true);
      setError(null);

      try {
        const result = await signIn("admin-otp", {
          email,
          code: otp,
          redirect: false,
        });

        if (result?.error) {
          throw new Error("驗證碼無效或已過期");
        }

        router.replace(nextPath);
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "驗證失敗");
      } finally {
        setLoading(false);
      }
    },
    [code, email, loading, nextPath, router],
  );

  return (
    <div className="admin-login">
      <div className="admin-login__card">
        <h1 className="admin-login__title">營運後台登入</h1>
        <p className="admin-login__desc">
          使用 Google 或授權 Email 驗證碼登入。
        </p>

        {googleEnabled && (
          <>
            <button
              type="button"
              className="admin-btn admin-btn--google"
              disabled={loading}
              onClick={() => void signInWithGoogle()}
            >
              使用 Google 登入
            </button>
            <p className="admin-login__divider">
              <span>或使用 Email 驗證碼</span>
            </p>
          </>
        )}

        {step === "email" ? (
          <form
            className="admin-login__form"
            onSubmit={(event) => {
              event.preventDefault();
              void requestOtp();
            }}
          >
            <label className="admin-field">
              <span className="admin-field__label">Email</span>
              <input
                type="email"
                className="admin-field__input"
                value={email}
                onChange={(event) => setEmail(event.target.value.trim().toLowerCase())}
                placeholder="your@email.com"
                autoComplete="email"
                required
              />
            </label>
            <button type="submit" className="admin-btn admin-btn--primary" disabled={loading}>
              {loading ? "寄送中…" : "寄送驗證碼"}
            </button>
          </form>
        ) : (
          <form
            className="admin-login__form"
            onSubmit={(event) => {
              event.preventDefault();
              void verifyOtp();
            }}
          >
            <p className="admin-login__email-hint">驗證碼已寄至 {email}</p>
            <p className="admin-login__otp-meta">
              驗證碼 {Math.max(1, Math.round(otpExpiresInSeconds / 60))} 分鐘內有效
            </p>
            <label className="admin-field">
              <span className="admin-field__label">6 位驗證碼</span>
              <AdminOtpInput
                value={code}
                onChange={setCode}
                onComplete={(completed) => void verifyOtp(completed)}
                disabled={loading}
                autoFocus
              />
            </label>
            <button
              type="submit"
              className="admin-btn admin-btn--primary"
              disabled={loading || code.length < 6}
            >
              {loading ? "驗證中…" : "登入"}
            </button>
            <div className="admin-login__otp-actions">
              <button
                type="button"
                className="admin-btn admin-btn--ghost"
                disabled={loading || resendCooldown > 0}
                onClick={() => void requestOtp()}
              >
                {resendCooldown > 0
                  ? `${resendCooldown} 秒後可重送`
                  : "重新寄送驗證碼"}
              </button>
              <button
                type="button"
                className="admin-btn admin-btn--ghost"
                onClick={() => {
                  setStep("email");
                  setCode("");
                  setMessage(null);
                  setError(null);
                  setResendCooldown(0);
                }}
              >
                更換 Email
              </button>
            </div>
          </form>
        )}

        {message && <p className="admin-login__message">{message}</p>}
        {error && (
          <p className="admin-login__error" role="alert">
            {error}
          </p>
        )}

        <p className="admin-login__footer">
          <Link href="/">返回網站</Link>
        </p>
      </div>
    </div>
  );
}
