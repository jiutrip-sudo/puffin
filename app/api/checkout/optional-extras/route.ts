import { NextResponse } from "next/server";
import { fetchCorivoGroupedOptionalExtras } from "@/lib/checkout/corivo-optional-extras";
import { getPricingConfig, usesCorivoPricing } from "@/lib/trip-pricing/fetch";

type OptionalExtrasRequest = {
  packageId?: string;
  startDate?: string;
  adults?: number;
  children?: number;
  infants?: number;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as OptionalExtrasRequest;

    if (!body.packageId || !body.startDate) {
      return NextResponse.json({ error: "缺少必要參數" }, { status: 400 });
    }

    const config = getPricingConfig(body.packageId);
    if (!config || !usesCorivoPricing(config) || !config.corivo) {
      return NextResponse.json({ error: "找不到可預訂的套餐" }, { status: 404 });
    }

    const travelers = {
      adults: Math.max(0, body.adults ?? 2),
      children: Math.max(0, body.children ?? 0),
      infants: Math.max(0, body.infants ?? 0),
    };

    const days = await fetchCorivoGroupedOptionalExtras(
      config.corivo.instanceId,
      config.corivo.packageTourId,
      body.startDate,
      travelers,
      config.currency,
    );

    return NextResponse.json({ days, currency: config.currency });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "取得活動目錄時發生錯誤";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
