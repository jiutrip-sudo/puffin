import { findPromoDefinition, normalizePromoCode } from "./registry";
import { getPromoUseCount } from "./promo-uses";
import type {
  PromoCodeDefinition,
  PromoValidationContext,
  PromoValidationResult,
} from "./types";

function isDateWithin(
  date: string,
  from?: string,
  until?: string,
): boolean {
  if (from && date < from) return false;
  if (until && date > until) return false;
  return true;
}

function computeDiscountAmount(
  promo: PromoCodeDefinition,
  corivoTotal: number,
): number {
  if (corivoTotal <= 0) return 0;

  if (promo.type === "percent") {
    const percent = Math.min(100, Math.max(0, promo.value));
    return Math.round(corivoTotal * (percent / 100));
  }

  return Math.min(corivoTotal, Math.max(0, Math.round(promo.value)));
}

export async function validatePromoCode(
  code: string,
  context: PromoValidationContext,
): Promise<PromoValidationResult> {
  const normalized = normalizePromoCode(code);
  if (!normalized) {
    return { valid: false, error: "請輸入優惠碼" };
  }

  const promo = findPromoDefinition(normalized);
  if (!promo) {
    return { valid: false, error: "優惠碼無效或不符合使用條件" };
  }

  if (!promo.active) {
    return { valid: false, error: "此優惠碼已停用" };
  }

  const today = new Date().toISOString().slice(0, 10);
  if (!isDateWithin(today, promo.validFrom, promo.validUntil)) {
    return { valid: false, error: "此優惠碼不在有效期限內" };
  }

  if (
    promo.packageIds?.length &&
    !promo.packageIds.includes(context.packageId)
  ) {
    return { valid: false, error: "此優惠碼不適用於所選套餐" };
  }

  if (
    context.startDate &&
    !isDateWithin(
      context.startDate,
      promo.departureFrom,
      promo.departureUntil,
    )
  ) {
    return { valid: false, error: "此優惠碼不適用於所選出發日" };
  }

  const travelerCount =
    Math.max(0, context.adults) +
    Math.max(0, context.children) +
    Math.max(0, context.infants);

  if (promo.minTravelers && travelerCount < promo.minTravelers) {
    return {
      valid: false,
      error: `此優惠碼至少需要 ${promo.minTravelers} 位旅客`,
    };
  }

  if (promo.maxUses) {
    const used = await getPromoUseCount(normalized);
    if (used >= promo.maxUses) {
      return { valid: false, error: "此優惠碼已達使用上限" };
    }
  }

  const discount = computeDiscountAmount(promo, context.corivoTotal);
  if (discount <= 0) {
    return { valid: false, error: "優惠碼無法套用於目前金額" };
  }

  return {
    valid: true,
    normalizedCode: normalized,
    label: promo.label,
    discount,
  };
}
