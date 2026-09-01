import fs from "node:fs/promises";
import path from "node:path";
import { normalizePromoCode } from "./registry";

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

function promoUsesKvKey(code: string): string {
  return `puffin:promo:uses:${normalizePromoCode(code)}`;
}

function bookingsIndexPath(): string {
  const dir =
    process.env.BOOKING_STORE_DIR ?? path.join(process.cwd(), ".data/bookings");
  return path.join(dir, "index.jsonl");
}

async function countPromoUsesFromFile(code: string): Promise<number> {
  const normalized = normalizePromoCode(code);
  try {
    const raw = await fs.readFile(bookingsIndexPath(), "utf8");
    const lines = raw.split("\n").filter(Boolean);
    let count = 0;

    for (const line of lines) {
      try {
        const entry = JSON.parse(line) as { id?: string };
        if (!entry.id) continue;
        const filePath = path.join(
          path.dirname(bookingsIndexPath()),
          `${entry.id}.json`,
        );
        const bookingRaw = await fs.readFile(filePath, "utf8");
        const booking = JSON.parse(bookingRaw) as {
          session?: { promoCode?: string };
          pricing?: { promoCode?: string | null };
        };
        const bookingCode =
          booking.pricing?.promoCode?.trim() ||
          booking.session?.promoCode?.trim() ||
          "";
        if (normalizePromoCode(bookingCode) === normalized) {
          count += 1;
        }
      } catch {
        // skip broken lines / missing files
      }
    }

    return count;
  } catch {
    return 0;
  }
}

async function kvCommand(command: unknown[]): Promise<unknown> {
  const credentials = getKvRestCredentials();
  if (!credentials) return null;

  const response = await fetch(credentials.apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(command),
  });

  if (!response.ok) return null;

  const payload = (await response.json()) as { result?: unknown };
  return payload.result ?? null;
}

/** 讀取優惠碼已使用次數（成功建立訂單） */
export async function getPromoUseCount(code: string): Promise<number> {
  const normalized = normalizePromoCode(code);
  const kvResult = await kvCommand(["GET", promoUsesKvKey(normalized)]);

  if (kvResult !== null && kvResult !== undefined) {
    const parsed = Number(kvResult);
    if (!Number.isNaN(parsed)) return parsed;
  }

  return countPromoUsesFromFile(normalized);
}

/** 訂單成立後遞增使用次數 */
export async function incrementPromoUseCount(code: string): Promise<void> {
  const normalized = normalizePromoCode(code);
  const credentials = getKvRestCredentials();
  if (!credentials) return;

  await kvCommand(["INCR", promoUsesKvKey(normalized)]);
}
