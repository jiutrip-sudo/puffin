"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { formatIsk } from "@/lib/trip-pricing/calculate";
import type { PricingConfig, PricingResult } from "@/lib/trip-pricing/types";
import type { CheckoutSession, CheckoutStepId } from "@/lib/checkout/types";
import { BookingShimmer } from "@/components/trip-package/BookingPriceShimmer";
import { RoomTypeBedIcon } from "@/components/trip-package/RoomTypeBedIcon";
import { occupanciesToRoomSlots } from "@/lib/checkout/room-occupancy";
import { computeTripEndDate } from "@/lib/trip-date-utils";
import type { CorivoOptionalExtraDay } from "@/lib/checkout/corivo-optional-extras";
import {
  buildExtraSidebarLines,
  formatRoomOccupancyLine,
} from "@/lib/checkout/extra-sidebar-lines";
import { getTripPackageByPackageId } from "@/lib/trip-packages/registry";

type CheckoutSidebarProps = {
  pricingConfig: PricingConfig;
  session: CheckoutSession;
  step?: CheckoutStepId;
  onPrimaryAction?: () => void;
};

function formatChineseDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map((part) => Number(part));
  if (!year || !month || !day) return dateStr;
  return `${year}年${month}月${day}日`;
}

function formatTravelerSummary(session: CheckoutSession): string {
  const parts: string[] = [];
  if (session.adults > 0) parts.push(`${session.adults} 位成人`);
  if (session.children > 0) parts.push(`${session.children} 名兒童`);
  if (session.infants > 0) parts.push(`${session.infants} 名嬰兒`);
  return parts.join("、");
}

