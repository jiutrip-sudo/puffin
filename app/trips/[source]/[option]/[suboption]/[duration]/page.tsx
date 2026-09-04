import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TripPackagePage } from "@/components/trip-package/TripPackagePage";
import { TripProductJsonLd } from "@/components/seo/SiteJsonLd";
import { HeroSection } from "@/components/HeroSection";
import { SiteHeader } from "@/components/SiteHeader";
import { LocaleLink } from "@/components/LocaleLink";
import { getTripPackageWithPricingForRequest } from "@/lib/trip-packages/get-package-with-pricing";
import { buildTripPackageMetadata, getLocalizedTripLabels } from "@/lib/i18n/trip-metadata";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  COMING_SOON_TRIPS,
  ICELAND_GROUP_SUMMER_ROUTE_PICKER_DAY_IDS,
  ICELAND_GROUP_WINTER_ROUTE_PICKER_DAY_IDS,
  ICELAND_SELF_DRIVE_WINTER_ROUTE_PICKER_DAY_IDS,
  ICELAND_TRIP_SEASON_DAY_IDS,
  isTripRoutePickerPage,
} from "@/lib/trip-options";
import { SummerGroupRoutePicker } from "@/components/SummerGroupRoutePicker";
import { WinterRoutePicker } from "@/components/WinterRoutePicker";
import { getAllTripProductStaticParams } from "@/lib/seo/trip-static-params";

export const revalidate = 86_400;

export async function generateStaticParams() {
  return getAllTripProductStaticParams()
    .filter((params) => !params.route)
    .map(({ source, option, suboption, duration }) => ({
      source,
      option,
      suboption,
      duration,
    }));
}

