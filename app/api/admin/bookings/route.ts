import { NextResponse } from "next/server";
import { listBookingEntries } from "@/lib/booking/booking-list";
import type { LocalBookingStatus } from "@/lib/booking/types";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") ?? undefined;
    const statusParam = url.searchParams.get("status");
    const status =
      statusParam === "awaiting_supplier" ||
      statusParam === "pending_payment" ||
      statusParam === "payment_confirmed" ||
      statusParam === "cancelled"
        ? (statusParam as LocalBookingStatus)
        : undefined;

    const entries = await listBookingEntries({ q, status });

    return NextResponse.json({
      bookings: entries,
      total: entries.length,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "讀取訂單列表失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
