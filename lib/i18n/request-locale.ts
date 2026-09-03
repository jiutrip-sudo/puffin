import {
  SITE_LOCALE_COOKIE,
  parseSiteLocale,
  type SiteLocale,
} from "@/lib/site-locale";

export function getLocaleFromRequest(request: Request): SiteLocale {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const parts = cookieHeader.split(";").map((part) => part.trim());

  for (const part of parts) {
    if (part.startsWith(`${SITE_LOCALE_COOKIE}=`)) {
      const value = decodeURIComponent(
        part.slice(SITE_LOCALE_COOKIE.length + 1),
      );
      return parseSiteLocale(value);
    }
  }

  return "zh-TW";
}
