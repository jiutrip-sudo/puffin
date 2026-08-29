"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import type { RouteMapConfig, ValueProp } from "@/lib/trip-packages/types";

const MAP_CONTAINER_CLASS =
  "aspect-[16/10] w-full min-h-[320px] max-h-[min(58vh,560px)] lg:min-h-[360px]";

const TripRouteMap = dynamic(() => import("./TripRouteMap"), {
  ssr: false,
  loading: () => (
    <div
      className={`${MAP_CONTAINER_CLASS} rounded-2xl border border-foreground/10 bg-foreground/5`}
      aria-hidden
    />
  ),
});

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
  routeMap?: RouteMapConfig;
};

function TripRouteStopList({
  stops,
}: {
  stops: TripRouteOverviewProps["stops"];
}) {
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

function TripRouteStopChips({
  stops,
}: {
  stops: TripRouteOverviewProps["stops"];
}) {
  return (
    <ol
      className="-mx-4 flex gap-3 overflow-x-auto scroll-pl-4 scroll-pr-4 px-4 pb-1 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-3 md:overflow-visible md:scroll-pl-0 md:scroll-pr-0 md:px-0 md:snap-none lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
      aria-label="路線站點"
    >
      {stops.map((stop, index) => (
        <li
          key={stop.label}
          className="flex min-w-[min(100%,240px)] shrink-0 snap-start gap-3 rounded-2xl border border-foreground/10 bg-background p-3.5 md:min-w-0"
        >
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-dark text-xs font-bold text-white"
          >
            {index + 1}
          </span>
          <div className="min-w-0">
            <p className="font-semibold text-foreground">{stop.label}</p>
            {stop.detail && (
              <p className="mt-1 text-sm leading-snug text-foreground/70">
                {stop.detail}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function TripRouteOverview({ stops, routeMap }: TripRouteOverviewProps) {
  if (!routeMap) {
    return <TripRouteStopList stops={stops} />;
  }

  return (
    <div className="space-y-5">
      <TripRouteMap routeMap={routeMap} />
      <TripRouteStopChips stops={stops} />
    </div>
  );
}
