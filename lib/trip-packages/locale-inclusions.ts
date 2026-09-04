import { localizeText } from "@/lib/i18n/localize";
import type { SiteLocale } from "@/lib/site-locale";

/** 台灣站費用包含不列出；簡中站於 {@link applyLocaleInclusions} 注入 */
export const VISA_ASSISTANCE_INCLUSION_TW = "簽證輔助行程單材料提供";

function hasVisaAssistanceItem(items: readonly string[]): boolean {
  return items.some(
    (item) => item.includes("簽證輔助") || item.includes("签证辅助"),
  );
}

function visaAssistanceInsertIndex(included: readonly string[]): number {
  const handbookIndex = included.findIndex(
    (item) => item.includes("行程手冊") || item.includes("行程手册"),
  );
  return handbookIndex >= 0 ? handbookIndex + 1 : 0;
}

/** 依語系調整費用包含（簡中補上簽證輔助行程單） */
export function applyLocaleInclusions(
  inclusions: { included: string[]; excluded: string[] },
  locale: SiteLocale,
): { included: string[]; excluded: string[] } {
  if (locale !== "zh-CN" || hasVisaAssistanceItem(inclusions.included)) {
    return inclusions;
  }

  const included = [...inclusions.included];
  included.splice(
    visaAssistanceInsertIndex(included),
    0,
    localizeText(VISA_ASSISTANCE_INCLUSION_TW, "zh-CN"),
  );

  return { ...inclusions, included };
}
