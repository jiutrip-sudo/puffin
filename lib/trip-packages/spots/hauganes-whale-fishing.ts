import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const hauganesWhaleFishingSpot: TripAttraction = {
  name: "豪加內斯（Hauganes）出海賞鯨 & 海釣體驗",
  nameEn: "Hauganes Whale Watching & Sea Angling",
  region: "冰島北部",
  subtitle: "埃亞峣灣的賞鯨兼海釣",
  imageUrl: IMG("hauganes_whale_watching1_f132c3a412.jpg"),
  galleryImages: [
    IMG("hauganes_whale_watching1_f132c3a412.jpg"),
    IMG("hauganes_whale_watching2_c98f4e3e26.jpg"),
  ],
  paragraphs: [
    "賞鯨與海釣合併行程",
    `豪加內斯（Hauganes）在埃亞峽灣南岸，距${PLACE_TW.akureyri}以北約 40 公里，是冰島最早商業觀鯊的村落之一。同船行程可同時海釣與尋找座頭鯨、海豚。`,
    "出海受天候影響，請穿保暖防風衣物。船員會示範釣法；渔獲依當日規定處理。",
  ],
};
