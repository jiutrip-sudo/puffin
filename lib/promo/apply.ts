import type { PricingResult } from "@/lib/trip-pricing/types";

export function applyPromoDiscount(
  base: PricingResult,
  discount: number,
  promoCode: string,
  depositRate: number,
): PricingResult {
  const supplierTotal =
    base.supplierTotal ?? base.corivoTotal ?? base.retailTotal ?? base.total;
  const retailBeforePromo = base.retailTotal ?? base.total;
  const promoDiscount = Math.min(
    retailBeforePromo,
    Math.max(0, Math.round(discount)),
  );
  const total = Math.max(0, retailBeforePromo - promoDiscount);
  const deposit = Math.round(total * depositRate);
  const travelerCount = base.travelerCount;

  return {
    ...base,
    supplierTotal,
    retailTotal: retailBeforePromo,
    corivoTotal: supplierTotal,
    subtotal: total,
    total,
    deposit,
    perPersonDouble:
      travelerCount > 0 ? Math.round(total / travelerCount) : base.perPersonDouble,
    promoCodeApplied: promoCode,
    promoDiscount,
    promoCodeInvalid: false,
  };
}

export function markPromoInvalid(
  base: PricingResult,
  promoCode: string,
): PricingResult {
  const supplierTotal =
    base.supplierTotal ?? base.corivoTotal ?? base.retailTotal ?? base.total;
  const retailTotal = base.retailTotal ?? base.total;

  return {
    ...base,
    supplierTotal,
    retailTotal,
    corivoTotal: supplierTotal,
    promoCodeApplied: normalizePromoCodeSafe(promoCode),
    promoDiscount: 0,
    promoCodeInvalid: true,
  };
}

function normalizePromoCodeSafe(code: string): string {
  return code.trim().toUpperCase();
}
