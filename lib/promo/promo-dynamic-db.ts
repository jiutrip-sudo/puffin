import { getSql, hasDatabase } from "@/lib/db/client";
import { ensurePromoSchema } from "@/lib/db/promo-schema";
import type { PromoCodeDefinition } from "./types";
import type { DynamicPromoRecord } from "./dynamic-types";

type DynamicPromoRow = {
  code: string;
  created_at: string | Date;
  updated_at: string | Date;
  data: DynamicPromoRecord;
};

function toIsoString(value: string | Date): string {
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

function rowToRecord(row: DynamicPromoRow): DynamicPromoRecord {
  const record = row.data;
  return {
    ...record,
    code: row.code,
    createdAt: record.createdAt ?? toIsoString(row.created_at),
    updatedAt: record.updatedAt ?? toIsoString(row.updated_at),
  };
}

export async function listDynamicPromosFromDb(): Promise<DynamicPromoRecord[]> {
  if (!hasDatabase()) return [];

  await ensurePromoSchema();
  const sql = getSql();
  const rows = (await sql`
    SELECT code, created_at, updated_at, data
    FROM promo_codes_dynamic
    ORDER BY code ASC
  `) as DynamicPromoRow[];

  return rows.map(rowToRecord);
}

export async function getDynamicPromoFromDb(
  code: string,
): Promise<DynamicPromoRecord | null> {
  if (!hasDatabase()) return null;

  await ensurePromoSchema();
  const sql = getSql();
  const rows = (await sql`
    SELECT code, created_at, updated_at, data
    FROM promo_codes_dynamic
    WHERE code = ${code}
    LIMIT 1
  `) as DynamicPromoRow[];

  return rows[0] ? rowToRecord(rows[0]) : null;
}

export async function insertDynamicPromoInDb(
  record: DynamicPromoRecord,
): Promise<void> {
  if (!hasDatabase()) return;

  await ensurePromoSchema();
  const sql = getSql();

  try {
    await sql`
      INSERT INTO promo_codes_dynamic (code, created_at, updated_at, data)
      VALUES (
        ${record.code},
        ${record.createdAt},
        ${record.updatedAt},
        ${record}
      )
    `;
  } catch (error) {
    if (error instanceof Error && /duplicate key|unique/i.test(error.message)) {
      throw new Error("優惠碼已存在");
    }
    throw error;
  }
}

export async function updateDynamicPromoInDb(
  record: DynamicPromoRecord,
): Promise<void> {
  if (!hasDatabase()) return;

  await ensurePromoSchema();
  const sql = getSql();
  const rows = (await sql`
    UPDATE promo_codes_dynamic
    SET
      updated_at = ${record.updatedAt},
      data = ${record}
    WHERE code = ${record.code}
    RETURNING code
  `) as Array<{ code: string }>;

  if (!rows.length) {
    throw new Error("找不到動態優惠碼");
  }
}

export async function deleteDynamicPromoFromDb(code: string): Promise<void> {
  if (!hasDatabase()) return;

  await ensurePromoSchema();
  const sql = getSql();
  const rows = (await sql`
    DELETE FROM promo_codes_dynamic
    WHERE code = ${code}
    RETURNING code
  `) as Array<{ code: string }>;

  if (!rows.length) {
    throw new Error("找不到動態優惠碼");
  }
}

export function buildDynamicPromoRecord(
  definition: PromoCodeDefinition,
  options?: { createdAt?: string; updatedAt?: string },
): DynamicPromoRecord {
  const now = new Date().toISOString();
  return {
    ...definition,
    createdAt: options?.createdAt ?? now,
    updatedAt: options?.updatedAt ?? now,
  };
}
