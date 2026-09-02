import "server-only";

import { headers } from "next/headers";
import {
  SITE_LOCALE_HEADER,
  parseSiteLocale,
  type SiteLocale,
} from "@/lib/site-locale";

export async function getRequestLocale(): Promise<SiteLocale> {
  const headerValue = (await headers()).get(SITE_LOCALE_HEADER);
  return parseSiteLocale(headerValue);
}
