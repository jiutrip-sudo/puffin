import { attachDisplayPricing } from "@/lib/trip-pricing/attach-display-pricing";
import { getLocaleFromRequest } from "@/lib/i18n/request-locale";
import { resolveTripPrice } from "@/lib/trip-pricing/resolve-trip-price";
import { getPricingConfig } from "@/lib/trip-pricing/fetch";
import { assertBookableStartDate } from "@/lib/trip-pricing/validate-booking-date";
import type { PricingInput } from "@/lib/trip-pricing/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as PricingInput;
    const locale = getLocaleFromRequest(request);

    if (!body.packageId || !body.startDate) {
      return Response.json({ error: "缺少必要計價參數" }, { status: 400 });
    }

    const config = getPricingConfig(body.packageId);
    if (!config) {
      return Response.json({ error: "找不到價格設定" }, { status: 404 });
    }

    assertBookableStartDate(config, body.startDate);

    const result = await resolveTripPrice(config, body);
    return Response.json(attachDisplayPricing(result, locale));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "計價時發生未知錯誤";
    return Response.json({ error: message }, { status: 400 });
  }
}
