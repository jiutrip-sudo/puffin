import type { TripPackage } from "./types";
import { goldenCircleSpot } from "./spots/golden-circle";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import {
  icelandGroupSummer7SouthGoldenCircleHikingDay1Highlights,
  icelandGroupSummer7SouthGoldenCircleHikingDay1OptionalActivities,
} from "./iceland-group-summer-7-south-golden-circle-hiking-day1-cards";
import {
  icelandGroupSummer7SouthGoldenCircleHikingDay2Highlights,
  icelandGroupSummer7SouthGoldenCircleHikingDay2OptionalActivities,
  icelandGroupSummer7SouthGoldenCircleHikingDay3Highlights,
  icelandGroupSummer7SouthGoldenCircleHikingDay3OptionalActivities,
  icelandGroupSummer7SouthGoldenCircleHikingDay4Highlights,
  icelandGroupSummer7SouthGoldenCircleHikingDay4OptionalActivities,
  icelandGroupSummer7SouthGoldenCircleHikingDay5Highlights,
  icelandGroupSummer7SouthGoldenCircleHikingDay5OptionalActivities,
  icelandGroupSummer7SouthGoldenCircleHikingDay6Highlights,
  icelandGroupSummer7SouthGoldenCircleHikingDay6OptionalActivities,
  icelandGroupSummer7SouthGoldenCircleHikingDay7Highlights,
  icelandGroupSummer7SouthGoldenCircleHikingDay7OptionalActivities,
} from "./iceland-group-summer-7-south-golden-circle-hiking-days2-7-cards";

