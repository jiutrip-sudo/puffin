import { calculateCorivoTripPrice } from "./corivo-calculate";
import { fetchCorivoTierAvailability } from "./corivo-availability";
import {
  buildAvailabilitySnapshotKey,
  buildPricingSnapshotKey,
} from "./pricing-snapshot-keys";
import {
  readPackagePricingSnapshot,
} from "./pricing-snapshot-store";
import {
  isSnapshotFresh,
  type StoredAvailabilityEntry,
  type StoredPricingEntry,
} from "./pricing-snapshot-types";
import type {
  CorivoPricingConfig,
  PricingInput,
  PricingResult,
  TripAvailabilityResult,
} from "./types";

type AvailabilityLookupInput = {
  startDate: string;
  adults: number;
  children: number;
  infants: number;
};

function getFreshPricingEntry(
  snapshot: Awaited<ReturnType<typeof readPackagePricingSnapshot>>,
  input: PricingInput,
): StoredPricingEntry | null {
  if (!snapshot) return null;
  const key = buildPricingSnapshotKey(input);
  const entry = snapshot.prices[key];
  if (!entry || !isSnapshotFresh(entry.syncedAt)) return null;
  return entry;
}

function getFreshAvailabilityEntry(
  snapshot: Awaited<ReturnType<typeof readPackagePricingSnapshot>>,
  input: AvailabilityLookupInput,
): StoredAvailabilityEntry | null {
  if (!snapshot) return null;
  const key = buildAvailabilitySnapshotKey(input);
  const entry = snapshot.availability[key];
  if (!entry || !isSnapshotFresh(entry.syncedAt)) return null;
  return entry;
}

export async function resolveCorivoTripPrice(
  config: CorivoPricingConfig,
  input: PricingInput,
): Promise<PricingResult> {
  const snapshot = await readPackagePricingSnapshot(config.packageId);
  const cached = getFreshPricingEntry(snapshot, input);
  if (cached) return cached.result;

  return calculateCorivoTripPrice(config, input);
}

export async function resolveCorivoTierAvailability(
  config: CorivoPricingConfig,
  input: AvailabilityLookupInput,
): Promise<TripAvailabilityResult> {
  const snapshot = await readPackagePricingSnapshot(config.packageId);
  const cached = getFreshAvailabilityEntry(snapshot, input);
  if (cached) return cached.result;

  return fetchCorivoTierAvailability(config, input);
}
