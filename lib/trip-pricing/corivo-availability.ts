import {
  cachedFetchCorivoPackageAvailability,
  cachedFetchCorivoPackageItems,
  cachedFetchCorivoPackageTourPrice,
} from "./corivo-cached";
import type { CorivoTravelerCounts } from "./corivo-client";
import { packageIncludesVehicle } from "./calculate";
import {
  buildCorivoAvailabilitySelections,
  buildCorivoPriceItems,
} from "./corivo-rooms";
import { mapWithConcurrency } from "./map-with-concurrency";
import type {
  AvailabilityStatus,
  CorivoPricingConfig,
  TierAvailabilityMap,
  TripAvailabilityResult,
} from "./types";

const PROBE_TIMEOUT_MS = 25_000;
const ACCOMMODATION_PROBE_CONCURRENCY = 2;
const VEHICLE_PROBE_CONCURRENCY = 2;

type AvailabilityInput = {
  startDate: string;
  adults: number;
  children: number;
  infants: number;
  accommodationTier: string;
};

function isBookable(status: AvailabilityStatus | undefined): boolean {
  return status === "AVAILABLE" || status === "FEW_REMAINING";
}

export function isTierBookable(status: AvailabilityStatus | undefined): boolean {
  return isBookable(status);
}

function mapCorivoAvailabilityStatus(status: string): AvailabilityStatus {
  if (status === "AVAILABLE") return "AVAILABLE";
  if (status === "FEW_REMAINING") return "FEW_REMAINING";
  if (status === "SOLD_OUT") return "SOLD_OUT";
  return "UNAVAILABLE";
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

async function probeVehicleAvailability(
  instanceId: string,
  packageTourId: number,
  date: string,
  travelers: CorivoTravelerCounts,
  packageItems: Awaited<ReturnType<typeof cachedFetchCorivoPackageItems>>,
  classificationId: number,
  vehicleItemId: number,
): Promise<AvailabilityStatus> {
  try {
    const itemSelections = buildCorivoAvailabilitySelections(
      packageItems,
      classificationId,
      vehicleItemId,
      travelers,
    );
    const result = await cachedFetchCorivoPackageAvailability(instanceId, {
      packageTourId,
      date,
      allTravelers: travelers,
      itemSelections,
    });
    return mapCorivoAvailabilityStatus(result.availabilityStatus);
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

  const includesVehicle = packageIncludesVehicle(config);
  const baseVehicleItemId = includesVehicle
    ? (corivo.vehicleItems?.[corivo.baseVehicleTier ?? ""] ??
      Object.values(corivo.vehicleItems ?? {})[0])
    : undefined;

  if (includesVehicle && !baseVehicleItemId) {
    throw new Error("找不到預設租車選項");
  }

  const vehicleClassificationId =
    corivo.classifications[input.accommodationTier] ??
    corivo.classifications[config.tiers[0]?.id ?? ""];

  if (!vehicleClassificationId) {
    throw new Error("未知的住宿等級");
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

  const vehicleEntries = includesVehicle
    ? await mapWithConcurrency(
        config.vehicleTiers,
        VEHICLE_PROBE_CONCURRENCY,
        async (tier) => {
          const vehicleItemId = corivo.vehicleItems?.[tier.id];
          if (!vehicleItemId) {
            return [tier.id, "UNAVAILABLE"] as const;
          }

          try {
            const status = await probeWithTimeout(
              probeVehicleAvailability(
                corivo.instanceId,
                corivo.packageTourId,
                input.startDate,
                travelers,
                packageItems,
                vehicleClassificationId,
                vehicleItemId,
              ),
            );
            return [tier.id, status] as const;
          } catch {
            return [tier.id, "UNAVAILABLE"] as const;
          }
        },
      )
    : [];

  const accommodation: TierAvailabilityMap = Object.fromEntries(
    accommodationEntries,
  );
  const vehicles: TierAvailabilityMap = Object.fromEntries(vehicleEntries);

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
