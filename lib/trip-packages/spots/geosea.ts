import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const geoseaSpot: TripAttraction = {
  name: "Geosea天然海景溫泉入場票",
  nameEn: "Geosea Geothermal Sea Baths",
  region: "冰島北部",
  subtitle: "胡薩維克懸崖上的海水溫泉",
  imageUrl: IMG("Geosea_6705414f40.png"),
  galleryImages: [
    IMG("Geosea_6705414f40.png"),
    IMG("geosea_d7502be931.jpg"),
  ],
  paragraphs: [
    "俯瞰 Skjálfandi 灣的海景浴場",
    "Geosea 在胡薩維克（Húsavík）北側懸崖，以地熱加熱海水，池溫約 38–39°C，可遠眺海灣與山脈。常與賞鯨行程排在同一天。",
    "夏季開放至午夜，請自備泳衣。入場票不含餐飲；惡劣天氣可能調整營業時間，出發前請查官網。",
  ],
};