function gearTypeSuffix(gearType?: "automatic" | "manual"): string | null {
  if (gearType === "manual") return "手排";
  if (gearType === "automatic") return "自排";
  return null;
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="checkout-sidebar__meta-icon" aria-hidden="true">
      <rect
        x="4"
        y="5"
        width="16"
        height="16"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function SteeringIcon() {
  return (
    <svg viewBox="0 0 24 24" className="checkout-sidebar__detail-icon" aria-hidden="true">
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 5v2M12 17v2M5 12h2M17 12h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="checkout-sidebar__detail-icon" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M6 20c0-3.5 2.7-6 6-6s6 2.5 6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BedIcon() {
  return <RoomTypeBedIcon className="checkout-sidebar__detail-icon" />;
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="checkout-sidebar__detail-icon" aria-hidden="true">
      <path
        d="M5 16h14l-1.2-4.2A2 2 0 0 0 15.9 9H8.1a2 2 0 0 0-1.9 1.3L5 16Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="16" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16" cy="16" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function CheckoutSidebar({
  pricingConfig,
  session,
  step = 1,
  onPrimaryAction,
}: CheckoutSidebarProps) {
  const [pricing, setPricing] = useState<PricingResult | null>(null);
  const [packagePricing, setPackagePricing] = useState<PricingResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [packageOpen, setPackageOpen] = useState(true);
  const [extrasOpen, setExtrasOpen] = useState(true);
  const [extrasCatalog, setExtrasCatalog] = useState<CorivoOptionalExtraDay[]>([]);
  const [extrasCatalogLoading, setExtrasCatalogLoading] = useState(false);

  const accommodationTier =
    pricingConfig.tiers.find((t) => t.id === session.accommodationTier);
  const accommodationLabel = accommodationTier?.label ?? session.accommodationTier;

  const vehicleTier =
    pricingConfig.vehicleTiers.find((v) => v.id === session.vehicleTier);
  const vehicleTitle =
    vehicleTier?.footnote?.trim() ||
    vehicleTier?.label.split("|")[0]?.trim() ||
    session.vehicleTier;
  const vehicleGear = gearTypeSuffix(vehicleTier?.gearType);

  const extraPackageItemIds = useMemo(
    () => session.selectedExtras.map((extra) => extra.packageItemId),
    [session.selectedExtras],
  );

  const pricingInput = useMemo(
    () => ({
      packageId: session.packageId,
      startDate: session.startDate,
      adults: session.adults,
      children: session.children,
      infants: session.infants,
      accommodationTier: session.accommodationTier,
      roomType: "double" as const,
      vehicleTier: session.vehicleTier,
      roomSlots: occupanciesToRoomSlots(session.roomOccupancies),
      extraPackageItemIds:
        extraPackageItemIds.length > 0 ? extraPackageItemIds : undefined,
    }),
    [session, extraPackageItemIds],
  );

  const pricingInputBase = useMemo(
    () => ({
      packageId: session.packageId,
      startDate: session.startDate,
      adults: session.adults,
      children: session.children,
      infants: session.infants,
      accommodationTier: session.accommodationTier,
      roomType: "double" as const,
      vehicleTier: session.vehicleTier,
      roomSlots: occupanciesToRoomSlots(session.roomOccupancies),
    }),
    [session],
  );

  const extraSidebarLines = useMemo(
    () =>
      buildExtraSidebarLines(
        session.selectedExtras,
        session.travelers,
        extrasCatalog,
      ),
    [session.selectedExtras, session.travelers, extrasCatalog],
  );

  const extrasSubtotalFromLines = useMemo(
    () => extraSidebarLines.reduce((sum, line) => sum + line.amount, 0),
    [extraSidebarLines],
  );

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetch("/api/trips/pricing/calculate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(pricingInput),
    })
      .then(async (response) => {
        const data = (await response.json()) as PricingResult & { error?: string };
        if (!response.ok) {
          throw new Error(data.error ?? "計價失敗");
        }
        if (!cancelled) setPricing(data);
      })
      .catch(() => {
        if (!cancelled) setPricing(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [pricingInput]);

  useEffect(() => {
    if (session.selectedExtras.length === 0) {
      setPackagePricing(null);
      return;
    }

    let cancelled = false;

    fetch("/api/trips/pricing/calculate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(pricingInputBase),
    })
      .then(async (response) => {
        const data = (await response.json()) as PricingResult & { error?: string };
        if (!response.ok) {
          throw new Error(data.error ?? "計價失敗");
        }
        if (!cancelled) setPackagePricing(data);
      })
      .catch(() => {
        if (!cancelled) setPackagePricing(null);
      });

    return () => {
      cancelled = true;
    };
  }, [pricingInputBase, session.selectedExtras.length]);

  useEffect(() => {
    if (session.selectedExtras.length === 0) {
      setExtrasCatalog([]);
      setExtrasCatalogLoading(false);
      return;
    }

    let cancelled = false;
    setExtrasCatalogLoading(true);

    fetch("/api/checkout/optional-extras", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        packageId: session.packageId,
        startDate: session.startDate,
        adults: session.adults,
        children: session.children,
        infants: session.infants,
      }),
    })
      .then(async (response) => {
        const data = (await response.json()) as {
          days?: CorivoOptionalExtraDay[];
          error?: string;
        };
        if (!response.ok) {
          throw new Error(data.error ?? "取得活動目錄失敗");
        }
        if (!cancelled) setExtrasCatalog(data.days ?? []);
      })
      .catch(() => {
        if (!cancelled) setExtrasCatalog([]);
      })
      .finally(() => {
        if (!cancelled) setExtrasCatalogLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [
    session.packageId,
    session.startDate,
    session.adults,
    session.children,
    session.infants,
    session.selectedExtras.length,
  ]);

  useEffect(() => {
    if (session.selectedExtras.length > 0) {
      setExtrasOpen(true);
    }
  }, [session.selectedExtras.length]);

  const tripDays = pricingConfig.tripDurationDays ?? 1;
  const tripNights = Math.max(0, tripDays - 1);
  const endDate = computeTripEndDate(session.startDate, tripDays);
  const depositRate = pricingConfig.depositRate ?? 0.2;
  const deposit = pricing ? Math.round(pricing.total * depositRate) : 0;
  const roomCount = session.roomOccupancies.length;
  const hasExtras = session.selectedExtras.length > 0;
  const packageSubtotal =
    hasExtras && packagePricing
      ? packagePricing.total
      : pricing?.total ?? null;
  const extrasSubtotal =
    hasExtras && pricing && packagePricing
      ? pricing.total - packagePricing.total
      : hasExtras
        ? extrasSubtotalFromLines
        : 0;
  const extrasLinesLoading = hasExtras && extrasCatalogLoading;
  const sidebarCta =
    step === 1
      ? { label: "添加自選項目", visible: Boolean(onPrimaryAction) }
      : step === 2
        ? { label: "輸入旅客資訊", visible: Boolean(onPrimaryAction) }
        : step === 3
          ? { label: "前往付款", visible: Boolean(onPrimaryAction) }
          : { label: "", visible: false };

  const tripPackage = getTripPackageByPackageId(session.packageId);
  const sidebarHeroImage =
    tripPackage?.heroImage ?? tripPackage?.gallery?.[0]?.url ?? null;

  return (
    <aside className="checkout-sidebar">
      {sidebarHeroImage && (
        <div className="checkout-sidebar__hero">
          <Image
            src={sidebarHeroImage}
            alt=""
            fill
            className="checkout-sidebar__hero-image"
            sizes="(min-width: 1024px) 360px, 100vw"
            priority
          />
        </div>
      )}

      <div className="checkout-sidebar__body">
        <h1 className="checkout-sidebar__headline">{session.packageTitle}</h1>

        <div className="checkout-sidebar__date-block">
        <div className="checkout-sidebar__date-row">
          <CalendarIcon />
          <p className="checkout-sidebar__date-range">
            {formatChineseDate(session.startDate)} - {formatChineseDate(endDate)}
          </p>
        </div>
        <p className="checkout-sidebar__duration">
          {tripDays} 天 / {tripNights} 夜
        </p>
      </div>

      <hr className="checkout-sidebar__divider" />

      <div className="checkout-sidebar__package-section">
        <button
          type="button"
          className="checkout-sidebar__package-toggle"
          onClick={() => setPackageOpen((open) => !open)}
          aria-expanded={packageOpen}
        >
          <span>您的旅行團套餐</span>
          <span
            className={`checkout-sidebar__chevron${packageOpen ? " checkout-sidebar__chevron--open" : ""}`}
            aria-hidden="true"
          >
            ›
          </span>
        </button>

        {packageOpen && (
          <ul className="checkout-sidebar__detail-list">
            <li className="checkout-sidebar__detail-item">
              <SteeringIcon />
              <span>自駕套餐</span>
            </li>
            <li className="checkout-sidebar__detail-item checkout-sidebar__detail-item--split">
              <div className="checkout-sidebar__detail-main">
                <PersonIcon />
                <span>{formatTravelerSummary(session)}</span>
              </div>
              <span className="checkout-sidebar__detail-price tabular-nums">
                {loading ? (
                  <BookingShimmer variant="badge" />
                ) : pricing ? (
                  `${formatIsk(pricing.perPersonDouble)} / 人`
                ) : (
                  "—"
                )}
              </span>
            </li>
            <li className="checkout-sidebar__detail-item checkout-sidebar__detail-item--rooms">
              <BedIcon />
              <div className="checkout-sidebar__detail-stack">
                <span>
                  {accommodationLabel}（{roomCount} 個房間，{session.adults} 位成人）
                </span>
                <ul className="checkout-sidebar__room-sublist">
                  {session.roomOccupancies.map((room, index) => (
                    <li key={`room-${index}`}>
                      {formatRoomOccupancyLine(room)}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="checkout-sidebar__detail-item">
              <CarIcon />
              <span>
                {vehicleTitle}
                {vehicleGear ? `（${vehicleGear}）` : ""}
              </span>
            </li>
          </ul>
        )}

        <div className="checkout-sidebar__subtotal-row">
          <span>旅行團套餐小計</span>
          <span className="checkout-sidebar__subtotal-value tabular-nums">
            {loading || (hasExtras && !packagePricing) ? (
              <BookingShimmer variant="badge" />
            ) : packageSubtotal !== null ? (
              formatIsk(packageSubtotal)
            ) : (
              "—"
            )}
          </span>
        </div>
      </div>

      {hasExtras && (
        <div className="checkout-sidebar__package-section checkout-sidebar__extras-section">
          <button
            type="button"
            className="checkout-sidebar__package-toggle"
            onClick={() => setExtrasOpen((open) => !open)}
            aria-expanded={extrasOpen}
          >
            <span>您的附加服務</span>
            <span
              className={`checkout-sidebar__chevron${extrasOpen ? " checkout-sidebar__chevron--open" : ""}`}
              aria-hidden="true"
            >
              ›
            </span>
          </button>

          {extrasOpen && (
            <ul className="checkout-sidebar__extra-lines">
              {extraSidebarLines.map((line) => (
                <li
                  key={line.packageItemId}
                  className="checkout-sidebar__extra-line"
                >
                  <span className="checkout-sidebar__extra-line-label">
                    {line.name}
                    {line.participantLabel}
                  </span>
                  <span className="checkout-sidebar__extra-line-price tabular-nums">
                    {extrasLinesLoading ? (
                      <BookingShimmer variant="badge" />
                    ) : (
                      formatIsk(line.amount)
                    )}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="checkout-sidebar__subtotal-row">
            <span>附加小計</span>
            <span className="checkout-sidebar__subtotal-value tabular-nums">
              {loading || extrasLinesLoading || (hasExtras && !packagePricing) ? (
                <BookingShimmer variant="badge" />
              ) : (
                formatIsk(extrasSubtotal)
              )}
            </span>
          </div>
        </div>
      )}

      <hr className="checkout-sidebar__total-divider" />

      <div className="checkout-sidebar__total-row checkout-sidebar__total-row--grand">
        <span>總計</span>
        <span className="checkout-sidebar__total-value tabular-nums">
          {loading ? (
            <BookingShimmer variant="total" />
          ) : pricing ? (
            formatIsk(pricing.total)
          ) : (
            "—"
          )}
        </span>
      </div>

      {sidebarCta.visible && onPrimaryAction && (
        <button
          type="button"
          className="checkout-sidebar__cta"
          onClick={onPrimaryAction}
        >
          {sidebarCta.label}
        </button>
      )}

      {!sidebarCta.visible && pricing && !loading && (
        <p className="checkout-sidebar__deposit">
          訂金（{Math.round(depositRate * 100)}%）約 {formatIsk(deposit)}
        </p>
      )}

      {!sidebarCta.visible && (
        <p className="checkout-sidebar__note">
          實際結算以冰島克朗（ISK）為準；顯示金額供參考。
        </p>
      )}
      </div>
    </aside>
  );
}
