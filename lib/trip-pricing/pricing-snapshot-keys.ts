export type PricingSnapshotKeyInput = {
  startDate: string;
  adults: number;
  children: number;
  infants: number;
  accommodationTier: string;
  vehicleTier: string;
};

export type AvailabilitySnapshotKeyInput = {
  startDate: string;
  adults: number;
  children: number;
  infants: number;
};

export function buildPricingSnapshotKey(input: PricingSnapshotKeyInput): string {
  return [
    input.startDate,
    input.adults,
    input.children,
    input.infants,
    input.accommodationTier,
    input.vehicleTier,
  ].join("|");
}

export function buildAvailabilitySnapshotKey(
  input: AvailabilitySnapshotKeyInput,
): string {
  return [
    input.startDate,
    input.adults,
    input.children,
    input.infants,
  ].join("|");
}

export const PRICING_SNAPSHOT_KV_PREFIX = "puffin:pricing-snapshot:";

export function packageSnapshotKvKey(packageId: string): string {
  return `${PRICING_SNAPSHOT_KV_PREFIX}${packageId}`;
}
