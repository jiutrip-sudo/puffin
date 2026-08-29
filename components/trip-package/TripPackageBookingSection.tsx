"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { PricingConfig, PricingResult } from "@/lib/trip-pricing/types";
import { formatIsk } from "@/lib/trip-pricing/calculate";
import { computeTripEndDate } from "@/lib/trip-date-utils";
import { TripBookingPanel } from "./TripBookingPanel";

function getDefaultDates(pricingConfig: PricingConfig) {
  const min = pricingConfig.bookingDateRange?.min ?? "";
  const tripDays = pricingConfig.tripDurationDays ?? 1;
  const startDate = min;
  const endDate = startDate ? computeTripEndDate(startDate, tripDays) : "";
  return { startDate, endDate };
}

type TripPackageBookingSectionProps = {
  packageId: string;
  packageTitle: string;
  pricingConfig: PricingConfig;
  children: (args: {
    desktopPanel: ReactNode;
    accommodationTier: string;
    setAccommodationTier: (value: string) => void;
    vehicleTier: string;
    setVehicleTier: (value: string) => void;
  }) => ReactNode;
};

export function TripPackageBookingSection({
  packageId,
  packageTitle,
  pricingConfig,
  children,
}: TripPackageBookingSectionProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  const defaultTier = pricingConfig.tiers[0]?.id ?? "budget";
  const defaultVehicle = pricingConfig.vehicleTiers[0]?.id ?? "cfmn";
  const defaultDates = getDefaultDates(pricingConfig);
  const [startDate, setStartDate] = useState(defaultDates.startDate);
  const [endDate, setEndDate] = useState(defaultDates.endDate);
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infants, setInfants] = useState(0);
  const [accommodationTier, setAccommodationTier] = useState(defaultTier);
  const [vehicleTier, setVehicleTier] = useState(defaultVehicle);
  const [pricing, setPricing] = useState<PricingResult | null>(null);
  const [pricingLoading, setPricingLoading] = useState(true);
  const [pricingError, setPricingError] = useState<string | null>(null);

  const pricingInput = useMemo(
    () => ({
      packageId,
      startDate,
      adults,
      children: childrenCount,
      infants,
      accommodationTier,
      roomType: "double" as const,
      vehicleTier,
    }),
    [
      packageId,
      startDate,
      adults,
      childrenCount,
      infants,
      accommodationTier,
      vehicleTier,
    ],
  );

  useEffect(() => {
    let cancelled = false;
    setPricingLoading(true);
    setPricingError(null);

    const timer = window.setTimeout(async () => {
      try {
        const response = await fetch("/api/trips/pricing/calculate", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(pricingInput),
        });
        const data = (await response.json()) as PricingResult & {
          error?: string;
        };

        if (!response.ok) {
          throw new Error(data.error ?? "計價失敗");
        }

        if (!cancelled) {
          setPricing(data);
        }
      } catch (error) {
        if (!cancelled) {
          setPricing(null);
          setPricingError(
            error instanceof Error ? error.message : "計價時發生錯誤",
          );
        }
      } finally {
        if (!cancelled) {
          setPricingLoading(false);
        }
      }
    }, 280);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pricingInput]);

  useEffect(() => {
    if (!sheetOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheetOpen]);

  const panelProps = {
    packageId,
    packageTitle,
    pricingConfig,
    startDate,
    endDate,
    onStartDateChange: (value: string) => {
      setStartDate(value);
      setEndDate(
        computeTripEndDate(value, pricingConfig.tripDurationDays ?? 1),
      );
    },
    adults,
    setAdults,
    children: childrenCount,
    setChildren: setChildrenCount,
    infants,
    setInfants,
    accommodationTier,
    vehicleTier,
    pricing,
    pricingLoading,
    pricingError,
  };

  const desktopPanel = (
    <div className="sticky top-[var(--trip-sticky-offset)]">
      <TripBookingPanel {...panelProps} variant="sidebar" />
    </div>
  );

  const mobileBar = (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-[80] border-t border-foreground/10 bg-background/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md lg:hidden"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <button
            type="button"
            onClick={() => setSheetOpen(true)}
            className="min-w-0 flex-1 text-left"
            aria-expanded={sheetOpen}
          >
            <p className="text-xs text-foreground/55">套餐總價</p>
            <p className="text-lg font-bold tabular-nums text-foreground">
              {pricingLoading
                ? "計算中…"
                : pricingError
                  ? "請調整選項"
                  : pricing
                    ? formatIsk(pricing.total)
                    : "—"}
            </p>
            <p className="text-xs text-foreground/55">
              {pricingLoading || !pricing
                ? "依出發日與選項計算"
                : `訂金 ${formatIsk(pricing.deposit)}`}
            </p>
          </button>
          <button
            type="button"
            onClick={() => setSheetOpen(true)}
            className="shrink-0 rounded-full bg-primary-dark px-5 py-3 text-sm font-bold text-white"
          >
            查看費用
          </button>
        </div>
      </div>

      {sheetOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="關閉費用計算"
            onClick={() => setSheetOpen(false)}
          />
          <div
            className="absolute inset-x-0 bottom-0 max-h-[92vh] overflow-y-auto rounded-t-2xl bg-background p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-2xl"
          >
            <TripBookingPanel
              {...panelProps}
              variant="sheet"
              onCloseSheet={() => setSheetOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      {children({
        desktopPanel,
        accommodationTier,
        setAccommodationTier,
        vehicleTier,
        setVehicleTier,
      })}
      {mobileBar}
    </>
  );
}
