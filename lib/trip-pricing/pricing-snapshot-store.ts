import fs from "node:fs/promises";
import path from "node:path";
import {
  packageSnapshotKvKey,
} from "./pricing-snapshot-keys";
import {
  buildOverviewEntryFromSnapshot,
  upsertOverviewIndexEntry,
} from "./pricing-overview-index";
import type { PackagePricingSnapshot } from "./pricing-snapshot-types";

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

function snapshotFilePath(packageId: string): string {
  const dir =
    process.env.PRICING_SNAPSHOT_DIR ??
    path.join(process.cwd(), ".data/pricing-snapshots");
  return path.join(dir, `${packageId}.json`);
}

async function readKvSnapshot(packageId: string): Promise<PackagePricingSnapshot | null> {
  const credentials = getKvRestCredentials();
  if (!credentials) return null;

  const response = await fetch(credentials.apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(["GET", packageSnapshotKvKey(packageId)]),
  });

  if (!response.ok) return null;

  const payload = (await response.json()) as { result?: string | null };
  if (!payload.result) return null;

  return JSON.parse(payload.result) as PackagePricingSnapshot;
}

async function writeKvSnapshot(snapshot: PackagePricingSnapshot): Promise<boolean> {
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
      packageSnapshotKvKey(snapshot.packageId),
      JSON.stringify(snapshot),
    ]),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error(
      `KV 寫入失敗（${response.status}）`,
      detail.slice(0, 200),
    );
    return false;
  }

  return true;
}

async function readFileSnapshot(packageId: string): Promise<PackagePricingSnapshot | null> {
  try {
    const raw = await fs.readFile(snapshotFilePath(packageId), "utf8");
    return JSON.parse(raw) as PackagePricingSnapshot;
  } catch {
    return null;
  }
}

async function writeFileSnapshot(snapshot: PackagePricingSnapshot): Promise<void> {
  const filePath = snapshotFilePath(snapshot.packageId);
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(snapshot, null, 2), "utf8");
}

export async function readPackagePricingSnapshot(
  packageId: string,
): Promise<PackagePricingSnapshot | null> {
  const preferLocal = process.env.PRICING_SNAPSHOT_PREFER_LOCAL === "1";

  if (preferLocal) {
    const fileSnapshot = await readFileSnapshot(packageId);
    if (fileSnapshot) return fileSnapshot;
  }

  const kvSnapshot = await readKvSnapshot(packageId);
  if (kvSnapshot) return kvSnapshot;
  return readFileSnapshot(packageId);
}

export async function writePackagePricingSnapshot(
  snapshot: PackagePricingSnapshot,
): Promise<void> {
  const credentials = getKvRestCredentials();
  if (credentials) {
    const ok = await writeKvSnapshot(snapshot);
    if (!ok) {
      throw new Error("無法寫入計價快照至 KV");
    }
  }

  if (!credentials || process.env.SYNC_PRICING_CLI === "1") {
    await writeFileSnapshot(snapshot);
  }

  await upsertOverviewIndexEntry(
    snapshot.packageId,
    buildOverviewEntryFromSnapshot(snapshot),
  );
}

export function emptyPackageSnapshot(packageId: string): PackagePricingSnapshot {
  return {
    packageId,
    updatedAt: new Date().toISOString(),
    prices: {},
    availability: {},
  };
}
