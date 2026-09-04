import type { TripPackage } from "./types";
import { stykkisholmurSpot } from "./spots/stykkisholmur";
import { vatnajokullSpot } from "./spots/vatnajokull";
import { hraunfossarSpot } from "./spots/hraunfossar";
import { myvatnSpot } from "./spots/myvatn";
import { godafossSpot } from "./spots/godafoss";
import { kirkjufellSpot } from "./spots/kirkjufell";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import {
  icelandSelfDriveSummer10Day1Highlights,
  icelandSelfDriveSummer10Day1OptionalActivities,
} from "./iceland-self-drive-summer-10-day1-cards";
import {
  icelandSelfDriveSummer10Day2Highlights,
  icelandSelfDriveSummer10Day2OptionalActivities,
  icelandSelfDriveSummer10Day3Highlights,
  icelandSelfDriveSummer10Day3OptionalActivities,
  icelandSelfDriveSummer10Day4Highlights,
  icelandSelfDriveSummer10Day4OptionalActivities,
  icelandSelfDriveSummer10Day5Highlights,
  icelandSelfDriveSummer10Day5OptionalActivities,
  icelandSelfDriveSummer10Day6Highlights,
  icelandSelfDriveSummer10Day6OptionalActivities,
  icelandSelfDriveSummer10Day7Highlights,
  icelandSelfDriveSummer10Day7OptionalActivities,
  icelandSelfDriveSummer10Day8Highlights,
  icelandSelfDriveSummer10Day8OptionalActivities,
  icelandSelfDriveSummer10Day9Highlights,
  icelandSelfDriveSummer10Day9OptionalActivities,
  icelandSelfDriveSummer10Day10Highlights,
  icelandSelfDriveSummer10Day10OptionalActivities,
} from "./iceland-self-drive-summer-10-days2-10-cards";