export const icelandGroupSummer7SouthGoldenCircleHiking: TripPackage = {
  id: "iceland-group-summer-7-south-golden-circle-hiking",
  tripKey: "iceland/group/summer/7/south-golden-circle-hiking",
  slug: "iceland-summer-7-day-adventure-tour-package-whale-watching-inside-volcano",
  tourCode: "SMD-073",
  title: "7 天 6 夜冰島夏季多巴胺跟團遊",
  subtitle: "賞鯨&火山&可選健行",
  duration: { days: 7, nights: 6 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-073",
  },
  eyebrow: "冰島集合 · 跟團 · 夏季",
  backHref: "/trips/iceland/group/summer",
  backLabel: "返回夏季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/1_8dcfeb3210.jpg",
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
      "這個 7 天 6 夜夏季探險跟團套餐涵蓋黃金圈、南岸冰川健行、冰河湖、火山內部探險與賞鯨，由品質小巴團與專業嚮導帶領。第六日為自由活動，可另行加購蘭德曼納勞卡高地健行。",
    full: `這個 7 天 6 夜夏季探險跟團套餐涵蓋黃金圈、南岸冰川健行、傑古沙龍冰河湖、火山內部探險與雷克雅維克賞鯨，由品質小巴團與專業嚮導帶領。套餐含凱夫拉維克機場至市區大巴接送，充分運用夏季日照長的優勢。

行程涵蓋黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss），並參觀凱瑞斯火山口（Kerið）；南岸則有塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、索爾黑馬冰川健行、黑沙灘（Reynisfjara）與雷尼斯岩（Reynisdrangar）。第四日造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）；第五日搭乘升降機深入 Þríhnúkagígur 休眠火山內部，並從雷克雅維克老港口出海賞鯨。

第六日為自由活動，可另行加購蘭德曼納勞卡（Landmannalaugar）高地健行——僅夏季開放。夏季迪霍拉里（Dyrhólaey）等地常有海鸚棲息，實際停留時間將由嚮導依天候與路況調整。`,
  },
  gallery: [
    {
      id: "1_8dcfeb3210",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/1_8dcfeb3210.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "_c621d51faa",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/_c621d51faa.jpg",
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
      id: "jon_flobrant_t_Ssb28hz_Z",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jon_flobrant_t_Ssb28hz_ZSI_unsplash_c7b16cdc81.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "chris_ried_sq_J40_H9_Rt_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/chris_ried_sq_J40_H9_Rt_Nw_unsplash_e18b13774f.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "Vatnajoekull_1_afa1f11a0",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Vatnajoekull_1_afa1f11a0b.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    }
  ],
  highlights: [
    "體驗出海賞鯨的神奇之旅",
    "深入地球內部探秘火山",
    "在人跡罕至的高地內陸健行觀光",
    "環遊不容錯過的黃金圈路線",
    "感受冰島南海岸的風情生機",
    "感受傑古沙龍冰河湖的冰晶世界",
    "駐足黑沙灘感受大西洋風浪",
    "健行登上雄偉壯觀的索爾黑馬冰川",
  ],
  attractions: [
        goldenCircleSpot,seljalandsfossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    diamondBeachSpot,],
  routeOverviewSubtitle: "黃金圈、南岸、賞鯨火山與健行自由日夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送）" },
    { label: "第 2 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）" },
    { label: "第 3 天", detail: "南岸瀑布 → 冰川健行 → 黑沙灘" },
    { label: "第 4 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘" },
    { label: "第 5 天", detail: "火山內部探險與出海賞鯨" },
    { label: "第 6 天", detail: "自由活動日（可選高地健行）" },
    { label: "第 7 天", detail: "雷克雅維克 → 機場離境" }
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
        detail: "黃金圈三大景點",
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
        lng: -21.9426,
        lat: 64.1466,
        label: "第 5 天",
        detail: "火山內部探險與出海賞鯨",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 6 天",
        detail: "自由活動日（可選高地健行）",
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
        "抵達凱夫拉維克機場後，搭乘套餐安排的機場大巴前往雷克雅維克市區飯店辦理入住。\n\n若班機抵達時間較早，可在市區漫步感受極北首都的風貌，沿著海岸線散步或造訪哈爾格林姆斯大教堂。亦可另行加購 Sky Lagoon 天空之境溫泉。夏季日照長，建議早休息，為明日出發儲備體力。",
      highlights: icelandGroupSummer7SouthGoldenCircleHikingDay1Highlights,
      optionalActivities: icelandGroupSummer7SouthGoldenCircleHikingDay1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。辛格維利爾位於歐亞與北美板塊交界的大裂谷，是冰島最早議會所在地；蓋錫爾間歇泉地帶可目睹史托克間歇泉（Strokkur）每隔數分鐘噴發的熱水柱。\n\n走近黃金瀑布時，巨大的水流令人屏息；陽光下水珠有時散發金色光芒。嚮導亦將帶您參觀凱瑞斯火山口（Kerið Crater）。傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupSummer7SouthGoldenCircleHikingDay2Highlights,
      optionalActivities: icelandGroupSummer7SouthGoldenCircleHikingDay2OptionalActivities,
    },
    {
      day: 3,
      title: "冰島南岸：瀑布 & 冰川 & 黑沙灘",
      accommodation: "南岸",
      description:
        "今日品質小巴團沿南岸一號公路南下。夏季日照長，沿途綠意盎然。\n\n首先造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；天候許可時可繞行至塞里雅蘭瀑布後方小徑。接著在專業嚮導帶領下進行索爾黑馬冰川（Sólheimajökull）健行，穿戴安全裝備踏上夾雜火山灰紋路的藍白冰川。（注意：冰川健行體驗僅限 10 月前，10 月開始將替換為藍冰洞體驗。）\n\n最後前往黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中。夏季迪霍拉里（Dyrhólaey）常有海鸚棲息。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸附近飯店。",
      highlights: icelandGroupSummer7SouthGoldenCircleHikingDay3Highlights,
      optionalActivities: icelandGroupSummer7SouthGoldenCircleHikingDay3OptionalActivities,
    },
    {
      day: 4,
      title: "傑古沙龍冰河湖 & 鑽石沙灘",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。浮冰在湖面緩緩漂移，夏季陽光下冰塊晶瑩閃耀，與黑色沙灘形成鮮明對比。\n\n返程途中將經過埃爾德熔岩原（Eldhraun）與維克（Vík），夏季維克附近常有魯冰花盛開。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupSummer7SouthGoldenCircleHikingDay4Highlights,
      optionalActivities: icelandGroupSummer7SouthGoldenCircleHikingDay4OptionalActivities,
    },
    {
      day: 5,
      title: "火山內部探秘 & 出海賞鯨",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團前往 Þríhnúkagígur 休眠火山，健行穿越火山口後乘坐升降機深入地球內部，在專業嚮導帶領下近距離觀察多彩礦石層與岩壁構造。這是世界上少數允許旅客進入的火山之一。\n\n下午返回雷克雅維克，從老港口（Old Harbour）出海賞鯨。夏季冰島海域常見座頭鯨、小鬚鯨與白喙海豚。傍晚返回市區住宿。",
      highlights: icelandGroupSummer7SouthGoldenCircleHikingDay5Highlights,
      optionalActivities: icelandGroupSummer7SouthGoldenCircleHikingDay5OptionalActivities,
    },
    {
      day: 6,
      title: "自由活動日（可選蘭德曼納勞卡健行）",
      accommodation: "雷克雅維克",
      description:
        "今日為自由活動日，可在雷克雅維克市區自由安排，漫步洛加維格大街（Laugavegur）、哈帕音樂廳（Harpa）與彩虹街等景點。\n\n建議另行加購蘭德曼納勞卡（Landmannalaugar）高地健行一日遊——僅夏季開放，流紋岩山脈色彩斑斕，健行結束後可在天然地熱溫泉中放鬆。亦可另行加購絲浮拉裂谷（Silfra）浮潛、賞鯨或溫泉等體驗。內陸高地一般於 6 月至 9 月開放，具體時間依天候而定。今晚繼續入住雷克雅維克。",
      highlights: icelandGroupSummer7SouthGoldenCircleHikingDay6Highlights,
      optionalActivities: icelandGroupSummer7SouthGoldenCircleHikingDay6OptionalActivities,
    },
    {
      day: 7,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續，並提前確認接機大巴時間。\n\n若班機時間較晚，可在雷克雅維克市區多留片刻，或選擇前往溫泉放鬆。",
      highlights: icelandGroupSummer7SouthGoldenCircleHikingDay7Highlights,
      optionalActivities: icelandGroupSummer7SouthGoldenCircleHikingDay7OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含各類景點、歷史、文化、自然等資訊描述）",
      "機場往返市區飯店大巴接送",
      "雷克雅維克市區參團接送服務",
      "雷克雅維克市區5晚住宿",
      "Sky Lagoon 天空之境溫泉7步療法純享體驗門票",
      "Sky lagoon 往返接駁巴士",
      "黃金圈1日遊（英文嚮導）",
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
          question: "在冰島旅遊需要嚮導嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島固然以其神奇且的自然景觀而聞名於世，但是同樣不可忽視的是冰島的歷史、文化以及地理資訊。\"]",
        },
        {
          question: "在冰島旅遊貴嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島素來被認為是極為昂貴的旅遊目的地，但其實並非如此，冰島的大部分景點都無需門票，有許多免費的天然野生溫泉，即使是藍湖溫泉（Blue Lagoon）和天空之境溫泉（Sky Lagoon）這樣奢華的溫泉的價格也十分合理。\"]",
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
      tripKey: "iceland/group/summer/7/south-snaefellsnes-golden-circle",
      title: "7 天 6 夜冰島夏季經典跟團遊",
      tourCode: "SMD-071",
      durationLabel: "7 天／6 夜",
      description:
        "黃金圈、南岸與斯奈山半島，含高地健行自由日。",
    },
    {
      tripKey: "iceland/group/summer/6/south-hiking",
      title: "6 天 5 夜冰島夏季健行探險跟團遊",
      tourCode: "SMD-063",
      durationLabel: "6 天／5 夜",
      description:
        "冰川健行、火山探險與賞鯨，適合時間較緊的探險旅客。",
    },
  ],
};
