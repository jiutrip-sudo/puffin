import type { TripPackage } from "./types";
import { arnarstapiSpot } from "./spots/arnarstapi";
import { budakirkjaSpot } from "./spots/budakirkja";
import { barnafossSpot } from "./spots/barnafoss";
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
  icelandGroupWinter8NonRingDay1Highlights,
  icelandGroupWinter8NonRingDay1OptionalActivities,
} from "./iceland-group-winter-8-non-ring-day1-cards";
import {
  icelandGroupWinter8NonRingDay2Highlights,
  icelandGroupWinter8NonRingDay2OptionalActivities,
  icelandGroupWinter8NonRingDay3Highlights,
  icelandGroupWinter8NonRingDay3OptionalActivities,
  icelandGroupWinter8NonRingDay4Highlights,
  icelandGroupWinter8NonRingDay4OptionalActivities,
  icelandGroupWinter8NonRingDay5Highlights,
  icelandGroupWinter8NonRingDay5OptionalActivities,
  icelandGroupWinter8NonRingDay6Highlights,
  icelandGroupWinter8NonRingDay6OptionalActivities,
  icelandGroupWinter8NonRingDay7Highlights,
  icelandGroupWinter8NonRingDay7OptionalActivities,
  icelandGroupWinter8NonRingDay8Highlights,
  icelandGroupWinter8NonRingDay8OptionalActivities,
} from "./iceland-group-winter-8-non-ring-days2-8-cards";

