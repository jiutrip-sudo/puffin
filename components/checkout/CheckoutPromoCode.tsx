"use client";

import { useEffect, useState } from "react";
import { buildCheckoutPricingInput } from "@/lib/checkout/build-pricing-input";
import type { CheckoutSession } from "@/lib/checkout/types";
import type { PricingResult } from "@/lib/trip-pricing/types";
import { formatIsk } from "@/lib/trip-pricing/calculate";

type CheckoutPromoCodeProps = {
  session: CheckoutSession;
  appliedCode: string;
  promoDiscount: number;
  pricingLoading: boolean;
  onApply: (code: string) => void;
  onRemove: () => void;
};

async function fetchPricing(
  input: ReturnType<typeof buildCheckoutPricingInput>,
): Promise<PricingResult> {
  const response = await fetch("/api/trips/pricing/calculate", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(input),
  });
  const data = (await response.json()) as PricingResult & { error?: string };
  if (!response.ok) {
    throw new Error(data.error ?? "計價失敗");
  }
  return data;
}

export function CheckoutPromoCode({
  session,
  appliedCode,
  promoDiscount,
  pricingLoading,
  onApply,
  onRemove,
}: CheckoutPromoCodeProps) {
  const [inputValue, setInputValue] = useState(appliedCode);
  const [applying, setApplying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!appliedCode) {
      setInputValue("");
    }
  }, [appliedCode]);

  const handleApply = async () => {
    const code = inputValue.trim();
    if (!code) {
      setError("請輸入優惠碼");
      return;
    }

    setApplying(true);
    setError(null);

    try {
      const baseInput = buildCheckoutPricingInput(session);
      const withPromo = await fetchPricing({
        ...baseInput,
        promoCode: code,
      });
      const withoutPromo = await fetchPricing({
        ...baseInput,
        promoCode: undefined,
      });

      const discount = Math.max(0, withoutPromo.total - withPromo.total);
      const invalid =
        withPromo.promoCodeInvalid === true || discount === 0;

      if (invalid) {
        setError("優惠碼無效或不符合使用條件");
        if (appliedCode) onRemove();
        return;
      }

      onApply(code);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "無法驗證優惠碼，請稍後再試",
      );
    } finally {
      setApplying(false);
    }
  };

  const handleRemove = () => {
    setError(null);
    setInputValue("");
    onRemove();
  };

  const isBusy = applying || pricingLoading;
  const showApplied =
    appliedCode.length > 0 && !error && !isBusy && promoDiscount > 0;

  return (
    <div className="checkout-promo">
      <h3 className="checkout-payment-section__title">優惠碼</h3>
      <p className="checkout-promo__hint">
        若有促銷或合作優惠碼，請在此輸入並套用。
      </p>

      {showApplied ? (
        <div className="checkout-promo__applied">
          <div className="checkout-promo__applied-main">
            <span className="checkout-promo__badge" aria-label="已套用優惠碼">
              {appliedCode}
            </span>
            <span className="checkout-promo__saved tabular-nums">
              已折抵 {formatIsk(promoDiscount)}
            </span>
          </div>
          <button
            type="button"
            className="checkout-promo__remove"
            onClick={handleRemove}
            disabled={isBusy}
          >
            移除
          </button>
        </div>
      ) : (
        <div className="checkout-promo__row">
          <input
            type="text"
            className="checkout-promo__input"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
              if (error) setError(null);
            }}
            placeholder="輸入優惠碼"
            autoComplete="off"
            spellCheck={false}
            disabled={isBusy}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? "checkout-promo-error" : undefined}
          />
          <button
            type="button"
            className="checkout-promo__apply"
            onClick={() => void handleApply()}
            disabled={isBusy || !inputValue.trim()}
          >
            {applying ? "驗證中…" : "套用"}
          </button>
        </div>
      )}

      {error && (
        <p id="checkout-promo-error" className="checkout-promo__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
