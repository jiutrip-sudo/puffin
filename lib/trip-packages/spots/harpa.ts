import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const harpaSpot: TripAttraction = {
  name: PLACE_TW.harpa,
  nameEn: "Harpa",
  region: PLACE_TW.reykjavik,
  subtitle: "雷克雅維克海岸線上的一顆璀璨明珠",
  imageUrl: IMG("Harpa_Exterior_765d2cad4e.jpg"),
  galleryImages: [
    IMG("Harpa_Exterior_765d2cad4e.jpg"),
    IMG("Harpa_Reflection_Sunset_d5679e30b9.jpg"),
    IMG("Harpa_Concert_Hall_and_Ferry_66cf578f72.jpg"),
    IMG("Harpa_and_Statue_ea54cb28e1.jpg"),
  ],
  paragraphs: [
    "在哈帕音樂廳體會冰島現代建築與文化交匯的瑰寶",
    "雷克雅維克的哈帕音樂廳（Harpa）是冰島首都雷克雅維克的一顆璀璨明珠，其獨特的建築風格和豐富多彩的文化活動使其成為這座城市的文化中心和地標性建築之一。",
    "哈帕音樂廳坐落於雷克雅維克市中心的海濱，其外觀設計極富未來感，由丹麥和冰島的建築師共同打造。建築外牆由玻璃和金屬構成，呈現出猶如冰島大自然中冰塊和火山岩石般的迷人紋理，彷彿是一座巨大的藝術品。夜晚時分，哈帕音樂廳燈火輝煌，反射出令人驚豔的光影效果，成為海濱線上的一道獨特風景線。",
    "走進哈帕音樂廳，人們會被其內部設計的美麗和精緻所折服。大廳空間寬敞明亮，採用了現代主義的設計風格，配以優雅的裝飾和舒適的座椅，為觀眾提供了一流的觀演體驗。音樂廳內設有多個演出廳和會議室，經常舉辦各類音樂會、戲劇表演、展覽和會議活動，為當地居民和旅客提供了豐富多彩的文化娛樂選擇。",
    "除了演出活動，哈帕音樂廳還是一個引人入勝的市民文化中心。在這裡，人們可以參加音樂和舞蹈課程，參觀藝術展覽光。無論是文化愛好者還是普通旅客，都能在哈帕音樂廳找到屬於自己的樂趣和體驗。",
  ],
};
