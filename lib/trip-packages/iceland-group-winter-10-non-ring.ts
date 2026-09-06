import type { TripPackage } from "./types";
import { crystalIceCaveSpot } from "./spots/crystal-ice-cave";
import { arnarstapiSpot } from "./spots/arnarstapi";
import { budakirkjaSpot } from "./spots/budakirkja";
import { vikSpot } from "./spots/vik";
import { hraunfossarSpot } from "./spots/hraunfossar";
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
  icelandGroupWinter10NonRingDay1Highlights,
  icelandGroupWinter10NonRingDay1OptionalActivities,
} from "./iceland-group-winter-10-non-ring-day1-cards";
import {
  icelandGroupWinter10NonRingDay2Highlights,
  icelandGroupWinter10NonRingDay2OptionalActivities,
  icelandGroupWinter10NonRingDay3Highlights,
  icelandGroupWinter10NonRingDay3OptionalActivities,
  icelandGroupWinter10NonRingDay4Highlights,
  icelandGroupWinter10NonRingDay4OptionalActivities,
  icelandGroupWinter10NonRingDay5Highlights,
  icelandGroupWinter10NonRingDay5OptionalActivities,
  icelandGroupWinter10NonRingDay6Highlights,
  icelandGroupWinter10NonRingDay6OptionalActivities,
  icelandGroupWinter10NonRingDay7Highlights,
  icelandGroupWinter10NonRingDay7OptionalActivities,
  icelandGroupWinter10NonRingDay8Highlights,
  icelandGroupWinter10NonRingDay8OptionalActivities,
  icelandGroupWinter10NonRingDay9Highlights,
  icelandGroupWinter10NonRingDay9OptionalActivities,
  icelandGroupWinter10NonRingDay10Highlights,
  icelandGroupWinter10NonRingDay10OptionalActivities,
} from "./iceland-group-winter-10-non-ring-days2-10-cards";

