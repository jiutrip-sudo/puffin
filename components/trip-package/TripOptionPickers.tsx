"use client";

import { useEffect, useState } from "react";
import { formatIsk } from "@/lib/trip-pricing/calculate";
import type {
  AccommodationTier,
  PricingConfig,
  VehicleTier,
} from "@/lib/trip-pricing/types";

const VISIBLE_VEHICLE_COUNT = 6;

type AccommodationPickerProps = {
  tiers: AccommodationTier[];
  intro?: string;
  selectedId: string;
  onSelect?: (id: string) => void;
  interactive?: boolean;
  compact?: boolean;
};

export function AccommodationTypePicker({
  tiers,
  intro,
  selectedId,
  onSelect,
  interactive = false,
  compact = false,
}: AccommodationPickerProps) {
  const [detailId, setDetailId] = useState<string | null>(null);

  return (
    <div>
      {compact ? (
        <p className="mb-2 text-sm font-semibold text-foreground">住宿類型</p>
      ) : (
        <h3 className="text-lg font-bold text-foreground md:text-xl">
          選擇您的住宿類型
        </h3>
      )}
      {!compact && intro && (
        <p className="mt-3 text-sm leading-relaxed text-foreground/75">
          {intro}
        </p>
      )}
      <ul className={compact ? "space-y-2" : "mt-6 space-y-3"}>
        {tiers.map((tier) => {
          const isSelected = tier.id === selectedId;
          const showDetail = detailId === tier.id;

          return (
            <li key={tier.id}>
              <article
                className={`rounded-2xl border p-4 transition-colors sm:p-5 ${
                  isSelected
                    ? "border-primary bg-primary/10"
                    : "border-foreground/10 bg-primary-surface/15"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-bold text-foreground">
                      {tier.label}
                    </h4>
                    {(showDetail || isSelected) && (
                      <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                        {tier.description}
                      </p>
                    )}
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    {!isSelected && (
                      <button
                        type="button"
                        onClick={() =>
                          setDetailId(showDetail ? null : tier.id)
                        }
                        className="rounded-full border border-foreground/15 px-4 py-2 text-xs font-semibold text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary/10"
                      >
                        查看
                      </button>
                    )}
                    {interactive && onSelect ? (
                      isSelected ? (
                        <span
                          className="rounded-full bg-primary-dark px-4 py-2 text-xs font-semibold text-white"
                        >
                          已選
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            onSelect(tier.id);
                            setDetailId(null);
                          }}
                          className="rounded-full bg-primary-dark px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary"
                        >
                          挑選{tier.label}
                        </button>
                      )
                    ) : (
                      isSelected && (
                        <span
                          className="rounded-full bg-primary-dark px-4 py-2 text-xs font-semibold text-white"
                        >
                          已選
                        </span>
                      )
                    )}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

type VehiclePickerProps = {
  vehicles: VehicleTier[];
  intro?: string;
  selectedId: string;
  onSelect?: (id: string) => void;
  interactive?: boolean;
  showPricing?: boolean;
  compact?: boolean;
};

export function VehicleTypePicker({
  vehicles,
  intro,
  selectedId,
  onSelect,
  interactive = false,
  showPricing = false,
  compact = false,
}: VehiclePickerProps) {
  const [showAll, setShowAll] = useState(false);

  const selectedIndex = vehicles.findIndex((v) => v.id === selectedId);
  const hiddenCount = vehicles.length - VISIBLE_VEHICLE_COUNT;

  useEffect(() => {
    if (selectedIndex >= VISIBLE_VEHICLE_COUNT) {
      setShowAll(true);
    }
  }, [selectedIndex]);

  const visibleVehicles = showAll
    ? vehicles
    : vehicles.slice(0, VISIBLE_VEHICLE_COUNT);

  const vehicleListClass = compact
    ? "mt-2 space-y-2"
    : "mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div>
      {compact ? (
        <p className="mb-2 text-sm font-semibold text-foreground">租車車型</p>
      ) : (
        <h3 className="text-lg font-bold text-foreground md:text-xl">
          選擇您的租車車型
        </h3>
      )}
      {!compact && intro && (
        <p className="mt-3 text-sm leading-relaxed text-foreground/75">
          {intro}
        </p>
      )}
      <p className={compact ? "mt-3 text-sm font-medium text-foreground" : "mt-4 text-sm font-medium text-foreground"}>
        基礎碰撞險（CDW）
      </p>
      <ul className={vehicleListClass}>
        {visibleVehicles.map((vehicle) => {
          const isSelected = vehicle.id === selectedId;

          return (
            <li key={vehicle.id} className={compact ? undefined : "min-h-0"}>
              <article
                className={`rounded-2xl border p-4 transition-colors sm:p-5 ${
                  compact
                    ? ""
                    : "flex h-full flex-col"
                } ${
                  isSelected
                    ? "border-primary bg-primary/10"
                    : "border-foreground/10 bg-background"
                }`}
              >
                <div
                  className={
                    compact
                      ? "flex flex-wrap items-start justify-between gap-3"
                      : "flex flex-1 flex-col gap-3"
                  }
                >
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-bold text-foreground">
                      {vehicle.label}
                    </h4>
                    {vehicle.co2Emission != null && (
                      <p className="mt-1 text-sm text-foreground/60">
                        CO₂ {vehicle.co2Emission} 克／公里
                        {vehicle.co2Note ? ` ${vehicle.co2Note}` : ""}
                      </p>
                    )}
                    {vehicle.footnote && (
                      <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                        {vehicle.footnote}
                      </p>
                    )}
                    {showPricing && vehicle.addonTotal > 0 && (
                      <p className="mt-2 text-xs font-medium text-primary-dark">
                        升級 +{formatIsk(vehicle.addonTotal)}
                      </p>
                    )}
                  </div>
                  {interactive && onSelect ? (
                    isSelected ? (
                      <span
                        className={`rounded-full bg-primary-dark px-4 py-2 text-xs font-semibold text-white ${
                          compact ? "shrink-0" : "self-start"
                        }`}
                      >
                        已選
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onSelect(vehicle.id)}
                        className={`rounded-full border border-foreground/20 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/10 ${
                          compact ? "shrink-0" : "self-start"
                        }`}
                      >
                        選擇
                      </button>
                    )
                  ) : (
                    isSelected && (
                      <span
                        className={`rounded-full bg-primary-dark px-4 py-2 text-xs font-semibold text-white ${
                          compact ? "shrink-0" : "self-start"
                        }`}
                      >
                        已選
                      </span>
                    )
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      {!showAll && hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="mt-4 w-full rounded-xl border border-foreground/15 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary/10"
        >
          顯示更多選項
        </button>
      )}
    </div>
  );
}

type TripOptionPickersProps = {
  pricingConfig: PricingConfig;
  accommodationTier: string;
  vehicleTier: string;
  onAccommodationChange?: (id: string) => void;
  onVehicleChange?: (id: string) => void;
  interactive?: boolean;
  showPricing?: boolean;
  compact?: boolean;
};

export function TripOptionPickers({
  pricingConfig,
  accommodationTier,
  vehicleTier,
  onAccommodationChange,
  onVehicleChange,
  interactive = false,
  showPricing = false,
  compact = false,
}: TripOptionPickersProps) {
  return (
    <div className={compact ? "space-y-4" : "space-y-12"}>
      <AccommodationTypePicker
        tiers={pricingConfig.tiers}
        intro={pricingConfig.accommodationIntro}
        selectedId={accommodationTier}
        onSelect={onAccommodationChange}
        interactive={interactive}
        compact={compact}
      />
      <VehicleTypePicker
        vehicles={pricingConfig.vehicleTiers}
        intro={pricingConfig.vehicleIntro}
        selectedId={vehicleTier}
        onSelect={onVehicleChange}
        interactive={interactive}
        showPricing={showPricing}
        compact={compact}
      />
    </div>
  );
}
