import { resolveTripPrice } from "@/lib/trip-pricing/resolve-trip-price";
import { getPricingConfig } from "@/lib/trip-pricing/fetch";
import type { PricingInput } from "@/lib/trip-pricing/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as PricingInput;

    if (!body.packageId || !body.startDate) {
      return Response.json({ error: "缺少必要計價參數" }, { status: 400 });
    }

    const config = getPricingConfig(body.packageId);
    if (!config) {
      return Response.json({ error: "找不到價格設定" }, { status: 404 });
    }

    const result = await resolveTripPrice(config, body);
    return Response.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "計價時發生未知錯誤";
    return Response.json({ error: message }, { status: 400 });
  }
}
