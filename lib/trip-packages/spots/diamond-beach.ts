import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const diamondBeachSpot: TripAttraction = {
  name: PLACE_TW.diamondBeach,
  nameEn: "The Diamond Beach",
  region: "冰島東部",
  subtitle: "雕琢於大海之中，閃耀在陽光之下。親身前往鑽石沙灘，捕捉千年冰山的異世景象。",
  imageUrl: IMG("diamond_beach_unsplash_11020ebd2f.jpg"),
  galleryImages: [
    IMG("diamond_beach_unsplash_11020ebd2f.jpg"),
    IMG("diamond_beach_unsplash2_8710988286.jpg"),
  ],
  paragraphs: [
    "當冰山遇上黑沙灘",
    `鑽石沙灘（The Diamond Beach）的原名是Breiðamerkursandur沙灘，位於冰島南部，瓦特納冰川（Vatnajökull）南端${PLACE_TW.jokulsarlon}附近。鑽石沙灘的得名是因為沙灘上晶瑩剔透的透明體，而這些實際上並不是鑽石，而是傑古沙龍冰河湖上的漂浮的冰山隨河流流向大西洋中，擱淺在了黢黑的沙灘上。伴隨著洶湧的大西洋海浪，透亮的冰山與暗黑的沙灘透露著一絲詭譎異世的氣氛。`,
    `冰島以黑沙灘聞名於世，而鑽石海灘也當然不是冰島唯一的黑色海灘，其中最有名的黑沙灘之一當屬位於${PLACE_TW.vik}附近的${PLACE_TW.reynisfjara}。這些黑沙灘的形成得歸因於冰島的火山地貌。當火山熔岩與冰冷的海水接觸後迅速冷卻形成玄武岩，隨著時間的推移，碎裂的玄武岩變得越來越小，最終變成了沙子。`,
    "全年的任何時候都適合造訪鑽石海灘。夏季陽光充足，日照時間長，交通也較為便利安全；沙灘上的冰塊來自冰川，夏季也不會融化，反而在陽光下更加耀眼。冬季北大西洋海面氣勢磅礡，海浪拍打黑色沙灘，景色更為壯觀；金色日落也讓白天格外上鏡。幸運的話，還有機會在鑽石海灘上看見北極光。冬季造訪請務必穿暖，並與海浪保持安全距離。",
  ],
};
