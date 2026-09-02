import { LocaleLink } from "@/components/LocaleLink";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { GUIDE_ARTICLES } from "@/lib/guides/registry";
import { GuideTripCta } from "@/components/guides/GuideTripCta";
import { getRequestLocale } from "@/lib/i18n/server";
import { localizeDeep, localizeText } from "@/lib/i18n/localize";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  return buildPageMetadata({
    title: localizeText("冰島旅遊攻略 | 大樂旅行社", locale),
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
    <div className="guides-page">
      <div className="guides-page__inner">
        <header className="guides-page__header">
          <h1 className="guides-page__title">
            {localizeText("冰島旅遊攻略", locale)}
          </h1>
          <p className="guides-page__desc">
            {localizeText(
              "出發前先讀：天數怎麼抓、冬季自駕要注意什麼、如何預訂與付款。",
              locale,
            )}
          </p>
        </header>

        <ul className="guides-index-list">
          {articles.map((article) => (
            <li key={article.slug}>
              <LocaleLink
                href={`/guides/${article.slug}`}
                locale={locale}
                className="guides-index-card"
              >
                <h2 className="guides-index-card__title">{article.title}</h2>
                <p className="guides-index-card__desc">{article.description}</p>
                <span className="guides-index-card__link">
                  {localizeText("閱讀攻略 →", locale)}
                </span>
              </LocaleLink>
            </li>
          ))}
        </ul>

        <GuideTripCta className="mt-10" />
      </div>
    </div>
  );
}
