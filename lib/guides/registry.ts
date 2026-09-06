import { applyGuideArticleMedia } from "@/lib/media/resolve";
import { GUIDE_ARTICLE_SOURCES } from "./articles/index";
import type { GuideArticle } from "./types";

export type { GuideArticle, GuideFeaturedTrip, GuideRewritePayload } from "./types";

export const GUIDE_ARTICLES: GuideArticle[] = GUIDE_ARTICLE_SOURCES.map((article) =>
  applyGuideArticleMedia(article),
);

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDE_ARTICLES.find((article) => article.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return GUIDE_ARTICLES.map((article) => article.slug);
}

export function getFeaturedGuides(): GuideArticle[] {
  return GUIDE_ARTICLES.filter((article) => article.featured);
}

export function getGuideCategories(): string[] {
  return [...new Set(GUIDE_ARTICLES.map((article) => article.category))];
}
