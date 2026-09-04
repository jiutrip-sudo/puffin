import type { SiteLocale } from "@/lib/site-locale";
import {
  FX_DISPLAY_ROUND_TO,
  FX_ISK_TO_DISPLAY,
  FX_UPDATED_AT,
  getFxRateForCurrency,
} from "./fx-rates";

export type DisplayCurrency = "TWD" | "CNY";

export function getDisplayCurrency(locale: SiteLocale): DisplayCurrency {
  return locale === "zh-CN" ? "CNY" : "TWD";
}

function roundDisplayAmountUp(
  amount: number,
  currency: DisplayCurrency,
): number {
  const roundTo = FX_DISPLAY_ROUND_TO[currency];
  if (roundTo <= 1) {
    return Math.ceil(amount);
  }
  return Math.ceil(amount / roundTo) * roundTo;
}

export function convertIskToDisplay(
  iskAmount: number,
  locale: SiteLocale,
): number {
  const currency = getDisplayCurrency(locale);
  const rate = getFxRateForCurrency(currency);
  return roundDisplayAmountUp(iskAmount * rate, currency);
}

function formatIntegerWithCommas(amount: number): string {
  const rounded = Math.round(amount);
  const sign = rounded < 0 ? "-" : "";
  const digits = Math.abs(rounded).toString();
  return `${sign}${digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export function formatDisplayMoney(
  iskAmount: number,
  locale: SiteLocale,
): string {
  const currency = getDisplayCurrency(locale);
  const displayAmount = convertIskToDisplay(iskAmount, locale);
  const formatted = formatIntegerWithCommas(displayAmount);

  if (currency === "CNY") {
    return `¥ ${formatted}`;
  }
  return `NT$ ${formatted}`;
}

export function formatIskAdmin(amount: number): string {
  const rounded = Math.round(amount);
  const sign = rounded < 0 ? "-" : "";
  const digits = Math.abs(rounded).toString();
  const withCommas = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${sign}ISK ${withCommas}`;
}

export type DisplayPricingSnapshot = {
  displayCurrency: DisplayCurrency;
  displayTotal: number;
  displayDeposit: number;
  displayPerPersonDouble: number;
  fxRate: number;
  fxAsOf: string;
};

export function buildDisplayPricingSnapshot(
  iskTotal: number,
  iskDeposit: number,
  iskPerPersonDouble: number,
  locale: SiteLocale,
): DisplayPricingSnapshot {
  const displayCurrency = getDisplayCurrency(locale);
  const fxRate = FX_ISK_TO_DISPLAY[displayCurrency];

  return {
    displayCurrency,
    displayTotal: convertIskToDisplay(iskTotal, locale),
    displayDeposit: convertIskToDisplay(iskDeposit, locale),
    displayPerPersonDouble: convertIskToDisplay(iskPerPersonDouble, locale),
    fxRate,
    fxAsOf: FX_UPDATED_AT,
  };
}

export function getFxDisclaimer(locale: SiteLocale): string {
  const currencyLabel = locale === "zh-CN" ? "人民幣" : "新台幣";
  return `價格以${currencyLabel}顯示，參考匯率截至 ${FX_UPDATED_AT}；實際結算依訂單確認金額為準。`;
}

export function formatFrozenDisplayAmount(
  amount: number,
  currency: DisplayCurrency,
): string {
  const formatted = formatIntegerWithCommas(amount);
  if (currency === "CNY") {
    return `¥ ${formatted}`;
  }
  return `NT$ ${formatted}`;
}

export function localeFromDisplayCurrency(
  currency: DisplayCurrency,
): SiteLocale {
  return currency === "CNY" ? "zh-CN" : "zh-TW";
}
