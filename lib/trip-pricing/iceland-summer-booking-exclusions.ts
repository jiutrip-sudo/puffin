import type { BookingDateExclusion } from "./types";

/** 冰島夏季套餐休運期（無營運、日曆不顯示可選）；2027-05-01 起恢復營運 */
export const ICELAND_SUMMER_BOOKING_EXCLUSIONS: BookingDateExclusion[] = [
  { from: "2026-11-01", to: "2027-04-30" },
];
