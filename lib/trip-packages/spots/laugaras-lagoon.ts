import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const laugarasLagoonSpot: TripAttraction = {
  name: "冰島黃金圈新晉Laugarás Lagoon溫泉Birki級別入場票",
  nameEn: "Laugarás Lagoon Birki",
  region: "黃金圈",
  subtitle: "黃金圈沿線的地熱無邊際浴場",
  imageUrl: IMG("laugaras_4f8325fe4c.png"),
  galleryImages: [
    IMG("laugaras_4f8325fe4c.png"),
    IMG("laugaras_infinity_edge_013dc89554.jpg"),
  ],
  paragraphs: [
    "黃金圈新開幕的地熱瀉湖",
    `Laugarás Lagoon 在${PLACE_TW.goldenCircle}沿線，以天然地熱水與無邊際池設計為特色。Birki 級入場票為基本套票，可泡湯並使用園區設施。`,
    "建議事先線上預約時段，並攜帶泳衣與毛巾。可與辛格維利爾、蓋錫爾、黃金瀑布等景點同日安排。",
  ],
};
