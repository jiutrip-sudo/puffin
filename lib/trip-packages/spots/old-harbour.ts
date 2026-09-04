import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const oldHarbourSpot: TripAttraction = {
  name: "雷克雅維克舊港",
  nameEn: "Reykjavík Old Harbour",
  region: "雷克雅維克",
  subtitle: "海濱散步與出海行程的集合點",
  imageUrl: IMG("Harpa_Reflection_Sunset_d5679e30b9.jpg"),
  galleryImages: [
    IMG("Harpa_Reflection_Sunset_d5679e30b9.jpg"),
    IMG("T_Hufa_in_Old_Harbour_143bcccafb.jpg"),
    IMG("reykjavik2_b97db08584.jpg"),
    IMG("Old_Harbour_Street_a78b64372d.jpg"),
  ],
  paragraphs: [
    "從工業碼頭到文娛海濱",
    "雷克雅維克舊港（Old Harbour）位在市中心北側，20 世紀初建成，曾是漁業與航運重鎮，如今轉型為餐飲、博物館與出海活動的熱區。彩色舊倉庫改作商店與餐廳，木棧道適合傍晚散步，可遠眺海灣與山脈。",
    "哈帕音樂廳與太陽航海者雕塑就在海岸線旁。港區另有 Whales of Iceland 鯨魚博物館、海事博物館（Reykjavík Maritime Museum）等室內選項；觀鯨、海釣、極光船遊等多從此出發。",
    "通常與哈帕、哈爾格林姆斯教堂、洛加維格大街排在同一日；冬季風大，出海前請確認天候與預約狀態。",
  ],
};
