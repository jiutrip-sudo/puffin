"use client";

import type { CheckoutStepId } from "@/lib/checkout/types";
import { CHECKOUT_STEPS } from "@/lib/checkout/types";

type CheckoutStepperProps = {
  currentStep: CheckoutStepId;
};

export function CheckoutStepper({ currentStep }: CheckoutStepperProps) {
  return (
    <ol className="checkout-stepper">
      {CHECKOUT_STEPS.map((step) => {
        const isCurrent = step.id === currentStep;
        const isComplete = step.id < currentStep;

        return (
          <li
            key={step.id}
            className={`checkout-stepper__item ${
              isCurrent ? "checkout-stepper__item--current" : ""
            } ${isComplete ? "checkout-stepper__item--complete" : ""}`}
          >
            <span className="checkout-stepper__index" translate="no">
              {step.id}
            </span>
            <span className="checkout-stepper__label">{step.label}</span>
          </li>
        );
      })}
    </ol>
  );
}
