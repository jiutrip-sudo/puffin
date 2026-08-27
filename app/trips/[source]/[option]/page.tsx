import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/HeroSection";
import { TransitionBar } from "@/components/TransitionBar";
import { OPTION_LABELS, SOURCE_LABELS } from "@/lib/trip-options";

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

  return (
    <HeroSection
      eyebrow={sourceLabel}
      title={`${optionLabel}行程`}
      subtitle={`為您精選的 ${sourceLabel} · ${optionLabel} 行程`}
      align="start"
      priority={false}
      footer={
        <TransitionBar
          tags={[`#${optionLabel}`, `#${sourceLabel}`, "#冰島之旅"]}
        />
      }
      header={
        <header className="absolute top-0 left-0 right-0 z-30 px-6 py-5 md:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link
              href="/"
              className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/25"
            >
              Puffin Iceland
            </Link>
            <Link
              href={backHref}
              className="glass rounded-full px-5 py-2 text-xs font-medium text-white/80 transition-all hover:bg-white/25"
            >
              返回 {backLabel}
            </Link>
          </div>
        </header>
      }
    />
  );
}
