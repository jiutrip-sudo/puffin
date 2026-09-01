import type { PricingConfig } from "./types";
import { icelandSelfDriveWinter4Pricing } from "./iceland-self-drive-winter-4";
import { icelandSelfDriveWinter5Pricing } from "./iceland-self-drive-winter-5";
import { icelandSelfDriveWinter6Pricing } from "./iceland-self-drive-winter-6";
import { icelandSelfDriveWinter7Pricing } from "./iceland-self-drive-winter-7";
import { icelandSelfDriveWinter8Pricing } from "./iceland-self-drive-winter-8";
import { icelandSelfDriveWinter8NonRingPricing } from "./iceland-self-drive-winter-8-non-ring";
import { icelandSelfDriveWinter9Pricing } from "./iceland-self-drive-winter-9";
import { icelandSelfDriveWinter9NonRingPricing } from "./iceland-self-drive-winter-9-non-ring";
import { icelandSelfDriveWinter10Pricing } from "./iceland-self-drive-winter-10";
import { icelandSelfDriveWinter10NonRingPricing } from "./iceland-self-drive-winter-10-non-ring";
import { icelandSelfDriveWinter11Pricing } from "./iceland-self-drive-winter-11";
import { icelandSelfDriveWinter12Pricing } from "./iceland-self-drive-winter-12";

const CONFIGS: Record<string, PricingConfig> = {
  [icelandSelfDriveWinter4Pricing.packageId]: icelandSelfDriveWinter4Pricing,
  [icelandSelfDriveWinter5Pricing.packageId]: icelandSelfDriveWinter5Pricing,
  [icelandSelfDriveWinter6Pricing.packageId]: icelandSelfDriveWinter6Pricing,
  [icelandSelfDriveWinter7Pricing.packageId]: icelandSelfDriveWinter7Pricing,
  [icelandSelfDriveWinter8Pricing.packageId]: icelandSelfDriveWinter8Pricing,
  [icelandSelfDriveWinter8NonRingPricing.packageId]: icelandSelfDriveWinter8NonRingPricing,
  [icelandSelfDriveWinter9Pricing.packageId]: icelandSelfDriveWinter9Pricing,
  [icelandSelfDriveWinter9NonRingPricing.packageId]: icelandSelfDriveWinter9NonRingPricing,
  [icelandSelfDriveWinter10Pricing.packageId]: icelandSelfDriveWinter10Pricing,
  [icelandSelfDriveWinter10NonRingPricing.packageId]: icelandSelfDriveWinter10NonRingPricing,
  [icelandSelfDriveWinter11Pricing.packageId]: icelandSelfDriveWinter11Pricing,
  [icelandSelfDriveWinter12Pricing.packageId]: icelandSelfDriveWinter12Pricing,
};

export function getAllPricingConfigs(): PricingConfig[] {
  return Object.values(CONFIGS);
}

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
