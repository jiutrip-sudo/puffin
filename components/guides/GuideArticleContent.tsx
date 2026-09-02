import { LocaleLink } from "@/components/LocaleLink";
import { GuideTripCta } from "@/components/guides/GuideTripCta";
import type { GuideArticle } from "@/lib/guides/registry";
import {
  estimateReadingMinutes,
  formatGuideDate,
  guideSectionId,
} from "@/lib/guides/utils";
import type { SiteLocale } from "@/lib/site-locale";
import { localizeText } from "@/lib/i18n/localize";

type GuideArticleContentProps = {
  article: GuideArticle;
  locale: SiteLocale;
};

export function GuideArticleContent({
  article,
  locale,
}: GuideArticleContentProps) {
  const readingMinutes = estimateReadingMinutes(article);
  const publishedLabel = formatGuideDate(article.publishedAt, locale);
  const midCtaIndex = Math.max(1, Math.ceil(article.sections.length / 2) - 1);
  const showToc = article.sections.length >= 3;

  return (
    <div className="guides-article-page__layout">
      {showToc ? (
        <aside className="guides-article-page__toc" aria-label={localizeText("目錄", locale)}>
          <p className="guides-article-page__toc-label">
            {localizeText("目錄", locale)}
          </p>
          <nav>
            <ol className="guides-article-page__toc-list">
              {article.sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#${guideSectionId(index)}`}>{section.heading}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
      ) : null}

      <article className="guides-article">
        <header className="guides-article__header">
          <p className="guides-article__eyebrow">
            <LocaleLink href="/guides" locale={locale}>
              {localizeText("攻略", locale)}
            </LocaleLink>
            <span aria-hidden="true"> · </span>
            {localizeText(article.category, locale)}
          </p>
          <h1 className="guides-article__title">{article.title}</h1>
          <p className="guides-article__lead">{article.description}</p>
          <p className="guides-article__meta">
            <time dateTime={article.publishedAt}>{publishedLabel}</time>
            <span aria-hidden="true"> · </span>
            <span>{localizeText(`約 ${readingMinutes} 分鐘閱讀`, locale)}</span>
          </p>
        </header>

        <div className="guides-article__body">
          {article.sections.map((section, index) => (
            <div key={section.heading}>
              <section
                id={guideSectionId(index)}
                className="guides-article__section"
              >
                <h2 className="guides-article__heading">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="guides-article__paragraph">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="guides-article__bullets">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>

              {index === midCtaIndex ? (
                <GuideTripCta
                  className="my-8"
                  tripHref={article.featuredTrip.href}
                  tripTitle={article.featuredTrip.title}
                  tripBlurb={article.featuredTrip.blurb}
                />
              ) : null}
            </div>
          ))}
        </div>

        <GuideTripCta
          className="mt-10"
          tripHref={article.featuredTrip.href}
          tripTitle={article.featuredTrip.title}
          tripBlurb={article.featuredTrip.blurb}
        />
      </article>
    </div>
  );
}
