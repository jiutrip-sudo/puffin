import { calculateTripPrice } from "./calculate";
import { resolveCorivoTripPrice } from "./pricing-snapshot-read";
import { getPricingConfig, usesCorivoPricing } from "./fetch";
import { validatePromoCode } from "@/lib/promo/validate";
import { applyPromoDiscount, markPromoInvalid } from "@/lib/promo/apply";
import {
  applyRetailMarkupToResult,
  getRetailMarkupRate,
} from "./retail-markup";
import type { PricingConfig, PricingInput, PricingResult } from "./types";

function stripPromoCode(input: PricingInput): PricingInput {
  return { ...input, promoCode: undefined };
}

function withRetailMarkup(
  config: PricingConfig,
  supplierResult: PricingResult,
): PricingResult {
  return applyRetailMarkupToResult(
    supplierResult,
    config.depositRate ?? 0.2,
  );
}

/**
 * 統一計價：Corivo 供應商價 → 零售加價 → 本站優惠碼折扣。
 */
export async function resolveTripPrice(
  config: PricingConfig,
  input: PricingInput,
): Promise<PricingResult> {
  const baseInput = stripPromoCode(input);
  const depositRate = config.depositRate ?? 0.2;

  let supplierResult: PricingResult;
  if (usesCorivoPricing(config) && config.corivo) {
    supplierResult = await resolveCorivoTripPrice(
      { ...config, corivo: config.corivo },
      baseInput,
    );
  } else {
    supplierResult = calculateTripPrice(config, baseInput);
  }

  const base = withRetailMarkup(config, supplierResult);

  const promoCode = input.promoCode?.trim();
  if (!promoCode) return base;

  const validation = await validatePromoCode(promoCode, {
    packageId: input.packageId,
    startDate: input.startDate,
    adults: input.adults,
    children: input.children,
    infants: input.infants,
    corivoTotal: base.retailTotal ?? base.total,
    customerEmail: input.customerEmail,
  });

  if (!validation.valid) {
    return markPromoInvalid(base, promoCode);
  }

  return applyPromoDiscount(
    base,
    validation.discount ?? 0,
    validation.normalizedCode ?? promoCode,
    depositRate,
  );
}

export async function resolveTripPriceForPackage(
  input: PricingInput,
): Promise<PricingResult> {
  const config = getPricingConfig(input.packageId);
  if (!config) {
    throw new Error("找不到價格設定");
  }
  return resolveTripPrice(config, input);
}

export { getRetailMarkupRate };
