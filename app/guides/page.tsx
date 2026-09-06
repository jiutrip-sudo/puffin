import { buildPageMetadata } from "@/lib/seo/metadata";
import { GUIDE_ARTICLES } from "@/lib/guides/registry";
import { GuidesIndexGrid } from "@/components/guides/GuidesIndexGrid";
import { GuidesIndexShell } from "@/components/guides/GuidesIndexShell";
import { getRequestLocale } from "@/lib/i18n/server";
import { localizeDeep, localizeText } from "@/lib/i18n/localize";
import { t } from "@/lib/i18n/messages";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  return buildPageMetadata({
    title: localizeText("冰島旅遊攻略 | 帕芬假期", locale),
    description: localizeText(
      "冰島冬季自駕、南岸行程天數、行前準備與預訂付款說明，幫助您安心規劃冰島之旅。",
      locale,
    ),
    path: "/guides",
    locale,
  });
}

export default async function GuidesIndexPage() {
  const locale = await getRequestLocale();
  const articles = GUIDE_ARTICLES.map((article) => localizeDeep(article, locale));

  return (
    <GuidesIndexShell
      activeLabel={t("nav.guides", locale)}
      variant="compact"
      title={localizeText("冰島旅遊攻略", locale)}
      description={localizeText(
        articles.length === 0
          ? "冰島旅遊規劃攻略整理中，可先瀏覽行程或聯絡顧問。"
          : `${articles.length} 篇出發前必讀，依規劃階段從選方式、抓天數到預訂出發。`,
        locale,
      )}
    >
      <GuidesIndexGrid articles={articles} />
    </GuidesIndexShell>
  );
}
