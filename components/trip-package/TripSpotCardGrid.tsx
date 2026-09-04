"use client";

import { TripImage } from "@/components/trip-package/TripImage";
import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { localizeTripSpot } from "@/lib/trip-packages/localize-trip-spot";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { TripAttraction } from "@/lib/trip-packages/types";
import { TripSpotDetailModal } from "./TripSpotDetailModal";
import { TRIP_SPOT_CARD_RADIUS, spotImageSrc } from "./trip-spot-media";

const CARD_WIDTH = 159;
const CARD_GAP = 24;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

export type TripSpotCardGridProps = {
  items: TripAttraction[];
  scrollAriaLabel: string;
  cardAriaLabelPrefix: string;
  prevButtonLabel?: string;
  nextButtonLabel?: string;
};

export function TripSpotCardGrid({
  items,
  scrollAriaLabel,
  cardAriaLabelPrefix,
  prevButtonLabel = "上一組",
  nextButtonLabel = "下一組",
}: TripSpotCardGridProps) {
  const locale = useSiteLocale();
  const displayItems = useMemo(
    () => items.map((spot) => localizeTripSpot(spot, locale)),
    [items, locale],
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSpot, setActiveSpot] = useState<TripAttraction | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const close = useCallback(() => {
    setActiveSpot(null);
  }, []);

  const openSpot = useCallback((spot: TripAttraction) => {
    setActiveSpot(spot);
  }, []);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < maxScrollLeft - 4);
  }, []);

  const scrollCards = useCallback((direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === "next" ? SCROLL_STEP : -SCROLL_STEP,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollButtons();

    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [displayItems.length, updateScrollButtons]);

  const showCarouselArrows = displayItems.length > 1;

  if (displayItems.length === 0) {
    return null;
  }

  return (
    <>
      <div className="relative md:px-11">
        {showCarouselArrows && canScrollLeft && (
          <button
            type="button"
            onClick={() => scrollCards("prev")}
            className="absolute left-0 top-[99px] z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/10 bg-background text-sm font-semibold text-foreground shadow-md transition-colors hover:bg-primary-surface/30 md:flex"
            aria-label={prevButtonLabel}
          >
            ←
          </button>
        )}

        {showCarouselArrows && canScrollRight && (
          <button
            type="button"
            onClick={() => scrollCards("next")}
            className="absolute right-0 top-[99px] z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/10 bg-background text-sm font-semibold text-foreground shadow-md transition-colors hover:bg-primary-surface/30 md:flex"
            aria-label={nextButtonLabel}
          >
            →
          </button>
        )}

        <div
          ref={scrollRef}
          className="trip-spot-scroll -mx-4 flex gap-6 overflow-x-auto scroll-pl-4 scroll-pr-4 px-4 pb-1 md:mx-0 md:scroll-pl-0 md:scroll-pr-0 md:px-0 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label={scrollAriaLabel}
        >
          {displayItems.map((spot, index) => (
            <button
              key={`${spot.nameEn ?? spot.name}-${spot.imageUrl}`}
              type="button"
              onClick={() => openSpot(items[index])}
              className={`group w-[159px] shrink-0 cursor-pointer snap-start overflow-hidden ${TRIP_SPOT_CARD_RADIUS} border border-foreground/5 bg-background text-left shadow-sm transition-[transform,box-shadow,ring-color] hover:scale-[1.02] hover:shadow-md hover:ring-2 hover:ring-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
              aria-label={`${cardAriaLabelPrefix}：${spot.name}`}
            >
              <div className="relative h-[118px] w-full overflow-hidden rounded-t-[10px] bg-primary-surface/25">
                <TripImage
                  src={spotImageSrc(spot.imageUrl, 320)}
                  alt={spot.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="159px"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30 group-focus-visible:bg-black/30"
                  aria-hidden="true"
                >
                  <span
                    className="rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold text-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    查看介紹
                  </span>
                </div>
              </div>
              <div className="flex h-[78px] flex-col px-3.5 py-3">
                <p className="line-clamp-1 text-[15px] font-bold leading-[18px] text-foreground">
                  {spot.name}
                </p>
                {spot.nameEn && (
                  <p className="mt-0.5 line-clamp-2 text-[12px] font-medium leading-[16px] text-foreground/65">
                    {spot.nameEn}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeSpot && (
        <TripSpotDetailModal spot={activeSpot} onClose={close} />
      )}
    </>
  );
}
