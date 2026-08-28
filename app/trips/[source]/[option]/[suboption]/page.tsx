import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/HeroSection";
import { PillButton } from "@/components/PillButton";
import { SiteHeader } from "@/components/SiteHeader";
import { TransitionBar } from "@/components/TransitionBar";
import {
  COMING_SOON_TRIPS,
  ICELAND_GROUP_SUMMER_DAY_OPTIONS,
  ICELAND_GROUP_WINTER_DAY_OPTIONS,
  ICELAND_SELF_DRIVE_SUMMER_DAY_OPTIONS,
  ICELAND_SELF_DRIVE_WINTER_DAY_OPTIONS,
  OPTION_LABELS,
  SOURCE_LABELS,
} from "@/lib/trip-options";

type PageProps = {
  params: Promise<{ source: string; option: string; suboption: string }>;
};

const ICELAND_SEASON_TRIP_OPTIONS = new Set(["self-drive", "group"]);
const SEASON_IDS = new Set(["summer", "winter"]);

export default async function TripSuboptionPage({ params }: PageProps) {
  const { source, option, suboption } = await params;

  if (
    source !== "iceland" ||
    !ICELAND_SEASON_TRIP_OPTIONS.has(option) ||
    !SEASON_IDS.has(suboption)
  ) {
    notFound();
  }

  const sourceLabel = SOURCE_LABELS[source];
  const optionLabel = OPTION_LABELS[option];
  const suboptionLabel = OPTION_LABELS[suboption];

  if (!sourceLabel || !optionLabel || !suboptionLabel) {
    notFound();
  }

  const header = (
    <SiteHeader
      rightSlot={
        <Link
          href={`/trips/iceland/${option}`}
          className="glass-hero rounded-full px-5 py-2 text-xs font-medium text-hero-text/90 transition-all hover:bg-white/25"
        >
          返回 {optionLabel}
        </Link>
      }
    />
  );

  const footer = (
    <TransitionBar
      tags={[`#${suboptionLabel}`, `#${optionLabel}`, "#冰島之旅"]}
    />
  );

  if (option === "self-drive" && suboption === "summer") {
    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title="夏季自駕"
        subtitle="選擇您的行程天數，我們將為您規劃最適合的路線。"
        tagline="PICK YOUR IDEAL SUMMER SELF-DRIVE DURATION."
        align="center"
        priority={false}
        footer={footer}
        header={header}
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {ICELAND_SELF_DRIVE_SUMMER_DAY_OPTIONS.map((dayOption) => (
            <PillButton key={dayOption.id} href={dayOption.href} variant="glass">
              {dayOption.label}
            </PillButton>
          ))}
        </div>
      </HeroSection>
    );
  }

  if (option === "group" && suboption === "summer") {
    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title="夏季跟團"
        subtitle="選擇您的行程天數，我們將為您規劃最適合的路線。"
        tagline="PICK YOUR IDEAL SUMMER GROUP TOUR DURATION."
        align="center"
        priority={false}
        footer={footer}
        header={header}
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {ICELAND_GROUP_SUMMER_DAY_OPTIONS.map((dayOption) => (
            <PillButton key={dayOption.id} href={dayOption.href} variant="glass">
              {dayOption.label}
            </PillButton>
          ))}
        </div>
      </HeroSection>
    );
  }

  if (option === "group" && suboption === "winter") {
    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title="冬季跟團"
        subtitle="選擇您的行程天數，我們將為您規劃最適合的路線。"
        tagline="PICK YOUR IDEAL WINTER GROUP TOUR DURATION."
        align="center"
        priority={false}
        footer={footer}
        header={header}
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {ICELAND_GROUP_WINTER_DAY_OPTIONS.map((dayOption) => (
            <PillButton key={dayOption.id} href={dayOption.href} variant="glass">
              {dayOption.label}
            </PillButton>
          ))}
        </div>
      </HeroSection>
    );
  }

  if (option === "self-drive" && suboption === "winter") {
    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel} · ${suboptionLabel}`}
        title="冬季自駕"
        subtitle="選擇您的行程天數，我們將為您規劃最適合的路線。"
        tagline="PICK YOUR IDEAL WINTER SELF-DRIVE DURATION."
        align="center"
        priority={false}
        footer={footer}
        header={header}
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {ICELAND_SELF_DRIVE_WINTER_DAY_OPTIONS.map((dayOption) => (
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
      eyebrow={`${sourceLabel} · ${optionLabel}`}
      title={`${suboptionLabel}行程`}
      subtitle={`為您精選的 ${sourceLabel} · ${optionLabel} · ${suboptionLabel} 行程`}
      align="start"
      priority={false}
      footer={footer}
      header={header}
    />
  );
}
