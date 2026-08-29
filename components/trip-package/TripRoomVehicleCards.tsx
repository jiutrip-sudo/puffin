"use client";

import type { TierAvailabilityMap } from "@/lib/trip-pricing/types";
import type { PricingConfig } from "@/lib/trip-pricing/types";
import { TripOptionPickers } from "./TripOptionPickers";

type TripRoomVehicleCardsProps = {
  pricingConfig: PricingConfig;
  accommodationTier: string;
  vehicleTier: string;
  onAccommodationChange?: (id: string) => void;
  onVehicleChange?: (id: string) => void;
  accommodationAvailability?: TierAvailabilityMap;
  availabilityLoading?: boolean;
  availabilityActive?: boolean;
};

export function TripRoomVehicleCards({
  pricingConfig,
  accommodationTier,
  vehicleTier,
  onAccommodationChange,
  onVehicleChange,
  accommodationAvailability,
  availabilityLoading = false,
  availabilityActive = false,
}: TripRoomVehicleCardsProps) {
  return (
    <TripOptionPickers
      pricingConfig={pricingConfig}
      accommodationTier={accommodationTier}
      vehicleTier={vehicleTier}
      onAccommodationChange={onAccommodationChange}
      onVehicleChange={onVehicleChange}
      accommodationInteractive={Boolean(onAccommodationChange)}
      vehicleInteractive={Boolean(onVehicleChange)}
      showPricing={Boolean(onVehicleChange)}
      accommodationAvailability={accommodationAvailability}
      availabilityLoading={availabilityLoading}
      availabilityActive={availabilityActive}
    />
  );
}
