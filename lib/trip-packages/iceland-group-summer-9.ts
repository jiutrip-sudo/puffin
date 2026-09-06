import type { TripPackage } from "./types";
import { hraunfossarSpot } from "./spots/hraunfossar";
import { kirkjufellSpot } from "./spots/kirkjufell";
import { geysirSpot } from "./spots/geysir";
import { thingvellirSpot } from "./spots/thingvellir";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { reykjavikSpot } from "./spots/reykjavik";
import {
  icelandGroupSummer9Day1Highlights,
  icelandGroupSummer9Day1OptionalActivities,
} from "./iceland-group-summer-9-day1-cards";
import {
  icelandGroupSummer9Day2Highlights,
  icelandGroupSummer9Day2OptionalActivities,
  icelandGroupSummer9Day3Highlights,
  icelandGroupSummer9Day3OptionalActivities,
  icelandGroupSummer9Day4Highlights,
  icelandGroupSummer9Day4OptionalActivities,
  icelandGroupSummer9Day5Highlights,
  icelandGroupSummer9Day5OptionalActivities,
  icelandGroupSummer9Day6Highlights,
  icelandGroupSummer9Day6OptionalActivities,
  icelandGroupSummer9Day7Highlights,
  icelandGroupSummer9Day7OptionalActivities,
  icelandGroupSummer9Day8Highlights,
  icelandGroupSummer9Day8OptionalActivities,
  icelandGroupSummer9Day9Highlights,
  icelandGroupSummer9Day9OptionalActivities,
} from "./iceland-group-summer-9-days2-9-cards";

