import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const fridheimarSpot: TripAttraction = {
  name: "番茄農場",
  nameEn: "Friðheimar",
  region: "冰島南部",
  subtitle: "黃金圈旁的地熱溫室農場",
  imageUrl: IMG("Fridheimar2_d71535f8dd.jpg"),
  galleryImages: [
    IMG("Fridheimar2_d71535f8dd.jpg"),
    IMG("Fridheimar1_48768273b3.jpg"),
  ],
  paragraphs: [
    "全年種番茄的家族農場",
    "Friðheimar 是南部的家庭農場，1995 年起在溫室全年種植番茄與黃瓜，利用地熱供暖與二氧化碳促進光合作用，並以生物防治與蜜蜂授粉取代農藥。",
    "溫室內設餐廳，招牌為番茄湯、番茄基底飲品與農場自製醬料；亦可參觀溫室了解高緯度農業。農場亦飼養冰島馬，有馬術表演（需另查時段）。",
    `位在黃金圈與${PLACE_TW.thingvellir}、${PLACE_TW.geysir}、${PLACE_TW.gullfoss}路程適中的位置，距弗呂濟（Flúðir）秘密溫泉約 10 分鐘，適合午餐停靠。建議預約餐廳時段。`,
  ],
};
