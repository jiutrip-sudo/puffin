import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const kirkjufellSpot: TripAttraction = {
  name: PLACE_TW.kirkjufell,
  nameEn: "Kirkjufell",
  region: PLACE_TW.snaefellsnes,
  subtitle: "形似草帽，出鏡權遊，教會山的魅力已被無數人領略。",
  imageUrl: IMG("kirkjufell1_b2a1018312.jpg"),
  galleryImages: [
    IMG("kirkjufell1_b2a1018312.jpg"),
    IMG("kirkjufell2_26aae9d397.jpg"),
    IMG("kirkjufell3_a34c5b3e82.jpg"),
  ],
  paragraphs: [
    "全冰島最出片的山峰",
    `教會山（Kirkjufell）位於冰島西部的${PLACE_TW.snaefellsnes}之上，高463米，迷人的弧度、小小的尖頂以及植被覆蓋的山峰形似草帽，因此它也被台灣旅客稱為“草帽山”。`,
    "教會山高高聳立在漁港小鎮格倫達菲厄澤（Grundarfjörður）的遠處，是冰島出鏡率最高的山峰，也是世界十大最美山峰之一，同時還是《權力的遊戲》中著名的“箭頭山”。教會山每天吸引著無數旅客和攝影師的到訪，他們無一例外都想在這裡留下一張多彩、別緻又巍美的照片。",
    "當您沿著54號公路向北駛向斯奈山半島時，教會山就會顯現在您的眼前。但請注意不要在路上停車下車拍照。教會山呈近乎完美的圓柱形，山的南側與陸地相連，因此，除了向海的北面，您可以從東西南三個方向欣賞山景。但是，您也可以劃皮划艇行至教會山腳下，從北面欣賞山峰景觀。",
    "在網絡上搜索一番，您會發現絕大多數教會山的照片左側都有一個精緻的瀑布，這就是位於54號公路另一側的教會山瀑布（Kirkjufellsfoss）。教會山瀑布很小，單論景色，它一定不如冰島那些最有名的瀑布，但它的位置讓它與教會山相輔相成，極大地增添了畫面的豐富程度，因此也成為了旅客紛紛而至的景點。",
    "關於教會山的徒步、攝影等資訊，您可以查看頁面下方的常見問題，那裡有更詳細的說明。",
  ],
};
