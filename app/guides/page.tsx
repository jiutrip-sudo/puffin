import { buildPageMetadata } from "@/lib/seo/metadata";
import { GUIDE_ARTICLES } from "@/lib/guides/registry";
import { GuideTripCta } from "@/components/guides/GuideTripCta";
import { GuideIndexCard } from "@/components/guides/GuideIndexCard";
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
  const articles = GUIDE_ARTICLES.map((article) =>
    localizeDeep(article, locale),
  );

  return (
    <GuidesIndexShell
      activeLabel={t("nav.guides", locale)}
      title={localizeText("冰島旅遊攻略", locale)}
      description={localizeText(
        "出發前先讀：天數怎麼抓、冬季自駕要注意什麼、如何預訂與付款。",
        locale,
      )}
    >
      <ul className="guides-index-list">
        {articles.map((article) => (
          <GuideIndexCard key={article.slug} article={article} locale={locale} />
        ))}
      </ul>

      <GuideTripCta className="mt-10" />
    </GuidesIndexShell>
  );
}
