import type { TripPackage } from "./types";
import { skyLagoonSpot } from "./spots/sky-lagoon";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import { reykjavikSpot } from "./spots/reykjavik";
import {
  icelandGroupSummer4Day1Highlights,
  icelandGroupSummer4Day1OptionalActivities,
} from "./iceland-group-summer-4-day1-cards";
import {
  icelandGroupSummer4Day2Highlights,
  icelandGroupSummer4Day2OptionalActivities,
  icelandGroupSummer4Day3Highlights,
  icelandGroupSummer4Day3OptionalActivities,
  icelandGroupSummer4Day4Highlights,
  icelandGroupSummer4Day4OptionalActivities,
} from "./iceland-group-summer-4-days2-4-cards";

export const icelandGroupSummer4: TripPackage = {
  id: "iceland-group-summer-4",
  tripKey: "iceland/group/summer/4",
  slug: "iceland-summer-4-day-tour-package-south-coast-jokulsarlon",
  tourCode: "SMD-041",
  title: "4 天 3 夜冰島夏季輕鬆跟團遊",
  subtitle: "瀑布&黑沙灘&傑古沙龍冰河湖",
  duration: { days: 4, nights: 3 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-041",
  },
  eyebrow: "冰島集合 · 跟團 · 夏季",
  backHref: "/trips/iceland/group/summer",
  backLabel: "返回夏季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/_5579ea0363.jpg",
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
      "這個夏季 4 日跟團套餐濃縮南岸精華，兩日品質小巴團造訪瀑布、黑沙灘、冰河湖與鑽石沙灘，含冰川健行與 Sky Lagoon 體驗。行程善用夏季長日照，由專業嚮導依天候調整節奏。",
    full: `這個夏季 4 日跟團套餐濃縮南岸精華，兩日品質小巴團造訪塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、黑沙灘（Reynisfjara）、傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach），含冰川健行與 Sky Lagoon 溫泉體驗。套餐含凱夫拉維克機場至市區大巴接送與專業嚮導帶領，充分利用夏季長日照與午夜陽光，行程安排務實。

南岸一號公路串連冰島最具代表性的夏日風景；冰川健行由嚮導陪同並提供安全裝備（10 月前為冰川健行，之後改為藍冰洞體驗）。入境日安排 Sky Lagoon 溫泉放鬆，為後續南岸行程儲備體力。`,
  },
  gallery: [
    {
      id: "_5579ea0363",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/_5579ea0363.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "seljalandsfoss1_b6412d5d",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/seljalandsfoss1_b6412d5d4e.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "jon_flobrant_o_RU_Qs_TX_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jon_flobrant_o_RU_Qs_TX_9_Zv0_unsplash_07bed86d5a.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "jon_del_rivero_5_Tm4_JG_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jon_del_rivero_5_Tm4_JG_nf_DY_s7_unsplash_c0954690a1.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    }
  ],
  highlights: [
    "領略冰島南岸精華景點",
    "漫步馳名於世的黑沙灘之上",
    "欣賞冰島的午夜陽光",
    "親身感受傑古沙龍冰河湖的壯觀",
    "體驗冰島溫泉文化",
    "品嚐冰島特色小吃與食物",
  ],
  attractions: [
        reykjavikSpot,
    skyLagoonSpot,seljalandsfossSpot,
    skogafossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,],
  routeOverviewSubtitle: "南岸夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、Sky Lagoon 溫泉）" },
    { label: "第 2 天", detail: "塞里雅蘭／斯科加瀑布 → 冰川健行 → 黑沙灘 → 維克" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 返回雷克雅維克" },
    { label: "第 4 天", detail: "雷克雅維克 → 機場離境" }
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
        detail: "南岸瀑布 → 黑沙灘 → 維克",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 3 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 4 天",
        detail: "雷克雅維克 → 機場離境",
      },
    ],
  },
  itinerary: [
    {
      day: 1,
      title: "入境日：雷克雅維克 & Sky Lagoon舒適溫泉體驗",
      accommodation: "雷克雅維克",
      description:
        "抵達凱夫拉維克機場後，搭乘套餐安排的機場大巴前往雷克雅維克市區飯店辦理入住。\n\n入境日安排 Sky Lagoon 天空之境溫泉體驗，在無邊泳池中眺望北大西洋海景，體驗冰島地熱溫泉文化。夏季長日照下，晚間仍有機會感受午夜陽光的柔和光線。建議早些休息，為次日南岸品質小巴團儲備體力。",
      highlights: icelandGroupSummer4Day1Highlights,
      optionalActivities: icelandGroupSummer4Day1OptionalActivities,
    },
    {
      day: 2,
      title: "塞里雅蘭瀑布 & 斯科加瀑布 & 冰川健行 & 黑沙灘",
      accommodation: "南岸",
      description:
        "今日搭乘品質小巴團沿南岸一號公路南下。夏季南岸草木蔥鬱、瀑布水量充沛，長日照讓您有充裕時間造訪各景點。\n\n首先造訪塞里雅蘭瀑布（Seljalandsfoss）、秘密瀑布（Gljúfrabúi）與斯科加瀑布（Skógafoss）；夏季可沿小徑繞至塞里雅蘭瀑布後方，斯科加瀑布晴朗時常可見彩虹。接著在專業嚮導帶領下進行索爾黑馬冰川（Sólheimajökull）健行，穿戴安全裝備近距離感受千年冰川地貌（10 月前為冰川健行，之後改為藍冰洞體驗）。最後前往黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中；夏季加達爾懸崖常有海鳥棲息。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸附近飯店。",
      highlights: icelandGroupSummer4Day2Highlights,
      optionalActivities: icelandGroupSummer4Day2OptionalActivities,
    },
    {
      day: 3,
      title: "傑古沙龍冰河湖 & 鑽石沙灘",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園。傑古沙龍冰河湖（Jökulsárlón）上漂浮著來自 Breiðamerkurjökull 冰舌的冰山；對岸的鑽石沙灘（Diamond Beach）上，浮冰在黑色沙灘上晶瑩閃耀，黑白對比格外鮮明。夏季長日照讓冰河湖與鑽石沙灘的色彩更加飽和。\n\n回程途中經過覆蓋綠色苔蘚的埃爾德熔岩原（Eldhraun），並可能途經維克（Vík）。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupSummer4Day3Highlights,
      optionalActivities: icelandGroupSummer4Day3OptionalActivities,
    },
    {
      day: 4,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續。\n\n若仍有餘裕，可在市區漫步：托寧湖（Tjörnin）、哈帕音樂廳（Harpa）與博物館都是不錯的選擇。",
      highlights: icelandGroupSummer4Day4Highlights,
      optionalActivities: icelandGroupSummer4Day4OptionalActivities,
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
      id: "trip",
      title: "行程與跟團",
      items: [
        {
          question: "帕芬假期旅行的旅行團套餐是什麼？是自營的嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"帕芬假期旅行的旅行團套餐是我們最熱門的產品。在旅行團套餐中，我們將為您提供路線合理、景點全面的觀光套餐，均包含機場往返首都接送、首都參團接送、冰島本地優選供應商的一日遊與多日遊（含司機兼嚮導）、住宿（含早餐）、獨家客製的中文行程手冊（含各類景點、歷史、文化、自然等資訊描述）、台灣冰島雙時區的中文客服等服務，並提供行程客製服務。\"]",
        },
        {
          question: "什麼是自選報名活動？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"帕芬假期旅行在每一天的行程下方增加了對應的自選報名活動，您可以根據自己的需求選擇是否自費參加這些額外的活動。\"]",
        },
        {
          question: "預訂後多久能收到相關的參團資料？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在您付完訂金後的5-7個工作日內（且在參團前），我們會提供行程相關的訂單資訊清單（包含預訂飯店資訊等）及簽證輔助材料；在付完全款並提供航班資訊等所有有效資訊後的5-7個工作日內（且在參團前），我們會提供完整的行程手冊等。行程手冊包含中文行程單、接送地址、各類景點、歷史、文化、自然等資訊描述。\"]",
        },
        {
          question: "為什麼我只能選擇首都雷克雅維克地區的飯店等級？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為首都雷克雅維克的飯店選擇更多，且行程相對更靈活。而套餐內冰島其他地區的行程中，參團的顧客都是統一行動的，有固定的行程路線和固定的飯店。因此為保障行程的統一性與合理性，並不浪費顧客的遊覽時間，其他地區暫時無法選擇飯店等級，請您體諒。\"]",
        },
        {
          question: "為什麼不是所有飯店都能到飯店門口接團？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"為了維持雷克雅維克市中心舒適安全的城市環境，冰島政府規定旅遊巴士不可隨意進入市中心區域，而必須在附近指定的接車地點接送旅客。\"]",
        },
        {
          question: "套餐單人間為什麼需要補差價？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為冰島的單人間房價要高於雙人間房價的一半，而預訂時的預設房價是按雙人間均攤至每人的價格來計算的。因此套餐內的單人間需要補交一筆差價。由於旅行團套餐系統設定在預訂環節僅可以選首都雷克雅維克地區的房間數量，如果需要將套餐中包含的旅行團增加單人間，那麼需要在初始頁面選中1人來查看全程單人間價格，具體細節可諮詢客服。\"]",
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
          question: "冰島值得去嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這個問題可能不同的人有不同的答案。但是作為一個專注於冰島旅行的團隊，以及作為一群熱愛自然、熱愛美好的個體來說：\"]},{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"是的！冰島太值得了！\"]",
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
      tripKey: "iceland/group/summer/5",
      title: "5 天 4 夜冰島夏季跟團遊",
      tourCode: "SMD-051",
      durationLabel: "5 天／4 夜",
      description:
        "更充裕的夏季跟團天數，深度探索南岸與冰河湖。",
    },
  ],
};
