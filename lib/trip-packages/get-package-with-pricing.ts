import { getTripPackage } from "@/lib/trip-packages/registry";
import { getPricingConfig } from "@/lib/trip-pricing/fetch";

export function getTripPackageWithPricing(tripKey: string) {
  const packageData = getTripPackage(tripKey);
  if (!packageData) return undefined;

  const pricingConfig = getPricingConfig(packageData.id);
  if (!pricingConfig) return undefined;

  return { package: packageData, pricingConfig };
}
