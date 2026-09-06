import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const husavikSpot: TripAttraction = {
  name: "胡薩維克",
  nameEn: "Húsavík",
  region: "冰島北部",
  subtitle: "冰島賞鯨最有名的小港",
  imageUrl: IMG("husavik1_d0f3b53186.jpg"),
  galleryImages: [
    IMG("husavik1_d0f3b53186.jpg"),
    IMG("husavik2_d180e46836.jpg"),
    IMG("husavik3_b070e32e0d.jpg"),
  ],
  paragraphs: [
    "Skjálfandi 灣畔的賞鯨之都",
    "胡薩維克（Húsavík）位在北部 Skjálfandi 灣東岸，是冰島最早有人定居的區域之一，也以賞鯨成功率之高聞名。夏季從港口出海，常可見座頭鯨，偶爾也有小鬚鯨、白喙海豚；具體船班與季節請向當地營運商確認。",
    "港邊的胡薩維克鯨魚博物館展示捕鯨歷史與鯨骨標本；鎮上另有 Geosea 海水溫泉，可泡湯遠眺海面與山脈。",
    "通常與米湖、眾神瀑布、黛提瀑布排在北部環島行程；若自選賞鯨行程，請預留 2–3 小時並注意保暖防風。",
  ],
};
