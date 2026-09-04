import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const langjokullIceTunnelTransferSpot: TripAttraction = {
  name: "朗格冰川隧道（Langjökull Ice Tunnel）探險含首都接送",
  nameEn: "Langjökull Ice Tunnel with Transfer",
  region: "冰島西部",
  subtitle: "含雷克雅維克接送的冰川隧道一日遊",
  imageUrl: IMG("cover_72748b89c9.png"),
  galleryImages: [
    IMG("cover_72748b89c9.png"),
    IMG("2_cac9f940a9.jpg"),
  ],
  paragraphs: [
    "含接送的朗格冰川隧道探險",
    `從${PLACE_TW.reykjavik}出發，途經${PLACE_TW.hraunfossar}、${PLACE_TW.barnafoss}與${PLACE_TW.deildartunguhver}等西部景點，再換乘巨輪雪地卡車進入朗格冰川（Langjökull）人造隧道，近距離觀察藍色冰層與冰晶。`,
    "全程約一日，嚮導解說冰川地質。請穿保暖防水衣物；隧道內溫度偏低。接送時間依當日通知為準。",
  ],
};
