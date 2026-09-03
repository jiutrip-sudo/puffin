import { getSql, hasBookingDatabase } from "./client";

let schemaReady: Promise<void> | null = null;

export async function ensureBookingsSchema(): Promise<void> {
  if (!hasBookingDatabase()) return;

  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = getSql();
      await sql`
        CREATE TABLE IF NOT EXISTS bookings (
          id TEXT PRIMARY KEY,
          confirmation_code TEXT NOT NULL UNIQUE,
          created_at TIMESTAMPTZ NOT NULL,
          status TEXT NOT NULL,
          package_id TEXT NOT NULL,
          lead_email TEXT NOT NULL DEFAULT '',
          lead_name TEXT NOT NULL DEFAULT '',
          start_date DATE NOT NULL,
          total INTEGER NOT NULL,
          amount_due INTEGER NOT NULL,
          promo_code TEXT,
          data JSONB NOT NULL,
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;
      await sql`
        CREATE INDEX IF NOT EXISTS bookings_created_at_idx
        ON bookings (created_at DESC)
      `;
      await sql`
        CREATE INDEX IF NOT EXISTS bookings_status_idx ON bookings (status)
      `;
      await sql`
        CREATE INDEX IF NOT EXISTS bookings_lead_email_idx ON bookings (lead_email)
      `;
    })();
  }

  await schemaReady;
}
