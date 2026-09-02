/**
 * 冰島地名權威詞彙表（台灣繁中為 canonical）。
 * 簡中由 localize 層透過 OpenCC + PLACE_CN_OVERRIDES 衍生。
 */
export type IcelandPlace = {
  id: string;
  tw: string;
  /** 簡中覆寫；省略時由 OpenCC(tw) 轉換 */
  cn?: string;
  en: string;
  /** 待淘汰的舊寫法（稽核與 runtime 正規化用） */
  aliases?: string[];
};

export const ICELAND_PLACES: IcelandPlace[] = [
  {
    id: "reykjavik",
    tw: "雷克雅維克",
    cn: "雷克雅未克",
    en: "Reykjavík",
    aliases: ["雷克雅未克", "雷克雅维克"],
  },
  {
    id: "goldenCircle",
    tw: "黃金圈",
    en: "Golden Circle",
    aliases: ["黄金圈"],
  },
  {
    id: "gullfoss",
    tw: "黃金瀑布",
    en: "Gullfoss",
    aliases: ["黄金瀑布"],
  },
  {
    id: "thingvellir",
    tw: "辛格維利爾國家公園",
    en: "Þingvellir National Park",
    aliases: ["辛格維利爾"],
  },
  {
    id: "geysir",
    tw: "蓋錫爾間歇泉地帶",
    cn: "盖锡尔间歇泉地带",
    en: "Geysir",
    aliases: ["盖锡尔间歇泉地带", "盖歇尔", "蓋歇爾", "大間歇泉"],
  },
  {
    id: "seljalandsfoss",
    tw: "塞里雅蘭瀑布",
    cn: "塞里雅兰瀑布",
    en: "Seljalandsfoss",
    aliases: ["塞里雅兰瀑布"],
  },
  {
    id: "skogafoss",
    tw: "斯科加瀑布",
    en: "Skógafoss",
  },
  {
    id: "reynisfjara",
    tw: "黑沙灘",
    en: "Reynisfjara",
    aliases: ["維克黑沙灘"],
  },
  {
    id: "reynisdrangar",
    tw: "雷尼斯岩",
    en: "Reynisdrangar",
    aliases: ["雷尼斯德蘭格海蝕柱", "雷尼斯德兰格海蚀柱"],
  },
  {
    id: "jokulsarlon",
    tw: "傑古沙龍冰河湖",
    cn: "杰古沙龙冰河湖",
    en: "Jökulsárlón",
    aliases: ["杰古沙龙冰河湖"],
  },
  {
    id: "diamondBeach",
    tw: "鑽石沙灘",
    cn: "钻石沙滩",
    en: "Diamond Beach",
    aliases: ["钻石沙滩"],
  },
  {
    id: "vik",
    tw: "維克",
    cn: "维克",
    en: "Vík í Mýrdal",
    aliases: ["維克鎮", "维克", "维克镇"],
  },
  {
    id: "godafoss",
    tw: "眾神瀑布",
    en: "Goðafoss",
  },
  {
    id: "akureyri",
    tw: "阿克雷里",
    en: "Akureyri",
    aliases: ["阿克雷裡"],
  },
  {
    id: "myvatn",
    tw: "米湖",
    en: "Lake Mývatn",
  },
  {
    id: "hraunfossar",
    tw: "熔岩瀑布",
    en: "Hraunfossar",
    aliases: ["赫倫瀑布", "赫伦瀑布"],
  },
  {
    id: "barnafoss",
    tw: "兒童瀑布",
    en: "Barnafoss",
  },
  {
    id: "deildartunguhver",
    tw: "德爾達圖赫菲溫泉",
    cn: "德尔达图赫菲温泉",
    en: "Deildartunguhver",
    aliases: ["德爾達拉通加", "德爾達拉通加溫泉", "德尔达图赫菲温泉"],
  },
  {
    id: "kirkjufell",
    tw: "教會山",
    en: "Kirkjufell",
  },
  {
    id: "snaefellsnes",
    tw: "斯奈山半島",
    en: "Snæfellsnes",
  },
  {
    id: "reykjanes",
    tw: "雷克雅內斯半島",
    en: "Reykjanes",
  },
  {
    id: "silverCircle",
    tw: "西部白銀圈",
    en: "Silver Circle",
  },
  {
    id: "hallgrimskirkja",
    tw: "哈爾格林姆斯教堂",
    en: "Hallgrímskirkja",
  },
  {
    id: "harpa",
    tw: "哈帕音樂廳",
    en: "Harpa",
  },
  {
    id: "blueLagoon",
    tw: "藍湖溫泉",
    cn: "蓝湖温泉",
    en: "Blue Lagoon",
    aliases: ["蓝湖温泉"],
  },
  {
    id: "hofn",
    tw: "赫本",
    cn: "霍芬",
    en: "Höfn",
    aliases: ["霍芬鎮", "霍芬"],
  },
];

export const PLACE_TW = Object.fromEntries(
  ICELAND_PLACES.map((p) => [p.id, p.tw]),
) as Record<string, string>;

/** alias / 舊寫法 → 台灣標準名（最長字串優先，由 build 函式排序） */
export function buildPlaceAliasToTw(): [string, string][] {
  const pairs: [string, string][] = [];
  for (const place of ICELAND_PLACES) {
    for (const alias of place.aliases ?? []) {
      if (alias !== place.tw) {
        pairs.push([alias, place.tw]);
      }
    }
  }
  return pairs.sort((a, b) => b[0].length - a[0].length);
}

export const PLACE_ALIAS_TO_TW = buildPlaceAliasToTw();

/** 台灣標準名 → 簡中（僅需覆寫者；其餘交給 OpenCC） */
export function buildPlaceCnOverrides(): [string, string][] {
  const pairs: [string, string][] = [];
  for (const place of ICELAND_PLACES) {
    if (place.cn && place.cn !== place.tw) {
      pairs.push([place.tw, place.cn]);
    }
  }
  return pairs.sort((a, b) => b[0].length - a[0].length);
}

export const PLACE_CN_OVERRIDES = buildPlaceCnOverrides();

export function normalizePlaceAliases(text: string): string {
  let out = text;
  for (const [alias, tw] of PLACE_ALIAS_TO_TW) {
    out = out.split(alias).join(tw);
  }
  return out;
}
