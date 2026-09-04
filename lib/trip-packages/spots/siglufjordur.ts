import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const siglufjordurSpot: TripAttraction = {
  name: "錫格呂菲厄澤",
  nameEn: "Siglufjörður",
  region: "冰島北部",
  subtitle: "冰島最北端峽灣裡的鯡魚時代小鎮",
  imageUrl: IMG("Siglufjoerdur1_e3da0be444.jpg"),
  galleryImages: [
    IMG("Siglufjoerdur1_e3da0be444.jpg"),
    IMG("Siglufjoerdur2_d671c6668a.jpg"),
    IMG("Siglufjoerdur3_5bb479f6ad.jpg"),
  ],
  paragraphs: [
    "起航之灣的漁業往事",
    `錫格呂菲厄澤（Siglufjörður）是冰島大陸最北的小鎮之一，坐落在同名峽灣內，距${PLACE_TW.akureyri}約 1 小車程，往北約 40 公里即北極圈。`,
    "二十世紀中葉因鯡魚漁業興盛，人口曾達三千，被稱為「世界鯡魚之都」；六十年代資源枯竭後迅速衰落。鯡魚博物館（Sildarminjasafn）記錄這段輝煌與頹敗，曾獲歐洲博物館獎。",
    "今日以小眾深度旅遊見長：夏季可健行黑沙海岸與山徑，冬季滑雪場是冰島頂尖之一，另有泳池、文化活動與寧靜的彩色木屋街景。",
  ],
};
