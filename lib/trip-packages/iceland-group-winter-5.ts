import type { TripPackage } from "./types";
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
  icelandGroupWinter5Day1Highlights,
  icelandGroupWinter5Day1OptionalActivities,
} from "./iceland-group-winter-5-day1-cards";
import {
  icelandGroupWinter5Day2Highlights,
  icelandGroupWinter5Day2OptionalActivities,
  icelandGroupWinter5Day3Highlights,
  icelandGroupWinter5Day3OptionalActivities,
  icelandGroupWinter5Day4Highlights,
  icelandGroupWinter5Day4OptionalActivities,
  icelandGroupWinter5Day5Highlights,
  icelandGroupWinter5Day5OptionalActivities,
} from "./iceland-group-winter-5-days2-5-cards";

export const icelandGroupWinter5: TripPackage = {
  id: "iceland-group-winter-5",
  tripKey: "iceland/group/winter/5",
  slug: "5-days-winter-package-golden-circle-south-coast-jokulsarlon-glacier-lagoon",
  tourCode: "SMD-052",
  title: "5 天 4 夜冰島冬季超值跟團遊",
  subtitle: "傑古沙龍冰河湖 & 黃金圈",
  duration: { days: 5, nights: 4 },
  season: { label: "冬季", months: "11 月–4 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-052",
  },
  eyebrow: "冰島集合 · 跟團 · 冬季",
  backHref: "/trips/iceland/group/winter",
  backLabel: "返回冬季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/Gullfoss_0572e78e11.jpg",
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
      "這個 5 天 4 夜冬季跟團套餐涵蓋南岸兩日、藍冰洞與黃金圈，由品質小巴團與專業嚮導帶領，並有機會看見北極光。行程顧及冬季日照短，節奏適中、安排務實。",
    full: `這個 5 天 4 夜冬季跟團套餐涵蓋南岸兩日、藍冰洞與黃金圈，由品質小巴團與專業嚮導帶領，並有機會看見北極光。套餐含凱夫拉維克機場至市區大巴接送，充分顧及冬季日照短、天候變化快的特性，行程安排務實。

南岸動線串連塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、黑沙灘（Reynisfjara）、傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）；藍冰洞（Blue Ice Cave）探險為行程亮點，由嚮導陪同並提供安全裝備。第四日造訪黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）。極光季節若天候許可，嚮導將帶領團員遠離光害處追尋極光。`,
  },
  gallery: [
    {
      id: "Gullfoss_0572e78e11",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Gullfoss_0572e78e11.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "lake_1112520_1280_1a107c",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/lake_1112520_1280_1a107cc6a5.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "strokkur_1_56419c484e",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/strokkur_1_56419c484e.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    }
  ],
  highlights: [
    "體驗正宗冰島溫泉文化",
    "探索冰島黃金圈迷人冬景",
    "穿過北美板塊和亞歐大陸板塊的分界線",
    "欣賞冰島style的南岸瀑布飛流",
    "探索世無其二的瓦特納藍冰洞",
    "醉心於冰河湖和鑽石沙灘的神秘浪漫",
    "抵達冰島最浪漫的傑古沙龍冰河湖",
    "站在獨特的黑沙灘感受異星風貌",
  ],
  attractions: [
        reykjavikSpot,
    seljalandsfossSpot,
    skogafossSpot,
    reynisfjaraSpot,
    diamondBeachSpot,jokulsarlonSpot,
    thingvellirSpot,
    geysirSpot,
    gullfossSpot,],
  routeOverviewSubtitle: "南岸與黃金圈冬季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "南岸 → 塞里雅蘭／斯科加瀑布 → 黑沙灘 → 維克" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞探險 → 返回雷克雅維克" },
    { label: "第 4 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）" },
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
        detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞",
      },
      {
        lng: -20.5322,
        lat: 64.3271,
        label: "第 4 天",
        detail: "黃金圈",
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
      title: "入境日",
      accommodation: "雷克雅維克",
      description:
        "抵達凱夫拉維克機場後，搭乘套餐安排的機場大巴前往雷克雅維克市區飯店辦理入住。\n\n若班機抵達時間較早，可選擇前往 Sky Lagoon 天空之境溫泉放鬆身心，體驗冰島地熱溫泉文化。亦可先在市區漫步，造訪哈爾格林姆斯大教堂（Hallgrímskirkja）或哈帕音樂廳（Harpa），為接下來的品質小巴團行程儲備體力。",
      highlights: icelandGroupWinter5Day1Highlights,
      optionalActivities: icelandGroupWinter5Day1OptionalActivities,
    },
    {
      day: 2,
      title: "冰島南岸：塞里雅蘭瀑布、斯科加瀑布、黑沙灘",
      accommodation: "南岸",
      description:
        "今日搭乘品質小巴團沿南岸一號公路南下。冬季南岸色調獨特：白雪覆蓋大地、天際染上粉霞。\n\n首先造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；冬季基於安全考量，塞里雅蘭瀑布後方小徑通常封閉，沿途亦可經過秘密瀑布（Gljúfrabúi）。斯科加瀑布水量充沛，晴朗時常可見彩虹。繼續前往黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸附近飯店。",
      highlights: icelandGroupWinter5Day2Highlights,
      optionalActivities: icelandGroupWinter5Day2OptionalActivities,
    },
    {
      day: 3,
      title: "東南部風光：傑古沙龍冰河湖、鑽石沙灘、藍冰洞探險",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。浮冰在黑色沙灘上晶瑩閃耀，黑白對比格外震撼。\n\n行程亮點為藍冰洞（Blue Ice Cave）探險：在專業嚮導帶領下穿戴安全裝備，進入冰川內部欣賞深邃冰藍世界。返程途中將經過 Hofskirkja 草皮教堂與埃爾德熔岩原（Eldhraun），冬季白雪覆蓋的熔岩地貌別具風情。結束後返回雷克雅維克住宿，冬季日照短，實際停留時間將由嚮導依天候與路況調整。",
      highlights: icelandGroupWinter5Day3Highlights,
      optionalActivities: icelandGroupWinter5Day3OptionalActivities,
    },
    {
      day: 4,
      title: "黃金圈：辛格維利爾國家公園、蓋錫爾間歇泉地帶、黃金瀑布",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。辛格維利爾位於歐亞與北美板塊交界的大裂谷，是冰島最早議會所在地；蓋錫爾間歇泉地帶可目睹史托克間歇泉（Strokkur）每隔數分鐘噴發的熱水柱。\n\n走近黃金瀑布時，巨大的水流令人屏息；陽光下水珠有時散發金色光芒。嚮導亦可能安排造訪凱瑞斯火山口（Kerið Crater），俯瞰火山口湖的藍綠色湖水。傍晚返回雷克雅維克住宿，天候許可時可追尋極光。",
      highlights: icelandGroupWinter5Day4Highlights,
      optionalActivities: icelandGroupWinter5Day4OptionalActivities,
    },
    {
      day: 5,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續；起飛前三個半小時請在指定地點等候接機大巴。\n\n若班機時間較晚，可在雷克雅維克市區多留片刻：登上哈爾格林姆斯大教堂、到托寧湖（Tjörnin）畔散步，或在購物街選購紀念品。",
      highlights: icelandGroupWinter5Day5Highlights,
      optionalActivities: icelandGroupWinter5Day5OptionalActivities,
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
          question: "去冰島旅遊需要辦理什麼簽證？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"中國大陸公民前往冰島旅行需要辦理旅遊簽證。冰島屬於申根國家，因此您需要辦理申根簽證。\"]",
        },
        {
          question: "如果天氣原因導致不發團該怎麼辦？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"針對以下三種情況，我們將分別處理您的退款事宜：\"]",
        },
        {
          question: "這個行程的行李額是多少？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"您能夠攜帶上車的行李箱最大尺寸為56 x 45 x 25 cm（大約為22寸行李箱大小）。如果您有其他大件行李，也可以聯繫飯店寄存。\"]",
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
      tripKey: "iceland/group/winter/4",
      title: "4 天 3 夜冰島冬日精簡跟團遊",
      tourCode: "SMD-042",
      durationLabel: "4 天／3 夜",
      description:
        "藍冰洞探險與南岸精華，適合時間有限的冬季旅客。",
    },
    {
      tripKey: "iceland/group/winter/6",
      title: "6 天 5 夜冰島冬季跟團遊",
      tourCode: "SMD-062",
      durationLabel: "6 天／5 夜",
      description:
        "南岸、黃金圈與斯奈山半島，冬季跟團一次走遍冰島西部精華。",
    },
  ],
};
