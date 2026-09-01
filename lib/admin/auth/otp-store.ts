import {
  kvDel,
  kvExpire,
  kvGet,
  kvIncr,
  kvSet,
} from "@/lib/kv/rest-client";
import { normalizeAdminEmail } from "./allowlist";
import {
  OTP_RATE_MAX_REQUESTS,
  OTP_RATE_WINDOW_SECONDS,
  OTP_TTL_SECONDS,
  type StoredOtpRecord,
} from "./otp";

function otpKey(email: string): string {
  return `puffin:admin:otp:${normalizeAdminEmail(email)}`;
}

function otpRateKey(email: string): string {
  return `puffin:admin:otp-rate:${normalizeAdminEmail(email)}`;
}

export async function readOtpRecord(email: string): Promise<StoredOtpRecord | null> {
  const raw = await kvGet(otpKey(email));
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StoredOtpRecord;
  } catch {
    return null;
  }
}

export async function writeOtpRecord(
  email: string,
  record: StoredOtpRecord,
): Promise<boolean> {
  return kvSet(otpKey(email), JSON.stringify(record), {
    exSeconds: OTP_TTL_SECONDS,
  });
}

export async function deleteOtpRecord(email: string): Promise<void> {
  await kvDel(otpKey(email));
}

export async function incrementOtpAttempts(
  email: string,
  record: StoredOtpRecord,
): Promise<void> {
  await writeOtpRecord(email, {
    ...record,
    attempts: record.attempts + 1,
  });
}

export async function checkAndIncrementOtpRateLimit(
  email: string,
): Promise<{ allowed: boolean; remaining: number }> {
  const key = otpRateKey(email);
  const count = await kvIncr(key);
  if (count === 1) {
    await kvExpire(key, OTP_RATE_WINDOW_SECONDS);
  }

  if (count > OTP_RATE_MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  return {
    allowed: true,
    remaining: Math.max(0, OTP_RATE_MAX_REQUESTS - count),
  };
}

export async function isOtpStoreAvailable(): Promise<boolean> {
  const probe = await kvSet("puffin:admin:otp-probe", "1", { exSeconds: 5 });
  if (probe) await kvDel("puffin:admin:otp-probe");
  return probe;
}
