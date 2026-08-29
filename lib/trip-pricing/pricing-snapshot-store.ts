import fs from "node:fs/promises";
import path from "node:path";
import {
  packageSnapshotKvKey,
} from "./pricing-snapshot-keys";
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

  return response.ok;
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
  const kvSnapshot = await readKvSnapshot(packageId);
  if (kvSnapshot) return kvSnapshot;
  return readFileSnapshot(packageId);
}

export async function writePackagePricingSnapshot(
  snapshot: PackagePricingSnapshot,
): Promise<void> {
  if (getKvRestCredentials()) {
    await writeKvSnapshot(snapshot);
    return;
  }
  await writeFileSnapshot(snapshot);
}

export function emptyPackageSnapshot(packageId: string): PackagePricingSnapshot {
  return {
    packageId,
    updatedAt: new Date().toISOString(),
    prices: {},
    availability: {},
  };
}
