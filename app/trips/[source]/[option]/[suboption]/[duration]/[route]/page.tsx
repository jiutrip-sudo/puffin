import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TripPackagePage } from "@/components/trip-package/TripPackagePage";
import { TripProductJsonLd } from "@/components/seo/SiteJsonLd";
import { HeroSection } from "@/components/HeroSection";
import { SiteHeader } from "@/components/SiteHeader";
import { getTripPackageWithPricingForRequest } from "@/lib/trip-packages/get-package-with-pricing";
import {
  buildTripPackageMetadata,
  getLocalizedTripLabels,
} from "@/lib/i18n/trip-metadata";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  COMING_SOON_TRIPS,
  getIcelandGroupSummerRouteOptions,
  ICELAND_GROUP_SUMMER_ROUTE_IDS,
  ICELAND_GROUP_SUMMER_ROUTE_PICKER_DAY_IDS,
  ICELAND_GROUP_WINTER_ROUTE_PICKER_DAY_IDS,
  ICELAND_SELF_DRIVE_WINTER_ROUTE_PICKER_DAY_IDS,
  ICELAND_TRIP_SEASON_DAY_IDS,
  ICELAND_WINTER_ROUTE_IDS,
  resolveRoutePagePackageTripKey,
} from "@/lib/trip-options";
import { getAllTripProductStaticParams } from "@/lib/seo/trip-static-params";

export const revalidate = 86_400;

export async function generateStaticParams() {
  return getAllTripProductStaticParams()
    .filter(
      (params): params is typeof params & { route: string } =>
        params.route !== undefined,
    )
    .map(({ source, option, suboption, duration, route }) => ({
      source,
      option,
      suboption,
      duration,
      route,
    }));
}

type PageProps = {
  params: Promise<{
    source: string;
    option: string;
    suboption: string;
    duration: string;
    route: string;
  }>;
};

const WINTER_ROUTE_LABELS: Record<string, string> = {
  ring: "環島",
  "non-ring": "非環島",
};

function getSummerRouteLabel(duration: string, route: string): string {
  const routeOption = getIcelandGroupSummerRouteOptions(duration).find(
    (option) => option.id === route,
  );
  return routeOption?.label ?? route;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { source, option, suboption, duration, route } = await params;
  const { locale, sourceLabels, optionLabels, localize } =
    await getLocalizedTripLabels();
  const path = `/trips/${source}/${option}/${suboption}/${duration}/${route}`;
  const packageTripKey = resolveRoutePagePackageTripKey(
    source,
    option,
    suboption,
    duration,
    route,
  );

  if (packageTripKey) {
    if (COMING_SOON_TRIPS.has(packageTripKey)) {
      return buildPageMetadata({
        title: localize("即將推出 | 帕芬假期"),
        description: localize("此行程即將推出，敬請期待。"),
        path,
        locale,
        noIndex: true,
      });
    }

    const packageMetadata = await buildTripPackageMetadata(packageTripKey);
    if (packageMetadata) {
      return packageMetadata;
    }
  }

  const routeLabel =
    option === "group" && suboption === "summer"
      ? getSummerRouteLabel(duration, route)
      : (WINTER_ROUTE_LABELS[route] ?? route);
  const durationLabel = `${duration}日`;
  const optionLabel = optionLabels[option];
  const suboptionLabel = optionLabels[suboption];

  return buildPageMetadata({
    title: `${durationLabel}${routeLabel}${suboptionLabel}${optionLabel} | 帕芬假期`,
    description: `${sourceLabels[source]} · ${optionLabel} · ${suboptionLabel} · ${durationLabel} · ${routeLabel}`,
    path,
    locale,
    noIndex: true,
  });
}

