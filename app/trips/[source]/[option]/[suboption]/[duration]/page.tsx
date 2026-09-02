import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TripPackagePage } from "@/components/trip-package/TripPackagePage";
import { TripProductJsonLd } from "@/components/seo/SiteJsonLd";
import { HeroSection } from "@/components/HeroSection";
import { SiteHeader } from "@/components/SiteHeader";
import { TransitionBar } from "@/components/TransitionBar";
import Link from "next/link";
import { getTripPackageWithPricing } from "@/lib/trip-packages/get-package-with-pricing";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { absoluteUrl } from "@/lib/site-url";
import {
  COMING_SOON_TRIPS,
  ICELAND_GROUP_SUMMER_ROUTE_PICKER_DAY_IDS,
  ICELAND_GROUP_WINTER_ROUTE_PICKER_DAY_IDS,
  ICELAND_SELF_DRIVE_WINTER_ROUTE_PICKER_DAY_IDS,
  ICELAND_TRIP_SEASON_DAY_IDS,
  OPTION_LABELS,
  SOURCE_LABELS,
} from "@/lib/trip-options";
import { SummerGroupRoutePicker } from "@/components/SummerGroupRoutePicker";
import { WinterRoutePicker } from "@/components/WinterRoutePicker";

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
  const tripKey = `${source}/${option}/${suboption}/${duration}`;
  const data = getTripPackageWithPricing(tripKey);

  if (data) {
    return buildPageMetadata({
      title: `${data.package.title} | 大樂旅行社`,
      description: data.package.intro.summary,
      path: `/trips/${tripKey}`,
      ogImage: data.package.heroImage.startsWith("http")
        ? data.package.heroImage
        : absoluteUrl(data.package.heroImage),
    });
  }

  const durationLabel = `${duration}日`;
  const optionLabel = OPTION_LABELS[option];
  const suboptionLabel = OPTION_LABELS[suboption];

  return {
    title: `${durationLabel}${optionLabel}行程 | 大樂旅行社`,
    description: `${SOURCE_LABELS[source]} · ${optionLabel} · ${suboptionLabel} · ${durationLabel}`,
  };
}

export default async function TripDurationPage({ params }: PageProps) {
  const { source, option, suboption, duration } = await params;

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
    const sourceLabel = SOURCE_LABELS[source];
    const optionLabel = OPTION_LABELS[option];
    const suboptionLabel = OPTION_LABELS[suboption];
    const durationLabel = `${duration}日`;

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
        tags={[`#${durationLabel}`, `#${suboptionLabel}`, "#冰島之旅"]}
      />
    );

    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title={`${durationLabel}冬季自駕`}
        subtitle="選擇環島或非環島路線，我們將為您規劃最適合的行程。"
        tagline={`CHOOSE RING ROAD OR NON-RING ROUTE FOR YOUR ${duration}-DAY TRIP.`}
        align="center"
        priority={false}
        footer={footer}
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
    const sourceLabel = SOURCE_LABELS[source];
    const optionLabel = OPTION_LABELS[option];
    const suboptionLabel = OPTION_LABELS[suboption];
    const durationLabel = `${duration}日`;

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
        tags={[`#${durationLabel}`, `#${suboptionLabel}`, "#冰島之旅"]}
      />
    );

    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title={`${durationLabel}夏季跟團`}
        subtitle="選擇您的路線變體，我們將為您規劃最適合的行程。"
        tagline={`CHOOSE YOUR ROUTE VARIANT FOR YOUR ${duration}-DAY SUMMER GROUP TOUR.`}
        align="center"
        priority={false}
        footer={footer}
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
    const sourceLabel = SOURCE_LABELS[source];
    const optionLabel = OPTION_LABELS[option];
    const suboptionLabel = OPTION_LABELS[suboption];
    const durationLabel = `${duration}日`;

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
        tags={[`#${durationLabel}`, `#${suboptionLabel}`, "#冰島之旅"]}
      />
    );

    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title={`${durationLabel}冬季跟團`}
        subtitle="選擇環島或非環島路線，我們將為您規劃最適合的行程。"
        tagline={`CHOOSE RING ROAD OR NON-RING ROUTE FOR YOUR ${duration}-DAY GROUP TOUR.`}
        align="center"
        priority={false}
        footer={footer}
        header={header}
      >
        <WinterRoutePicker duration={duration} variant="group" />
      </HeroSection>
    );
  }

  const packageData = getTripPackageWithPricing(tripKey);

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

  const sourceLabel = SOURCE_LABELS[source];
  const optionLabel = OPTION_LABELS[option];
  const suboptionLabel = OPTION_LABELS[suboption];
  const durationLabel = `${duration}日`;
  const isComingSoon = COMING_SOON_TRIPS.has(tripKey);

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
      tags={[`#${durationLabel}`, `#${suboptionLabel}`, "#冰島之旅"]}
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

  return (
    <HeroSection
      eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
      title={`${durationLabel}行程`}
      subtitle={`為您精選的 ${sourceLabel} · ${optionLabel} · ${suboptionLabel} · ${durationLabel} 行程`}
      align="start"
      priority={false}
      footer={footer}
      header={header}
    />
  );
}
