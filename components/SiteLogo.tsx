"use client";

import Image from "next/image";
import { LocaleLink } from "@/components/LocaleLink";
import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { BRAND_NAME } from "@/lib/company-info";

const LOGO_SRC = "/images/puffin-logo.png";

type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className = "" }: SiteLogoProps) {
  const locale = useSiteLocale();

  return (
    <LocaleLink
      href="/"
      locale={locale}
      aria-label={`${BRAND_NAME} 首頁`}
      className={`glass-hero flex items-center justify-center rounded-full p-2 transition-all hover:bg-white/25 ${className}`}
    >
      <Image
        src={LOGO_SRC}
        alt=""
        width={36}
        height={36}
        aria-hidden="true"
        className="h-9 w-9 shrink-0 rounded-full"
        priority
      />
    </LocaleLink>
  );
}

export const SITE_LOGO = LOGO_SRC;
