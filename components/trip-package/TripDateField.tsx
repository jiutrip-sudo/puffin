"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  canNavigateMonth,
  formatDisplayDate,
  getCalendarCells,
  getInitialViewMonth,
  isDateInRange,
  toISODate,
} from "@/lib/trip-date-utils";
import { BookingShimmer } from "./BookingPriceShimmer";

const WEEKDAYS = ["日", "一", "二", "三", "四", "五", "六"] as const;

type TripCalendarPopoverProps = {
  anchorEl: HTMLElement | null;
  value: string;
  min?: string;
  max?: string;
  dualMonth?: boolean;
  onSelect: (value: string) => void;
  onClose: () => void;
};

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="booking-date-icon"
    >
      <path
        d="M7 3V5M17 3V5M4 9H20M6 5H18C19.1046 5 20 5.89543 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 5.89543 4.89543 5 6 5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function formatMonthTitle(month: Date): string {
  return `${month.getFullYear()}年${month.getMonth() + 1}月`;
}

function TripCalendarPopover({
  anchorEl,
  value,
  min,
  max,
  dualMonth = false,
  onSelect,
  onClose,
}: TripCalendarPopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [viewMonth, setViewMonth] = useState(() =>
    getInitialViewMonth(value, min, max),
  );
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: dualMonth ? 560 : 280,
  });

  const secondMonth = new Date(
    viewMonth.getFullYear(),
    viewMonth.getMonth() + 1,
    1,
  );

  useLayoutEffect(() => {
    if (!anchorEl || !popoverRef.current) return;

    const anchorRect = anchorEl.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();
    const margin = 8;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const minWidth = dualMonth ? 560 : 280;

    let top = anchorRect.bottom + margin;
    let left = anchorRect.left;
    const width = Math.max(anchorRect.width, minWidth);

    if (left + width > viewportWidth - margin) {
      left = viewportWidth - width - margin;
    }
    if (left < margin) left = margin;

    if (top + popoverRect.height > viewportHeight - margin) {
      top = anchorRect.top - popoverRect.height - margin;
    }

    setPosition({ top, left, width });
  }, [anchorEl, viewMonth, dualMonth]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const todayIso = toISODate(new Date());
  const canPrev = canNavigateMonth(viewMonth, -1, min, max);
  const canNext = canNavigateMonth(viewMonth, 1, min, max);

  const renderDay = (date: Date, inMonth: boolean, monthKey: number) => {
    const iso = toISODate(date);
    const selectable = inMonth && isDateInRange(date, min, max);
    const isSelected = value === iso;
    const isToday = todayIso === iso;

    return (
      <button
        key={`${monthKey}-${iso}-${inMonth}`}
        type="button"
        disabled={!selectable}
        onClick={() => {
          if (!selectable) return;
          onSelect(iso);
          onClose();
        }}
        className={`trip-calendar-day ${
          inMonth ? "" : "is-outside"
        } ${isSelected ? "is-selected" : ""} ${isToday ? "is-today" : ""}`}
      >
        {date.getDate()}
      </button>
    );
  };

  const renderMonthPanel = (month: Date) => {
    const cells = getCalendarCells(month);
    const monthKey = month.getFullYear() * 12 + month.getMonth();

    return (
      <div className="trip-calendar-month">
        <p className="trip-calendar-month-label">{formatMonthTitle(month)}</p>
        <div className="trip-calendar-weekdays">
          {WEEKDAYS.map((day) => (
            <span key={`${monthKey}-${day}`} className="trip-calendar-weekday">
              {day}
            </span>
          ))}
        </div>
        <div className="trip-calendar-grid">
          {cells.map(({ date, inMonth }) => renderDay(date, inMonth, monthKey))}
        </div>
      </div>
    );
  };

  return createPortal(
    <>
      <button
        type="button"
        className="fixed inset-0 z-[119] cursor-default bg-transparent"
        aria-label="關閉日曆"
        onClick={onClose}
      />
      <div
        ref={popoverRef}
        className={`trip-calendar-popover fixed z-[120]${
          dualMonth ? " trip-calendar-popover--dual" : ""
        }`}
        style={{
          top: position.top,
          left: position.left,
          width: position.width,
          minWidth: dualMonth ? 560 : undefined,
        }}
        role="dialog"
        aria-modal="true"
        aria-label="選擇日期"
      >
        <div className="trip-calendar-header">
          <button
            type="button"
            className="trip-calendar-nav"
            disabled={!canPrev}
            onClick={() =>
              setViewMonth(
                new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1),
              )
            }
            aria-label="上個月"
          >
            ‹
          </button>
          {dualMonth ? (
            <p className="trip-calendar-title trip-calendar-title--dual">
              {formatMonthTitle(viewMonth)}
              <span className="trip-calendar-title__sep">—</span>
              {formatMonthTitle(secondMonth)}
            </p>
          ) : (
            <p className="trip-calendar-title">{formatMonthTitle(viewMonth)}</p>
          )}
          <button
            type="button"
            className="trip-calendar-nav"
            disabled={!canNext}
            onClick={() =>
              setViewMonth(
                new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1),
              )
            }
            aria-label="下個月"
          >
            ›
          </button>
        </div>

        {dualMonth ? (
          <div className="trip-calendar-months trip-calendar-months--dual">
            {renderMonthPanel(viewMonth)}
            {renderMonthPanel(secondMonth)}
          </div>
        ) : (
          <>
            <div className="trip-calendar-weekdays">
              {WEEKDAYS.map((day) => (
                <span key={day} className="trip-calendar-weekday">{day}</span>
              ))}
            </div>
            <div className="trip-calendar-grid">
              {getCalendarCells(viewMonth).map(({ date, inMonth }) =>
                renderDay(
                  date,
                  inMonth,
                  viewMonth.getFullYear() * 12 + viewMonth.getMonth(),
                ),
              )}
            </div>
          </>
        )}
      </div>
    </>,
    document.body,
  );
}

type TripDateFieldProps = {
  label: string;
  value?: string;
  min?: string;
  max?: string;
  disabled?: boolean;
  loading?: boolean;
  /** 並排顯示兩個月份（Checkout 旅行日期等） */
  dualMonth?: boolean;
  onChange?: (event: { target: { value: string } }) => void;
};

export function TripDateField({
  label,
  value = "",
  min,
  max,
  disabled,
  loading = false,
  dualMonth = false,
  onChange,
}: TripDateFieldProps) {
  const [open, setOpen] = useState(false);
  const fieldRef = useRef<HTMLButtonElement>(null);

  const displayValue = formatDisplayDate(value);

  return (
    <div className="min-w-0">
      <button
        ref={fieldRef}
        type="button"
        disabled={disabled}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className={`booking-field booking-date-trigger w-full text-left ${
          disabled ? "is-disabled" : ""
        } ${displayValue ? "" : "is-placeholder"}`}
      >
        <span className="booking-field-label">{label}</span>
        {loading ? (
          <BookingShimmer variant="field" />
        ) : (
          <span className="booking-field-value">
            {displayValue || "選擇日期"}
          </span>
        )}
        <CalendarIcon />
      </button>

      {open && !disabled && (
        <TripCalendarPopover
          anchorEl={fieldRef.current}
          value={value}
          min={min}
          max={max}
          dualMonth={dualMonth}
          onSelect={(nextValue) => onChange?.({ target: { value: nextValue } })}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