export const icelandGroupWinter10NonRing: TripPackage = {
  id: "iceland-group-winter-10-non-ring",
  tripKey: "iceland/group/winter/10/non-ring",
  slug: "iceland-10-days-winter-package-south-coast-and-west-iceland-with-activities",
  tourCode: "SMD-104",
  title: "10 天 9 夜冰島冬季南岸深度跟團遊",
  subtitle: "藍冰洞&冰島馬&溫泉",
  duration: { days: 10, nights: 9 },
  season: { label: "冬季", months: "11 月–4 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-104",
  },
  eyebrow: "冰島集合 · 跟團 · 冬季",
  backHref: "/trips/iceland/group/winter/10",
  backLabel: "返回路線選擇",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/_5c0263f9ce.jpg",
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
      description: "豐富冰島跟團服務經驗",
    },
    {
      id: "local",
      title: "本地優選供應商",
      description: "直連冰島在地嚮導與住宿",
    },
  ],
  intro: {
    summary:
      "這個 10 天 9 夜冰島冬季西南岸深度跟團，由品質小巴團與專業嚮導帶領，涵蓋南岸、黃金圈、西部、斯奈山半島、Hvammsvík 溫泉、冰島馬騎行與雷克雅維克自由行。行程充分顧及冬季日照與路況，節奏從容、安排務實。",
    full: `這個 10 天 9 夜冰島冬季西南岸深度跟團，由品質小巴團與專業嚮導帶領，涵蓋南岸、黃金圈、西部、斯奈山半島、Hvammsvík 溫泉、冰島馬騎行與雷克雅維克自由行。套餐充分顧及冬季日照時數與路況，行程安排合理、節奏從容。

您將沿南岸探索塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）與黑沙灘（Reynisfjara），造訪傑古沙龍冰河湖（Jökulsárlón）、鑽石沙灘（Diamond Beach）與藍冰洞（Blue Ice Cave）；另遊覽黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）。

行程另安排一日西部白銀圈，造訪熔岩瀑布（Hraunfossar）與雷克霍特（Reykholt）歷史名鎮；以及「冰島縮影」斯奈山半島（Snæfellsnes）一日遊、Hvammsvík 溫泉與冰島馬騎行體驗，並留有一日雷克雅維克自由行。途中亦可另行加購絲浮拉裂谷（Silfra）浮潛、賞鯨或極光船遊等體驗。完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，讓您輕鬆盡享冰島冬季西南岸精華。`,
  },
  gallery: [
    {
      id: "_5c0263f9ce",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/_5c0263f9ce.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "image_4438689248",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/image_4438689248.png",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "hofn2_db5c2826b6",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/hofn2_db5c2826b6.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "Kirkjufell1_7c82d855cc",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Kirkjufell1_7c82d855cc.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "hvammsvik1_westiceland_9",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/hvammsvik1_westiceland_9962a9b5e7.webp",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "image_1436059232",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/image_1436059232.png",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    }
  ],
  highlights: [
    "走進冰川的心臟，開啟獨一無二的藍冰洞探險",
    "探索斯奈山半島，冰島奇觀集成在這裡等你發現",
    "在冰島溫泉放鬆身心，擁抱你的每一個細胞",
    "在黑沙灘感受異世風貌和大西洋力量的澎湃",
    "讓南岸瀑布的轟鳴與壯觀喚醒和震顫心靈",
    "在傑古沙龍冰河湖和鑽石沙灘感受冰川雕琢的秘密",
    "體驗熱門旅遊路線黃金圈的三大奇觀和古老火山口",
    "深入西部歷史遺蹟，感受歐洲最快流速溫泉",
    "漫步最北首都，體會雷克雅維克的冰島風情",
  ],
  attractions: [
        reynisfjaraSpot,
    jokulsarlonSpot,
    crystalIceCaveSpot,diamondBeachSpot,seljalandsfossSpot,  skogafossSpot,reykjavikSpot,
    vikSpot,kirkjufellSpot,gullfossSpot,geysirSpot,thingvellirSpot,
    budakirkjaSpot,
    arnarstapiSpot,hraunfossarSpot,],
  routeOverviewSubtitle: "南岸、黃金圈、西部、斯奈山與特色活動冬季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "南岸 → 塞里雅蘭／斯科加瀑布 → 黑沙灘 → 維克" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞 → 返回雷克雅維克" },
    { label: "第 4 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）" },
    { label: "第 5 天", detail: "冰島西部（熔岩瀑布 → 兒童瀑布 → 德爾達圖赫菲溫泉）" },
    { label: "第 6 天", detail: "斯奈山半島（教會山 → 阿爾納斯塔皮 → 布迪爾黑教堂）" },
    { label: "第 7 天", detail: "Hvammsvík 溫泉（可選浮潛）" },
    { label: "第 8 天", detail: "冰島馬騎行（可選浮潛）" },
    { label: "第 9 天", detail: "雷克雅維克自由行（可選賞鯨）" },
    { label: "第 10 天", detail: "雷克雅維克 → 機場離境" }
  ],
  routeMap: {
    waypoints: [
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 1 天",
        detail: "雷克雅維克（入境、機場接送）",
      },
      {
        lng: -18.057,
        lat: 63.794,
        label: "第 2 天",
        detail: "南岸瀑布 → 黑沙灘",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 3 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞",
      },
      {
        lng: -20.5322,
        lat: 64.3271,
        label: "第 4 天",
        detail: "黃金圈",
      },
      {
        lng: -21.39,
        lat: 64.7,
        label: "第 5 天",
        detail: "冰島西部",
      },
      {
        lng: -23.8,
        lat: 64.8,
        label: "第 6 天",
        detail: "斯奈山半島",
      },
      {
        lng: -22.35,
        lat: 64.02,
        label: "第 7 天",
        detail: "Hvammsvík 溫泉",
      },
      {
        lng: -21.88,
        lat: 64.12,
        label: "第 8 天",
        detail: "冰島馬騎行",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 9 天",
        detail: "雷克雅維克自由行",
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
        "抵達凱夫拉維克機場後，搭乘套餐安排的機場大巴前往雷克雅維克市區飯店辦理入住。\n\n若班機抵達時間較早，可前往 Sky Lagoon 天空之境溫泉放鬆身心，在無邊泳池中眺望海景，體驗冰島地熱溫泉文化。晚間抵達者可在市區用餐後早些休息，為次日南岸品質小巴團儲備體力。",
      highlights: icelandGroupWinter10NonRingDay1Highlights,
      optionalActivities: icelandGroupWinter10NonRingDay1OptionalActivities,
    },
    {
      day: 2,
      title: "南岸經典觀光：遊覽壯美南岸瀑布及黑沙灘",
      accommodation: "南岸",
      description:
        "今日搭乘品質小巴團沿南岸一號公路南下。冬季南岸色調獨特：白雪覆蓋大地、天際染上粉霞。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；冬季基於安全考量，塞里雅蘭瀑布後方小徑通常封閉。繼續前往黑沙灘（Reynisfjara），遠處可見雷尼斯岩（Reynisdrangar）矗立海中，途中經過維克（Vík）。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸。",
      highlights: icelandGroupWinter10NonRingDay2Highlights,
      optionalActivities: icelandGroupWinter10NonRingDay2OptionalActivities,
    },
    {
      day: 3,
      title: "冰河湖風景：傑古沙龍冰河湖、鑽石沙灘、避世小鎮維克",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園。造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach），浮冰在黑色沙灘上晶瑩閃耀，黑白對比格外震撼。\n\n行程亮點為藍冰洞（Blue Ice Cave）探險：在專業嚮導帶領下穿戴安全裝備，進入冰川內部欣賞深邃冰藍世界。結束後返回雷克雅維克，途中將途經 Hofskirkja 草皮教堂、埃爾德熔岩原（Eldhraun）與維克（Vík）。",
      highlights: icelandGroupWinter10NonRingDay3Highlights,
      optionalActivities: icelandGroupWinter10NonRingDay3OptionalActivities,
    },
    {
      day: 4,
      title: "黃金圈環遊：黃金瀑布、辛格維利爾國家公園、蓋錫爾間歇泉地帶",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。史托克間歇泉（Strokkur）每隔數分鐘噴發一次，請在嚮導指定的安全區域內觀賞。行程另造訪凱瑞斯火山口（Kerið Crater）。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupWinter10NonRingDay4Highlights,
      optionalActivities: icelandGroupWinter10NonRingDay4OptionalActivities,
    },
    {
      day: 5,
      title: "探訪西部：熔岩瀑布、兒童瀑布、歐洲流速最快溫泉",
      accommodation: "西部",
      description:
        "今日搭乘品質小巴團探索西部白銀圈。造訪熔岩瀑布（Hraunfossar）、兒童瀑布（Barnafoss）與雷克霍特（Reykholt）歷史名鎮，並參觀德爾達圖赫菲溫泉（Deildartunguhver）。行程另安排 Víðgelmir 火山岩洞探險，由專業嚮導帶領並提供安全裝備。今晚入住西部。",
      highlights: icelandGroupWinter10NonRingDay5Highlights,
      optionalActivities: icelandGroupWinter10NonRingDay5OptionalActivities,
    },
    {
      day: 6,
      title: "冰島縮影斯奈山半島：黑教堂、教會山、阿爾納斯塔皮漁村",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團前往斯奈山半島（Snæfellsnes），被稱為「冰島縮影」。造訪布迪爾黑教堂（Búðakirkja）、海豹沙灘（Ytri-Tunga）、教會山（Kirkjufell）與阿爾納斯塔皮（Arnarstapi）海岸。傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupWinter10NonRingDay6Highlights,
      optionalActivities: icelandGroupWinter10NonRingDay6OptionalActivities,
    },
    {
      day: 7,
      title: "輕鬆活動日：Hvammsvík溫泉（可選浮潛）",
      accommodation: "雷克雅維克",
      description:
        "今日前往鯨魚峽灣（Hvalfjörður）的 Hvammsvík 溫泉，在戶外溫泉池中眺望峽灣風光，放鬆身心。亦可另行加購絲浮拉裂谷（Silfra）浮潛體驗。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupWinter10NonRingDay7Highlights,
      optionalActivities: icelandGroupWinter10NonRingDay7OptionalActivities,
    },
    {
      day: 8,
      title: "特別活動日：冰島馬騎行（可選浮潛）",
      accommodation: "雷克雅維克",
      description:
        "今日安排冰島馬騎行體驗，由專業騎行嚮導帶領穿越郊外原野，感受冰島馬獨特的 tölt 步態。亦可另行加購絲浮拉裂谷（Silfra）浮潛體驗。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupWinter10NonRingDay8Highlights,
      optionalActivities: icelandGroupWinter10NonRingDay8OptionalActivities,
    },
    {
      day: 9,
      title: "雷克雅維克自由活動日（可選賞鯨）",
      accommodation: "雷克雅維克",
      description:
        "今日在雷克雅維克自由安排一日，漫步洛加維格大街（Laugavegur）、哈帕音樂廳（Harpa）與彩虹街等市區景點，品嚐當地美食，感受北歐首都的獨特氛圍。亦可另行加購賞鯨、極光船遊或溫泉等體驗。今晚繼續入住雷克雅維克。",
      highlights: icelandGroupWinter10NonRingDay9Highlights,
      optionalActivities: icelandGroupWinter10NonRingDay9OptionalActivities,
    },
    {
      day: 10,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續。\n\n若仍有餘裕，可在雷克雅維克市區漫步，或選擇前往藍湖溫泉（Blue Lagoon）結束旅程。",
      highlights: icelandGroupWinter10NonRingDay10Highlights,
      optionalActivities: icelandGroupWinter10NonRingDay10OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含各類景點、歷史、文化、自然等資訊描述）",
      "機場往返市區飯店大巴接送",
      "雷克雅維克市區7晚住宿",
      "雷克雅維克市區參團接送服務",
      "Sky Lagoon 天空之境溫泉7步療法純享體驗門票",
      "Sky lagoon 往返接駁巴士",
      "南岸1晚舒適級住宿",
      "西部1晚舒適級住宿",
      "南岸2日遊（英文嚮導）",
      "黃金圈1日遊（英文嚮導）",
      "西部與斯奈山半島2日遊（英文嚮導）",
      "每日住宿提供早餐",
      "凱瑞斯火山口門票",
      "藍冰洞探險體驗及安全裝備",
      "Vidgelmir熔岩洞穴探險及安全設備",
      "冰島馬騎行體驗及裝備",
      "Hvammsvik溫泉門票（含首都接送）",
      "台灣冰島雙時區服務",
      "車載WiFi",
      "VAT增值稅",
    ],
    excluded: [
      "午餐",
      "晚餐",
      "登山鞋",
      "個人保暖衣物和裝備",
      "個人旅行保險",
      "自選報名活動",
    ],
  },
  faq: [
    {
      id: "trip",
      title: "行程與跟團",
      items: [
        {
          question: "帕芬假期旅行的旅行團套餐是什麼？是自營的嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"帕芬假期旅行的旅行團套餐是我們最熱門的產品。在旅行團套餐中，我們將為您提供路線合理、景點全面的觀光套餐，均包含機場往返首都接送、首都參團接送、冰島本地優選供應商的一日遊與多日遊（含司機兼嚮導）、住宿（含早餐）、獨家客製的中文行程手冊（含各類景點、歷史、文化、自然等資訊描述）、台灣冰島雙時區的中文客服等服務，並提供行程客製服務。\"]",
        },
        {
          question: "這個行程的行李額是多少？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"您能夠攜帶上車的行李箱最大尺寸為56 x 45 x 25 cm（大約為22寸行李箱大小）。如果您有其他大件行李，也可以聯繫飯店寄存。\"]",
        },
        {
          question: "帕芬假期旅行的冰島旅遊套餐中包含往返機票嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"為了給您提供最大的靈活性和最低的價格，我們的旅行套餐均不包含航班的預訂。一旦您確定了大致的旅行時間，就可以開始在網上查找合適的航班。\"]",
        },
        {
          question: "為什麼我只能選擇首都雷克雅維克地區的飯店等級？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為首都雷克雅維克的飯店選擇更多，且行程相對更靈活。而套餐內冰島其他地區的行程中，參團的顧客都是統一行動的，有固定的行程路線和固定的飯店。因此為保障行程的統一性與合理性，並不浪費顧客的遊覽時間，其他地區暫時無法選擇飯店等級，請您體諒。\"]",
        },
        {
          question: "什麼是自選報名活動？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"帕芬假期旅行在每一天的行程下方增加了對應的自選報名活動，您可以根據自己的需求選擇是否自費參加這些額外的活動。\"]",
        },
        {
          question: "如果天氣原因導致不發團該怎麼辦？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"針對以下三種情況，我們將分別處理您的退款事宜：\"]",
        },
        {
          question: "預訂後多久能收到相關的參團資料？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在您付完訂金後的5-7個工作日內（且在參團前），我們會提供行程相關的訂單資訊清單（包含預訂飯店資訊等）及簽證輔助材料；在付完全款並提供航班資訊等所有有效資訊後的5-7個工作日內（且在參團前），我們會提供完整的行程手冊等。行程手冊包含中文行程單、接送地址、各類景點、歷史、文化、自然等資訊描述。\"]",
        },
        {
          question: "去冰島旅遊需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"雖然比世界上緯度相近的許多地方都要溫暖，但冰島總體上還是一個寒冷的國家，特別是在冬季，平均氣溫在0攝氏度左右，而夏季的平均氣溫約在10-15度。\"]",
        }
      ],
    },
    {
      id: "accommodation",
      title: "住宿相關",
      items: [
        {
          question: "帕芬假期旅行提供什麼住宿？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在帕芬假期旅行的套餐中，您可以選擇三種級別的住宿：\"]",
        }
      ],
    }
  ],
  similarTrips: [
    {
      tripKey: "iceland/group/winter/10/ring",
      title: "10 天 9 夜冰島冬季跟團遊",
      tourCode: "SMD-102",
      durationLabel: "10 天／9 夜",
      description:
        "冬季環島跟團：黃金圈、南岸、東部峽灣與北部精華。",
    },
    {
      tripKey: "iceland/group/winter/9/non-ring",
      title: "9 天 8 夜冰島冬季南岸輕奢跟團遊",
      tourCode: "SMD-094",
      durationLabel: "9 天／8 夜",
      description:
        "南岸、黃金圈、西部、斯奈山與絲浮拉浮潛，冬季非環島精選。",
    },
  ],
};
