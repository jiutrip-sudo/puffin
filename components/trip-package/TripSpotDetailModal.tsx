"use client";

import { TripImage } from "@/components/trip-package/TripImage";
import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { localizeTripSpot } from "@/lib/trip-packages/localize-trip-spot";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { TripAttraction } from "@/lib/trip-packages/types";
import {
  TRIP_SPOT_CARD_RADIUS,
  spotGallery,
  spotImageSrc,
  spotParagraphs,
} from "./trip-spot-media";

type TripSpotDetailModalProps = {
  spot: TripAttraction;
  onClose: () => void;
};

export function TripSpotDetailModal({ spot, onClose }: TripSpotDetailModalProps) {
  const locale = useSiteLocale();
  const displaySpot = useMemo(
    () => localizeTripSpot(spot, locale),
    [spot, locale],
  );
  const [galleryIndex, setGalleryIndex] = useState(0);

  const activeGallery = spotGallery(displaySpot);
  const activeParagraphs = spotParagraphs(displaySpot);

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

  useEffect(() => {
    setGalleryIndex(0);
  }, [displaySpot.name, displaySpot.imageUrl]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] max-md:flex max-md:items-end md:flex md:items-center md:justify-center md:bg-black/50 md:p-4 md:backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="spot-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/40 md:bg-black/50"
        aria-label="關閉"
        onClick={onClose}
      />
      <div
        className="relative flex max-h-[92vh] w-full flex-col overflow-hidden bg-background shadow-xl max-md:rounded-t-2xl max-md:pb-[max(1rem,env(safe-area-inset-bottom))] md:max-h-[90vh] md:max-w-[800px] md:rounded-[20px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="mx-auto mt-2 mb-1 h-1 w-10 shrink-0 rounded-full bg-foreground/15 md:hidden"
          aria-hidden="true"
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-foreground/5 text-lg text-foreground/70 transition-colors hover:bg-foreground/10"
          aria-label="關閉"
        >
          ×
        </button>

        <div className="overflow-y-auto overscroll-contain">
          <div className="px-6 pb-8 pt-8 md:px-10 md:pt-10">
            {displaySpot.region && (
              <p className="mb-3 text-sm font-semibold text-primary">
                {displaySpot.region}
              </p>
            )}

            <h4
              id="spot-modal-title"
              className="pr-12 text-2xl font-bold leading-tight text-foreground md:text-[28px]"
            >
              {displaySpot.nameEn
                ? `${displaySpot.name} | ${displaySpot.nameEn}`
                : displaySpot.name}
            </h4>

            {displaySpot.subtitle && (
              <p className="mt-6 text-base font-bold leading-relaxed text-foreground">
                {displaySpot.subtitle}
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
                <div className={`overflow-hidden ${TRIP_SPOT_CARD_RADIUS}`}>
                  <div
                    className={`relative aspect-[16/10] w-full overflow-hidden ${TRIP_SPOT_CARD_RADIUS} bg-primary-surface/25`}
                  >
                    <TripImage
                      src={spotImageSrc(activeGallery[galleryIndex], 1200)}
                      alt={displaySpot.name}
                      fill
                      className={`object-cover ${TRIP_SPOT_CARD_RADIUS}`}
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
  );
}
