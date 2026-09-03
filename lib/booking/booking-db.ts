import { getSql, hasBookingDatabase } from "@/lib/db/client";
import { ensureBookingsSchema } from "@/lib/db/bookings-schema";
import { normalizeConfirmationCode } from "./normalize-confirmation-code";
import {
  summarizeBooking,
  type BookingListEntry,
} from "./summarize-booking";
import type { LocalBookingRecord, LocalBookingStatus } from "./types";

type BookingRow = {
  id: string;
  confirmation_code: string;
  created_at: string | Date;
  status: LocalBookingStatus;
  package_id: string;
  lead_email: string;
  lead_name: string;
  start_date: string;
  total: number;
  amount_due: number;
  promo_code: string | null;
  data: LocalBookingRecord;
};

function rowToListEntry(row: BookingRow): BookingListEntry {
  return {
    id: row.id,
    confirmationCode: row.confirmation_code,
    createdAt:
      row.created_at instanceof Date
        ? row.created_at.toISOString()
        : new Date(row.created_at).toISOString(),
    packageId: row.package_id,
    status: row.status,
    packageTitle: row.data.session.packageTitle,
    leadEmail: row.lead_email,
    leadName: row.lead_name,
    startDate: row.start_date,
    total: row.total,
    amountDue: row.amount_due,
    promoCode: row.promo_code,
  };
}

export async function upsertBookingRecord(
  record: LocalBookingRecord,
): Promise<void> {
  if (!hasBookingDatabase()) return;

  await ensureBookingsSchema();
  const sql = getSql();
  const summary = summarizeBooking(record);

  await sql`
    INSERT INTO bookings (
      id,
      confirmation_code,
      created_at,
      status,
      package_id,
      lead_email,
      lead_name,
      start_date,
      total,
      amount_due,
      promo_code,
      data,
      updated_at
    ) VALUES (
      ${record.id},
      ${record.confirmationCode},
      ${record.createdAt},
      ${record.status},
      ${record.packageId},
      ${summary.leadEmail},
      ${summary.leadName},
      ${summary.startDate},
      ${summary.total},
      ${summary.amountDue},
      ${summary.promoCode},
      ${record},
      NOW()
    )
    ON CONFLICT (id) DO UPDATE SET
      status = EXCLUDED.status,
      lead_email = EXCLUDED.lead_email,
      lead_name = EXCLUDED.lead_name,
      start_date = EXCLUDED.start_date,
      total = EXCLUDED.total,
      amount_due = EXCLUDED.amount_due,
      promo_code = EXCLUDED.promo_code,
      data = EXCLUDED.data,
      updated_at = NOW()
  `;
}

export async function readBookingRecord(
  bookingId: string,
): Promise<LocalBookingRecord | null> {
  if (!hasBookingDatabase()) return null;

  await ensureBookingsSchema();
  const sql = getSql();
  const rows = (await sql`
    SELECT data
    FROM bookings
    WHERE id = ${bookingId}
    LIMIT 1
  `) as Array<{ data: LocalBookingRecord }>;

  return rows[0]?.data ?? null;
}

export async function findBookingIdByConfirmationCodeInDb(
  confirmationCode: string,
): Promise<string | null> {
  if (!hasBookingDatabase()) return null;

  await ensureBookingsSchema();
  const sql = getSql();
  const normalized = normalizeConfirmationCode(confirmationCode);
  const rows = (await sql`
    SELECT id
    FROM bookings
    WHERE confirmation_code = ${normalized}
    LIMIT 1
  `) as Array<{ id: string }>;

  return rows[0]?.id ?? null;
}

export async function listBookingRecords(query?: {
  status?: LocalBookingStatus;
  q?: string;
}): Promise<BookingListEntry[]> {
  if (!hasBookingDatabase()) return [];

  await ensureBookingsSchema();
  const sql = getSql();
  const status = query?.status ?? null;
  const q = query?.q?.trim() ? `%${query.q.trim()}%` : null;

  const rows = (await sql`
    SELECT
      id,
      confirmation_code,
      created_at,
      status,
      package_id,
      lead_email,
      lead_name,
      start_date,
      total,
      amount_due,
      promo_code,
      data
    FROM bookings
    WHERE (${status}::text IS NULL OR status = ${status})
      AND (
        ${q}::text IS NULL
        OR confirmation_code ILIKE ${q}
        OR lead_email ILIKE ${q}
        OR lead_name ILIKE ${q}
        OR data->'session'->>'packageTitle' ILIKE ${q}
        OR id ILIKE ${q}
      )
    ORDER BY created_at DESC
  `) as BookingRow[];

  return rows.map(rowToListEntry);
}
