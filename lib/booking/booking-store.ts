import fs from "node:fs/promises";
import path from "node:path";
import type { LocalBookingRecord } from "./types";

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

function bookingKvKey(bookingId: string): string {
  return `puffin:booking:${bookingId}`;
}

function bookingsDir(): string {
  return (
    process.env.BOOKING_STORE_DIR ?? path.join(process.cwd(), ".data/bookings")
  );
}

function bookingFilePath(bookingId: string): string {
  return path.join(bookingsDir(), `${bookingId}.json`);
}

function bookingIndexPath(): string {
  return path.join(bookingsDir(), "index.jsonl");
}

async function readKvBooking(bookingId: string): Promise<LocalBookingRecord | null> {
  const credentials = getKvRestCredentials();
  if (!credentials) return null;

  const response = await fetch(credentials.apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(["GET", bookingKvKey(bookingId)]),
  });

  if (!response.ok) return null;

  const payload = (await response.json()) as { result?: string | null };
  if (!payload.result) return null;

  return JSON.parse(payload.result) as LocalBookingRecord;
}

async function writeKvBooking(record: LocalBookingRecord): Promise<boolean> {
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
      bookingKvKey(record.id),
      JSON.stringify(record),
    ]),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error(`預訂 KV 寫入失敗（${response.status}）`, detail.slice(0, 200));
    return false;
  }

  return true;
}

async function readFileBooking(bookingId: string): Promise<LocalBookingRecord | null> {
  try {
    const raw = await fs.readFile(bookingFilePath(bookingId), "utf8");
    return JSON.parse(raw) as LocalBookingRecord;
  } catch {
    return null;
  }
}

async function writeFileBooking(record: LocalBookingRecord): Promise<void> {
  const filePath = bookingFilePath(record.id);
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(record, null, 2), "utf8");
}

async function appendFileBookingIndex(record: LocalBookingRecord): Promise<void> {
  const line = JSON.stringify({
    id: record.id,
    confirmationCode: record.confirmationCode,
    createdAt: record.createdAt,
    packageId: record.packageId,
    status: record.status,
  });
  await fs.mkdir(bookingsDir(), { recursive: true });
  await fs.appendFile(bookingIndexPath(), `${line}\n`, "utf8");
}

export async function readLocalBooking(
  bookingId: string,
): Promise<LocalBookingRecord | null> {
  const kvRecord = await readKvBooking(bookingId);
  if (kvRecord) return kvRecord;
  return readFileBooking(bookingId);
}

export async function persistLocalBooking(
  record: LocalBookingRecord,
  options?: { appendIndex?: boolean },
): Promise<void> {
  const credentials = getKvRestCredentials();
  if (credentials) {
    const ok = await writeKvBooking(record);
    if (!ok) {
      throw new Error("無法寫入預訂至 KV");
    }
  }

  await writeFileBooking(record);
  if (options?.appendIndex) {
    await appendFileBookingIndex(record);
  }
}

export async function writeLocalBooking(record: LocalBookingRecord): Promise<void> {
  await persistLocalBooking(record, { appendIndex: true });
}

export async function updateLocalBooking(
  bookingId: string,
  patch: Partial<Pick<LocalBookingRecord, "status" | "email">>,
): Promise<LocalBookingRecord | null> {
  const existing = await readLocalBooking(bookingId);
  if (!existing) return null;

  const updated: LocalBookingRecord = {
    ...existing,
    ...patch,
    email: patch.email ?? existing.email,
  };

  await persistLocalBooking(updated);
  return updated;
}
