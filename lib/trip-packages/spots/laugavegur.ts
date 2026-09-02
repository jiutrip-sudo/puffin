import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const laugavegurSpot: TripAttraction = {
  name: "洛加維格大街",
  nameEn: "Laugavegur Street",
  region: PLACE_TW.reykjavik,
  subtitle: "在雷克雅維克最著名的街道，感受冰島風情與現代都市生活的完美融合。",
  imageUrl: IMG("Colorful_street_view_of_Laugavegur_c7f18f046f.jpg"),
  galleryImages: [
    IMG("Colorful_street_view_of_Laugavegur_c7f18f046f.jpg"),
    IMG("Shops_on_Laugavegur_6b7902c6fc.jpg"),
    IMG("Sunrise_in_Laugavegur_0255fdfdd7.jpg"),
    IMG("vivid_graffiti_on_Laugavegur_1418332f75.jpg"),
  ],
  paragraphs: [
    "在短短的幾個街區內，聚集著這個國家最有趣的設計、美食與商店。",
    "洛加維格大街（Laugavegur）位於雷克雅維克市中心，是這座城市最古老且最充滿活力的街道之一。這條繁忙的街道以其多樣化的商店、咖啡館、餐館和夜生活而出名，是當地居民和旅客的最愛目的地。",
    "漫步在洛加維格大街上，旅客可以欣賞到冰島傳統文化與現代都市生活的完美融合。街道兩旁色彩斑斕的建築中，有各種精品店，提供從本地時尚設計到奇特紀念品的一切。藝術畫廊和街頭藝術也為這充滿活力的氛圍增添了創意氣息。",
    "洛加維格大街不僅僅是一個購物目的地，還是一次文化體驗。街道全年舉辦各種節日和活動，使其充滿了生機與活力。無論您是想享受美食、尋找獨特的冰島工藝品，還是隻是想沉浸在熱鬧的氛圍中，這裡都能滿足您的需求。",
  ],
};
