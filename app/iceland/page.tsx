import { SelectionPage } from "@/components/SelectionPage";
import { ICELAND_OPTIONS } from "@/lib/trip-options";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "冰島集合行程 | 大樂旅行社",
  description:
    "冰島集合出發：自駕、跟團與體驗行程。選擇最適合你的冰島旅行方式。",
  path: "/iceland",
});

export default function IcelandPage() {
  return (
    <SelectionPage
      eyebrow="MEET IN ICELAND"
      title="冰島集合"
      subtitle="選擇您的旅行方式，跟團、自駕或體驗，各有精彩。"
      tagline="GROUP TOUR, SELF-DRIVE, OR UNIQUE EXPERIENCES AWAIT."
      options={ICELAND_OPTIONS}
    />
  );
}
