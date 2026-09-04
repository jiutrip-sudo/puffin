import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const skyLagoonSpot: TripAttraction = {
  name: "天空之境溫泉",
  nameEn: "Sky Lagoon",
  region: "雷克雅維克",
  subtitle: "首都近郊面朝大西洋的地熱無邊際池",
  imageUrl: IMG("group_in_sky_lagoon_c1a2fc7548.png"),
  galleryImages: [
    IMG("group_in_sky_lagoon_c1a2fc7548.png"),
    IMG("Sky_Lagoon_743552dfc3.jpg"),
    IMG("skylagoon_b97c4aea60.jpg"),
    IMG("skylagoon2_b2eca622df.jpg"),
  ],
  paragraphs: [
    "雷克雅維克旁的七步療法溫泉",
    `天空之境溫泉（Sky Lagoon）在斯凱亞峽灣（Skerjafjörður），距${PLACE_TW.reykjavik}約 15 分鐘車程，2021 年開幕。地熱水溫約 38–40°C，建築採灰藍與深綠色調融入海岸地貌，是藍湖之外首都圈常見的泡湯選擇。`,
    "70 公尺長的無邊際池面向北大西洋，可遠眺凱尼爾山（Keilir）、斯奈菲爾斯冰川與總統府 Bessastaðir；冬季有機會邊泡湯邊賞極光。招牌「七步療法」包含溫泉、冷水池、乾蒸、霧汽房、身體磨砂、濕蒸與漿果飲品。",
    "最低入場年齡 12 歲。海邊風大，建議預留更衣時間並留意官網預約時段。",
  ],
};
