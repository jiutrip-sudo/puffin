import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TripPackagePage } from "@/components/trip-package/TripPackagePage";
import { TripProductJsonLd } from "@/components/seo/SiteJsonLd";
import { HeroSection } from "@/components/HeroSection";
import { SiteHeader } from "@/components/SiteHeader";
import { TransitionBar } from "@/components/TransitionBar";
import { getTripPackageWithPricing } from "@/lib/trip-packages/get-package-with-pricing";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { absoluteUrl } from "@/lib/site-url";
import {
  COMING_SOON_TRIPS,
  getIcelandGroupSummerPackageTripKey,
  getIcelandGroupSummerRouteOptions,
  ICELAND_GROUP_SUMMER_ROUTE_IDS,
  ICELAND_GROUP_SUMMER_ROUTE_PICKER_DAY_IDS,
  ICELAND_GROUP_WINTER_ROUTE_PICKER_DAY_IDS,
  ICELAND_SELF_DRIVE_WINTER_ROUTE_PICKER_DAY_IDS,
  ICELAND_TRIP_SEASON_DAY_IDS,
  ICELAND_WINTER_ROUTE_IDS,
  OPTION_LABELS,
  SOURCE_LABELS,
} from "@/lib/trip-options";

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

  if (
    option === "group" &&
    suboption === "summer" &&
    ICELAND_GROUP_SUMMER_ROUTE_PICKER_DAY_IDS.has(duration) &&
    ICELAND_GROUP_SUMMER_ROUTE_IDS.has(route)
  ) {
    const packageTripKey = getIcelandGroupSummerPackageTripKey(duration, route);
    const data = getTripPackageWithPricing(packageTripKey);

    if (data) {
      return buildPageMetadata({
        title: `${data.package.title} | 大樂旅行社`,
        description: data.package.intro.summary,
        path: `/trips/${source}/${option}/${suboption}/${duration}/${route}`,
        ogImage: data.package.heroImage.startsWith("http")
          ? data.package.heroImage
          : absoluteUrl(data.package.heroImage),
      });
    }

    const routeLabel = getSummerRouteLabel(duration, route);
    const durationLabel = `${duration}日`;
    const optionLabel = OPTION_LABELS[option];
    const suboptionLabel = OPTION_LABELS[suboption];

    return buildPageMetadata({
      title: `${durationLabel}${routeLabel}夏季${optionLabel} | 大樂旅行社`,
      description: `${SOURCE_LABELS[source]} · ${optionLabel} · ${suboptionLabel} · ${durationLabel} · ${routeLabel}`,
      path: `/trips/${source}/${option}/${suboption}/${duration}/${route}`,
    });
  }

  const routeLabel = WINTER_ROUTE_LABELS[route] ?? route;
  const durationLabel = `${duration}日`;
  const optionLabel = OPTION_LABELS[option];
  const suboptionLabel = OPTION_LABELS[suboption];

  if (route === "ring") {
    const tripKey = `${source}/${option}/${suboption}/${duration}`;
    const data = getTripPackageWithPricing(tripKey);

    if (data) {
      return buildPageMetadata({
        title: `${data.package.title} | 大樂旅行社`,
        description: data.package.intro.summary,
        path: `/trips/${source}/${option}/${suboption}/${duration}/${route}`,
        ogImage: data.package.heroImage.startsWith("http")
          ? data.package.heroImage
          : absoluteUrl(data.package.heroImage),
      });
    }
  }

  if (route === "non-ring") {
    const tripKey = `${source}/${option}/${suboption}/${duration}/non-ring`;
    const data = getTripPackageWithPricing(tripKey);

    if (data) {
      return buildPageMetadata({
        title: `${data.package.title} | 大樂旅行社`,
        description: data.package.intro.summary,
        path: `/trips/${source}/${option}/${suboption}/${duration}/${route}`,
        ogImage: data.package.heroImage.startsWith("http")
          ? data.package.heroImage
          : absoluteUrl(data.package.heroImage),
      });
    }
  }

  return buildPageMetadata({
    title: `${durationLabel}${routeLabel}冬季${optionLabel} | 大樂旅行社`,
    description: `${SOURCE_LABELS[source]} · ${optionLabel} · ${suboptionLabel} · ${durationLabel} · ${routeLabel}`,
    path: `/trips/${source}/${option}/${suboption}/${duration}/${route}`,
  });
}

export default async function TripDurationRoutePage({ params }: PageProps) {
  const { source, option, suboption, duration, route } = await params;

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
    const packageTripKey = getIcelandGroupSummerPackageTripKey(duration, route);
    const packageData = getTripPackageWithPricing(packageTripKey);

    if (packageData) {
      return (
        <>
          <TripProductJsonLd
            package={packageData.package}
            pricingConfig={packageData.pricingConfig}
          />
          <TripPackagePage
            package={packageData.package}
            pricingConfig={packageData.pricingConfig}
          />
        </>
      );
    }

    const routeLabel = getSummerRouteLabel(duration, route);
    const sourceLabel = SOURCE_LABELS[source];
    const optionLabel = OPTION_LABELS[option];
    const suboptionLabel = OPTION_LABELS[suboption];
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

    const footer = (
      <TransitionBar
        tags={[`#${routeLabel}`, `#${durationLabel}`, "#冰島之旅"]}
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
          footer={footer}
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

  const tripKey = `${source}/${option}/${suboption}/${duration}`;
  const routeLabel = WINTER_ROUTE_LABELS[route] ?? route;
  const sourceLabel = SOURCE_LABELS[source];
  const optionLabel = OPTION_LABELS[option];
  const suboptionLabel = OPTION_LABELS[suboption];
  const durationLabel = `${duration}日`;

  const packageTripKey =
    route === "ring" ? tripKey : `${tripKey}/${route}`;

  if (route === "ring" || route === "non-ring") {
    const packageData = getTripPackageWithPricing(packageTripKey);

    if (packageData) {
      return (
        <>
          <TripProductJsonLd
            package={packageData.package}
            pricingConfig={packageData.pricingConfig}
          />
          <TripPackagePage
            package={packageData.package}
            pricingConfig={packageData.pricingConfig}
          />
        </>
      );
    }
  }

  const routeTripKey = packageTripKey;
  const isComingSoon = COMING_SOON_TRIPS.has(routeTripKey);

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

  const footer = (
    <TransitionBar
      tags={[`#${routeLabel}`, `#${durationLabel}`, "#冰島之旅"]}
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
        footer={footer}
        header={header}
      />
    );
  }

  notFound();
}
