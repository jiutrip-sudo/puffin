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
  icelandGroupWinter9NonRingDay1Highlights,
  icelandGroupWinter9NonRingDay1OptionalActivities,
} from "./iceland-group-winter-9-non-ring-day1-cards";
import {
  icelandGroupWinter9NonRingDay2Highlights,
  icelandGroupWinter9NonRingDay2OptionalActivities,
  icelandGroupWinter9NonRingDay3Highlights,
  icelandGroupWinter9NonRingDay3OptionalActivities,
  icelandGroupWinter9NonRingDay4Highlights,
  icelandGroupWinter9NonRingDay4OptionalActivities,
  icelandGroupWinter9NonRingDay5Highlights,
  icelandGroupWinter9NonRingDay5OptionalActivities,
  icelandGroupWinter9NonRingDay6Highlights,
  icelandGroupWinter9NonRingDay6OptionalActivities,
  icelandGroupWinter9NonRingDay7Highlights,
  icelandGroupWinter9NonRingDay7OptionalActivities,
  icelandGroupWinter9NonRingDay8Highlights,
  icelandGroupWinter9NonRingDay8OptionalActivities,
  icelandGroupWinter9NonRingDay9Highlights,
  icelandGroupWinter9NonRingDay9OptionalActivities,
} from "./iceland-group-winter-9-non-ring-days2-9-cards";

