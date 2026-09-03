import { NextResponse } from "next/server";
import { syncPackagePricingById } from "@/lib/trip-pricing/pricing-snapshot-sync";

type RouteContext = {
  params: Promise<{ packageId: string }>;
};

export async function POST(_request: Request, context: RouteContext) {
  try {
    const { packageId } = await context.params;
    const report = await syncPackagePricingById(packageId);

    if (!report) {
      return NextResponse.json({ error: "找不到套餐" }, { status: 404 });
    }

    return NextResponse.json({
      ok: report.errors.length === 0,
      report,
      syncedAt: new Date().toISOString(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "同步計價失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
