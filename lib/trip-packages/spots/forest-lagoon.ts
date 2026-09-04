import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const forestLagoonSpot: TripAttraction = {
  name: "Forest Lagoon森林溫泉入場票",
  nameEn: "Forest Lagoon",
  region: "冰島北部",
  subtitle: "阿克雷里近郊的森林地熱浴場",
  imageUrl: IMG("forest_lagoon_55786562e0.webp"),
  galleryImages: [
    IMG("forest_lagoon_55786562e0.webp"),
    IMG("1_c59bc357d9.jpg"),
  ],
  paragraphs: [
    "白樺與松樹環繞的溫泉",
    `森林溫泉（Forest Lagoon）在${PLACE_TW.akureyri}近郊 Eyjafjarðarsveit，大池約 37°C、小池約 40°C，設有池畔酒吧。園區被森林包圍，氛圍與海景溫泉截然不同。`,
    "入場票不含餐飲，請自備泳衣。建議事先預約；可與北部環島行程同日安排。",
  ],
};
