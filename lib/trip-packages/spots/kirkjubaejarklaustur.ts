import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const kirkjubaejarklausturSpot: TripAttraction = {
  name: "教堂鎮",
  nameEn: "Kirkjubæjarklaustur",
  region: "冰島南部",
  subtitle: "南岸環島的中途補給與歷史小鎮",
  imageUrl: IMG("DJI_0443_30e25d42d6.jpg"),
  galleryImages: [
    IMG("DJI_0443_30e25d42d6.jpg"),
    IMG("Kirkjubaejarklaustur1_59009a9dce.jpg"),
    IMG("Kirkjubaejarklaustur2_4bb321bbab.jpg"),
  ],
  paragraphs: [
    "瓦特納冰川西南麓的環島驿站",
    `教堂鎮（Kirkjubæjarklaustur）常住人口約一百五十人，位在瓦特納冰川西南側、1 號公路要道上，往東前往${PLACE_TW.jokulsarlon}的必經之地。名稱可拆為「教堂」「農莊」「修道院」，12 世紀起即有本篤會修道院遺跡，鎮上教堂與文化中心可了解在地歷史。`,
    "周邊小景點包括 Stjórnarfoss、Systrafoss 姐妹瀑布，以及 Kirkjugólf「教堂地磚」——實為風化後露出地面的玄武岩柱。羽毛峽谷（Fjaðrárgljúfur）、拉基火山、矮人岩石等也在一日車程內。",
    "鎮上有超市、加油站與帶熱水浴缸的公共泳池，適合南岸長途自駕中途休整與過夜。",
  ],
};
