import type { PricingResult } from "@/lib/trip-pricing/types";

export function applyPromoDiscount(
  base: PricingResult,
  discount: number,
  promoCode: string,
  depositRate: number,
): PricingResult {
  const corivoTotal = base.total;
  const promoDiscount = Math.min(corivoTotal, Math.max(0, Math.round(discount)));
  const total = Math.max(0, corivoTotal - promoDiscount);
  const deposit = Math.round(total * depositRate);
  const travelerCount = base.travelerCount;

  return {
    ...base,
    corivoTotal,
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
  return {
    ...base,
    corivoTotal: base.total,
    promoCodeApplied: normalizePromoCodeSafe(promoCode),
    promoDiscount: 0,
    promoCodeInvalid: true,
  };
}

function normalizePromoCodeSafe(code: string): string {
  return code.trim().toUpperCase();
}
