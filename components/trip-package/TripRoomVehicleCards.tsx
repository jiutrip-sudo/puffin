"use client";

import type { PricingConfig } from "@/lib/trip-pricing/types";
import { TripOptionPickers } from "./TripOptionPickers";

type TripRoomVehicleCardsProps = {
  pricingConfig: PricingConfig;
  accommodationTier: string;
  vehicleTier: string;
  onAccommodationChange?: (id: string) => void;
  onVehicleChange?: (id: string) => void;
};

export function TripRoomVehicleCards({
  pricingConfig,
  accommodationTier,
  vehicleTier,
  onAccommodationChange,
  onVehicleChange,
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
    />
  );
}
