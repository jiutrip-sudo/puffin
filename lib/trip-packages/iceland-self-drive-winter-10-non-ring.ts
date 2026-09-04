import type { TripPackage } from "./types";
import { planeWreckSpot } from "./spots/plane-wreck";
import { kirkjufellSpot } from "./spots/kirkjufell";
import { gullfossSpot } from "./spots/gullfoss";
import { geysirSpot } from "./spots/geysir";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import {
  icelandSelfDriveWinter10NonRingDay1Highlights,
  icelandSelfDriveWinter10NonRingDay1OptionalActivities,
} from "./iceland-self-drive-winter-10-non-ring-day1-cards";
import {
  icelandSelfDriveWinter10NonRingDay2Highlights,
  icelandSelfDriveWinter10NonRingDay2OptionalActivities,
  icelandSelfDriveWinter10NonRingDay3Highlights,
  icelandSelfDriveWinter10NonRingDay3OptionalActivities,
  icelandSelfDriveWinter10NonRingDay4Highlights,
  icelandSelfDriveWinter10NonRingDay4OptionalActivities,
  icelandSelfDriveWinter10NonRingDay5Highlights,
  icelandSelfDriveWinter10NonRingDay5OptionalActivities,
  icelandSelfDriveWinter10NonRingDay6Highlights,
  icelandSelfDriveWinter10NonRingDay6OptionalActivities,
  icelandSelfDriveWinter10NonRingDay7Highlights,
  icelandSelfDriveWinter10NonRingDay7OptionalActivities,
  icelandSelfDriveWinter10NonRingDay8Highlights,
  icelandSelfDriveWinter10NonRingDay8OptionalActivities,
  icelandSelfDriveWinter10NonRingDay9Highlights,
  icelandSelfDriveWinter10NonRingDay9OptionalActivities,
  icelandSelfDriveWinter10NonRingDay10Highlights,
  icelandSelfDriveWinter10NonRingDay10OptionalActivities,
} from "./iceland-self-drive-winter-10-non-ring-days2-10-cards";

