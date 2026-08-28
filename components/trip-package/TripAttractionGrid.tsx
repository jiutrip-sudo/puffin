"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { TripAttraction } from "@/lib/trip-packages/types";

type TripAttractionGridProps = {
  attractions: TripAttraction[];
};

const ATTRACTION_CARD_RADIUS = "rounded-[10px]";
const CARD_WIDTH = 159;
const CARD_GAP = 24;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

function attractionImageSrc(url: string, width: number) {
  if (url.includes("senlinmao.com/images/")) {
    return url.replace(/w_\d+/, `w_${width}`);
  }
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}w=${width}&q=80`;
}

function attractionGallery(spot: TripAttraction) {
  if (spot.galleryImages?.length) return spot.galleryImages;
  return [spot.imageUrl];
}

function attractionParagraphs(spot: TripAttraction) {
  if (spot.paragraphs?.length) return spot.paragraphs;
  if (spot.description) return [spot.description];
  return [];
}

export function TripAttractionGrid({ attractions }: TripAttractionGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSpot, setActiveSpot] = useState<TripAttraction | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const close = useCallback(() => {
    setActiveSpot(null);
    setGalleryIndex(0);
  }, []);

  const openSpot = useCallback((spot: TripAttraction) => {
    setActiveSpot(spot);
    setGalleryIndex(0);
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
  }, [attractions.length, updateScrollButtons]);

  useEffect(() => {
    if (!activeSpot) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeSpot, close]);

  const activeGallery = activeSpot ? attractionGallery(activeSpot) : [];
  const activeParagraphs = activeSpot ? attractionParagraphs(activeSpot) : [];

  const showGalleryPrev = useCallback(() => {
    setGalleryIndex((index) =>
      activeGallery.length === 0
        ? 0
        : (index - 1 + activeGallery.length) % activeGallery.length,
    );
  }, [activeGallery.length]);

  const showGalleryNext = useCallback(() => {
    setGalleryIndex((index) =>
      activeGallery.length === 0 ? 0 : (index + 1) % activeGallery.length,
    );
  }, [activeGallery.length]);

  const showCarouselArrows = attractions.length > 1;

  return (
    <>
      <div className="relative md:px-11">
        {showCarouselArrows && canScrollLeft && (
          <button
            type="button"
            onClick={() => scrollCards("prev")}
            className="absolute left-0 top-[99px] z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/10 bg-background text-sm font-semibold text-foreground shadow-md transition-colors hover:bg-primary-surface/30 md:flex"
            aria-label="上一組景點"
          >
            ←
          </button>
        )}

        {showCarouselArrows && canScrollRight && (
          <button
            type="button"
            onClick={() => scrollCards("next")}
            className="absolute right-0 top-[99px] z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/10 bg-background text-sm font-semibold text-foreground shadow-md transition-colors hover:bg-primary-surface/30 md:flex"
            aria-label="下一組景點"
          >
            →
          </button>
        )}

        <div
          ref={scrollRef}
          className="trip-attraction-scroll -mx-4 flex gap-6 overflow-x-auto scroll-pl-4 scroll-pr-4 px-4 pb-1 md:mx-0 md:scroll-pl-0 md:scroll-pr-0 md:px-0 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="景點高光，可左右滑動瀏覽"
        >
          {attractions.map((spot) => (
            <button
              key={spot.nameEn}
              type="button"
              onClick={() => openSpot(spot)}
              className={`group w-[159px] shrink-0 cursor-pointer snap-start overflow-hidden ${ATTRACTION_CARD_RADIUS} border border-foreground/5 bg-background text-left shadow-sm transition-[transform,box-shadow,ring-color] hover:scale-[1.02] hover:shadow-md hover:ring-2 hover:ring-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
              aria-label={`查看景點介紹：${spot.name}`}
            >
              <div className="relative h-[118px] w-full overflow-hidden rounded-t-[10px] bg-primary-surface/25">
                <Image
                  src={attractionImageSrc(spot.imageUrl, 320)}
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
                <p className="mt-0.5 line-clamp-2 text-[12px] font-medium leading-[16px] text-foreground/65">
                  {spot.nameEn}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeSpot && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="attraction-modal-title"
          onClick={close}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-[800px] flex-col overflow-hidden rounded-[20px] bg-background shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 text-lg text-foreground/70 transition-colors hover:bg-foreground/10"
              aria-label="關閉"
            >
              ×
            </button>

            <div className="overflow-y-auto">
              <div className="px-6 pb-8 pt-10 md:px-10">
                {activeSpot.region && (
                  <p className="mb-3 text-sm font-semibold text-primary">
                    {activeSpot.region}
                  </p>
                )}

                <h4
                  id="attraction-modal-title"
                  className="pr-12 text-2xl font-bold leading-tight text-foreground md:text-[28px]"
                >
                  {activeSpot.name} | {activeSpot.nameEn}
                </h4>

                {activeSpot.subtitle && (
                  <p className="mt-6 text-base font-bold leading-relaxed text-foreground">
                    {activeSpot.subtitle}
                  </p>
                )}

                {activeParagraphs.length > 0 && (
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
                    {activeParagraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {activeGallery.length > 0 && (
                  <div className="relative mt-8">
                    <div className={`overflow-hidden ${ATTRACTION_CARD_RADIUS}`}>
                      <div
                        className={`relative aspect-[16/10] w-full overflow-hidden ${ATTRACTION_CARD_RADIUS} bg-primary-surface/25`}
                      >
                        <Image
                          src={attractionImageSrc(
                            activeGallery[galleryIndex],
                            1200,
                          )}
                          alt={activeSpot.name}
                          fill
                          className={`object-cover ${ATTRACTION_CARD_RADIUS}`}
                          sizes="800px"
                          priority
                        />
                      </div>
                    </div>

                    {activeGallery.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={showGalleryPrev}
                          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/90 px-3 py-2 text-sm font-semibold text-foreground shadow-md transition-colors hover:bg-background"
                          aria-label="上一張"
                        >
                          ←
                        </button>
                        <button
                          type="button"
                          onClick={showGalleryNext}
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/90 px-3 py-2 text-sm font-semibold text-foreground shadow-md transition-colors hover:bg-background"
                          aria-label="下一張"
                        >
                          →
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
