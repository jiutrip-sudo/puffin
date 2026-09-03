import { NextResponse } from "next/server";
import { getAdminBookingDetail } from "@/lib/booking/booking-list";
import { updateLocalBooking } from "@/lib/booking/booking-store";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function POST(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = (await request.json()) as { note?: string };
    const existing = await getAdminBookingDetail(id);

    if (!existing) {
      return NextResponse.json({ error: "找不到訂單" }, { status: 404 });
    }

    if (existing.record.status === "cancelled") {
      return NextResponse.json({ error: "訂單已取消" }, { status: 400 });
    }

    const updated = await updateLocalBooking(id, {
      status: "cancelled",
      supplierStatus: "rejected",
      supplierNote: body.note?.trim() || existing.record.supplierNote,
    });

    if (!updated) {
      return NextResponse.json({ error: "更新訂單失敗" }, { status: 500 });
    }

    const detail = await getAdminBookingDetail(id);
    return NextResponse.json({ booking: detail });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "標記無法成團失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
