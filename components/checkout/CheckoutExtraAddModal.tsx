"use client";

import { useEffect, useMemo, useState } from "react";
import { formatIsk } from "@/lib/trip-pricing/calculate";
import type { CheckoutSession } from "@/lib/checkout/types";
import type {
  CorivoOptionalExtra,
  CorivoOptionalExtraDeparture,
} from "@/lib/checkout/corivo-optional-extras";
import {
  countsFromExtraSelection,
  defaultExtraParticipantCounts,
  extraActivityParticipantTotal,
  isExtraParticipantCountsValid,
  type ExtraParticipantCounts,
} from "@/lib/checkout/extra-participants";

type CheckoutExtraAddModalProps = {
  extra: CorivoOptionalExtra;
  departure: CorivoOptionalExtraDeparture;
  session: CheckoutSession;
  currency: string;
  onClose: () => void;
  onConfirm: (counts: ExtraParticipantCounts) => void;
};

type TravelerRowProps = {
  count: number;
  label: string;
  priceLabel: string | null;
  max: number;
  dimmed?: boolean;
  onDecrease: () => void;
  onIncrease: () => void;
};

function StepperButton({
  label,
  disabled,
  onClick,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="checkout-extra-add-modal__stepper-btn"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      {label === "減少" ? "−" : "+"}
    </button>
  );
}

function TravelerRow({
  count,
  label,
  priceLabel,
  max,
  dimmed,
  onDecrease,
  onIncrease,
}: TravelerRowProps) {
  return (
    <div
      className={`checkout-extra-add-modal__row${dimmed ? " checkout-extra-add-modal__row--dimmed" : ""}`}
    >
      <p className="checkout-extra-add-modal__row-label">
        <span className="checkout-extra-add-modal__row-count tabular-nums">
          {count}
        </span>
        {label}
      </p>
      {priceLabel && (
        <p className="checkout-extra-add-modal__row-price tabular-nums">
          {priceLabel}
        </p>
      )}
      <div className="checkout-extra-add-modal__row-stepper">
        <StepperButton
          label="減少"
          disabled={count <= 0}
          onClick={onDecrease}
        />
        <StepperButton
          label="增加"
          disabled={count >= max}
          onClick={onIncrease}
        />
      </div>
    </div>
  );
}

export function CheckoutExtraAddModal({
  extra,
  departure,
  session,
  currency,
  onClose,
  onConfirm,
}: CheckoutExtraAddModalProps) {
  const existing = session.selectedExtras.find(
    (item) => item.packageItemId === extra.packageItemId,
  );

  const initialCounts = useMemo(() => {
    if (existing) {
      return countsFromExtraSelection(session.travelers, existing);
    }
    return defaultExtraParticipantCounts(session);
  }, [existing, session]);

  const [counts, setCounts] = useState<ExtraParticipantCounts>(initialCounts);

  useEffect(() => {
    setCounts(initialCounts);
  }, [initialCounts]);

  const adultPrice =
    departure.pricePerAdultInCurrency ??
    extra.priceFromPerTravelerInCurrency;
  const childPrice = departure.pricePerChildInCurrency;
  const infantPrice = departure.pricePerInfantInCurrency;

  const valid = isExtraParticipantCountsValid(
    counts,
    session,
    extra.minTravelers,
    extra.maxTravelers,
  );

  const activityTotal = extraActivityParticipantTotal(counts);
  const minTravelers = extra.minTravelers;
  const maxTravelers = extra.maxTravelers;

  const handleConfirm = () => {
    if (!valid) return;
    onConfirm(counts);
    onClose();
  };

  return (
    <div
      className="checkout-extra-add-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-extra-add-title"
      onClick={onClose}
    >
      <div
        className="checkout-extra-add-modal__panel"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 id="checkout-extra-add-title" className="checkout-extra-add-modal__title">
          {extra.name}
        </h3>
        <p className="checkout-extra-add-modal__subtitle">添加本次行程的同行人</p>

        <div className="checkout-extra-add-modal__rows">
          <TravelerRow
            count={counts.adults}
            label=" 位成人"
            priceLabel={`${currency} ${formatIsk(adultPrice)} / 人`}
            max={session.adults}
            onDecrease={() =>
              setCounts((prev) => ({
                ...prev,
                adults: Math.max(0, prev.adults - 1),
              }))
            }
            onIncrease={() =>
              setCounts((prev) => ({
                ...prev,
                adults: Math.min(session.adults, prev.adults + 1),
              }))
            }
          />

          <TravelerRow
            count={counts.children}
            label=" 位兒童"
            priceLabel={
              childPrice !== undefined
                ? `${currency} ${formatIsk(childPrice)} / 人`
                : null
            }
            max={session.children}
            dimmed={session.children === 0}
            onDecrease={() =>
              setCounts((prev) => ({
                ...prev,
                children: Math.max(0, prev.children - 1),
              }))
            }
            onIncrease={() =>
              setCounts((prev) => ({
                ...prev,
                children: Math.min(session.children, prev.children + 1),
              }))
            }
          />

          <TravelerRow
            count={counts.infants}
            label=" 位嬰兒"
            priceLabel={
              infantPrice !== undefined && infantPrice > 0
                ? `${currency} ${formatIsk(infantPrice)} / 人`
                : infantPrice === 0
                  ? "免費"
                  : null
            }
            max={session.infants}
            dimmed={session.infants === 0}
            onDecrease={() =>
              setCounts((prev) => ({
                ...prev,
                infants: Math.max(0, prev.infants - 1),
              }))
            }
            onIncrease={() =>
              setCounts((prev) => ({
                ...prev,
                infants: Math.min(session.infants, prev.infants + 1),
              }))
            }
          />
        </div>

        {!valid && activityTotal > 0 && (
          <p className="checkout-extra-add-modal__hint" role="status">
            此活動需 {minTravelers}–{maxTravelers} 位參加者（成人或兒童）
          </p>
        )}

        <div className="checkout-extra-add-modal__actions">
          <button
            type="button"
            className="checkout-extra-add-modal__cancel"
            onClick={onClose}
          >
            取消
          </button>
          <button
            type="button"
            className="checkout-extra-add-modal__confirm"
            disabled={!valid}
            onClick={handleConfirm}
          >
            添加
          </button>
        </div>
      </div>
    </div>
  );
}
