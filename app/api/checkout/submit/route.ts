import { NextResponse } from "next/server";
import { createLocalBooking } from "@/lib/booking/create-local-booking";
import { updateLocalBooking } from "@/lib/booking/booking-store";
import { buildCheckoutConfirmationEmailData } from "@/lib/checkout/build-confirmation-email-data";
import { sendCheckoutConfirmationEmails } from "@/lib/checkout/send-confirmation-email";
import { occupanciesToRoomSlots } from "@/lib/checkout/room-occupancy";
import type { CheckoutSession } from "@/lib/checkout/types";
import {
  hasTravelerFormErrors,
  validateTravelerForms,
} from "@/lib/checkout/validate-travelers";
import { resolveCorivoTripPrice } from "@/lib/trip-pricing/pricing-snapshot-read";
import { getPricingConfig, usesCorivoPricing } from "@/lib/trip-pricing/fetch";

export async function POST(request: Request) {
  try {
    const session = (await request.json()) as CheckoutSession;

    if (!session.packageId || !session.startDate) {
      return NextResponse.json({ error: "缺少必要參數" }, { status: 400 });
    }

    if (!session.acceptTerms) {
      return NextResponse.json({ error: "請同意服務條款" }, { status: 400 });
    }

    const travelerErrors = validateTravelerForms(session.travelers);
    if (hasTravelerFormErrors(travelerErrors)) {
      return NextResponse.json(
        { error: "旅客資料不完整，請返回上一步檢查必填欄位" },
        { status: 400 },
      );
    }

    const config = getPricingConfig(session.packageId);
    if (!config || !usesCorivoPricing(config) || !config.corivo) {
      return NextResponse.json({ error: "找不到可預訂的套餐" }, { status: 404 });
    }

    const corivoConfig = { ...config, corivo: config.corivo };

    const extraPackageItemIds = session.selectedExtras.map(
      (extra) => extra.packageItemId,
    );

    const pricing = await resolveCorivoTripPrice(corivoConfig, {
      packageId: session.packageId,
      startDate: session.startDate,
      adults: session.adults,
      children: session.children,
      infants: session.infants,
      accommodationTier: session.accommodationTier,
      roomType: "double",
      vehicleTier: session.vehicleTier,
      roomSlots: occupanciesToRoomSlots(session.roomOccupancies),
      extraPackageItemIds:
        extraPackageItemIds.length > 0 ? extraPackageItemIds : undefined,
    });

    const booking = await createLocalBooking(session, pricing, corivoConfig);

    const emailData = buildCheckoutConfirmationEmailData(
      session,
      corivoConfig,
      {
        bookingId: booking.bookingId,
        confirmationCode: booking.confirmationCode,
      },
      pricing.total,
    );

    const emailResult = await sendCheckoutConfirmationEmails(emailData);

    await updateLocalBooking(booking.bookingId, {
      email: {
        customerSent: emailResult.customer.sent,
        staffSent: emailResult.staff.sent,
        customerError: emailResult.customer.error,
        staffError: emailResult.staff.error,
      },
    });

    return NextResponse.json({
      bookingId: booking.bookingId,
      confirmationCode: booking.confirmationCode,
      email: {
        customerSent: emailResult.customer.sent,
        staffSent: emailResult.staff.sent,
        customerError: emailResult.customer.error,
        staffError: emailResult.staff.error,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "提交預訂時發生錯誤";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
