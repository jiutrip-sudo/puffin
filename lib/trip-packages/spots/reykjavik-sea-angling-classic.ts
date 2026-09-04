import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const reykjavikSeaAnglingClassicSpot: TripAttraction = {
  name: "冰島雷克雅維克經典海釣體驗",
  nameEn: "Classic Sea Angling",
  region: "雷克雅維克",
  subtitle: "雷克雅維克海港出海垂釣",
  imageUrl: IMG("sea_angling_in_iceland_81aa88fa48.jpg"),
  galleryImages: [
    IMG("sea_angling_in_iceland_81aa88fa48.jpg"),
    IMG("people_got_fish_from_the_sea_319f1f41d5.jpg"),
  ],
  paragraphs: [
    "適合新手的海港海釣",
    `在${PLACE_TW.reykjavik}海港登上漁船，於北大西洋海域垂釣。無論是否有經驗，船員都會協助裝備與技巧，老少皆宜。`,
    "釣到的魚可能依規定保留部分作為餐點。請留意當日海況與集合地點，並穿著防滑鞋與防風外套。",
  ],
};
