import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const hvammsvikTransferSpot: TripAttraction = {
  name: "Hvammsvík溫泉體驗（含首都接送）",
  nameEn: "Hvammsvík Hot Springs (with transfer)",
  region: "雷克雅維克",
  subtitle: "含雷克雅維克往返巴士的海景溫泉",
  imageUrl: IMG("Hvammsvik_hot_spring_25b328571c.png"),
  galleryImages: [
    IMG("Hvammsvik_hot_spring_25b328571c.png"),
    IMG("Hvammsvik8_0e82bd448c.jpg"),
  ],
  paragraphs: [
    "首都出發的 Hvammsvík 半日行程",
    `從${PLACE_TW.reykjavik}搭巴士約 1 小車程至 Hvalfjörður（鯨魚峽灣）的 Hvammsvík 溫泉。八座溫泉池散布黑沙灘上，水位與溫度隨潮汐變化，可遠眺北大西洋。`,
    "行程通常含往返交通與入場，不含泳衣與毛巾。每日有多個班次，建議事先預約並確認接送時間。",
  ],
};
