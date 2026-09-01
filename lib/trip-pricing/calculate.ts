import type { PricingConfig, PricingInput, PricingResult } from "./types";

function getSeasonalMultiplier(
  config: PricingConfig,
  startDate: string,
): number {
  if (!config.seasonalMultipliers?.length || !startDate) {
    return 1;
  }

  const month = new Date(startDate).getMonth() + 1;
  const match = config.seasonalMultipliers.find((entry) =>
    entry.months.includes(month),
  );
  return match?.multiplier ?? 1;
}

function getTier(config: PricingConfig, tierId: string) {
  return config.tiers.find((tier) => tier.id === tierId) ?? config.tiers[0];
}

function getVehicle(config: PricingConfig, vehicleTierId: string) {
  return (
    config.vehicleTiers.find((tier) => tier.id === vehicleTierId) ??
    config.vehicleTiers[0]
  );
}

export function calculateTripPrice(
  config: PricingConfig,
  input: PricingInput,
): PricingResult {
  const tier = getTier(config, input.accommodationTier);
  const vehicle = getVehicle(config, input.vehicleTier);
  const seasonal = getSeasonalMultiplier(config, input.startDate);
  const perPersonDouble = Math.round(tier.perPersonDouble * seasonal);

  const adultCount = Math.max(0, input.adults);
  const childCount = Math.max(0, input.children);
  const infantCount = Math.max(0, input.infants);

  const childAmount =
    childCount * perPersonDouble * config.ageBands.childMultiplier;
  const infantAmount =
    infantCount * perPersonDouble * config.ageBands.infantMultiplier;
  const adultAmount = adultCount * perPersonDouble;

  const subtotal = Math.round(adultAmount + childAmount + infantAmount);

  const needsSingleSupplement =
    input.roomType === "single" ||
    (adultCount === 1 && childCount === 0 && infantCount === 0);

  let singleSupplement = 0;
  if (needsSingleSupplement && adultCount > 0) {
    singleSupplement = Math.round(
      tier.singleSupplementPerNight * tier.nights * adultCount * seasonal,
    );
  }

  const vehicleAddon = Math.round(vehicle.addonTotal * seasonal);

  const total = subtotal + singleSupplement + vehicleAddon;
  const deposit = Math.round(total * config.depositRate);
  const promoCode = input.promoCode?.trim();

  return {
    perPersonDouble,
    subtotal,
    singleSupplement,
    vehicleAddon,
    total,
    deposit,
    currency: "ISK",
    travelerCount: adultCount + childCount + infantCount,
    vehicleLabel: vehicle.label,
    roomTypeLabel: needsSingleSupplement ? "單人房" : "雙人房",
    ...(promoCode
      ? {
          promoCodeApplied: promoCode,
          promoDiscount: 0,
          promoCodeInvalid: true,
        }
      : {}),
  };
}

export function formatIsk(amount: number): string {
  const rounded = Math.round(amount);
  const sign = rounded < 0 ? "-" : "";
  const digits = Math.abs(rounded).toString();
  const withCommas = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // Deterministic across Node SSR and browsers — is-IS ICU output differs by runtime.
  return `${sign}ISK ${withCommas}`;
}
