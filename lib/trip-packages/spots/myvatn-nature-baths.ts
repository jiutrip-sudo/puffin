import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const myvatnNatureBathsSpot: TripAttraction = {
  name: "米湖天然溫泉入場票",
  nameEn: "Mývatn Nature Baths",
  region: "冰島北部",
  subtitle: "北部乳藍色地熱浴場",
  imageUrl: IMG("myvant_949e057f28_48fd938e84.avif"),
  galleryImages: [
    IMG("myvant_949e057f28_48fd938e84.avif"),
    IMG("myvant_949e057f28.avif"),
  ],
  paragraphs: [
    "常被稱為「北部藍湖」",
    `米湖天然溫泉（Mývatn Nature Baths）在${PLACE_TW.myvatn}湖畔，乳藍色泉水約 36–40°C，富含礦物質。夏季午夜陽光下泡湯別有風味，冬季則有機會邊泡湯邊看極光。`,
    "建議事先預約並攜帶泳衣、毛巾。可與米湖地熱區、眾神瀑布等北部景點同日安排。",
  ],
};
