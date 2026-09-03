import {
  buildDisplayPricingSnapshot,
  type DisplayPricingSnapshot,
} from "@/lib/i18n/display-money";
import type { SiteLocale } from "@/lib/site-locale";
import type { PricingResult } from "./types";

export type PricingResultWithDisplay = PricingResult & DisplayPricingSnapshot;

export function attachDisplayPricing(
  result: PricingResult,
  locale: SiteLocale,
): PricingResultWithDisplay {
  const snapshot = buildDisplayPricingSnapshot(
    result.total,
    result.deposit,
    result.perPersonDouble,
    locale,
  );

  return {
    ...result,
    ...snapshot,
  };
}
