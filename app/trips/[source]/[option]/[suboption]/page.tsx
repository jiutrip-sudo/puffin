import { notFound } from "next/navigation";
import { HeroSection } from "@/components/HeroSection";
import { PillButton } from "@/components/PillButton";
import { SiteHeader } from "@/components/SiteHeader";
import { TransitionBar } from "@/components/TransitionBar";
import { LocaleLink } from "@/components/LocaleLink";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getLocalizedTripLabels } from "@/lib/i18n/trip-metadata";
import { localizeTripOptions } from "@/lib/i18n/trip-options";
import {
  COMING_SOON_TRIPS,
  ICELAND_GROUP_SUMMER_DAY_OPTIONS,
  ICELAND_GROUP_WINTER_DAY_OPTIONS,
  ICELAND_SELF_DRIVE_SUMMER_DAY_OPTIONS,
  ICELAND_SELF_DRIVE_WINTER_DAY_OPTIONS,
} from "@/lib/trip-options";

type PageProps = {
  params: Promise<{ source: string; option: string; suboption: string }>;
};

const ICELAND_SEASON_TRIP_OPTIONS = new Set(["self-drive", "group"]);
const SEASON_IDS = new Set(["summer", "winter"]);

export async function generateMetadata({ params }: PageProps) {
  const { source, option, suboption } = await params;
  const { locale, sourceLabels, optionLabels, localize } =
    await getLocalizedTripLabels();

  if (
    source !== "iceland" ||
    !ICELAND_SEASON_TRIP_OPTIONS.has(option) ||
    !SEASON_IDS.has(suboption)
  ) {
    return buildPageMetadata({
      title: localize("找不到行程 | 大樂旅行社"),
      description: localize("找不到您要的行程分類。"),
      noIndex: true,
      locale,
    });
  }

  const sourceLabel = sourceLabels[source];
  const optionLabel = optionLabels[option];
  const suboptionLabel = optionLabels[suboption];

  if (!sourceLabel || !optionLabel || !suboptionLabel) {
    return buildPageMetadata({
      title: localize("找不到行程 | 大樂旅行社"),
      description: localize("找不到您要的行程分類。"),
      noIndex: true,
      locale,
    });
  }

  return buildPageMetadata({
    title: `${sourceLabel} · ${optionLabel} · ${suboptionLabel} | 大樂旅行社`,
    description: localize(
      `選擇${suboptionLabel}${optionLabel}的天數與路線，規劃冰島之旅。`,
    ),
    path: `/trips/${source}/${option}/${suboption}`,
    locale,
  });
}

export default async function TripSuboptionPage({ params }: PageProps) {
  const { source, option, suboption } = await params;
  const { locale, sourceLabels, optionLabels, localize, path } =
    await getLocalizedTripLabels();

  if (
    source !== "iceland" ||
    !ICELAND_SEASON_TRIP_OPTIONS.has(option) ||
    !SEASON_IDS.has(suboption)
  ) {
    notFound();
  }

  const sourceLabel = sourceLabels[source];
  const optionLabel = optionLabels[option];
  const suboptionLabel = optionLabels[suboption];

  if (!sourceLabel || !optionLabel || !suboptionLabel) {
    notFound();
  }

  const header = (
    <SiteHeader
      rightSlot={
        <LocaleLink
          href={path(`/trips/iceland/${option}`)}
          locale={locale}
          className="glass-hero rounded-full px-5 py-2 text-xs font-medium text-hero-text/90 transition-all hover:bg-white/25"
        >
          {localize("返回")} {optionLabel}
        </LocaleLink>
      }
    />
  );

  const footer = (
    <TransitionBar
      tags={[
        `#${suboptionLabel}`,
        `#${optionLabel}`,
        `#${localize("冰島之旅")}`,
      ]}
    />
  );

  const daySubtitle = localize("選擇您的行程天數，我們將為您規劃最適合的路線。");

  if (option === "self-drive" && suboption === "summer") {
    const dayOptions = localizeTripOptions(
      ICELAND_SELF_DRIVE_SUMMER_DAY_OPTIONS,
      locale,
    );

    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title={localize("夏季自駕")}
        subtitle={daySubtitle}
        tagline="PICK YOUR IDEAL SUMMER SELF-DRIVE DURATION."
        align="center"
        priority={false}
        footer={footer}
        header={header}
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {dayOptions.map((dayOption) => (
            <PillButton key={dayOption.id} href={dayOption.href} variant="glass">
              {dayOption.label}
            </PillButton>
          ))}
        </div>
      </HeroSection>
    );
  }

  if (option === "group" && suboption === "summer") {
    const dayOptions = localizeTripOptions(
      ICELAND_GROUP_SUMMER_DAY_OPTIONS,
      locale,
    );

    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title={localize("夏季跟團")}
        subtitle={daySubtitle}
        tagline="PICK YOUR IDEAL SUMMER GROUP TOUR DURATION."
        align="center"
        priority={false}
        footer={footer}
        header={header}
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {dayOptions.map((dayOption) => (
            <PillButton key={dayOption.id} href={dayOption.href} variant="glass">
              {dayOption.label}
            </PillButton>
          ))}
        </div>
      </HeroSection>
    );
  }

  if (option === "group" && suboption === "winter") {
    const dayOptions = localizeTripOptions(
      ICELAND_GROUP_WINTER_DAY_OPTIONS,
      locale,
    );

    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title={localize("冬季跟團")}
        subtitle={daySubtitle}
        tagline="PICK YOUR IDEAL WINTER GROUP TOUR DURATION."
        align="center"
        priority={false}
        footer={footer}
        header={header}
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {dayOptions.map((dayOption) => (
            <PillButton key={dayOption.id} href={dayOption.href} variant="glass">
              {dayOption.label}
            </PillButton>
          ))}
        </div>
      </HeroSection>
    );
  }

  if (option === "self-drive" && suboption === "winter") {
    const dayOptions = localizeTripOptions(
      ICELAND_SELF_DRIVE_WINTER_DAY_OPTIONS,
      locale,
    );

    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title={localize("冬季自駕")}
        subtitle={daySubtitle}
        tagline="PICK YOUR IDEAL WINTER SELF-DRIVE DURATION."
        align="center"
        priority={false}
        footer={footer}
        header={header}
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {dayOptions.map((dayOption) => (
            <PillButton key={dayOption.id} href={dayOption.href} variant="glass">
              {dayOption.label}
            </PillButton>
          ))}
        </div>
      </HeroSection>
    );
  }

  const tripKey = `${source}/${option}/${suboption}`;
  const isComingSoon = COMING_SOON_TRIPS.has(tripKey);

  if (isComingSoon) {
    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title={localize("即將推出，敬請期待")}
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
      eyebrow={`${sourceLabel} · ${optionLabel}`}
      title={localize(`${suboptionLabel}行程`)}
      subtitle={localize(
        `為您精選的 ${sourceLabel} · ${optionLabel} · ${suboptionLabel} 行程`,
      )}
      align="start"
      priority={false}
      footer={footer}
      header={header}
    />
  );
}
