"use client";

import { usePathname } from "next/navigation";
import { SiteHeaderShell } from "./SiteHeaderShell";

/** 這些路徑已在頁面內嵌 SiteHeader（Hero 疊層或行程詳情 sticky） */
function pathHasBuiltInHeader(pathname: string): boolean {
  if (pathname === "/" || pathname === "/taiwan" || pathname === "/iceland") {
    return true;
  }

  if (pathname.startsWith("/trips/")) {
    return true;
  }

  return false;
}

export function SiteChrome() {
  const pathname = usePathname() ?? "";

  if (pathHasBuiltInHeader(pathname)) {
    return null;
  }

  return <SiteHeaderShell variant="sticky" />;
}
