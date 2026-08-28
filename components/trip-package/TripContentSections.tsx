"use client";

import { useState } from "react";
import type { ValueProp } from "@/lib/trip-packages/types";

type TripIntroSectionProps = {
  summary: string;
  full: string;
};

export function TripIntroSection({ summary, full }: TripIntroSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-sm leading-relaxed text-foreground/80">
      {!expanded ? (
        <p>{summary}</p>
      ) : (
        <div className="space-y-4">
          {full
            .split("\n\n")
            .filter(Boolean)
            .map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-4 text-sm font-semibold text-primary-dark hover:underline"
      >
        {expanded ? "收合全文" : "展開全文"}
      </button>
    </div>
  );
}

type TripWhyChooseUsProps = {
  items: ValueProp[];
};

export function TripWhyChooseUs({ items }: TripWhyChooseUsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-foreground/10 p-4"
        >
          <p className="font-semibold text-foreground">{item.title}</p>
          <p className="mt-1 text-sm text-foreground/65">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

type TripRouteOverviewProps = {
  stops: { label: string; detail?: string }[];
};

export function TripRouteOverview({ stops }: TripRouteOverviewProps) {
  return (
    <ol className="space-y-4">
      {stops.map((stop, index) => (
        <li key={stop.label} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-dark text-xs font-bold text-white"
            >
              {index + 1}
            </span>
            {index < stops.length - 1 && (
              <span className="my-1 w-px flex-1 bg-foreground/15 min-h-[24px]" />
            )}
          </div>
          <div className="pb-4">
            <p className="font-semibold text-foreground">{stop.label}</p>
            {stop.detail && (
              <p className="mt-1 text-sm text-foreground/70">{stop.detail}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
