import { HeroSection } from "./HeroSection";
import { PillButton } from "./PillButton";
import type { TripOption } from "@/lib/trip-options";

type SelectionPageProps = {
  title: string;
  subtitle: string;
  eyebrow: string;
  tagline?: string;
  options: TripOption[];
  belowOptions?: React.ReactNode;
};

export function SelectionPage({
  title,
  subtitle,
  eyebrow,
  tagline,
  options,
  belowOptions,
}: SelectionPageProps) {
  return (
    <HeroSection
      title={title}
      subtitle={subtitle}
      eyebrow={eyebrow}
      tagline={tagline}
    >
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
        {options.map((option) => (
          <PillButton key={option.id} href={option.href} variant="glass">
            {option.label}
          </PillButton>
        ))}
      </div>
      {belowOptions}
    </HeroSection>
  );
}
