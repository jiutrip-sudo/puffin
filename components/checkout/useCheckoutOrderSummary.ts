"use client";

import { useEffect, useMemo, useState } from "react";
import type { CheckoutSession, CheckoutStepId } from "@/lib/checkout/types";
import { buildCheckoutPricingInput } from "@/lib/checkout/build-pricing-input";
import type { PricingConfig, PricingResult } from "@/lib/trip-pricing/types";
import { computeTripEndDate } from "@/lib/trip-date-utils";
import type { CorivoOptionalExtraDay } from "@/lib/checkout/corivo-optional-extras";
import {
  buildExtraSidebarLines,
} from "@/lib/checkout/extra-sidebar-lines";
import { getTripPackageByPackageId } from "@/lib/trip-packages/registry";

function gearTypeSuffix(gearType?: "automatic" | "manual"): string | null {
  if (gearType === "manual") return "手排";
  if (gearType === "automatic") return "自排";
  return null;
}

export function useCheckoutOrderSummary(
  pricingConfig: PricingConfig,
  session: CheckoutSession,
  step: CheckoutStepId = 1,
) {
  const [pricing, setPricing] = useState<PricingResult | null>(null);
  const [packagePricing, setPackagePricing] = useState<PricingResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [packageOpen, setPackageOpen] = useState(true);
  const [extrasOpen, setExtrasOpen] = useState(true);
  const [extrasCatalog, setExtrasCatalog] = useState<CorivoOptionalExtraDay[]>([]);
  const [extrasCatalogLoading, setExtrasCatalogLoading] = useState(false);

  const accommodationTier =
    pricingConfig.tiers.find((t) => t.id === session.accommodationTier);
  const accommodationLabel =
    accommodationTier?.label ?? session.accommodationTier;

  const vehicleTier =
    pricingConfig.vehicleTiers.find((v) => v.id === session.vehicleTier);
  const vehicleTitle =
    vehicleTier?.footnote?.trim() ||
    vehicleTier?.label.split("|")[0]?.trim() ||
    session.vehicleTier;
  const vehicleGear = gearTypeSuffix(vehicleTier?.gearType);

  const pricingInput = useMemo(
    () => buildCheckoutPricingInput(session),
    [session],
  );

  const pricingInputBase = useMemo(
    () => buildCheckoutPricingInput(session, { includeExtras: false }),
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

  const tripPackage = getTripPackageByPackageId(session.packageId);
  const heroImage =
    tripPackage?.heroImage ?? tripPackage?.gallery?.[0]?.url ?? null;

  const primaryCtaLabel =
    step === 1
      ? "添加自選項目"
      : step === 2
        ? "輸入旅客資訊"
        : step === 3
          ? "前往付款"
          : step === 4
            ? "確認預訂"
            : "";

  const showPrimaryCta = step >= 1 && step <= 4;

  return {
    session,
    pricingConfig,
    loading,
    pricing,
    packagePricing,
    packageOpen,
    setPackageOpen,
    extrasOpen,
    setExtrasOpen,
    extraSidebarLines,
    extrasLinesLoading,
    accommodationLabel,
    vehicleTitle,
    vehicleGear,
    tripDays,
    tripNights,
    endDate,
    depositRate,
    deposit,
    roomCount,
    hasExtras,
    packageSubtotal,
    extrasSubtotal,
    heroImage,
    primaryCtaLabel,
    showPrimaryCta,
  };
}
