import type { TripPackage } from "./types";
import { myvatnGeothermalSpot } from "./spots/myvatn-geothermal";
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
import {
  icelandGroupWinter10Day1Highlights,
  icelandGroupWinter10Day1OptionalActivities,
} from "./iceland-group-winter-10-day1-cards";
import {
  icelandGroupWinter10Day2Highlights,
  icelandGroupWinter10Day2OptionalActivities,
  icelandGroupWinter10Day3Highlights,
  icelandGroupWinter10Day3OptionalActivities,
  icelandGroupWinter10Day4Highlights,
  icelandGroupWinter10Day4OptionalActivities,
  icelandGroupWinter10Day5Highlights,
  icelandGroupWinter10Day5OptionalActivities,
  icelandGroupWinter10Day6Highlights,
  icelandGroupWinter10Day6OptionalActivities,
  icelandGroupWinter10Day7Highlights,
  icelandGroupWinter10Day7OptionalActivities,
  icelandGroupWinter10Day8Highlights,
  icelandGroupWinter10Day8OptionalActivities,
  icelandGroupWinter10Day9Highlights,
  icelandGroupWinter10Day9OptionalActivities,
  icelandGroupWinter10Day10Highlights,
  icelandGroupWinter10Day10OptionalActivities,
} from "./iceland-group-winter-10-days2-10-cards";

