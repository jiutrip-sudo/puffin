import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const skaftafellGlacierHikingSpot: TripAttraction = {
  name: "斯卡夫塔冰川健行",
  nameEn: "Skaftafell Glacier Hike",
  region: "冰島東部",
  subtitle: "瓦特納冰川西南麓的藍冰健行",
  imageUrl: IMG("hiking_afe526bc72.png"),
  galleryImages: [
    IMG("hiking_afe526bc72.png"),
    IMG(
      "skaftafell_blue_ice_glacier_walk_iceland_mountain_guides_copyright_bjorgvin_hilmarsson_00d83a4fe2_162052f83a.jpg",
    ),
  ],
  paragraphs: [
    "南岸最受歡迎的冰川健行之一",
    "斯卡夫塔山（Skaftafell）屬瓦特納冰川國家公園，冰川表面剔透呈藍色，也是《星際效應》等影片的取景地。全程約 1.5–2 小時在冰面上行走，由專業冰川嚮導提供冰爪、冰斧、頭盔並解說冰川地質。",
    "請穿防水高筒登山靴與多層保暖衣物。冰川活動僅能在嚮導帶領下進行，切勿自行踏上冰面；集合點通常在斯卡夫塔山旅客中心附近。",
  ],
};
