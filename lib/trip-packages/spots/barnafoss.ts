import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const barnafossSpot: TripAttraction = {
  name: PLACE_TW.barnafoss,
  nameEn: "Barnafossar",
  region: "冰島西部",
  subtitle: "湍急藍色溪水與冰島民間傳說",
  imageUrl: IMG("barnafoss_west_iceland_3b18a3043e.jpg"),
  galleryImages: [IMG("barnafoss_west_iceland_3b18a3043e.jpg")],
  paragraphs: [
    "熔岩瀑布旁的傳奇小瀑布",
    `${PLACE_TW.barnafoss}（Barnafoss）與${PLACE_TW.hraunfossar}相鄰，同屬赫維塔河系，位在雷克霍特一帶。水流穿過狹窄岩隙，湍急而色澤偏藍綠，與熔岩瀑布的寬幅水幕形成強烈對比。`,
    "瀑布之名來自一則民間傳說：傳說農家兩名孩童在父母前往教堂時離家，足跡在河上石橋處消失；母親悲痛之下詛咒橋樑，不久石橋崩塌（一說為地震所致）。故事真假難考，卻為這處景點增添了人文色彩。",
    "兩座瀑布間有短程步道連通，可與熔岩瀑布合併參觀。河谷濕滑，請穿防滑鞋；冬季結冰時更需放慢步速。",
  ],
};
