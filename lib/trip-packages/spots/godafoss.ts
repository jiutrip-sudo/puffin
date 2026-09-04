import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const godafossSpot: TripAttraction = {
  name: PLACE_TW.godafoss,
  nameEn: "Goðafoss",
  region: "冰島北部",
  subtitle: "鑽石圈上藍綠色水幕與千年宗教傳說",
  imageUrl: IMG("godafoss3_54ff933f33.jpg"),
  galleryImages: [
    IMG("godafoss3_54ff933f33.jpg"),
    IMG("godafoss2_004851286a.jpg"),
    IMG("godafoss1_423882b152.jpg"),
  ],
  paragraphs: [
    "冰島北部最上鏡的瀑布之一",
    `${PLACE_TW.godafoss}（Goðafoss）位在一號公路旁，介於${PLACE_TW.akureyri}與${PLACE_TW.myvatn}之間，是北部鑽石圈（Diamond Circle）的核心景點。Skjálfandafljót 河的冰川融水從約 12 公尺高的弧形崖壁落下，寬約 30 公尺，水流在潭中翻攪出藍綠色漩渦，晴天時尤為鮮明。`,
    "瀑布之名來自公元 1000 年左右的宗教轉折：當時法律演講人 Þorgeir Þorkelsson 在爭議後宣布冰島皈依基督教，同時仍容許部分舊俗；傳說他將北歐神像投入河中，瀑布因而被稱為「眾神瀑布」。中央黑色岩柱將水幕一分為二，民間亦將其與這段傳說相連。",
    "河谷兩岸皆有停車場與步道，西側步行距離較短，可近距離感受水霧；東側視角較開闊，適合拍攝全景。園區設有簡易服務設施，夏季車流較大，建議預留 30–45 分鐘。",
    "若自阿克雷里南下或從米湖北上，眾神瀑布常與胡薩維克、黛提瀑布等北部景點串成一日行程；冬季平台可能結冰，請留在主步道並注意防滑。",
  ],
};
