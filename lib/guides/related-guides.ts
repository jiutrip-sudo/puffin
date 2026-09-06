import { getGuideBySlug } from "./registry";
import type { GuideArticle } from "./types";

/** 每篇 2–3 篇延伸閱讀，依規劃漏斗互連（①→②→③→④） */
export const GUIDE_RELATED_SLUGS: Record<string, readonly string[]> = {
  "group-tour-vs-self-drive": [
    "iceland-best-time-to-visit",
    "iceland-group-tour-days",
    "iceland-winter-self-drive-days",
  ],
  "iceland-best-time-to-visit": [
    "group-tour-vs-self-drive",
    "northern-lights-season",
    "summer-ring-road-days",
  ],
  "iceland-winter-self-drive-days": [
    "iceland-winter-driving-prep",
    "golden-circle-how-many-days",
    "group-tour-vs-self-drive",
  ],
  "iceland-group-tour-days": [
    "group-tour-vs-self-drive",
    "ring-road-vs-non-ring",
    "iceland-winter-self-drive-days",
  ],
  "summer-ring-road-days": [
    "ring-road-vs-non-ring",
    "iceland-summer-self-drive-prep",
    "iceland-best-time-to-visit",
  ],
  "northern-lights-season": [
    "iceland-best-time-to-visit",
    "iceland-winter-self-drive-days",
    "iceland-activities-booking",
  ],
  "golden-circle-how-many-days": [
    "iceland-winter-self-drive-days",
    "iceland-group-tour-days",
    "summer-ring-road-days",
  ],
  "ring-road-vs-non-ring": [
    "summer-ring-road-days",
    "iceland-group-tour-days",
    "iceland-best-time-to-visit",
  ],
  "iceland-winter-driving-prep": [
    "iceland-winter-self-drive-days",
    "iceland-packing-list",
    "taiwan-passport-iceland-entry",
  ],
  "iceland-summer-self-drive-prep": [
    "summer-ring-road-days",
    "iceland-packing-list",
    "taiwan-passport-iceland-entry",
  ],
  "iceland-packing-list": [
    "iceland-winter-driving-prep",
    "iceland-summer-self-drive-prep",
    "iceland-activities-booking",
  ],
  "taiwan-passport-iceland-entry": [
    "how-to-book-and-pay",
    "iceland-packing-list",
    "iceland-best-time-to-visit",
  ],
  "how-to-book-and-pay": [
    "iceland-activities-booking",
    "taiwan-passport-iceland-entry",
    "group-tour-vs-self-drive",
  ],
  "iceland-activities-booking": [
    "how-to-book-and-pay",
    "iceland-winter-driving-prep",
    "northern-lights-season",
  ],
};

export function getRelatedGuides(slug: string): GuideArticle[] {
  const relatedSlugs = GUIDE_RELATED_SLUGS[slug];
  if (!relatedSlugs) {
    return [];
  }

  return relatedSlugs
    .map((relatedSlug) => getGuideBySlug(relatedSlug))
    .filter((article): article is GuideArticle => article != null);
}
