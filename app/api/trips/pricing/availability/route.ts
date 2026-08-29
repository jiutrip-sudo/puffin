import { resolveCorivoTierAvailability } from "@/lib/trip-pricing/pricing-snapshot-read";
import { getPricingConfig, usesCorivoPricing } from "@/lib/trip-pricing/fetch";

type AvailabilityRequest = {
  packageId?: string;
  startDate?: string;
  adults?: number;
  children?: number;
  infants?: number;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AvailabilityRequest;

    if (!body.packageId || !body.startDate) {
      return Response.json({ error: "缺少必要參數" }, { status: 400 });
    }

    const config = getPricingConfig(body.packageId);
    if (!config) {
      return Response.json({ error: "找不到價格設定" }, { status: 404 });
    }

    if (!usesCorivoPricing(config) || !config.corivo) {
      return Response.json({
        accommodation: Object.fromEntries(
          config.tiers.map((tier) => [tier.id, "AVAILABLE"]),
        ),
        vehicles: Object.fromEntries(
          config.vehicleTiers.map((tier) => [tier.id, "AVAILABLE"]),
        ),
      });
    }

    const result = await resolveCorivoTierAvailability(
      { ...config, corivo: config.corivo },
      {
        startDate: body.startDate,
        adults: body.adults ?? 2,
        children: body.children ?? 0,
        infants: body.infants ?? 0,
      },
    );

    return Response.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "查詢可訂狀態時發生錯誤";
    return Response.json({ error: message }, { status: 400 });
  }
}
