import { COMPANY_EMAIL } from "@/lib/company-info";
import { hasBookingDatabase } from "@/lib/db/client";
import { upsertBookingRecord, readBookingRecord } from "./booking-db";
import {
  appendFileBookingIndex,
  readFileBooking,
  writeFileBooking,
} from "./booking-file-store";
import type { LocalBookingRecord } from "./types";

function isServerlessRuntime(): boolean {
  return Boolean(
    process.env.VERCEL ||
      process.env.AWS_LAMBDA_FUNCTION_NAME ||
      process.env.AWS_EXECUTION_ENV,
  );
}

async function mirrorBookingToFilesystem(
  record: LocalBookingRecord,
  appendIndex: boolean,
): Promise<void> {
  try {
    await writeFileBooking(record);
    if (appendIndex) {
      await appendFileBookingIndex(record);
    }
  } catch (error) {
    console.warn("預訂本機備份寫入失敗", error);
  }
}

export async function readLocalBooking(
  bookingId: string,
): Promise<LocalBookingRecord | null> {
  if (hasBookingDatabase()) {
    const fromDb = await readBookingRecord(bookingId);
    if (fromDb) return fromDb;
  }

  return readFileBooking(bookingId);
}

export async function persistLocalBooking(
  record: LocalBookingRecord,
  options?: { appendIndex?: boolean },
): Promise<void> {
  const appendIndex = options?.appendIndex ?? false;

  if (hasBookingDatabase()) {
    await upsertBookingRecord(record);

    if (!isServerlessRuntime()) {
      await mirrorBookingToFilesystem(record, appendIndex);
    }
    return;
  }

  if (isServerlessRuntime()) {
    console.error("預訂儲存未設定：serverless 環境缺少 DATABASE_URL");
    throw new Error(
      `暫時無法完成預訂，請稍後再試或聯絡客服信箱 ${COMPANY_EMAIL}`,
    );
  }

  await writeFileBooking(record);
  if (appendIndex) {
    await appendFileBookingIndex(record);
  }
}

export async function writeLocalBooking(record: LocalBookingRecord): Promise<void> {
  await persistLocalBooking(record, { appendIndex: true });
}

export async function updateLocalBooking(
  bookingId: string,
  patch: Partial<
    Pick<
      LocalBookingRecord,
      | "status"
      | "email"
      | "supplierStatus"
      | "supplierConfirmedAt"
      | "supplierNote"
    >
  >,
): Promise<LocalBookingRecord | null> {
  const existing = await readLocalBooking(bookingId);
  if (!existing) return null;

  const updated: LocalBookingRecord = {
    ...existing,
    ...patch,
    email: patch.email ?? existing.email,
  };

  await persistLocalBooking(updated);
  return updated;
}
