import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const reykholtSpot: TripAttraction = {
  name: "雷克霍特",
  nameEn: "Reykholt",
  region: "冰島西部",
  subtitle: "史諾里故鄉與白銀圈文化重鎮",
  imageUrl: IMG("imgp9586_4_ee8ad0bf2d.jpg"),
  galleryImages: [IMG("imgp9586_4_ee8ad0bf2d.jpg")],
  paragraphs: [
    "冰島中世紀文學的中心",
    "雷克霍特（Reykholt）位在冰島西部，是 13 世紀史詩學者史諾里·斯圖盧松（Snorri Sturluson）的故鄉，當時亦是冰島重要的學術與政治據點。注意：南部另有同名小鎮（番茄農場 Friðheimar 一帶），與西部此處不同。",
    "可參觀史諾里農場遺跡、文化中心和教堂；文化中心有歷史展覽與導覽，開放時間依季節調整。史諾里故居是冰島少數保存良好的中世紀建築之一。",
    `車程約 15 分鐘可至${PLACE_TW.hraunfossar}、${PLACE_TW.barnafoss}與${PLACE_TW.deildartunguhver}，常作西部白銀圈一日行程的文化停靠點。`,
  ],
};
