import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const deildartunguhverSpot: TripAttraction = {
  name: PLACE_TW.deildartunguhver,
  nameEn: "Deildartunguhver",
  region: "冰島西部",
  subtitle: "歐洲流量最大的地熱溫泉之一",
  imageUrl: IMG("Deildartunguhver1_b06c7944aa.jpg"),
  galleryImages: [IMG("Deildartunguhver1_b06c7944aa.jpg")],
  paragraphs: [
    "滾燙泉水與濃霧繚繞的地熱奇觀",
    `${PLACE_TW.deildartunguhver}位在雷克霍特山谷（Reykholtsdalur），是全歐洲出水量最大的地熱溫泉之一，每秒可達約 180 公升，水溫近攝氏 97 度。泉水從覆滿藻類的岩石間噴湧，蒸氣終年不散，周邊地表因礦物沉積呈橘紅色。`,
    "溫泉供應博爾加內斯（Borgarnes）、阿克拉內斯（Akranes）等城鎮的地熱供暖，透過長達 64 公里的管道輸送——冰島地熱資源的規模，在此可見一斑。從雷克雅維克出發約 1.5 小時車程，常與熔岩瀑布、兒童瀑布排在同一日西部行程。",
    "園區設有步道與觀景平台，請留在安全區域：泉水極燙，蒸氣區地面不穩。附近的 Krauma 天然地熱浴場將溫泉水與冰川融水混合，提供適溫泡湯，可作為參觀後的放鬆選項（需另行預約）。",
  ],
};
