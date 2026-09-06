import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const hauganesSpot: TripAttraction = {
  name: "豪加內斯",
  nameEn: "Hauganes",
  region: "冰島北部",
  subtitle: "埃亞峽灣畔的賞鯨起源小村",
  imageUrl: IMG("Hauganes1_70c88f9e6b.jpg"),
  galleryImages: [
    IMG("Hauganes1_70c88f9e6b.jpg"),
    IMG("Hauganes2_0a76d34b99.jpg"),
    IMG("Hauganes_whale_watching_8d58058bbe.jpg"),
  ],
  paragraphs: [
    "冰島最早商業賞鯨的村落之一",
    `豪加內斯（Hauganes）在埃亞峽灣南岸，屬達爾維克（Dalvík）行政區，距${PLACE_TW.akureyri}以北約 43 公里。人口約一百四十人，漁業、魚品加工與賞鯨並列為主要經濟來源。`,
    "冰島最早的商業賞鯨行程即從此出發，至今仍是北部熱門出海點。峽灣內常見座頭鯨、小鬚鯨、白喙海豚等；亦可搭船前往赫里斯島、格里姆賽島賞鳥。",
    "夏季週末的 Himnaríki 手作市集有羊毛製品、果醬與傳統點心 Kleinur，適合順道小逛。",
  ],
};
