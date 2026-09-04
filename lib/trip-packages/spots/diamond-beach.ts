import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const diamondBeachSpot: TripAttraction = {
  name: PLACE_TW.diamondBeach,
  nameEn: "The Diamond Beach",
  region: "冰島東部",
  subtitle: "冰河湖漂來的浮冰，躺在黑沙灘上",
  imageUrl: IMG("diamond_beach_unsplash_11020ebd2f.jpg"),
  galleryImages: [
    IMG("diamond_beach_unsplash_11020ebd2f.jpg"),
    IMG("diamond_beach_unsplash2_8710988286.jpg"),
  ],
  paragraphs: [
    "浮冰與黑沙形成的強烈對比",
    `${PLACE_TW.diamondBeach}（The Diamond Beach，Breiðamerkursandur）位在${PLACE_TW.jokulsarlon}出口河道旁。冰河湖上的浮冰經河水帶向大海，部分碎冰被海浪推回岸邊，散落在黑色沙灘上，在陽光下晶亮閃爍，因而得名。`,
    `冰島以火山地貌聞名，黑色沙灘來自玄武岩長年風化；南岸的${PLACE_TW.reynisfjara}是另一處代表。鑽石沙灘的獨特之處，在於「透明浮冰 × 黑沙」的視覺反差——同一條海岸線上，冰川與大海在此交會。`,
    "全年皆可造訪：夏季日照充足，冰塊在陽光下更為剔透；冬季海浪氣勢磅礡，搭配日落或極光時，畫面格外上鏡。請穿防滑鞋、注意保暖，並與海浪保持安全距離——此處同樣可能出現突如其來的大浪。",
    `建議與${PLACE_TW.jokulsarlon}排在一起：先在瀉湖岸邊看遠方冰川，再步行至鑽石沙灘近距離觀察碎冰。請勿踩踏或搬動浮冰，也避免為了拍照而靠近危險浪區。`,
  ],
};
