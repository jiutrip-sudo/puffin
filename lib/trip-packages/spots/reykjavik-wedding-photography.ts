import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const reykjavikWeddingPhotographySpot: TripAttraction = {
  name: "雷克雅維克半日寫真 | 婚紗攝影",
  nameEn: "Reykjavík Half-Day Photo Tour",
  region: "雷克雅維克",
  subtitle: "首都地標半日外拍",
  imageUrl: IMG("reykjavik_wedding_photograpghy_f5dee8705d.png"),
  galleryImages: [
    IMG("reykjavik_wedding_photograpghy_f5dee8705d.png"),
    IMG("006_Lf_J_Moly1gdy60pl0elj356o3ggqvh_68b4e37ce1.jpg"),
  ],
  paragraphs: [
    "首都經典取景半日拍攝",
    `攝影團通常在${PLACE_TW.hallgrimskirkja}集合，沿老城彩繪街道、${PLACE_TW.harpa}與海邊步道拍攝，遠眺 Esja 山。適合情侶寫真、婚紗或好友旅拍。`,
    "行程約半日，可另洽化妝造型或環島跟拍升級。請依預約時間抵達，並留意冰島天候對戶外拍攝的影響。",
  ],
};
