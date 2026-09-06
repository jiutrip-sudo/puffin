"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { SiteLogo } from "./SiteLogo";
import { SitePreferencesBar } from "./SitePreferencesBar";
import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { t } from "@/lib/i18n/messages";

type SiteHeaderProps = {
  activeLabel?: string;
  rightSlot?: React.ReactNode;
  /** 離開 Hero、疊在淺色內容區時提高字色對比 */
  onSurface?: boolean;
};

type NavLink = {
  label: string;
  href: string;
};

function navLinkClassName(
  link: NavLink,
  activeLabel: string | undefined,
  onSurface: boolean,
  compact: boolean,
) {
  const active =
    activeLabel === link.label
      ? onSurface
        ? "bg-primary-dark text-white shadow-sm"
        : "bg-white text-primary-dark shadow-sm"
      : onSurface
        ? "text-hero-text/80 hover:bg-foreground/8 hover:text-hero-text"
        : "text-hero-text/90 hover:bg-white/15 hover:text-hero-text";

  return compact
    ? `inline-flex min-h-11 min-w-0 flex-1 items-center justify-center rounded-full px-2 py-2 text-xs font-medium tracking-wide transition-all ${active}`
    : `rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all ${active}`;
}

function SiteMainNav({
  navLinks,
  locale,
  activeLabel,
  onSurface,
  compact = false,
  className = "",
}: {
  navLinks: NavLink[];
  locale: ReturnType<typeof useSiteLocale>;
  activeLabel?: string;
  onSurface: boolean;
  compact?: boolean;
  className?: string;
}) {
  return (
    <nav
      className={`glass-hero flex items-center rounded-full ${
        compact
          ? "site-header-mobile-nav min-w-0 flex-1 gap-0.5 px-1 py-1"
          : "gap-1 px-2 py-1.5"
      } ${className}`.trim()}
      aria-label={t("nav.main", locale)}
    >
      {navLinks.map((link) => (
        <LocaleLink
          key={link.href}
          href={link.href}
          locale={locale}
          className={navLinkClassName(link, activeLabel, onSurface, compact)}
        >
          {link.label}
        </LocaleLink>
      ))}
    </nav>
  );
}

export function SiteHeader({
  activeLabel,
  rightSlot,
  onSurface = false,
}: SiteHeaderProps) {
  const locale = useSiteLocale();

  const navLinks: NavLink[] = [
    { label: t("nav.about", locale), href: "/" },
    { label: t("nav.trips", locale), href: "/trips" },
    { label: t("nav.guides", locale), href: "/guides" },
  ];

  return (
    <header
      className={`site-header px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:px-8 md:py-4 ${
        onSurface ? "site-header--on-surface" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="site-header-mobile-bar flex md:hidden">
          <SiteLogo className="shrink-0" />
          <SiteMainNav
            navLinks={navLinks}
            locale={locale}
            activeLabel={activeLabel}
            onSurface={onSurface}
            compact
          />
          <div className="site-header-mobile-bar__actions">
            {rightSlot ? (
              <div className="site-header-mobile-bar__slot">{rightSlot}</div>
            ) : null}
            <SitePreferencesBar />
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-3">
          <div className="justify-self-start">
            <SiteLogo />
          </div>

          <SiteMainNav
            navLinks={navLinks}
            locale={locale}
            activeLabel={activeLabel}
            onSurface={onSurface}
            className="justify-self-center"
          />

          <div className="flex shrink-0 items-center justify-end gap-2 justify-self-end">
            <SitePreferencesBar />
            {rightSlot}
          </div>
        </div>
      </div>
    </header>
  );
}
