import type { PricingConfig } from "./types";
import { icelandSelfDriveWinter4Pricing } from "./iceland-self-drive-winter-4";

const CONFIGS: Record<string, PricingConfig> = {
  [icelandSelfDriveWinter4Pricing.packageId]: icelandSelfDriveWinter4Pricing,
};

export function getPricingConfig(packageId: string): PricingConfig | undefined {
  return CONFIGS[packageId];
}

export async function fetchPricingConfig(
  packageId: string,
): Promise<PricingConfig | undefined> {
  return getPricingConfig(packageId);
}

export function usesCorivoPricing(config: PricingConfig): boolean {
  return Boolean(config.corivo);
}
