import { HeroSection } from "./HeroSection";
import { PillButton } from "./PillButton";
import { TransitionBar } from "./TransitionBar";
import type { TripOption } from "@/lib/trip-options";

type SelectionPageProps = {
  title: string;
  subtitle: string;
  eyebrow: string;
  tagline?: string;
  options: TripOption[];
};

export function SelectionPage({
  title,
  subtitle,
  eyebrow,
  tagline,
  options,
}: SelectionPageProps) {
  return (
    <HeroSection
      title={title}
      subtitle={subtitle}
      eyebrow={eyebrow}
      tagline={tagline}
      footer={<TransitionBar />}
    >
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
        {options.map((option) => (
          <PillButton key={option.id} href={option.href} variant="glass">
            {option.label}
          </PillButton>
        ))}
      </div>
    </HeroSection>
  );
}
