import type { SiteLocale } from "@/lib/site-locale";
import { localizeText } from "@/lib/i18n/localize";
import { MESSAGES, type MessageKey } from "./zh-TW";

const CN_MESSAGES = Object.fromEntries(
  Object.entries(MESSAGES).map(([key, value]) => [
    key,
    localizeText(value, "zh-CN"),
  ]),
) as Record<MessageKey, string>;

export function t(key: MessageKey, locale: SiteLocale): string {
  return locale === "zh-CN" ? CN_MESSAGES[key] : MESSAGES[key];
}

export function getMessages(locale: SiteLocale): Record<MessageKey, string> {
  return locale === "zh-CN" ? CN_MESSAGES : MESSAGES;
}
