"use client";

import { useEffect, useMemo, useState } from "react";
import { COMPANY_INFO } from "@/lib/company-info";
import { formatIsk } from "@/lib/trip-pricing/calculate";
import { TripDateField } from "./TripDateField";
import type {
  PricingConfig,
  PricingResult,
} from "@/lib/trip-pricing/types";

export type TripBookingPanelControlledProps = {
  packageId: string;
  packageTitle: string;
  pricingConfig: PricingConfig;
  variant?: "sidebar" | "sheet";
  onCloseSheet?: () => void;
  startDate: string;
  endDate: string;
  onStartDateChange: (value: string) => void;
  adults: number;
  setAdults: (value: number) => void;
  children: number;
  setChildren: (value: number) => void;
  infants: number;
  setInfants: (value: number) => void;
  accommodationTier: string;
  vehicleTier: string;
  pricing: PricingResult | null;
  pricingLoading?: boolean;
  pricingError?: string | null;
};

type PickerMode = "guest" | null;

function scrollToSection(
  sectionId: string,
  isSheet: boolean,
  onCloseSheet?: () => void,
) {
  const scroll = () => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const page = document.querySelector(".trip-package-page");
    const offsetRaw = page
      ? getComputedStyle(page).getPropertyValue("--trip-sticky-offset")
      : "0";
    const stickyOffset = Number.parseFloat(offsetRaw) || 0;
    const top =
      target.getBoundingClientRect().top + window.scrollY - stickyOffset - 8;

    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  if (isSheet && onCloseSheet) {
    onCloseSheet();
    window.setTimeout(scroll, 150);
    return;
  }

  scroll();
}

function formatGuestSummary(
  adults: number,
  children: number,
  infants: number,
): string {
  const parts: string[] = [];
  if (adults > 0) parts.push(`${adults} 位成人`);
  if (children > 0) parts.push(`${children} 位兒童`);
  if (infants > 0) parts.push(`${infants} 位嬰兒`);
  return parts.join("、");
}

