import { SelectionPage } from "@/components/SelectionPage";
import { ICELAND_OPTIONS } from "@/lib/trip-options";

export default function IcelandPage() {
  return (
    <SelectionPage
      eyebrow="MEET IN ICELAND"
      title="冰島集合"
      subtitle="選擇您的旅行方式，跟團、自駕或體驗，各有精彩。"
      tagline="GROUP TOUR, SELF-DRIVE, OR UNIQUE EXPERIENCES AWAIT."
      options={ICELAND_OPTIONS}
      backHref="/"
      backLabel="首頁"
    />
  );
}
