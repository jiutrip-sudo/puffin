import { SelectionPage } from "@/components/SelectionPage";
import { TAIWAN_OPTIONS } from "@/lib/trip-options";

export default function TaiwanPage() {
  return (
    <SelectionPage
      eyebrow="DEPART FROM TAIWAN"
      title="台灣出發"
      subtitle="選擇您想前往的季節，我們將為您規劃最適合的行程。"
      tagline="CHOOSE YOUR SEASON FOR THE PERFECT ICELAND ADVENTURE."
      options={TAIWAN_OPTIONS}
    />
  );
}
