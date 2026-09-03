import { hasDatabase } from "@/lib/db/client";
import {
  buildDynamicPromoRecord,
  deleteDynamicPromoFromDb,
  getDynamicPromoFromDb,
  insertDynamicPromoInDb,
  listDynamicPromosFromDb,
  updateDynamicPromoInDb,
} from "./promo-dynamic-db";
import {
  deleteDynamicPromoFromFile,
  getDynamicPromoFromFile,
  listDynamicPromosFromFile,
  persistDynamicPromoToFile,
} from "./promo-dynamic-file-store";
import { normalizePromoCode } from "./registry";
import type { DynamicPromoRecord } from "./dynamic-types";
import type { PromoCodeDefinition } from "./types";

export type { DynamicPromoRecord } from "./dynamic-types";

function isServerlessRuntime(): boolean {
  return Boolean(
    process.env.VERCEL ||
      process.env.AWS_LAMBDA_FUNCTION_NAME ||
      process.env.AWS_EXECUTION_ENV,
  );
}

async function mirrorToFile(record: DynamicPromoRecord): Promise<void> {
  try {
    await persistDynamicPromoToFile(record);
  } catch (error) {
    console.warn("動態優惠碼本機備份寫入失敗", error);
  }
}

export async function getAllDynamicPromos(): Promise<DynamicPromoRecord[]> {
  if (hasDatabase()) {
    return listDynamicPromosFromDb();
  }
  return listDynamicPromosFromFile();
}

export async function getDynamicPromo(
  code: string,
): Promise<DynamicPromoRecord | null> {
  const normalized = normalizePromoCode(code);
  if (hasDatabase()) {
    return getDynamicPromoFromDb(normalized);
  }
  return getDynamicPromoFromFile(normalized);
}

export async function createDynamicPromo(
  definition: PromoCodeDefinition,
): Promise<DynamicPromoRecord> {
  const normalized = normalizePromoCode(definition.code);
  const record = buildDynamicPromoRecord({ ...definition, code: normalized });

  if (hasDatabase()) {
    await insertDynamicPromoInDb(record);
    if (!isServerlessRuntime()) {
      await mirrorToFile(record);
    }
    return record;
  }

  const existing = await getDynamicPromoFromFile(normalized);
  if (existing) {
    throw new Error("優惠碼已存在");
  }

  await persistDynamicPromoToFile(record);
  return record;
}

export async function updateDynamicPromo(
  code: string,
  definition: PromoCodeDefinition,
): Promise<DynamicPromoRecord> {
  const normalized = normalizePromoCode(code);

  if (hasDatabase()) {
    const current = await getDynamicPromoFromDb(normalized);
    if (!current) {
      throw new Error("找不到動態優惠碼");
    }

    const record = buildDynamicPromoRecord(
      { ...definition, code: normalized },
      { createdAt: current.createdAt },
    );
    await updateDynamicPromoInDb(record);
    if (!isServerlessRuntime()) {
      await mirrorToFile(record);
    }
    return record;
  }

  const current = await getDynamicPromoFromFile(normalized);
  if (!current) {
    throw new Error("找不到動態優惠碼");
  }

  const record = buildDynamicPromoRecord(
    { ...definition, code: normalized },
    { createdAt: current.createdAt },
  );
  await persistDynamicPromoToFile(record);
  return record;
}

export async function deleteDynamicPromo(code: string): Promise<void> {
  const normalized = normalizePromoCode(code);

  if (hasDatabase()) {
    await deleteDynamicPromoFromDb(normalized);
    if (!isServerlessRuntime()) {
      try {
        await deleteDynamicPromoFromFile(normalized);
      } catch {
        // 本機備份可能本來就沒有這筆
      }
    }
    return;
  }

  await deleteDynamicPromoFromFile(normalized);
}
