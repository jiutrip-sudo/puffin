"use client";

import { createContext, useContext } from "react";
import type { SiteLocale } from "@/lib/site-locale";

const SiteLocaleContext = createContext<SiteLocale>("zh-TW");

export function SiteLocaleProvider({
  locale,
  children,
}: {
  locale: SiteLocale;
  children: React.ReactNode;
}) {
  return (
    <SiteLocaleContext.Provider value={locale}>
      {children}
    </SiteLocaleContext.Provider>
  );
}

export function useSiteLocale(): SiteLocale {
  return useContext(SiteLocaleContext);
}
