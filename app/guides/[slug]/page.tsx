import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getAllGuideSlugs, getGuideBySlug } from "@/lib/guides/registry";
import { GuideArticleContent } from "@/components/guides/GuideArticleContent";
import { GuideArticleShell } from "@/components/guides/GuideArticleShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/site-url";
import { COMPANY_INFO } from "@/lib/company-info";
import { getRequestLocale } from "@/lib/i18n/server";
import { localizeDeep, localizeText } from "@/lib/i18n/localize";
import { localePath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/messages";

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
      title: localizeText("找不到攻略 | 帕芬假期", locale),
      description: localizeText("找不到您要的攻略文章。", locale),
      noIndex: true,
      locale,
    });
  }

  const localized = localizeDeep(article, locale);

  return buildPageMetadata({
    title: `${localized.title} | 帕芬假期`,
    description: localized.description,
    path: `/guides/${slug}`,
    locale,
    ogImage: localized.coverImage.startsWith("http")
      ? localized.coverImage
      : absoluteUrl(localized.coverImage),
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
    image: localized.coverImage,
    datePublished: localized.publishedAt,
    author: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
    },
    mainEntityOfPage: pageUrl,
  };

  return (
    <GuideArticleShell
      activeLabel={t("nav.guides", locale)}
      coverImage={localized.coverImage}
    >
      <JsonLd data={jsonLd} />
      <GuideArticleContent article={localized} locale={locale} />
    </GuideArticleShell>
  );
}
