import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const namafjallSpot: TripAttraction = {
  name: "Námafjall地熱區",
  nameEn: "Námafjall",
  region: "冰島北部",
  subtitle: "米湖東側的硫磺荒原與蒸氣谷",
  imageUrl: IMG("namafjall1_3ac5a450e6.jpg"),
  galleryImages: [
    IMG("namafjall1_3ac5a450e6.jpg"),
    IMG("namafjall2_9f30a871c7.jpg"),
  ],
  paragraphs: [
    "冰島北部的「火星地表」",
    `Námafjall（亦稱 Hverir）在${PLACE_TW.myvatn}東側、1 號公路旁，從遠方即可見蒸氣柱升空。硫磺氣孔、沸泥與礦物沉積形成黃、紅、白交錯的荒原，植被稀少，酸性土壤幾乎無生物存活。`,
    "園區有短程步道（約 2.5 公里、爬升約 100 公尺），可走至較高處俯瞰地熱區與遠處的米湖。硫磺味濃烈，對氣味敏感者請留意；務必留在標示範圍，泉水與泥池極燙。",
    "通常與米湖、眾神瀑布、黛提瀑布排在北部環島行程；停車場就在公路旁，參觀約需 30–60 分鐘。",
  ],
};
