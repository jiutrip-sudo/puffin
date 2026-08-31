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
  vehicleAvailability?: TierAvailabilityMap;
  availabilityLoading?: boolean;
  availabilityActive?: boolean;
  pricingLoading?: boolean;
};

export function TripRoomVehicleCards({
  pricingConfig,
  accommodationTier,
  vehicleTier,
  onAccommodationChange,
  onVehicleChange,
  accommodationAvailability,
  vehicleAvailability,
  availabilityLoading = false,
  availabilityActive = false,
  pricingLoading = false,
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
      accommodationAvailability={accommodationAvailability}
      vehicleAvailability={vehicleAvailability}
      availabilityLoading={availabilityLoading}
      availabilityActive={availabilityActive}
      pricingLoading={pricingLoading}
    />
  );
}
