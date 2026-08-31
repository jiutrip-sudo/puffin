"use client";

import { useEffect, useState } from "react";
import type { PricingConfig } from "@/lib/trip-pricing/types";
import type { CheckoutSession, CheckoutStepId } from "@/lib/checkout/types";
import { formatIsk } from "@/lib/trip-pricing/calculate";
import { BookingShimmer } from "@/components/trip-package/BookingPriceShimmer";
import { CheckoutOrderSummaryPanel } from "./CheckoutOrderSummaryPanel";
import { useCheckoutOrderSummary } from "./useCheckoutOrderSummary";

type CheckoutMobileChromeProps = {
  pricingConfig: PricingConfig;
  session: CheckoutSession;
  step: CheckoutStepId;
  onPrimaryAction?: () => void;
  submitLoading?: boolean;
  acceptTerms?: boolean;
};

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" className="checkout-mobile-chrome__chevron" aria-hidden="true">
      <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="checkout-mobile-chrome__chevron" aria-hidden="true">
      <path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CheckoutMobileChrome({
  pricingConfig,
  session,
  step,
  onPrimaryAction,
  submitLoading = false,
  acceptTerms = false,
}: CheckoutMobileChromeProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const summary = useCheckoutOrderSummary(pricingConfig, session, step);

  useEffect(() => {
    setSheetOpen(false);
  }, [step]);

  useEffect(() => {
    if (!sheetOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSheetOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [sheetOpen]);

  if (step === 5) return null;

  const handlePrimaryAction = () => {
    setSheetOpen(false);
    onPrimaryAction?.();
  };

  const { loading, pricing, showPrimaryCta, primaryCtaLabel } = summary;
  const totalLabel = loading
    ? "計算中…"
    : pricing
      ? formatIsk(pricing.total)
      : "—";

  const ctaDisabled = step === 4 && !acceptTerms;
  const ctaLoading = step === 4 && submitLoading;

  return (
    <>
      <div className="checkout-mobile-chrome__compact">
        <div className="checkout-mobile-chrome__compact-inner">
          <p className="checkout-mobile-chrome__compact-total">
            <span className="checkout-mobile-chrome__compact-label">總計</span>
            <span className="checkout-mobile-chrome__compact-value tabular-nums">
              {loading ? <BookingShimmer variant="badge" /> : totalLabel}
            </span>
          </p>
          <span className="checkout-mobile-chrome__compact-divider" aria-hidden="true" />
          <button
            type="button"
            className="checkout-mobile-chrome__summary-toggle"
            onClick={() => setSheetOpen(true)}
            aria-expanded={sheetOpen}
          >
            顯示完整摘要
            <ChevronDownIcon />
          </button>
        </div>
      </div>

      {sheetOpen && (
        <div className="checkout-summary-sheet" role="dialog" aria-modal="true" aria-label="訂單摘要">
          <button
            type="button"
            className="checkout-summary-sheet__backdrop"
            aria-label="關閉摘要"
            onClick={() => setSheetOpen(false)}
          />
          <div className="checkout-summary-sheet__panel">
            <CheckoutOrderSummaryPanel summary={summary} variant="sheet" showCta={false} />
            <button
              type="button"
              className="checkout-summary-sheet__close"
              onClick={() => setSheetOpen(false)}
            >
              關閉
            </button>
          </div>
        </div>
      )}

      {showPrimaryCta && onPrimaryAction && (
        <div className="checkout-mobile-chrome__dock">
          <button
            type="button"
            className="checkout-mobile-chrome__dock-total"
            onClick={() => setSheetOpen(true)}
            aria-expanded={sheetOpen}
          >
            <span className="checkout-mobile-chrome__dock-label">總計</span>
            <span className="checkout-mobile-chrome__dock-value tabular-nums">
              {loading ? <BookingShimmer variant="badge" /> : totalLabel}
            </span>
            <ChevronUpIcon />
          </button>
          <button
            type="button"
            className="checkout-mobile-chrome__dock-cta"
            onClick={handlePrimaryAction}
            disabled={ctaDisabled || ctaLoading}
          >
            {ctaLoading ? "建立訂單中…" : primaryCtaLabel}
            {!ctaLoading && <span aria-hidden="true"> ›</span>}
          </button>
        </div>
      )}
    </>
  );
}
