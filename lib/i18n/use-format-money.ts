"use client";

import { useCallback } from "react";
import {
  formatDisplayMoney,
  formatIskAdmin,
  getFxDisclaimer,
} from "@/lib/i18n/display-money";
import { useSiteLocale } from "@/components/SiteLocaleProvider";

export function useFormatMoney() {
  const locale = useSiteLocale();

  const formatMoney = useCallback(
    (iskAmount: number) => formatDisplayMoney(iskAmount, locale),
    [locale],
  );

  return {
    locale,
    formatMoney,
    formatIskAdmin,
    fxDisclaimer: getFxDisclaimer(locale),
  };
}
