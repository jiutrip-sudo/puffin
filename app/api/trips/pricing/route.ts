import { getPricingConfig } from "@/lib/trip-pricing/fetch";
import type { PricingConfig } from "@/lib/trip-pricing/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const packageId = searchParams.get("packageId");

  if (!packageId) {
    return Response.json({ error: "缺少 packageId" }, { status: 400 });
  }

  const config = getPricingConfig(packageId);

  if (!config) {
    return Response.json({ error: "找不到價格設定" }, { status: 404 });
  }

  return Response.json(config satisfies PricingConfig);
}
