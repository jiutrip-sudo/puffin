export type PricingPackageCategory =
  | "summer-self-drive"
  | "summer-group"
  | "winter-self-drive"
  | "winter-group";

export const PRICING_PACKAGE_CATEGORY_ORDER: PricingPackageCategory[] = [
  "summer-self-drive",
  "summer-group",
  "winter-self-drive",
  "winter-group",
];

export const PRICING_PACKAGE_CATEGORY_LABELS: Record<
  PricingPackageCategory,
  string
> = {
  "summer-self-drive": "夏季自駕",
  "summer-group": "夏季跟團",
  "winter-self-drive": "冬季自駕",
  "winter-group": "冬季跟團",
};

export function classifyPricingPackage(
  packageId: string,
): PricingPackageCategory | null {
  if (packageId.includes("self-drive-summer")) return "summer-self-drive";
  if (packageId.includes("group-summer")) return "summer-group";
  if (packageId.includes("self-drive-winter")) return "winter-self-drive";
  if (packageId.includes("group-winter")) return "winter-group";
  return null;
}

export function getPricingPackageCategoryLabel(
  category: PricingPackageCategory,
): string {
  return PRICING_PACKAGE_CATEGORY_LABELS[category];
}

export function comparePricingPackages(
  a: {
    packageId: string;
    tripDays: number | null;
    tourCode?: string | null;
  },
  b: {
    packageId: string;
    tripDays: number | null;
    tourCode?: string | null;
  },
): number {
  const catA = classifyPricingPackage(a.packageId);
  const catB = classifyPricingPackage(b.packageId);
  const orderA = catA ? PRICING_PACKAGE_CATEGORY_ORDER.indexOf(catA) : 99;
  const orderB = catB ? PRICING_PACKAGE_CATEGORY_ORDER.indexOf(catB) : 99;
  if (orderA !== orderB) return orderA - orderB;

  const daysA = a.tripDays ?? 0;
  const daysB = b.tripDays ?? 0;
  if (daysA !== daysB) return daysA - daysB;

  const codeA = a.tourCode ?? "";
  const codeB = b.tourCode ?? "";
  if (codeA && codeB && codeA !== codeB) return codeA.localeCompare(codeB);

  return a.packageId.localeCompare(b.packageId);
}

export function countPricingPackagesByCategory<
  T extends { packageId: string },
>(packages: readonly T[]): Record<PricingPackageCategory, number> {
  const counts: Record<PricingPackageCategory, number> = {
    "summer-self-drive": 0,
    "summer-group": 0,
    "winter-self-drive": 0,
    "winter-group": 0,
  };

  for (const pkg of packages) {
    const category = classifyPricingPackage(pkg.packageId);
    if (category) counts[category] += 1;
  }

  return counts;
}
