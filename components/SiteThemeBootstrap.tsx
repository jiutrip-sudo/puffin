"use client";

import { runSiteThemeBootstrap } from "@/lib/site-theme-bootstrap";

if (typeof window !== "undefined") {
  runSiteThemeBootstrap();
}

/** Resolves system theme as soon as the client bundle loads. */
export function SiteThemeBootstrap() {
  return null;
}
