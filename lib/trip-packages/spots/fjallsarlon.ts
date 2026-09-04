import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const fjallsarlonSpot: TripAttraction = {
  name: "小冰河湖",
  nameEn: "Fjallsárlón",
  region: "冰島東部",
  subtitle: "瓦特納冰川南緣的靜謐浮冰湖",
  imageUrl: IMG("1_Fjallsarlon_Iceberg_Boat_Tours_glacier_lagoon_1_435265ceb2.jpg"),
  galleryImages: [
    IMG("1_Fjallsarlon_Iceberg_Boat_Tours_glacier_lagoon_1_435265ceb2.jpg"),
    IMG("Fjallsarlon1_6087fe43ca.jpg"),
    IMG("Fjallsarlon2_d0ce2eabaa.jpg"),
  ],
  paragraphs: [
    "傑古沙龍西側的姊妹冰河湖",
    `小冰河湖（Fjallsárlón）位在${PLACE_TW.jokulsarlon}以西約 10 公里，瓦特納冰川（Vatnajökull）南緣。Fjallsjökull 冰川舌伸入湖中，浮冰帶藍色與灰黑火山紋路，因不與大海相通，冰山多在湖心慢慢融化。`,
    "相較傑古沙龍人潮較少，氛圍更安靜。可乘小船近距離觀察浮冰，偶有海豹現身；冰塊脫落墜湖時聲響震撼。",
    "湖畔有冰霜餐廳（Fjallsárlón Frost Restaurant），可邊用餐邊眺望湖面。夏季船遊為主要體驗方式；直升機行程則可俯瞰小冰河湖、傑古沙龍與瓦特納冰川全景。",
  ],
};
