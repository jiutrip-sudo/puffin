import { HeroSection } from "@/components/HeroSection";
import { CircleButton } from "@/components/CircleButton";
import { TransitionBar } from "@/components/TransitionBar";
import { DEPARTURE_OPTIONS } from "@/lib/trip-options";

export default function Home() {
  return (
    <HeroSection
      eyebrow="ICELAND TRAVEL"
      title="探索冰島，從這裡開始。"
      subtitle="選擇您的出發方式，我們將為您推薦最適合的行程。"
      tagline="START YOUR JOURNEY WITH A WELL-PLANNED ITINERARY."
      footer={<TransitionBar />}
    >
      <div className="flex items-center justify-center gap-5 md:gap-7">
        {DEPARTURE_OPTIONS.map((option) => (
          <CircleButton
            key={option.id}
            href={option.href}
            lines={option.lines}
          >
            {option.label}
          </CircleButton>
        ))}
      </div>
    </HeroSection>
  );
}
