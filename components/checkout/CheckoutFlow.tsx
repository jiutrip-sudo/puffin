"use client";

import Link from "next/link";
import { useState } from "react";
import type { PricingConfig } from "@/lib/trip-pricing/types";
import type { CheckoutSession, CheckoutStepId } from "@/lib/checkout/types";
import { CheckoutStepper } from "./CheckoutStepper";
import { CheckoutSidebar } from "./CheckoutSidebar";
import { CheckoutStagePackage } from "./CheckoutStagePackage";
import { CheckoutStageTravelers } from "./CheckoutStageTravelers";
import {
  CheckoutStageExtras,
  CheckoutStagePayment,
  CheckoutStageConfirmation,
} from "./CheckoutStageExtras";

type CheckoutFlowProps = {
  pricingConfig: PricingConfig;
  initialSession: CheckoutSession;
  backHref: string;
};

export function CheckoutFlow({
  pricingConfig,
  initialSession,
  backHref,
}: CheckoutFlowProps) {
  const [step, setStep] = useState<CheckoutStepId>(1);
  const [session, setSession] = useState<CheckoutSession>(initialSession);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [bookingResult, setBookingResult] = useState<{
    bookingId: string;
    confirmationCode: string | null;
    totalAmount: number | null;
    customerEmailSent: boolean;
  } | null>(null);

  const patchSession = (patch: Partial<CheckoutSession>) => {
    setSession((prev) => ({ ...prev, ...patch }));
  };

  const goNext = () => {
    setStep((prev) => Math.min(5, prev + 1) as CheckoutStepId);
  };

  const goBack = () => {
    setStep((prev) => Math.max(1, prev - 1) as CheckoutStepId);
  };

  const handleSubmit = async () => {
    setSubmitLoading(true);
    setSubmitError(null);

    try {
      const extraPackageItemIds = session.selectedExtras.map(
        (extra) => extra.packageItemId,
      );

      const pricingResponse = await fetch("/api/trips/pricing/calculate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          packageId: session.packageId,
          startDate: session.startDate,
          adults: session.adults,
          children: session.children,
          infants: session.infants,
          accommodationTier: session.accommodationTier,
          roomType: "double",
          vehicleTier: session.vehicleTier,
          extraPackageItemIds:
            extraPackageItemIds.length > 0 ? extraPackageItemIds : undefined,
        }),
      });
      const pricingData = (await pricingResponse.json()) as {
        total?: number;
        error?: string;
      };

      const response = await fetch("/api/checkout/submit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(session),
      });
      const data = (await response.json()) as {
        bookingId?: string;
        confirmationCode?: string | null;
        email?: {
          customerSent?: boolean;
          staffSent?: boolean;
        };
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "提交預訂失敗");
      }

      if (!data.bookingId) {
        throw new Error("預訂回傳不完整");
      }

      setBookingResult({
        bookingId: data.bookingId,
        confirmationCode: data.confirmationCode ?? null,
        totalAmount:
          pricingResponse.ok && pricingData.total !== undefined
            ? pricingData.total
            : null,
        customerEmailSent: data.email?.customerSent ?? false,
      });
      setStep(5);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "提交預訂時發生錯誤",
      );
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <div className="checkout-header__inner">
          <Link href={backHref} className="checkout-back-link">← 返回行程</Link>
          <p className="checkout-secure">線上預訂 · 人工收款</p>
        </div>
        <CheckoutStepper currentStep={step} />
      </header>

      <div className="checkout-layout">
        <main className="checkout-main">
          {step === 1 && (
            <>
              <CheckoutStagePackage
                pricingConfig={pricingConfig}
                session={session}
                onChange={patchSession}
              />
              <div className="checkout-actions">
                <button
                  type="button"
                  className="checkout-primary-btn"
                  onClick={goNext}
                >
                  添加自選項目
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <CheckoutStageExtras
                session={session}
                onChange={patchSession}
                onContinue={goNext}
              />
              <div className="checkout-actions">
                <button
                  type="button"
                  className="checkout-ghost-btn"
                  onClick={goBack}
                >
                  返回
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <CheckoutStageTravelers
                session={session}
                onChange={(travelers) => patchSession({ travelers })}
              />
              <div className="checkout-actions">
                <button
                  type="button"
                  className="checkout-ghost-btn"
                  onClick={goBack}
                >
                  返回
                </button>
                <button
                  type="button"
                  className="checkout-primary-btn"
                  onClick={goNext}
                >
                  前往付款方式
                </button>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <CheckoutStagePayment
                session={session}
                depositRate={pricingConfig.depositRate ?? 0.2}
                loading={submitLoading}
                error={submitError}
                onChange={patchSession}
                onSubmit={handleSubmit}
              />
              <div className="checkout-actions">
                <button
                  type="button"
                  className="checkout-ghost-btn"
                  onClick={goBack}
                  disabled={submitLoading}
                >
                  返回
                </button>
              </div>
            </>
          )}

          {step === 5 && bookingResult && (
            <CheckoutStageConfirmation
              session={session}
              packageTitle={session.packageTitle}
              confirmationCode={bookingResult.confirmationCode}
              bookingId={bookingResult.bookingId}
              depositRate={pricingConfig.depositRate ?? 0.2}
              totalAmount={bookingResult.totalAmount}
              customerEmailSent={bookingResult.customerEmailSent}
            />
          )}
        </main>

        <CheckoutSidebar pricingConfig={pricingConfig} session={session} />
      </div>
    </div>
  );
}
