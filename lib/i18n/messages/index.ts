import type { SiteLocale } from "@/lib/site-locale";
import { localizeText } from "@/lib/i18n/localize";
import { MESSAGES, type MessageKey } from "./zh-TW";

/** 簡中專用文案（不沿用 OpenCC 自動轉換） */
const CN_MESSAGE_OVERRIDES: Partial<Record<MessageKey, string>> = {
  "trip.section.attractionHighlights": "景点高光",
  "trip.attractionGrid.scrollAria": "景点高光，可左右滑动浏览",
};

const CN_MESSAGES = Object.fromEntries(
  Object.entries(MESSAGES).map(([key, value]) => [
    key,
    CN_MESSAGE_OVERRIDES[key as MessageKey] ?? localizeText(value, "zh-CN"),
  ]),
) as Record<MessageKey, string>;

export function t(key: MessageKey, locale: SiteLocale): string {
  return locale === "zh-CN" ? CN_MESSAGES[key] : MESSAGES[key];
}

export function getMessages(locale: SiteLocale): Record<MessageKey, string> {
  return locale === "zh-CN" ? CN_MESSAGES : MESSAGES;
}
