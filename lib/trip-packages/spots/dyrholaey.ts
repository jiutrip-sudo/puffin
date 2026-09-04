import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const dyrholaeySpot: TripAttraction = {
  name: "迪霍拉里",
  nameEn: "Dyrhólaey",
  region: "冰島南部",
  subtitle: "冰島大陸最南端的海岬與海鳥棲地",
  imageUrl: IMG("Dyrholaey1_38349f5b51.jpg"),
  galleryImages: [
    IMG("Dyrholaey1_38349f5b51.jpg"),
    IMG("Dyrholaey2_d75d7fa72b.jpg"),
    IMG("Dyrholaey3_559b79fe53.jpg"),
  ],
  paragraphs: [
    "門洞島上的燈塔與海拱",
    `迪霍拉里（Dyrhólaey，冰島語意為「門洞島」）是冰島大陸最南端的岬角，海拔約 120 公尺，距${PLACE_TW.vik}與黑沙灘不到 20 分鐘車程。海中矗立著巨大的黑色岩拱，1927 年建成的城堡式燈塔矗立崖頂，每 10 秒閃出白光指引航運。`,
    "自 1978 年起為自然保護區，海鸚（puffin）與絨鴨在此繁殖，5–9 月是最可靠的近距離觀鳥季；即使夏季風雨，也常見海鸚在崖邊活動。向西可眺望綿延的黑色沙岸，地貌由冰河期末水下火山活動塑造而成。",
    "崖邊風大、浪急，請留在標示步道與欄杆內；部分季節為保護鳥類會限制進入上層觀景區，出發前請查詢現場公告。",
  ],
};
