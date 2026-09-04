import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const vatnajokullSpot: TripAttraction = {
  name: "瓦特納冰川",
  nameEn: "Vatnajökull",
  region: "冰島東部",
  subtitle: "歐洲最大冰川與世界遺產級國家公園",
  imageUrl: IMG("nicola_abraham_n_Qq_B_Xb_Weso_E_unsplash_ca0f843573.jpg"),
  galleryImages: [
    IMG("nicola_abraham_n_Qq_B_Xb_Weso_E_unsplash_ca0f843573.jpg"),
    IMG("vatnajokull1_76898aedf8.jpg"),
    IMG("vatnajokull3_e06c404945.jpg"),
    IMG("vatnajokull2_1632ed10ae.jpg"),
  ],
  paragraphs: [
    "覆蓋冰島約一成面積的冰冠",
    "瓦特納冰川（Vatnajökull）是歐洲最大的冰川，位在冰島東南岸，西起 Lómagnúpur 山、東至赫瓦爾內斯（Hvalnes）一帶。2008 年成立的瓦特納冰川國家公園涵蓋整片冰帽與周邊地形，面積約占冰島國土 13%，並納入原斯卡夫塔山與 Jökulsárgljúfur 等保護區。",
    `公園南部有出口冰川、冰河湖與冰島最高峰華納達爾斯赫努克（Hvannadalshnúkur）；${PLACE_TW.jokulsarlon}與鑽石沙灘的浮冰，正是 Breiðamerkurjökull 冰川退縮的見證。北部 Jökulsá 河孕育黛提瀑布（Dettifoss），Jökulsárgljúfur 峽谷深達 120 公尺。西南部則有覆滿苔蘚的埃爾德熔岩原（Eldhraun）等火山地貌。`,
    "藍冰洞、冰川健行、冰河湖船遊等活動多由此出發。科學家預估在氣候變遷下，冰川將持續退縮；參觀時請遵守公園規定，勿擅自進入未開放冰區。",
  ],
};
