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
    // optional
  }
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
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id text PRIMARY KEY DEFAULT gen_random_uuid()::text,
      name text,
      email text UNIQUE,
      "emailVerified" timestamptz,
      image text
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS accounts (
      id text PRIMARY KEY DEFAULT gen_random_uuid()::text,
      "userId" text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      type text NOT NULL,
      provider text NOT NULL,
      "providerAccountId" text NOT NULL,
      refresh_token text,
      access_token text,
      expires_at bigint,
      id_token text,
      scope text,
      session_state text,
      token_type text,
      UNIQUE (provider, "providerAccountId")
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS sessions (
      id text PRIMARY KEY DEFAULT gen_random_uuid()::text,
      "userId" text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      expires timestamptz NOT NULL,
      "sessionToken" text NOT NULL UNIQUE
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS verification_token (
      identifier text NOT NULL,
      expires timestamptz NOT NULL,
      token text NOT NULL,
      PRIMARY KEY (identifier, token)
    )
  `;

  console.log("Auth.js 資料表已就緒。");
  await sql`
    ALTER TABLE users
    ADD COLUMN IF NOT EXISTS role text NOT NULL DEFAULT 'ops'
  `;
  await sql`
    ALTER TABLE users
    ADD COLUMN IF NOT EXISTS "adminUpdatedAt" timestamptz
  `;
  console.log("users.role 欄位已就緒。");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
