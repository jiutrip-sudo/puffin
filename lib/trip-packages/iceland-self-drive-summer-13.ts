import type { TripPackage } from "./types";
import { siglufjordurSpot } from "./spots/siglufjordur";
import { reykjanesSpot } from "./spots/reykjanes";
import { blonduosSpot } from "./spots/blonduos";
import { dettifossSpot } from "./spots/dettifoss";
import { husavikSpot } from "./spots/husavik";
import { hvammstangiSpot } from "./spots/hvammstangi";
import { egilsstadirSpot } from "./spots/egilsstadir";
import { barnafossSpot } from "./spots/barnafoss";
import { akureyriSpot } from "./spots/akureyri";
import { myvatnSpot } from "./spots/myvatn";
import { godafossSpot } from "./spots/godafoss";
import { kirkjufellSpot } from "./spots/kirkjufell";
import { gullfossSpot } from "./spots/gullfoss";
import { geysirSpot } from "./spots/geysir";
import { thingvellirSpot } from "./spots/thingvellir";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import { reykjavikSpot } from "./spots/reykjavik";
import {
  icelandSelfDriveSummer13Day1Highlights,
  icelandSelfDriveSummer13Day1OptionalActivities,
} from "./iceland-self-drive-summer-13-day1-cards";
import {
  icelandSelfDriveSummer13Day2Highlights,
  icelandSelfDriveSummer13Day2OptionalActivities,
  icelandSelfDriveSummer13Day3Highlights,
  icelandSelfDriveSummer13Day3OptionalActivities,
  icelandSelfDriveSummer13Day4Highlights,
  icelandSelfDriveSummer13Day4OptionalActivities,
  icelandSelfDriveSummer13Day5Highlights,
  icelandSelfDriveSummer13Day5OptionalActivities,
  icelandSelfDriveSummer13Day6Highlights,
  icelandSelfDriveSummer13Day6OptionalActivities,
  icelandSelfDriveSummer13Day7Highlights,
  icelandSelfDriveSummer13Day7OptionalActivities,
  icelandSelfDriveSummer13Day8Highlights,
  icelandSelfDriveSummer13Day8OptionalActivities,
  icelandSelfDriveSummer13Day9Highlights,
  icelandSelfDriveSummer13Day9OptionalActivities,
  icelandSelfDriveSummer13Day10Highlights,
  icelandSelfDriveSummer13Day10OptionalActivities,
  icelandSelfDriveSummer13Day11Highlights,
  icelandSelfDriveSummer13Day11OptionalActivities,
  icelandSelfDriveSummer13Day12Highlights,
  icelandSelfDriveSummer13Day12OptionalActivities,
  icelandSelfDriveSummer13Day13Highlights,
  icelandSelfDriveSummer13Day13OptionalActivities,
} from "./iceland-self-drive-summer-13-days2-13-cards";

