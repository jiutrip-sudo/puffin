"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { SiteLogo } from "./SiteLogo";
import { ThemeControlsBar } from "./ThemeControls";
import { LocaleControlsBar } from "./LocaleControls";
import { COMPANY_EMAIL, COMPANY_INFO } from "@/lib/company-info";
import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { t } from "@/lib/i18n/messages";

const OFFICE_EMAIL =
  COMPANY_INFO.contact.find((item) => item.label === "信箱")?.value ??
  COMPANY_EMAIL;

type SiteHeaderProps = {
  activeLabel?: string;
  rightSlot?: React.ReactNode;
  /** 離開 Hero、疊在淺色內容區時提高字色對比 */
  onSurface?: boolean;
};

export function SiteHeader({
  activeLabel,
  rightSlot,
  onSurface = false,
}: SiteHeaderProps) {
  const locale = useSiteLocale();

  const navLinks = [
    { label: t("nav.about", locale), href: "/" },
    { label: t("nav.trips", locale), href: "/iceland" },
    { label: t("nav.guides", locale), href: "/guides" },
    { label: t("nav.service", locale), href: "/terms-and-conditions" },
    { label: t("nav.contact", locale), href: `mailto:${OFFICE_EMAIL}` },
  ];

  return (
    <header
      className={`px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:px-8 md:py-4 ${
        onSurface ? "site-header--on-surface" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-2 md:hidden">
          <SiteLogo />
          <div className="flex shrink-0 items-center justify-end gap-1.5">
            <LocaleControlsBar />
            <ThemeControlsBar />
            {rightSlot}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-3">
          <div className="justify-self-start">
            <SiteLogo />
          </div>

          <nav
            className="glass-hero flex items-center justify-self-center gap-1 rounded-full px-2 py-1.5"
            aria-label={t("nav.main", locale)}
          >
            {navLinks.map((link) => (
              <LocaleLink
                key={link.href}
                href={link.href}
                locale={locale}
                className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all ${
                  activeLabel === link.label
                    ? onSurface
                      ? "bg-primary-dark text-white shadow-sm"
                      : "bg-white text-primary-dark shadow-sm"
                    : onSurface
                      ? "text-hero-text/80 hover:bg-foreground/8 hover:text-hero-text"
                      : "text-hero-text/90 hover:bg-white/15 hover:text-hero-text"
                }`}
              >
                {link.label}
              </LocaleLink>
            ))}
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-2 justify-self-end">
            <LocaleControlsBar />
            <ThemeControlsBar />
            {rightSlot}
          </div>
        </div>
      </div>
    </header>
  );
}
