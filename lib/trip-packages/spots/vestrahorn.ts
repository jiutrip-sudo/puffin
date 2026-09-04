import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const vestrahornSpot: TripAttraction = {
  name: "西角山",
  nameEn: "Vestrahorn",
  region: "冰島東部",
  subtitle: "Stokksnes 的黑沙灘與山峰倒影",
  imageUrl: IMG("vestrahorn1_de32f96f5d.jpg"),
  galleryImages: [
    IMG("vestrahorn1_de32f96f5d.jpg"),
    IMG("vestrahorn2_9c0c249ea9.jpg"),
    IMG("vestrahorn3_2982012489.jpg"),
  ],
  paragraphs: [
    "冰島東南的攝影聖地",
    `西角山（Vestrahorn）位在${PLACE_TW.hofn}東方約 20 分鐘的 Stokksnes 半島，海拔約 454 公尺，尖銳的輝長岩山峰與黑色沙灘、潟湖倒影，是冰島最具代表性的風景照題材之一。`,
    "此區為私人土地，需在 Viking Café 購票取得入場 QR code。園內有紅、黃、藍三條健行線：紅線約 5.5 公里，經黑沙灘與燈塔；黃線約 6.5 公里，途經仿古維京村（《獵魔人》取景地）；藍線陡峭，僅適合有經驗的登山者。",
    "潮位與風向影響湖面倒影，晴朗無風時最易拍出「天空之鏡」效果。請尊重私人土地規定，勿攀爬未開放岩壁。",
  ],
};
