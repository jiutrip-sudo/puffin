import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const skutustadagigarSpot: TripAttraction = {
  name: "Skútustaðagígar偽火山口",
  nameEn: "Skútustaðagígar",
  region: "冰島北部",
  subtitle: "米湖南岸的蒸汽爆炸坑群",
  imageUrl: IMG("Skutustadagigar1_00cfe54f66.jpg"),
  galleryImages: [
    IMG("Skutustadagigar1_00cfe54f66.jpg"),
    IMG("Skutustadagigar3_27c1c3e63b.jpg"),
    IMG("Skutustadagigar2_740a9de3f7.jpg"),
  ],
  paragraphs: [
    "不是火山口，卻長得像火山口",
    `Skútustaðagígar 位在${PLACE_TW.myvatn}南岸，約 2300 年前熔岩流過濕地時，地下水受熱產生蒸氣爆炸，形成碗狀洼地，外觀酷似火山口，因而得名「偽火山口」。夏季草坡綠意盎然，冬季則積雪覆頂，與米湖濕地景觀融為一體。`,
    "停車場就在公路旁，有長約 3 公里環線與 1.5 公里短程步道，平坦好走。此地為鳥類保護區，可見多種水禽；請留在步道內，勿踩踏植被。",
    "通常與米湖、Námafjall 地熱區、眾神瀑布排在北部一日行程。",
  ],
};
