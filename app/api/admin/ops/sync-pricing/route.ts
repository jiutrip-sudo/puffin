import { NextResponse } from "next/server";
import { syncAllPackagePricing } from "@/lib/trip-pricing/pricing-snapshot-sync";

export async function POST() {
  try {
    const reports = await syncAllPackagePricing();
    return NextResponse.json({
      ok: true,
      syncedAt: new Date().toISOString(),
      reports,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "同步計價失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
