import { sampleMonthlyDates } from "@/lib/trip-date-utils";
import { calculateCorivoTripPrice } from "./corivo-calculate";
import { fetchCorivoTierAvailability } from "./corivo-availability";
import { getAllPricingConfigs, usesCorivoPricing } from "./fetch";
import { mapWithConcurrency } from "./map-with-concurrency";
import {
  buildAvailabilitySnapshotKey,
  buildPricingSnapshotKey,
} from "./pricing-snapshot-keys";
import {
  emptyPackageSnapshot,
  writePackagePricingSnapshot,
} from "./pricing-snapshot-store";
import type {
  PackagePricingSnapshot,
  PricingSyncJobReport,
} from "./pricing-snapshot-types";
import type { CorivoPricingConfig, PricingConfig } from "./types";

const SYNC_DELAY_MS = 350;
const SYNC_PRICE_CONCURRENCY = 1;

type TravelerSet = {
  adults: number;
  children: number;
  infants: number;
};

const SYNC_TRAVELER_SETS: TravelerSet[] = [
  { adults: 2, children: 0, infants: 0 },
  { adults: 1, children: 0, infants: 0 },
  { adults: 3, children: 0, infants: 0 },
  { adults: 5, children: 0, infants: 0 },
  { adults: 2, children: 1, infants: 0 },
  { adults: 2, children: 2, infants: 0 },
  { adults: 4, children: 2, infants: 0 },
  { adults: 7, children: 2, infants: 0 },
];

const DEFAULT_ACCOMMODATION_TIER = "comfort";
const DEFAULT_VEHICLE_TIER = "cfmn";
const TWO_ADULT_TRAVELERS: TravelerSet = { adults: 2, children: 0, infants: 0 };

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** 每月取一個出發日，供預同步使用。 */
export function sampleSyncDates(min: string, max: string, maxDates = 5): string[] {
  const start = new Date(`${min}T12:00:00`);
  const end = new Date(`${max}T12:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return [];

  const dates: string[] = [];
  const cursor = new Date(start);

  while (cursor <= end && dates.length < maxDates) {
    dates.push(cursor.toISOString().slice(0, 10));
    cursor.setMonth(cursor.getMonth() + 1);
  }

  return dates;
}

type PriceSyncTarget = {
  startDate: string;
  adults: number;
  children: number;
  infants: number;
  accommodationTier: string;
  vehicleTier: string;
};

type AvailabilitySyncTarget = {
  startDate: string;
  adults: number;
  children: number;
  infants: number;
  accommodationTier: string;
};

function buildSyncTargets(config: PricingConfig): {
  prices: PriceSyncTarget[];
  availability: AvailabilitySyncTarget[];
} {
  const dates = sampleMonthlyDates(
    config.bookingDateRange?.min ?? "2026-11-01",
    config.bookingDateRange?.max ?? "2027-03-31",
    config.bookingDateExclusions,
  );

  const vehicleIds = config.vehicleTiers.map((tier) => tier.id);
  const prices: PriceSyncTarget[] = [];
  const availability: AvailabilitySyncTarget[] = [];

  for (const date of dates) {
    for (const travelers of SYNC_TRAVELER_SETS) {
      prices.push({
        startDate: date,
        ...travelers,
        accommodationTier: DEFAULT_ACCOMMODATION_TIER,
        vehicleTier:
          config.vehicleTiers.length > 0
            ? DEFAULT_VEHICLE_TIER
            : "",
      });
      availability.push({
        startDate: date,
        ...travelers,
        accommodationTier: DEFAULT_ACCOMMODATION_TIER,
      });
    }

    for (const vehicleTier of vehicleIds) {
      if (!vehicleTier) continue;
      prices.push({
        startDate: date,
        ...TWO_ADULT_TRAVELERS,
        accommodationTier: DEFAULT_ACCOMMODATION_TIER,
        vehicleTier,
      });
    }
  }

  return { prices, availability };
}

async function syncPackageSnapshot(
  config: PricingConfig,
): Promise<PricingSyncJobReport> {
  const started = Date.now();
  const errors: string[] = [];
  if (!usesCorivoPricing(config) || !config.corivo) {
    return {
      packageId: config.packageId,
      pricesSynced: 0,
      pricesFailed: 0,
      availabilitySynced: 0,
      availabilityFailed: 0,
      durationMs: Date.now() - started,
      errors: ["非 Corivo 計價套餐，略過"],
    };
  }

  const corivoConfig = { ...config, corivo: config.corivo } as CorivoPricingConfig;
  const snapshot: PackagePricingSnapshot = emptyPackageSnapshot(config.packageId);
  const { prices, availability } = buildSyncTargets(config);

  let pricesSynced = 0;
  let pricesFailed = 0;
  let availabilitySynced = 0;
  let availabilityFailed = 0;

  await mapWithConcurrency(
    prices,
    SYNC_PRICE_CONCURRENCY,
    async (target) => {
      const key = buildPricingSnapshotKey(target);
      try {
        const result = await calculateCorivoTripPrice(corivoConfig, {
          packageId: config.packageId,
          startDate: target.startDate,
          adults: target.adults,
          children: target.children,
          infants: target.infants,
          accommodationTier: target.accommodationTier,
          roomType: "double",
          vehicleTier: target.vehicleTier,
        });
        snapshot.prices[key] = {
          syncedAt: new Date().toISOString(),
          result,
        };
        pricesSynced += 1;
      } catch (error) {
        pricesFailed += 1;
        const message =
          error instanceof Error ? error.message : "計價同步失敗";
        errors.push(`價格 ${key}: ${message}`);
      }
      await sleep(SYNC_DELAY_MS);
    },
  );

  await mapWithConcurrency(
    availability,
    SYNC_PRICE_CONCURRENCY,
    async (target) => {
      const key = buildAvailabilitySnapshotKey(target);
      try {
        const result = await fetchCorivoTierAvailability(corivoConfig, target);
        snapshot.availability[key] = {
          syncedAt: new Date().toISOString(),
          result,
        };
        availabilitySynced += 1;
      } catch (error) {
        availabilityFailed += 1;
        const message =
          error instanceof Error ? error.message : "可訂狀態同步失敗";
        errors.push(`可訂 ${key}: ${message}`);
      }
      await sleep(SYNC_DELAY_MS);
    },
  );

  snapshot.updatedAt = new Date().toISOString();
  await writePackagePricingSnapshot(snapshot);

  return {
    packageId: config.packageId,
    pricesSynced,
    pricesFailed,
    availabilitySynced,
    availabilityFailed,
    durationMs: Date.now() - started,
    errors: errors.slice(0, 30),
  };
}

export async function syncAllPackagePricing(): Promise<PricingSyncJobReport[]> {
  const configs = getAllPricingConfigs();
  const reports: PricingSyncJobReport[] = [];

  for (const config of configs) {
    reports.push(await syncPackageSnapshot(config));
  }

  return reports;
}

export async function syncPackagePricingById(
  packageId: string,
): Promise<PricingSyncJobReport | null> {
  const config = getAllPricingConfigs().find((item) => item.packageId === packageId);
  if (!config) return null;
  return syncPackageSnapshot(config);
}
