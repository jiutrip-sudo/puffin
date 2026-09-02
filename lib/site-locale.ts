export const SITE_LOCALE_COOKIE = "puffin-locale";
export const SITE_LOCALE_HEADER = "x-site-locale";

export type SiteLocale = "zh-TW" | "zh-CN";

const LOCALES = new Set<SiteLocale>(["zh-TW", "zh-CN"]);

export function parseSiteLocale(
  value: string | null | undefined,
): SiteLocale {
  if (value && LOCALES.has(value as SiteLocale)) {
    return value as SiteLocale;
  }
  return "zh-TW";
}

export function siteLocaleToHtmlLang(locale: SiteLocale): string {
  return locale;
}

export function siteLocaleToOpenGraphLocale(locale: SiteLocale): string {
  return locale === "zh-CN" ? "zh_CN" : "zh_TW";
}
