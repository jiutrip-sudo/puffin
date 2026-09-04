import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const myvatnSpot: TripAttraction = {
  name: PLACE_TW.myvatn,
  nameEn: "Lake Mývatn",
  region: "冰島北部",
  subtitle: "火山地貌、地熱與水鳥共存的北部明珠",
  imageUrl: IMG("myvatn2_c34ac89174.jpg"),
  galleryImages: [
    IMG("myvatn2_c34ac89174.jpg"),
    IMG("myvatn3_409d3572c2.jpg"),
    IMG("myvatn1_aeddb05db2.jpg"),
  ],
  paragraphs: [
    "冰島北部最密集的自然景觀區之一",
    `${PLACE_TW.myvatn}（Lake Mývatn）是冰島第四大湖，長約 9.5 公里、寬約 6.5 公里，湖面散布約 50 座小島。湖名在冰島語中意為「飛蟲湖」，夏季湖畔常有蠓蟲，建議準備頭罩或防蟲網，但不影響欣賞周邊火山地貌的震撼程度。`,
    "約 2300 年前的大規模火山活動熔岩阻塞河道，形成今日湖面。湖區淺而清澈，水生植物與硅藻豐富，北極鮭與多種水鳥在此棲息；夏季有多達十餘種野鴨筑巢，密度在北半球十分罕見。米湖與流出的拉克薩河（Laxá）皆為法定保護區，並列入國際重要濕地。",
    "湖周邊可串聯的景點密集：熔岩地貌（如 Dimmuborgir）、火山口群、地熱區（如 Námaskarð）與天然浴場等，車程多在半小時內，是北部鑽石圈的停留核心。",
    "建議至少安排一整天：上午走地熱與熔岩步道，下午湖畔或泡湯，冬季則需注意路面與風雪。住宿可選湖區或阿克雷里，依次日行程決定。",
  ],
};
