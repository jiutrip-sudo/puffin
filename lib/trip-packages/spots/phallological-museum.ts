import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const phallologicalMuseumSpot: TripAttraction = {
  name: "冰島陰莖博物館",
  nameEn: "Icelandic Phallological Museum",
  region: PLACE_TW.reykjavik,
  subtitle: "雷克雅維克市區獨特的生物與文化博物館",
  imageUrl: IMG("Icelandic_Phallological_Museum_Sign_205618002d.jpg"),
  galleryImages: [
    IMG("Icelandic_Phallological_Museum_Sign_205618002d.jpg"),
    IMG("Icelandic_Phallological_Museum_Exterior_1f841ee2f3.jpg"),
    IMG("Iceland_National_Handball_Team_Penis_in_Icelandic_Phallological_Museum_3d0c12a1cc.jpg"),
    IMG("Icelandic_Phallological_Museum_Animal_Penises_a7d1fcd5af.jpg"),
    IMG("Icelandic_Phallological_Museum_Interior_c417967b1a.jpg"),
  ],
  paragraphs: [
    "以生物多樣性為主題的冷門博物館",
    `冰島陰莖博物館（The Icelandic Phallological Museum）位在${PLACE_TW.reykjavik}市中心，由 Sigurður Hjartarson 於 1997 年創立，從私人收藏發展為國際知名的專題博物館。展品聚焦哺乳動物與部分海洋生物的雄性生殖器標本，從田鼠到鯨魚，呈現不同物種的解剖差異與演化適應。`,
    "館內亦收藏與北歐民間傳說相關的文物，以及當代藝術與工藝作品，從科學與文化兩個角度探討這個在社會中常被迴避的主題。敘事風格直白而不失幽默，適合對自然史、民俗或冰島冷門景點有興趣的旅客。",
    "參觀約需 45 分鐘至 1 小時，可與洛加維格大街、港區行程排在同一天。館內有留言本與主題紀念品。票價與開放時間請以博物館官網或現場公告為準。",
  ],
};
