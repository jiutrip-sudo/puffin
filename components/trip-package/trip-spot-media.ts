import type { TripAttraction } from "@/lib/trip-packages/types";

import { resizeTripImageSrc } from "@/lib/trip-image";

export const TRIP_SPOT_CARD_RADIUS = "rounded-[10px]";

export function spotImageSrc(url: string, width: number) {
  return resizeTripImageSrc(url, width);
}

export function spotGallery(spot: TripAttraction) {
  if (spot.galleryImages?.length) return spot.galleryImages;
  return [spot.imageUrl];
}

export function spotParagraphs(spot: TripAttraction) {
  if (spot.paragraphs?.length) return spot.paragraphs;
  if (spot.description) return [spot.description];
  return [];
}
