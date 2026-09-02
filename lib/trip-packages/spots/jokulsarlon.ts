import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const jokulsarlonSpot: TripAttraction = {
  name: PLACE_TW.jokulsarlon,
  nameEn: "Jökulsárlón",
  region: "冰島東部",
  subtitle: "在壯觀的傑古沙龍冰河湖親身體驗冰島的自然奇觀。",
  imageUrl: IMG("DSC_00389_4_cadb104463.jpg"),
  galleryImages: [
    IMG("DSC_00389_4_cadb104463.jpg"),
    IMG("jokulsarlon_unsplash4_afb37701fc.jpg"),
    IMG("jokulsarlon_unsplash6_8247d88371.jpg"),
    IMG("jokulsarlon_unsplash5_67dfcff32b.jpg"),
    IMG("jokulsarlon_unsplash2_3ff49270dd.jpg"),
  ],
  paragraphs: [
    "冰島“皇冠上的明珠”",
    "傑古沙龍冰河湖（Jökulsárlón）是瓦特納冰川（Vatnajökull）南部出口冰川Breiðamerkurjökull冰川的一片瀉湖，靠近冰島1號環島公路，距離雷克雅維克約370公里，是冰島最偉大的自然奇觀之一。",
    "冰河湖的歷史不久，大約在20世紀30年代形成，氣候變暖是其主要成因。巨大的冰塊不斷從Breiðamerkurjökull冰川上斷裂掉落，漂浮在湖面上。湖面不寬，但深達250米，是冰島最深的湖泊。",
    "傑古沙龍冰河湖被《孤獨星球》列為此生必去景點之一。",
    "從水上游覽傑古沙龍冰河湖是最有趣且壯觀的方式。許多人喜歡乘船遊覽，因為這樣既能欣賞冰川湖，又能穿梭在冰山之間航行。有兩種船型——水陸兩棲船或衝鋒艇——可供選擇。其中最為熱門的選項就是傑古沙龍冰河湖水陸兩棲船遊。如果您想要更加沉浸式的體驗，那麼可以試試皮划艇項目，親手划船穿越鏡面般的水域，欣賞其充滿藍白色調的超現實環境。",
    "眾多流行文化的名篇曾在傑古沙龍冰河湖留下印跡，《007之雷霆殺機》和《007之擇日而亡》的動作場面在這裡攝製，《勞拉：古墓麗影》《蝙蝠俠：俠影之謎》以及綜藝《極速前進》等諸多頂級的製作都曾在此取景拍攝。",
  ],
};
