"use client";

import type { PricingConfig } from "@/lib/trip-pricing/types";
import { TripOptionPickers } from "./TripOptionPickers";

type TripRoomVehicleCardsProps = {
  pricingConfig: PricingConfig;
  accommodationTier: string;
  vehicleTier: string;
};

export function TripRoomVehicleCards({
  pricingConfig,
  accommodationTier,
  vehicleTier,
}: TripRoomVehicleCardsProps) {
  return (
    <TripOptionPickers
      pricingConfig={pricingConfig}
      accommodationTier={accommodationTier}
      vehicleTier={vehicleTier}
      interactive={false}
    />
  );
}
