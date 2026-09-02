import { Converter } from "opencc-js";
import type { SiteLocale } from "@/lib/site-locale";
import { CN_TERMS } from "./cn-terms";
import {
  normalizePlaceAliases,
  PLACE_CN_OVERRIDES,
} from "./iceland-place-names";

const twToCnConverter = Converter({ from: "tw", to: "cn" });

/** 台灣標準地名 → 大陸用語（須在 OpenCC 之前套用） */
const PLACE_CN_BEFORE_OPENCC = [...PLACE_CN_OVERRIDES].sort(
  (a, b) => b[0].length - a[0].length,
);

/** 一般詞彙（OpenCC 之後套用） */
const CN_TERMS_SORTED = [...CN_TERMS].sort(
  (a, b) => b[0].length - a[0].length,
);

const SKIP_KEYS = new Set([
  "id",
  "slug",
  "tripKey",
  "tourCode",
  "nameEn",
  "href",
  "heroImage",
  "src",
  "image",
  "ogImage",
  "backHref",
  "lat",
  "lng",
  "publishedAt",
  "months",
]);

function shouldSkipString(value: string): boolean {
  if (!value) return true;
  if (value.startsWith("http://") || value.startsWith("https://")) return true;
  if (value.startsWith("/") && !/[\u4e00-\u9fff]/.test(value)) return true;
  if (/^[\w.-]+@[\w.-]+\.\w+$/.test(value)) return true;
  if (/^\+?\d[\d\s-]+$/.test(value)) return true;
  if (/^SLM[A-Z]+-\d+/.test(value)) return true;
  return false;
}

export function localizeText(text: string, locale: SiteLocale): string {
  if (!text || shouldSkipString(text)) {
    return text;
  }

  const normalized = normalizePlaceAliases(text);

  if (locale === "zh-TW") {
    return normalized;
  }

  let out = normalized;
  for (const [from, to] of PLACE_CN_BEFORE_OPENCC) {
    out = out.split(from).join(to);
  }

  out = twToCnConverter(out);
  for (const [from, to] of CN_TERMS_SORTED) {
    out = out.split(from).join(to);
  }
  return out;
}

export function localizeDeep<T>(value: T, locale: SiteLocale): T {
  return localizeValue(value, locale) as T;
}

function localizeValue(value: unknown, locale: SiteLocale): unknown {
  if (typeof value === "string") {
    return localizeText(value, locale);
  }

  if (Array.isArray(value)) {
    return value.map((item) => localizeValue(item, locale));
  }

  if (value && typeof value === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, nested] of Object.entries(value)) {
      if (SKIP_KEYS.has(key)) {
        result[key] = nested;
        continue;
      }
      result[key] = localizeValue(nested, locale);
    }
    return result;
  }

  return value;
}
