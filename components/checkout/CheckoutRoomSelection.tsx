"use client";

import { useEffect, useState } from "react";
import type { PricingConfig } from "@/lib/trip-pricing/types";
import type { CheckoutRoomOccupancy, CheckoutSession } from "@/lib/checkout/types";
import {
  aggregateRoomOccupancies,
  applySingleRoomPerAdultIfNeeded,
  buildRoomOccupanciesForCounts,
  canChooseBedType,
  CHECKOUT_ROOM_LIMIT_EMAIL,
  MAX_CHECKOUT_ROOMS,
  maxRoomOccupants,
  normalizeRoomOccupancies,
  roomOccupantTotal,
} from "@/lib/checkout/room-occupancy";
import { syncTravelerForms } from "@/lib/checkout/sync-travelers";
import { RoomTypeBedIcon } from "@/components/trip-package/RoomTypeBedIcon";

type CheckoutRoomSelectionProps = {
  pricingConfig: PricingConfig;
  session: CheckoutSession;
  onChange: (patch: Partial<CheckoutSession>) => void;
};

function PersonSectionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="checkout-room-selection__section-icon"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="8"
        r="3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M5.5 20c0-3.5 2.8-6 6.5-6s6.5 2.5 6.5 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RoomSectionIcon() {
  return (
    <RoomTypeBedIcon className="checkout-room-selection__room-icon" />
  );
}

function BedTypeIcon({ twin }: { twin?: boolean }) {
  return (
    <RoomTypeBedIcon
      twin={twin}
      className="checkout-room-type-option__icon"
    />
  );
}

function autoRoomTypeLabel(
  category: CheckoutRoomOccupancy["roomTypeCategory"],
): string {
  if (category === "SINGLE") return "單人房";
  if (category === "TRIPLE") return "三人房";
  if (category === "DOUBLE") return "雙人大床房";
  return "雙床房";
}

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
      className="checkout-room-stepper-btn"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      {label === "減少" ? "−" : "+"}
    </button>
  );
}

function OccupancyColumn({
  count,
  label,
  min,
  max,
  onDecrease,
  onIncrease,
}: {
  count: number;
  label: string;
  min: number;
  max: number;
  onDecrease: () => void;
  onIncrease: () => void;
}) {
  return (
    <div className="checkout-room-card__occupancy-col">
      <StepperButton
        label="減少"
        disabled={count <= min}
        onClick={onDecrease}
      />
      <p className="checkout-room-card__occupancy-label">
        <span className="checkout-room-card__occupancy-count">{count}</span>
        {label}
      </p>
      <StepperButton
        label="增加"
        disabled={count >= max}
        onClick={onIncrease}
      />
    </div>
  );
}

function applyRoomPatch(
  session: CheckoutSession,
  occupancies: CheckoutRoomOccupancy[],
  onChange: CheckoutRoomSelectionProps["onChange"],
) {
  const normalized = applySingleRoomPerAdultIfNeeded(
    normalizeRoomOccupancies(occupancies),
  );
  const totals = aggregateRoomOccupancies(normalized);

  onChange({
    roomOccupancies: normalized,
    adults: totals.adults,
    children: totals.children,
    infants: totals.infants,
    travelers: syncTravelerForms(
      session.travelers,
      totals.adults,
      totals.children,
      totals.infants,
    ),
  });
}

