import type { TripPackage } from "./types";
import { landmannalaugarSpot } from "./spots/landmannalaugar";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import {
  icelandGroupSummer6SouthHikingDay1Highlights,
  icelandGroupSummer6SouthHikingDay1OptionalActivities,
} from "./iceland-group-summer-6-south-hiking-day1-cards";
import {
  icelandGroupSummer6SouthHikingDay2Highlights,
  icelandGroupSummer6SouthHikingDay2OptionalActivities,
  icelandGroupSummer6SouthHikingDay3Highlights,
  icelandGroupSummer6SouthHikingDay3OptionalActivities,
  icelandGroupSummer6SouthHikingDay4Highlights,
  icelandGroupSummer6SouthHikingDay4OptionalActivities,
  icelandGroupSummer6SouthHikingDay5Highlights,
  icelandGroupSummer6SouthHikingDay5OptionalActivities,
  icelandGroupSummer6SouthHikingDay6Highlights,
  icelandGroupSummer6SouthHikingDay6OptionalActivities,
} from "./iceland-group-summer-6-south-hiking-days2-6-cards";

export const icelandGroupSummer6SouthHiking: TripPackage = {
  id: "iceland-group-summer-6-south-hiking",
  tripKey: "iceland/group/summer/6/south-hiking",
  slug: "iceland-summer-6-day-adventure-tour-package-glacier-hiking-volcano-whale-watching",
  tourCode: "SMD-063",
  title: "6 天 5 夜冰島夏季健行探險跟團遊",
  subtitle: "冰川健行&火山探險&首都賞鯨",
  duration: { days: 6, nights: 5 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-063",
  },
  eyebrow: "冰島集合 · 跟團 · 夏季",
  backHref: "/trips/iceland/group/summer",
  backLabel: "返回夏季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/Landmannalaugar_2_620b529d48.jpg",
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
      "這個 6 天 5 夜夏季探險跟團套餐涵蓋火山內部探險、賞鯨、南岸冰川健行與冰河湖，由品質小巴團與專業嚮導帶領。第五日為自由活動，可另行加購蘭德曼納勞卡高地健行。",
    full: `這個 6 天 5 夜夏季探險跟團套餐涵蓋火山內部探險、雷克雅維克賞鯨、南岸冰川健行與傑古沙龍冰河湖，由品質小巴團與專業嚮導帶領。套餐含凱夫拉維克機場至市區大巴接送，充分運用夏季日照長的優勢。

第二日將搭乘升降機深入 Þríhnúkagígur 休眠火山內部，並從雷克雅維克老港口出海賞鯨。南岸行程涵蓋塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、索爾黑馬冰川健行、黑沙灘（Reynisfjara）與雷尼斯岩（Reynisdrangar）；第四日造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。

第五日為自由活動，可另行加購蘭德曼納勞卡（Landmannalaugar）高地健行——僅夏季開放，流紋岩山脈色彩斑斕。夏季迪霍拉里（Dyrhólaey）等地常有海鸚棲息，實際停留時間將由嚮導依天候與路況調整。`,
  },
  gallery: [
    {
      id: "Landmannalaugar_2_620b52",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Landmannalaugar_2_620b529d48.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "Hiking_83c27cfc41",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Hiking_83c27cfc41.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "inside_the_volcano_by_bi",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/inside_the_volcano_by_bicnick_105c479b81.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "3_62c3245c5d",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/3_62c3245c5d.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "jared_erondu_j4_Pa_E7_E2",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jared_erondu_j4_Pa_E7_E2_Ws_unsplash_f444c22749.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    }
  ],
  highlights: [
    "深入探索火山內部奧秘",
    "用健行的方式解鎖高地內陸",
    "感受黑沙灘的神奇力量",
    "欣賞南部三大瀑布的不同風格",
    "抵達傑古沙龍冰河湖觸摸千年冰山",
    "一覽千年歷史的羽毛峽谷",
  ],
  attractions: [
    seljalandsfossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    diamondBeachSpot,
    landmannalaugarSpot,
  ],
  routeOverviewSubtitle: "南岸健行探險夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送）" },
    { label: "第 2 天", detail: "火山內部探險與雷克雅維克賞鯨" },
    { label: "第 3 天", detail: "南岸三大瀑布 → 冰川健行 → 黑沙灘" },
    { label: "第 4 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘" },
    { label: "第 5 天", detail: "自由活動日（可選高地健行）" },
    { label: "第 6 天", detail: "雷克雅維克 → 機場離境" }
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
        lng: -21.9426,
        lat: 64.1466,
        label: "第 2 天",
        detail: "火山內部探險與賞鯨",
      },
      {
        lng: -19.0,
        lat: 63.55,
        label: "第 3 天",
        detail: "南岸瀑布 → 冰川健行 → 黑沙灘",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 4 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 5 天",
        detail: "自由活動日",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 6 天",
        detail: "雷克雅維克 → 機場離境",
      },
    ],
  },
  itinerary: [
    {
      day: 1,
      title: "入境日：雷克雅維克市區",
      accommodation: "雷克雅維克",
      description:
        "抵達凱夫拉維克機場後，搭乘套餐安排的機場大巴前往雷克雅維克市區飯店辦理入住。\n\n若班機抵達時間較早，可在市區漫步感受極北首都的風貌，沿著海岸線散步或造訪哈爾格林姆斯大教堂。亦可另行加購 Sky Lagoon 天空之境溫泉。夏季日照長，建議早休息，為明日出發儲備體力。",
      highlights: icelandGroupSummer6SouthHikingDay1Highlights,
      optionalActivities: icelandGroupSummer6SouthHikingDay1OptionalActivities,
    },
    {
      day: 2,
      title: "火山內部探秘 & 雷克雅維克賞鯨",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團前往 Þríhnúkagígur 休眠火山，健行穿越火山口後乘坐升降機深入地球內部，在專業嚮導帶領下近距離觀察多彩礦石層與岩壁構造。這是世界上少數允許旅客進入的火山之一。\n\n下午返回雷克雅維克，從老港口（Old Harbour）出海賞鯨。夏季冰島海域常見座頭鯨、小鬚鯨與白喙海豚。傍晚返回市區住宿。",
      highlights: icelandGroupSummer6SouthHikingDay2Highlights,
      optionalActivities: icelandGroupSummer6SouthHikingDay2OptionalActivities,
    },
    {
      day: 3,
      title: "南岸三大瀑布 & 索爾黑馬冰川健行 & 黑沙灘",
      accommodation: "南岸",
      description:
        "今日品質小巴團沿南岸一號公路南下。夏季日照長，沿途綠意盎然。\n\n首先造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；天候許可時可繞行至塞里雅蘭瀑布後方小徑。接著在專業嚮導帶領下進行索爾黑馬冰川（Sólheimajökull）健行，穿戴安全裝備踏上夾雜火山灰紋路的藍白冰川。（注意：冰川健行體驗僅限 10 月前，10 月開始將替換為藍冰洞體驗。）\n\n最後前往黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中。夏季迪霍拉里（Dyrhólaey）常有海鸚棲息。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸附近飯店。",
      highlights: icelandGroupSummer6SouthHikingDay3Highlights,
      optionalActivities: icelandGroupSummer6SouthHikingDay3OptionalActivities,
    },
    {
      day: 4,
      title: "傑古沙龍冰河湖 & 鑽石沙灘",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。浮冰在湖面緩緩漂移，夏季陽光下冰塊晶瑩閃耀，與黑色沙灘形成鮮明對比。\n\n返程途中將經過埃爾德熔岩原（Eldhraun）與維克（Vík），夏季維克附近常有魯冰花盛開。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupSummer6SouthHikingDay4Highlights,
      optionalActivities: icelandGroupSummer6SouthHikingDay4OptionalActivities,
    },
    {
      day: 5,
      title: "自由活動日（可選蘭德曼納勞卡健行）",
      accommodation: "雷克雅維克",
      description:
        "今日為自由活動日，可在雷克雅維克市區自由安排，漫步洛加維格大街（Laugavegur）、哈帕音樂廳（Harpa）與彩虹街等景點。\n\n建議另行加購蘭德曼納勞卡（Landmannalaugar）高地健行一日遊——僅夏季開放，流紋岩山脈色彩斑斕，健行結束後可在天然地熱溫泉中放鬆。亦可另行加購絲浮拉裂谷（Silfra）浮潛、賞鯨或溫泉等體驗。內陸高地一般於 6 月至 9 月開放，具體時間依天候而定。今晚繼續入住雷克雅維克。",
      highlights: icelandGroupSummer6SouthHikingDay5Highlights,
      optionalActivities: icelandGroupSummer6SouthHikingDay5OptionalActivities,
    },
    {
      day: 6,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續，並提前確認接機大巴時間。\n\n若班機時間較晚，可在雷克雅維克市區多留片刻，或選擇前往溫泉放鬆。",
      highlights: icelandGroupSummer6SouthHikingDay6Highlights,
      optionalActivities: icelandGroupSummer6SouthHikingDay6OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含各類景點、歷史、文化、自然等資訊描述）",
      "機場往返市區飯店大巴接送",
      "雷克雅維克市區參團接送服務",
      "雷克雅維克市區4晚住宿",
      "Sky Lagoon 天空之境溫泉7步療法純享體驗門票",
      "Sky lagoon 往返接駁巴士",
      "南岸2日遊（英文嚮導）",
      "冰川健行體驗及裝備（注：5-9月為冰川健行體驗，10月將替換為藍冰洞體驗）",
      "南岸1晚舒適級住宿",
      "火山內部探險體驗及安全裝備",
      "雷克雅維克賞鯨體驗",
      "每日住宿提供早餐",
      "台灣冰島雙時區服務",
      "車載WiFi",
      "VAT增值稅",
    ],
    excluded: [
      "午餐",
      "晚餐",
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
          question: "冰島哪個季節最適合旅遊？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這個問題要取決於您的旅行計劃和安排，對於想體驗不同景觀和項目的旅客來說，答案也會有所不同：\"]",
        },
        {
          question: "去冰島旅遊需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"雖然比世界上緯度相近的許多地方都要溫暖，但冰島總體上還是一個寒冷的國家，特別是在冬季，平均氣溫在0攝氏度左右，而夏季的平均氣溫約在10-15度。\"]",
        },
        {
          question: "在冰島旅行安全嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"冰島是地球上最安全的國家之一。\"]",
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
      tripKey: "iceland/group/summer/6/south-snaefellsnes-golden-circle",
      title: "6 天 5 夜冰島夏季樂享跟團遊",
      tourCode: "SMD-061",
      durationLabel: "6 天／5 夜",
      description:
        "黃金圈、南岸與斯奈山半島，適合想兼顧西線風光的旅客。",
    },
    {
      tripKey: "iceland/group/summer/7/south-snaefellsnes-golden-circle",
      title: "7 天 6 夜冰島夏季經典跟團遊",
      tourCode: "SMD-071",
      durationLabel: "7 天／6 夜",
      description:
        "更完整的夏季跟團路線，含高地健行自由日。",
    },
  ],
};
