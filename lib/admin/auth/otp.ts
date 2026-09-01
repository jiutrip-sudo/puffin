import { createHash, randomInt } from "node:crypto";

const OTP_LENGTH = 6;
const MAX_VERIFY_ATTEMPTS = 5;

export function generateOtpCode(): string {
  return String(randomInt(0, 10 ** OTP_LENGTH)).padStart(OTP_LENGTH, "0");
}

export function hashOtpCode(code: string, pepper: string): string {
  return createHash("sha256")
    .update(`${code.trim()}:${pepper}`)
    .digest("hex");
}

export type StoredOtpRecord = {
  hash: string;
  attempts: number;
  createdAt: string;
};

export function verifyOtpAgainstRecord(
  code: string,
  record: StoredOtpRecord,
  pepper: string,
): { valid: boolean; exceededAttempts: boolean } {
  if (record.attempts >= MAX_VERIFY_ATTEMPTS) {
    return { valid: false, exceededAttempts: true };
  }

  const expected = hashOtpCode(code, pepper);
  const valid = expected === record.hash;
  return { valid, exceededAttempts: false };
}

export const OTP_TTL_SECONDS = 600;
export const OTP_RATE_WINDOW_SECONDS = 900;
export const OTP_RATE_MAX_REQUESTS = 3;
export const MAX_VERIFY_ATTEMPTS_EXPORT = MAX_VERIFY_ATTEMPTS;
