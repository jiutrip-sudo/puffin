import { hasBookingDatabase } from "@/lib/db/client";
import {
  findBookingIdByConfirmationCodeInDb,
  listBookingRecords,
  readBookingRecord,
  upsertBookingRecord,
} from "./booking-db";
import type { BookingListEntry } from "./summarize-booking";
import { summarizeBooking } from "./summarize-booking";
import type { LocalBookingRecord, LocalBookingStatus } from "./types";

export type { BookingListEntry } from "./summarize-booking";

export async function appendBookingListEntry(
  record: LocalBookingRecord,
): Promise<void> {
  if (!hasBookingDatabase()) return;
  await upsertBookingRecord(record);
}

export async function updateBookingListEntry(
  record: LocalBookingRecord,
): Promise<void> {
  await appendBookingListEntry(record);
}

export async function listBookingEntries(query?: {
  status?: LocalBookingStatus;
  q?: string;
}): Promise<BookingListEntry[]> {
  if (hasBookingDatabase()) {
    return listBookingRecords(query);
  }

  const { listBookingEntriesFromFile } = await import("./booking-file-store");
  const entries = await listBookingEntriesFromFile();
  return filterBookingEntries(entries, query ?? {});
}

export function filterBookingEntries(
  entries: BookingListEntry[],
  query: {
    q?: string;
    status?: LocalBookingStatus;
  },
): BookingListEntry[] {
  const q = query.q?.trim().toLowerCase();
  const status = query.status;

  return entries.filter((entry) => {
    if (status && entry.status !== status) return false;
    if (!q) return true;

    return (
      entry.confirmationCode.toLowerCase().includes(q) ||
      entry.leadEmail.toLowerCase().includes(q) ||
      entry.leadName.toLowerCase().includes(q) ||
      entry.packageTitle.toLowerCase().includes(q) ||
      entry.id.toLowerCase().includes(q)
    );
  });
}

export type AdminBookingDetail = BookingListEntry & {
  record: LocalBookingRecord;
};

export async function getAdminBookingDetail(
  bookingId: string,
): Promise<AdminBookingDetail | null> {
  const { readLocalBooking } = await import("./booking-store");
  const record = await readLocalBooking(bookingId);
  if (!record) return null;

  return {
    ...summarizeBooking(record),
    record,
  };
}

export async function findBookingIdByConfirmationCode(
  confirmationCode: string,
): Promise<string | null> {
  if (hasBookingDatabase()) {
    return findBookingIdByConfirmationCodeInDb(confirmationCode);
  }

  const { findBookingIdByConfirmationCodeFromFile } = await import(
    "./booking-file-store"
  );
  return findBookingIdByConfirmationCodeFromFile(confirmationCode);
}
