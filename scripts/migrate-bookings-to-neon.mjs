/**
 * 將本機 `.data/bookings/` 匯入 Neon。
 *
 * 用法：
 *   npm run db:migrate-bookings
 *
 * 需設定 DATABASE_URL（建議用 direct connection，非 pooler）。
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

async function loadEnvFile(relativePath) {
  try {
    const raw = await fs.readFile(path.join(rootDir, relativePath), "utf8");
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch {
    // optional env file
  }
}

function bookingsDir() {
  return (
    process.env.BOOKING_STORE_DIR ?? path.join(rootDir, ".data/bookings")
  );
}

async function listFileRecords() {
  const indexPath = path.join(bookingsDir(), "index.jsonl");
  const raw = await fs.readFile(indexPath, "utf8");
  const lines = raw.split("\n").filter(Boolean);
  const records = [];

  for (const line of lines) {
    const meta = JSON.parse(line);
    if (!meta.id) continue;
    const filePath = path.join(bookingsDir(), `${meta.id}.json`);
    const bookingRaw = await fs.readFile(filePath, "utf8");
    records.push(JSON.parse(bookingRaw));
  }

  return records;
}

async function ensureSchema(sql) {
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
}

function summarizeLead(record) {
  const lead =
    record.session.travelers.find((traveler) => traveler.type === "ADULT") ??
    record.session.travelers[0];

  return {
    leadEmail: lead?.email?.trim() ?? "",
    leadName: [lead?.firstName, lead?.lastName].filter(Boolean).join(" ").trim(),
    startDate: record.session.startDate,
    total: record.pricing.total,
    amountDue: record.pricing.amountDue,
    promoCode:
      record.pricing.promoCode ?? record.session.promoCode?.trim() ?? null,
  };
}

async function upsertRecord(sql, record) {
  const summary = summarizeLead(record);

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

async function main() {
  await loadEnvFile(".env.local");
  await loadEnvFile(".env");

  const databaseUrl = process.env.DATABASE_URL?.trim();
  if (!databaseUrl) {
    console.error("請設定 DATABASE_URL");
    process.exit(1);
  }

  const sql = neon(databaseUrl);
  await ensureSchema(sql);

  const records = await listFileRecords();

  if (records.length === 0) {
    console.log("本機沒有可匯入的訂單。");
    return;
  }

  for (const record of records) {
    await upsertRecord(sql, record);
    console.log(`已匯入 ${record.confirmationCode} (${record.id})`);
  }

  console.log(`完成：共匯入 ${records.length} 筆訂單至 Neon。`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