export const icelandSelfDriveSummer13: TripPackage = {
  id: "iceland-self-drive-summer-13",
  tripKey: "iceland/self-drive/summer/13",
  slug: "13-days-around-iceland-summer-self-drive-package-with-snaefellsnes-and-golden-circle",
  tourCode: "SSD-131",
  title: "13 天 12 夜冰島夏季深度環島自駕遊",
  subtitle: "1號公路 & 雷克雅內斯半島",
  duration: { days: 13, nights: 12 },
  season: { label: "夏季", months: "4 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "自駕",
    tourCode: "SSD-131",
  },
  eyebrow: "冰島集合 · 自駕 · 夏季",
  backHref: "/trips/iceland/self-drive/summer",
  backLabel: "返回夏季自駕",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/waters_3238033_1280_fb2343d941.jpg",
  whyChooseUs: [
    {
      id: "deposit",
      title: "20% 訂金",
      description: "輕鬆預訂，無需一次付清全額",
    },
    {
      id: "booking",
      title: "安心預訂",
      description: "行程變更可協助調整",
    },
    {
      id: "refund",
      title: "退款保證",
      description: "依條款提供退款保障",
    },
    {
      id: "flexible",
      title: "彈性出發日",
      description: "依您的班機與假期安排出發",
    },
    {
      id: "reviews",
      title: "好評口碑",
      description: "豐富冰島自駕服務經驗",
    },
    {
      id: "local",
      title: "本地優選供應商",
      description: "直連冰島合規車行與住宿",
    },
  ],
  intro: {
    summary:
      "這個 13 天 12 夜冰島夏季一號公路深度環島自駕，沿著冰島最著名的環島公路，盡覽黃金圈、南岸、東部峽灣、黛提瀑布、胡薩維克、米湖、阿克雷里、巨魔半島、西北部、西部白銀圈、斯奈山半島與雷克雅內斯半島等夏日精華，並留有一日雷克雅維克自由行。夏季日照充沛、路況良好，節奏從容、安排務實。",
    full: `這個 13 天 12 夜冰島夏季一號公路深度環島自駕，沿著冰島最著名的環島公路，盡覽黃金圈、南岸、東部峽灣、黛提瀑布、胡薩維克、米湖、阿克雷里、巨魔半島、西北部、西部白銀圈、斯奈山半島與雷克雅內斯半島等夏日精華，並留有一日雷克雅維克自由行。套餐充分運用夏季長日照與良好路況，行程安排合理、節奏從容。

您將造訪黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）；沿南岸探索壯麗瀑布、冰川與黑沙灘（Reynisfjara），亦可另行加購冰川健行或冰河湖船遊。

往東則穿越寧靜的東部峽灣海岸；北上造訪黛提瀑布（Dettifoss）與賞鯨之都胡薩維克（Húsavík），探索米湖（Lake Mývatn）火山地質奇景，並造訪阿克雷里（Akureyri）與巨魔半島海岸。回程則遊覽西北部與西部白銀圈風光，安排一日探索「冰島縮影」斯奈山半島（Snæfellsnes），並留有一日暢遊雷克雅維克與雷克雅內斯半島。

途中亦可另行加購賞鯨、溫泉體驗或絲浮拉浮潛等夏季活動。完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，讓您輕鬆盡享冰島環島精華。`,
  },
  gallery: [
    {
      id: "waters_3238033_1280_fb23",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/waters_3238033_1280_fb2343d941.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    },
    {
      id: "66_north_0sz_YD_7_k1_M8_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/66_north_0sz_YD_7_k1_M8_unsplash_007532e8d0.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    },
    {
      id: "nature_5125153_1280_241b",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/nature_5125153_1280_241b901095.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    }
  ],
  highlights: [
    "全程由您掌控方向盤並設定自己的旅行節奏",
    "擁有充裕時間自駕體驗冰島環島路線1號公路",
    "造訪熱門黃金圈景點",
    "感受壯闊的冰島南岸瀑布",
    "置身冰河湖船遊感受純淨冰晶",
    "前往鯨魚之都胡薩維克賞鯨",
    "感受冰島北部米湖地區的別樣風採",
    "探索冰島西部白銀圈及沿途風光",
    "前往冰島縮影斯奈山半島",
    "擁有充足一天在雷克雅維克city walk",
  ],
  attractions: [
        thingvellirSpot,
    geysirSpot,
    gullfossSpot,seljalandsfossSpot,
    skogafossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    diamondBeachSpot,
    egilsstadirSpot,
    dettifossSpot,husavikSpot,myvatnSpot,godafossSpot,
    akureyriSpot,
    siglufjordurSpot,blonduosSpot,hvammstangiSpot,barnafossSpot,kirkjufellSpot,reykjavikSpot,
    reykjanesSpot,],
  routeOverviewSubtitle: "一號公路環島夏季自駕動線（含斯奈山半島與雷克雅內斯半島）",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、取車、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）" },
    { label: "第 3 天", detail: "南岸瀑布群 → 瓦特納冰川 → 黑沙灘 → 維克" },
    { label: "第 4 天", detail: "瓦特納冰川 → 傑古沙龍冰河湖 → 鑽石沙灘" },
    { label: "第 5 天", detail: "東部峽灣漁村海岸公路 → 東部住宿" },
    { label: "第 6 天", detail: "黛提瀑布 → 胡薩維克賞鯨 → 米湖地區" },
    { label: "第 7 天", detail: "阿克雷里 → 巨魔半島（錫格呂菲厄澤）→ 北部" },
    { label: "第 8 天", detail: "西北部風光（布倫迪歐斯 → 華姆斯唐吉）" },
    { label: "第 9 天", detail: "西部白銀圈（熔岩瀑布 → 兒童瀑布）" },
    { label: "第 10 天", detail: "斯奈山半島（教會山 → 斯蒂基斯霍爾米 → 海岸漁村）" },
    { label: "第 11 天", detail: "雷克雅維克（首都自由行）" },
    { label: "第 12 天", detail: "雷克雅內斯半島（藍湖、橋梁之間、燈塔）" },
    { label: "第 13 天", detail: "雷克雅維克市區（可選）→ 機場離境" }
  ],
  routeMap: {
    waypoints: [
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 1 天",
        detail: "雷克雅維克（入境、取車）",
      },
      {
        lng: -20.5322,
        lat: 64.3271,
        label: "第 2 天",
        detail: "黃金圈",
      },
      {
        lng: -18.057,
        lat: 63.794,
        label: "第 3 天",
        detail: "南岸瀑布 → 黑沙灘",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 4 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘",
      },
      {
        lng: -14.4,
        lat: 65.26,
        label: "第 5 天",
        detail: "東部峽灣漁村",
      },
      {
        lng: -17.338,
        lat: 66.046,
        label: "第 6 天",
        detail: "黛提瀑布 → 胡薩維克 → 米湖",
      },
      {
        lng: -18.09,
        lat: 66.07,
        label: "第 7 天",
        detail: "阿克雷里 → 巨魔半島",
      },
      {
        lng: -19.65,
        lat: 65.66,
        label: "第 8 天",
        detail: "西北部風光",
      },
      {
        lng: -21.293,
        lat: 64.663,
        label: "第 9 天",
        detail: "西部白銀圈",
      },
      {
        lng: -23.783,
        lat: 64.926,
        label: "第 10 天",
        detail: "斯奈山半島 → 教會山",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 11 天",
        detail: "雷克雅維克（首都自由行）",
      },
      {
        lng: -22.45,
        lat: 63.88,
        label: "第 12 天",
        detail: "雷克雅內斯半島",
      },
      {
        lng: -22.5556,
        lat: 63.985,
        label: "第 13 天",
        detail: "凱夫拉維克機場（離境、還車）",
      },
    ],
  },
  itinerary: [
    {
      day: 1,
      title: "入境日",
      accommodation: "雷克雅維克",
      description:
        "今天是您入境冰島的第一天。抵達後請先至租車櫃檯取車，工作人員會協助檢查車輛，並說明冰島夏季環島安全駕駛須知。之後即可前往雷克雅維克精選飯店入住安頓。\n\n若時間充裕，可另行加購藍湖溫泉或 Sky Lagoon 天空之境溫泉放鬆身心，為接下來的環島自駕儲備體力。",
      highlights: icelandSelfDriveSummer13Day1Highlights,
      optionalActivities: icelandSelfDriveSummer13Day1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈之旅",
      accommodation: "黃金圈地區",
      description:
        "今日造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。於辛格維利爾國家公園漫步時，亦可另行加購絲浮拉裂谷（Silfra）浮潛、騎馬或溫泉體驗。結束後繼續南下，今晚入住黃金圈地區。",
      highlights: icelandSelfDriveSummer13Day2Highlights,
      optionalActivities: icelandSelfDriveSummer13Day2OptionalActivities,
    },
    {
      day: 3,
      title: "南岸瀑布、冰川、黑沙灘",
      accommodation: "南部地區",
      description:
        "今天請一早出發，沿冰島南岸一號公路南下。夏季日照時數長，綠意盎然，沿途可見海鸚與野花點綴海岸。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；夏季可繞行至塞里雅蘭瀑布水幕後方小徑。繼續南下造訪黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中；沿途亦可安排 DC-3 飛機殘骸，或另行加購冰川健行等戶外體驗。今晚入住南岸。",
      highlights: icelandSelfDriveSummer13Day3Highlights,
      optionalActivities: icelandSelfDriveSummer13Day3OptionalActivities,
    },
    {
      day: 4,
      title: "冰河湖風光",
      accommodation: "東南部地區",
      description:
        "今日繼續往東南前進，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。夏季日照充足，浮冰在黑色沙灘上晶瑩閃耀，黑白對比格外震撼。\n\n若時間充裕，亦可另行加購冰河湖船遊或斯卡夫塔山冰川健行，深入認識歐洲最大冰川的夏日奇景。今晚繼續入住南岸。",
      highlights: icelandSelfDriveSummer13Day4Highlights,
      optionalActivities: icelandSelfDriveSummer13Day4OptionalActivities,
    },
    {
      day: 5,
      title: "東部峽灣漁村",
      accommodation: "東部峽灣",
      description:
        "今日沿東部峽灣海岸公路北上，穿越幽靜峽灣與漁村，感受冰島東部壯闊而寧靜的夏日海岸風光。夏季東部綠意盎然，日照時數長，可從容探索沿途小鎮。今晚入住東部。",
      highlights: icelandSelfDriveSummer13Day5Highlights,
      optionalActivities: icelandSelfDriveSummer13Day5OptionalActivities,
    },
    {
      day: 6,
      title: "黛提瀑布、胡薩維克賞鯨、米湖",
      accommodation: "米湖地區",
      description:
        "今日繼續北上，途經黛提瀑布（Dettifoss）與賞鯨小鎮胡薩維克（Húsavík），抵達米湖（Lake Mývatn）地區。夏季米湖水鳥豐富，地熱奇景與熔岩地貌交織，是觀鳥與地質探索的絕佳時節。\n\n亦可另行加購賞鯨、米湖溫泉或 Geosea 海水溫泉等體驗。今晚入住米湖地區。",
      highlights: icelandSelfDriveSummer13Day6Highlights,
      optionalActivities: icelandSelfDriveSummer13Day6OptionalActivities,
    },
    {
      day: 7,
      title: "阿克雷里、巨魔半島",
      accommodation: "北部地區",
      description:
        "今日從阿克雷里（Akureyri）出發，沿 82 號公路北上探索巨魔半島（Tröllaskagi），途經達爾維克（Dalvík）與錫格呂菲厄澤（Siglufjörður）等北部漁村。夏季峽灣風光秀麗，日照時數長，可從容探索半島海岸。今晚入住北部。",
      highlights: icelandSelfDriveSummer13Day7Highlights,
      optionalActivities: icelandSelfDriveSummer13Day7OptionalActivities,
    },
    {
      day: 8,
      title: "西北部風光",
      accommodation: "西部地區",
      description:
        "今日探索冰島西北部，途經布倫迪歐斯（Blönduós）、華姆斯湯吉（Hvammstangi）等漁村，並可造訪犀牛石（Hvítserkur）等海岸奇景。夏季海鳥活躍，西北部田園與海岸風光交織。今晚入住西北部。",
      highlights: icelandSelfDriveSummer13Day8Highlights,
      optionalActivities: icelandSelfDriveSummer13Day8OptionalActivities,
    },
    {
      day: 9,
      title: "西部白銀圈",
      accommodation: "西部地區",
      description:
        "今日遊覽西部白銀圈（Silver Circle）風光：德爾達圖赫菲溫泉（Deildartunguhver）、熔岩瀑布（Hraunfossar）、兒童瀑布（Barnafoss）等西部特色景觀。夏季植被翠綠，瀑布群景色尤為秀麗。\n\n亦可另行加購 Víðgelmir 火山熔岩洞穴探險等體驗。今晚入住西部。",
      highlights: icelandSelfDriveSummer13Day9Highlights,
      optionalActivities: icelandSelfDriveSummer13Day9OptionalActivities,
    },
    {
      day: 10,
      title: "斯奈山半島",
      accommodation: "雷克雅維克",
      description:
        "斯奈山半島被稱為「冰島縮影」，一日之內可見火山、冰川、黑沙灘、漁村與海岸峭壁等多元地貌。今日將造訪教會山（Kirkjufell）、布迪爾黑教堂、阿爾納斯塔皮海岸與斯蒂基斯霍爾米漁村，夏季海鳥活躍，日照時數長，可從容探索半島風光。傍晚返回雷克雅維克住宿。",
      highlights: icelandSelfDriveSummer13Day10Highlights,
      optionalActivities: icelandSelfDriveSummer13Day10OptionalActivities,
    },
    {
      day: 11,
      title: "首都自由行",
      accommodation: "雷克雅維克",
      description:
        "今日在雷克雅維克自由活動，可依個人興趣參觀哈爾格林姆斯大教堂（Hallgrímskirkja）、哈帕音樂廳（Harpa）、太陽航海者雕像（Sólfarið）或珍珠樓（Perlan Museum）等市區景點。\n\n亦可漫步 Laugavegur 購物主街，或另行加購 Sky Lagoon 天空之境溫泉，享受首都夏日悠閒時光。",
      highlights: icelandSelfDriveSummer13Day11Highlights,
      optionalActivities: icelandSelfDriveSummer13Day11OptionalActivities,
    },
    {
      day: 12,
      title: "雷克雅內斯半島",
      accommodation: "凱夫拉維克",
      description:
        "今日探索雷克雅內斯半島（Reykjanes），造訪克萊瓦湖（Kleifarvatn）、布萊亞湖克（Brimketill）等地質奇景，感受板塊交界處的火山地貌。夏季日照時數長，可從容探索半島風光。\n\n亦可另行加購藍湖溫泉（Blue Lagoon）放鬆身心。今晚入住雷克雅內斯半島地區。",
      highlights: icelandSelfDriveSummer13Day12Highlights,
      optionalActivities: icelandSelfDriveSummer13Day12OptionalActivities,
    },
    {
      day: 13,
      title: "離境日",
      accommodation: "—",
      description:
        "歡樂時光總是過得特別快。今天是離境日，請預留時間前往凱夫拉維克國際機場辦理還車與退稅。若班機時間較晚，可在雷克雅維克市區多留片刻，最後感受這座北歐首都的夏日氛圍。期待您下次再來冰島！",
      highlights: icelandSelfDriveSummer13Day13Highlights,
      optionalActivities: icelandSelfDriveSummer13Day13OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含冰島駕駛實用資訊，以及各類景點、歷史、文化和自然等資訊描述）",
      "12整天租車（多種車型可選，包含CDW碰撞險）",
      "冰島行程期間12晚住宿",
      "每日住宿提供早餐",
      "台灣冰島雙時區服務",
      "VAT增值稅",
    ],
    excluded: [
      "午餐",
      "晚餐",
      "自選報名活動",
      "個人旅行保險",
      "車輛升級保險",
      "途中各種其他費用（包括油費、停車費、罰款等）",
      "里程稅",
    ],
  },
  faq: [
    {
      id: "rental",
      title: "租車相關",
      items: [
        {
          question: "在冰島租車有什麼要求？最低年齡是多少？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在帕芬假期旅行租車，SUV、越野車、商務旅行等車型的最低年齡限制為\"]},{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"23\"]",
        },
        {
          question: "在冰島租車需要什麼證件？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"通過帕芬假期旅行租車，在取車時需要駕駛員攜帶以下3種證件：\"]",
        },
        {
          question: "租車包含什麼保險？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"我們提供的租車服務均包含基本責任保險和防撞險。需要注意的是，防撞險有一個自付額（免賠額），在發生事故時需要您來支付。這一金額因租車類型和供應商而異。在取車時，你也可以選擇支付額外的費用以降低自付額。\"]",
        },
        {
          question: "在冰島自駕租車保險主要包括哪幾種？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在冰島租車保險主要包括如下：\"]",
        }
      ],
    },
    {
      id: "insurance",
      title: "保險相關",
      items: [
        {
          question: "為什麼必須通過冰島本地車行購買保險？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這樣做的目的是避開第三方平台“全險”陷阱，保障您的權益。\"]",
        },
        {
          question: "冰島自駕過程中什麼情況即便您購買全險也不賠付？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島自駕租車雖說全險和0賠付保險基本涵蓋所有保險類型，但以下情況任何保險均不覆蓋，租車人需承擔全額維修及罰金（主要為主觀故意或重大過失造成的損失）\"]",
        },
        {
          question: "為什麼說來冰島自駕建議您買全險或零賠付保險套餐？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在冰島自駕是探索壯麗景觀的最佳方式，但獨特的路況和氣候也潛藏風險。冰島地理環境、天氣路況特殊，遇到大風或者暴風雪、沙塵暴等極端不可抗天氣。為避免高價賠付，強烈建議您升級全險套餐（或稱零賠付保險），最大程度消除您的後顧之憂，讓旅程專注享受而非擔憂賠償。\"]",
        }
      ],
    },
    {
      id: "trip",
      title: "行程與自駕",
      items: [
        {
          question: "冰島哪個季節最適合自駕遊？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"夏季是冰島最受歡迎的自駕遊季節。6月到8月的天氣最好，日照時間最長，陽光最為充足，這意味著您每天可以有更多的時間來遊玩，開車也會更加安心。另外，有些景區會在夏季開放更多的體驗遊玩項目，例如傑古沙龍冰河湖的船遊服務在夏季的開放時間最長，且在11月中旬至次年五月期間暫停運營。\"]",
        },
        {
          question: "冰島環島總共需要多少天？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在冰島的自駕遊時長需要根據您想參觀的景點以及其他的具體因素來進行調整。實際上，繞著 1 號環島公路駕駛一圈只需要 2 天時間，但這樣的話，您就完全得不到遊玩的體驗感了。\"]",
        },
        {
          question: "在冰島自駕可以玩些什麼？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"自駕讓您可以靈活地按照自己的節奏，在合適的時間前往自己喜歡的地方。超高的靈活度代表著超高的可能性，百分百親身體驗和經歷在這個國度的美妙旅程。\"]",
        },
        {
          question: "在冰島開車需要注意什麼？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島的交通規則與大多數其他國家相似，但也有一些您可能不太熟悉的小知識點。\"]",
        },
        {
          question: "去冰島自駕需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"無論您在哪個季節前往冰島，都可能會遇到各種天氣情況。有鑑於此，參加冰島自駕套餐時，您最好確保帶上能夠適應不同天氣所需的衣物：\"]",
        },
        {
          question: "我可以自由安排自駕的時間嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"完全可以！\"]",
        },
        {
          question: "套餐單人間為什麼需要補差價？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為冰島的單人間房價要高於雙人間房價的一半，而預訂時的預設房價是按雙人間均攤至每人的價格來計算的。因此套餐內的單人間需要補交一筆差價。由於旅行團套餐系統設定在預訂環節僅可以選首都雷克雅維克地區的房間數量，如果需要將套餐中包含的旅行團增加單人間，那麼需要在初始頁面選中1人來查看全程單人間價格，具體細節可諮詢客服。\"]",
        }
      ],
    },
    {
      id: "accommodation",
      title: "住宿相關",
      items: [
        {
          question: "為什麼冰島的大床房都是兩張床拼起來的？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島作為旅遊業國家，所有飯店不論是首都還是郊外的雙人間或雙床間幾乎都是同樣的房型和床型。飯店為了保證入住率，大床由兩張床拼接而成，飯店櫃檯會根據預訂的要求將床鋪合併或拆分。\"]",
        }
      ],
    }
  ],
  similarTrips: [
    {
      tripKey: "iceland/self-drive/summer/6",
      title: "6 天 5 夜冰島夏季精選自駕遊",
      tourCode: "SSD-061",
      durationLabel: "6 天／5 夜",
      description:
        "南岸、冰河湖與黃金圈，並造訪斯奈山半島精華景點。",
    },
    {
      tripKey: "iceland/self-drive/summer/7",
      title: "7 天 6 夜冰島夏季暢享自駕遊",
      tourCode: "SSD-071",
      durationLabel: "7 天／6 夜",
      description:
        "黃金圈、南岸與斯奈山半島盡收囊中，更從容探索冰島西南部。",
    },
    {
      tripKey: "iceland/self-drive/summer/8",
      title: "8 天 7 夜冰島夏季環島自駕",
      tourCode: "SSD-081",
      durationLabel: "8 天／7 夜",
      description:
        "夏季版一號公路環島，涵蓋黃金圈、南岸、冰河湖、東部峽灣、米湖與西部白銀圈。",
    },
    {
      tripKey: "iceland/self-drive/summer/12",
      title: "12 天 11 夜冰島夏季環島浪漫自駕遊",
      tourCode: "SSD-121",
      durationLabel: "12 天／11 夜",
      description:
        "深度環島並造訪西部白銀圈、斯奈山半島與首都自由行，從容探索冰島全島。",
    },
  ],
};
