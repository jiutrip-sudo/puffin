import { NextResponse } from "next/server";
import {
  filterBookingEntries,
  listBookingEntries,
} from "@/lib/booking/booking-list";
import type { LocalBookingStatus } from "@/lib/booking/types";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") ?? undefined;
    const statusParam = url.searchParams.get("status");
    const status =
      statusParam === "pending_payment" ||
      statusParam === "payment_confirmed" ||
      statusParam === "cancelled"
        ? (statusParam as LocalBookingStatus)
        : undefined;

    const entries = await listBookingEntries();
    const filtered = filterBookingEntries(entries, { q, status });

    return NextResponse.json({
      bookings: filtered,
      total: filtered.length,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "讀取訂單列表失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
