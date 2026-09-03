import { HeroSection } from "@/components/HeroSection";
import { CircleButton } from "@/components/CircleButton";
import { TransitionBar } from "@/components/TransitionBar";
import { DEPARTURE_OPTIONS } from "@/lib/trip-options";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getRequestLocale } from "@/lib/i18n/server";
import { localizeText } from "@/lib/i18n/localize";
import { localizeTripOptions } from "@/lib/i18n/trip-options";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  return buildPageMetadata({
    title: localizeText("探索冰島，從這裡開始 | 帕芬假期", locale),
    description: localizeText(
      "選擇冰島集合或台灣出發，規劃您的冰島冬季自駕、南岸精華與冰川體驗。",
      locale,
    ),
    path: "/",
    locale,
  });
}

export default async function Home() {
  const locale = await getRequestLocale();
  const departureOptions = localizeTripOptions(DEPARTURE_OPTIONS, locale);

  return (
    <HeroSection
      eyebrow="ICELAND TRAVEL"
      title={localizeText("探索冰島，從這裡開始。", locale)}
      subtitle={localizeText("選擇您的出發方式，我們將為您推薦最適合的行程。", locale)}
      tagline="START YOUR JOURNEY WITH A WELL-PLANNED ITINERARY."
      footer={<TransitionBar />}
    >
      <div className="flex items-center justify-center gap-16 md:gap-24">
        {departureOptions.map((option) => (
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
