import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const skyLagoonTransferSpot: TripAttraction = {
  name: "Sky Lagoon 天空之境溫泉7步療法純享體驗含首都接送",
  nameEn: "Sky Lagoon Pure Lite with Transfer",
  region: "雷克雅維克",
  subtitle: "含七步療法與首都接送",
  imageUrl: IMG("skylagoon_003a1d7932.png"),
  galleryImages: [
    IMG("skylagoon_003a1d7932.png"),
    IMG("group_in_sky_lagoon_ebb8c6cc79_4a2e08027e.webp"),
  ],
  paragraphs: [
    "含接送的 Sky Lagoon 套票",
    `Sky Lagoon 在${PLACE_TW.reykjavik}近郊，面向大西洋的無邊際溫泉。套票含招牌七步療法：溫泉、冷水、桑拿、霧汽、身體磨砂、濕蒸與飲品，並含首都往返交通。`,
    "最低入場年齡 12 歲。請事先預約並攜帶泳衣、毛巾；接送時間依營運商班次為準。",
  ],
};
