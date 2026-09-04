import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const perlanMuseumSpot: TripAttraction = {
  name: "珍珠樓博物館（Perlan Museum）入場票",
  nameEn: "Perlan Museum",
  region: "雷克雅維克",
  subtitle: "人造冰洞、極光秀與 360° 觀景台",
  imageUrl: IMG("Perlan_b834e5a735.jpg"),
  galleryImages: [
    IMG("Perlan_b834e5a735.jpg"),
    IMG("Perlan_3fa813d424.jpg"),
  ],
  paragraphs: [
    "Öskjuhlíð 山上的冰島自然博物館",
    `珍珠樓（Perlan）在${PLACE_TW.reykjavik} Öskjuhlíð 丘頂，入場可參觀人造冰隧道、火山與地熱展區「自然之力」，以及天文館極光影片《Áróra》（8K 投影）。中庭 Styrmir 間歇泉定時噴水，頂層有 360° 城市與海灣觀景台。`,
    "從市中心步行約 30 分鐘，或短程搭車即可抵達。適合作為抵達或離境前快速了解冰島自然史的一站。",
    "各展區開放時間與語音導覽請以官網公告為準。",
  ],
};
