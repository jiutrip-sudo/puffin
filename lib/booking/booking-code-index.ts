import fs from "node:fs/promises";
import path from "node:path";
import { normalizeConfirmationCode } from "./normalize-confirmation-code";

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
  return null;
}

function bookingCodeKvKey(confirmationCode: string): string {
  return `puffin:booking:code:${normalizeConfirmationCode(confirmationCode)}`;
}

function bookingsDir(): string {
  return (
    process.env.BOOKING_STORE_DIR ?? path.join(process.cwd(), ".data/bookings")
  );
}

function bookingIndexPath(): string {
  return path.join(bookingsDir(), "index.jsonl");
}

async function kvGet(key: string): Promise<string | null> {
  const credentials = getKvRestCredentials();
  if (!credentials) return null;

  const response = await fetch(credentials.apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(["GET", key]),
  });

  if (!response.ok) return null;

  const payload = (await response.json()) as { result?: string | null };
  return payload.result ?? null;
}

async function kvSet(key: string, value: string): Promise<boolean> {
  const credentials = getKvRestCredentials();
  if (!credentials) return false;

  const response = await fetch(credentials.apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(["SET", key, value]),
  });

  return response.ok;
}

async function findBookingIdFromFileIndex(
  confirmationCode: string,
): Promise<string | null> {
  const normalized = normalizeConfirmationCode(confirmationCode);

  try {
    const raw = await fs.readFile(bookingIndexPath(), "utf8");
    const lines = raw.split("\n").filter(Boolean);

    for (const line of lines) {
      try {
        const entry = JSON.parse(line) as {
          id?: string;
          confirmationCode?: string;
        };
        if (
          entry.id &&
          entry.confirmationCode &&
          normalizeConfirmationCode(entry.confirmationCode) === normalized
        ) {
          return entry.id;
        }
      } catch {
        continue;
      }
    }
  } catch {
    return null;
  }

  return null;
}

export async function writeBookingCodeIndex(
  confirmationCode: string,
  bookingId: string,
): Promise<void> {
  const key = bookingCodeKvKey(confirmationCode);
  const kvOk = await kvSet(key, bookingId);
  if (!kvOk && getKvRestCredentials()) {
    console.warn("訂單號索引 KV 寫入失敗", confirmationCode);
  }
}

export async function findBookingIdByConfirmationCode(
  confirmationCode: string,
): Promise<string | null> {
  const key = bookingCodeKvKey(confirmationCode);
  const fromKv = await kvGet(key);
  if (fromKv) return fromKv;

  return findBookingIdFromFileIndex(confirmationCode);
}
