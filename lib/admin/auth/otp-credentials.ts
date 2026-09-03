import {
  isAdminEmailAllowed,
  normalizeAdminEmail,
} from "./allowlist";
import { verifyOtpAgainstRecord } from "./otp";
import { resolveOtpPepper } from "./otp-pepper";
import {
  deleteOtpRecord,
  incrementOtpAttempts,
  readOtpRecord,
} from "./otp-store";

export async function verifyAdminOtpCredentials(
  credentials: Partial<Record<"email" | "code", unknown>>,
) {
  const email = normalizeAdminEmail(String(credentials.email ?? ""));
  const code = String(credentials.code ?? "").trim();

  if (!email || !code) {
    return null;
  }

  if (!isAdminEmailAllowed(email)) {
    return null;
  }

  const record = await readOtpRecord(email);
  if (!record) {
    return null;
  }

  const verification = verifyOtpAgainstRecord(
    code,
    record,
    resolveOtpPepper(),
  );

  if (verification.exceededAttempts) {
    await deleteOtpRecord(email);
    return null;
  }

  if (!verification.valid) {
    await incrementOtpAttempts(email, record);
    return null;
  }

  await deleteOtpRecord(email);

  return {
    id: email,
    email,
    name: email,
  };
}
