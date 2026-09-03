import { getSql, hasDatabase } from "./client";

let schemaReady: Promise<void> | null = null;

export async function ensurePromoSchema(): Promise<void> {
  if (!hasDatabase()) return;

  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = getSql();
      await sql`
        CREATE TABLE IF NOT EXISTS promo_codes_dynamic (
          code TEXT PRIMARY KEY,
          created_at TIMESTAMPTZ NOT NULL,
          updated_at TIMESTAMPTZ NOT NULL,
          data JSONB NOT NULL
        )
      `;
      await sql`
        CREATE INDEX IF NOT EXISTS promo_codes_dynamic_updated_at_idx
        ON promo_codes_dynamic (updated_at DESC)
      `;
    })();
  }

  await schemaReady;
}
