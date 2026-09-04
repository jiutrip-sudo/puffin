import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const eldhraunSpot: TripAttraction = {
  name: "埃爾德熔岩原",
  nameEn: "Eldhraun",
  region: "冰島南部",
  subtitle: "拉基火山噴發後形成的抹茶色苔原",
  imageUrl: IMG("Eldhraun1_2b993446c2.jpg"),
  galleryImages: [
    IMG("Eldhraun1_2b993446c2.jpg"),
    IMG("Eldhraun3_474479cd54.jpg"),
    IMG("Eldhraun2_55b88ff698.jpg"),
  ],
  paragraphs: [
    "覆滿苔蘚的熔岩地毯",
    `埃爾德熔岩原（Eldhraun）位在${PLACE_TW.vik}與教堂鎮（Kirkjubæjarklaustur）之間，面積約 565 平方公里，是世上最大的熔岩苔原之一。1783–1784 年拉基（Laki）火山長達八個月的噴發覆蓋大地，造成當地農牧業重創；數百年後，黑色熔岩上長出厚實綠苔，尖銳岩稜從「地毯」中突起，遠看像抹茶色的起伏原野。`,
    "1969 年阿波羅 11 號機組曾在此進行登月模擬訓練，地貌與月球表面相似。今日多從 1 號公路旁停車拍照，是南岸自駕的經典停靠點。",
    "苔蘚極為脆弱，請留在指定區域與步道，切勿踩踏熔岩地。",
  ],
};