function truncateLabel(text: string, max = 16): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max)}…`;
}

function NumberStepper({
  label,
  hint,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-1">
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        {hint && <p className="text-xs text-foreground/55">{hint}</p>}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={`減少${label}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-background text-base font-semibold transition-colors hover:border-primary hover:bg-primary/10 disabled:opacity-40"
          disabled={value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
        >
          −
        </button>
        <span className="min-w-[2ch] text-center text-sm font-semibold tabular-nums">
          {value}
        </span>
        <button
          type="button"
          aria-label={`增加${label}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-background text-base font-semibold transition-colors hover:border-primary hover:bg-primary/10 disabled:opacity-40"
          disabled={value >= max}
          onClick={() => onChange(Math.min(max, value + 1))}
        >
          +
        </button>
      </div>
    </div>
  );
}

function OptionChip({
  label,
  value,
  onClick,
}: {
  label: string;
  value: string;
  onClick: () => void;
}) {
  return (
    <button type="button" className="booking-option-chip" onClick={onClick}>
      <span className="min-w-0">
        <span className="booking-option-chip-label">{label}</span>
        <span className="booking-option-chip-value">{value}</span>
      </span>
      <span className="booking-option-chevron" aria-hidden="true">››</span>
    </button>
  );
}

export function TripBookingPanel({
  packageTitle,
  pricingConfig,
  variant = "sidebar",
  onCloseSheet,
  startDate,
  endDate,
  onStartDateChange,
  adults,
  setAdults,
  children,
  setChildren,
  infants,
  setInfants,
  accommodationTier,
  vehicleTier,
  pricing,
  pricingLoading = false,
  pricingError = null,
}: TripBookingPanelControlledProps) {
  const [priceFlash, setPriceFlash] = useState(false);
  const [pickerOpen, setPickerOpen] = useState<PickerMode>(null);

  useEffect(() => {
    if (!pricing) return;
    setPriceFlash(true);
    const timer = window.setTimeout(() => setPriceFlash(false), 400);
    return () => window.clearTimeout(timer);
  }, [pricing?.total]);

  const bookHref = useMemo(() => {
    const contact = COMPANY_INFO.contact.find((c) => c.label === "信箱");
    const email = contact?.href?.replace("mailto:", "") ?? "";
    const subject = encodeURIComponent(`預訂詢價：${packageTitle}`);
    const tierLabel =
      pricingConfig.tiers.find((t) => t.id === accommodationTier)?.label ??
      accommodationTier;
    const vehicleLabel =
      pricing?.vehicleLabel ??
      pricingConfig.vehicleTiers.find((v) => v.id === vehicleTier)?.label ??
      vehicleTier;
    const body = encodeURIComponent(
      [
        `行程：${packageTitle}`,
        `出發日期（從）：${startDate || "未選擇"}`,
        `結束日期（至）：${endDate || "未選擇"}`,
        `成人：${adults}、兒童：${children}、嬰兒：${infants}`,
        `住宿類型：${tierLabel}`,
        `車型：${vehicleLabel}`,
        pricing
          ? `套餐總價：${formatIsk(pricing.total)}`
          : "套餐總價：待計算",
        pricing ? `訂金（20%）：${formatIsk(pricing.deposit)}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [
    packageTitle,
    startDate,
    endDate,
    adults,
    children,
    infants,
    accommodationTier,
    vehicleTier,
    pricing,
    pricingConfig.tiers,
    pricingConfig.vehicleTiers,
  ]);

  const isSheet = variant === "sheet";
  const bookingMin = pricingConfig.bookingDateRange?.min;
  const bookingMax = pricingConfig.bookingDateRange?.max;

  const accommodationLabel =
    pricingConfig.tiers.find((t) => t.id === accommodationTier)?.label ??
    "選擇住宿";
  const vehicleShort = truncateLabel(
    (
      pricing?.vehicleLabel ??
      pricingConfig.vehicleTiers.find((v) => v.id === vehicleTier)?.label ??
      ""
    )
      .split("|")[0]
      ?.trim() ?? "",
  );
  const guestSummary = formatGuestSummary(adults, children, infants);
  const minAdults = pricingConfig.minAdults ?? 1;
  const maxTravelers = pricingConfig.maxTravelers ?? 9;
  const maxInfantsLimit = pricingConfig.maxInfants ?? 2;
  const maxAdults = Math.max(
    minAdults,
    maxTravelers - children - infants,
  );
  const maxChildren = Math.max(0, maxTravelers - adults - infants);
  const maxInfants = Math.min(
    maxInfantsLimit,
    Math.max(0, maxTravelers - adults - children),
  );
  const startPriceLabel = pricingLoading
    ? "計算中…"
    : pricing
      ? formatIsk(pricing.perPersonDouble)
      : "—";
  const totalPriceLabel = pricingLoading
    ? "計算中…"
    : pricing
      ? formatIsk(pricing.total)
      : "—";

  return (
    <div
      className={`booking-panel-card p-4 ${isSheet ? "" : "lg:p-5"}`}
    >
      {isSheet && (
        <div className="mb-3 flex items-center justify-end">
          {onCloseSheet && (
            <button
              type="button"
              onClick={onCloseSheet}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground/70 hover:bg-foreground/5"
              aria-label="關閉"
            >
              關閉
            </button>
          )}
        </div>
      )}

      <p className="booking-panel-start-price tabular-nums">
        {startPriceLabel}
        {!pricingLoading && pricing && (
          <span className="booking-panel-start-suffix">起</span>
        )}
      </p>

      {pricingError && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          {pricingError}
        </p>
      )}

      <div className="mt-4 space-y-2.5">
        <div className="grid grid-cols-2 gap-2.5">
          <TripDateField
            label="從"
            value={startDate}
            min={bookingMin}
            max={bookingMax}
            onChange={(e) => onStartDateChange(e.target.value)}
          />
          <TripDateField label="至" value={endDate} disabled />
        </div>

        <button
          type="button"
          className="booking-field w-full text-left"
          onClick={() =>
            setPickerOpen((current) =>
              current === "guest" ? null : "guest",
            )
          }
          aria-expanded={pickerOpen === "guest"}
        >
          <span className="booking-field-label">旅客</span>
          <span className="booking-field-value">{guestSummary}</span>
        </button>

        {pickerOpen === "guest" && (
          <div className="booking-guest-panel space-y-2">
            <NumberStepper
              label="成人"
              hint="12 歲以上"
              value={adults}
              min={minAdults}
              max={maxAdults}
              onChange={(value) =>
                setAdults(
                  Math.min(
                    Math.max(minAdults, value),
                    maxTravelers - children - infants,
                  ),
                )
              }
            />
            <NumberStepper
              label="兒童"
              hint="2–11 歲"
              value={children}
              min={0}
              max={maxChildren}
              onChange={(value) =>
                setChildren(
                  Math.min(
                    Math.max(0, value),
                    maxTravelers - adults - infants,
                  ),
                )
              }
            />
            <NumberStepper
              label="嬰兒"
              hint="0–1 歲"
              value={infants}
              min={0}
              max={maxInfants}
              onChange={(value) =>
                setInfants(
                  Math.min(
                    Math.max(0, value),
                    Math.min(
                      maxInfantsLimit,
                      maxTravelers - adults - children,
                    ),
                  ),
                )
              }
            />
          </div>
        )}

        <div className="grid grid-cols-2 gap-2.5">
          <OptionChip
            label="住宿"
            value={accommodationLabel}
            onClick={() =>
              scrollToSection("room-vehicle", isSheet, onCloseSheet)
            }
          />
          <OptionChip
            label="租車"
            value={vehicleShort}
            onClick={() =>
              scrollToSection("vehicle-options", isSheet, onCloseSheet)
            }
          />
        </div>
      </div>

      <div className="booking-panel-total-row mt-5">
        <span className="booking-panel-total-label">總價</span>
        <span
          className={`booking-panel-total-amount tabular-nums ${
            priceFlash ? "is-flash" : ""
          }`}
        >
          {totalPriceLabel}
        </span>
      </div>

      <a
        href={bookHref}
        className={`booking-panel-cta mt-4 ${pricingLoading || !pricing ? "pointer-events-none opacity-60" : ""}`}
      >
        立即預訂
      </a>
    </div>
  );
}
