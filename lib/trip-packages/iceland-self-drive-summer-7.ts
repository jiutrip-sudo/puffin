import type { TripPackage } from "./types";
import { blueLagoonSpot } from "./spots/blue-lagoon";
import { goldenCircleSpot } from "./spots/golden-circle";
import { vatnajokullSpot } from "./spots/vatnajokull";
import { hraunfossarSpot } from "./spots/hraunfossar";
import { kirkjufellSpot } from "./spots/kirkjufell";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import {
  icelandSelfDriveSummer7Day1Highlights,
  icelandSelfDriveSummer7Day1OptionalActivities,
} from "./iceland-self-drive-summer-7-day1-cards";
import {
  icelandSelfDriveSummer7Day2Highlights,
  icelandSelfDriveSummer7Day2OptionalActivities,
  icelandSelfDriveSummer7Day3Highlights,
  icelandSelfDriveSummer7Day3OptionalActivities,
  icelandSelfDriveSummer7Day4Highlights,
  icelandSelfDriveSummer7Day4OptionalActivities,
  icelandSelfDriveSummer7Day5Highlights,
  icelandSelfDriveSummer7Day5OptionalActivities,
  icelandSelfDriveSummer7Day6Highlights,
  icelandSelfDriveSummer7Day6OptionalActivities,
  icelandSelfDriveSummer7Day7Highlights,
  icelandSelfDriveSummer7Day7OptionalActivities,
} from "./iceland-self-drive-summer-7-days2-7-cards";

