import fs from "node:fs/promises";
import path from "node:path";
import { normalizeConfirmationCode } from "./normalize-confirmation-code";
import { summarizeBooking, type BookingListEntry } from "./summarize-booking";
import type { LocalBookingRecord } from "./types";

function bookingsDir(): string {
  return (
    process.env.BOOKING_STORE_DIR ?? path.join(process.cwd(), ".data/bookings")
  );
}

function bookingFilePath(bookingId: string): string {
  return path.join(bookingsDir(), `${bookingId}.json`);
}

function bookingIndexPath(): string {
  return path.join(bookingsDir(), "index.jsonl");
}

export async function readFileBooking(
  bookingId: string,
): Promise<LocalBookingRecord | null> {
  try {
    const raw = await fs.readFile(bookingFilePath(bookingId), "utf8");
    return JSON.parse(raw) as LocalBookingRecord;
  } catch {
    return null;
  }
}

export async function writeFileBooking(record: LocalBookingRecord): Promise<void> {
  const filePath = bookingFilePath(record.id);
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(record, null, 2), "utf8");
}

export async function appendFileBookingIndex(
  record: LocalBookingRecord,
): Promise<void> {
  const line = JSON.stringify({
    id: record.id,
    confirmationCode: record.confirmationCode,
    createdAt: record.createdAt,
    packageId: record.packageId,
    status: record.status,
  });
  await fs.mkdir(bookingsDir(), { recursive: true });
  await fs.appendFile(bookingIndexPath(), `${line}\n`, "utf8");
}

export async function listBookingEntriesFromFile(): Promise<BookingListEntry[]> {
  try {
    const raw = await fs.readFile(bookingIndexPath(), "utf8");
    const lines = raw.split("\n").filter(Boolean);
    const entries: BookingListEntry[] = [];

    for (const line of lines) {
      try {
        const meta = JSON.parse(line) as { id?: string };
        if (!meta.id) continue;

        const record = await readFileBooking(meta.id);
        if (!record) continue;
        entries.push(summarizeBooking(record));
      } catch {
        continue;
      }
    }

    return entries.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  } catch {
    return [];
  }
}

export async function findBookingIdByConfirmationCodeFromFile(
  confirmationCode: string,
): Promise<string | null> {
  const normalized = normalizeConfirmationCode(confirmationCode);

  try {
    const raw = await fs.readFile(bookingIndexPath(), "utf8");
    const lines = raw.split("\n").filter(Boolean);

    for (const line of lines) {
      try {
        const entry = JSON.parse(line) as {
          id?: string;
          confirmationCode?: string;
        };
        if (
          entry.id &&
          entry.confirmationCode &&
          normalizeConfirmationCode(entry.confirmationCode) === normalized
        ) {
          return entry.id;
        }
      } catch {
        continue;
      }
    }
  } catch {
    return null;
  }

  return null;
}

export async function listAllFileBookingRecords(): Promise<LocalBookingRecord[]> {
  const entries = await listBookingEntriesFromFile();
  const records: LocalBookingRecord[] = [];

  for (const entry of entries) {
    const record = await readFileBooking(entry.id);
    if (record) records.push(record);
  }

  return records;
}
