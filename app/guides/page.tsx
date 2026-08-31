import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { GUIDE_ARTICLES } from "@/lib/guides/registry";
import { GuideTripCta } from "@/components/guides/GuideTripCta";

export const metadata = buildPageMetadata({
  title: "冰島旅遊攻略 | 大樂旅行社",
  description:
    "冰島冬季自駕、南岸行程天數、行前準備與預訂付款說明，幫助您安心規劃冰島之旅。",
  path: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <div className="guides-page">
      <div className="guides-page__inner">
        <header className="guides-page__header">
          <h1 className="guides-page__title">冰島旅遊攻略</h1>
          <p className="guides-page__desc">
            出發前先讀：天數怎麼抓、冬季自駕要注意什麼、如何預訂與付款。
          </p>
        </header>

        <ul className="guides-index-list">
          {GUIDE_ARTICLES.map((article) => (
            <li key={article.slug}>
              <Link href={`/guides/${article.slug}`} className="guides-index-card">
                <h2 className="guides-index-card__title">{article.title}</h2>
                <p className="guides-index-card__desc">{article.description}</p>
                <span className="guides-index-card__link">閱讀攻略 →</span>
              </Link>
            </li>
          ))}
        </ul>

        <GuideTripCta className="mt-10" />
      </div>
    </div>
  );
}
