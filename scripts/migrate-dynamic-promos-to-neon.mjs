/**
 * 將本機 dynamic.json 或 KV 動態優惠碼匯入 Neon。
 *
 * 用法：
 *   npm run db:migrate-dynamic-promos
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const DYNAMIC_KV_KEY = "puffin:promo:dynamic";

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
    // optional
  }
}

function getKvRestCredentials() {
  const apiUrl =
    process.env.KV_REST_API_URL ??
    process.env.UPSTASH_KV_REST_API_URL ??
    process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ??
    process.env.UPSTASH_KV_REST_API_TOKEN ??
    process.env.UPSTASH_REDIS_REST_TOKEN;
  if (apiUrl && token) return { apiUrl, token };
  return null;
}

async function readDynamicKv() {
  const credentials = getKvRestCredentials();
  if (!credentials) return null;

  const response = await fetch(credentials.apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(["GET", DYNAMIC_KV_KEY]),
  });

  if (!response.ok) return null;
  const payload = await response.json();
  if (!payload.result) return null;
  return JSON.parse(String(payload.result));
}

async function readDynamicFile() {
  const filePath = path.join(
    process.env.PROMO_OVERRIDE_DIR ?? path.join(rootDir, ".data/promo-overrides"),
    "dynamic.json",
  );
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function ensureSchema(sql) {
  await sql`
    CREATE TABLE IF NOT EXISTS promo_codes_dynamic (
      code TEXT PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL,
      data JSONB NOT NULL
    )
  `;
}

async function upsertRecord(sql, record) {
  await sql`
    INSERT INTO promo_codes_dynamic (code, created_at, updated_at, data)
    VALUES (
      ${record.code},
      ${record.createdAt},
      ${record.updatedAt},
      ${record}
    )
    ON CONFLICT (code) DO UPDATE SET
      updated_at = EXCLUDED.updated_at,
      data = EXCLUDED.data
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

  const kvPromos = await readDynamicKv();
  const filePromos = await readDynamicFile();
  const merged = { ...filePromos, ...kvPromos };
  const records = Object.values(merged);

  if (records.length === 0) {
    console.log("沒有可匯入的動態優惠碼。");
    return;
  }

  const sql = neon(databaseUrl);
  await ensureSchema(sql);

  for (const record of records) {
    await upsertRecord(sql, record);
    console.log(`已匯入 ${record.code}`);
  }

  console.log(`完成：共匯入 ${records.length} 筆動態優惠碼至 Neon。`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
