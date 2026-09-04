import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const hvammsvikTicketSpot: TripAttraction = {
  name: "Hvammsvík溫泉入場票",
  nameEn: "Hvammsvík Hot Springs Admission",
  region: "雷克雅維克",
  subtitle: "鯨魚峽灣畔海景溫泉門票",
  imageUrl: IMG("hvammsvik3_bd62acec28.png"),
  galleryImages: [
    IMG("hvammsvik3_bd62acec28.png"),
    IMG("DJI_0501_7f2b0d2bf6.jpg"),
  ],
  paragraphs: [
    "僅含入場的 Hvammsvík 套票",
    `Hvammsvík 在 Hvalfjörður（鯨魚峽灣），距${PLACE_TW.reykjavik}約 40 分鐘車程。八座溫泉池散布黑沙灘上，溫度約 10–42°C，隨潮汐與海水交融。`,
    "需自行前往（不含巴士接送）。建議事先預約並攜帶泳衣、毛巾；峽灣風大，離池後請迅速保暖。",
  ],
};
