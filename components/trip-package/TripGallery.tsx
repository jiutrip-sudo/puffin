"use client";

import { TripImage } from "@/components/trip-package/TripImage";
import { useCallback, useEffect, useState } from "react";
import type { GalleryImage } from "@/lib/trip-packages/types";
import { resizeTripImageSrc } from "@/lib/trip-image";

type TripGalleryProps = {
  images: GalleryImage[];
};

const PREVIEW_COUNT = 5;

const MOSAIC_SLOTS = [
  "col-span-2 row-span-2",
  "col-start-3 row-start-1",
  "col-start-4 row-start-1",
  "col-start-3 row-start-2",
  "col-start-4 row-start-2",
] as const;

type MosaicTileProps = {
  image: GalleryImage;
  index: number;
  className: string;
  extraCount?: number;
  onOpen: (index: number) => void;
};

function MosaicTile({
  image,
  index,
  className,
  extraCount = 0,
  onOpen,
}: MosaicTileProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className={`group relative min-h-0 overflow-hidden bg-primary-surface/30 text-left transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${className}`}
      aria-label={
        extraCount > 0
          ? `查看其餘 ${extraCount} 張照片`
          : `放大檢視：${image.alt}`
      }
    >
      <TripImage
        src={resizeTripImageSrc(image.url, 640)}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      {extraCount > 0 && (
        <span className="absolute inset-0 flex items-center justify-center bg-black/45 text-3xl font-bold text-white md:text-4xl">
          +{extraCount}
        </span>
      )}
    </button>
  );
}

export function TripGallery({ images }: TripGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showNext, showPrev]);

  if (images.length === 0) return null;

  const activeImage =
    activeIndex !== null ? images[activeIndex] : undefined;

  const previewCount = Math.min(images.length, PREVIEW_COUNT);
  const extraCount = Math.max(0, images.length - PREVIEW_COUNT);

  return (
    <>
      <div className="overflow-hidden rounded-2xl bg-background">
        {images.length === 1 ? (
          <button
            type="button"
            onClick={() => setActiveIndex(0)}
            className="group relative aspect-[16/10] w-full overflow-hidden bg-primary-surface/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`放大檢視：${images[0].alt}`}
          >
            <TripImage
              src={resizeTripImageSrc(images[0].url, 1200)}
              alt={images[0].alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="100vw"
            />
          </button>
        ) : (
          <div
            className="grid h-[220px] grid-cols-4 grid-rows-2 gap-1 sm:h-[300px] md:h-[380px]"
          >
            {images.slice(0, previewCount).map((image, slotIndex) => (
              <MosaicTile
                key={image.id}
                image={image}
                index={slotIndex}
                className={MOSAIC_SLOTS[slotIndex]}
                extraCount={
                  slotIndex === PREVIEW_COUNT - 1 ? extraCount : 0
                }
                onOpen={setActiveIndex}
              />
            ))}
          </div>
        )}
      </div>

      {activeImage && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="行程圖庫放大檢視"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/25"
            aria-label="關閉"
          >
            關閉
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/25 md:left-6"
                aria-label="上一張"
              >
                ←
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/25 md:right-6"
                aria-label="下一張"
              >
                →
              </button>
            </>
          )}

          <div
            className="relative flex max-h-[85vh] w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full">
              <TripImage
                src={resizeTripImageSrc(activeImage.url, 1600)}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            {(activeImage.caption || activeImage.alt) && (
              <p className="mt-4 text-center text-sm text-white/90">
                {activeImage.caption ?? activeImage.alt}
              </p>
            )}
            {images.length > 1 && (
              <p className="mt-2 text-xs text-white/60">
                {activeIndex + 1} / {images.length}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
