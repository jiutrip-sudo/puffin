import { SelectionPage } from "@/components/SelectionPage";
import { ICELAND_OPTIONS } from "@/lib/trip-options";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getRequestLocale } from "@/lib/i18n/server";
import { localizeText } from "@/lib/i18n/localize";
import { localizeTripOptions } from "@/lib/i18n/trip-options";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  return buildPageMetadata({
    title: localizeText("冰島集合行程 | 大樂旅行社", locale),
    description: localizeText(
      "冰島集合出發：自駕、跟團與體驗行程。選擇最適合你的冰島旅行方式。",
      locale,
    ),
    path: "/iceland",
    locale,
  });
}

export default async function IcelandPage() {
  const locale = await getRequestLocale();

  return (
    <SelectionPage
      eyebrow="MEET IN ICELAND"
      title={localizeText("冰島集合", locale)}
      subtitle={localizeText(
        "選擇您的旅行方式，跟團、自駕或體驗，各有精彩。",
        locale,
      )}
      tagline="GROUP TOUR, SELF-DRIVE, OR UNIQUE EXPERIENCES AWAIT."
      options={localizeTripOptions(ICELAND_OPTIONS, locale)}
    />
  );
}
