import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const thingvellirSpot: TripAttraction = {
  name: PLACE_TW.thingvellir,
  nameEn: "Þingvellir National Park",
  region: "冰島南部",
  subtitle: "板塊裂谷與千年議會遺址交會的黃金圈起點",
  imageUrl: IMG("thingve_Ilir_unsplash_bea6a68605.jpg"),
  galleryImages: [
    IMG("thingve_Ilir_unsplash_bea6a68605.jpg"),
    IMG("thingvellir_unsplash3_4b40480cfd.jpg"),
    IMG("thingvellir_unsplash2_ebd6ece138.jpg"),
  ],
  paragraphs: [
    "冰島歷史與地質的交會點",
    `${PLACE_TW.thingvellir}（Þingvellir National Park）位在雷克雅維克東北方約 40 公里，是${PLACE_TW.goldenCircle}三大景點之一。公園坐落在北美與歐亞板塊分離形成的裂谷邊緣，步道兩側可見明顯的地質斷層，是理解冰島「板塊之上」景觀的最佳入門。`,
    "公元 930 年，冰島議會（Alþingi）在此成立，標誌這座島嶼作為獨立政治體的開端。園內的法律石（Lögberg）傳為早期議會集會處，後世許多重要決議都在這片平原上做出。1930 年辛格維利爾成為冰島第一座國家公園；2004 年列入 UNESCO 世界文化遺產。",
    "園內 Öxarárfoss 瀑布高約 13 公尺，冬季常完全結冰，是冰攀愛好者的熱門點。南側的辛格瓦德拉湖（Þingvallavatn）是冰島最大的天然湖泊，以褐鱒與北極鮭聞名。世界知名的絲浮拉大裂縫（Silfra）也在公園範圍內——北美與歐亞板塊之間的清澈地下水，能見度極高；有證照者可潛水，一般旅客也可參加浮潛行程近距離體驗。",
    "辛格維利爾步道多為碎石與木棧道，夏季人潮較多，建議穿防滑鞋並預留 1–2 小時步行。若與蓋錫爾間歇泉地帶、黃金瀑布同日安排，通常作為黃金圈的第一站或前半段停留點。",
  ],
};
