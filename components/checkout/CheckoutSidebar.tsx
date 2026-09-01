"use client";

import type { CheckoutStepId } from "@/lib/checkout/types";
import { CheckoutOrderSummaryPanel } from "./CheckoutOrderSummaryPanel";
import type { useCheckoutOrderSummary } from "./useCheckoutOrderSummary";

type SummaryState = ReturnType<typeof useCheckoutOrderSummary>;

type CheckoutSidebarProps = {
  summary: SummaryState;
  step?: CheckoutStepId;
  onPrimaryAction?: () => void;
};

export function CheckoutSidebar({
  summary,
  step = 1,
  onPrimaryAction,
}: CheckoutSidebarProps) {
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
