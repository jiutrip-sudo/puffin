"use client";

import {
  parseSiteLocale,
  SITE_LOCALE_COOKIE,
  type SiteLocale,
} from "@/lib/site-locale";
import { getLocaleFromPathname } from "@/lib/i18n/paths";

export function readSiteLocaleFromDocument(): SiteLocale {
  if (typeof document === "undefined") {
    return "zh-TW";
  }

  const lang = document.documentElement.lang;
  if (lang) {
    return parseSiteLocale(lang);
  }

  return getLocaleFromPathname(window.location.pathname);
}

export function setPuffinLocale(locale: SiteLocale) {
  try {
    localStorage.setItem(SITE_LOCALE_COOKIE, locale);
  } catch {
    // Ignore storage failures in private mode.
  }

  void fetch("/api/locale", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ locale }),
  });
}
