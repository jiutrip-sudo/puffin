import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const dettifossSpot: TripAttraction = {
  name: "黛提瀑布",
  nameEn: "Dettifoss",
  region: "冰島北部",
  subtitle: "歐洲水流量最大的瀑布之一",
  imageUrl: IMG("dettifoss2_45da311b3a.jpg"),
  galleryImages: [
    IMG("dettifoss2_45da311b3a.jpg"),
    IMG("dettifoss1_9ceaad5480.jpg"),
    IMG("dettifoss3_70d08e045f.jpg"),
  ],
  paragraphs: [
    "震耳欲聾的灰白巨瀑",
    `黛提瀑布（Dettifoss）在北部鑽石圈路線上，寬約 100 公尺、高 45 公尺，Jökulsá á Fjöllum 河從瓦特納冰川奔流而下，水霧瀰漫、聲響如雷。與秀美的${PLACE_TW.godafoss}相對，常被戲稱為「美女與野獸」組合。`,
    "東岸（864 號公路）與西岸（862 號公路）各有觀景台，可擇一或兩側都看；步道濕滑，請穿防滑鞋。上游約 1 公里有 Selfoss 瀑布，下游有 Hafragilsfoss，可安排短程健行串連。",
    "冬季部分道路可能封閉，出發前請查詢路況與公園公告。",
  ],
};
