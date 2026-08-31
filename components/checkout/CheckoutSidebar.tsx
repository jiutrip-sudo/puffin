"use client";

import type { PricingConfig } from "@/lib/trip-pricing/types";
import type { CheckoutSession, CheckoutStepId } from "@/lib/checkout/types";
import { CheckoutOrderSummaryPanel } from "./CheckoutOrderSummaryPanel";
import { useCheckoutOrderSummary } from "./useCheckoutOrderSummary";

type CheckoutSidebarProps = {
  pricingConfig: PricingConfig;
  session: CheckoutSession;
  step?: CheckoutStepId;
  onPrimaryAction?: () => void;
};

export function CheckoutSidebar({
  pricingConfig,
  session,
  step = 1,
  onPrimaryAction,
}: CheckoutSidebarProps) {
  const summary = useCheckoutOrderSummary(pricingConfig, session, step);
  const showCta =
    summary.showPrimaryCta && Boolean(onPrimaryAction) && step <= 3;

  return (
    <aside className="checkout-sidebar checkout-sidebar--desktop">
      <CheckoutOrderSummaryPanel
        summary={summary}
        showHero
        showCta={showCta}
        onPrimaryAction={onPrimaryAction}
      />
    </aside>
  );
}
