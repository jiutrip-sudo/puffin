import type { PricingResult } from "./types";

/** 前台零售加價率（預設 15%）；供應商價 × (1 + rate) = 零售價 */
export function getRetailMarkupRate(): number {
  const raw = process.env.RETAIL_MARKUP_RATE?.trim();
  if (raw) {
    const parsed = Number.parseFloat(raw);
    if (!Number.isNaN(parsed) && parsed >= 0) return parsed;
  }
  return 0.15;
}

export function applyRetailMarkupAmount(
  supplierTotal: number,
  rate = getRetailMarkupRate(),
): number {
  return Math.round(supplierTotal * (1 + rate));
}

/** 將 Corivo／供應商計價結果轉為含零售加價的售價 */
export function applyRetailMarkupToResult(
  supplierResult: PricingResult,
  depositRate: number,
): PricingResult {
  const supplierTotal = supplierResult.total;
  const retailTotal = applyRetailMarkupAmount(supplierTotal);
  const deposit = Math.round(retailTotal * depositRate);
  const travelerCount = supplierResult.travelerCount;

  return {
    ...supplierResult,
    supplierTotal,
    retailTotal,
    corivoTotal: supplierTotal,
    subtotal: retailTotal,
    total: retailTotal,
    deposit,
    perPersonDouble:
      travelerCount > 0
        ? Math.round(retailTotal / travelerCount)
        : supplierResult.perPersonDouble,
  };
}