export const icelandGroupWinter9NonRing: TripPackage = {
  id: "iceland-group-winter-9-non-ring",
  tripKey: "iceland/group/winter/9/non-ring",
  slug: "iceland-9-days-winter-package-south-coast-and-snaefellsnes-adventure",
  tourCode: "SMD-094",
  title: "9 天 8 夜冰島冬季南岸輕奢跟團遊",
  subtitle: "黃金圈&南岸&斯奈山&浮潛體驗",
  duration: { days: 9, nights: 8 },
  season: { label: "冬季", months: "11 月–4 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-094",
  },
  eyebrow: "冰島集合 · 跟團 · 冬季",
  backHref: "/trips/iceland/group/winter/9",
  backLabel: "返回路線選擇",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/Barnafoss_winter_40e5e436f6.jpg",
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
      "這個 9 天 8 夜冰島冬季西南岸精選跟團，由品質小巴團與專業嚮導帶領，涵蓋南岸、黃金圈、西部與斯奈山半島，並安排絲浮拉裂谷浮潛與一日雷克雅維克自由行。行程充分顧及冬季日照與路況，節奏適中、安排務實。",
    full: `這個 9 天 8 夜冰島冬季西南岸精選跟團，由品質小巴團與專業嚮導帶領，涵蓋南岸、黃金圈、西部與斯奈山半島，並安排絲浮拉裂谷浮潛與一日雷克雅維克自由行。套餐充分顧及冬季日照時數與路況，行程安排合理、節奏適中。

您將沿南岸探索塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）與黑沙灘（Reynisfjara），造訪傑古沙龍冰河湖（Jökulsárlón）、鑽石沙灘（Diamond Beach）與藍冰洞（Blue Ice Cave）；另遊覽黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）。

行程另安排一日西部白銀圈，造訪熔岩瀑布（Hraunfossar）、兒童瀑布（Barnafoss）與雷克霍特（Reykholt）歷史名鎮；以及「冰島縮影」斯奈山半島（Snæfellsnes）一日遊，並在絲浮拉裂谷（Silfra）體驗浮潛。途中亦可另行加購觀鯨或極光船遊等體驗。完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，讓您輕鬆盡享冰島冬季西南岸精華。`,
  },
  gallery: [
    {
      id: "Barnafoss_winter_40e5e43",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Barnafoss_winter_40e5e436f6.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "Arnarstapi1_d87729c2b9",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Arnarstapi1_d87729c2b9.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "3_H6_A9334_5924879f1d",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/3_H6_A9334_5924879f1d.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    }
  ],
  highlights: [
    "西部探險，尋找隱藏在冰島荒野中的瀑布和遺蹟",
    "與冰島馬一起自由馳騁在古老而神秘的土地上",
    "讓獨有的冰島溫泉擁抱你的身心",
    "駐足於南岸瀑布，聽水聲奏響自然的樂章",
    "漫遊於浪漫夢幻的傑古沙龍冰河湖和鑽石沙灘",
    "深入藍冰洞探秘，觸摸千年冰川的心跳",
    "在神秘的黑沙灘感受世界盡頭的孤獨",
    "在古老的冰島議會公園健行，浮潛於板塊裂縫",
    "沉浸於斯奈山半島多樣化的冰島風景",
    "在雷克雅維克感受最北首都的無限風情",
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
  routeOverviewSubtitle: "南岸、黃金圈、西部、斯奈山與絲浮拉浮潛冬季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "南岸 → 塞里雅蘭／斯科加瀑布 → 黑沙灘 → 維克" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞 → 返回雷克雅維克" },
    { label: "第 4 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）" },
    { label: "第 5 天", detail: "冰島西部（熔岩瀑布 → 兒童瀑布 → 雷克霍特）" },
    { label: "第 6 天", detail: "斯奈山半島（教會山 → 阿爾納斯塔皮 → 布迪爾黑教堂）" },
    { label: "第 7 天", detail: "絲浮拉裂谷浮潛體驗" },
    { label: "第 8 天", detail: "雷克雅維克自由行動" },
    { label: "第 9 天", detail: "雷克雅維克 → 機場離境" }
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
        lng: -18.108,
        lat: 64.255,
        label: "第 7 天",
        detail: "絲浮拉裂谷浮潛",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 8 天",
        detail: "雷克雅維克自由行",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 9 天",
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
      highlights: icelandGroupWinter9NonRingDay1Highlights,
      optionalActivities: icelandGroupWinter9NonRingDay1OptionalActivities,
    },
    {
      day: 2,
      title: "冰島南岸：塞里雅蘭瀑布、斯科加瀑布和黑沙灘",
      accommodation: "南岸",
      description:
        "今日搭乘品質小巴團沿南岸一號公路南下。冬季南岸色調獨特：白雪覆蓋大地、天際染上粉霞。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；冬季基於安全考量，塞里雅蘭瀑布後方小徑通常封閉。繼續前往黑沙灘（Reynisfjara），遠處可見雷尼斯岩（Reynisdrangar）矗立海中，途中經過維克（Vík）。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸。",
      highlights: icelandGroupWinter9NonRingDay2Highlights,
      optionalActivities: icelandGroupWinter9NonRingDay2OptionalActivities,
    },
    {
      day: 3,
      title: "東南部風光：傑古沙龍冰河湖、鑽石沙灘、藍冰洞探險",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園。造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach），浮冰在黑色沙灘上晶瑩閃耀，黑白對比格外震撼。\n\n行程亮點為藍冰洞（Blue Ice Cave）探險：在專業嚮導帶領下穿戴安全裝備，進入冰川內部欣賞深邃冰藍世界。結束後返回雷克雅維克，途中將途經 Hofskirkja 草皮教堂、埃爾德熔岩原（Eldhraun）與維克（Vík）。",
      highlights: icelandGroupWinter9NonRingDay3Highlights,
      optionalActivities: icelandGroupWinter9NonRingDay3OptionalActivities,
    },
    {
      day: 4,
      title: "黃金圈之旅：黃金瀑布、蓋錫爾間歇泉地帶、冰島議會公園",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。史托克間歇泉（Strokkur）每隔數分鐘噴發一次，請在嚮導指定的安全區域內觀賞。行程另造訪凱瑞斯火山口（Kerið Crater）。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupWinter9NonRingDay4Highlights,
      optionalActivities: icelandGroupWinter9NonRingDay4OptionalActivities,
    },
    {
      day: 5,
      title: "西部小眾風景：熔岩瀑布、兒童瀑布、冰島傳奇故鄉",
      accommodation: "西部",
      description:
        "今日搭乘品質小巴團探索西部白銀圈。造訪熔岩瀑布（Hraunfossar）、兒童瀑布（Barnafoss）與雷克霍特（Reykholt）歷史名鎮，並參觀德爾達圖赫菲溫泉（Deildartunguhver）。行程另安排 Víðgelmir 火山岩洞探險，由專業嚮導帶領並提供安全裝備。今晚入住西部。",
      highlights: icelandGroupWinter9NonRingDay5Highlights,
      optionalActivities: icelandGroupWinter9NonRingDay5OptionalActivities,
    },
    {
      day: 6,
      title: "斯奈山半島：黑色小教堂、權遊箭頭山、阿爾納斯塔皮漁村",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團前往斯奈山半島（Snæfellsnes），被稱為「冰島縮影」。造訪布迪爾黑教堂（Búðakirkja）、海豹沙灘（Ytri-Tunga）、教會山（Kirkjufell）與阿爾納斯塔皮（Arnarstapi）海岸。傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupWinter9NonRingDay6Highlights,
      optionalActivities: icelandGroupWinter9NonRingDay6OptionalActivities,
    },
    {
      day: 7,
      title: "特別浮潛日：世界熱門潛水地絲浮拉裂谷浮潛體驗",
      accommodation: "雷克雅維克",
      description:
        "今日前往辛格維利爾國家公園內的絲浮拉裂谷（Silfra）體驗浮潛。裂谷水質清澈，能見度極高，由專業教練全程陪同並提供乾式浮潛裝備。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupWinter9NonRingDay7Highlights,
      optionalActivities: icelandGroupWinter9NonRingDay7OptionalActivities,
    },
    {
      day: 8,
      title: "首都自由活動日：探索最北首都的悠閒時光",
      accommodation: "雷克雅維克",
      description:
        "今日在雷克雅維克自由安排一日，漫步洛加維格大街（Laugavegur）、哈帕音樂廳（Harpa）與彩虹街等市區景點，品嚐當地美食，感受北歐首都的獨特氛圍。亦可另行加購 Sky Lagoon、藍湖溫泉、極光船遊或觀鯨等體驗。今晚繼續入住雷克雅維克。",
      highlights: icelandGroupWinter9NonRingDay8Highlights,
      optionalActivities: icelandGroupWinter9NonRingDay8OptionalActivities,
    },
    {
      day: 9,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續。\n\n若仍有餘裕，可在雷克雅維克市區漫步，或選擇前往藍湖溫泉（Blue Lagoon）結束旅程。",
      highlights: icelandGroupWinter9NonRingDay9Highlights,
      optionalActivities: icelandGroupWinter9NonRingDay9OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含各類景點、歷史、文化、自然等資訊描述）",
      "機場往返市區飯店大巴接送",
      "雷克雅維克市區參團接送服務",
      "Sky Lagoon 天空之境溫泉7步療法純享體驗門票",
      "Sky lagoon 往返接駁巴士",
      "雷克雅維克市區6晚住宿",
      "南岸1晚舒適級住宿",
      "西部1晚舒適級住宿",
      "南岸2日遊（英文嚮導）",
      "黃金圈1日遊（英文嚮導）",
      "西部與斯奈山半島2日遊（英文嚮導）",
      "每日住宿提供早餐",
      "凱瑞斯火山口入場票",
      "藍冰洞探險體驗及安全裝備",
      "Vidgelmir熔岩洞穴探險及安全設備",
      "絲浮拉浮潛體驗（含首都接送）",
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
          question: "去冰島旅遊需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"雖然比世界上緯度相近的許多地方都要溫暖，但冰島總體上還是一個寒冷的國家，特別是在冬季，平均氣溫在0攝氏度左右，而夏季的平均氣溫約在10-15度。\"]",
        },
        {
          question: "這個行程的行李額是多少？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"您能夠攜帶上車的行李箱最大尺寸為56 x 45 x 25 cm（大約為22寸行李箱大小）。如果您有其他大件行李，也可以聯繫飯店寄存。\"]",
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
          question: "我可以自己選擇旅行團套餐的出發日期嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"可以！在我們預訂界面，您可以按照自己的旅行計劃來選擇旅行團套餐的日期。\"]",
        },
        {
          question: "帕芬假期旅行的旅行團套餐是什麼？是自營的嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"帕芬假期旅行的旅行團套餐是我們最熱門的產品。在旅行團套餐中，我們將為您提供路線合理、景點全面的觀光套餐，均包含機場往返首都接送、首都參團接送、冰島本地優選供應商的一日遊與多日遊（含司機兼嚮導）、住宿（含早餐）、獨家客製的中文行程手冊（含各類景點、歷史、文化、自然等資訊描述）、台灣冰島雙時區的中文客服等服務，並提供行程客製服務。\"]",
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
      tripKey: "iceland/group/winter/9/ring",
      title: "9 天 8 夜冰島冬季跟團遊",
      tourCode: "SMD-092",
      durationLabel: "9 天／8 夜",
      description:
        "冬季環島跟團：黃金圈、南岸、東部峽灣與北部精華。",
    },
    {
      tripKey: "iceland/group/winter/8/non-ring",
      title: "8 天 7 夜冰島冬季南岸精華跟團遊",
      tourCode: "SMD-084",
      durationLabel: "8 天／7 夜",
      description:
        "南岸、黃金圈、西部與斯奈山半島，冬季非環島精選。",
    },
  ],
};
