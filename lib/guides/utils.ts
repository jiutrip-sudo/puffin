import type { GuideArticle } from "./registry";

export function guideSectionId(index: number): string {
  return `section-${index + 1}`;
}

export function estimateReadingMinutes(article: GuideArticle): number {
  let chars = article.title.length + article.description.length;

  for (const section of article.sections) {
    chars += section.heading.length;
    chars += section.paragraphs.join("").length;
    chars += (section.bullets ?? []).join("").length;
  }

  return Math.max(3, Math.round(chars / 400));
}

export function formatGuideDate(date: string, locale: string): string {
  const parsed = new Date(`${date}T00:00:00`);

  return parsed.toLocaleDateString(locale === "zh-CN" ? "zh-CN" : "zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