export const icelandGroupSummer9: TripPackage = {
  id: "iceland-group-summer-9",
  tripKey: "iceland/group/summer/9",
  slug: "iceland-summer-9-day-tour-package-whale-watching-south-coast-west-iceland",
  tourCode: "SMD-093",
  title: "9 天 8 夜冰島夏季深度體驗跟團遊",
  subtitle: "賞鯨&黑沙灘&西部小眾景觀",
  duration: { days: 9, nights: 8 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-093",
  },
  eyebrow: "冰島集合 · 跟團 · 夏季",
  backHref: "/trips/iceland/group/summer",
  backLabel: "返回夏季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/68c4f55c_copy_cdc1c8a3ce.jpg",
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
      "這個 9 天 8 夜冰島夏季深度跟團遊，由品質小巴團與專業嚮導帶您走訪黃金圈、南岸、冰河湖、西部白銀圈與斯奈山半島，並安排火山內部探險與出海賞鯨。套餐含機場接送，夏季日照充沛，行程節奏適中、安排務實。",
    full: `這個 9 天 8 夜冰島夏季深度跟團遊，由品質小巴團與專業嚮導帶您走訪黃金圈、南岸、冰河湖、西部白銀圈與斯奈山半島，並安排火山內部探險與出海賞鯨。套餐含機場接送，夏季日照充沛，行程安排合理、節奏適中。

您將造訪黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）；沿南岸探索塞里雅蘭瀑布、斯科加瀑布，參加索爾黑馬冰川健行，並在黑沙灘（Reynisfjara）遠眺雷尼斯岩（Reynisdrangar），途中經過維克（Vík）。繼續造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。

西部白銀圈將遊覽熔岩瀑布（Hraunfossar）、德爾達圖赫菲溫泉（Deildartunguhver）與 Víðgelmir 熔岩洞穴；斯奈山半島則造訪教會山（Kirkjufell）與布迪爾黑教堂。行程另安排一日火山內部探險與出海賞鯨，並留有一日雷克雅維克自由行，可另行加購絲浮拉浮潛、溫泉體驗或內陸高地健行等夏季活動。完成預訂後，您將收到行程策劃師為您客製的中文行程手冊。`,
  },
  gallery: [
    {
      id: "68c4f55c_copy_cdc1c8a3ce",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/68c4f55c_copy_cdc1c8a3ce.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "hallgrimskirkja_in_blue_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/hallgrimskirkja_in_blue_sky_06c5cbcb22.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "3_H6_A7791_4395de2b82",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/3_H6_A7791_4395de2b82.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "reynisdanger_in_sunlight",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reynisdanger_in_sunlight_6befda16ac.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "reynisfjara_black_beach_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reynisfjara_black_beach_in_sunset_28f9ab55a5.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "diamond_beach_with_dream",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/diamond_beach_with_dreamy_sky_1b0b111c99.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "ytri_tunga_with_lying_se",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/ytri_tunga_with_lying_seals_f9b80ac14e.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    }
  ],
  highlights: [
    "探索充滿活力的雷克雅維克",
    "驚歎於冰島南部的異世界海岸",
    "深入探索古老神秘的冰島西部",
    "深入火山內部探索神奇地質",
    "揚帆出海追逐鯨魚",
    "享受Sky Lagoon的無邊地熱溫泉池",
    "環遊“冰島縮影”斯奈山半島",
    "享受一天的首都自由探索時光",
  ],
  attractions: [
        reykjavikSpot,
    thingvellirSpot,
    geysirSpot,skogafossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    kirkjufellSpot,
    hraunfossarSpot,],
  routeOverviewSubtitle: "黃金圈、南岸、冰河湖、西部與斯奈山半島夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送）" },
    { label: "第 2 天", detail: "黃金圈一日遊" },
    { label: "第 3 天", detail: "南岸瀑布 → 冰川 → 黑沙灘" },
    { label: "第 4 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘" },
    { label: "第 5 天", detail: "西部白銀圈" },
    { label: "第 6 天", detail: "斯奈山半島" },
    { label: "第 7 天", detail: "火山內部探秘 & 出海賞鯨" },
    { label: "第 8 天", detail: "雷克雅維克（自由活動日）" },
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
        lng: -20.5322,
        lat: 64.3271,
        label: "第 2 天",
        detail: "黃金圈一日遊",
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
        lng: -21.5,
        lat: 64.75,
        label: "第 5 天",
        detail: "西部白銀圈",
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
        detail: "火山內部探秘 & 出海賞鯨",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 8 天",
        detail: "雷克雅維克（自由活動日）",
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
        "抵達凱夫拉維克國際機場後，搭乘套餐安排的機場巴士前往雷克雅維克市區飯店辦理入住。\n\n若班機抵達時間較早，可在市區散步熟悉環境，或另行加購 Sky Lagoon 天空之境溫泉放鬆身心。晚間抵達者可在市區用餐後早些休息，為次日黃金圈品質小巴團儲備體力。",
      highlights: icelandGroupSummer9Day1Highlights,
      optionalActivities: icelandGroupSummer9Day1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈一日遊",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。史托克間歇泉（Strokkur）每隔數分鐘噴發一次，請在嚮導指定的安全區域內觀賞。行程另造訪凱瑞斯火山口（Kerið Crater）。今晚入住雷克雅維克。",
      highlights: icelandGroupSummer9Day2Highlights,
      optionalActivities: icelandGroupSummer9Day2OptionalActivities,
    },
    {
      day: 3,
      title: "南岸瀑布 & 冰川 & 黑沙灘",
      accommodation: "南岸",
      description:
        "今日品質小巴團沿南岸一號公路南下，開始為期兩日的南岸行程。夏季日照充沛，綠意與瀑布相映成趣。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；夏季可繞行至塞里雅蘭瀑布後方小徑，請注意路面濕滑。行程另安排索爾黑馬冰川（Sólheimajökull）健行，由專業嚮導帶領並提供安全裝備。繼續前往黑沙灘（Reynisfjara），遠眺雷尼斯岩（Reynisdrangar）矗立海中，途中經過維克（Vík）。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸。",
      highlights: icelandGroupSummer9Day3Highlights,
      optionalActivities: icelandGroupSummer9Day3OptionalActivities,
    },
    {
      day: 4,
      title: "傑古沙龍冰河湖 & 鑽石沙灘",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園。造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach），夏季浮冰在黑色沙灘上晶瑩閃耀。\n\n返程途中將途經埃爾德熔岩原（Eldhraun），並在維克（Vík）短暫停留。亦可另行加購冰河湖船遊。今晚返回雷克雅維克住宿。",
      highlights: icelandGroupSummer9Day4Highlights,
      optionalActivities: icelandGroupSummer9Day4OptionalActivities,
    },
    {
      day: 5,
      title: "西部白銀圈",
      accommodation: "西部",
      description:
        "今日品質小巴團前往冰島西部白銀圈，開始為期兩日的西部行程。造訪格蘭尼瀑布（Glanni）、德爾達圖赫菲溫泉（Deildartunguhver）——歐洲流速最強的溫泉之一，以及中世紀歷史名鎮雷克霍特（Reykholt）。\n\n繼續前往熔岩瀑布（Hraunfossar）與兒童瀑布（Barnafoss），熔岩瀑布從熔岩縫隙緩緩流出，景觀獨特。行程另安排 Víðgelmir 熔岩洞穴探險，由專業嚮導帶領穿戴安全裝備深入洞內。今晚入住西部。",
      highlights: icelandGroupSummer9Day5Highlights,
      optionalActivities: icelandGroupSummer9Day5OptionalActivities,
    },
    {
      day: 6,
      title: "斯奈山半島",
      accommodation: "雷克雅維克",
      description:
        "今日繼續品質小巴團環遊斯奈山半島（Snæfellsnes），被稱為「冰島縮影」。造訪海豹沙灘（Ytri-Tunga）、布迪爾黑教堂（Búðakirkja）、阿爾納斯塔皮（Arnarstapi）海岸與教會山（Kirkjufell）。夏季植被翠綠，半島風光層次豐富，亦可途經 Djúpalónssandur 黑沙灘。傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupSummer9Day6Highlights,
      optionalActivities: icelandGroupSummer9Day6OptionalActivities,
    },
    {
      day: 7,
      title: "火山 & 賞鯨",
      accommodation: "—",
      description:
        "今日安排兩項夏季特色體驗。上午搭乘開放式纜索電梯深入 Þríhnúkagígur 火山內部，在專業嚮導帶領下探索休眠火山的彩色岩壁與地質奇觀；火山內部探險僅於每年 5 月至 10 月開放。\n\n下午從雷克雅維克老港口出海賞鯨，專業船員將介紹當地海洋生態，夏季常可見到座頭鯨、小鬚鯨與海豚等海洋生物。若第一天未能前往 Sky Lagoon，亦可調整至今日。",
      highlights: icelandGroupSummer9Day7Highlights,
      optionalActivities: icelandGroupSummer9Day7OptionalActivities,
    },
    {
      day: 8,
      title: "雷克雅維克自由活動日",
      accommodation: "雷克雅維克",
      description:
        "今日為雷克雅維克自由活動日，您可依個人興趣安排行程。建議造訪哈爾格林姆斯大教堂、哈帕音樂廳、國家博物館或雷克雅維克藝術博物館，亦可另行加購騎冰島馬、冰川隧道探險、絲浮拉浮潛或內陸高地健行等夏季活動。\n\n今晚入住雷克雅維克。",
      highlights: icelandGroupSummer9Day8Highlights,
      optionalActivities: icelandGroupSummer9Day8OptionalActivities,
    },
    {
      day: 9,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依預訂時間搭乘機場巴士前往凱夫拉維克國際機場。\n\n若班機時間較晚，可在雷克雅維克市區多留片刻，或於機場免稅店選購伴手禮。",
      highlights: icelandGroupSummer9Day9Highlights,
      optionalActivities: icelandGroupSummer9Day9OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含各類景點、歷史、文化、自然等資訊描述）",
      "機場往返市區飯店大巴接送",
      "雷克雅維克市區6晚住宿",
      "每日住宿提供早餐",
      "Sky lagoon 往返接駁巴士",
      "Sky Lagoon 天空之境溫泉7步療法純享體驗門票",
      "黃金圈1日遊（英文嚮導）",
      "南岸2日遊（英文嚮導）",
      "冰川健行體驗及裝備（注：5-9月為冰川健行體驗，10月將替換為藍冰洞體驗）",
      "南岸1晚舒適級住宿",
      "西部與斯奈山半島2日遊（英文嚮導）",
      "Vidgelmir熔岩洞穴探險及安全設備",
      "西部1晚舒適級住宿",
      "火山內部探險體驗及安全裝備",
      "雷克雅維克賞鯨體驗",
      "台灣冰島雙時區服務",
      "車載WiFi",
      "VAT增值稅",
    ],
    excluded: [
      "午餐",
      "晚餐",
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
          question: "在冰島旅行一般需要多少天？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"來冰島旅遊並沒有固定的天數推薦，因為不同長度的旅行會給您帶來完全不同的體驗。\"]",
        },
        {
          question: "這個行程的行李額是多少？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"您能夠攜帶上車的行李箱最大尺寸為56 x 45 x 25 cm（大約為22寸行李箱大小）。如果您有其他大件行李，也可以聯繫飯店寄存。\"]",
        },
        {
          question: "帕芬假期旅行的旅行團套餐是什麼？是自營的嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"帕芬假期旅行的旅行團套餐是我們最熱門的產品。在旅行團套餐中，我們將為您提供路線合理、景點全面的觀光套餐，均包含機場往返首都接送、首都參團接送、冰島本地優選供應商的一日遊與多日遊（含司機兼嚮導）、住宿（含早餐）、獨家客製的中文行程手冊（含各類景點、歷史、文化、自然等資訊描述）、台灣冰島雙時區的中文客服等服務，並提供行程客製服務。\"]",
        },
        {
          question: "為什麼不是所有飯店都能到飯店門口接團？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"為了維持雷克雅維克市中心舒適安全的城市環境，冰島政府規定旅遊巴士不可隨意進入市中心區域，而必須在附近指定的接車地點接送旅客。\"]",
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
      tripKey: "iceland/group/summer/8",
      title: "8 天 7 夜冰島夏季冰與火跟團遊",
      tourCode: "SMD-083",
      durationLabel: "8 天／7 夜",
      description:
        "斯奈山半島、火山與冰河湖，適合時間較緊的夏季旅客。",
    },
    {
      tripKey: "iceland/group/summer/10",
      title: "10 天 9 夜冰島夏季跟團遊",
      tourCode: "SMD-103",
      durationLabel: "10 天／9 夜",
      description:
        "更完整的夏季跟團路線，涵蓋更多冰島精華景點。",
    },
  ],
};
