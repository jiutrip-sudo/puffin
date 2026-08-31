import Link from "next/link";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getAllGuideSlugs, getGuideBySlug } from "@/lib/guides/registry";
import { GuideTripCta } from "@/components/guides/GuideTripCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/site-url";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const article = getGuideBySlug(slug);
  if (!article) {
    return buildPageMetadata({
      title: "找不到攻略 | 大樂旅行社",
      description: "找不到您要的攻略文章。",
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: `${article.title} | 大樂旅行社`,
    description: article.description,
    path: `/guides/${slug}`,
  });
}

export default async function GuideArticlePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const article = getGuideBySlug(slug);

  if (!article) {
    notFound();
  }

  const pageUrl = absoluteUrl(`/guides/${slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
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
            <Link href="/guides">攻略</Link>
            <span aria-hidden="true"> · </span>
            冰島自駕
          </p>
          <h1 className="guides-article__title">{article.title}</h1>
          <p className="guides-article__lead">{article.description}</p>
        </header>

        <div className="guides-article__body">
          {article.sections.map((section) => (
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
