import { NextResponse } from "next/server";
import { buildCorivoCheckoutInput } from "@/lib/checkout/build-corivo-checkout-input";
import { buildCheckoutConfirmationEmailData } from "@/lib/checkout/build-confirmation-email-data";
import {
  buildCustomerConfirmationEmail,
  buildStaffBookingNotificationEmail,
} from "@/lib/checkout/confirmation-email-template";
import { submitCorivoCheckout } from "@/lib/checkout/corivo-checkout-client";
import { sendCheckoutConfirmationEmails } from "@/lib/checkout/send-confirmation-email";
import type { CheckoutSession } from "@/lib/checkout/types";
import { calculateCorivoTripPrice } from "@/lib/trip-pricing/corivo-calculate";
import { fetchCorivoPackageItems } from "@/lib/trip-pricing/corivo-client";
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

    const config = getPricingConfig(session.packageId);
    if (!config || !usesCorivoPricing(config) || !config.corivo) {
      return NextResponse.json({ error: "找不到可預訂的套餐" }, { status: 404 });
    }

    const corivoConfig = { ...config, corivo: config.corivo };
    const travelers = {
      adults: session.adults,
      children: session.children,
      infants: session.infants,
    };

    const packageItems = await fetchCorivoPackageItems(
      corivoConfig.corivo.instanceId,
      corivoConfig.corivo.packageTourId,
      travelers,
    );

    const checkoutInput = buildCorivoCheckoutInput(
      corivoConfig,
      packageItems,
      session,
    );

    const result = await submitCorivoCheckout(
      corivoConfig.corivo.instanceId,
      checkoutInput as unknown as Record<string, unknown>,
    );

    const extraPackageItemIds = session.selectedExtras.map(
      (extra) => extra.packageItemId,
    );

    const pricing = await calculateCorivoTripPrice(corivoConfig, {
      packageId: session.packageId,
      startDate: session.startDate,
      adults: session.adults,
      children: session.children,
      infants: session.infants,
      accommodationTier: session.accommodationTier,
      roomType: "double",
      vehicleTier: session.vehicleTier,
      extraPackageItemIds:
        extraPackageItemIds.length > 0 ? extraPackageItemIds : undefined,
    });

    const emailData = buildCheckoutConfirmationEmailData(
      session,
      corivoConfig,
      {
        bookingId: result.id,
        confirmationCode: result.confirmationCode,
      },
      pricing.total,
    );

    const emailResult = await sendCheckoutConfirmationEmails(emailData);

    return NextResponse.json({
      bookingId: result.id,
      confirmationCode: result.confirmationCode,
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
