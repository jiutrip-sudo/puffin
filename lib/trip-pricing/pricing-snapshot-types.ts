import type { PricingResult, TripAvailabilityResult } from "./types";

export type StoredPricingEntry = {
  syncedAt: string;
  result: PricingResult;
};

export type StoredAvailabilityEntry = {
  syncedAt: string;
  result: TripAvailabilityResult;
};

export type PackagePricingSnapshot = {
  packageId: string;
  updatedAt: string;
  prices: Record<string, StoredPricingEntry>;
  availability: Record<string, StoredAvailabilityEntry>;
};

export type PricingSyncJobReport = {
  packageId: string;
  pricesSynced: number;
  pricesFailed: number;
  availabilitySynced: number;
  availabilityFailed: number;
  durationMs: number;
  errors: string[];
};

/** 價格快照有效期（30 天）；價格穩定時以手動同步更新 */
export const PRICING_SNAPSHOT_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

/** 可訂狀態快照有效期（24 小時） */
export const AVAILABILITY_SNAPSHOT_MAX_AGE_MS = 24 * 60 * 60 * 1000;

export function isSnapshotFresh(syncedAt: string, maxAgeMs = PRICING_SNAPSHOT_MAX_AGE_MS): boolean {
  const synced = Date.parse(syncedAt);
  if (Number.isNaN(synced)) return false;
  return Date.now() - synced <= maxAgeMs;
}
