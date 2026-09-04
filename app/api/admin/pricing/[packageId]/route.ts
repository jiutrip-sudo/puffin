import { NextResponse } from "next/server";
import {
  buildPricingMatrixCsv,
  getPricingPackageDetail,
  listPricingMatrixRows,
  paginateRows,
  type PricingMatrixFilters,
} from "@/lib/admin/pricing-overview";

type RouteContext = {
  params: Promise<{ packageId: string }>;
};

function parseFilters(searchParams: URLSearchParams): PricingMatrixFilters {
  const adultsRaw = searchParams.get("adults");
  return {
    startDateFrom: searchParams.get("startDateFrom") ?? undefined,
    startDateTo: searchParams.get("startDateTo") ?? undefined,
    accommodationTier: searchParams.get("accommodationTier") ?? undefined,
    vehicleTier: searchParams.get("vehicleTier") ?? undefined,
    adults: adultsRaw ? Number.parseInt(adultsRaw, 10) : undefined,
  };
}

export async function GET(request: Request, context: RouteContext) {
  try {
    const { packageId } = await context.params;
    const detail = await getPricingPackageDetail(packageId);

    if (!detail) {
      return NextResponse.json({ error: "找不到套餐" }, { status: 404 });
    }

    const url = new URL(request.url);
    const filters = parseFilters(url.searchParams);
    const page = Number.parseInt(url.searchParams.get("page") ?? "1", 10) || 1;
    const pageSize =
      Number.parseInt(url.searchParams.get("pageSize") ?? "50", 10) || 50;
    const format = url.searchParams.get("format");

    const allRows = listPricingMatrixRows(detail.snapshot, filters);

    if (format === "csv") {
      const csv = buildPricingMatrixCsv(allRows);
      return new NextResponse(csv, {
        headers: {
          "content-type": "text/csv; charset=utf-8",
          "content-disposition": `attachment; filename="${packageId}-pricing.csv"`,
        },
      });
    }

    const paged = paginateRows(allRows, page, pageSize);

    return NextResponse.json({
      packageId,
      config: {
        tripDays: detail.config.tripDurationDays ?? null,
        tourCode: detail.tourCode,
        packageTitle: detail.packageTitle,
        corivoPackageTourId: detail.config.corivo?.packageTourId ?? null,
        depositRate: detail.config.depositRate ?? 0.2,
        tiers: detail.config.tiers.map((tier) => ({
          id: tier.id,
          label: tier.label,
        })),
        vehicleTiers: detail.config.vehicleTiers.map((tier) => ({
          id: tier.id,
          label: tier.label.split("|")[0]?.trim() ?? tier.label,
        })),
      },
      snapshotUpdatedAt: detail.snapshot?.updatedAt ?? null,
      ...paged,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "讀取計價矩陣失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