export const icelandSelfDriveSummer7: TripPackage = {
  id: "iceland-self-drive-summer-7",
  tripKey: "iceland/self-drive/summer/7",
  slug: "7-days-6-nights-self-drive-south-coast-golden-circle-snaefellsnes",
  tourCode: "SSD-071",
  title: "7 天 6 夜冰島夏季暢享自駕遊",
  subtitle: "南岸風光 & 斯奈山半島",
  duration: { days: 7, nights: 6 },
  season: { label: "夏季", months: "4 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "自駕",
    tourCode: "SSD-071",
  },
  eyebrow: "冰島集合 · 自駕 · 夏季",
  backHref: "/trips/iceland/self-drive/summer",
  backLabel: "返回夏季自駕",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/Stykkisholmur_4e412e8740.jpg",
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
      "這個 7 天 6 夜冰島西南岸夏季自駕遊，讓您在一週內盡覽冰島最熱門景區，涵蓋三大國家公園、南岸、黃金圈與斯奈山半島。夏季日照充裕，可充分把握長白晝與午夜陽光下的風光。行程節奏適中、安排務實。",
    full: `這個 7 天 6 夜冰島西南岸夏季自駕遊，讓您在一週的時間內盡覽冰島西南部最熱門景區，涵蓋三大國家公園、南岸、黃金圈與斯奈山半島。夏季日照時數長，可從容安排景點停留，並在午夜陽光下感受冰島獨特天色。

若您熱愛攝影，這趟旅程更是絕佳選擇：夏季可繞行塞里雅蘭瀑布（Seljalandsfoss）水簾後方小徑，並造訪辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）、黃金瀑布（Gullfoss）、鑽石沙灘（Diamond Beach）與南岸瀑布等經典景點。迪霍拉里（Dyrhólaey）等地夏季常有海鸚棲息，為海岸風光增添生趣。

您將近距離感受巨大冰川與翠綠苔原，見證傑古沙龍冰河湖（Jökulsárlón）上千年浮冰漂流，海豹偶爾在冰塊上休憩。西部還可探索「冰島縮影」斯奈山半島（Snæfellsnes），於教會山（Kirkjufell）留影——這裡是《權力遊戲》取景地，也是風光攝影愛好者的必訪景點。

途中亦可另行加購冰川健行、冰河湖水陸兩棲船遊、絲浮拉裂谷（Silfra）浮潛或溫泉體驗等夏季活動，或於自駕途中造訪小眾景點。完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，讓您輕鬆盡享冰島夏季精華。`,
  },
  gallery: [
    {
      id: "Stykkisholmur_4e412e8740",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Stykkisholmur_4e412e8740.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    },
    {
      id: "Vik_4fa1bd5ee0",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Vik_4fa1bd5ee0.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    },
    {
      id: "Olafsvik_46433bee83",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Olafsvik_46433bee83.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    },
    {
      id: "joss_broward_2_JO_01_Lf_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/joss_broward_2_JO_01_Lf_J0c_unsplash_04d3e60408.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    }
  ],
  highlights: [
    "全程由您掌控方向盤並設定自己的旅行節奏",
    "沿著冰島1號公路暢意自駕",
    "探索冰島南岸瀑布、黑沙灘、飛機殘骸",
    "遨遊傑古沙龍冰河湖，欣賞鑽石沙灘的魅力",
    "探索植被繁茂的羽毛峽谷、拜訪維克",
    "一覽而盡黃金圈經典景點",
    "尋覓獨特的熔岩瀑布和兒童瀑布",
    "探索斯奈山半島多樣化的風景",
  ],
  attractions: [
        blueLagoonSpot,goldenCircleSpot,seljalandsfossSpot,
    skogafossSpot,
    jokulsarlonSpot,
    vatnajokullSpot,reynisfjaraSpot,
    diamondBeachSpot,
    kirkjufellSpot,
    hraunfossarSpot,],
  routeOverviewSubtitle: "南岸、黃金圈與斯奈山半島夏季自駕動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、取車、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "南岸瀑布群 → 黑沙灘 → 南岸住宿" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 南部住宿" },
    { label: "第 4 天", detail: "南岸小眾景點（羽毛峽谷、維克、小冰河湖）" },
    { label: "第 5 天", detail: "黃金圈 → 冰島西部熔岩瀑布" },
    { label: "第 6 天", detail: "斯奈山半島（教會山 → 布迪爾 → 漁村海岸）" },
    { label: "第 7 天", detail: "雷克雅維克市區（可選）→ 機場離境" }
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
        detail: "南岸瀑布群 → 黑沙灘",
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
        detail: "黃金圈 → 冰島西部",
      },
      {
        lng: -23.783,
        lat: 64.926,
        label: "第 6 天",
        detail: "斯奈山半島 → 教會山",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 7 天",
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
        "今天是您入境冰島的第一天。抵達後請先至租車櫃檯取車，工作人員會協助檢查車輛，並說明冰島夏季安全駕駛須知。之後即可前往雷克雅維克精選飯店入住安頓。\n\n若時間充裕，可另行加購藍湖溫泉或 Sky Lagoon 天空之境溫泉放鬆身心，為接下來的自駕儲備體力。",
      highlights: icelandSelfDriveSummer7Day1Highlights,
      optionalActivities: icelandSelfDriveSummer7Day1OptionalActivities,
    },
    {
      day: 2,
      title: "南岸瀑布風光、黑沙灘",
      accommodation: "南岸",
      description:
        "今天請一早出發，沿冰島南岸一號公路南下。夏季日照充裕，南岸綠意盎然，瀑布與海岸在長白晝下格外清晰。\n\n首先來到塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；夏季可繞行塞里雅蘭瀑布後方小徑，從水簾後方欣賞不同視角。繼續南下造訪黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中；沿途亦可安排 DC-3 飛機殘骸，或另行加購冰川健行等戶外體驗。今晚入住南岸附近飯店。",
      highlights: icelandSelfDriveSummer7Day2Highlights,
      optionalActivities: icelandSelfDriveSummer7Day2OptionalActivities,
    },
    {
      day: 3,
      title: "傑古沙龍冰河湖、鑽石沙灘",
      accommodation: "南部",
      description:
        "今日繼續往東南前進，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。夏季陽光下，浮冰在黑色沙灘上晶瑩閃耀，黑白對比格外震撼，海豹偶爾在冰塊上休憩。\n\n若時間充裕，亦可另行加購冰河湖水陸兩棲船遊或斯卡夫塔山冰川健行，深入認識歐洲最大冰川的夏日風貌。今晚繼續入住南部。",
      highlights: icelandSelfDriveSummer7Day3Highlights,
      optionalActivities: icelandSelfDriveSummer7Day3OptionalActivities,
    },
    {
      day: 4,
      title: "南岸小眾風光",
      accommodation: "黃金圈區域",
      description:
        "今日節奏較從容，沿南岸造訪更多小眾景點：埃爾德熔岩原（Eldhraun）的蒼翠苔蘚、羽毛峽谷（Fjaðrárgljúfur）的蜿蜒河谷、小冰河湖（Fjallsárlón）的靜謐景致、迪霍拉里（Dyrhólaey）的海岸拱門，以及維克紅頂教堂等地標。夏季迪霍拉里常有海鳥棲息，適合細細感受南岸風光，不必趕路。今晚入住黃金圈區域。",
      highlights: icelandSelfDriveSummer7Day4Highlights,
      optionalActivities: icelandSelfDriveSummer7Day4OptionalActivities,
    },
    {
      day: 5,
      title: "黃金圈、 冰島西部",
      accommodation: "冰島西部",
      description:
        "今日造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。於辛格維利爾國家公園漫步時，亦可另行加購絲浮拉裂谷（Silfra）浮潛等體驗。之後繼續西行，可造訪熔岩瀑布（Hraunfossar）、兒童瀑布（Barnafoss）等西部特色景觀。今晚入住冰島西部。",
      highlights: icelandSelfDriveSummer7Day5Highlights,
      optionalActivities: icelandSelfDriveSummer7Day5OptionalActivities,
    },
    {
      day: 6,
      title: "斯奈山半島風光",
      accommodation: "雷克雅維克",
      description:
        "斯奈山半島被稱為「冰島縮影」，一日之內可見火山、冰川、黑沙灘、漁村與海岸峭壁等多元地貌。今日將造訪教會山（Kirkjufell）、布迪爾黑教堂、阿爾納斯塔皮海岸與斯蒂基斯霍爾米漁村；夏季長白晝下，海岸與山巒在午夜陽光中呈現柔和色調。傍晚返回雷克雅維克住宿。",
      highlights: icelandSelfDriveSummer7Day6Highlights,
      optionalActivities: icelandSelfDriveSummer7Day6OptionalActivities,
    },
    {
      day: 7,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日，請預留時間前往凱夫拉維克國際機場辦理還車與退稅。若班機時間較晚，可在雷克雅維克市區多留片刻，造訪哈帕音樂廳、托寧湖（Tjörnin）等景點；亦可另行加購藍湖溫泉，為旅程收尾。",
      highlights: icelandSelfDriveSummer7Day7Highlights,
      optionalActivities: icelandSelfDriveSummer7Day7OptionalActivities,
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
          question: "什麼是自選報名活動？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"帕芬假期旅行在每一天的行程下方增加了對應的自選報名活動，您可以根據自己的需求選擇是否自費參加這些額外的活動。\"]",
        },
        {
          question: "冰島哪個季節最適合自駕遊？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"夏季是冰島最受歡迎的自駕遊季節。6月到8月的天氣最好，日照時間最長，陽光最為充足，這意味著您每天可以有更多的時間來遊玩，開車也會更加安心。另外，有些景區會在夏季開放更多的體驗遊玩項目，例如傑古沙龍冰河湖的船遊服務在夏季的開放時間最長，且在11月中旬至次年五月期間暫停運營。\"]",
        },
        {
          question: "去冰島自駕需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"無論您在哪個季節前往冰島，都可能會遇到各種天氣情況。有鑑於此，參加冰島自駕套餐時，您最好確保帶上能夠適應不同天氣所需的衣物：\"]",
        },
        {
          question: "冰島環島總共需要多少天？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在冰島的自駕遊時長需要根據您想參觀的景點以及其他的具體因素來進行調整。實際上，繞著 1 號環島公路駕駛一圈只需要 2 天時間，但這樣的話，您就完全得不到遊玩的體驗感了。\"]",
        },
        {
          question: "去冰島旅遊需要辦理什麼簽證？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"中國大陸公民前往冰島旅行需要辦理旅遊簽證。冰島屬於申根國家，因此您需要辦理申根簽證。\"]",
        }
      ],
    }
  ],
  similarTrips: [
    {
      tripKey: "iceland/self-drive/summer/5",
      title: "5 天 4 夜冰島夏季精簡自駕套餐",
      tourCode: "SSD-051",
      durationLabel: "5 天／4 夜",
      description:
        "將冰島南部精華收入囊中，搭配戶外體驗與黃金圈經典路線。",
    },
    {
      tripKey: "iceland/self-drive/summer/6",
      title: "6 天 5 夜冰島夏季精選自駕遊",
      tourCode: "SSD-061",
      durationLabel: "6 天／5 夜",
      description:
        "南岸、冰河湖與黃金圈，並造訪斯奈山半島精華景點。",
    },
    {
      tripKey: "iceland/self-drive/summer/8",
      title: "8 天 7 夜冰島夏季精選自駕",
      tourCode: "SSD-082",
      durationLabel: "8 天／7 夜",
      description:
        "沿一號公路環島，遊覽黃金圈、南岸、冰河湖、東部峽灣、米湖與西部白銀圈。",
    },
    {
      tripKey: "iceland/self-drive/winter/7",
      title: "冰島西南岸 7 天 6 夜冬季自駕遊",
      tourCode: "SSD-072",
      durationLabel: "7 天／6 夜",
      description:
        "冬季版西南岸自駕，涵蓋南岸、冰河湖、黃金圈與斯奈山半島。",
    },
  ],
};