export const icelandSelfDriveWinter10NonRing: TripPackage = {
  id: "iceland-self-drive-winter-10-non-ring",
  tripKey: "iceland/self-drive/winter/10/non-ring",
  slug: "10-days-winter-self-drive-tour-golden-circle-south-west-iceland",
  tourCode: "SSD-104",
  title: "冰島 10 天 9 夜冬季深度自駕遊",
  subtitle: "冰河湖 & 斯奈山 & 亞歐大陸橋",
  duration: { days: 10, nights: 9 },
  season: { label: "冬季", months: "10 月–4 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "自駕",
    tourCode: "SSD-104",
  },
  eyebrow: "冰島集合 · 自駕 · 冬季",
  backHref: "/trips/iceland/self-drive/winter/10",
  backLabel: "返回 10 日行程",
  heroImage:
    "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/orlando_henriques_w8_Ttc_Stjy_WY_unsplash_5df96d7f5e.jpg",
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
      "這個 10 天 9 夜冰島冬季深度自駕遊走訪西南岸，涵蓋南岸、黃金圈、西部白銀圈、斯奈山半島、雷克雅維克自由行與雷克雅內斯半島，節奏從容、安排務實。行程充分顧及冬季日照與路況。",
    full: `這個 10 天 9 夜冰島冬季深度自駕遊走訪西南岸，涵蓋南岸、黃金圈、西部白銀圈、斯奈山半島、雷克雅維克自由行與雷克雅內斯半島，節奏從容、安排務實。套餐充分顧及冬季日照時數與路況，行程安排合理。

您將沿南岸探索塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）與黑沙灘（Reynisfjara）等經典景觀，並造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）；另遊覽黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）。

行程另安排一日深度探索西部白銀圈（Silver Circle）、「冰島縮影」斯奈山半島（Snæfellsnes），以及雷克雅內斯半島（Reykjanes）的藍湖溫泉與亞歐大陸橋（Bridge Between Continents）等地質奇觀，並留有一日雷克雅維克自由行。途中亦可另行加購藍冰洞探險、冰川健行、觀鯨或極光船遊等體驗。完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，讓您輕鬆盡享冰島冬季西南岸精華。`,
  },
  gallery: [
    {
      id: "kirkjufell-night",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/orlando_henriques_w8_Ttc_Stjy_WY_unsplash_5df96d7f5e.jpg",
      alt: "教會山冬夜",
      caption: "斯奈山半島教會山",
    },
    {
      id: "jokulsarlon",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/anders_jilden_P_Xd_Bk_NF_8rlk_unsplash_57632fb6c7.jpg",
      alt: "傑古沙龍冰河湖",
      caption: "傑古沙龍冰河湖",
    },
    {
      id: "seljalandsfoss",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/seljalandsfoss1_b6412d5d4e.jpg",
      alt: "塞里雅蘭瀑布",
      caption: "塞里雅蘭瀑布",
    },
    {
      id: "reynisfjara",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reynisfjara1_ef5a24c2b7.jpg",
      alt: "黑沙灘",
      caption: "維克黑沙灘",
    },
    {
      id: "diamond-beach",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/diamond_beach_unsplash_11020ebd2f.jpg",
      alt: "鑽石沙灘",
      caption: "鑽石沙灘",
    },
    {
      id: "golden-circle",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/golden_circle1_b2e6f91bdb.jpg",
      alt: "黃金圈",
      caption: "黃金圈風光",
    },
    {
      id: "vidgelmir",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Vidgelmir1_4fbd1ac7c0.jpg",
      alt: "維德格爾米爾熔岩洞",
      caption: "西部白銀圈",
    },
    {
      id: "kirkjufell",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/kirkjufell1_b2a1018312.jpg",
      alt: "教會山",
      caption: "教會山",
    },
    {
      id: "reykjanes",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/nicolas_j_leclercq_M8w_G7_I_Fy49_U_unsplash_a3359dc258.jpg",
      alt: "雷克雅內斯半島",
      caption: "雷克雅內斯半島",
    },
  ],
  highlights: [
    "10 天深度西南岸自駕，涵蓋南岸、黃金圈、西部白銀圈與斯奈山半島",
    "全程由您掌控方向盤，靈活安排旅行節奏",
    "見證傑古沙龍冰河湖與鑽石沙灘冬日奇景",
    "探索西部白銀圈歷史與自然風光",
    "造訪斯奈山半島「微縮冰島」與雷克雅內斯半島",
    "多一日首都自由行，盡享雷克雅維克風情",
  ],
  attractions: [
        seljalandsfossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    planeWreckSpot,diamondBeachSpot,
    gullfossSpot,geysirSpot,
    kirkjufellSpot,],
  routeOverviewSubtitle: "南岸、黃金圈、西部白銀圈、斯奈山與雷克雅內斯半島冬季自駕動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、取車、可選藍湖／Sky Lagoon）" },
    { label: "第 2 天", detail: "南岸瀑布群 → 黑沙灘 → 南岸住宿" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞（可選）→ 南部住宿" },
    { label: "第 4 天", detail: "南岸小眾景點 → 維克 → 迪霍拉里" },
    { label: "第 5 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）" },
    { label: "第 6 天", detail: "西部白銀圈（熔岩瀑布 → 德爾達圖赫菲 → 維德格爾米爾）" },
    { label: "第 7 天", detail: "斯奈山半島（教會山 → 布迪爾 → 漁村海岸）→ 雷克雅維克" },
    { label: "第 8 天", detail: "雷克雅維克（首都自由行）" },
    { label: "第 9 天", detail: "雷克雅內斯半島（藍湖 → 亞歐大陸橋）→ 雷克雅維克" },
    { label: "第 10 天", detail: "雷克雅維克 → 機場離境" },
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
        lng: -18.057,
        lat: 63.794,
        label: "第 2 天",
        detail: "南岸一號公路 → 瀑布 → 黑沙灘",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 3 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘",
      },
      {
        lng: -17.5,
        lat: 63.4,
        label: "第 4 天",
        detail: "南岸小眾景點 → 維克",
      },
      {
        lng: -20.5322,
        lat: 64.3271,
        label: "第 5 天",
        detail: "黃金圈",
      },
      {
        lng: -21.0,
        lat: 64.7,
        label: "第 6 天",
        detail: "西部白銀圈 → 熔岩瀑布",
      },
      {
        lng: -23.783,
        lat: 64.926,
        label: "第 7 天",
        detail: "斯奈山半島 → 教會山",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 8 天",
        detail: "雷克雅維克（首都自由行）",
      },
      {
        lng: -22.35,
        lat: 63.88,
        label: "第 9 天",
        detail: "雷克雅內斯半島 → 藍湖",
      },
      {
        lng: -22.5556,
        lat: 63.985,
        label: "第 10 天",
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
        "今天是您入境冰島的第一天。抵達後請先至租車櫃檯取車，工作人員會協助檢查車輛，並說明冰島冬季安全駕駛須知。之後即可前往雷克雅維克精選飯店入住安頓。\n\n若時間充裕，可另行加購藍湖溫泉或 Sky Lagoon 天空之境溫泉放鬆身心，為接下來的自駕儲備體力。",
      highlights: icelandSelfDriveWinter10NonRingDay1Highlights,
      optionalActivities: icelandSelfDriveWinter10NonRingDay1OptionalActivities,
    },
    {
      day: 2,
      title: "南岸壯美海岸線",
      accommodation: "南岸",
      description:
        "今天請一早出發，沿冰島南岸一號公路南下。冬季南岸色調獨特：白雪覆蓋大地、天際染上一抹粉霞，為旅程增添溫暖氣息。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；冬季基於安全考量，塞里雅蘭瀑布後方小徑通常封閉。繼續南下造訪黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中；沿途亦可安排 DC-3 飛機殘骸，或另行加購冰川健行、ATV 等戶外體驗。今晚入住南岸。",
      highlights: icelandSelfDriveWinter10NonRingDay2Highlights,
      optionalActivities: icelandSelfDriveWinter10NonRingDay2OptionalActivities,
    },
    {
      day: 3,
      title: "冰河湖風光",
      accommodation: "南岸",
      description:
        "今日繼續往東南前進，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。浮冰在黑色沙灘上晶瑩閃耀，黑白對比格外震撼。\n\n若時間充裕，亦可另行加購瓦特納冰川藍冰洞探險或斯卡夫塔山冰川健行，深入認識歐洲最大冰川的冬日奇景。今晚繼續入住南岸。",
      highlights: icelandSelfDriveWinter10NonRingDay3Highlights,
      optionalActivities: icelandSelfDriveWinter10NonRingDay3OptionalActivities,
    },
    {
      day: 4,
      title: "南岸小眾景點",
      accommodation: "黃金圈區域",
      description:
        "今日節奏較從容，沿南岸造訪更多小眾景點：埃爾德熔岩原（Eldhraun）的蒼翠苔蘚、小冰河湖（Fjallsárlón）的靜謐景致、迪霍拉里（Dyrhólaey）的海岸拱門，以及維克紅頂教堂等地標。適合細細感受南岸冬日風光，不必趕路。今晚入住黃金圈區域。",
      highlights: icelandSelfDriveWinter10NonRingDay4Highlights,
      optionalActivities: icelandSelfDriveWinter10NonRingDay4OptionalActivities,
    },
    {
      day: 5,
      title: "黃金圈",
      accommodation: "黃金圈區域",
      description:
        "今日造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。於辛格維利爾國家公園漫步時，亦可另行加購絲浮拉裂谷（Silfra）浮潛、雪地摩托或溫泉體驗。今晚入住黃金圈區域。",
      highlights: icelandSelfDriveWinter10NonRingDay5Highlights,
      optionalActivities: icelandSelfDriveWinter10NonRingDay5OptionalActivities,
    },
    {
      day: 6,
      title: "西部白銀圈",
      accommodation: "西部",
      description:
        "今日深度探索西部白銀圈（Silver Circle）：雷克霍特歷史名鎮、熔岩瀑布（Hraunfossar）、兒童瀑布（Barnafoss）、德爾達圖赫菲溫泉（Deildartunguhver）與維德格爾米爾熔岩洞（Víðgelmir），體驗與黃金圈不同的西部冬日風光。今晚入住西部。",
      highlights: icelandSelfDriveWinter10NonRingDay6Highlights,
      optionalActivities: icelandSelfDriveWinter10NonRingDay6OptionalActivities,
    },
    {
      day: 7,
      title: "微縮冰島——斯奈山半島",
      accommodation: "雷克雅維克",
      description:
        "斯奈山半島被稱為「冰島縮影」，一日之內可見火山、冰川、黑沙灘、漁村與海岸峭壁等多元地貌。今日將造訪教會山（Kirkjufell）、布迪爾黑教堂、阿爾納斯塔皮海岸與斯蒂基斯霍爾米漁村；亦可另行加購 Vatnshellir 熔岩洞探險。傍晚返回雷克雅維克住宿。",
      highlights: icelandSelfDriveWinter10NonRingDay7Highlights,
      optionalActivities: icelandSelfDriveWinter10NonRingDay7OptionalActivities,
    },
    {
      day: 8,
      title: "雷克雅維克自由行",
      accommodation: "雷克雅維克",
      description:
        "今日在雷克雅維克自由安排一日，漫步洛加維格大街（Laugavegur）、哈帕音樂廳、彩虹街等市區景點，品嚐當地美食，感受北歐首都的獨特氛圍。亦可另行加購 Sky Lagoon、藍湖溫泉、極光船遊或觀鯨等體驗。今晚繼續入住雷克雅維克。",
      highlights: icelandSelfDriveWinter10NonRingDay8Highlights,
      optionalActivities: icelandSelfDriveWinter10NonRingDay8OptionalActivities,
    },
    {
      day: 9,
      title: "雷克雅內斯半島",
      accommodation: "雷克雅維克",
      description:
        "今日前往雷克雅內斯半島（Reykjanes），探索藍湖溫泉（Blue Lagoon）、布藍斯科熔岩洞、亞歐大陸橋（Bridge Between Continents）與海岸地熱景觀，感受冰島西南部地質公園的火山與地熱魅力。若前幾日尚未造訪藍湖，亦可於今日另行加購溫泉體驗。傍晚返回雷克雅維克住宿。",
      highlights: icelandSelfDriveWinter10NonRingDay9Highlights,
      optionalActivities: icelandSelfDriveWinter10NonRingDay9OptionalActivities,
    },
    {
      day: 10,
      title: "離境日",
      accommodation: "—",
      description:
        "歡樂時光總是過得特別快。今天是離境日，請預留時間前往凱夫拉維克國際機場辦理還車與退稅。若班機時間較晚，可在雷克雅維克市區多留片刻，最後感受這座北歐首都的獨特氛圍。期待您下次再來冰島！",
      highlights: icelandSelfDriveWinter10NonRingDay10Highlights,
      optionalActivities: icelandSelfDriveWinter10NonRingDay10OptionalActivities,
    },
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含冰島駕駛實用資訊，以及各類景點、歷史、文化和自然等資訊描述）",
      "9 整天租車（多種車型可選，包含 CDW 碰撞險）",
      "冰島行程期間 9 晚住宿",
      "簽證輔助行程單材料提供",
      "台灣冰島雙時區服務",
      "VAT 增值稅",
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
            "透過帕芬假期租車，SUV、越野車、商務旅行等車型的最低年齡限制為 23 歲，其他小型轎車最低年齡限制為 20 歲。租車時，您必須持有合法且有效的駕照至少一年。台灣旅客需在來冰島之前申請駕照的英文版翻譯公證文件以及國際駕照。取車時，需出示國際駕照與駕照公證文件。注意：您需要準備一張主駕駛人名下的信用卡，並在租車時出示，用於處理車輛出現任何損壞或其他額外費用時的押金。我們接受美國運通卡、萬事達卡和 VISA 卡。",
        },
        {
          question: "在冰島租車需要什麼證件？",
          answer:
            "取車時需要駕駛人攜帶以下 3 種證件：駕照原件；駕照的英文翻譯公證文件；駕駛人本人名下的信用卡（用於支付汽車出現任何損壞或其他額外費用的押金）。我們接受萬事達卡、VISA 卡以及美國運通卡。",
        },
        {
          question: "你們的租車時間怎麼計算？",
          answer:
            "租車服務供應商以 24 小時為最小租賃單位，因此若還車時間晚於租車時間，需支付額外 24 小時的租車費用。例如今天上午 8 點開始租車，明天上午 11 點還車，將需支付 2 天的租車費用。",
        },
        {
          question:
            "環島自駕前後在雷克雅維克額外停留幾日，是否會自動添加相應的租車價格？",
          answer:
            "若在客製行程時添加了在雷克雅維克的額外停留日，套餐總價不會自動包含額外日期的租車費用。若希望這段期間也能用車，請聯絡我們，我們會重新確認訂單，額外租車費用將計入您的旅行餘額。若更希望在雷克雅維克步行或搭乘大眾運輸，您可以在 BSÍ 公車站搭乘 Flybus 前往機場。",
        },
      ],
    },
    {
      id: "insurance",
      title: "保險相關",
      items: [
        {
          question: "租車包含什麼保險？",
          answer:
            "我們提供的租車服務均包含基本責任保險和防撞險。防撞險有自付額（免賠額），發生事故時需由您支付，金額因租車類型與供應商而異。取車時可選擇支付額外費用以降低自付額。您也可購買額外保險，以防碎石路和灰土路行駛造成的損壞，額外保險可在取車時於服務台購買。我們也建議所有前往冰島的旅客提前購買旅行保險，為取消行程、行李遺失或被盗、醫療費用等提供保障。",
        },
        {
          question: "在冰島自駕租車保險主要包括哪幾種？",
          answer:
            "主要包括：1. 基礎碰撞險（CDW）— 覆蓋租賃車輛自身碰撞損傷，自付額最高約 35 萬 ISK。2. 超級碰撞險（SCDW）— CDW 升級版，大幅降低自付額。3. 碎石防護險（GP）— 覆蓋碎石路況造成的擋風玻璃、車燈、車身漆面、後視鏡損傷，自付額約 4 萬 ISK。4. 盜竊保護險（TP）— 覆蓋租賃車輛整車被盜，不包含車內個人財物。5. 第三方責任險 — 覆蓋事故中對第三方車輛或財產的損害。自付額因車行及車型可能有差異，預訂時請仔細核對條款。",
        },
        {
          question: "為什麼必須透過冰島本地車行購買保險？",
          answer:
            "目的是避開第三方平台「全險」陷阱，保障您的權益。國內第三方平台宣傳的「全險」常由中國境內保險公司承保，與冰島本地車行保險體系脫鉤；條款往往未覆蓋冰島常見風險（如 SAAP 沙塵險），理賠流程繁瑣且易遭拒賠。冰島本地車行保險專為冰島環境設計，提供 SAAP 沙塵與火山灰保險、GP 碎石險等；出險由車行直接處理，還車驗車透明。建議拒絕國內第三方平台保險，透過帕芬假期直連本地合規車行預訂，取車時核對保單並拍攝驗車影片。",
        },
        {
          question: "為什麼建議購買全險或零賠付保險套餐？",
          answer:
            "冰島路況與氣候特殊，碎石飛濺、極端天氣、狹窄單行橋與融雪濕滑路面等風險較高。強烈建議升級全險或零賠付（Zero Excess）套餐，確認 0 自付額的覆蓋範圍，讓旅程專注享受而非擔憂賠償。",
        },
        {
          question: "即便購買全險，哪些情況仍不賠付？",
          answer:
            "以下情況任何保險均不覆蓋，租車人需承擔全額維修及罰金：故意損壞車輛；酒駕／毒駕、危險駕駛；越野駕駛（Off-road）或闖入禁行區；疏忽造成的離合器、手煞車損壞；遺失車鑰匙、GPS；加油錯誤；車內燃燒物或腐蝕液體損壞；涉水損壞（部分零賠付套餐可賠，需提前確認）；動物碰撞（需停車報警 112）；陷車拖車費；交通違規罰單；車內財物被盜。",
        },
      ],
    },
    {
      id: "trip",
      title: "行程與自駕",
      items: [
        {
          question: "冬季在冰島自駕安全嗎？",
          answer:
            "雖然冬季天氣有時惡劣，但大部分時間冰島主要道路與城市道路暢通，鏟雪車會定期清理城鎮與熱門景點附近道路。冬季暴風雪有時可能迫使您改變計畫；透過帕芬假期預訂的優點是，天氣不佳時我們可依經驗與資源迅速與您共同調整行程。若對冬季駕駛沒有信心，也可選擇跟團套餐。",
        },
        {
          question: "在冰島自駕可以玩些什麼？",
          answer:
            "自駕讓您依自己的節奏前往喜歡的地方。可沿南岸觀賞瀑布、前往瓦特納冰川國家公園、體驗藍冰洞、參觀黃金圈、冬季追逐北極光、探索斯奈山半島、在藍湖溫泉放鬆、品嚐當地美食、乘船觀鯨等。選擇取決於天數與興趣，選擇權在您手中。",
        },
        {
          question: "去冰島自駕需要準備什麼行李？",
          answer:
            "無論哪個季節都可能遇到各種天氣，建議攜帶：防水防風外套與長褲、防水健行鞋、透氣運動鞋、墨鏡、手套毛線帽圍巾、泳衣、羊毛衫或毛衣、羽絨衣、保濕霜與潤唇膏、手機支架，以及駕照翻譯公證文件。",
        },
        {
          question: "什麼是自選報名活動？",
          answer:
            "每一天行程下方列有對應的自選報名活動，您可依需求選擇是否自費參加。這些活動經嚴選，最能體現冰島當地風土人情或特色文化，可依喜好放心選擇。",
        },
      ],
    },
    {
      id: "accommodation",
      title: "住宿相關",
      items: [
        {
          question: "為什麼冰島的大床房都是兩張床拼起來的？",
          answer:
            "冰島旅宿業為提高入住率，雙人房大床多由兩張床拼接，前台會依預訂要求合併或拆分。僅首都個別豪華或精品飯店的高級房與套房有完整大床。您可在預訂頁選擇雷克雅維克地區的住宿級別，建議提早預訂以有更多選擇。",
        },
        {
          question: "套餐單人房為什麼需要補差價？",
          answer:
            "冰島單人房房價高於雙人房房價的一半，預設房價按雙人房均攤計算，因此單人房需補差價。若需全程單人房，可在初始頁面選 1 人查看全程單人房價格，細節可諮詢客服。",
        },
      ],
    },
  ],
  similarTrips: [
    {
      tripKey: "iceland/self-drive/winter/4",
      title: "4 天 3 夜冰島南岸冬季自駕遊",
      tourCode: "SSD-042",
      durationLabel: "4 天／3 夜",
      description:
        "在有限的冬季日照裡，將南岸精華景點一網打盡，包含傑古沙龍冰河湖、藍冰洞、黃金瀑布。",
    },
    {
      tripKey: "iceland/self-drive/winter/5",
      title: "5 天 4 夜冰島冬季精簡自駕套餐",
      tourCode: "SSD-052",
      durationLabel: "5 天／4 夜",
      description:
        "將冰島南部精華收入囊中，搭配戶外體驗，並有機會看見舞動的北極光！",
    },
    {
      tripKey: "iceland/self-drive/winter/6",
      title: "6 天 5 夜冰島冬季經典自駕遊",
      tourCode: "SSD-062",
      durationLabel: "6 天／5 夜",
      description:
        "領略冰島冬日風光，造訪經典黃金圈與南岸小眾景點，體驗冰洞探險、追逐極光。",
    },
    {
      tripKey: "iceland/self-drive/winter/9/non-ring",
      title: "冰島 9 天 8 夜冬季精選自駕遊",
      tourCode: "SSD-094",
      durationLabel: "9 天／8 夜",
      description:
        "造訪黃金圈、南岸、冰河湖、西部白銀圈與斯奈山半島，並留有一日首都自由行。",
    },
  ],
};
