import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const keflavikSpot: TripAttraction = {
  name: "凱夫拉維克",
  nameEn: "Keflavík",
  region: "雷克雅內斯半島",
  subtitle: "國際機場旁的搖滾與漁港小城",
  imageUrl: IMG("keflavik2_8787ff38e1.jpg"),
  galleryImages: [
    IMG("keflavik2_8787ff38e1.jpg"),
    IMG("keflavik1_caa2c46bb6.jpg"),
    IMG("keflavik3_4b2b5391e2.jpg"),
  ],
  paragraphs: [
    "不止有機場的半島城鎮",
    `凱夫拉維克（Keflavík）在${PLACE_TW.reykjanes}中心，距${PLACE_TW.reykjavik}不到 50 公里。旅客多因凱夫拉維克國際機場（KEF）而認識此地，但鎮上本身有悠久的漁業與音樂傳統。`,
    "比約克（Björk）、Sigur Rós 等音樂人與此地淵源深厚，鎮上有冰島搖滾博物館與相關展覽。昔日北約軍事基地（1951–2006）現已轉型為創新產業與資料中心等用途。",
    "港口風景優美，九月「燈光之夜」有現場演出與煙火。可與藍湖、大陸之橋、法格拉達爾火山等雷克雅內斯景點串成抵離日行程。",
  ],
};
