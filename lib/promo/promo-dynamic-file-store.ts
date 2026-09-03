import fs from "node:fs/promises";
import path from "node:path";
import type { DynamicPromoRecord } from "./dynamic-types";

function promoOverrideDir(): string {
  return (
    process.env.PROMO_OVERRIDE_DIR ??
    path.join(process.cwd(), ".data/promo-overrides")
  );
}

function dynamicFilePath(): string {
  return path.join(promoOverrideDir(), "dynamic.json");
}

export async function readDynamicPromoFileMap(): Promise<
  Record<string, DynamicPromoRecord>
> {
  try {
    const raw = await fs.readFile(dynamicFilePath(), "utf8");
    return JSON.parse(raw) as Record<string, DynamicPromoRecord>;
  } catch {
    return {};
  }
}

export async function writeDynamicPromoFileMap(
  promos: Record<string, DynamicPromoRecord>,
): Promise<void> {
  const filePath = dynamicFilePath();
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(promos, null, 2), "utf8");
}

export async function listDynamicPromosFromFile(): Promise<DynamicPromoRecord[]> {
  const promos = await readDynamicPromoFileMap();
  return Object.values(promos).sort((a, b) => a.code.localeCompare(b.code));
}

export async function getDynamicPromoFromFile(
  code: string,
): Promise<DynamicPromoRecord | null> {
  const promos = await readDynamicPromoFileMap();
  return promos[code] ?? null;
}

export async function persistDynamicPromoToFile(
  record: DynamicPromoRecord,
): Promise<void> {
  const promos = await readDynamicPromoFileMap();
  promos[record.code] = record;
  await writeDynamicPromoFileMap(promos);
}

export async function deleteDynamicPromoFromFile(code: string): Promise<void> {
  const promos = await readDynamicPromoFileMap();
  if (!promos[code]) {
    throw new Error("找不到動態優惠碼");
  }
  delete promos[code];
  await writeDynamicPromoFileMap(promos);
}
