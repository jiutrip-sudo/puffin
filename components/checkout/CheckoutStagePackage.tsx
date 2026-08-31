"use client";

import { useEffect, useMemo, useState } from "react";
import type { PricingConfig, TripAvailabilityResult } from "@/lib/trip-pricing/types";
import {
  isTierBookable,
  pickFirstBookableTier,
} from "@/lib/trip-pricing/corivo-availability";
import type { CheckoutSession } from "@/lib/checkout/types";
import { TripDateField } from "@/components/trip-package/TripDateField";
import {
  AccommodationTypePicker,
  VehicleTypePicker,
} from "@/components/trip-package/TripOptionPickers";
import { CheckoutRoomSelection } from "./CheckoutRoomSelection";
import { computeTripEndDate } from "@/lib/trip-date-utils";

type StagePackageProps = {
  pricingConfig: PricingConfig;
  session: CheckoutSession;
  onChange: (patch: Partial<CheckoutSession>) => void;
};

export function CheckoutStagePackage({
  pricingConfig,
  session,
  onChange,
}: StagePackageProps) {
  const tripDays = pricingConfig.tripDurationDays ?? 1;
  const endDate = computeTripEndDate(session.startDate, tripDays);

  const [tierAvailability, setTierAvailability] =
    useState<TripAvailabilityResult | null>(null);
  const [availabilityLoading, setAvailabilityLoading] = useState(false);

  const availabilityInput = useMemo(
    () => ({
      packageId: session.packageId,
      startDate: session.startDate,
      adults: session.adults,
      children: session.children,
      infants: session.infants,
      accommodationTier: session.accommodationTier,
    }),
    [
      session.packageId,
      session.startDate,
      session.adults,
      session.children,
      session.infants,
      session.accommodationTier,
    ],
  );

  useEffect(() => {
    if (!session.startDate) return;

    let cancelled = false;
    setAvailabilityLoading(true);

    const timer = window.setTimeout(async () => {
      try {
        const response = await fetch("/api/trips/pricing/availability", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(availabilityInput),
        });
        const data = (await response.json()) as TripAvailabilityResult & {
          error?: string;
        };

        if (!response.ok) {
          throw new Error(data.error ?? "查詢可訂狀態失敗");
        }

        if (!cancelled) {
          setTierAvailability(data);
        }
      } catch {
        if (!cancelled) {
          setTierAvailability(null);
        }
      } finally {
        if (!cancelled) {
          setAvailabilityLoading(false);
        }
      }
    }, 280);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [availabilityInput]);

  useEffect(() => {
    if (!tierAvailability || availabilityLoading) return;

    const tierIds = pricingConfig.tiers.map((tier) => tier.id);
    if (
      !isTierBookable(tierAvailability.accommodation[session.accommodationTier])
    ) {
      const nextAccommodation = pickFirstBookableTier(
        tierIds,
        tierAvailability.accommodation,
        session.accommodationTier,
      );
      if (nextAccommodation && nextAccommodation !== session.accommodationTier) {
        onChange({ accommodationTier: nextAccommodation });
      }
    }

    const vehicleIds = pricingConfig.vehicleTiers.map((tier) => tier.id);
    if (!isTierBookable(tierAvailability.vehicles[session.vehicleTier])) {
      const nextVehicle = pickFirstBookableTier(
        vehicleIds,
        tierAvailability.vehicles,
        session.vehicleTier,
      );
      if (nextVehicle && nextVehicle !== session.vehicleTier) {
        onChange({ vehicleTier: nextVehicle });
      }
    }
  }, [
    tierAvailability,
    availabilityLoading,
    session.accommodationTier,
    session.vehicleTier,
    pricingConfig.tiers,
    pricingConfig.vehicleTiers,
    onChange,
  ]);

  return (
    <div className="checkout-stage">
      <section className="checkout-block">
        <h2 className="checkout-block__title">您的旅行日期</h2>
        <p className="checkout-block__desc">
          您想什麼時候開始您的冰島行程？
        </p>
        <TripDateField
          label="出發日（從）"
          value={session.startDate}
          min={pricingConfig.bookingDateRange?.min}
          max={pricingConfig.bookingDateRange?.max}
          dualMonth
          onChange={(e) => onChange({ startDate: e.target.value })}
        />
        <p className="checkout-block__hint">結束日（至）：{endDate}</p>
      </section>

      <CheckoutRoomSelection
        pricingConfig={pricingConfig}
        session={session}
        onChange={onChange}
      />

      <section className="checkout-block">
        <h2 className="checkout-block__title">您的住宿</h2>
        <AccommodationTypePicker
          tiers={pricingConfig.tiers}
          selectedId={session.accommodationTier}
          onSelect={(id) => onChange({ accommodationTier: id })}
          interactive
          showHeading={false}
          rowLayout
          tierAvailability={tierAvailability?.accommodation}
          availabilityLoading={availabilityLoading}
          availabilityActive
        />
      </section>

      <section className="checkout-block">
        <h2 className="checkout-block__title">您的租車</h2>
        <VehicleTypePicker
          vehicles={pricingConfig.vehicleTiers}
          selectedId={session.vehicleTier}
          onSelect={(id) => onChange({ vehicleTier: id })}
          interactive
          showHeading={false}
          rowLayout
          tierAvailability={tierAvailability?.vehicles}
          availabilityLoading={availabilityLoading}
          availabilityActive
        />
      </section>
    </div>
  );
}
