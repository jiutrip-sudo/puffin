import { NextResponse } from "next/server";
import { listPricingPackageSummaries } from "@/lib/admin/pricing-overview";

export async function GET() {
  try {
    const packages = await listPricingPackageSummaries();
    return NextResponse.json({ packages });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "讀取計價總覽失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
