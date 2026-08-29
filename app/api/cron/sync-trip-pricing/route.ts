import { syncAllPackagePricing } from "@/lib/trip-pricing/pricing-snapshot-sync";

function isAuthorized(request: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return process.env.NODE_ENV !== "production";

  const authHeader = request.headers.get("authorization");
  return authHeader === `Bearer ${secret}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return Response.json({ error: "未授權" }, { status: 401 });
  }

  try {
    const reports = await syncAllPackagePricing();
    return Response.json({
      ok: true,
      syncedAt: new Date().toISOString(),
      reports,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "預同步計價時發生錯誤";
    return Response.json({ error: message }, { status: 500 });
  }
}
