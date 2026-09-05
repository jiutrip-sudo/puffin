import pricingLegacyMap from "@/lib/media/pricing-legacy-map.json";
import manifest from "@/lib/media/manifest.json";
import { mediaBaseUrl } from "@/lib/media/url";

const manifestKeys = new Set<string>(
  Array.isArray(manifest.keys) ? manifest.keys : [],
);

/** 房型／車型圖：只走 R2（pricing/assets），不引用 senlinmao */
export function PRICING_IMG(file: string, _width = 1200): string {
  const base = mediaBaseUrl();
  const entry = (pricingLegacyMap as Record<string, { assetId: string }>)[file];
  if (base && entry) {
    const key = `pricing/assets/${entry.assetId}.webp`;
    if (manifestKeys.has(key)) {
      return `${base}/${key}`;
    }
  }

  throw new Error(
    `Pricing 圖片尚未同步至 R2：${file}（請執行 npm run media:sync:pricing -- --all --force --upload）`,
  );
}
