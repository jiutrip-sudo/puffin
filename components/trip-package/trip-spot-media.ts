import type { TripAttraction } from "@/lib/trip-packages/types";

export const TRIP_SPOT_CARD_RADIUS = "rounded-[10px]";

export function spotImageSrc(url: string, width: number) {
  if (url.includes("senlinmao.com/images/")) {
    return url.replace(/w_\d+/, `w_${width}`);
  }
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}w=${width}&q=80`;
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
