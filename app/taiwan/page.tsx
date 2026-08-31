import { SelectionPage } from "@/components/SelectionPage";
import { TAIWAN_OPTIONS } from "@/lib/trip-options";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "台灣出發行程 | 大樂旅行社",
  description: "從台灣出發的精選行程，夏季與冬季方案陸續推出。",
  path: "/taiwan",
});

export default function TaiwanPage() {
  return (
    <SelectionPage
      eyebrow="FROM TAIWAN"
      title="台灣出發"
      subtitle="從台灣出發，我們為您規劃每一趟旅程。"
      tagline="CURATED JOURNEYS DEPARTING FROM TAIWAN."
      options={TAIWAN_OPTIONS}
    />
  );
}
