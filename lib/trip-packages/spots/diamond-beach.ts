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
    "全年的任何時候都適合來鑽石海灘遊覽打卡。夏季陽光充足，日照時間長，在交通層面上更加安全和便捷，沙灘上的冰塊由於是冰川冰，在夏季也不會融化，反而光芒會更加耀眼。冬季，北大西洋海面狂野不羈，海浪拍打著黑色的沙灘，形成一幅更加壯觀的畫面。冬季的金色日落讓鑽石海灘在白天非常上鏡。幸運的話，您還有機會能夠在鑽石沙灘上看見北極光。不過冬天遊覽要特別注意兩點，一是一定要穿得暖和一些；二是一定要與海浪保持安全距離。",
  ],
};
