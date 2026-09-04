import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const vatnajokullCrystalPalaceSpot: TripAttraction = {
  name: "瓦特納冰川水晶宮藍冰洞探險",
  nameEn: "Crystal Palace Blue Ice Cave",
  region: "冰島東部",
  subtitle: "杰古沙龍出發的晶藍冰洞",
  imageUrl: IMG("Blue_Ice_Cave_e3d0b17918.png"),
  galleryImages: [
    IMG("Blue_Ice_Cave_e3d0b17918.png"),
    IMG("8_27559f4c70.jpg"),
  ],
  paragraphs: [
    "近年最受歡迎的藍冰洞之一",
    `「水晶宮」冰洞位在瓦特納冰川（Vatnajökull）內，常從${PLACE_TW.jokulsarlon}乘超級吉普前往冰川集合點。古老冰層擠出氣泡後折射呈深邃晶藍，洞壁如琉璃殿堂。`,
    "僅冬季氣溫穩定時開放；進洞需冰爪、頭盔並全程跟隨嚮導。請穿防水高筒靴與多層保暖衣物，出發前確認當日天候與行程公告。",
  ],
};
