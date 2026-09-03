import { neon } from "@neondatabase/serverless";

export function getDatabaseUrl(): string | null {
  return process.env.DATABASE_URL?.trim() || null;
}

export function hasDatabase(): boolean {
  return Boolean(getDatabaseUrl());
}

/** @deprecated 請改用 hasDatabase */
export const hasBookingDatabase = hasDatabase;

export function getSql() {
  const databaseUrl = getDatabaseUrl();
  if (!databaseUrl) {
    throw new Error("DATABASE_URL 未設定");
  }
  return neon(databaseUrl);
}
