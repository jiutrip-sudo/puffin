import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const hraunfossarSpot: TripAttraction = {
  name: PLACE_TW.hraunfossar,
  nameEn: "Hraunfossar",
  region: "冰島西部",
  subtitle: "熔岩台地上滲出的銀白色水幕群",
  imageUrl: IMG("3_H6_A7791_4395de2b82.jpg"),
  galleryImages: [
    IMG("3_H6_A7791_4395de2b82.jpg"),
    IMG("hraunfossar1_f201d71a46.webp"),
    IMG("hraunfossar2_456cb6e815.jpg"),
    IMG("DJI_0927_b298ae6a19.jpg"),
  ],
  paragraphs: [
    "從熔岩地層滲出的瀑布群",
    `${PLACE_TW.hraunfossar}（Hraunfossar）位在冰島西部雷克霍特（Reykholt）附近，距雷克雅維克約 1 小時 40 分車程，是西部白銀圈（Silver Circle）的代表景點。與一般單道瀑布不同，這裡是上百條溪流從熔岩台地邊緣滲出，形成寬達數百公尺的柔和水幕，遠看像從地下「長出」的水流。`,
    "水源來自赫維塔河（Hvítá），上游連接 Hallmundarhraun 熔岩原的地下水系。觀景台可俯瞰熔岩瀑布、河道與對岸林木；1891 年修建的人行橋經多次整修，仍可步行至相鄰的兒童瀑布。",
    "熔岩瀑布與兒童瀑布停車場相鄰，通常安排同一停靠點一次造訪。步道平坦，適合親子與長者；夏季綠意濃，秋季色彩豐富。請留在指定步道，勿攀爬濕滑岩壁。",
  ],
};
