import fs from "node:fs/promises";
import path from "node:path";
import { kvGet, kvSet } from "@/lib/kv/rest-client";
import type { LocalBookingRecord, LocalBookingStatus } from "./types";

export type BookingListEntry = {
  id: string;
  confirmationCode: string;
  createdAt: string;
  packageId: string;
  status: LocalBookingStatus;
  packageTitle: string;
  leadEmail: string;
  leadName: string;
  startDate: string;
  total: number;
  amountDue: number;
  promoCode: string | null;
};

const BOOKING_INDEX_KV_KEY = "puffin:booking:index";

function bookingsDir(): string {
  return (
    process.env.BOOKING_STORE_DIR ?? path.join(process.cwd(), ".data/bookings")
  );
}

function bookingIndexPath(): string {
  return path.join(bookingsDir(), "index.jsonl");
}

function summarizeBooking(record: LocalBookingRecord): BookingListEntry {
  const lead =
    record.session.travelers.find((traveler) => traveler.type === "ADULT") ??
    record.session.travelers[0];

  return {
    id: record.id,
    confirmationCode: record.confirmationCode,
    createdAt: record.createdAt,
    packageId: record.packageId,
    status: record.status,
    packageTitle: record.session.packageTitle,
    leadEmail: lead?.email?.trim() ?? "",
    leadName: [lead?.firstName, lead?.lastName].filter(Boolean).join(" ").trim(),
    startDate: record.session.startDate,
    total: record.pricing.total,
    amountDue: record.pricing.amountDue,
    promoCode: record.pricing.promoCode ?? record.session.promoCode?.trim() ?? null,
  };
}

async function readKvBookingIndex(): Promise<BookingListEntry[]> {
  const raw = await kvGet(BOOKING_INDEX_KV_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as BookingListEntry[];
  } catch {
    return [];
  }
}

async function writeKvBookingIndex(entries: BookingListEntry[]): Promise<void> {
  await kvSet(BOOKING_INDEX_KV_KEY, JSON.stringify(entries));
}

async function readFileBookingIndex(): Promise<BookingListEntry[]> {
  try {
    const raw = await fs.readFile(bookingIndexPath(), "utf8");
    const lines = raw.split("\n").filter(Boolean);
    const entries: BookingListEntry[] = [];

    for (const line of lines) {
      try {
        const meta = JSON.parse(line) as {
          id?: string;
          confirmationCode?: string;
          createdAt?: string;
          packageId?: string;
          status?: LocalBookingStatus;
        };
        if (!meta.id) continue;

        const filePath = path.join(bookingsDir(), `${meta.id}.json`);
        const bookingRaw = await fs.readFile(filePath, "utf8");
        const record = JSON.parse(bookingRaw) as LocalBookingRecord;
        entries.push(summarizeBooking(record));
      } catch {
        continue;
      }
    }

    return entries;
  } catch {
    return [];
  }
}

export async function appendBookingListEntry(
  record: LocalBookingRecord,
): Promise<void> {
  const entry = summarizeBooking(record);
  const existing = await readKvBookingIndex();
  const withoutDup = existing.filter((item) => item.id !== entry.id);
  withoutDup.unshift(entry);
  await writeKvBookingIndex(withoutDup.slice(0, 500));
}

export async function updateBookingListEntry(
  record: LocalBookingRecord,
): Promise<void> {
  await appendBookingListEntry(record);
}

export async function listBookingEntries(): Promise<BookingListEntry[]> {
  const fromKv = await readKvBookingIndex();
  if (fromKv.length > 0) {
    return fromKv.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  const fromFile = await readFileBookingIndex();
  return fromFile.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
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
