"use client";

import type { PricingConfig } from "@/lib/trip-pricing/types";
import {
  formatRoomSlotLabel,
  resolveRoomConfig,
} from "@/lib/trip-pricing/corivo-rooms";
import type { CheckoutSession } from "@/lib/checkout/types";
import { TripDateField } from "@/components/trip-package/TripDateField";
import { computeTripEndDate } from "@/lib/trip-date-utils";

type StagePackageProps = {
  pricingConfig: PricingConfig;
  session: CheckoutSession;
  onChange: (patch: Partial<CheckoutSession>) => void;
};

export function CheckoutStagePackage({
  pricingConfig,
  session,
  onChange,
}: StagePackageProps) {
  const tripDays = pricingConfig.tripDurationDays ?? 1;
  const endDate = computeTripEndDate(session.startDate, tripDays);

  const roomConfig = resolveRoomConfig({
    adults: session.adults,
    children: session.children,
    infants: session.infants,
  });

  return (
    <div className="checkout-stage">
      <section className="checkout-block">
        <h2 className="checkout-block__title">您的旅行日期</h2>
        <p className="checkout-block__desc">
          您想什麼時候開始您的冰島行程？
        </p>
        <TripDateField
          label="出發日（從）"
          value={session.startDate}
          min={pricingConfig.bookingDateRange?.min}
          max={pricingConfig.bookingDateRange?.max}
          onChange={(e) => onChange({ startDate: e.target.value })}
        />
        <p className="checkout-block__hint">結束日（至）：{endDate}</p>

        <div className="checkout-inline-fields mt-4">
          <label className="checkout-field">
            <span className="checkout-field__label">行程前加住（晚）</span>
            <input
              type="number"
              min={0}
              max={7}
              className="checkout-field__input"
              value={session.preDays}
              onChange={(e) =>
                onChange({
                  preDays: Math.max(0, Number.parseInt(e.target.value, 10) || 0),
                })
              }
            />
          </label>
          <label className="checkout-field">
            <span className="checkout-field__label">行程後加住（晚）</span>
            <input
              type="number"
              min={0}
              max={7}
              className="checkout-field__input"
              value={session.postDays}
              onChange={(e) =>
                onChange({
                  postDays: Math.max(0, Number.parseInt(e.target.value, 10) || 0),
                })
              }
            />
          </label>
        </div>
      </section>

      <section className="checkout-block">
        <h2 className="checkout-block__title">您的住宿</h2>
        <div className="checkout-tier-grid">
          {pricingConfig.tiers.map((tier) => (
            <button
              key={tier.id}
              type="button"
              className={`checkout-tier-chip ${
                session.accommodationTier === tier.id
                  ? "checkout-tier-chip--active"
                  : ""
              }`}
              onClick={() => onChange({ accommodationTier: tier.id })}
            >
              {tier.label}
            </button>
          ))}
        </div>
      </section>

      <section className="checkout-block">
        <h2 className="checkout-block__title">您的租車</h2>
        <div className="checkout-tier-grid">
          {pricingConfig.vehicleTiers.map((vehicle) => (
            <button
              key={vehicle.id}
              type="button"
              className={`checkout-tier-chip ${
                session.vehicleTier === vehicle.id
                  ? "checkout-tier-chip--active"
                  : ""
              }`}
              onClick={() => onChange({ vehicleTier: vehicle.id })}
            >
              {vehicle.label.split("|")[0]?.trim() ?? vehicle.label}
            </button>
          ))}
        </div>
      </section>

      <section className="checkout-block">
        <h2 className="checkout-block__title">您的房間選擇</h2>
        <p className="checkout-block__desc">
          依旅客人數自動分配房型（與森林猫 Corivo 預設配置一致）。
        </p>
        <ul className="checkout-room-list">
          {roomConfig.rooms.map((room, index) => (
            <li key={index} className="checkout-room-list__item">
              <span className="font-semibold">第 {index + 1} 間房</span>
              <span>
                {formatRoomSlotLabel(room)} · {room.adults} 成人
                {room.children > 0 ? `、${room.children} 兒童` : ""}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
