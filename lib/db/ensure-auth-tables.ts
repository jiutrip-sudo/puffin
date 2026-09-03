import { ensureAuthSchema } from "@/lib/db/auth-schema";
import { getSql, hasDatabase } from "@/lib/db/client";

let schemaReady: Promise<void> | null = null;

export async function ensureAuthTables(): Promise<void> {
  if (!hasDatabase()) return;

  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = getSql();
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
      await sql`
        ALTER TABLE users
        ADD COLUMN IF NOT EXISTS role text NOT NULL DEFAULT 'ops'
      `;
      await sql`
        ALTER TABLE users
        ADD COLUMN IF NOT EXISTS "adminUpdatedAt" timestamptz
      `;
    })();
  }

  await schemaReady;
}

// Re-export for scripts
export { ensureAuthSchema };
