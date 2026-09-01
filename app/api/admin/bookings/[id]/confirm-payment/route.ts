import { NextResponse } from "next/server";
import { getAdminBookingDetail } from "@/lib/booking/booking-list";
import { updateLocalBooking } from "@/lib/booking/booking-store";
import { sendPaymentConfirmedEmail } from "@/lib/admin/email/send-payment-confirmed-email";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function POST(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const existing = await getAdminBookingDetail(id);

    if (!existing) {
      return NextResponse.json({ error: "找不到訂單" }, { status: 404 });
    }

    if (existing.record.status === "cancelled") {
      return NextResponse.json({ error: "已取消的訂單無法確認款項" }, { status: 400 });
    }

    const updated = await updateLocalBooking(id, {
      status: "payment_confirmed",
    });

    if (!updated) {
      return NextResponse.json({ error: "更新訂單失敗" }, { status: 500 });
    }

    const emailResult = await sendPaymentConfirmedEmail(updated);

    const detail = await getAdminBookingDetail(id);
    return NextResponse.json({
      booking: detail,
      email: emailResult,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "確認款項失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
