import type { SiteLocale } from "@/lib/site-locale";
import { localizeDeep, localizeText } from "@/lib/i18n/localize";
import {
  BRAND_NAME,
  COMPANY_INFO,
} from "@/lib/company-info";

export function getLocalizedCompanyInfo(locale: SiteLocale) {
  if (locale === "zh-TW") {
    return COMPANY_INFO;
  }
  return localizeDeep(COMPANY_INFO, locale);
}

export function getLocalizedBrandName(locale: SiteLocale) {
  return localizeText(BRAND_NAME, locale);
}
