"use client";

import { usePathname } from "next/navigation";
import { SiteHeaderShell } from "./SiteHeaderShell";
import { stripLocalePrefix } from "@/lib/i18n/paths";

/** 這些路徑已在頁面內嵌 SiteHeader（Hero 疊層或行程詳情 sticky） */
function pathHasBuiltInHeader(pathname: string): boolean {
  const path = stripLocalePrefix(pathname);

  if (path === "/" || path === "/taiwan" || path === "/iceland") {
    return true;
  }

  if (path.startsWith("/trips/")) {
    return true;
  }

  if (path.startsWith("/admin")) {
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
