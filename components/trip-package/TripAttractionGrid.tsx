import type { TripAttraction } from "@/lib/trip-packages/types";
import { TripSpotCardGrid } from "./TripSpotCardGrid";

type TripAttractionGridProps = {
  attractions: TripAttraction[];
};

export function TripAttractionGrid({ attractions }: TripAttractionGridProps) {
  return (
    <TripSpotCardGrid
      items={attractions}
      scrollAriaLabel="景點高光，可左右滑動瀏覽"
      cardAriaLabelPrefix="查看景點介紹"
      prevButtonLabel="上一組景點"
      nextButtonLabel="下一組景點"
    />
  );
}
