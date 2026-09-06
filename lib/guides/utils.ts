export function guideSectionId(index: number): string {
  return `section-${index + 1}`;
}

export function formatGuideDate(date: string, locale: string): string {
  const parsed = new Date(`${date}T00:00:00`);

  return parsed.toLocaleDateString(locale === "zh-CN" ? "zh-CN" : "zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
