import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const vikLavaShowSpot: TripAttraction = {
  name: "維克熔岩秀（ Vík Lava Show）",
  nameEn: "Vík Lava Show",
  region: "冰島南部",
  subtitle: "維克內近距離觀看熔岩流動",
  imageUrl: IMG("lava_show5_c93f919b4e.jpg"),
  galleryImages: [
    IMG("lava_show5_c93f919b4e.jpg"),
    IMG("lava_show9_3b06a5a2b7.jpg"),
  ],
  paragraphs: [
    "南岸途中的室內熔岩表演",
    `${PLACE_TW.vik}鎮上的 Lava Show 以真實熔岩加熱後倒入展區，讓觀眾在安全距離內感受熱度、光色與流動形態，並了解火山活動與冰島地貌。`,
    "建議提前 20 分鐘入場；現場提供護目鏡。兒童需成人陪同，場館設無障礙通道（可事先聯絡）。",
  ],
};
