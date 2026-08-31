"use client";

type TripInlineCtaProps = {
  onOpenBooking?: () => void;
};

export function TripInlineCta({ onOpenBooking }: TripInlineCtaProps) {
  return (
    <div className="trip-inline-cta">
      <p className="trip-inline-cta__title">準備好出發了嗎？</p>
      <p className="trip-inline-cta__desc">
        選擇出發日與人數，即可查看即時費用並線上預訂。
      </p>
      <div className="trip-inline-cta__actions">
        <button
          type="button"
          className="trip-inline-cta__primary"
          onClick={onOpenBooking}
        >
          查看出發日與費用
        </button>
        <a href="#trip-booking" className="trip-inline-cta__link">
          跳至預訂面板
        </a>
      </div>
    </div>
  );
}
