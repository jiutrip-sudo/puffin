import {
  PRICING_PACKAGE_CATEGORY_LABELS,
  classifyPricingPackage,
  type PricingPackageCategory,
} from "@/lib/admin/pricing-package-category";
import type { PromoCodeDefinition } from "./types";

export function promoAppliesToPackage(
  promo: PromoCodeDefinition,
  packageId: string,
): boolean {
  if (promo.categories?.length) {
    const category = classifyPricingPackage(packageId);
    return category != null && promo.categories.includes(category);
  }

  if (promo.packageIds?.length) {
    return promo.packageIds.includes(packageId);
  }

  return true;
}

export function formatPromoCategories(
  categories: PricingPackageCategory[] | undefined,
): string {
  if (!categories?.length) return "全站";
  return categories
    .map((category) => PRICING_PACKAGE_CATEGORY_LABELS[category])
    .join("、");
}
