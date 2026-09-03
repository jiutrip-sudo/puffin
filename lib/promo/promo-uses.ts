import fs from "node:fs/promises";
import path from "node:path";
import { listBookingEntries } from "@/lib/booking/booking-list";
import { kvCommand } from "./kv";
import { normalizePromoCode } from "./registry";

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

async function kvCommandLocal(command: unknown[]): Promise<unknown> {
  return kvCommand(command);
}

/** 讀取優惠碼已使用次數（成功建立訂單） */
export async function getPromoUseCount(code: string): Promise<number> {
  const normalized = normalizePromoCode(code);
  const kvResult = await kvCommandLocal(["GET", promoUsesKvKey(normalized)]);

  if (kvResult !== null && kvResult !== undefined) {
    const parsed = Number(kvResult);
    if (!Number.isNaN(parsed)) return parsed;
  }

  return countPromoUsesFromFile(normalized);
}

/** 訂單成立後遞增使用次數 */
export async function incrementPromoUseCount(code: string): Promise<void> {
  const normalized = normalizePromoCode(code);
  await kvCommandLocal(["INCR", promoUsesKvKey(normalized)]);
}

/** 讀取同一 email 已使用次數 */
export async function getPromoUseCountByEmail(
  code: string,
  email: string,
): Promise<number> {
  const normalized = normalizePromoCode(code);
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) return 0;

  const entries = await listBookingEntries();
  return entries.filter(
    (entry) =>
      entry.promoCode &&
      normalizePromoCode(entry.promoCode) === normalized &&
      entry.leadEmail.trim().toLowerCase() === normalizedEmail,
  ).length;
}
