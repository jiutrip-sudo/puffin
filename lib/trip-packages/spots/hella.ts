import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const hellaSpot: TripAttraction = {
  name: "海拉",
  nameEn: "Hella",
  region: "冰島南部",
  subtitle: "黃金圈與南岸之間的補給小鎮",
  imageUrl: IMG("hella_unsplash1_9d8987892f.jpg"),
  galleryImages: [
    IMG("hella_unsplash1_9d8987892f.jpg"),
    IMG("hella2_147b20cd30.jpg"),
  ],
  paragraphs: [
    "蘭加河沿岸的南部中繼站",
    `海拉（Hella）位在${PLACE_TW.reykjavik}以南約 95 公里，介於塞爾福斯（Selfoss）與霍爾斯沃德呂爾（Hvolsvöllur）之間，屬北蘭加湖市（Rangárþing ytra）人口最多的聚落。`,
    `往東不遠即達${PLACE_TW.seljalandsfoss}、秘密瀑布（Gljúfrabúi）與${PLACE_TW.skogafoss}；往西約 1.5 小車程可進${PLACE_TW.goldenCircle}。許多環島行程會在此過夜，作為黃金圈與南岸瀑布之間的補給點。`,
    "冬季光害較低，是觀賞極光的常選住宿地；若想視野更開闊，可沿蘭加河往海岸方向稍駕離鎮區。",
    "1927 年因北蘭加河橋畔商店興起，後隨水力發電建設與合作社發展成區域商業中心。今日有加油站、超市、餐館、泳池與露營地等基本服務。",
  ],
};
