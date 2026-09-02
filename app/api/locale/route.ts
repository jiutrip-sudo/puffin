import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  SITE_LOCALE_COOKIE,
  parseSiteLocale,
  type SiteLocale,
} from "@/lib/site-locale";

export async function POST(request: Request) {
  const body = (await request.json()) as { locale?: string };
  const locale = parseSiteLocale(body.locale) as SiteLocale;
  (await cookies()).set(SITE_LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return NextResponse.json({ locale });
}
