"use client";

import { useState } from "react";
import type { ItineraryDay } from "@/lib/trip-packages/types";

type TripItineraryAccordionProps = {
  days: ItineraryDay[];
};

export function TripItineraryAccordion({ days }: TripItineraryAccordionProps) {
  const [openDays, setOpenDays] = useState<Set<number>>(new Set([1]));

  const toggle = (day: number) => {
    setOpenDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
  };

  const expandAll = () => setOpenDays(new Set(days.map((d) => d.day)));
  const collapseAll = () => setOpenDays(new Set());

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button
          type="button"
          onClick={expandAll}
          className="rounded-full border border-foreground/15 px-4 py-1.5 text-xs font-medium hover:bg-foreground/5"
        >
          展開所有天數
        </button>
        <button
          type="button"
          onClick={collapseAll}
          className="rounded-full border border-foreground/15 px-4 py-1.5 text-xs font-medium hover:bg-foreground/5"
        >
          全部收合
        </button>
      </div>

      <div className="space-y-3">
        {days.map((day) => {
          const isOpen = openDays.has(day.day);
          return (
            <div
              key={day.day}
              className="rounded-2xl border border-foreground/10 bg-background overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(day.day)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-primary-surface/15"
                aria-expanded={isOpen}
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-primary-dark">
                    第 {day.day} 天
                  </p>
                  <p className="mt-0.5 text-base font-bold text-foreground">
                    {day.title}
                  </p>
                  <p className="mt-1 text-xs text-foreground/55">
                    住宿：{day.accommodation}
                  </p>
                </div>
                <span
                  className="text-foreground/50 transition-transform"
                  style={{ transform: isOpen ? "rotate(180deg)" : undefined }}
                  aria-hidden
                >
                  ▼
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-foreground/10 px-5 py-4">
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {day.description}
                  </p>

                  {day.highlights && day.highlights.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-foreground">
                        旅行亮點
                      </p>
                      <ul className="mt-2 space-y-1">
                        {day.highlights.map((h) => (
                          <li
                            key={h.nameEn}
                            className="text-sm text-foreground/75"
                          >
                            {h.name}
                            <span className="text-foreground/45">
                              {" "}
                              · {h.nameEn}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {day.optionalActivities &&
                    day.optionalActivities.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-foreground">
                          自選報名
                        </p>
                        <ul className="mt-2 space-y-1">
                          {day.optionalActivities.map((a) => (
                            <li
                              key={a.name}
                              className="text-sm text-foreground/75"
                            >
                              {a.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
