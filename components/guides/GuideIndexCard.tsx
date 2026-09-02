import { TripImage } from "@/components/trip-package/TripImage";
import { LocaleLink } from "@/components/LocaleLink";
import type { SiteLocale } from "@/lib/site-locale";
import type { GuideArticle } from "@/lib/guides/registry";
import { estimateReadingMinutes } from "@/lib/guides/utils";
import { localizeText } from "@/lib/i18n/localize";

type GuideIndexCardProps = {
  article: GuideArticle;
  locale: SiteLocale;
};

export function GuideIndexCard({ article, locale }: GuideIndexCardProps) {
  const readingMinutes = estimateReadingMinutes(article);

  return (
    <li>
      <LocaleLink
        href={`/guides/${article.slug}`}
        locale={locale}
        className="guides-index-card"
      >
        <div className="guides-index-card__media">
          <TripImage
            src={article.coverImage}
            alt=""
            width={640}
            height={360}
            className="guides-index-card__image"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="guides-index-card__body">
          <div className="guides-index-card__meta">
            <span className="guides-index-card__category">
              {localizeText(article.category, locale)}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {localizeText(`約 ${readingMinutes} 分鐘`, locale)}
            </span>
          </div>
          <h2 className="guides-index-card__title">{article.title}</h2>
          <p className="guides-index-card__desc">{article.description}</p>
          <span className="guides-index-card__link">
            {localizeText("閱讀攻略 →", locale)}
          </span>
        </div>
      </LocaleLink>
    </li>
  );
}
