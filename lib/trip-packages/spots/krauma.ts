import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const kraumaSpot: TripAttraction = {
  name: "Krauma地熱溫泉體驗入場票",
  nameEn: "Krauma Geothermal Baths",
  region: "冰島西部",
  subtitle: "德爾達圖赫菲溫泉旁的地熱浴場",
  imageUrl: IMG("krauma_cover_2e985853a2.png"),
  galleryImages: [
    IMG("krauma_cover_2e985853a2.png"),
    IMG("krauma3_faf0c79f67.jpg"),
  ],
  paragraphs: [
    "以天然熱水與冰川水調溫的浴場",
    `Krauma 在${PLACE_TW.deildartunguhver}旁，距${PLACE_TW.reykjavik}約 1.5 小車程。利用德爾達圖赫菲溫泉約 100°C 的地熱水，混合冰川水調至適浴溫度，水流持續更新，無需添加化學清潔劑。`,
    "園區有六座浴池：五座溫水池（37–42°C）與一座冷水池（5–10°C）。建築以火山岩與木材為主，氛圍寧靜。入場票不含餐飲，請自備泳衣。",
  ],
};
