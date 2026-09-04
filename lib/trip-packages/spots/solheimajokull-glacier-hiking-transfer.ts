import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const solheimajokullGlacierHikingTransferSpot: TripAttraction = {
  name: "索爾黑馬冰川健行（含首都接送）",
  nameEn: "Sólheimajökull Glacier Hike with Transfer",
  region: "冰島南部",
  subtitle: "含雷克雅維克接送的冰川健行",
  imageUrl: IMG("1_b6042fd6ba.png"),
  galleryImages: [
    IMG("1_b6042fd6ba.png"),
    IMG("Myrdalsjoekull_37c906dcd0.jpg"),
  ],
  paragraphs: [
    "含接送的南岸冰川健行",
    `索爾黑馬冰川（Sólheimajökull）在米達爾斯冰原出口，冰面常帶火山灰，呈黑灰藍交錯。本行程含${PLACE_TW.reykjavik}飯店或指定點接送，途中可能停靠${PLACE_TW.skogafoss}、${PLACE_TW.seljalandsfoss}等景點。`,
    "全程約 2.5–3 小時，嚮導提供冰爪、冰斧、頭盔。請穿防水登山靴與保暖衣物；接送時間依當日通知為準。",
  ],
};
