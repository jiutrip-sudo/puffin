import { SelectionPage } from "@/components/SelectionPage";
import { TAIWAN_OPTIONS } from "@/lib/trip-options";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getRequestLocale } from "@/lib/i18n/server";
import { localizeText } from "@/lib/i18n/localize";
import { localizeTripOptions } from "@/lib/i18n/trip-options";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  return buildPageMetadata({
    title: localizeText("台灣出發行程 | 帕芬假期", locale),
    description: localizeText(
      "從台灣出發的精選行程，夏季與冬季方案陸續推出。",
      locale,
    ),
    path: "/taiwan",
    locale,
  });
}

export default async function TaiwanPage() {
  const locale = await getRequestLocale();

  return (
    <SelectionPage
      eyebrow="FROM TAIWAN"
      title={localizeText("台灣出發", locale)}
      subtitle={localizeText("從台灣出發，我們為您規劃每一趟旅程。", locale)}
      tagline="CURATED JOURNEYS DEPARTING FROM TAIWAN."
      options={localizeTripOptions(TAIWAN_OPTIONS, locale)}
    />
  );
}
