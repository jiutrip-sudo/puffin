import {
  fetchCorivoPackageItems,
  fetchCorivoPackageTourPrice,
  type CorivoTravelerCounts,
} from "./corivo-client";
import { buildCorivoPriceItems, getRoomTypeLabel } from "./corivo-rooms";
import type { CorivoPricingConfig, PricingInput, PricingResult } from "./types";

export function getPricePerPerson(
  total: number,
  counts: CorivoTravelerCounts,
): number {
  const travelerCount = counts.adults + counts.children + counts.infants;
  const divisor = travelerCount > 0 ? travelerCount : 1;
  return Math.round(total / divisor);
}

export async function calculateCorivoTripPrice(
  config: CorivoPricingConfig,
  input: PricingInput,
): Promise<PricingResult> {
  const corivo = config.corivo;
  const travelers: CorivoTravelerCounts = {
    adults: Math.max(0, input.adults),
    children: Math.max(0, input.children),
    infants: Math.max(0, input.infants),
  };

  const classificationId = corivo.classifications[input.accommodationTier];
  if (!classificationId) {
    throw new Error("未知的住宿等級");
  }

  const vehicleItemId = corivo.vehicleItems[input.vehicleTier];
  if (!vehicleItemId) {
    throw new Error("未知的租車車型");
  }

  const baseVehicleItemId =
    corivo.vehicleItems[corivo.baseVehicleTier] ?? vehicleItemId;

  const packageItems = await fetchCorivoPackageItems(
    corivo.instanceId,
    corivo.packageTourId,
    travelers,
  );

  const items = buildCorivoPriceItems(
    packageItems,
    classificationId,
    vehicleItemId,
    travelers,
  );

  const baseItems = buildCorivoPriceItems(
    packageItems,
    classificationId,
    baseVehicleItemId,
    travelers,
  );

  const [price, basePrice] = await Promise.all([
    fetchCorivoPackageTourPrice(corivo.instanceId, {
      packageTourId: corivo.packageTourId,
      date: input.startDate,
      allTravelers: travelers,
      items,
      currencyCode: config.currency,
    }),
    fetchCorivoPackageTourPrice(corivo.instanceId, {
      packageTourId: corivo.packageTourId,
      date: input.startDate,
      allTravelers: travelers,
      items: baseItems,
      currencyCode: config.currency,
    }),
  ]);

  const total = price.totalPriceInCurrency ?? price.totalPrice;
  const baseTotal = basePrice.totalPriceInCurrency ?? basePrice.totalPrice;
  const vehicleTier =
    config.vehicleTiers.find((tier) => tier.id === input.vehicleTier) ??
    config.vehicleTiers[0];

  const deposit = Math.round(total * config.depositRate);

  return {
    perPersonDouble: getPricePerPerson(total, travelers),
    subtotal: total,
    singleSupplement: 0,
    vehicleAddon: Math.max(0, total - baseTotal),
    total,
    deposit,
    currency: "ISK",
    travelerCount: travelers.adults + travelers.children + travelers.infants,
    vehicleLabel: vehicleTier.label,
    roomTypeLabel: getRoomTypeLabel(travelers),
  };
}