type PageProps = {
  params: Promise<{
    source: string;
    option: string;
    suboption: string;
    duration: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { source, option, suboption, duration } = await params;
  const { locale, sourceLabels, optionLabels, localize } =
    await getLocalizedTripLabels();
  const tripKey = `${source}/${option}/${suboption}/${duration}`;
  const durationLabel = `${duration}日`;
  const optionLabel = optionLabels[option];
  const suboptionLabel = optionLabels[suboption];
  const path = `/trips/${tripKey}`;

  if (isTripRoutePickerPage(option, suboption, duration)) {
    let title = `${durationLabel}${optionLabel}行程 | 帕芬假期`;
    let description = `${sourceLabels[source]} · ${optionLabel} · ${suboptionLabel} · ${durationLabel}`;

    if (option === "self-drive" && suboption === "winter") {
      title = `${durationLabel}冬季自駕 — 選擇路線 | 帕芬假期`;
      description = localize(
        `選擇環島或非環島路線，規劃您的${durationLabel}冰島冬季自駕行程。`,
      );
    } else if (option === "group" && suboption === "summer") {
      title = `${durationLabel}夏季跟團 — 選擇路線 | 帕芬假期`;
      description = localize(
        `選擇路線變體，規劃您的${durationLabel}冰島夏季跟團行程。`,
      );
    } else if (option === "group" && suboption === "winter") {
      title = `${durationLabel}冬季跟團 — 選擇路線 | 帕芬假期`;
      description = localize(
        `選擇環島或非環島路線，規劃您的${durationLabel}冰島冬季跟團行程。`,
      );
    }

    return buildPageMetadata({
      title: localize(title),
      description,
      path,
      locale,
      noIndex: true,
    });
  }

  if (COMING_SOON_TRIPS.has(tripKey)) {
    return buildPageMetadata({
      title: localize("即將推出 | 帕芬假期"),
      description: localize("此行程即將推出，敬請期待。"),
      path,
      locale,
      noIndex: true,
    });
  }

  const packageMetadata = await buildTripPackageMetadata(tripKey);
  if (packageMetadata) {
    return packageMetadata;
  }

  return buildPageMetadata({
    title: `${durationLabel}${optionLabel}行程 | 帕芬假期`,
    description: `${sourceLabels[source]} · ${optionLabel} · ${suboptionLabel} · ${durationLabel}`,
    path,
    locale,
  });
}

export default async function TripDurationPage({ params }: PageProps) {
  const { source, option, suboption, duration } = await params;
  const { sourceLabels, optionLabels, localize, path, locale } =
    await getLocalizedTripLabels();

  const seasonDayIds = ICELAND_TRIP_SEASON_DAY_IDS[option]?.[suboption];

  if (source !== "iceland" || !seasonDayIds?.has(duration)) {
    notFound();
  }

  const tripKey = `${source}/${option}/${suboption}/${duration}`;

  if (
    option === "self-drive" &&
    suboption === "winter" &&
    ICELAND_SELF_DRIVE_WINTER_ROUTE_PICKER_DAY_IDS.has(duration)
  ) {
    const sourceLabel = sourceLabels[source];
    const optionLabel = optionLabels[option];
    const suboptionLabel = optionLabels[suboption];
    const durationLabel = `${duration}日`;

    const header = (
      <SiteHeader
        rightSlot={
          <LocaleLink
            href={path(`/trips/iceland/${option}/${suboption}`)}
            locale={locale}
            className="glass-hero rounded-full px-5 py-2 text-xs font-medium text-hero-text/90 transition-all hover:bg-white/25"
          >
            {localize("返回")} {suboptionLabel}
          </LocaleLink>
        }
      />
    );

    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title={localize(`${durationLabel}冬季自駕`)}
        subtitle={localize("選擇環島或非環島路線，我們將為您規劃最適合的行程。")}
        tagline={`CHOOSE RING ROAD OR NON-RING ROUTE FOR YOUR ${duration}-DAY TRIP.`}
        align="center"
        priority={false}
        header={header}
      >
        <WinterRoutePicker duration={duration} variant="self-drive" />
      </HeroSection>
    );
  }

  if (
    option === "group" &&
    suboption === "summer" &&
    ICELAND_GROUP_SUMMER_ROUTE_PICKER_DAY_IDS.has(duration)
  ) {
    const sourceLabel = sourceLabels[source];
    const optionLabel = optionLabels[option];
    const suboptionLabel = optionLabels[suboption];
    const durationLabel = `${duration}日`;

    const header = (
      <SiteHeader
        rightSlot={
          <LocaleLink
            href={path(`/trips/iceland/${option}/${suboption}`)}
            locale={locale}
            className="glass-hero rounded-full px-5 py-2 text-xs font-medium text-hero-text/90 transition-all hover:bg-white/25"
          >
            {localize("返回")} {suboptionLabel}
          </LocaleLink>
        }
      />
    );

    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title={localize(`${durationLabel}夏季跟團`)}
        subtitle={localize("選擇您的路線變體，我們將為您規劃最適合的行程。")}
        tagline={`CHOOSE YOUR ROUTE VARIANT FOR YOUR ${duration}-DAY SUMMER GROUP TOUR.`}
        align="center"
        priority={false}
        header={header}
      >
        <SummerGroupRoutePicker duration={duration} />
      </HeroSection>
    );
  }

  if (
    option === "group" &&
    suboption === "winter" &&
    ICELAND_GROUP_WINTER_ROUTE_PICKER_DAY_IDS.has(duration)
  ) {
    const sourceLabel = sourceLabels[source];
    const optionLabel = optionLabels[option];
    const suboptionLabel = optionLabels[suboption];
    const durationLabel = `${duration}日`;

    const header = (
      <SiteHeader
        rightSlot={
          <LocaleLink
            href={path(`/trips/iceland/${option}/${suboption}`)}
            locale={locale}
            className="glass-hero rounded-full px-5 py-2 text-xs font-medium text-hero-text/90 transition-all hover:bg-white/25"
          >
            {localize("返回")} {suboptionLabel}
          </LocaleLink>
        }
      />
    );

    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title={localize(`${durationLabel}冬季跟團`)}
        subtitle={localize("選擇環島或非環島路線，我們將為您規劃最適合的行程。")}
        tagline={`CHOOSE RING ROAD OR NON-RING ROUTE FOR YOUR ${duration}-DAY GROUP TOUR.`}
        align="center"
        priority={false}
        header={header}
      >
        <WinterRoutePicker duration={duration} variant="group" />
      </HeroSection>
    );
  }

  const packageData = await getTripPackageWithPricingForRequest(tripKey);

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

  const sourceLabel = sourceLabels[source];
  const optionLabel = optionLabels[option];
  const suboptionLabel = optionLabels[suboption];
  const durationLabel = `${duration}日`;
  const isComingSoon = COMING_SOON_TRIPS.has(tripKey);

  const header = (
    <SiteHeader
      rightSlot={
        <LocaleLink
          href={path(`/trips/iceland/${option}/${suboption}`)}
          locale={locale}
          className="glass-hero rounded-full px-5 py-2 text-xs font-medium text-hero-text/90 transition-all hover:bg-white/25"
        >
          {localize("返回")} {suboptionLabel}
        </LocaleLink>
      }
    />
  );

  if (isComingSoon) {
    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title={localize("即將推出，敬請期待")}
        align="center"
        highlightTitle
        priority={false}
        header={header}
      />
    );
  }

  return (
    <HeroSection
      eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
      title={localize(`${durationLabel}行程`)}
      subtitle={localize(
        `為您精選的 ${sourceLabel} · ${optionLabel} · ${suboptionLabel} · ${durationLabel} 行程`,
      )}
      align="start"
      priority={false}
      header={header}
    />
  );
}
