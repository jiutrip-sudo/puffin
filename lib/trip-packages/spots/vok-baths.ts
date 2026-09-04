import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const vokBathsSpot: TripAttraction = {
  name: "東部Vök Baths湖上溫泉入場票",
  nameEn: "Vök Baths",
  region: "冰島東部",
  subtitle: "Egilsstaðir 近郊的湖上地熱浴場",
  imageUrl: IMG("woman_enjoy_vok_baths_potrait_e256a6821f.png"),
  galleryImages: [
    IMG("woman_enjoy_vok_baths_potrait_e256a6821f.png"),
    IMG("vok_baths_a66fee57b3.jpg"),
  ],
  paragraphs: [
    "冰島東部少見的湖上溫泉",
    "Vök Baths 在 Urriðavatn 湖面上，距 Egilsstaðir 約 5 公里。兩座六角形溫水池與岸上熱水池以木棧道相連，另有桑拿與湖邊酒吧。",
    "利用天然地熱加熱，可邊泡湯邊眺望湖面與峣灣山景。入場票不含餐飲，請自備泳衣；開放時間依季節調整，出發前請查詢官網。",
  ],
};
