import { TripImage } from "@/components/trip-package/TripImage";
import { LocaleLink } from "@/components/LocaleLink";
import type { SiteLocale } from "@/lib/site-locale";
import type { GuideArticle } from "@/lib/guides/registry";
import { estimateReadingMinutes } from "@/lib/guides/utils";
import { localizeText } from "@/lib/i18n/localize";

export type GuideIndexCardLayout = "default" | "rail";

type GuideIndexCardProps = {
  article: GuideArticle;
  locale: SiteLocale;
  layout?: GuideIndexCardLayout;
};

export function GuideIndexCard({
  article,
  locale,
  layout = "default",
}: GuideIndexCardProps) {
  const readingMinutes = estimateReadingMinutes(article);
  const isRail = layout === "rail";

  return (
    <li
      className={`guides-index-card-wrap${
        isRail ? " guides-index-card-wrap--rail" : ""
      }`}
    >
      <article className={`guides-index-card${isRail ? " guides-index-card--rail" : ""}`}>
        <LocaleLink
          href={`/guides/${article.slug}`}
          locale={locale}
          className="guides-index-card__main"
        >
          <div className="guides-index-card__media">
            <TripImage
              src={article.coverImage}
              alt=""
              width={640}
              height={360}
              className="guides-index-card__image"
              sizes={
                isRail ? "280px" : "(min-width: 768px) 22vw, 280px"
              }
            />
            {article.featured ? (
              <span className="guides-index-card__badge">
                {localizeText("入門必讀", locale)}
              </span>
            ) : null}
          </div>
          <div className="guides-index-card__body">
            <div className="guides-index-card__meta">
              <span className="guides-index-card__category">
                {localizeText(article.category, locale)}
              </span>
              <span aria-hidden="true">·</span>
              <span>{localizeText(`約 ${readingMinutes} 分鐘`, locale)}</span>
            </div>
            <h2 className="guides-index-card__title">{article.title}</h2>
            <p className="guides-index-card__desc">{article.description}</p>
            {!isRail ? (
              <span className="guides-index-card__link">
                {localizeText("閱讀攻略 →", locale)}
              </span>
            ) : null}
          </div>
        </LocaleLink>

        <div className="guides-index-card__footer">
          <LocaleLink
            href={article.featuredTrip.href}
            locale={locale}
            className="guides-index-card__trip"
          >
            {localizeText("相關行程", locale)}：{article.featuredTrip.title} →
          </LocaleLink>
        </div>
      </article>
    </li>
  );
}
