import type { BookingDateExclusion } from "./types";

/** 非營運出發日（由 scripts/extract-slm-group-departures.mjs 自森林貓同步） */
export const ICELAND_GROUP_SUMMER_5_SOUTH_GOLDEN_CIRCLE_OPERATING_EXCLUSIONS: BookingDateExclusion[] = [
  { from: "2026-09-16", to: "2026-09-16" },
  { from: "2026-09-23", to: "2026-09-23" },
  { from: "2026-09-30", to: "2026-09-30" },
  { from: "2026-10-07", to: "2026-10-07" },
  { from: "2026-10-14", to: "2026-10-14" },
  { from: "2026-10-21", to: "2026-10-21" },
  { from: "2026-10-28", to: "2026-10-28" },
];
