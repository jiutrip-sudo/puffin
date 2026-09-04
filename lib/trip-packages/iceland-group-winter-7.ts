import type { TripPackage } from "./types";
import { glanniSpot } from "./spots/glanni";
import { reykholtSpot } from "./spots/reykholt";
import { budakirkjaSpot } from "./spots/budakirkja";
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
import {
  icelandGroupWinter7Day1Highlights,
  icelandGroupWinter7Day1OptionalActivities,
} from "./iceland-group-winter-7-day1-cards";
import {
  icelandGroupWinter7Day2Highlights,
  icelandGroupWinter7Day2OptionalActivities,
  icelandGroupWinter7Day3Highlights,
  icelandGroupWinter7Day3OptionalActivities,
  icelandGroupWinter7Day4Highlights,
  icelandGroupWinter7Day4OptionalActivities,
  icelandGroupWinter7Day5Highlights,
  icelandGroupWinter7Day5OptionalActivities,
  icelandGroupWinter7Day6Highlights,
  icelandGroupWinter7Day6OptionalActivities,
  icelandGroupWinter7Day7Highlights,
  icelandGroupWinter7Day7OptionalActivities,
} from "./iceland-group-winter-7-days2-7-cards";

export const icelandGroupWinter7: TripPackage = {
  id: "iceland-group-winter-7",
  tripKey: "iceland/group/winter/7",
  slug: "iceland-winter-package-7-days-south-coast-and-snaefellsnes",
  tourCode: "SMD-072",
  title: "7 天 6 夜冰島冬季跟團遊",
  subtitle: "藍冰洞探險 & 斯奈山半島",
  duration: { days: 7, nights: 6 },
  season: { label: "冬季", months: "11 月–4 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-072",
  },
  eyebrow: "冰島集合 · 跟團 · 冬季",
  backHref: "/trips/iceland/group/winter",
  backLabel: "返回冬季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/blue_ice_cave_discovery_LG_5c9f8a2ebf.jpg",
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
      "這個 7 天 6 夜冰島冬季跟團遊，由品質小巴團與專業嚮導帶您走訪南岸、冰河湖藍冰洞、黃金圈、西部與斯奈山半島等冬日精華。行程節奏適中，夜間亦有機會欣賞北極光。",
    full: `這個 7 天 6 夜冰島冬季跟團遊，由品質小巴團與專業嚮導帶您走訪南岸、冰河湖藍冰洞、黃金圈、西部與斯奈山半島等冬日精華。套餐充分顧及冬季日照時數與路況，行程安排合理、節奏適中。

您將造訪南岸塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）與黑沙灘（Reynisfjara），遠眺雷尼斯岩（Reynisdrangar）；深入瓦特納冰川國家公園，走訪傑古沙龍冰河湖（Jökulsárlón）、鑽石沙灘（Diamond Beach）並參加藍冰洞探險。黃金圈行程涵蓋辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss），並參觀凱瑞斯火山口（Kerið）。

西部將遊覽格蘭尼瀑布、德爾達圖赫菲溫泉（Deildartunguhver）、熔岩瀑布（Hraunfossar）與 Víðgelmir 熔岩洞穴；斯奈山半島則造訪教會山（Kirkjufell）、布迪爾黑教堂與阿爾納斯塔皮海岸。天候許可時，亦有機會在途中共賞北極光。

完成預訂後，您將收到行程策劃師為您客製的中文行程手冊。南岸、黃金圈與斯奈山等行程的先後順序，將依入境時間及團次餘位調整。`,
  },
  gallery: [
    {
      id: "blue_ice_cave_discovery_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/blue_ice_cave_discovery_LG_5c9f8a2ebf.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "Budakirkja2_9a606719cd",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Budakirkja2_9a606719cd.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "joshua_earle_Hn8_N4_I4e_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/joshua_earle_Hn8_N4_I4e_HA_0_unsplash_b39b127f50.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    }
  ],
  highlights: [
    "體驗 Sky Lagoon 天空之境溫泉",
    "暢遊冰島最經典的黃金圈路線",
    "體驗藍冰洞探險，觸摸千年的冰川",
    "造訪冰島斯奈山半島攝影聖地草帽山",
    "體驗獨特的Víðgelmir火山熔岩洞穴探險",
    "感受冰島塞里雅蘭瀑布和斯科加瀑布的壯麗",
    "遊覽夢幻浪漫的冰河湖和鑽石沙灘",
    "探索冰島西部白銀圈的迷人風光",
  ],
  attractions: [
        seljalandsfossSpot,
    skogafossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    diamondBeachSpot,
    thingvellirSpot,
    geysirSpot,
    gullfossSpot,
    hraunfossarSpot,
    glanniSpot,reykholtSpot,kirkjufellSpot,
    budakirkjaSpot,],
  routeOverviewSubtitle: "南岸、黃金圈、西部與斯奈山冬季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "南岸 → 塞里雅蘭／斯科加瀑布 → 黑沙灘 → 維克" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞 → 返回雷克雅維克" },
    { label: "第 4 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布 → 凱瑞斯火山口）" },
    { label: "第 5 天", detail: "冰島西部（格蘭尼瀑布 → 熔岩瀑布 → 熔岩洞穴）" },
    { label: "第 6 天", detail: "斯奈山半島（教會山 → 阿爾納斯塔皮 → 布迪爾黑教堂）" },
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
        "今天是您入境冰島的第一天。我們安排機場巴士接送您至雷克雅維克市區飯店入住安頓。\n\n若抵達時間為上午或下午，可前往 Sky Lagoon 天空之境溫泉放鬆身心，為接下來的跟團行程儲備體力。晚上建議早休息，以飽滿精神迎接明日出發。",
      highlights: icelandGroupWinter7Day1Highlights,
      optionalActivities: icelandGroupWinter7Day1OptionalActivities,
    },
    {
      day: 2,
      title: "南岸風光：塞里雅蘭瀑布、斯科加瀑布、維克黑沙灘",
      accommodation: "南岸",
      description:
        "今日跟隨品質小巴團沿南岸一號公路南下。冬季南岸白雪覆蓋大地，天際時有粉霞渲染，景致獨特。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；冬季基於安全考量，塞里雅蘭瀑布後方小徑通常封閉。繼續南下至黑沙灘（Reynisfjara），沿岸玄武岩石柱層疊矗立，遠處可見雷尼斯岩（Reynisdrangar）矗立海中。請務必遵守安全警示，遠離海浪。今晚入住南岸。",
      highlights: icelandGroupWinter7Day2Highlights,
      optionalActivities: icelandGroupWinter7Day2OptionalActivities,
    },
    {
      day: 3,
      title: "東南岸景色：傑古沙龍冰河湖、鑽石沙灘、藍冰洞探險",
      accommodation: "雷克雅維克",
      description:
        "今日往東南前進，進入瓦特納冰川國家公園。造訪傑古沙龍冰河湖（Jökulsárlón），浮冰在湖面緩緩漂移；對岸的鑽石沙灘（Diamond Beach）上，透明冰塊散佈於黑色沙灘，黑白對比格外分明。\n\n下午由專業嚮導帶領參加藍冰洞探險，穿戴安全裝備後深入冰川內部，近距離感受冬季特有的冰藍色調。回程途中經過 Hofskirkja 草皮教堂、埃爾德熔岩原（Eldhraun）與維克，傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupWinter7Day3Highlights,
      optionalActivities: icelandGroupWinter7Day3OptionalActivities,
    },
    {
      day: 4,
      title: "黃金圈：辛格維利爾國家公園、蓋錫爾間歇泉地帶、黃金瀑布、凱瑞斯火山口",
      accommodation: "雷克雅維克",
      description:
        "今日遊覽冰島最著名的黃金圈路線，依序造訪辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）。辛格維利爾位於北美與歐亞板塊裂谷邊緣，亦是冰島最早議會所在地；史托克間歇泉（Strokkur）約每五至十分鐘噴發一次，冬季尤為壯觀。\n\n行程另安排凱瑞斯火山口（Kerið），紅色火山岩壁環抱著湛藍湖水，與周圍冬日雪景相映成趣。今晚返回雷克雅維克住宿。",
      highlights: icelandGroupWinter7Day4Highlights,
      optionalActivities: icelandGroupWinter7Day4OptionalActivities,
    },
    {
      day: 5,
      title: "冰島西部風光：格蘭尼瀑布、德爾達圖赫菲溫泉、赫倫瀑布、熔岩洞穴探險",
      accommodation: "西部",
      description:
        "今日前往冰島西部。首先造訪格蘭尼瀑布（Glanni），瀑布橫跨 Grabrókarhraun 古老熔岩區，周邊亦可遠眺 Grabrok 火山口。\n\n接著參觀德爾達圖赫菲溫泉（Deildartunguhver）——歐洲流速最快的地熱泉源，棧道上可近距離感受地熱蒸氣撲面而來。途經雷克霍特（Reykholt）歷史遺址後，前往熔岩瀑布（Hraunfossar）與兒童瀑布（Barnafoss），上百條溪流自熔岩原上瀉下，景觀獨特。今日重點為 Víðgelmir 熔岩洞穴探險，在專業嚮導帶領下走訪冰島最大的熔岩洞穴之一。今晚入住西部。",
      highlights: icelandGroupWinter7Day5Highlights,
      optionalActivities: icelandGroupWinter7Day5OptionalActivities,
    },
    {
      day: 6,
      title: "斯奈山半島： 海豹沙灘、黑教堂、阿納斯塔皮、教會山",
      accommodation: "雷克雅維克",
      description:
        "斯奈山半島被稱為「冰島縮影」，一日之內可見火山、冰川、黑沙灘、漁村與海岸峭壁等多元地貌。\n\n今日將造訪海豹沙灘（Ytri Tunga）、布迪爾黑教堂（Búðakirkja）、阿爾納斯塔皮（Arnastapi）海岸峭壁與 Djúpalónssandur 黑沙灘，以及斯奈山半島標誌性景點教會山（Kirkjufell）。傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupWinter7Day6Highlights,
      optionalActivities: icelandGroupWinter7Day6OptionalActivities,
    },
    {
      day: 7,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依預訂時間搭乘機場巴士前往凱夫拉維克國際機場。\n\n若班機時間較晚，可在雷克雅維克市區多留片刻，造訪哈爾格林姆斯大教堂、托寧湖（Tjörnin）等景點，最後感受這座北歐首都的冬日氛圍。",
      highlights: icelandGroupWinter7Day7Highlights,
      optionalActivities: icelandGroupWinter7Day7OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含各類景點、歷史、文化、自然等資訊描述）",
      "機場往返市區飯店大巴接送",
      "雷克雅維克市區4晚住宿",
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
      "台灣冰島雙時區服務",
      "車載WiFi",
      "VAT增值稅",
    ],
    excluded: [
      "晚餐",
      "午餐",
      "登山鞋",
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
          question: "去冰島旅遊需要辦理什麼簽證？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"中國大陸公民前往冰島旅行需要辦理旅遊簽證。冰島屬於申根國家，因此您需要辦理申根簽證。\"]",
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
      tripKey: "iceland/group/winter/6",
      title: "6 天 5 夜冰島冬季跟團遊",
      tourCode: "SMD-062",
      durationLabel: "6 天／5 夜",
      description:
        "南岸、黃金圈與斯奈山半島，冬季跟團精選路線。",
    },
    {
      tripKey: "iceland/group/winter/8",
      title: "8 天 7 夜冰島冬季跟團遊",
      tourCode: "SMD-082",
      durationLabel: "8 天／7 夜",
      description:
        "更充裕的冬季跟團天數，深度探索冰島環島精華。",
    },
  ],
};
