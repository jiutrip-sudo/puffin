import { Suspense } from "react";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getRequestLocale } from "@/lib/i18n/server";
import { localizeText } from "@/lib/i18n/localize";
import { t } from "@/lib/i18n/messages";
import { getTripCatalogItemsWithFromPrices } from "@/lib/trip-packages/catalog-server";
import { TripCatalogGrid } from "@/components/trips/TripCatalogGrid";
import { TripsCatalogShell } from "@/components/trips/TripsCatalogShell";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  return buildPageMetadata({
    title: localizeText("冰島行程目錄 | 帕芬假期", locale),
    description: localizeText(
      "一次瀏覽帕芬假期全部冰島自駕與跟團行程，可依類型、季節、天數與路線篩選比較。",
      locale,
    ),
    path: "/trips",
    locale,
  });
}

export default async function TripsPage() {
  const locale = await getRequestLocale();
  const items = await getTripCatalogItemsWithFromPrices(locale);

  return (
    <TripsCatalogShell
      activeLabel={t("nav.trips", locale)}
      variant="compact"
      eyebrow="ICELAND TRIPS"
      title={localizeText("冰島行程", locale)}
      description={localizeText(
        `${items.length} 套精選自駕與跟團行程，可依天數與季節篩選比較。`,
        locale,
      )}
    >
      <Suspense fallback={<p className="text-sm text-foreground/60">載入行程中…</p>}>
        <TripCatalogGrid items={items} layout="sidebar" />
      </Suspense>
    </TripsCatalogShell>
  );
}
