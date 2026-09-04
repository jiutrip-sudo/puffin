import type { TripPackage } from "./types";
import { skyLagoonSpot } from "./spots/sky-lagoon";
import { kirkjufellSpot } from "./spots/kirkjufell";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import {
  icelandGroupSummer5Day1Highlights,
  icelandGroupSummer5Day1OptionalActivities,
} from "./iceland-group-summer-5-day1-cards";
import {
  icelandGroupSummer5Day2Highlights,
  icelandGroupSummer5Day2OptionalActivities,
  icelandGroupSummer5Day3Highlights,
  icelandGroupSummer5Day3OptionalActivities,
  icelandGroupSummer5Day4Highlights,
  icelandGroupSummer5Day4OptionalActivities,
  icelandGroupSummer5Day5Highlights,
  icelandGroupSummer5Day5OptionalActivities,
} from "./iceland-group-summer-5-days2-5-cards";

export const icelandGroupSummer5: TripPackage = {
  id: "iceland-group-summer-5",
  tripKey: "iceland/group/summer/5",
  slug: "iceland-summer-5-day-tour-package-snaefellsnes-reynisfjara-jokulsarlon",
  tourCode: "SMD-051",
  title: "5 天 4 夜冰島夏季夢幻跟團遊",
  subtitle: "斯奈山半島&黑沙灘&冰河湖",
  duration: { days: 5, nights: 4 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-051",
  },
  eyebrow: "冰島集合 · 跟團 · 夏季",
  backHref: "/trips/iceland/group/summer",
  backLabel: "返回夏季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/jokulsarlon_unsplash4_afb37701fc.jpg",
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
      "這個 5 天 4 夜夏季跟團套餐涵蓋南岸兩日、冰川健行與斯奈山半島，由品質小巴團與專業嚮導帶領。行程含 Sky Lagoon 體驗，善用夏季長日照與午夜陽光，節奏適中、安排務實。",
    full: `這個 5 天 4 夜夏季跟團套餐涵蓋南岸兩日、冰川健行與斯奈山半島，由品質小巴團與專業嚮導帶領。套餐含凱夫拉維克機場至市區大巴接送與 Sky Lagoon 溫泉體驗，充分利用夏季長日照與午夜陽光，行程安排務實。

南岸動線串連塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、黑沙灘（Reynisfjara）、傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）；冰川健行由嚮導陪同並提供安全裝備（10 月前為冰川健行，之後改為藍冰洞體驗）。第四日造訪斯奈山半島，涵蓋教會山（Kirkjufell）、海豹沙灘（Ytri Tunga）與黑教堂（Búðakirkja）。`,
  },
  gallery: [
    {
      id: "jokulsarlon_unsplash4_af",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jokulsarlon_unsplash4_afb37701fc.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "jokulsarlon_unsplash3_c1",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jokulsarlon_unsplash3_c1dc3489ab.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "Reynisfjara_b4e1fe11a5",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Reynisfjara_b4e1fe11a5.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "reynisfjara2_b3ec97ed1f",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reynisfjara2_b3ec97ed1f.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "koushik_chowdavarapu_JT_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/koushik_chowdavarapu_JT_8_IW_Aaxp_Qk_unsplash_b8dd319dcb.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "ytri_tunga1_4f26805767",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/ytri_tunga1_4f26805767.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    }
  ],
  highlights: [
    "欣賞冰島夏日的午夜陽光",
    "一覽冰島南部精華景點",
    "踏上斯奈山半島，造訪最熱機位教會山",
    "在冰河湖上近距離感受千年冰山",
    "沉浸在舒適的Sky Lagoon七步療法中",
    "踏上黑沙灘，一秒拍出劉昊然同款",
  ],
  attractions: [
        skyLagoonSpot,seljalandsfossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    diamondBeachSpot,
    kirkjufellSpot,],
  routeOverviewSubtitle: "南岸與黃金圈夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、Sky Lagoon 溫泉）" },
    { label: "第 2 天", detail: "塞里雅蘭／斯科加瀑布 → 冰川健行 → 黑沙灘" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 維克" },
    { label: "第 4 天", detail: "斯奈山半島（教會山 → 海豹沙灘 → 黑教堂）" },
    { label: "第 5 天", detail: "雷克雅維克 → 機場離境" }
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
        detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 維克",
      },
      {
        lng: -23.8,
        lat: 64.8,
        label: "第 4 天",
        detail: "斯奈山半島",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 5 天",
        detail: "雷克雅維克 → 機場離境",
      },
    ],
  },
  itinerary: [
    {
      day: 1,
      title: "入境日：雷克雅維克 & Sky Lagoon天空之境溫泉",
      accommodation: "雷克雅維克",
      description:
        "抵達凱夫拉維克機場後，搭乘套餐安排的機場大巴前往雷克雅維克市區飯店辦理入住。\n\n入境日安排 Sky Lagoon 天空之境溫泉體驗，在無邊泳池中眺望北大西洋海景。若班機抵達時間較早，亦可於市區散步，途經托寧湖（Tjörnin）一帶感受雷克雅維克市景。夏季長日照下，晚間仍有機會感受午夜陽光。建議早些休息，為次日南岸品質小巴團儲備體力。",
      highlights: icelandGroupSummer5Day1Highlights,
      optionalActivities: icelandGroupSummer5Day1OptionalActivities,
    },
    {
      day: 2,
      title: "塞里雅蘭瀑布 & 斯科加瀑布 & 索爾黑馬冰川 & 黑沙灘",
      accommodation: "南岸",
      description:
        "今日搭乘品質小巴團沿南岸一號公路南下。夏季南岸瀑布水量充沛、草木蔥鬱。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）、秘密瀑布（Gljúfrabúi）與斯科加瀑布（Skógafoss）；夏季可沿小徑繞至塞里雅蘭瀑布後方，斯科加瀑布晴朗時常可見彩虹。接著在專業嚮導帶領下進行索爾黑馬冰川（Sólheimajökull）健行，穿戴安全裝備近距離感受千年冰川地貌（10 月前為冰川健行，之後改為藍冰洞體驗）。最後前往黑沙灘（Reynisfjara），遠處可見雷尼斯岩（Reynisdrangar）；夏季加達爾懸崖常有海鳥棲息。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸附近飯店。",
      highlights: icelandGroupSummer5Day2Highlights,
      optionalActivities: icelandGroupSummer5Day2OptionalActivities,
    },
    {
      day: 3,
      title: "傑古沙龍冰河湖 & 鑽石沙灘 & 維克",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園。傑古沙龍冰河湖（Jökulsárlón）上漂浮著形態各異的冰山；對岸的鑽石沙灘（Diamond Beach）上，浮冰在黑色沙灘上晶瑩閃耀。夏季長日照讓冰河湖色彩格外飽和。\n\n回程途中經過覆蓋綠色苔蘚的埃爾德熔岩原（Eldhraun），並途經維克（Vík）。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupSummer5Day3Highlights,
      optionalActivities: icelandGroupSummer5Day3OptionalActivities,
    },
    {
      day: 4,
      title: "斯奈山半島：教會山 & 海豹沙灘 & 黑教堂",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團前往斯奈山半島，常被稱為「冰島縮影」，一日之內便可領略多樣地貌。\n\n造訪教會山（Kirkjufell）與教會山瀑布（Kirkjufellsfoss）、海豹沙灘（Ytri Tunga）觀察野生海豹、黑教堂（Búðakirkja），以及阿爾納斯塔皮（Arnarstapi）小漁村與 Djúpalónssandur 黑沙灘。夏季長日照讓半島風光更加清晰。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupSummer5Day4Highlights,
      optionalActivities: icelandGroupSummer5Day4OptionalActivities,
    },
    {
      day: 5,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續。\n\n若仍有餘裕，可在市區漫步：托寧湖（Tjörnin）、哈爾格林姆斯教堂（Hallgrímskirkja）或哈帕音樂廳（Harpa）都是不錯的選擇。",
      highlights: icelandGroupSummer5Day5Highlights,
      optionalActivities: icelandGroupSummer5Day5OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含各類景點、歷史、文化、自然等資訊描述）",
      "機場往返市區飯店大巴接送",
      "雷克雅維克市區參團接送服務",
      "雷克雅維克市區3晚住宿",
      "Sky Lagoon 天空之境溫泉7步療法純享體驗門票",
      "Sky lagoon 往返接駁巴士",
      "南岸2日遊（英文嚮導）",
      "冰川健行體驗及裝備（注：5-9月為冰川健行體驗，10月將替換為藍冰洞體驗）",
      "南岸1晚舒適級住宿",
      "斯奈山半島1日遊（英文嚮導）",
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
          question: "去冰島旅遊需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"雖然比世界上緯度相近的許多地方都要溫暖，但冰島總體上還是一個寒冷的國家，特別是在冬季，平均氣溫在0攝氏度左右，而夏季的平均氣溫約在10-15度。\"]",
        },
        {
          question: "在冰島旅遊需要嚮導嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島固然以其神奇且的自然景觀而聞名於世，但是同樣不可忽視的是冰島的歷史、文化以及地理資訊。\"]",
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
      tripKey: "iceland/group/summer/4",
      title: "4 天 3 夜冰島夏季精簡跟團遊",
      tourCode: "SMD-041",
      durationLabel: "4 天／3 夜",
      description:
        "藍冰洞探險與南岸精華，適合時間有限的夏季旅客。",
    },
    {
      tripKey: "iceland/group/summer/6",
      title: "6 天 5 夜冰島夏季跟團遊",
      tourCode: "SMD-061",
      durationLabel: "6 天／5 夜",
      description:
        "更完整的夏季跟團路線，涵蓋更多冰島精華景點。",
    },
  ],
};
