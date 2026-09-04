import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const reykjanesSpot: TripAttraction = {
  name: PLACE_TW.reykjanes,
  nameEn: "Reykjanes",
  region: "雷克雅內斯半島",
  subtitle: "板塊交界帶上的火山、地熱與海岸奇景",
  imageUrl: IMG("reykjanes1_c54b64ad07.jpg"),
  galleryImages: [
    IMG("reykjanes1_c54b64ad07.jpg"),
    IMG("reykjanes2_f3c1b45b38.jpg"),
  ],
  paragraphs: [
    "冰島西南角的火與冰之地",
    `${PLACE_TW.reykjanes}位在冰島最西南部，橫跨北美與歐亞板塊的漂移帶，火山與地熱活動頻繁。2015 年列入 UNESCO 全球地質公園，可見熔岩原野、蒸汽噴口、彩色礦泉與崎嶇海岸線。`,
    "半島上知名景點包括法格拉達爾（Fagradalsfjall）火山健行區、藍湖（Blue Lagoon）、大陸之橋（Bridge Between Continents），以及凱夫拉維克國際機場一帶。多數旅客在抵達或離境前會安排半日環線自駕。",
    "海岸風大、步道可能濕滑；部分地熱區禁止踏入，請遵守標示與圍欄。冬季日照短，建議提早出發並留意天候。",
  ],
};
