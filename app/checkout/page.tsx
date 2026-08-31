import Link from "next/link";
import { CheckoutFlow } from "@/components/checkout/CheckoutFlow";
import { parseCheckoutSession } from "@/lib/checkout/parse-initial-session";
import { getPricingConfig } from "@/lib/trip-pricing/fetch";
import { getAllTripPackages } from "@/lib/trip-packages/registry";

type CheckoutPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function firstParam(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const params = await searchParams;
  const packageId =
    firstParam(params.packageId) ?? "iceland-self-drive-winter-4";

  const pricingConfig = getPricingConfig(packageId);
  const tripPackage = getAllTripPackages().find((p) => p.id === packageId);

  if (!pricingConfig) {
    return (
      <div className="checkout-empty">
        <h1>找不到套餐</h1>
        <Link href="/">返回首頁</Link>
      </div>
    );
  }

  const session = parseCheckoutSession(
    {
      packageId: firstParam(params.packageId),
      packageTitle: firstParam(params.packageTitle),
      startDate: firstParam(params.startDate),
      adults: firstParam(params.adults),
      children: firstParam(params.children),
      infants: firstParam(params.infants),
      accommodationTier: firstParam(params.accommodationTier),
      vehicleTier: firstParam(params.vehicleTier),
    },
    {
      packageId: pricingConfig.packageId,
      packageTitle: tripPackage?.title ?? "冰島行程套餐",
      accommodationTier: pricingConfig.tiers[0]?.id ?? "comfort",
      vehicleTier: pricingConfig.vehicleTiers[0]?.id ?? "cfmn",
      startDate: pricingConfig.bookingDateRange?.min ?? "",
    },
  );

  if (!session) {
    return (
      <div className="checkout-empty">
        <h1>無法開始預訂</h1>
        <p>請先選擇出發日期與旅客人數。</p>
        <Link href={tripPackage?.backHref ?? "/iceland"}>返回行程頁</Link>
      </div>
    );
  }

  return (
    <CheckoutFlow
      pricingConfig={pricingConfig}
      initialSession={session}
      backHref={
        tripPackage
          ? `/trips/${tripPackage.tripKey}`
          : "/trips/iceland/self-drive/winter/4"
      }
    />
  );
}
