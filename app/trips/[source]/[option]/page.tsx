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
  ICELAND_GROUP_SEASON_OPTIONS,
  ICELAND_SELF_DRIVE_OPTIONS,
} from "@/lib/trip-options";

type PageProps = {
  params: Promise<{ source: string; option: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { source, option } = await params;
  const { locale, sourceLabels, optionLabels, localize } =
    await getLocalizedTripLabels();
  const sourceLabel = sourceLabels[source];
  const optionLabel = optionLabels[option];

  if (!sourceLabel || !optionLabel) {
    return buildPageMetadata({
      title: localize("找不到行程 | 帕芬假期"),
      description: localize("找不到您要的行程分類。"),
      noIndex: true,
      locale,
    });
  }

  return buildPageMetadata({
    title: `${sourceLabel} · ${optionLabel} | 帕芬假期`,
    description: localize(`選擇${sourceLabel}的${optionLabel}行程，規劃您的冰島之旅。`),
    path: `/trips/${source}/${option}`,
    locale,
    noIndex: COMING_SOON_TRIPS.has(`${source}/${option}`),
  });
}

export default async function TripsPage({ params }: PageProps) {
  const { source, option } = await params;
  const { locale, sourceLabels, optionLabels, localize, path } =
    await getLocalizedTripLabels();

  const sourceLabel = sourceLabels[source];
  const optionLabel = optionLabels[option];

  if (!sourceLabel || !optionLabel) {
    notFound();
  }

  const backHref = source === "taiwan" ? "/taiwan" : "/iceland";
  const backLabel = sourceLabel;
  const tripKey = `${source}/${option}`;

  const header = (
    <SiteHeader
      rightSlot={
        <LocaleLink
          href={path(backHref)}
          locale={locale}
          className="glass-hero rounded-full px-5 py-2 text-xs font-medium text-hero-text/90 transition-all hover:bg-white/25"
        >
          {localize("返回")} {backLabel}
        </LocaleLink>
      }
    />
  );

  const footer = (
    <TransitionBar
      tags={[`#${optionLabel}`, `#${sourceLabel}`, `#${localize("冰島之旅")}`]}
    />
  );

  if (source === "iceland" && option === "self-drive") {
    const seasonOptions = localizeTripOptions(ICELAND_SELF_DRIVE_OPTIONS, locale);

    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel}`}
        title={localize("冰島自駕")}
        subtitle={localize("選擇您想前往的季節，我們將為您規劃最適合的行程。")}
        tagline="CHOOSE YOUR SEASON FOR THE PERFECT SELF-DRIVE ADVENTURE."
        align="center"
        priority={false}
        footer={footer}
        header={header}
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          {seasonOptions.map((season) => (
            <PillButton key={season.id} href={season.href} variant="glass">
              {season.label}
            </PillButton>
          ))}
        </div>
      </HeroSection>
    );
  }

  if (source === "iceland" && option === "group") {
    const seasonOptions = localizeTripOptions(ICELAND_GROUP_SEASON_OPTIONS, locale);

    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel}`}
        title={localize("冰島跟團")}
        subtitle={localize("選擇您想前往的季節，我們將為您規劃最適合的行程。")}
        tagline="CHOOSE YOUR SEASON FOR THE PERFECT GROUP TOUR."
        align="center"
        priority={false}
        footer={footer}
        header={header}
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          {seasonOptions.map((season) => (
            <PillButton key={season.id} href={season.href} variant="glass">
              {season.label}
            </PillButton>
          ))}
        </div>
      </HeroSection>
    );
  }

  const isComingSoon = COMING_SOON_TRIPS.has(tripKey);

  if (isComingSoon) {
    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel}`}
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
      eyebrow={sourceLabel}
      title={localize(`${optionLabel}行程`)}
      subtitle={localize(`為您精選的 ${sourceLabel} · ${optionLabel} 行程`)}
      align="start"
      priority={false}
      footer={footer}
      header={header}
    />
  );
}
