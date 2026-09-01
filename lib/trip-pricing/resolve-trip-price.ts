import { calculateTripPrice } from "./calculate";
import { resolveCorivoTripPrice } from "./pricing-snapshot-read";
import { getPricingConfig, usesCorivoPricing } from "./fetch";
import { validatePromoCode } from "@/lib/promo/validate";
import { applyPromoDiscount, markPromoInvalid } from "@/lib/promo/apply";
import type { PricingConfig, PricingInput, PricingResult } from "./types";

function stripPromoCode(input: PricingInput): PricingInput {
  return { ...input, promoCode: undefined };
}

/**
 * 統一計價：Corivo 原價 + 本站優惠碼折扣（不傳 Corivo promoCode）。
 */
export async function resolveTripPrice(
  config: PricingConfig,
  input: PricingInput,
): Promise<PricingResult> {
  const baseInput = stripPromoCode(input);

  let base: PricingResult;
  if (usesCorivoPricing(config) && config.corivo) {
    base = await resolveCorivoTripPrice(
      { ...config, corivo: config.corivo },
      baseInput,
    );
  } else {
    base = calculateTripPrice(config, baseInput);
  }

  const promoCode = input.promoCode?.trim();
  if (!promoCode) return base;

  const validation = await validatePromoCode(promoCode, {
    packageId: input.packageId,
    startDate: input.startDate,
    adults: input.adults,
    children: input.children,
    infants: input.infants,
    corivoTotal: base.total,
  });

  if (!validation.valid) {
    return markPromoInvalid(base, promoCode);
  }

  return applyPromoDiscount(
    base,
    validation.discount ?? 0,
    validation.normalizedCode ?? promoCode,
    config.depositRate ?? 0.2,
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
