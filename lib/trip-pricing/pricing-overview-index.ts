import fs from "node:fs/promises";
import path from "node:path";
import type { PackagePricingSnapshot } from "./pricing-snapshot-types";

export const PRICING_OVERVIEW_INDEX_KV_KEY = "puffin:pricing-overview-index";

export type PackageOverviewIndexEntry = {
  updatedAt: string | null;
  snapshotCount: number;
  availabilityCount: number;
  referenceSupplierTotal: number | null;
};

export type PricingOverviewIndex = {
  updatedAt: string;
  packages: Record<string, PackageOverviewIndexEntry>;
};

function parseUpstashRedisUrl(redisUrl: string): { apiUrl: string; token: string } | null {
  try {
    const url = new URL(redisUrl);
    const token = url.password;
    const hostname = url.hostname;
    if (!token || !hostname) return null;
    if (!hostname.includes("upstash.io")) return null;
    return {
      apiUrl: `https://${hostname}`,
      token,
    };
  } catch {
    return null;
  }
}

function getKvRestCredentials(): { apiUrl: string; token: string } | null {
  const apiUrl =
    process.env.KV_REST_API_URL ??
    process.env.UPSTASH_KV_REST_API_URL ??
    process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ??
    process.env.UPSTASH_KV_REST_API_TOKEN ??
    process.env.UPSTASH_REDIS_REST_TOKEN;
  if (apiUrl && token) return { apiUrl, token };

  const redisUrl = process.env.REDIS_URL;
  if (redisUrl) return parseUpstashRedisUrl(redisUrl);

  return null;
}

function overviewIndexFilePath(): string {
  const dir =
    process.env.PRICING_SNAPSHOT_DIR ??
    path.join(process.cwd(), ".data/pricing-snapshots");
  return path.join(dir, "_overview-index.json");
}

export function findReferenceSupplierTotal(
  snapshot: PackagePricingSnapshot | null,
): number | null {
  if (!snapshot) return null;

  for (const [key, entry] of Object.entries(snapshot.prices)) {
    const [, adults, , , accTier] = key.split("|");
    if (accTier === "comfort" && adults === "2") {
      return entry.result.total;
    }
  }

  const first = Object.values(snapshot.prices)[0];
  return first?.result.total ?? null;
}

export function buildOverviewEntryFromSnapshot(
  snapshot: PackagePricingSnapshot | null,
): PackageOverviewIndexEntry {
  return {
    updatedAt: snapshot?.updatedAt ?? null,
    snapshotCount: snapshot ? Object.keys(snapshot.prices).length : 0,
    availabilityCount: snapshot
      ? Object.keys(snapshot.availability).length
      : 0,
    referenceSupplierTotal: findReferenceSupplierTotal(snapshot),
  };
}

async function readKvIndex(): Promise<PricingOverviewIndex | null> {
  const credentials = getKvRestCredentials();
  if (!credentials) return null;

  const response = await fetch(credentials.apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(["GET", PRICING_OVERVIEW_INDEX_KV_KEY]),
  });

  if (!response.ok) return null;

  const payload = (await response.json()) as { result?: string | null };
  if (!payload.result) return null;

  return JSON.parse(payload.result) as PricingOverviewIndex;
}

async function writeKvIndex(index: PricingOverviewIndex): Promise<boolean> {
  const credentials = getKvRestCredentials();
  if (!credentials) return false;

  const response = await fetch(credentials.apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify([
      "SET",
      PRICING_OVERVIEW_INDEX_KV_KEY,
      JSON.stringify(index),
    ]),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error(
      `KV 寫入總覽索引失敗（${response.status}）`,
      detail.slice(0, 200),
    );
    return false;
  }

  return true;
}

async function readFileIndex(): Promise<PricingOverviewIndex | null> {
  try {
    const raw = await fs.readFile(overviewIndexFilePath(), "utf8");
    return JSON.parse(raw) as PricingOverviewIndex;
  } catch {
    return null;
  }
}

async function writeFileIndex(index: PricingOverviewIndex): Promise<void> {
  const filePath = overviewIndexFilePath();
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(index, null, 2), "utf8");
}

export async function readPricingOverviewIndex(): Promise<PricingOverviewIndex | null> {
  const kvIndex = await readKvIndex();
  if (kvIndex) return kvIndex;
  return readFileIndex();
}

export async function writePricingOverviewIndex(
  index: PricingOverviewIndex,
): Promise<void> {
  const credentials = getKvRestCredentials();
  if (credentials) {
    const ok = await writeKvIndex(index);
    if (!ok) {
      throw new Error("無法寫入計價總覽索引至 KV");
    }
  }

  if (!credentials || process.env.SYNC_PRICING_CLI === "1") {
    await writeFileIndex(index);
  }
}

export async function upsertOverviewIndexEntry(
  packageId: string,
  entry: PackageOverviewIndexEntry,
): Promise<void> {
  const index = (await readPricingOverviewIndex()) ?? {
    updatedAt: new Date().toISOString(),
    packages: {},
  };

  index.packages[packageId] = entry;
  index.updatedAt = new Date().toISOString();
  await writePricingOverviewIndex(index);
}
