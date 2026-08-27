import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  SITE_THEME_COOKIE,
  parseSiteThemePreference,
  type SiteThemePreference,
} from "@/lib/site-theme";

export async function POST(request: Request) {
  const body = (await request.json()) as { preference?: string };
  const preference = parseSiteThemePreference(body.preference);
  (await cookies()).set(SITE_THEME_COOKIE, preference, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return NextResponse.json({ preference });
}
