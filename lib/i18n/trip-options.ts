import type { SiteLocale } from "@/lib/site-locale";
import { localePath } from "@/lib/i18n/paths";
import { localizeDeep, localizeText } from "@/lib/i18n/localize";

export function localizeTripOptions<T extends { label: string; href: string }>(
  options: readonly T[],
  locale: SiteLocale,
): T[] {
  return options.map((option) => ({
    ...option,
    label: localizeText(option.label, locale),
    href: localePath(option.href, locale),
  }));
}

export function localizeRecordLabels(
  labels: Record<string, string>,
  locale: SiteLocale,
): Record<string, string> {
  if (locale === "zh-TW") {
    return labels;
  }
  return Object.fromEntries(
    Object.entries(labels).map(([key, value]) => [
      key,
      localizeText(value, locale),
    ]),
  );
}
