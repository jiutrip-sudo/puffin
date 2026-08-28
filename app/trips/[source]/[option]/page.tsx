import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/HeroSection";
import { PillButton } from "@/components/PillButton";
import { SiteHeader } from "@/components/SiteHeader";
import { TransitionBar } from "@/components/TransitionBar";
import {
  COMING_SOON_TRIPS,
  ICELAND_GROUP_SEASON_OPTIONS,
  ICELAND_SELF_DRIVE_OPTIONS,
  OPTION_LABELS,
  SOURCE_LABELS,
} from "@/lib/trip-options";

type PageProps = {
  params: Promise<{ source: string; option: string }>;
};

export default async function TripsPage({ params }: PageProps) {
  const { source, option } = await params;

  const sourceLabel = SOURCE_LABELS[source];
  const optionLabel = OPTION_LABELS[option];

  if (!sourceLabel || !optionLabel) {
    notFound();
  }

  const backHref = source === "taiwan" ? "/taiwan" : "/iceland";
  const backLabel = sourceLabel;
  const tripKey = `${source}/${option}`;

  const header = (
    <SiteHeader
      rightSlot={
        <Link
          href={backHref}
          className="glass-hero rounded-full px-5 py-2 text-xs font-medium text-hero-text/90 transition-all hover:bg-white/25"
        >
          返回 {backLabel}
        </Link>
      }
    />
  );

  const footer = (
    <TransitionBar
      tags={[`#${optionLabel}`, `#${sourceLabel}`, "#冰島之旅"]}
    />
  );

  if (source === "iceland" && option === "self-drive") {
    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel}`}
        title="冰島自駕"
        subtitle="選擇您想前往的季節，我們將為您規劃最適合的行程。"
        tagline="CHOOSE YOUR SEASON FOR THE PERFECT SELF-DRIVE ADVENTURE."
        align="center"
        priority={false}
        footer={footer}
        header={header}
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          {ICELAND_SELF_DRIVE_OPTIONS.map((season) => (
            <PillButton key={season.id} href={season.href} variant="glass">
              {season.label}
            </PillButton>
          ))}
        </div>
      </HeroSection>
    );
  }

  if (source === "iceland" && option === "group") {
    return (
      <HeroSection
        eyebrow={`${sourceLabel} · ${optionLabel}`}
        title="冰島跟團"
        subtitle="選擇您想前往的季節，我們將為您規劃最適合的行程。"
        tagline="CHOOSE YOUR SEASON FOR THE PERFECT GROUP TOUR."
        align="center"
        priority={false}
        footer={footer}
        header={header}
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          {ICELAND_GROUP_SEASON_OPTIONS.map((season) => (
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
      eyebrow={sourceLabel}
      title={`${optionLabel}行程`}
      subtitle={`為您精選的 ${sourceLabel} · ${optionLabel} 行程`}
      align="start"
      priority={false}
      footer={footer}
      header={header}
    />
  );
}
