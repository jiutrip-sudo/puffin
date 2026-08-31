import { HeroSection } from "@/components/HeroSection";
import { CircleButton } from "@/components/CircleButton";
import { TransitionBar } from "@/components/TransitionBar";
import { DEPARTURE_OPTIONS } from "@/lib/trip-options";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "探索冰島，從這裡開始 | 大樂旅行社",
  description:
    "選擇冰島集合或台灣出發，規劃您的冰島冬季自駕、南岸精華與冰川體驗。",
  path: "/",
});

export default function Home() {
  return (
    <HeroSection
      eyebrow="ICELAND TRAVEL"
      title="探索冰島，從這裡開始。"
      subtitle="選擇您的出發方式，我們將為您推薦最適合的行程。"
      tagline="START YOUR JOURNEY WITH A WELL-PLANNED ITINERARY."
      footer={<TransitionBar />}
    >
      <div className="flex items-center justify-center gap-16 md:gap-24">
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
