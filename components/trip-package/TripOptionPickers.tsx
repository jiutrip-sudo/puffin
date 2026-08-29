"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { isTierBookable } from "@/lib/trip-pricing/corivo-availability";
import { BookingShimmer } from "./BookingPriceShimmer";
import { EcoHybridIcon } from "./EcoHybridIcon";
import type {
  AccommodationTier,
  AvailabilityStatus,
  PricingConfig,
  TierAvailabilityMap,
  VehicleTier,
} from "@/lib/trip-pricing/types";

const VISIBLE_VEHICLE_COUNT = 6;
const CARD_RADIUS = "rounded-[10px]";

function optionImageSrc(url: string, width: number) {
  if (url.includes("senlinmao.com/images/")) {
    return url.replace(/w_\d+/, `w_${width}`);
  }
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}w=${width}&q=80`;
}

function gearTypeLabel(gearType?: VehicleTier["gearType"]) {
  if (gearType === "manual") return "手排";
  if (gearType === "automatic") return "自排";
  return null;
}

function availabilityBadgeLabel(
  status: AvailabilityStatus | undefined,
  loading: boolean,
  active: boolean,
): string | null {
  if (!active || loading) return null;
  if (status === "UNAVAILABLE" || status === "SOLD_OUT") return "暫不可訂";
  if (status === "FEW_REMAINING") return "剩餘不多";
  return null;
}

function tierIsSelectable(
  status: AvailabilityStatus | undefined,
  loading: boolean,
  active: boolean,
): boolean {
  if (!active || loading) return true;
  return isTierBookable(status);
}

function tierGallery(tier: AccommodationTier) {
  if (tier.galleryImages?.length) return tier.galleryImages;
  return [tier.imageUrl];
}

type AccommodationPickerProps = {
  tiers: AccommodationTier[];
  intro?: string;
  selectedId: string;
  onSelect?: (id: string) => void;
  interactive?: boolean;
  compact?: boolean;
  tierAvailability?: TierAvailabilityMap;
  availabilityLoading?: boolean;
  availabilityActive?: boolean;
  pricingLoading?: boolean;
};

export function AccommodationTypePicker({
  tiers,
  intro,
  selectedId,
  onSelect,
  interactive = false,
  compact = false,
  tierAvailability,
  availabilityLoading = false,
  availabilityActive = false,
  pricingLoading = false,
}: AccommodationPickerProps) {
  const [activeTier, setActiveTier] = useState<AccommodationTier | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const closeModal = useCallback(() => {
    setActiveTier(null);
    setGalleryIndex(0);
  }, []);

  const openModal = useCallback((tier: AccommodationTier) => {
    setActiveTier(tier);
    setGalleryIndex(0);
  }, []);

  useEffect(() => {
    if (!activeTier) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeTier, closeModal]);

  const activeGallery = activeTier ? tierGallery(activeTier) : [];

  const showGalleryPrev = useCallback(() => {
    setGalleryIndex((index) =>
      activeGallery.length === 0
        ? 0
        : (index - 1 + activeGallery.length) % activeGallery.length,
    );
  }, [activeGallery.length]);

  const showGalleryNext = useCallback(() => {
    setGalleryIndex((index) =>
      activeGallery.length === 0 ? 0 : (index + 1) % activeGallery.length,
    );
  }, [activeGallery.length]);

  return (
    <div id="accommodation-options">
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
      <ul
        className={
          compact
            ? "space-y-2"
            : "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {tiers.map((tier) => {
          const isSelected = tier.id === selectedId;
          const status = tierAvailability?.[tier.id];
          const badge = availabilityBadgeLabel(
            status,
            availabilityLoading,
            availabilityActive,
          );
          const selectable = tierIsSelectable(
            status,
            availabilityLoading,
            availabilityActive,
          );

          return (
            <li key={tier.id} className={compact ? undefined : "min-h-0"}>
              <article
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isSelected
                    ? "border-primary bg-primary/10"
                    : "border-foreground/10 bg-primary-surface/15"
                } ${!selectable ? "opacity-60" : ""} ${compact ? "" : "flex flex-col"}`}
              >
                {!compact && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-surface/25">
                    <Image
                      src={optionImageSrc(tier.imageUrl, 640)}
                      alt={tier.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div
                  className={
                    compact
                      ? "flex flex-col gap-3 p-4 sm:p-5"
                      : "flex flex-1 flex-col p-4 sm:p-5"
                  }
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base font-bold text-foreground">
                        {tier.label}
                      </h4>
                      {availabilityLoading && availabilityActive ? (
                        <BookingShimmer variant="badge" />
                      ) : (
                        badge && (
                          <span className="rounded-full bg-foreground/8 px-2.5 py-0.5 text-xs font-semibold text-foreground/65">
                            {badge}
                          </span>
                        )
                      )}
                      {isSelected && pricingLoading && (
                        <BookingShimmer variant="badge" />
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                      {tier.description}
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => openModal(tier)}
                      className="rounded-full border border-foreground/15 px-4 py-2 text-xs font-semibold text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary/10"
                    >
                      查看
                    </button>
                    <div className="flex flex-wrap justify-end gap-2">
                    {interactive && onSelect ? (
                      isSelected ? (
                        <span
                          className="rounded-full bg-primary-dark px-4 py-2 text-xs font-semibold text-white"
                        >
                          已選
                        </span>
                      ) : selectable ? (
                        <button
                          type="button"
                          onClick={() => onSelect(tier.id)}
                          className="rounded-full bg-primary-dark px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary"
                        >
                          挑選{tier.label}
                        </button>
                      ) : (
                        <span
                          className="rounded-full border border-foreground/15 px-4 py-2 text-xs font-semibold text-foreground/55"
                        >
                          暫不可訂
                        </span>
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
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      {activeTier && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="accommodation-modal-title"
          onClick={closeModal}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-[800px] flex-col overflow-hidden rounded-[20px] bg-background shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 text-lg text-foreground/70 transition-colors hover:bg-foreground/10"
              aria-label="關閉"
            >
              ×
            </button>

            <div className="overflow-y-auto">
              <div className="px-6 pb-8 pt-10 md:px-10">
                <h4
                  id="accommodation-modal-title"
                  className="pr-12 text-2xl font-bold leading-tight text-foreground md:text-[28px]"
                >
                  {activeTier.modalTitle}
                </h4>

                {activeTier.paragraphs.length > 0 && (
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
                    {activeTier.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {activeGallery.length > 0 && (
                  <div className="relative mt-8">
                    <div className={`overflow-hidden ${CARD_RADIUS}`}>
                      <div
                        className={`relative aspect-[16/10] w-full overflow-hidden ${CARD_RADIUS} bg-primary-surface/25`}
                      >
                        <Image
                          src={optionImageSrc(
                            activeGallery[galleryIndex],
                            1200,
                          )}
                          alt={activeTier.label}
                          fill
                          className={`object-cover ${CARD_RADIUS}`}
                          sizes="800px"
                          priority
                        />
                      </div>
                    </div>

                    {activeGallery.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={showGalleryPrev}
                          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/90 px-3 py-2 text-sm font-semibold text-foreground shadow-md transition-colors hover:bg-background"
                          aria-label="上一張"
                        >
                          ←
                        </button>
                        <button
                          type="button"
                          onClick={showGalleryNext}
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/90 px-3 py-2 text-sm font-semibold text-foreground shadow-md transition-colors hover:bg-background"
                          aria-label="下一張"
                        >
                          →
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type VehiclePickerProps = {
  vehicles: VehicleTier[];
  intro?: string;
  selectedId: string;
  onSelect?: (id: string) => void;
  interactive?: boolean;
  pricingLoading?: boolean;
  compact?: boolean;
};

export function VehicleTypePicker({
  vehicles,
  intro,
  selectedId,
  onSelect,
  interactive = false,
  pricingLoading = false,
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
    : "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div
      id="vehicle-options"
      className="scroll-mt-[calc(var(--trip-sticky-offset)+0.75rem)]"
    >
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
          const gearbox = gearTypeLabel(vehicle.gearType);

          return (
            <li key={vehicle.id} className={compact ? undefined : "min-h-0"}>
              <article
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isSelected
                    ? "border-primary bg-primary/10"
                    : "border-foreground/10 bg-primary-surface/15"
                } ${compact ? "" : "flex flex-col"}`}
              >
                {!compact && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-surface/25">
                    <Image
                      src={optionImageSrc(vehicle.imageUrl, 640)}
                      alt={vehicle.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {gearbox && (
                      <span className="vehicle-gear-badge">{gearbox}</span>
                    )}
                  </div>
                )}
                <div
                  className={
                    compact
                      ? "flex flex-wrap items-start justify-between gap-3 p-4 sm:p-5"
                      : "flex flex-1 flex-col p-4 sm:p-5"
                  }
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-base font-bold text-foreground">
                        {vehicle.label.split("|")[0]?.trim() ?? vehicle.label}
                      </p>
                      {isSelected && pricingLoading && (
                        <BookingShimmer variant="badge" />
                      )}
                    </div>
                    {compact && gearbox && (
                      <span className="vehicle-gear-badge vehicle-gear-badge--inline">
                        {gearbox}
                      </span>
                    )}
                    {vehicle.co2Emission != null && (
                      <p className="mt-1 text-sm text-foreground/60">
                        CO₂ {vehicle.co2Emission} 克／公里
                      </p>
                    )}
                    {vehicle.co2Note && (
                      <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                        <EcoHybridIcon />
                        <span>{vehicle.co2Note}</span>
                      </p>
                    )}
                    {vehicle.footnote && (
                      <p
                        className={`text-sm leading-relaxed text-foreground/70 ${
                          vehicle.co2Emission != null || vehicle.co2Note
                            ? "mt-2"
                            : ""
                        }`}
                      >
                        {vehicle.footnote}
                      </p>
                    )}
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 ${
                      compact ? "" : "mt-3 justify-end"
                    }`}
                  >
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
                          onClick={() => onSelect(vehicle.id)}
                          className="rounded-full border border-foreground/20 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/10"
                        >
                          選擇
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
  accommodationInteractive?: boolean;
  vehicleInteractive?: boolean;
  compact?: boolean;
  accommodationAvailability?: TierAvailabilityMap;
  availabilityLoading?: boolean;
  availabilityActive?: boolean;
  pricingLoading?: boolean;
};

export function TripOptionPickers({
  pricingConfig,
  accommodationTier,
  vehicleTier,
  onAccommodationChange,
  onVehicleChange,
  interactive = false,
  accommodationInteractive,
  vehicleInteractive,
  compact = false,
  accommodationAvailability,
  availabilityLoading = false,
  availabilityActive = false,
  pricingLoading = false,
}: TripOptionPickersProps) {
  const accInteractive = accommodationInteractive ?? interactive;
  const vehInteractive = vehicleInteractive ?? interactive;

  return (
    <div className={compact ? "space-y-4" : "space-y-12"}>
      <AccommodationTypePicker
        tiers={pricingConfig.tiers}
        intro={pricingConfig.accommodationIntro}
        selectedId={accommodationTier}
        onSelect={onAccommodationChange}
        interactive={accInteractive}
        compact={compact}
        tierAvailability={accommodationAvailability}
        availabilityLoading={availabilityLoading}
        availabilityActive={availabilityActive}
        pricingLoading={pricingLoading}
      />
      <VehicleTypePicker
        vehicles={pricingConfig.vehicleTiers}
        intro={pricingConfig.vehicleIntro}
        selectedId={vehicleTier}
        onSelect={onVehicleChange}
        interactive={vehInteractive}
        pricingLoading={pricingLoading}
        compact={compact}
      />
    </div>
  );
}
