import { NextResponse } from "next/server";
import { buildCheckoutPricingInput } from "@/lib/checkout/build-pricing-input";
import { getCheckoutLeadEmail } from "@/lib/checkout/lead-email";
import type { CheckoutSession } from "@/lib/checkout/types";
import { resolveTripPriceForPackage } from "@/lib/trip-pricing/resolve-trip-price";
import { validatePromoCode } from "@/lib/promo/validate";

type PromoValidateBody = {
  code: string;
  session: CheckoutSession;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as PromoValidateBody;
    const code = body.code?.trim();
    const session = body.session;

    if (!code) {
      return NextResponse.json(
        { valid: false, error: "請輸入優惠碼" },
        { status: 400 },
      );
    }

    if (!session?.packageId || !session.startDate) {
      return NextResponse.json(
        { valid: false, error: "缺少套餐或出發日" },
        { status: 400 },
      );
    }

    const basePricing = await resolveTripPriceForPackage(
      buildCheckoutPricingInput(session, {
        includeExtras: true,
        promoCode: "",
      }),
    );

    const validation = await validatePromoCode(code, {
      packageId: session.packageId,
      startDate: session.startDate,
      adults: session.adults,
      children: session.children,
      infants: session.infants,
      corivoTotal: basePricing.total,
      customerEmail: getCheckoutLeadEmail(session),
    });

    if (!validation.valid) {
      return NextResponse.json({
        valid: false,
        error: validation.error ?? "優惠碼無效或不符合使用條件",
      });
    }

    return NextResponse.json({
      valid: true,
      code: validation.normalizedCode,
      label: validation.label,
      discount: validation.discount,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "驗證優惠碼時發生錯誤";
    return NextResponse.json({ valid: false, error: message }, { status: 400 });
  }
}
