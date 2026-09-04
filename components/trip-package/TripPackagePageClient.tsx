"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { TripPackage } from "@/lib/trip-packages/types";
import type { PricingConfig, TripAvailabilityResult } from "@/lib/trip-pricing/types";
import { packageIncludesVehicle } from "@/lib/trip-pricing/calculate";
import { SiteHeader } from "@/components/SiteHeader";
import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { localePath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/messages";
import { localizeText } from "@/lib/i18n/localize";
import { TripAttractionGrid } from "./TripAttractionGrid";
import {
  TripIntroSection,
  TripRouteOverview,
  TripWhyChooseUs,
} from "./TripContentSections";
import { TripFaqAccordion } from "./TripFaqAccordion";
import { TripGallery } from "./TripGallery";
import { TripHighlightList } from "./TripHighlightList";
import { TripInclusionsPanel } from "./TripInclusionsPanel";
import { TripItineraryAccordion } from "./TripItineraryAccordion";
import { TripMetaGrid } from "./TripMetaGrid";
import { TripPackageBookingSection } from "./TripPackageBookingSection";
import { TripPackageHero } from "./TripPackageHero";
import { TripRoomVehicleCards } from "./TripRoomVehicleCards";
import { TripSectionNav } from "./TripSectionNav";
import { TripSimilarPackages } from "./TripSimilarPackages";
import type { SimilarTripCard } from "@/lib/trip-packages/similar-trips";

type TripPackagePageClientProps = {
  package: TripPackage;
  pricingConfig: PricingConfig;
  similarTrips: SimilarTripCard[];
};

function SectionHeading({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header
      id={id}
      className="scroll-mt-[calc(var(--trip-sticky-offset)+0.75rem)] mb-6"
    >
      <h2 className="text-xl font-bold text-foreground md:text-2xl">{title}</h2>
      {subtitle && (
        <p className="mt-1 text-sm text-foreground/60">{subtitle}</p>
      )}
    </header>
  );
}

type TripPackageMainContentProps = {
  pkg: TripPackage;
  pricingConfig: PricingConfig;
  similarTrips: SimilarTripCard[];
  desktopPanel: React.ReactNode;
  accommodationTier: string;
  setAccommodationTier: (value: string) => void;
  vehicleTier: string;
  setVehicleTier: (value: string) => void;
  tierAvailability: TripAvailabilityResult | null;
  availabilityLoading: boolean;
  availabilityActive: boolean;
  pricingLoading: boolean;
  requestAvailability: () => void;
};

function TripPackageMainContent({
  pkg,
  pricingConfig,
  similarTrips,
  desktopPanel,
  accommodationTier,
  setAccommodationTier,
  vehicleTier,
  setVehicleTier,
  tierAvailability,
  availabilityLoading,
  availabilityActive,
  pricingLoading,
  requestAvailability,
}: TripPackageMainContentProps) {
  const locale = useSiteLocale();
  const roomVehicleSectionRef = useRef<HTMLElement>(null);
  const includesVehicle = packageIncludesVehicle(pricingConfig);
  const itinerarySubtitle = localizeText(
    `您的 ${pkg.duration.days} 天 ${pkg.duration.nights} 夜行程概覽`,
    locale,
  );

  useEffect(() => {
    const section = roomVehicleSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAvailability();
        }
      },
      { rootMargin: "120px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [requestAvailability]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-12">
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-10">
        <main className="min-w-0 space-y-14 pb-24 lg:pb-10">
          <section>
            <SectionHeading id="overview" title={t("trip.section.overview", locale)} />
            <TripMetaGrid package={pkg} />
            <div className="mt-8">
              <TripIntroSection
                summary={pkg.intro.summary}
                full={pkg.intro.full}
              />
            </div>
            {pkg.gallery.length > 0 && (
              <div className="mt-8">
                <TripGallery images={pkg.gallery} />
              </div>
            )}
          </section>

          <section>
            <h3 className="mb-4 text-lg font-bold text-foreground">
              {t("trip.section.travelHighlights", locale)}
            </h3>
            <TripHighlightList highlights={pkg.highlights} />
          </section>

          <section>
            <h3 className="mb-4 text-lg font-bold text-foreground">
              {t("trip.section.attractionHighlights", locale)}
            </h3>
            <TripAttractionGrid attractions={pkg.attractions} />
          </section>

          <section>
            <h3 className="mb-4 text-lg font-bold text-foreground">
              {t("trip.section.whyChooseBrand", locale)}
            </h3>
            <TripWhyChooseUs items={pkg.whyChooseUs} />
          </section>

          <section>
            <SectionHeading
              id="route"
              title={t("trip.section.routeOverview", locale)}
              subtitle={
                pkg.routeOverviewSubtitle ??
                t("trip.section.routeDefaultSubtitle", locale)
              }
            />
            <TripRouteOverview stops={pkg.routeStops} routeMap={pkg.routeMap} />
          </section>

          <section>
            <SectionHeading
              id="itinerary"
              title={t("trip.section.itinerary", locale)}
              subtitle={itinerarySubtitle}
            />
            <TripItineraryAccordion days={pkg.itinerary} />
          </section>

          <section>
            <SectionHeading
              id="inclusions"
              title={t("trip.section.inclusions", locale)}
            />
            <TripInclusionsPanel
              included={pkg.inclusions.included}
              excluded={pkg.inclusions.excluded}
            />
          </section>

          <section ref={roomVehicleSectionRef}>
            <SectionHeading
              id="room-vehicle"
              title={
                includesVehicle
                  ? t("trip.section.roomVehicle", locale)
                  : t("trip.section.roomOnly", locale)
              }
            />
            <TripRoomVehicleCards
              pricingConfig={pricingConfig}
              accommodationTier={accommodationTier}
              vehicleTier={vehicleTier}
              onAccommodationChange={setAccommodationTier}
              onVehicleChange={setVehicleTier}
              accommodationAvailability={tierAvailability?.accommodation}
              vehicleAvailability={tierAvailability?.vehicles}
              availabilityLoading={availabilityLoading}
              availabilityActive={availabilityActive}
              pricingLoading={pricingLoading}
            />
          </section>

          <section>
            <SectionHeading id="faq" title={t("trip.section.faq", locale)} />
            <TripFaqAccordion groups={pkg.faq} />
          </section>
        </main>

        <aside className="hidden lg:block lg:min-h-0">
          <div className="sticky top-[var(--trip-sticky-offset)] z-[50]">
            {desktopPanel}
          </div>
        </aside>
      </div>

      <section className="mt-14 lg:mt-16">
        <SectionHeading id="similar" title={t("trip.section.similar", locale)} />
        <TripSimilarPackages trips={similarTrips} />
      </section>
    </div>
  );
}

export function TripPackagePageClient({
  package: pkg,
  pricingConfig,
  similarTrips,
}: TripPackagePageClientProps) {
  const locale = useSiteLocale();
  const pageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [headerElevated, setHeaderElevated] = useState(false);

  useEffect(() => {
    const updateStickyLayout = () => {
      const page = pageRef.current;
      const header = headerRef.current;
      const hero = heroRef.current;
      if (!page || !header || !hero) return;

      const headerHeight = header.offsetHeight;
      page.style.setProperty("--trip-header-height", `${headerHeight}px`);

      const navHeight = navRef.current?.offsetHeight ?? 0;
      page.style.setProperty(
        "--trip-sticky-offset",
        `${headerHeight + navHeight}px`,
      );

      const headerBottom = header.getBoundingClientRect().bottom;
      const titleEl = hero.querySelector("h1");
      const titleUnderHeader =
        titleEl && titleEl.getBoundingClientRect().top < headerBottom;

      setHeaderElevated(
        titleUnderHeader ||
          hero.getBoundingClientRect().bottom <= headerBottom,
      );
    };

    updateStickyLayout();
    window.addEventListener("scroll", updateStickyLayout, { passive: true });
    window.addEventListener("resize", updateStickyLayout);

    return () => {
      window.removeEventListener("scroll", updateStickyLayout);
      window.removeEventListener("resize", updateStickyLayout);
    };
  }, []);

  return (
    <div ref={pageRef} className="trip-package-page min-h-screen bg-background">
      <div
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-[70] isolate transition-[background,backdrop-filter,box-shadow,border-color] duration-300 ${
          headerElevated ? "glass-white site-header--on-surface" : "border-b border-transparent"
        }`}
      >
        <SiteHeader
          onSurface={headerElevated}
          rightSlot={
            <Link
              href={localePath(pkg.backHref, locale)}
              className="glass-hero rounded-full px-5 py-2 text-xs font-medium text-hero-text/90 transition-all hover:bg-white/25"
            >
              {pkg.backLabel}
            </Link>
          }
        />
      </div>

      <div ref={heroRef}>
        <TripPackageHero package={pkg} />
      </div>
      <TripSectionNav
        ref={navRef}
        elevated={headerElevated}
        roomSectionLabel={
          packageIncludesVehicle(pricingConfig)
            ? t("trip.nav.roomVehicleShort", locale)
            : t("trip.nav.roomOnlyShort", locale)
        }
      />

      <TripPackageBookingSection
        packageId={pkg.id}
        packageTitle={pkg.title}
        pricingConfig={pricingConfig}
      >
        {({
          desktopPanel,
          accommodationTier,
          setAccommodationTier,
          vehicleTier,
          setVehicleTier,
          tierAvailability,
          availabilityLoading,
          availabilityActive,
          pricingLoading,
          requestAvailability,
        }) => (
          <TripPackageMainContent
            pkg={pkg}
            pricingConfig={pricingConfig}
            similarTrips={similarTrips}
            desktopPanel={desktopPanel}
            accommodationTier={accommodationTier}
            setAccommodationTier={setAccommodationTier}
            vehicleTier={vehicleTier}
            setVehicleTier={setVehicleTier}
            tierAvailability={tierAvailability}
            availabilityLoading={availabilityLoading}
            availabilityActive={availabilityActive}
            pricingLoading={pricingLoading}
            requestAvailability={requestAvailability}
          />
        )}
      </TripPackageBookingSection>

      <div className="h-24 lg:hidden" aria-hidden />
    </div>
  );
}
