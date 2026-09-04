import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const katlaIceCaveSpot: TripAttraction = {
  name: "卡特拉冰洞探險（維克出發）",
  nameEn: "Katla Ice Cave",
  region: "冰島南部",
  subtitle: "全年可進的藍黑層疊冰洞",
  imageUrl: IMG("Katla_Ice_Cave_e029f3b2be.png"),
  galleryImages: [
    IMG("Katla_Ice_Cave_e029f3b2be.png"),
    IMG("katla_ice_cave_55d1ca5449.jpg"),
  ],
  paragraphs: [
    "少數四季開放的冰洞",
    `卡特拉冰洞在米爾達斯冰川（Mýrdalsjökull）的 Kötlujökull 冰舌下，${PLACE_TW.vik}集合後乘超級吉普前往。冰洞因火山灰與冰層交疊呈藍黑幽光，有別於冬季限定的水晶藍冰洞。`,
    "全程約 3 小時，含 1–1.5 小時健行；嚮導提供冰爪、頭盔並解說卡特拉火山地質。集合點通常在維克 Icewear 停車場一帶，請提前 20–30 分鐘抵達。",
  ],
};