export const icelandGroupWinter8NonRing: TripPackage = {
  id: "iceland-group-winter-8-non-ring",
  tripKey: "iceland/group/winter/8/non-ring",
  slug: "iceland-winter-package-8-days-south-coast-and-snaefellsnes",
  tourCode: "SMD-084",
  title: "8 天 7 夜冰島冬季南岸精華跟團遊",
  subtitle: "溫泉&瀑布&藍冰洞探險",
  duration: { days: 8, nights: 7 },
  season: { label: "冬季", months: "11 月–4 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-084",
  },
  eyebrow: "冰島集合 · 跟團 · 冬季",
  backHref: "/trips/iceland/group/winter/8",
  backLabel: "返回路線選擇",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/jon_flobrant_lj_Ka_PW_3h_FZA_unsplash_551111fe58.jpg",
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
      "這個 8 天 7 夜冰島冬季南岸精華跟團遊，由品質小巴團與專業嚮導帶您走訪南岸、冰河湖藍冰洞、黃金圈、西部與斯奈山半島，並留有一日雷克雅維克自由行。行程充分顧及冬季日照與路況，節奏適中、安排務實。",
    full: `這個 8 天 7 夜冰島冬季南岸精華跟團遊，由品質小巴團與專業嚮導帶您走訪南岸、冰河湖藍冰洞、黃金圈、西部與斯奈山半島，並留有一日雷克雅維克自由行。套餐充分顧及冬季日照時數與路況，行程安排合理、節奏適中。

您將沿南岸探索塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）與黑沙灘（Reynisfjara），遠眺雷尼斯岩（Reynisdrangar）；造訪傑古沙龍冰河湖（Jökulsárlón）、鑽石沙灘（Diamond Beach）並參加藍冰洞探險。黃金圈行程涵蓋辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）。

西部將遊覽熔岩瀑布（Hraunfossar）與 Víðgelmir 熔岩洞穴；斯奈山半島則造訪教會山（Kirkjufell）與布迪爾黑教堂。另安排一日雷克雅維克自由行，讓您依自己的步調造訪托寧湖（Tjörnin）、博物館與地熱溫泉。天候許可時，亦有機會在途中共賞北極光。

完成預訂後，您將收到行程策劃師為您客製的中文行程手冊。`,
  },
  gallery: [
    {
      id: "jon_flobrant_lj_Ka_PW_3h",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jon_flobrant_lj_Ka_PW_3h_FZA_unsplash_551111fe58.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "kirkjufell_winter_andres",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/kirkjufell_winter_andres_dallimonti_f_Id_PFHN_7_H_Lk_unsplash_3e92effc77.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "Solfarid_9c24228023",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Solfarid_9c24228023.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "5_f5f16c66da",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/5_f5f16c66da.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    }
  ],
  highlights: [
    "探秘斯奈山半島，感受其豐富的多樣化景觀",
    "開啟雷克雅維克自由行，感受首都風貌",
    "沉浸於冰河湖和鑽石沙灘的如夢似幻",
    "深入西部白銀圈，尋訪冰島傳奇的故事",
    "欣賞南岸瀑布水霧飛濺的壯麗之美",
    "探險冰之奇蹟藍冰洞，感受觸目冰藍",
    "在冰島溫泉體驗獨有的放鬆和療愈",
    "造訪黃金圈三大景點，欣賞斑斕凱瑞斯火山口",
    "在異世黑沙灘感受大西洋與海岸交響樂章",
    "途徑傳統冰島草皮教堂，感受熔岩原的冬日風景",
  ],
  attractions: [
        seljalandsfossSpot,
    skogafossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    diamondBeachSpot,
    gullfossSpot,thingvellirSpot,
    geysirSpot,
    hraunfossarSpot,
    barnafossSpot,
    budakirkjaSpot,
    arnarstapiSpot,kirkjufellSpot,],
  routeOverviewSubtitle: "南岸、黃金圈、西部與斯奈山半島冬季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "南岸 → 塞里雅蘭／斯科加瀑布 → 黑沙灘 → 維克" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞 → 返回雷克雅維克" },
    { label: "第 4 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）" },
    { label: "第 5 天", detail: "冰島西部（熔岩瀑布 → 兒童瀑布 → 雷克霍特）" },
    { label: "第 6 天", detail: "斯奈山半島（教會山 → 阿爾納斯塔皮 → 布迪爾黑教堂）" },
    { label: "第 7 天", detail: "雷克雅維克自由行動" },
    { label: "第 8 天", detail: "雷克雅維克 → 機場離境" }
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
        lng: -21.9426,
        lat: 64.1466,
        label: "第 7 天",
        detail: "雷克雅維克自由行",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 8 天",
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
      highlights: icelandGroupWinter8NonRingDay1Highlights,
      optionalActivities: icelandGroupWinter8NonRingDay1OptionalActivities,
    },
    {
      day: 2,
      title: "南岸瀑布和黑沙灘",
      accommodation: "南岸",
      description:
        "今日跟隨品質小巴團沿南岸一號公路南下。冬季南岸白雪覆蓋大地，天際時有粉霞渲染，景致獨特。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；冬季基於安全考量，塞里雅蘭瀑布後方小徑通常封閉。繼續南下至黑沙灘（Reynisfjara），沿岸玄武岩石柱層疊矗立，遠處可見雷尼斯岩（Reynisdrangar）矗立海中。請務必遵守安全警示，遠離海浪。今晚入住南岸。",
      highlights: icelandGroupWinter8NonRingDay2Highlights,
      optionalActivities: icelandGroupWinter8NonRingDay2OptionalActivities,
    },
    {
      day: 3,
      title: "冰河湖風光、鑽石沙灘、藍冰洞探險",
      accommodation: "雷克雅維克",
      description:
        "今日往東南前進，進入瓦特納冰川國家公園。造訪傑古沙龍冰河湖（Jökulsárlón），浮冰在湖面緩緩漂移；對岸的鑽石沙灘（Diamond Beach）上，透明冰塊散佈於黑色沙灘，黑白對比格外分明。\n\n下午由專業嚮導帶領參加藍冰洞探險，穿戴安全裝備後深入冰川內部，近距離感受冬季特有的冰藍色調。回程途中經過 Hofskirkja 草皮教堂、埃爾德熔岩原（Eldhraun）與維克，傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupWinter8NonRingDay3Highlights,
      optionalActivities: icelandGroupWinter8NonRingDay3OptionalActivities,
    },
    {
      day: 4,
      title: "黃金瀑布、蓋錫爾間歇泉地帶、辛格維利爾國家公園",
      accommodation: "雷克雅維克",
      description:
        "今日遊覽冰島最著名的黃金圈路線，依序造訪辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）。辛格維利爾位於北美與歐亞板塊裂谷邊緣，亦是冰島最早議會所在地；史托克間歇泉（Strokkur）約每五至十分鐘噴發一次，冬季尤為壯觀。\n\n行程另安排凱瑞斯火山口（Kerið），紅色火山岩壁環抱著湛藍湖水，與周圍冬日雪景相映成趣。今晚返回雷克雅維克住宿。",
      highlights: icelandGroupWinter8NonRingDay4Highlights,
      optionalActivities: icelandGroupWinter8NonRingDay4OptionalActivities,
    },
    {
      day: 5,
      title: "熔岩瀑布、兒童瀑布、雷克霍特歷史遺址",
      accommodation: "西部",
      description:
        "今日前往冰島西部。途經雷克霍特（Reykholt）歷史遺址——13 世紀文學家斯諾里·斯圖盧松（Snorri Sturluson）的故鄉，感受冰島中世紀文化底蘊。\n\n接著造訪熔岩瀑布（Hraunfossar）與兒童瀑布（Barnafoss），上百條溪流自熔岩原上瀉下，景觀獨特。今日重點為 Víðgelmir 熔岩洞穴探險，在專業嚮導帶領下走訪冰島最大的熔岩洞穴之一。今晚入住西部。",
      highlights: icelandGroupWinter8NonRingDay5Highlights,
      optionalActivities: icelandGroupWinter8NonRingDay5OptionalActivities,
    },
    {
      day: 6,
      title: "斯奈山半島：黑教堂、阿爾納斯塔皮、教會山",
      accommodation: "雷克雅維克",
      description:
        "斯奈山半島被稱為「冰島縮影」，一日之內可見火山、冰川、黑沙灘、漁村與海岸峭壁等多元地貌。\n\n今日將造訪布迪爾黑教堂（Búðakirkja）、阿爾納斯塔皮（Arnastapi）海岸峭壁與 Djúpalónssandur 黑沙灘，以及斯奈山半島標誌性景點教會山（Kirkjufell）。傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupWinter8NonRingDay6Highlights,
      optionalActivities: icelandGroupWinter8NonRingDay6OptionalActivities,
    },
    {
      day: 7,
      title: "雷克雅維克自由活動日",
      accommodation: "雷克雅維克",
      description:
        "今日在雷克雅維克自由安排一日，漫步洛加維格大街（Laugavegur）、哈帕音樂廳、哈爾格林姆斯大教堂與托寧湖（Tjörnin）等市區景點，品嚐當地美食，感受北歐首都的獨特氛圍。\n\n亦可另行加購 Sky Lagoon、藍湖溫泉、極光船遊或觀鯨等體驗。今晚繼續入住雷克雅維克。",
      highlights: icelandGroupWinter8NonRingDay7Highlights,
      optionalActivities: icelandGroupWinter8NonRingDay7OptionalActivities,
    },
    {
      day: 8,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依預訂時間搭乘機場巴士前往凱夫拉維克國際機場。\n\n若班機時間較晚，可在雷克雅維克市區多留片刻，造訪哈爾格林姆斯大教堂、托寧湖（Tjörnin）等景點，最後感受這座北歐首都的冬日氛圍。",
      highlights: icelandGroupWinter8NonRingDay8Highlights,
      optionalActivities: icelandGroupWinter8NonRingDay8OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含各類景點、歷史、文化、自然等資訊描述）",
      "簽證輔助行程單材料提供",
      "機場往返市區飯店大巴接送",
      "雷克雅維克市區5晚住宿",
      "雷克雅維克市區參團接送服務",
      "Sky Lagoon 天空之境溫泉7步療法純享體驗門票",
      "Sky lagoon 往返接駁巴士",
      "南岸1晚舒適級住宿",
      "西部1晚舒適級住宿",
      "南岸2日遊（英文嚮導）",
      "黃金圈1日遊（英文嚮導）",
      "西部與斯奈山半島2日遊（英文嚮導）",
      "每日住宿提供早餐",
      "凱瑞斯火山口入場票",
      "藍冰洞探險體驗及安全裝備",
      "Vidgelmir熔岩洞穴探險及安全設備",
      "台灣冰島雙時區服務",
      "車載WiFi",
      "VAT增值稅",
    ],
    excluded: [
      "午餐",
      "晚餐",
      "個人保暖衣物和裝備",
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
          question: "為什麼不是所有飯店都能到飯店門口接團？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"為了維持雷克雅維克市中心舒適安全的城市環境，冰島政府規定旅遊巴士不可隨意進入市中心區域，而必須在附近指定的接車地點接送旅客。\"]",
        },
        {
          question: "這個行程的行李額是多少？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"您能夠攜帶上車的行李箱最大尺寸為56 x 45 x 25 cm（大約為22寸行李箱大小）。如果您有其他大件行李，也可以聯繫飯店寄存。\"]",
        },
        {
          question: "去冰島旅遊需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"雖然比世界上緯度相近的許多地方都要溫暖，但冰島總體上還是一個寒冷的國家，特別是在冬季，平均氣溫在0攝氏度左右，而夏季的平均氣溫約在10-15度。\"]",
        },
        {
          question: "我應該提前多久預訂冰島行程？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"由於冰島的旅遊業資源有限，為了保障您的出行品質，我們建議您\"]},{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"至少在出行前幾週開始在我們的官網預訂行程\"]",
        },
        {
          question: "為什麼我只能選擇首都雷克雅維克地區的飯店等級？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為首都雷克雅維克的飯店選擇更多，且行程相對更靈活。而套餐內冰島其他地區的行程中，參團的顧客都是統一行動的，有固定的行程路線和固定的飯店。因此為保障行程的統一性與合理性，並不浪費顧客的遊覽時間，其他地區暫時無法選擇飯店等級，請您體諒。\"]",
        },
        {
          question: "如果天氣原因導致不發團該怎麼辦？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"針對以下三種情況，我們將分別處理您的退款事宜：\"]",
        },
        {
          question: "帕芬假期旅行的冰島旅遊套餐中包含往返機票嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"為了給您提供最大的靈活性和最低的價格，我們的旅行套餐均不包含航班的預訂。一旦您確定了大致的旅行時間，就可以開始在網上查找合適的航班。\"]",
        }
      ],
    }
  ],
  similarTrips: [
    {
      tripKey: "iceland/group/winter/8/ring",
      title: "8 天 7 夜冰島冬季跟團遊",
      tourCode: "SMD-082",
      durationLabel: "8 天／7 夜",
      description:
        "冬季環島跟團：黃金圈、南岸、東部峽灣與北部精華。",
    },
    {
      tripKey: "iceland/group/winter/7",
      title: "7 天 6 夜冰島冬季跟團遊",
      tourCode: "SMD-072",
      durationLabel: "7 天／6 夜",
      description:
        "南岸、黃金圈、西部與斯奈山，冬季跟團精選路線。",
    },
  ],
};
