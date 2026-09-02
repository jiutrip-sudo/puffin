import type { SiteLocale } from "@/lib/site-locale";

export const LOCALE_PREFIX = "/zh-cn";

export function stripLocalePrefix(pathname: string): string {
  if (pathname === LOCALE_PREFIX) {
    return "/";
  }
  if (pathname.startsWith(`${LOCALE_PREFIX}/`)) {
    return pathname.slice(LOCALE_PREFIX.length) || "/";
  }
  return pathname;
}

export function getLocaleFromPathname(pathname: string): SiteLocale {
  return pathname === LOCALE_PREFIX || pathname.startsWith(`${LOCALE_PREFIX}/`)
    ? "zh-CN"
    : "zh-TW";
}

export function localePath(path: string, locale: SiteLocale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const stripped = stripLocalePrefix(normalized);

  if (locale === "zh-CN") {
    return stripped === "/" ? LOCALE_PREFIX : `${LOCALE_PREFIX}${stripped}`;
  }

  return stripped;
}

export function switchLocalePath(
  pathname: string,
  targetLocale: SiteLocale,
): string {
  const stripped = stripLocalePrefix(pathname);
  const nextPath = localePath(stripped, targetLocale);
  return nextPath;
}

export function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export function localizeHref(href: string, locale: SiteLocale): string {
  if (!href.startsWith("/") || isExternalHref(href)) {
    return href;
  }
  return localePath(href, locale);
}
