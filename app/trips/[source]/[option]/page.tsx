import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/HeroSection";
import { SiteHeader } from "@/components/SiteHeader";
import { TransitionBar } from "@/components/TransitionBar";
import {
  COMING_SOON_TRIPS,
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
  const isComingSoon = COMING_SOON_TRIPS.has(tripKey);

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
