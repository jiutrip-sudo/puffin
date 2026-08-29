import {
  cachedFetchCorivoPackageItems,
  cachedFetchCorivoPackageTourPrice,
} from "./corivo-cached";
import type { CorivoTravelerCounts } from "./corivo-client";
import { buildCorivoPriceItems } from "./corivo-rooms";
import { mapWithConcurrency } from "./map-with-concurrency";
import type {
  AvailabilityStatus,
  CorivoPricingConfig,
  TierAvailabilityMap,
  TripAvailabilityResult,
} from "./types";

const PROBE_TIMEOUT_MS = 25_000;
const ACCOMMODATION_PROBE_CONCURRENCY = 2;

type AvailabilityInput = {
  startDate: string;
  adults: number;
  children: number;
  infants: number;
};

function isBookable(status: AvailabilityStatus | undefined): boolean {
  return status === "AVAILABLE" || status === "FEW_REMAINING";
}

export function isTierBookable(status: AvailabilityStatus | undefined): boolean {
  return isBookable(status);
}

function allVehiclesAvailable(
  vehicleIds: string[],
): TierAvailabilityMap {
  return Object.fromEntries(
    vehicleIds.map((id) => [id, "AVAILABLE"] as const),
  );
}

async function probeTierPrice(
  instanceId: string,
  packageTourId: number,
  date: string,
  travelers: CorivoTravelerCounts,
  items: Awaited<ReturnType<typeof buildCorivoPriceItems>>,
  currency: string,
): Promise<AvailabilityStatus> {
  try {
    await cachedFetchCorivoPackageTourPrice(instanceId, {
      packageTourId,
      date,
      allTravelers: travelers,
      items,
      currencyCode: currency,
    });
    return "AVAILABLE";
  } catch {
    return "UNAVAILABLE";
  }
}

async function probeWithTimeout(
  promise: Promise<AvailabilityStatus>,
): Promise<AvailabilityStatus> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      promise,
      new Promise<AvailabilityStatus>((resolve) => {
        timer = setTimeout(() => resolve("AVAILABLE"), PROBE_TIMEOUT_MS);
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

export async function fetchCorivoTierAvailability(
  config: CorivoPricingConfig,
  input: AvailabilityInput,
): Promise<TripAvailabilityResult> {
  const corivo = config.corivo;
  const travelers: CorivoTravelerCounts = {
    adults: Math.max(0, input.adults),
    children: Math.max(0, input.children),
    infants: Math.max(0, input.infants),
  };

  const packageItems = await cachedFetchCorivoPackageItems(
    corivo.instanceId,
    corivo.packageTourId,
    travelers,
  );

  const baseVehicleItemId =
    corivo.vehicleItems[corivo.baseVehicleTier] ??
    Object.values(corivo.vehicleItems)[0];

  if (!baseVehicleItemId) {
    throw new Error("找不到預設租車選項");
  }

  const accommodationEntries = await mapWithConcurrency(
    Object.entries(corivo.classifications),
    ACCOMMODATION_PROBE_CONCURRENCY,
    async ([tierId, classificationId]) => {
      try {
        const items = buildCorivoPriceItems(
          packageItems,
          classificationId,
          baseVehicleItemId,
          travelers,
        );
        const status = await probeWithTimeout(
          probeTierPrice(
            corivo.instanceId,
            corivo.packageTourId,
            input.startDate,
            travelers,
            items,
            config.currency,
          ),
        );
        return [tierId, status] as const;
      } catch {
        return [tierId, "UNAVAILABLE"] as const;
      }
    },
  );

  const accommodation: TierAvailabilityMap = Object.fromEntries(
    accommodationEntries,
  );
  const vehicles = allVehiclesAvailable(
    config.vehicleTiers.map((tier) => tier.id),
  );

  return { accommodation, vehicles };
}

export function pickFirstBookableTier(
  tierIds: string[],
  availability: TierAvailabilityMap,
  fallbackId?: string,
): string | undefined {
  const match = tierIds.find((id) => isBookable(availability[id]));
  return match ?? fallbackId;
}
