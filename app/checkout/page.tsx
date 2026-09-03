import Link from "next/link";
import { CheckoutFlow } from "@/components/checkout/CheckoutFlow";
import { parseCheckoutSession } from "@/lib/checkout/parse-initial-session";
import { getDefaultVehicleTier } from "@/lib/trip-pricing/calculate";
import { getPricingConfig } from "@/lib/trip-pricing/fetch";
import { resolveDefaultStartDate } from "@/lib/trip-pricing/validate-booking-date";
import { getAllTripPackages } from "@/lib/trip-packages/registry";
import { getRequestLocale } from "@/lib/i18n/server";
import { localizeDeep, localizeText } from "@/lib/i18n/localize";
import { localePath } from "@/lib/i18n/paths";
import { getTripPackageHref } from "@/lib/trip-options";

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
  const locale = await getRequestLocale();
  const params = await searchParams;
  const packageId =
    firstParam(params.packageId) ?? "iceland-self-drive-winter-4";

  const pricingConfig = getPricingConfig(packageId);
  const tripPackage = getAllTripPackages().find((p) => p.id === packageId);

  if (!pricingConfig) {
    return (
      <div className="checkout-empty">
        <h1>{localizeText("找不到套餐", locale)}</h1>
        <Link href={localePath("/", locale)}>
          {localizeText("返回首頁", locale)}
        </Link>
      </div>
    );
  }

  const localizedPricing = localizeDeep(pricingConfig, locale);
  const localizedPackage = tripPackage
    ? localizeDeep(tripPackage, locale)
    : undefined;

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
      packageId: localizedPricing.packageId,
      packageTitle: localizedPackage?.title ?? localizeText("冰島行程套餐", locale),
      accommodationTier: localizedPricing.tiers[0]?.id ?? "comfort",
      vehicleTier: getDefaultVehicleTier(localizedPricing),
      startDate: resolveDefaultStartDate(localizedPricing),
    },
  );

  if (!session) {
    return (
      <div className="checkout-empty">
        <h1>{localizeText("無法開始預訂", locale)}</h1>
        <p>{localizeText("請先選擇出發日期與旅客人數。", locale)}</p>
        <Link href={localePath(localizedPackage?.backHref ?? "/iceland", locale)}>
          {localizeText("返回行程頁", locale)}
        </Link>
      </div>
    );
  }

  return (
    <CheckoutFlow
      pricingConfig={localizedPricing}
      initialSession={session}
      backHref={
        localizedPackage
          ? getTripPackageHref(localizedPackage.tripKey, locale)
          : localePath("/trips/iceland/self-drive/winter/4", locale)
      }
    />
  );
}
