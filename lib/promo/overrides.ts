import fs from "node:fs/promises";
import path from "node:path";
import { kvCommand, getKvRestCredentials } from "./kv";
import { normalizePromoCode } from "./registry";

export type PromoOperationalOverride = {
  active?: boolean;
  maxUses?: number | null;
  validUntil?: string | null;
  updatedAt: string;
};

const OVERRIDES_KV_KEY = "puffin:promo:overrides";

function overridesFilePath(): string {
  const dir =
    process.env.PROMO_OVERRIDE_DIR ??
    path.join(process.cwd(), ".data/promo-overrides");
  return path.join(dir, "overrides.json");
}

async function readOverridesFile(): Promise<
  Record<string, PromoOperationalOverride>
> {
  try {
    const raw = await fs.readFile(overridesFilePath(), "utf8");
    return JSON.parse(raw) as Record<string, PromoOperationalOverride>;
  } catch {
    return {};
  }
}

async function writeOverridesFile(
  overrides: Record<string, PromoOperationalOverride>,
): Promise<void> {
  const filePath = overridesFilePath();
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(overrides, null, 2), "utf8");
}

async function readOverridesKv(): Promise<
  Record<string, PromoOperationalOverride> | null
> {
  const result = await kvCommand(["GET", OVERRIDES_KV_KEY]);
  if (result == null || result === "") return null;
  if (typeof result !== "string") return null;
  return JSON.parse(result) as Record<string, PromoOperationalOverride>;
}

async function writeOverridesKv(
  overrides: Record<string, PromoOperationalOverride>,
): Promise<boolean> {
  const result = await kvCommand([
    "SET",
    OVERRIDES_KV_KEY,
    JSON.stringify(overrides),
  ]);
  return result === "OK";
}

export async function getAllPromoOverrides(): Promise<
  Record<string, PromoOperationalOverride>
> {
  const kvOverrides = await readOverridesKv();
  if (kvOverrides) return kvOverrides;
  return readOverridesFile();
}

export async function getPromoOverride(
  code: string,
): Promise<PromoOperationalOverride | null> {
  const normalized = normalizePromoCode(code);
  const overrides = await getAllPromoOverrides();
  return overrides[normalized] ?? null;
}

export async function setPromoOverride(
  code: string,
  patch: {
    active?: boolean;
    maxUses?: number | null;
    validUntil?: string | null;
  },
): Promise<PromoOperationalOverride> {
  const normalized = normalizePromoCode(code);
  const overrides = await getAllPromoOverrides();
  const current = overrides[normalized] ?? { updatedAt: new Date().toISOString() };

  const next: PromoOperationalOverride = {
    ...current,
    updatedAt: new Date().toISOString(),
  };

  if (patch.active !== undefined) {
    next.active = patch.active;
  }
  if (patch.maxUses !== undefined) {
    next.maxUses = patch.maxUses;
  }
  if (patch.validUntil !== undefined) {
    next.validUntil = patch.validUntil;
  }

  overrides[normalized] = next;

  const credentials = getKvRestCredentials();
  if (credentials) {
    const ok = await writeOverridesKv(overrides);
    if (!ok) {
      throw new Error("無法寫入優惠碼營運覆寫至 KV");
    }
  }

  if (!credentials || process.env.PROMO_OVERRIDE_CLI === "1") {
    await writeOverridesFile(overrides);
  }

  return next;
}
