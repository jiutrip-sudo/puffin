import { NextResponse } from "next/server";
import { getAdminBookingDetail } from "@/lib/booking/booking-list";
import { updateLocalBooking } from "@/lib/booking/booking-store";
import { sendPaymentInstructionsEmail } from "@/lib/checkout/send-payment-instructions-email";

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
      return NextResponse.json({ error: "已取消的訂單無法確認供應商" }, { status: 400 });
    }

    if (existing.record.status !== "awaiting_supplier") {
      return NextResponse.json(
        { error: "此訂單不在待供應商確認狀態" },
        { status: 400 },
      );
    }

    const updated = await updateLocalBooking(id, {
      status: "pending_payment",
      supplierStatus: "confirmed",
      supplierConfirmedAt: new Date().toISOString(),
      supplierNote: body.note?.trim() || existing.record.supplierNote,
    });

    if (!updated) {
      return NextResponse.json({ error: "更新訂單失敗" }, { status: 500 });
    }

    const emailResult = await sendPaymentInstructionsEmail(updated);

    await updateLocalBooking(id, {
      email: {
        ...(updated.email ?? {
          customerSent: false,
          staffSent: false,
        }),
        paymentInstructionsSent: emailResult.sent,
        customerError: emailResult.sent
          ? updated.email?.customerError
          : emailResult.error,
      },
    });

    const detail = await getAdminBookingDetail(id);
    return NextResponse.json({
      booking: detail,
      email: emailResult,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "確認供應商失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
