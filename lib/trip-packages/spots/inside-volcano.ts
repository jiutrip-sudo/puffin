import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const insideVolcanoSpot: TripAttraction = {
  name: "火山內部探險",
  nameEn: "Inside the Volcano",
  region: "冰島西部",
  subtitle: "搭乘升降機深入 Þríhnúkagígur 休眠火山",
  imageUrl: IMG("Benjamin_Hardman_Inside_the_Volcano_5c4549e563.jpg"),
  galleryImages: [
    IMG("Benjamin_Hardman_Inside_the_Volcano_5c4549e563.jpg"),
    IMG("inside_the_volcano_by_bicnick_105c479b81.jpg"),
    IMG("The_Cave_Vidgelmir_5_db28443a4e.jpg"),
    IMG("The_Cave_Vidgelmir_4_0609c7781c.jpg"),
  ],
  paragraphs: [
    "全球少數可進入內部的火山",
    `Þríhnúkagígur 休眠火山在${PLACE_TW.reykjavik}郊外藍山（Bláfjöll）一帶，沉睡了約四千年，1974 年才被發現，2012 年安全設施完善後對外開放。熔岩曾從岩漿室流出，留下巨大的空腔，是全球罕見可搭乘升降機下探的火山體驗。`,
    "從集合點健行約 3.5 公里（45–50 分鐘）抵達火山口，戴上頭盔與安全帶後乘電梯下降約 120 公尺。洞內岩壁呈紅、黃、橙等層狀色彩，底部空間約等同三個籃球場，停留約 30 分鐘並有導覽解說。",
    "結束後通常提供羊肉湯或素食湯。需一定體力完成往返健行，請穿戶外鞋與保暖衣物。",
  ],
};