export function CheckoutRoomSelection({
  pricingConfig,
  session,
  onChange,
}: CheckoutRoomSelectionProps) {
  const [roomLimitFlash, setRoomLimitFlash] = useState(false);
  const maxTravelers = pricingConfig.maxTravelers ?? 9;
  const maxInfants = pricingConfig.maxInfants ?? 2;
  const minAdults = pricingConfig.minAdults ?? 1;
  const roomCount = session.roomOccupancies.length;

  const tripTotals = aggregateRoomOccupancies(session.roomOccupancies);

  const updateRoom = (
    roomIndex: number,
    patch: Partial<CheckoutRoomOccupancy>,
  ) => {
    const next = session.roomOccupancies.map((room, index) =>
      index === roomIndex ? { ...room, ...patch } : room,
    );
    applyRoomPatch(session, next, onChange);
  };

  const changeRoomCount = (delta: number) => {
    const newCount = roomCount + delta;

    if (delta > 0) {
      if (newCount > MAX_CHECKOUT_ROOMS) {
        setRoomLimitFlash(true);
        return;
      }

      if (
        tripTotals.adults + tripTotals.children + tripTotals.infants >= maxTravelers
      ) {
        return;
      }
    }

    if (newCount < 1) return;

    const next = buildRoomOccupanciesForCounts(
      tripTotals.adults,
      tripTotals.children,
      tripTotals.infants,
      newCount,
    );
    applyRoomPatch(session, next, onChange);
  };

  const remainingTravelers = maxTravelers - (
    tripTotals.adults + tripTotals.children + tripTotals.infants
  );
  const maxRoomsForGuests = tripTotals.adults + tripTotals.children;
  const atRoomLimit = roomCount >= MAX_CHECKOUT_ROOMS;
  const showRoomLimitNotice = atRoomLimit || roomLimitFlash;

  useEffect(() => {
    if (!atRoomLimit) {
      setRoomLimitFlash(false);
    }
  }, [atRoomLimit]);

  return (
    <section className="checkout-block checkout-room-selection">
      <div className="checkout-block__title-row">
        <PersonSectionIcon />
        <div>
          <h2 className="checkout-block__title">您的房間選擇</h2>
          <p className="checkout-block__desc">您需要幾間房間？</p>
        </div>
      </div>

      {showRoomLimitNotice && (
        <div className="checkout-room-limit-notice" role="status">
          <span className="checkout-room-limit-notice__icon" aria-hidden="true">
            i
          </span>
          <p className="checkout-room-limit-notice__text">
            最高可線上選擇 {MAX_CHECKOUT_ROOMS} 間房，如果您需要更多房間請發郵件至{" "}
            <a href={`mailto:${CHECKOUT_ROOM_LIMIT_EMAIL}`}>
              {CHECKOUT_ROOM_LIMIT_EMAIL}
            </a>
            。
          </p>
        </div>
      )}

      <div className="checkout-room-selection__count-bar">
        <p className="checkout-room-selection__count-label">
          <span className="checkout-room-selection__count-value">{roomCount}</span>
          個房間
        </p>
        <div className="checkout-room-selection__count-actions">
          <StepperButton
            label="減少"
            disabled={roomCount <= 1}
            onClick={() => changeRoomCount(-1)}
          />
          <StepperButton
            label="增加"
            disabled={
              atRoomLimit ||
              remainingTravelers <= 0 ||
              roomCount >= maxRoomsForGuests
            }
            onClick={() => changeRoomCount(1)}
          />
        </div>
      </div>

      <div className="checkout-room-selection__cards">
        {session.roomOccupancies.map((room, roomIndex) => {
          const occupants = roomOccupantTotal(room);
          const maxOccupants = maxRoomOccupants(room);
          const otherTotals = aggregateRoomOccupancies(
            session.roomOccupancies.filter((_, index) => index !== roomIndex),
          );
          const otherTravelers =
            otherTotals.adults + otherTotals.children + otherTotals.infants;
          const maxTripRemaining = maxTravelers - otherTravelers;

          const maxAdultsInRoom = Math.min(
            maxOccupants - room.children,
            maxTripRemaining - room.children - room.infants,
          );
          const maxChildrenInRoom = Math.min(
            maxOccupants - room.adults,
            maxTripRemaining - room.adults - room.infants,
          );
          const maxInfantsInRoom = Math.min(
            maxInfants - otherTotals.infants,
            maxTripRemaining - room.adults - room.children,
          );

          const showBedChoice = canChooseBedType(room.adults, room.children);

          return (
            <article key={roomIndex} className="checkout-room-card">
              <div className="checkout-room-card__header">
                <RoomSectionIcon />
                <div>
                  <h3 className="checkout-room-card__title">
                    第 {roomIndex + 1} 房間
                  </h3>
                  <p className="checkout-room-card__subtitle">
                    有多少人住在這間房間裡？
                  </p>
                </div>
              </div>

              <div className="checkout-room-card__occupancy">
                <OccupancyColumn
                  count={room.adults}
                  label="位成人"
                  min={roomIndex === 0 ? minAdults : 1}
                  max={maxAdultsInRoom}
                  onDecrease={() =>
                    updateRoom(roomIndex, {
                      adults: Math.max(
                        roomIndex === 0 ? minAdults : 1,
                        room.adults - 1,
                      ),
                    })
                  }
                  onIncrease={() =>
                    updateRoom(roomIndex, { adults: room.adults + 1 })
                  }
                />
                <OccupancyColumn
                  count={room.children}
                  label="名兒童（2–11 歲）"
                  min={0}
                  max={maxChildrenInRoom}
                  onDecrease={() =>
                    updateRoom(roomIndex, { children: Math.max(0, room.children - 1) })
                  }
                  onIncrease={() =>
                    updateRoom(roomIndex, { children: room.children + 1 })
                  }
                />
                <OccupancyColumn
                  count={room.infants}
                  label="名嬰兒（0–1 歲）"
                  min={0}
                  max={maxInfantsInRoom}
                  onDecrease={() =>
                    updateRoom(roomIndex, { infants: Math.max(0, room.infants - 1) })
                  }
                  onIncrease={() =>
                    updateRoom(roomIndex, { infants: room.infants + 1 })
                  }
                />
              </div>

              {showBedChoice ? (
                <div className="checkout-room-card__type">
                  <p className="checkout-room-card__type-label">請選擇房型</p>
                  <div className="checkout-room-type-grid">
                    <button
                      type="button"
                      className={`checkout-room-type-option${
                        room.roomTypeCategory === "DOUBLE"
                          ? " checkout-room-type-option--selected"
                          : ""
                      }`}
                      onClick={() =>
                        updateRoom(roomIndex, { roomTypeCategory: "DOUBLE" })
                      }
                    >
                      <span className="checkout-room-type-option__radio" />
                      <BedTypeIcon />
                      <span>雙人大床房</span>
                    </button>
                    <button
                      type="button"
                      className={`checkout-room-type-option${
                        room.roomTypeCategory === "TWIN"
                          ? " checkout-room-type-option--selected"
                          : ""
                      }`}
                      onClick={() =>
                        updateRoom(roomIndex, { roomTypeCategory: "TWIN" })
                      }
                    >
                      <span className="checkout-room-type-option__radio" />
                      <BedTypeIcon twin />
                      <span>雙床房</span>
                    </button>
                  </div>
                </div>
              ) : occupants > 0 ? (
                <div className="checkout-room-card__type">
                  <p className="checkout-room-card__type-label">請選擇房型</p>
                  <div className="checkout-room-type-grid checkout-room-type-grid--auto">
                    <div
                      className="checkout-room-type-option checkout-room-type-option--selected checkout-room-type-option--locked"
                      aria-current="true"
                    >
                      <span className="checkout-room-type-option__radio" />
                      <BedTypeIcon twin={room.roomTypeCategory === "TWIN"} />
                      <span>{autoRoomTypeLabel(room.roomTypeCategory)}</span>
                    </div>
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