export const icelandGroupWinter10: TripPackage = {
  id: "iceland-group-winter-10",
  tripKey: "iceland/group/winter/10",
  slug: "10-days-circle-of-iceland-winter-package",
  tourCode: "SMD-102",
  title: "10 天 9 夜冰島冬季跟團遊",
  subtitle: "黃金圈 & 冰川健行",
  duration: { days: 10, nights: 9 },
  season: { label: "冬季", months: "11 月–4 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-102",
  },
  eyebrow: "冰島集合 · 跟團 · 冬季",
  backHref: "/trips/iceland/group/winter",
  backLabel: "返回冬季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/nicola_abraham_n_Qq_B_Xb_Weso_E_unsplash_ca0f843573.jpg",
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
      "這個 10 天 9 夜冰島冬季一號公路完整環島跟團，由品質小巴團與專業嚮導帶領，盡覽黃金圈、南岸、東部峽灣、米湖、賞鯨、西部與斯奈山半島等冬日精華。行程充分顧及冬季日照與路況，節奏適中、安排務實。",
    full: `這個 10 天 9 夜冰島冬季一號公路完整環島跟團，由品質小巴團與專業嚮導帶領，沿環島一號公路盡覽黃金圈、南岸、東部峽灣、米湖、賞鯨、西部與斯奈山半島等冬日精華。套餐充分顧及冬季日照時數與路況，行程安排合理、節奏適中。

您將造訪黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）；沿南岸探索壯麗瀑布、冰川與黑沙灘（Reynisfjara），並進入傑古沙龍冰河湖（Jökulsárlón）、鑽石沙灘（Diamond Beach）與藍冰洞（Blue Ice Cave）。

往東穿越東部峽灣海岸；北上米湖（Lake Mývatn）地區探索火山地質奇景，並造訪眾神瀑布（Goðafoss）與「北方之都」阿克雷里（Akureyri）。回程則安排北部賞鯨、西部熔岩瀑布（Hraunfossar）等風光，並探索「冰島縮影」斯奈山半島（Snæfellsnes）。途中亦可另行加購雪地摩托、溫泉體驗或極光船遊等冬季活動。完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，讓您輕鬆盡享冰島環島精華。`,
  },
  gallery: [
    {
      id: "nicola_abraham_n_Qq_B_Xb",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/nicola_abraham_n_Qq_B_Xb_Weso_E_unsplash_ca0f843573.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "feipeng_yi_q_V_Md_Zir4wo",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/feipeng_yi_q_V_Md_Zir4wo_unsplash_9375ef77ea.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "cyrill_hanni_We_Ml8e_W_M",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/cyrill_hanni_We_Ml8e_W_Mnjw_unsplash_4177647439.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "russell_moore_g3me_u2_u4",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/russell_moore_g3me_u2_u48_unsplash_942633c6a6.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    }
  ],
  highlights: [
    "跟隨專業嚮導開啟冰島環島旅程",
    "暢享冰島溫泉的舒適和療愈",
    "造訪傑古沙龍冰河湖和鑽石沙灘",
    "見證歐洲最大冰川的壯麗宏偉",
    "探尋冰島東部峽灣別樣之美",
    "探秘冰島旅遊熱門路線黃金圈",
    "在北部體驗獨一無二的冰島賞鯨",
    "與絢麗的北極光不期而遇",
    "縱覽冰島西部沿途風光",
    "探索擁有多樣化地貌的斯奈山半島",
  ],
  attractions: [
        thingvellirSpot,
    geysirSpot,
    gullfossSpot,seljalandsfossSpot,
    skogafossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    diamondBeachSpot,
    egilsstadirSpot,myvatnSpot,
    myvatnGeothermalSpot,godafossSpot,
    akureyriSpot,kirkjufellSpot,
    barnafossSpot,],
  routeOverviewSubtitle: "冬季完整環島：南岸、東部峽灣、北部、斯奈山與西部白銀圈",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）" },
    { label: "第 3 天", detail: "南岸 → 塞里雅蘭／斯科加瀑布 → 冰川健行 → 黑沙灘" },
    { label: "第 4 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞" },
    { label: "第 5 天", detail: "東部峽灣風光" },
    { label: "第 6 天", detail: "米湖 → Hverir 地熱區 → 黑暗城堡 → 眾神瀑布" },
    { label: "第 7 天", detail: "北部賞鯨（胡薩維克／阿克雷里）" },
    { label: "第 8 天", detail: "斯奈山半島（教會山 → 阿爾納斯塔皮 → 布迪爾黑教堂）" },
    { label: "第 9 天", detail: "冰島西部（熔岩瀑布 → 兒童瀑布 → 德爾達圖赫菲溫泉）" },
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
        detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞",
      },
      {
        lng: -14.4,
        lat: 65.26,
        label: "第 5 天",
        detail: "東部峽灣",
      },
      {
        lng: -16.9,
        lat: 65.6,
        label: "第 6 天",
        detail: "米湖與北部地熱景觀",
      },
      {
        lng: -18.09,
        lat: 65.68,
        label: "第 7 天",
        detail: "北部賞鯨",
      },
      {
        lng: -23.8,
        lat: 64.8,
        label: "第 8 天",
        detail: "斯奈山半島",
      },
      {
        lng: -21.39,
        lat: 64.7,
        label: "第 9 天",
        detail: "冰島西部白銀圈",
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
        "抵達凱夫拉維克機場後，搭乘套餐安排的機場大巴前往雷克雅維克市區飯店辦理入住。\n\n若班機抵達時間較早，可前往 Sky Lagoon 天空之境溫泉放鬆身心，在無邊泳池中眺望海景，體驗冰島地熱溫泉文化。晚間抵達者可在市區用餐後早些休息，為次日黃金圈品質小巴團儲備體力。",
      highlights: icelandGroupWinter10Day1Highlights,
      optionalActivities: icelandGroupWinter10Day1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈：辛格維利爾國家公園、蓋錫爾間歇泉地帶、黃金瀑布",
      accommodation: "南岸",
      description:
        "今日搭乘品質小巴團造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。史托克間歇泉（Strokkur）每隔數分鐘噴發一次，請在嚮導指定的安全區域內觀賞。結束後繼續南下，今晚入住南岸。",
      highlights: icelandGroupWinter10Day2Highlights,
      optionalActivities: icelandGroupWinter10Day2OptionalActivities,
    },
    {
      day: 3,
      title: "塞里雅蘭瀑布、斯科加瀑布、維克黑沙灘、冰川健行",
      accommodation: "南岸",
      description:
        "今日品質小巴團沿南岸一號公路南下。冬季南岸色調獨特：白雪覆蓋大地、天際染上粉霞。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；冬季基於安全考量，塞里雅蘭瀑布後方小徑通常封閉。繼續前往黑沙灘（Reynisfjara），遠處可見雷尼斯岩（Reynisdrangar）矗立海中，途中經過維克（Vík）。行程另安排索爾黑馬冰川（Sólheimajökull）健行，由專業嚮導帶領並提供安全裝備。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚繼續入住南岸。",
      highlights: icelandGroupWinter10Day3Highlights,
      optionalActivities: icelandGroupWinter10Day3OptionalActivities,
    },
    {
      day: 4,
      title: "傑古沙龍冰河湖、鑽石沙灘、藍冰洞探險",
      accommodation: "南岸或東部峽灣",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園。造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach），浮冰在黑色沙灘上晶瑩閃耀，黑白對比格外震撼。\n\n行程亮點為藍冰洞（Blue Ice Cave）探險：在專業嚮導帶領下穿戴安全裝備，進入冰川內部欣賞深邃冰藍世界。今晚入住南岸或東部峽灣。",
      highlights: icelandGroupWinter10Day4Highlights,
      optionalActivities: icelandGroupWinter10Day4OptionalActivities,
    },
    {
      day: 5,
      title: "東部峽灣風光",
      accommodation: "東部峽灣",
      description:
        "今日沿東部峽灣海岸公路北上，穿越幽靜峽灣與漁村，感受冰島東部壯闊而寧靜的冬日海岸風光。途中將途經埃伊爾斯塔濟（Egilsstaðir），感受東部漁村生活。亦可另行加購東部騎馬體驗或 Vök Baths 湖上溫泉。冬季東部日照時數較短，實際停留時間將由嚮導依天候與路況調整。今晚入住東部峽灣。",
      highlights: icelandGroupWinter10Day5Highlights,
      optionalActivities: icelandGroupWinter10Day5OptionalActivities,
    },
    {
      day: 6,
      title: "米湖、Hverir地熱泥漿池、黑暗城堡、眾神瀑布",
      accommodation: "米湖或北部",
      description:
        "今日前往北部米湖（Lake Mývatn）地區，造訪 Hverir 地熱泥漿池、黑暗城堡（Dimmuborgir）熔岩柱群與眾神瀑布（Goðafoss）。米湖周邊火山地貌獨特，是冬季追尋北極光的熱門區域之一。傍晚前往阿克雷里（Akureyri）感受北部城市風情。今晚入住米湖或北部。",
      highlights: icelandGroupWinter10Day6Highlights,
      optionalActivities: icelandGroupWinter10Day6OptionalActivities,
    },
    {
      day: 7,
      title: "北部賞鯨之旅",
      accommodation: "西部",
      description:
        "今日從阿克雷里出發，前往豪加內斯（Hauganes）出海賞鯨。專業嚮導將介紹當地海洋生態，若運氣佳可見到座頭鯨、海豚等海洋生物。賞鯨結束後繼續向西前進，途中嚮導將在風景優美的地點適時停車。今晚入住西部。",
      highlights: icelandGroupWinter10Day7Highlights,
      optionalActivities: icelandGroupWinter10Day7OptionalActivities,
    },
    {
      day: 8,
      title: "斯奈山半島一日遊",
      accommodation: "西部",
      description:
        "今日搭乘品質小巴團前往斯奈山半島（Snæfellsnes），被稱為「冰島縮影」。造訪 Gerðuberg 稜柱懸崖、海豹沙灘（Ytri-Tunga）、Djúpalónsandur 黑沙灘與教會山（Kirkjufell）。亦可另行加購 Víðgelmir 熔岩洞穴探險。今晚入住西部。",
      highlights: icelandGroupWinter10Day8Highlights,
      optionalActivities: icelandGroupWinter10Day8OptionalActivities,
    },
    {
      day: 9,
      title: "赫倫瀑布、兒童瀑布、德爾達圖赫菲溫泉",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團遊覽西部博爾加峽灣（Borgarfjörður）沿線風光，造訪熔岩瀑布（Hraunfossar）、兒童瀑布（Barnafoss）與德爾達圖赫菲溫泉（Deildartunguhver）。傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupWinter10Day9Highlights,
      optionalActivities: icelandGroupWinter10Day9OptionalActivities,
    },
    {
      day: 10,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續。\n\n若仍有餘裕，可在雷克雅維克市區漫步：哈爾格林姆斯大教堂（Hallgrímskirkja）、哈帕音樂廳（Harpa）與國家博物館都是不錯的選擇。亦可選擇前往藍湖溫泉（Blue Lagoon）結束旅程。",
      highlights: icelandGroupWinter10Day10Highlights,
      optionalActivities: icelandGroupWinter10Day10OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含各類景點、歷史、文化、自然等資訊描述）",
      "機場往返市區飯店大巴接送",
      "英文嚮導",
      "雷克雅維克市區2晚住宿",
      "環島8日遊",
      "環島行程中7晚舒適級住宿",
      "每日住宿提供早餐",
      "Sky Lagoon 天空之境溫泉7步療法純享體驗門票",
      "Sky lagoon 往返接駁巴士",
      "冰川健行體驗及安全裝備",
      "藍冰洞探險體驗及安全裝備",
      "北部賞鯨體驗",
      "車載WiFi",
      "台灣冰島雙時區服務",
      "VAT增值稅",
    ],
    excluded: [
      "晚餐",
      "午餐",
      "防寒衣物",
      "登山鞋",
      "自選報名活動",
      "個人旅行保險",
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
          question: "預訂後多久能收到相關的參團資料？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在您付完訂金後的5-7個工作日內（且在參團前），我們會提供行程相關的訂單資訊清單（包含預訂飯店資訊等）及簽證輔助材料；在付完全款並提供航班資訊等所有有效資訊後的5-7個工作日內（且在參團前），我們會提供完整的行程手冊等。行程手冊包含中文行程單、接送地址、各類景點、歷史、文化、自然等資訊描述。\"]",
        },
        {
          question: "什麼是自選報名活動？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"帕芬假期旅行在每一天的行程下方增加了對應的自選報名活動，您可以根據自己的需求選擇是否自費參加這些額外的活動。\"]",
        },
        {
          question: "為什麼我只能選擇首都雷克雅維克地區的飯店等級？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為首都雷克雅維克的飯店選擇更多，且行程相對更靈活。而套餐內冰島其他地區的行程中，參團的顧客都是統一行動的，有固定的行程路線和固定的飯店。因此為保障行程的統一性與合理性，並不浪費顧客的遊覽時間，其他地區暫時無法選擇飯店等級，請您體諒。\"]",
        },
        {
          question: "套餐單人間為什麼需要補差價？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為冰島的單人間房價要高於雙人間房價的一半，而預訂時的預設房價是按雙人間均攤至每人的價格來計算的。因此套餐內的單人間需要補交一筆差價。由於旅行團套餐系統設定在預訂環節僅可以選首都雷克雅維克地區的房間數量，如果需要將套餐中包含的旅行團增加單人間，那麼需要在初始頁面選中1人來查看全程單人間價格，具體細節可諮詢客服。\"]",
        },
        {
          question: "為什麼不是所有飯店都能到飯店門口接團？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"為了維持雷克雅維克市中心舒適安全的城市環境，冰島政府規定旅遊巴士不可隨意進入市中心區域，而必須在附近指定的接車地點接送旅客。\"]",
        },
        {
          question: "冰島值得去嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這個問題可能不同的人有不同的答案。但是作為一個專注於冰島旅行的團隊，以及作為一群熱愛自然、熱愛美好的個體來說：\"]},{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"是的！冰島太值得了！\"]",
        },
        {
          question: "冰島哪個季節最適合旅遊？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這個問題要取決於您的旅行計劃和安排，對於想體驗不同景觀和項目的旅客來說，答案也會有所不同：\"]",
        },
        {
          question: "在冰島旅行安全嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"冰島是地球上最安全的國家之一。\"]",
        },
        {
          question: "去冰島旅遊需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"雖然比世界上緯度相近的許多地方都要溫暖，但冰島總體上還是一個寒冷的國家，特別是在冬季，平均氣溫在0攝氏度左右，而夏季的平均氣溫約在10-15度。\"]",
        },
        {
          question: "如果天氣原因導致不發團該怎麼辦？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"針對以下三種情況，我們將分別處理您的退款事宜：\"]",
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
      tripKey: "iceland/group/winter/9",
      title: "9 天 8 夜冰島冬季跟團遊",
      tourCode: "SMD-092",
      durationLabel: "9 天／8 夜",
      description:
        "冬季深入環島：南岸、東部峽灣、北部與斯奈山半島。",
    },
    {
      tripKey: "iceland/group/winter/8",
      title: "8 天 7 夜冰島冬季跟團遊",
      tourCode: "SMD-082",
      durationLabel: "8 天／7 夜",
      description:
        "冬季環島跟團精選，涵蓋黃金圈、南岸與北部精華。",
    },
  ],
};
