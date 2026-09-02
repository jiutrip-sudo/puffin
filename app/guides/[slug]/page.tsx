import { LocaleLink } from "@/components/LocaleLink";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getAllGuideSlugs, getGuideBySlug } from "@/lib/guides/registry";
import { GuideTripCta } from "@/components/guides/GuideTripCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/site-url";
import { getRequestLocale } from "@/lib/i18n/server";
import { localizeDeep, localizeText } from "@/lib/i18n/localize";
import { localePath } from "@/lib/i18n/paths";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const article = getGuideBySlug(slug);
  if (!article) {
    return buildPageMetadata({
      title: localizeText("找不到攻略 | 大樂旅行社", locale),
      description: localizeText("找不到您要的攻略文章。", locale),
      noIndex: true,
      locale,
    });
  }

  const localized = localizeDeep(article, locale);

  return buildPageMetadata({
    title: `${localized.title} | 大樂旅行社`,
    description: localized.description,
    path: `/guides/${slug}`,
    locale,
  });
}

export default async function GuideArticlePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const article = getGuideBySlug(slug);

  if (!article) {
    notFound();
  }

  const localized = localizeDeep(article, locale);
  const pageUrl = absoluteUrl(localePath(`/guides/${slug}`, locale));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: localized.title,
    description: localized.description,
    datePublished: localized.publishedAt,
    author: {
      "@type": "Organization",
      name: "大樂旅行社股份有限公司",
    },
    mainEntityOfPage: pageUrl,
  };

  return (
    <article className="guides-page">
      <div className="guides-page__inner guides-article">
        <JsonLd data={jsonLd} />
        <header className="guides-article__header">
          <p className="guides-article__eyebrow">
            <LocaleLink href="/guides" locale={locale}>
              {localizeText("攻略", locale)}
            </LocaleLink>
            <span aria-hidden="true"> · </span>
            {localizeText("冰島自駕", locale)}
          </p>
          <h1 className="guides-article__title">{localized.title}</h1>
          <p className="guides-article__lead">{localized.description}</p>
        </header>

        <div className="guides-article__body">
          {localized.sections.map((section) => (
            <section key={section.heading} className="guides-article__section">
              <h2 className="guides-article__heading">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="guides-article__paragraph">
                  {paragraph}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="guides-article__bullets">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <GuideTripCta className="mt-10" />
      </div>
    </article>
  );
}
