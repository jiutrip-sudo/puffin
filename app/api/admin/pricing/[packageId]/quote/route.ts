import { NextResponse } from "next/server";
import { calculateCorivoTripPrice } from "@/lib/trip-pricing/corivo-calculate";
import { fetchCorivoTierAvailability } from "@/lib/trip-pricing/corivo-availability";
import { getPricingConfig, usesCorivoPricing } from "@/lib/trip-pricing/fetch";
import { applyRetailMarkupAmount } from "@/lib/trip-pricing/retail-markup";
import type { CorivoPricingConfig } from "@/lib/trip-pricing/types";

type RouteContext = {
  params: Promise<{ packageId: string }>;
};

export async function POST(request: Request, context: RouteContext) {
  try {
    const { packageId } = await context.params;
    const body = (await request.json()) as {
      mode?: "price" | "availability";
      startDate: string;
      adults: number;
      children: number;
      infants: number;
      accommodationTier: string;
      vehicleTier?: string;
    };

    const config = getPricingConfig(packageId);
    if (!config || !usesCorivoPricing(config) || !config.corivo) {
      return NextResponse.json({ error: "找不到套餐" }, { status: 404 });
    }

    const corivoConfig = { ...config, corivo: config.corivo } as CorivoPricingConfig;
    const mode = body.mode ?? "price";

    if (mode === "availability") {
      const result = await fetchCorivoTierAvailability(corivoConfig, {
        startDate: body.startDate,
        adults: body.adults,
        children: body.children,
        infants: body.infants,
        accommodationTier: body.accommodationTier,
      });
      return NextResponse.json({ mode, result, fetchedAt: new Date().toISOString() });
    }

    const result = await calculateCorivoTripPrice(corivoConfig, {
      packageId,
      startDate: body.startDate,
      adults: body.adults,
      children: body.children,
      infants: body.infants,
      accommodationTier: body.accommodationTier,
      roomType: "double",
      vehicleTier: body.vehicleTier ?? config.vehicleTiers[0]?.id ?? "",
    });

    const supplierTotal = result.total;
    const retailTotal = applyRetailMarkupAmount(supplierTotal);

    return NextResponse.json({
      mode,
      supplierTotal,
      retailTotal,
      result,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "即時查價失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