export default async function TripDurationRoutePage({ params }: PageProps) {
  const { source, option, suboption, duration, route } = await params;
  const { locale, sourceLabels, optionLabels } = await getLocalizedTripLabels();

  const seasonDayIds = ICELAND_TRIP_SEASON_DAY_IDS[option]?.[suboption];

  const isSummerGroupRoute =
    source === "iceland" &&
    option === "group" &&
    suboption === "summer" &&
    seasonDayIds?.has(duration) &&
    ICELAND_GROUP_SUMMER_ROUTE_PICKER_DAY_IDS.has(duration) &&
    ICELAND_GROUP_SUMMER_ROUTE_IDS.has(route);

  const isWinterRoutePickerDay =
    suboption === "winter" &&
    ((option === "self-drive" &&
      ICELAND_SELF_DRIVE_WINTER_ROUTE_PICKER_DAY_IDS.has(duration)) ||
      (option === "group" &&
        ICELAND_GROUP_WINTER_ROUTE_PICKER_DAY_IDS.has(duration)));

  if (isSummerGroupRoute) {
    const packageTripKey = resolveRoutePagePackageTripKey(
      source,
      option,
      suboption,
      duration,
      route,
    );
    if (!packageTripKey) {
      notFound();
    }

    const packageData = await getTripPackageWithPricingForRequest(packageTripKey);

    if (packageData) {
      return (
        <>
          <TripProductJsonLd
            package={packageData.package}
            pricingConfig={packageData.pricingConfig}
            locale={locale}
          />
          <TripPackagePage
            package={packageData.package}
            pricingConfig={packageData.pricingConfig}
          />
        </>
      );
    }

    const routeLabel = getSummerRouteLabel(duration, route);
    const sourceLabel = sourceLabels[source];
    const optionLabel = optionLabels[option];
    const suboptionLabel = optionLabels[suboption];
    const durationLabel = `${duration}日`;
    const isComingSoon = COMING_SOON_TRIPS.has(packageTripKey);

    const header = (
      <SiteHeader
        rightSlot={
          <Link
            href={`/trips/iceland/${option}/${suboption}`}
            className="glass-hero rounded-full px-5 py-2 text-xs font-medium text-hero-text/90 transition-all hover:bg-white/25"
          >
            返回 {suboptionLabel}
          </Link>
        }
      />
    );

    if (isComingSoon) {
      return (
        <HeroSection
          eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
          title="即將推出，敬請期待"
          align="center"
          highlightTitle
          priority={false}
          header={header}
        />
      );
    }

    notFound();
  }

  if (
    source !== "iceland" ||
    !seasonDayIds?.has(duration) ||
    !isWinterRoutePickerDay ||
    !ICELAND_WINTER_ROUTE_IDS.has(route)
  ) {
    notFound();
  }

  const routeLabel = WINTER_ROUTE_LABELS[route] ?? route;
  const sourceLabel = sourceLabels[source];
  const optionLabel = optionLabels[option];
  const suboptionLabel = optionLabels[suboption];
  const durationLabel = `${duration}日`;

  const packageTripKey = resolveRoutePagePackageTripKey(
    source,
    option,
    suboption,
    duration,
    route,
  );
  if (!packageTripKey) {
    notFound();
  }

  if (route === "ring" || route === "non-ring") {
    const packageData = await getTripPackageWithPricingForRequest(packageTripKey);

    if (packageData) {
      return (
        <>
          <TripProductJsonLd
            package={packageData.package}
            pricingConfig={packageData.pricingConfig}
            locale={locale}
          />
          <TripPackagePage
            package={packageData.package}
            pricingConfig={packageData.pricingConfig}
          />
        </>
      );
    }
  }

  const isComingSoon = COMING_SOON_TRIPS.has(packageTripKey);

  const header = (
    <SiteHeader
      rightSlot={
        <Link
          href={`/trips/iceland/${option}/${suboption}/${duration}`}
          className="glass-hero rounded-full px-5 py-2 text-xs font-medium text-hero-text/90 transition-all hover:bg-white/25"
        >
          返回 {durationLabel}
        </Link>
      }
    />
  );

  if (isComingSoon) {
    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title="即將推出，敬請期待"
        align="center"
        highlightTitle
        priority={false}
        header={header}
      />
    );
  }

  notFound();
}
