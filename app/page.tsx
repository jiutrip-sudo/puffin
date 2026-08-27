import { HeroSection } from "@/components/HeroSection";
import { PillButton } from "@/components/PillButton";
import { TransitionBar } from "@/components/TransitionBar";
import { BottomPanel } from "@/components/BottomPanel";
import { DEPARTURE_OPTIONS } from "@/lib/trip-options";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection
        eyebrow="ICELAND TRAVEL"
        title="探索冰島，從這裡開始。"
        subtitle="選擇您的出發方式，我們將為您推薦最適合的行程。"
        tagline="START YOUR JOURNEY WITH A WELL-PLANNED ITINERARY."
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          {DEPARTURE_OPTIONS.map((option) => (
            <PillButton key={option.id} href={option.href}>
              {option.label}
            </PillButton>
          ))}
        </div>
      </HeroSection>

      <TransitionBar />

      <BottomPanel>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Left column */}
          <div>
            <h2 className="text-2xl font-extrabold leading-tight text-foreground md:text-4xl">
              與我們一起，
              <br />
              發現冰島的每一面
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/55 md:text-base">
              無論從台灣出發或直接在冰島集合，我們提供夏季、冬季、跟團、自駕與體驗行程，滿足每一位旅人的期待。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-foreground/30"
              >
                試用行程規劃
              </button>
              <button
                type="button"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-foreground/90"
              >
                免費諮詢
              </button>
            </div>
          </div>

          {/* Right column: stats + card */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-primary-surface/40 p-6">
                <p className="text-4xl font-extrabold text-foreground md:text-5xl">
                  50+
                </p>
                <p className="mt-1 text-xs font-medium text-foreground/50">
                  精選行程
                </p>
              </div>
              <div className="rounded-3xl bg-primary-surface/40 p-6">
                <p className="text-4xl font-extrabold text-foreground md:text-5xl">
                  2K+
                </p>
                <p className="mt-1 text-xs font-medium text-foreground/50">
                  滿意旅客
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-foreground/8 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground/40">
                Join The Teams
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#c8bde8", "#b4a7d6", "#9b8fcc", "#d4cceb"].map((color) => (
                    <div
                      key={color}
                      className="h-8 w-8 rounded-full border-2 border-white"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-foreground/70">
                  加入現有旅團，與旅人一同出發
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-10 flex justify-end gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === 0 ? "bg-foreground" : "bg-foreground/20"}`}
            />
          ))}
        </div>
      </BottomPanel>
    </div>
  );
}
