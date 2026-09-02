import {
  getFirstSelectableDate,
  isDateInExclusion,
} from "@/lib/trip-date-utils";
import type { PricingConfig } from "./types";

export function assertBookableStartDate(
  config: PricingConfig,
  startDate: string,
): void {
  const min = config.bookingDateRange?.min;
  const max = config.bookingDateRange?.max;

  if (min && startDate < min) {
    throw new Error("出發日早於可預訂區間");
  }
  if (max && startDate > max) {
    throw new Error("出發日晚於可預訂區間");
  }
  if (isDateInExclusion(startDate, config.bookingDateExclusions)) {
    throw new Error("所選出發日目前無營運，請選擇其他日期");
  }
}

export function resolveDefaultStartDate(config: PricingConfig): string {
  return getFirstSelectableDate(
    config.bookingDateRange?.min,
    config.bookingDateRange?.max,
    config.bookingDateExclusions,
  );
}

export function normalizeBookingStartDate(
  startDate: string,
  config: PricingConfig,
): string {
  if (!startDate) return resolveDefaultStartDate(config);
  try {
    assertBookableStartDate(config, startDate);
    return startDate;
  } catch {
    return resolveDefaultStartDate(config);
  }
}
