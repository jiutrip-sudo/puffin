import type { PricingConfig } from "./types";
import { applyPricingConfigMedia } from "@/lib/media/resolve";
import { icelandSelfDriveWinter4Pricing } from "./iceland-self-drive-winter-4";
import { icelandSelfDriveSummer4Pricing } from "./iceland-self-drive-summer-4";
import { icelandSelfDriveSummer5Pricing } from "./iceland-self-drive-summer-5";
import { icelandSelfDriveSummer6Pricing } from "./iceland-self-drive-summer-6";
import { icelandSelfDriveSummer7Pricing } from "./iceland-self-drive-summer-7";
import { icelandSelfDriveSummer8Pricing } from "./iceland-self-drive-summer-8";
import { icelandSelfDriveSummer9Pricing } from "./iceland-self-drive-summer-9";
import { icelandSelfDriveSummer10Pricing } from "./iceland-self-drive-summer-10";
import { icelandSelfDriveSummer11Pricing } from "./iceland-self-drive-summer-11";
import { icelandSelfDriveSummer12Pricing } from "./iceland-self-drive-summer-12";
import { icelandSelfDriveSummer13Pricing } from "./iceland-self-drive-summer-13";
import { icelandSelfDriveSummer14Pricing } from "./iceland-self-drive-summer-14";
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
import { icelandGroupWinter4Pricing } from "./iceland-group-winter-4";
import { icelandGroupSummer4Pricing } from "./iceland-group-summer-4";
import { icelandGroupSummer5Pricing } from "./iceland-group-summer-5";
import { icelandGroupSummer5SouthGoldenCirclePricing } from "./iceland-group-summer-5-south-golden-circle";
import { icelandGroupSummer6Pricing } from "./iceland-group-summer-6";
import { icelandGroupSummer6SouthHikingPricing } from "./iceland-group-summer-6-south-hiking";
import { icelandGroupSummer7Pricing } from "./iceland-group-summer-7";
import { icelandGroupSummer7SouthGoldenCircleHikingPricing } from "./iceland-group-summer-7-south-golden-circle-hiking";
import { icelandGroupSummer8Pricing } from "./iceland-group-summer-8";
import { icelandGroupSummer9Pricing } from "./iceland-group-summer-9";
import { icelandGroupSummer10Pricing } from "./iceland-group-summer-10";
import { icelandGroupWinter5Pricing } from "./iceland-group-winter-5";
import { icelandGroupWinter6Pricing } from "./iceland-group-winter-6";
import { icelandGroupWinter7Pricing } from "./iceland-group-winter-7";
import { icelandGroupWinter8Pricing } from "./iceland-group-winter-8";
import { icelandGroupWinter8NonRingPricing } from "./iceland-group-winter-8-non-ring";
import { icelandGroupWinter9Pricing } from "./iceland-group-winter-9";
import { icelandGroupWinter9NonRingPricing } from "./iceland-group-winter-9-non-ring";
import { icelandGroupWinter10Pricing } from "./iceland-group-winter-10";
import { icelandGroupWinter10NonRingPricing } from "./iceland-group-winter-10-non-ring";

const CONFIGS: Record<string, PricingConfig> = {
  [icelandSelfDriveWinter4Pricing.packageId]: icelandSelfDriveWinter4Pricing,
  [icelandSelfDriveSummer4Pricing.packageId]: icelandSelfDriveSummer4Pricing,
  [icelandSelfDriveSummer5Pricing.packageId]: icelandSelfDriveSummer5Pricing,
  [icelandSelfDriveSummer6Pricing.packageId]: icelandSelfDriveSummer6Pricing,
  [icelandSelfDriveSummer7Pricing.packageId]: icelandSelfDriveSummer7Pricing,
  [icelandSelfDriveSummer8Pricing.packageId]: icelandSelfDriveSummer8Pricing,
  [icelandSelfDriveSummer9Pricing.packageId]: icelandSelfDriveSummer9Pricing,
  [icelandSelfDriveSummer10Pricing.packageId]: icelandSelfDriveSummer10Pricing,
  [icelandSelfDriveSummer11Pricing.packageId]: icelandSelfDriveSummer11Pricing,
  [icelandSelfDriveSummer12Pricing.packageId]: icelandSelfDriveSummer12Pricing,
  [icelandSelfDriveSummer13Pricing.packageId]: icelandSelfDriveSummer13Pricing,
  [icelandSelfDriveSummer14Pricing.packageId]: icelandSelfDriveSummer14Pricing,
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
  [icelandGroupWinter4Pricing.packageId]: icelandGroupWinter4Pricing,
  [icelandGroupSummer4Pricing.packageId]: icelandGroupSummer4Pricing,
  [icelandGroupSummer5Pricing.packageId]: icelandGroupSummer5Pricing,
  [icelandGroupSummer5SouthGoldenCirclePricing.packageId]:
    icelandGroupSummer5SouthGoldenCirclePricing,
  [icelandGroupSummer6Pricing.packageId]: icelandGroupSummer6Pricing,
  [icelandGroupSummer6SouthHikingPricing.packageId]:
    icelandGroupSummer6SouthHikingPricing,
  [icelandGroupSummer7Pricing.packageId]: icelandGroupSummer7Pricing,
  [icelandGroupSummer7SouthGoldenCircleHikingPricing.packageId]:
    icelandGroupSummer7SouthGoldenCircleHikingPricing,
  [icelandGroupSummer8Pricing.packageId]: icelandGroupSummer8Pricing,
  [icelandGroupSummer9Pricing.packageId]: icelandGroupSummer9Pricing,
  [icelandGroupSummer10Pricing.packageId]: icelandGroupSummer10Pricing,
  [icelandGroupWinter5Pricing.packageId]: icelandGroupWinter5Pricing,
  [icelandGroupWinter6Pricing.packageId]: icelandGroupWinter6Pricing,
  [icelandGroupWinter7Pricing.packageId]: icelandGroupWinter7Pricing,
  [icelandGroupWinter8Pricing.packageId]: icelandGroupWinter8Pricing,
  [icelandGroupWinter8NonRingPricing.packageId]: icelandGroupWinter8NonRingPricing,
  [icelandGroupWinter9Pricing.packageId]: icelandGroupWinter9Pricing,
  [icelandGroupWinter9NonRingPricing.packageId]: icelandGroupWinter9NonRingPricing,
  [icelandGroupWinter10Pricing.packageId]: icelandGroupWinter10Pricing,
  [icelandGroupWinter10NonRingPricing.packageId]: icelandGroupWinter10NonRingPricing,
};

export function getAllPricingConfigs(): PricingConfig[] {
  return Object.values(CONFIGS).map((config) => applyPricingConfigMedia(config));
}

export function getPricingConfig(packageId: string): PricingConfig | undefined {
  return withPricingMedia(CONFIGS[packageId]);
}

function withPricingMedia(config: PricingConfig | undefined): PricingConfig | undefined {
  return config ? applyPricingConfigMedia(config) : undefined;
}

export async function fetchPricingConfig(
  packageId: string,
): Promise<PricingConfig | undefined> {
  return getPricingConfig(packageId);
}

export function usesCorivoPricing(config: PricingConfig): boolean {
  return Boolean(config.corivo);
}
