import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const flyoverIcelandSpot: TripAttraction = {
  name: "雷克雅維克市區Flyover Iceland飛越冰島4D電影",
  nameEn: "FlyOver Iceland",
  region: "雷克雅維克",
  subtitle: "市區沉浸式 4D 飛行俯瞰冰島全景",
  imageUrl: IMG("flyover_iceland_cover_59d7c22b26.png"),
  galleryImages: [
    IMG("flyover_iceland_cover_59d7c22b26.png"),
    IMG("flyover5_9e879a69cd.jpg"),
  ],
  paragraphs: [
    "不用搭直升機的冰島空中之旅",
    `FlyOver Iceland 位在${PLACE_TW.reykjavik}市中心，以巨型球幕與動感座椅模擬飛行，帶您掠過冰川、瀑布、火山與海岸線，並穿插冰島歷史與神話解說。`,
    "體驗含兩組互動展區與約 9 分鐘主影片，總時長約 40 分鐘。風、霧與氣味等 4D 效果加強沉浸感。",
    "有最低年齡限制，詳情請見現場或官網。適合行程首日快速建立對全島地貌的概覽。",
  ],
};
