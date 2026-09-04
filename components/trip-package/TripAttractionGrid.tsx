"use client";

import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { t } from "@/lib/i18n/messages";
import type { TripAttraction } from "@/lib/trip-packages/types";
import { TripSpotCardGrid } from "./TripSpotCardGrid";

type TripAttractionGridProps = {
  attractions: TripAttraction[];
};

export function TripAttractionGrid({ attractions }: TripAttractionGridProps) {
  const locale = useSiteLocale();

  return (
    <TripSpotCardGrid
      items={attractions}
      scrollAriaLabel={t("trip.attractionGrid.scrollAria", locale)}
      cardAriaLabelPrefix="查看景點介紹"
      prevButtonLabel="上一組景點"
      nextButtonLabel="下一組景點"
    />
  );
}
