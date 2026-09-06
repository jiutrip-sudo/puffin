import { LocaleLink } from "@/components/LocaleLink";
import { getRelatedGuides } from "@/lib/guides/related-guides";
import type { SiteLocale } from "@/lib/site-locale";
import { localizeText } from "@/lib/i18n/localize";

type GuideRelatedArticlesProps = {
  slug: string;
  locale: SiteLocale;
  className?: string;
};

export function GuideRelatedArticles({
  slug,
  locale,
  className = "",
}: GuideRelatedArticlesProps) {
  const related = getRelatedGuides(slug);
  if (related.length === 0) {
    return null;
  }

  const heading = localizeText("延伸閱讀", locale);

  return (
    <nav
      className={`guides-related ${className}`.trim()}
      aria-label={heading}
    >
      <p className="guides-related__label">{heading}</p>
      <ul className="guides-related__list">
        {related.map((article) => (
          <li key={article.slug}>
            <LocaleLink
              href={`/guides/${article.slug}`}
              locale={locale}
              className="guides-related__link"
            >
              <span className="guides-related__title">{article.title}</span>
              <span className="guides-related__category">{article.category}</span>
            </LocaleLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
