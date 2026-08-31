import type { CorivoOptionalExtra } from "@/lib/checkout/corivo-optional-extras";
import { getTripPackageByPackageId } from "@/lib/trip-packages/registry";
import type { TripAttraction } from "@/lib/trip-packages/types";

function normalizeActivityName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[|｜（）()，,、·:：\-—–]/g, "");
}

function imageFingerprint(url: string | null | undefined): string | null {
  if (!url) return null;
  const match = url.match(/\/([^/?]+?)(?:\.[a-zA-Z0-9]+)?(?:\?|$)/);
  if (!match?.[1]) return null;
  return match[1].toLowerCase();
}

function namesLikelyMatch(a: string, b: string): boolean {
  const na = normalizeActivityName(a);
  const nb = normalizeActivityName(b);
  if (!na || !nb) return false;
  if (na === nb) return true;
  if (na.includes(nb) || nb.includes(na)) return true;

  const minLen = Math.min(na.length, nb.length);
  if (minLen >= 8) {
    const sliceA = na.slice(0, minLen);
    const sliceB = nb.slice(0, minLen);
    if (sliceA === sliceB) return true;
  }

  return false;
}

function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function listPackageOptionalActivities(packageId: string): TripAttraction[] {
  const tripPackage = getTripPackageByPackageId(packageId);
  if (!tripPackage?.itinerary) return [];

  return tripPackage.itinerary.flatMap((day) => day.optionalActivities ?? []);
}

function findMatchingTripAttraction(
  activities: TripAttraction[],
  extra: CorivoOptionalExtra,
): TripAttraction | null {
  const exact = activities.find(
    (activity) =>
      activity.name === extra.name ||
      (activity.nameEn && activity.nameEn === extra.name),
  );
  if (exact) return exact;

  const byName = activities.find((activity) =>
    namesLikelyMatch(activity.name, extra.name),
  );
  if (byName) return byName;

  const extraImageKey = imageFingerprint(extra.imageUrl);
  if (!extraImageKey) return null;

  return activities.find((activity) => {
    const keys = [
      imageFingerprint(activity.imageUrl),
      ...(activity.galleryImages ?? []).map((url) => imageFingerprint(url)),
    ].filter(Boolean);
    return keys.some((key) => key === extraImageKey || key?.includes(extraImageKey) || extraImageKey.includes(key ?? ""));
  }) ?? null;
}

function corivoExtraToAttraction(extra: CorivoOptionalExtra): TripAttraction {
  const galleryImages = extra.info?.images.length
    ? extra.info.images
    : extra.imageUrl
      ? [extra.imageUrl]
      : [];

  const paragraphs = (extra.info?.paragraphs ?? [])
    .map((paragraph) => stripHtml(paragraph))
    .filter(Boolean);

  if (extra.info?.infoBanner?.trim()) {
    paragraphs.unshift(extra.info.infoBanner.trim());
  }

  if (extra.durationLabel?.trim()) {
    paragraphs.push(extra.durationLabel.trim());
  }

  return {
    name: extra.name,
    imageUrl: extra.imageUrl ?? galleryImages[0] ?? "",
    galleryImages: galleryImages.length > 0 ? galleryImages : undefined,
    paragraphs: paragraphs.length > 0 ? paragraphs : undefined,
  };
}

export function resolveExtraTripAttraction(
  packageId: string,
  extra: CorivoOptionalExtra,
): TripAttraction {
  const activities = listPackageOptionalActivities(packageId);
  const matched = findMatchingTripAttraction(activities, extra);
  if (matched) return matched;

  return corivoExtraToAttraction(extra);
}
