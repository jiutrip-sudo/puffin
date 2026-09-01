import { NextResponse } from "next/server";
import { getAdminBookingDetail } from "@/lib/booking/booking-list";
import { updateLocalBooking } from "@/lib/booking/booking-store";
import type { LocalBookingStatus } from "@/lib/booking/types";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const detail = await getAdminBookingDetail(id);

    if (!detail) {
      return NextResponse.json({ error: "找不到訂單" }, { status: 404 });
    }

    return NextResponse.json(detail);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "讀取訂單失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = (await request.json()) as { status?: LocalBookingStatus };

    if (
      body.status !== "pending_payment" &&
      body.status !== "payment_confirmed" &&
      body.status !== "cancelled"
    ) {
      return NextResponse.json({ error: "無效的訂單狀態" }, { status: 400 });
    }

    const updated = await updateLocalBooking(id, { status: body.status });
    if (!updated) {
      return NextResponse.json({ error: "找不到訂單" }, { status: 404 });
    }

    const detail = await getAdminBookingDetail(id);
    return NextResponse.json(detail);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "更新訂單失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
