import Link from "next/link";
import { HeroSection } from "./HeroSection";
import { PillButton } from "./PillButton";
import { TransitionBar } from "./TransitionBar";
import { BottomPanel } from "./BottomPanel";
import type { TripOption } from "@/lib/trip-options";

type SelectionPageProps = {
  title: string;
  subtitle: string;
  eyebrow: string;
  tagline?: string;
  options: TripOption[];
  backHref: string;
  backLabel: string;
};

export function SelectionPage({
  title,
  subtitle,
  eyebrow,
  tagline,
  options,
  backHref,
  backLabel,
}: SelectionPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection
        title={title}
        subtitle={subtitle}
        eyebrow={eyebrow}
        tagline={tagline}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {options.map((option) => (
            <PillButton key={option.id} href={option.href}>
              {option.label}
            </PillButton>
          ))}
        </div>
      </HeroSection>

      <TransitionBar />

      <BottomPanel>
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground/50 transition-colors hover:text-foreground"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          返回 {backLabel}
        </Link>
      </BottomPanel>
    </div>
  );
}
