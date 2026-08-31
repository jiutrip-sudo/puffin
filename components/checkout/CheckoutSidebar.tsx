"use client";

import { useEffect, useMemo, useState } from "react";
import { formatIsk } from "@/lib/trip-pricing/calculate";
import type { PricingConfig, PricingResult } from "@/lib/trip-pricing/types";
import type { CheckoutSession } from "@/lib/checkout/types";
import { BookingShimmer } from "@/components/trip-package/BookingPriceShimmer";
import { computeTripEndDate } from "@/lib/trip-date-utils";

type CheckoutSidebarProps = {
  pricingConfig: PricingConfig;
  session: CheckoutSession;
};

export function CheckoutSidebar({
  pricingConfig,
  session,
}: CheckoutSidebarProps) {
  const [pricing, setPricing] = useState<PricingResult | null>(null);
  const [loading, setLoading] = useState(true);

  const accommodationLabel =
    pricingConfig.tiers.find((t) => t.id === session.accommodationTier)?.label ??
    session.accommodationTier;
  const vehicleLabel =
    pricingConfig.vehicleTiers.find((v) => v.id === session.vehicleTier)?.label ??
    session.vehicleTier;

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
      extraPackageItemIds:
        extraPackageItemIds.length > 0 ? extraPackageItemIds : undefined,
    }),
    [session, extraPackageItemIds],
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

  const tripDays = pricingConfig.tripDurationDays ?? 1;
  const endDate = computeTripEndDate(session.startDate, tripDays);
  const depositRate = pricingConfig.depositRate ?? 0.2;
  const deposit = pricing ? Math.round(pricing.total * depositRate) : 0;

  return (
    <aside className="checkout-sidebar">
      <h2 className="checkout-sidebar__title">您的旅行團套餐</h2>
      <p className="checkout-sidebar__package">{session.packageTitle}</p>
      <p className="checkout-sidebar__meta">
        {tripDays} 天 / {tripDays - 1} 夜 · {session.startDate} → {endDate}
      </p>

      <dl className="checkout-sidebar__lines">
        <div>
          <dt>住宿</dt>
          <dd>{accommodationLabel}</dd>
        </div>
        <div>
          <dt>租車</dt>
          <dd>{vehicleLabel.split("|")[0]?.trim() ?? vehicleLabel}</dd>
        </div>
        <div>
          <dt>旅客</dt>
          <dd>
            {session.adults} 成人
            {session.children > 0 ? `、${session.children} 兒童` : ""}
            {session.infants > 0 ? `、${session.infants} 嬰兒` : ""}
          </dd>
        </div>
        {session.selectedExtras.length > 0 && (
          <div>
            <dt>自選活動</dt>
            <dd>{session.selectedExtras.length} 項</dd>
          </div>
        )}
      </dl>

      <div className="checkout-sidebar__total-row">
        <span>總計</span>
        <span className="tabular-nums">
          {loading ? (
            <BookingShimmer variant="total" />
          ) : pricing ? (
            formatIsk(pricing.total)
          ) : (
            "—"
          )}
        </span>
      </div>

      {pricing && !loading && (
        <p className="checkout-sidebar__deposit">
          訂金（{Math.round(depositRate * 100)}%）約 {formatIsk(deposit)}
        </p>
      )}

      <p className="checkout-sidebar__note">
        實際結算以冰島克朗（ISK）為準；顯示金額供參考。
      </p>
    </aside>
  );
}
