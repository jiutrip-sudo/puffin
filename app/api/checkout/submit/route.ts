import { NextResponse } from "next/server";
import { createLocalBooking } from "@/lib/booking/create-local-booking";
import { updateLocalBooking } from "@/lib/booking/booking-store";
import { buildCheckoutConfirmationEmailData } from "@/lib/checkout/build-confirmation-email-data";
import { sendCheckoutConfirmationEmails } from "@/lib/checkout/send-confirmation-email";
import { buildCheckoutPricingInput } from "@/lib/checkout/build-pricing-input";
import type { CheckoutSession } from "@/lib/checkout/types";
import {
  hasTravelerFormErrors,
  validateTravelerForms,
} from "@/lib/checkout/validate-travelers";
import { getLocaleFromRequest } from "@/lib/i18n/request-locale";
import { resolveTripPrice } from "@/lib/trip-pricing/resolve-trip-price";
import { getPricingConfig, usesCorivoPricing } from "@/lib/trip-pricing/fetch";
import { incrementPromoUseCount } from "@/lib/promo/promo-uses";
import { normalizePromoCode } from "@/lib/promo/registry";

export async function POST(request: Request) {
  try {
    const session = (await request.json()) as CheckoutSession;
    const locale = getLocaleFromRequest(request);

    if (!session.packageId || !session.startDate) {
      return NextResponse.json({ error: "缺少必要參數" }, { status: 400 });
    }

    if (!session.acceptTerms) {
      return NextResponse.json(
        { error: "請同意服務條款及隱私權政策" },
        { status: 400 },
      );
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

    const pricing = await resolveTripPrice(
      corivoConfig,
      buildCheckoutPricingInput(session),
    );

    if (session.promoCode.trim() && pricing.promoCodeInvalid) {
      return NextResponse.json(
        { error: "優惠碼無效或不符合使用條件" },
        { status: 400 },
      );
    }

    const booking = await createLocalBooking(
      session,
      pricing,
      corivoConfig,
      locale,
    );

    if (session.promoCode.trim() && pricing.promoDiscount && pricing.promoDiscount > 0) {
      await incrementPromoUseCount(normalizePromoCode(session.promoCode));
    }

    const emailData = buildCheckoutConfirmationEmailData(
      session,
      corivoConfig,
      {
        bookingId: booking.bookingId,
        confirmationCode: booking.confirmationCode,
      },
      {
        total: booking.record.pricing.total,
        supplierTotal: booking.record.pricing.supplierTotal,
        retailTotalIsk: booking.record.pricing.retailTotalIsk,
        corivoTotal: booking.record.pricing.corivoTotal,
        promoCode: booking.record.pricing.promoCode,
        promoDiscount: booking.record.pricing.promoDiscount,
        displayAmountDue: booking.record.pricing.displayAmountDue,
        displayTotal: booking.record.pricing.displayTotal,
      },
      { locale, awaitingSupplier: true },
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
      status: booking.record.status,
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

