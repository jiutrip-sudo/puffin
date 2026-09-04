import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const reykjavikLavaShowSpot: TripAttraction = {
  name: "雷克雅維克熔岩秀（Reykjavik Lava Show）",
  nameEn: "Reykjavik Lava Show",
  region: "雷克雅維克",
  subtitle: "市中心劇場內近距離觀看熔岩流動",
  imageUrl: IMG("lava_show_cover_f12c6a5f98.png"),
  galleryImages: [
    IMG("lava_show_cover_f12c6a5f98.png"),
    IMG("63d27fc5e788e_96fee2b736.jpg"),
  ],
  paragraphs: [
    "全球少數現場熔岩表演之一",
    `雷克雅維克熔岩秀在${PLACE_TW.reykjavik}市中心，以真實玄武岩熔岩加熱至約 1,100°C 後倒入展廳，安全距離內感受熔岩的熱度、光澤與聲響。熔岩樣本來自 1918 年卡特拉火山噴發。`,
    "主持人同步解說冰島火山地理，並播放教育短片。全程在室內劇場進行，約 1 小時。",
    "建議提前 20 分鐘入場；現場提供護目鏡。兒童需成人陪同，輪椅通道可事先聯絡場館安排。",
  ],
};
