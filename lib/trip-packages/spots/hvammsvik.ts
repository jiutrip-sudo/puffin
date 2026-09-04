import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const hvammsvikSpot: TripAttraction = {
  name: "Hvammsvík溫泉",
  nameEn: "Hvammsvík Hot Springs",
  region: "雷克雅維克",
  subtitle: "鯨魚灣畔隨潮汐變化的海景溫泉",
  imageUrl: IMG("hvammsvik1_westiceland_9962a9b5e7.webp"),
  galleryImages: [
    IMG("hvammsvik1_westiceland_9962a9b5e7.webp"),
    IMG("hvammsvik2_westiceland_fe0d49cccc.webp"),
    IMG("hvammsvik2_3418be19dc.webp"),
    IMG("hvammsvik1_41295ebdee.webp"),
  ],
  paragraphs: [
    "首都近郊的海岸地熱浴場",
    `Hvammsvík 溫泉在 Hvalfjörður（鯨魚峽灣），距${PLACE_TW.reykjavik}約 45 分鐘車程。2022 年開幕，八座設計感溫泉池散布在黑沙灘上，溫度與水位會隨北大西洋潮汐起伏——地下約 1,400 公尺的地熱水與海水在池中交融。`,
    "需步行一小段小路才能抵達，因此比一般市區溫泉更安靜。晴天可泡湯望海，冬季亦有機會看見極光。園區另有 Stormur Bistro 與住宿設施。",
    "建議事先預約並攜帶泳衣、毛巾；峽灣風大，離池後請迅速保暖。",
  ],
};