export const icelandSelfDriveSummer10: TripPackage = {
  id: "iceland-self-drive-summer-10",
  tripKey: "iceland/self-drive/summer/10",
  slug: "10-days-around-iceland-and-snaefellsnes",
  tourCode: "SSD-101",
  title: "10 天 9 夜冰島夏季深度環島自駕",
  subtitle: "1號公路 & 斯奈山半島",
  duration: { days: 10, nights: 9 },
  season: { label: "夏季", months: "4 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "自駕",
    tourCode: "SSD-101",
  },
  eyebrow: "冰島集合 · 自駕 · 夏季",
  backHref: "/trips/iceland/self-drive/summer",
  backLabel: "返回夏季自駕",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/_cc18d6eba7.jpg",
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
      "這個 10 天 9 夜冰島夏季一號公路完整環島自駕，沿著冰島最著名的環島公路，盡覽黃金圈、南岸、東部峽灣、米湖、眾神瀑布、阿克雷里、西部白銀圈與斯奈山半島等夏日精華。夏季日照充沛、路況良好，節奏適中、安排務實。",
    full: `這個 10 天 9 夜冰島夏季一號公路完整環島自駕，沿著冰島最著名的環島公路，盡覽黃金圈、南岸、東部峽灣、米湖、眾神瀑布、阿克雷里、西部白銀圈與斯奈山半島等夏日精華。套餐充分運用夏季長日照與良好路況，行程安排合理、節奏適中。

您將造訪黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）；沿南岸探索壯麗瀑布、冰川與黑沙灘（Reynisfjara），夏季迪霍拉里（Dyrhólaey）可見海鸚棲息，亦可另行加購冰川健行或冰河湖船遊。

往東則穿越寧靜的東部峽灣海岸；北上米湖（Lake Mývatn）地區探索火山地質奇景，並造訪眾神瀑布（Goðafoss）與「北方之都」阿克雷里（Akureyri）。回程則遊覽西部白銀圈熔岩瀑布等風光，並安排一日探索「冰島縮影」斯奈山半島（Snæfellsnes），為環島旅程劃下句點。

途中亦可另行加購觀鯨、溫泉體驗或絲浮拉浮潛等夏季活動。完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，讓您輕鬆盡享冰島環島精華。`,
  },
  gallery: [
    {
      id: "_cc18d6eba7",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/_cc18d6eba7.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    },
    {
      id: "_ec68df911a",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/_ec68df911a.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    },
    {
      id: "DJI_0177_1_eafec50caf",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/DJI_0177_1_eafec50caf.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    }
  ],
  highlights: [
    "全程由您掌控方向盤並設定自己的旅行節奏",
    "自駕體驗冰島最熱門環島路線1號公路",
    "探訪冰島北部米湖地區的自然美景",
    "造訪塞里雅蘭瀑布與斯科加瀑布",
    "置身傑古沙龍冰河湖的夢幻氛圍",
    "體驗冰島人刻在DNA裡的溫泉文化",
    "雙腳立足於歐洲最大冰川",
    "探索斯奈山半島多樣化的風景",
    "尋覓小眾的冰島東部峽灣風光",
    "欣賞冰島西部熔岩瀑布和兒童瀑布",
  ],
  attractions: [
        seljalandsfossSpot,
    skogafossSpot,
    jokulsarlonSpot,
    vatnajokullSpot,reynisfjaraSpot,
    diamondBeachSpot,
    myvatnSpot,godafossSpot,
    stykkisholmurSpot,kirkjufellSpot,
    hraunfossarSpot,],
  routeOverviewSubtitle: "一號公路環島夏季自駕動線（含斯奈山半島）",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、取車、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）→ 南岸" },
    { label: "第 3 天", detail: "南岸瀑布群 → 黑沙灘 → 維克 → 南岸住宿" },
    { label: "第 4 天", detail: "瓦特納冰川 → 傑古沙龍冰河湖 → 鑽石沙灘" },
    { label: "第 5 天", detail: "東部峽灣海岸公路 → 東部住宿" },
    { label: "第 6 天", detail: "米湖及北部風光 → 米湖地區住宿" },
    { label: "第 7 天", detail: "眾神瀑布 → 阿克雷里 → 冰島北部" },
    { label: "第 8 天", detail: "斯奈山半島（教會山 → 斯蒂基斯霍爾米 → 海岸漁村）" },
    { label: "第 9 天", detail: "西部白銀圈（熔岩瀑布、兒童瀑布）→ 雷克雅維克" },
    { label: "第 10 天", detail: "雷克雅維克市區（可選）→ 機場離境" }
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
        detail: "黃金圈 → 南岸",
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
        detail: "東部峽灣",
      },
      {
        lng: -17.0,
        lat: 65.6,
        label: "第 6 天",
        detail: "米湖及北部風光",
      },
      {
        lng: -17.55,
        lat: 65.68,
        label: "第 7 天",
        detail: "眾神瀑布 → 阿克雷里",
      },
      {
        lng: -23.783,
        lat: 64.926,
        label: "第 8 天",
        detail: "斯奈山半島 → 教會山",
      },
      {
        lng: -21.5,
        lat: 64.7,
        label: "第 9 天",
        detail: "西部白銀圈 → 雷克雅維克",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 10 天",
        detail: "雷克雅維克 → 機場離境",
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
      highlights: icelandSelfDriveSummer10Day1Highlights,
      optionalActivities: icelandSelfDriveSummer10Day1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈之旅",
      accommodation: "黃金圈地區",
      description:
        "今日造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。於辛格維利爾國家公園漫步時，亦可另行加購絲浮拉裂谷（Silfra）浮潛、騎馬或溫泉體驗。結束後繼續南下，今晚入住黃金圈地區。",
      highlights: icelandSelfDriveSummer10Day2Highlights,
      optionalActivities: icelandSelfDriveSummer10Day2OptionalActivities,
    },
    {
      day: 3,
      title: "冰島南岸風光",
      accommodation: "南部地區",
      description:
        "今天請一早出發，沿冰島南岸一號公路南下。夏季日照時數長，綠意盎然，沿途可見海鸚與野花點綴海岸。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；夏季可繞行至塞里雅蘭瀑布水幕後方小徑。繼續南下造訪黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中；沿途亦可安排 DC-3 飛機殘骸，或另行加購冰川健行等戶外體驗。今晚入住南岸。",
      highlights: icelandSelfDriveSummer10Day3Highlights,
      optionalActivities: icelandSelfDriveSummer10Day3OptionalActivities,
    },
    {
      day: 4,
      title: "傑古沙龍冰河湖、鑽石沙灘",
      accommodation: "東南部地區",
      description:
        "今日繼續往東南前進，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。夏季日照充足，浮冰在黑色沙灘上晶瑩閃耀，黑白對比格外震撼。\n\n若時間充裕，亦可另行加購冰河湖船遊或斯卡夫塔山冰川健行，深入認識歐洲最大冰川的夏日奇景。今晚繼續入住南岸。",
      highlights: icelandSelfDriveSummer10Day4Highlights,
      optionalActivities: icelandSelfDriveSummer10Day4OptionalActivities,
    },
    {
      day: 5,
      title: "東部峽灣風光",
      accommodation: "東部峽灣",
      description:
        "今日沿東部峽灣海岸公路北上，穿越幽靜峽灣與漁村，感受冰島東部壯闊而寧靜的夏日海岸風光。夏季東部綠意盎然，日照時數長，可從容探索沿途小鎮。今晚入住東部。",
      highlights: icelandSelfDriveSummer10Day5Highlights,
      optionalActivities: icelandSelfDriveSummer10Day5OptionalActivities,
    },
    {
      day: 6,
      title: "米湖及北部風光",
      accommodation: "米湖地區",
      description:
        "今日前往北部米湖（Lake Mývatn）地區，探索偽火山口、熔岩地貌與地熱奇景等獨特火山地質景觀。夏季米湖水鳥豐富，是觀鳥的絕佳時節。亦可另行加購米湖溫泉等體驗。今晚入住米湖地區。",
      highlights: icelandSelfDriveSummer10Day6Highlights,
      optionalActivities: icelandSelfDriveSummer10Day6OptionalActivities,
    },
    {
      day: 7,
      title: "冰島北部",
      accommodation: "西北部地區",
      description:
        "今日造訪冰島北部最具盛名的眾神瀑布（Goðafoss），冰川河水從弧形懸崖傾瀉而下，夏季綠意環繞尤為壯麗。之後可前往「北方之都」阿克雷里（Akureyri），漫步漁港城市街道，感受北部夏日風情。亦可另行加購觀鯨或米湖溫泉等體驗。今晚繼續入住北部。",
      highlights: icelandSelfDriveSummer10Day7Highlights,
      optionalActivities: icelandSelfDriveSummer10Day7OptionalActivities,
    },
    {
      day: 8,
      title: "斯奈山半島",
      accommodation: "西部地區",
      description:
        "斯奈山半島被稱為「冰島縮影」，一日之內可見火山、冰川、黑沙灘、漁村與海岸峭壁等多元地貌。今日將造訪教會山（Kirkjufell）、布迪爾黑教堂、阿爾納斯塔皮海岸與斯蒂基斯霍爾米漁村，夏季日照時數長，可從容探索半島風光。傍晚返回西部住宿。",
      highlights: icelandSelfDriveSummer10Day8Highlights,
      optionalActivities: icelandSelfDriveSummer10Day8OptionalActivities,
    },
    {
      day: 9,
      title: "冰島西部白銀圈",
      accommodation: "雷克雅維克",
      description:
        "今日從西部返回雷克雅維克，沿途遊覽西部白銀圈（Silver Circle）風光：德爾達圖赫菲溫泉（Deildartunguhver）、熔岩瀑布（Hraunfossar）、兒童瀑布（Barnafoss）等西部特色景觀。夏季植被翠綠，瀑布群景色尤為秀麗。傍晚回到雷克雅維克住宿。",
      highlights: icelandSelfDriveSummer10Day9Highlights,
      optionalActivities: icelandSelfDriveSummer10Day9OptionalActivities,
    },
    {
      day: 10,
      title: "離境日",
      accommodation: "—",
      description:
        "歡樂時光總是過得特別快。今天是離境日，請預留時間前往凱夫拉維克國際機場辦理還車與退稅。若班機時間較晚，可在雷克雅維克市區多留片刻，最後感受這座北歐首都的夏日氛圍。期待您下次再來冰島！",
      highlights: icelandSelfDriveSummer10Day10Highlights,
      optionalActivities: icelandSelfDriveSummer10Day10OptionalActivities,
    }
  ],
  inclusions: {
    included: [

    ],
    excluded: [

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
          question: "到冰島後在哪裡租車？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"如果您購買了我們的自駕套餐，到達冰島之後，您可以直接在機場找到租車點取車。機場的租車點為7*24小時營業，因此無需因為航班時間而擔心租車和還車問題。\"]",
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
          question: "為什麼說來冰島自駕建議您買全險或零賠付保險套餐？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在冰島自駕是探索壯麗景觀的最佳方式，但獨特的路況和氣候也潛藏風險。冰島地理環境、天氣路況特殊，遇到大風或者暴風雪、沙塵暴等極端不可抗天氣。為避免高價賠付，強烈建議您升級全險套餐（或稱零賠付保險），最大程度消除您的後顧之憂，讓旅程專注享受而非擔憂賠償。\"]",
        },
        {
          question: "冰島自駕過程中什麼情況即便您購買全險也不賠付？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島自駕租車雖說全險和0賠付保險基本涵蓋所有保險類型，但以下情況任何保險均不覆蓋，租車人需承擔全額維修及罰金（主要為主觀故意或重大過失造成的損失）\"]",
        }
      ],
    },
    {
      id: "trip",
      title: "行程與自駕",
      items: [
        {
          question: "帕芬假期旅行的冰島自駕套餐中包含什麼？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"我們所有的自駕套餐均包括以下標準選項：\"]",
        },
        {
          question: "在冰島開車需要注意什麼？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島的交通規則與大多數其他國家相似，但也有一些您可能不太熟悉的小知識點。\"]",
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
          question: "去冰島旅遊需要辦理什麼簽證？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"中國大陸公民前往冰島旅行需要辦理旅遊簽證。冰島屬於申根國家，因此您需要辦理申根簽證。\"]",
        },
        {
          question: "在冰島旅行安全嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"冰島是地球上最安全的國家之一。\"]",
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
      tripKey: "iceland/self-drive/summer/9",
      title: "9 天 8 夜冰島夏季環島自駕",
      tourCode: "SSD-091",
      durationLabel: "9 天／8 夜",
      description:
        "一號公路環島經典路線，涵蓋黃金圈、南岸、冰河湖、東北部、米湖與西部。",
    },
  ],
};
