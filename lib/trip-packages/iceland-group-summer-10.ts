import type { TripPackage } from "./types";
import { kirkjufellSpot } from "./spots/kirkjufell";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import { reykjavikSpot } from "./spots/reykjavik";
import {
  icelandGroupSummer10Day1Highlights,
  icelandGroupSummer10Day1OptionalActivities,
} from "./iceland-group-summer-10-day1-cards";
import {
  icelandGroupSummer10Day2Highlights,
  icelandGroupSummer10Day2OptionalActivities,
  icelandGroupSummer10Day3Highlights,
  icelandGroupSummer10Day3OptionalActivities,
  icelandGroupSummer10Day4Highlights,
  icelandGroupSummer10Day4OptionalActivities,
  icelandGroupSummer10Day5Highlights,
  icelandGroupSummer10Day5OptionalActivities,
  icelandGroupSummer10Day6Highlights,
  icelandGroupSummer10Day6OptionalActivities,
  icelandGroupSummer10Day7Highlights,
  icelandGroupSummer10Day7OptionalActivities,
  icelandGroupSummer10Day8Highlights,
  icelandGroupSummer10Day8OptionalActivities,
  icelandGroupSummer10Day9Highlights,
  icelandGroupSummer10Day9OptionalActivities,
  icelandGroupSummer10Day10Highlights,
  icelandGroupSummer10Day10OptionalActivities,
} from "./iceland-group-summer-10-days2-10-cards";

export const icelandGroupSummer10: TripPackage = {
  id: "iceland-group-summer-10",
  tripKey: "iceland/group/summer/10",
  slug: "iceland-summer-10-day-tour-package-south-coast-jokulsarlon-adventures",
  tourCode: "SMD-103",
  title: "10 天 9 夜冰島夏季深度跟團遊",
  subtitle: "瀑布 & 黑沙灘&冰川健行&潮汐溫泉",
  duration: { days: 10, nights: 9 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-103",
  },
  eyebrow: "冰島集合 · 跟團 · 夏季",
  backHref: "/trips/iceland/group/summer",
  backLabel: "返回夏季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/iceland_green_grass_and_waterfall_ef2a6e723a.jpg",
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
      "這個 10 天 9 夜冰島夏季深度跟團遊，由品質小巴團與專業嚮導帶您走訪黃金圈、南岸、冰河湖、西部白銀圈與斯奈山半島，並安排觀鯨、火山內部探險與絲浮拉浮潛。套餐含機場接送，夏季日照充沛，行程節奏適中、安排務實。",
    full: `這個 10 天 9 夜冰島夏季深度跟團遊，由品質小巴團與專業嚮導帶您走訪黃金圈、南岸、冰河湖、西部白銀圈與斯奈山半島，並安排觀鯨、火山內部探險與絲浮拉浮潛。套餐含機場接送，夏季日照充沛，行程安排合理、節奏適中。

您將造訪黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）；沿南岸探索塞里雅蘭瀑布、斯科加瀑布，參加索爾黑馬冰川健行，並在黑沙灘（Reynisfjara）遠眺雷尼斯岩（Reynisdrangar），途中經過維克（Vík）。繼續造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。

西部白銀圈將遊覽熔岩瀑布（Hraunfossar）、德爾達圖赫菲溫泉（Deildartunguhver）與 Víðgelmir 熔岩洞穴；斯奈山半島則造訪教會山（Kirkjufell）與布迪爾黑教堂。行程另安排出海觀鯨、火山內部探險與絲浮拉浮潛，並留有一日雷克雅維克自由行，可另行加購溫泉體驗、內陸高地健行或騎冰島馬等夏季活動。完成預訂後，您將收到行程策劃師為您客製的中文行程手冊。`,
  },
  gallery: [
    {
      id: "iceland_green_grass_and_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/iceland_green_grass_and_waterfall_ef2a6e723a.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "kirkjufell_and_waterfall",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/kirkjufell_and_waterfall_in_summer_3ec539d218.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "Breaching_humpback_whale",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Breaching_humpback_whale_with_Husavik_in_the_background_classic_a77f526146.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "633452c082aa4_04667db606",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/633452c082aa4_04667db606.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "Icelandic_sunset_with_th",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Icelandic_sunset_with_the_moon_089106cca5.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "skogafoss_in_cloudy_day_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/skogafoss_in_cloudy_day_6913c0a8d0.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "6336d26925c86_b4796750ca",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/6336d26925c86_b4796750ca.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "Hvammsvik2_1e5040215f",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Hvammsvik2_1e5040215f.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    }
  ],
  highlights: [
    "體驗溫泉與騎馬行程",
    "開啟美妙南岸瀑布之旅",
    "徜徉於千年傑古沙龍冰河湖",
    "踏上斯奈山半島的神秘土地",
    "深入世界上唯一可以進入的火山內部",
    "跟隨專業的冰島船長追尋座頭鯨",
    "深度探索冰島西南部特色景觀",
    "造訪黃金圈三大經典景點",
  ],
  attractions: [
        reykjavikSpot,
    seljalandsfossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    diamondBeachSpot,
    kirkjufellSpot,],
  routeOverviewSubtitle: "南岸、冰河湖、西部、斯奈山半島與絲浮拉浮潛體驗的夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（抵達、機場接送）" },
    { label: "第 2 天", detail: "黃金圈一日遊" },
    { label: "第 3 天", detail: "南岸瀑布 → 冰川 → 黑沙灘" },
    { label: "第 4 天", detail: "浪漫冰河湖 → 鑽石沙灘" },
    { label: "第 5 天", detail: "西部白銀圈" },
    { label: "第 6 天", detail: "斯奈山半島" },
    { label: "第 7 天", detail: "夏日探險：觀鯨 & 火山" },
    { label: "第 8 天", detail: "絲浮拉浮潛 & 溫泉" },
    { label: "第 9 天", detail: "雷克雅維克（自由活動日）" },
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
        detail: "夏日探險：觀鯨 & 火山",
      },
      {
        lng: -21.9426,
        lat: 64.255,
        label: "第 8 天",
        detail: "絲浮拉浮潛 & 溫泉",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 9 天",
        detail: "雷克雅維克（自由活動日）",
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
      title: "抵達冰島（含接機）",
      accommodation: "雷克雅維克",
      description:
        "抵達凱夫拉維克國際機場後，搭乘套餐安排的機場巴士前往雷克雅維克市區飯店辦理入住。從機場至市區約需 1 至 1.5 小時。\n\n若班機抵達時間較早，可在市區散步熟悉環境，或另行加購 Sky Lagoon 天空之境溫泉放鬆身心。晚間抵達者可在市區用餐後早些休息，為次日黃金圈品質小巴團儲備體力。",
      highlights: icelandGroupSummer10Day1Highlights,
      optionalActivities: icelandGroupSummer10Day1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈一日遊",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。史托克間歇泉（Strokkur）每隔數分鐘噴發一次，請在嚮導指定的安全區域內觀賞。行程另造訪凱瑞斯火山口（Kerið Crater），環湖步道可近距離欣賞火山口湖與彩色岩壁。今晚入住雷克雅維克。",
      highlights: icelandGroupSummer10Day2Highlights,
      optionalActivities: icelandGroupSummer10Day2OptionalActivities,
    },
    {
      day: 3,
      title: "南岸瀑布 & 冰川 & 黑沙灘",
      accommodation: "南岸",
      description:
        "今日品質小巴團沿南岸一號公路南下，開始為期兩日的南岸行程。夏季日照充沛，綠意與瀑布相映成趣。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；夏季可繞行至塞里雅蘭瀑布後方小徑，請注意路面濕滑。行程另安排索爾黑馬冰川（Sólheimajökull）健行，由專業嚮導帶領並提供安全裝備。繼續前往黑沙灘（Reynisfjara），遠眺雷尼斯岩（Reynisdrangar）矗立海中，途中經過維克（Vík）。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸。",
      highlights: icelandGroupSummer10Day3Highlights,
      optionalActivities: icelandGroupSummer10Day3OptionalActivities,
    },
    {
      day: 4,
      title: "浪漫冰河湖 & 鑽石沙灘",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園。造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach），夏季浮冰在黑色沙灘上晶瑩閃耀。\n\n返程途中將途經埃爾德熔岩原（Eldhraun），並在維克（Vík）短暫停留。亦可另行加購冰河湖船遊。今晚返回雷克雅維克住宿。",
      highlights: icelandGroupSummer10Day4Highlights,
      optionalActivities: icelandGroupSummer10Day4OptionalActivities,
    },
    {
      day: 5,
      title: "西部白銀圈",
      accommodation: "西部",
      description:
        "今日品質小巴團前往冰島西部白銀圈，開始為期兩日的西部行程。造訪格蘭尼瀑布（Glanni）、德爾達圖赫菲溫泉（Deildartunguhver）——歐洲流速最強的溫泉之一，以及中世紀歷史名鎮雷克霍特（Reykholt）。\n\n繼續前往熔岩瀑布（Hraunfossar）與兒童瀑布（Barnafoss），熔岩瀑布從熔岩縫隙緩緩流出，景觀獨特。行程另安排 Víðgelmir 熔岩洞穴探險，由專業嚮導帶領穿戴安全裝備深入洞內。今晚入住西部。",
      highlights: icelandGroupSummer10Day5Highlights,
      optionalActivities: icelandGroupSummer10Day5OptionalActivities,
    },
    {
      day: 6,
      title: "斯奈山半島",
      accommodation: "雷克雅維克",
      description:
        "今日繼續品質小巴團環遊斯奈山半島（Snæfellsnes），被稱為「冰島縮影」。造訪教會山（Kirkjufell）與教會山瀑布（Kirkjufellsfoss）、Djúpalónssandur 黑沙灘、阿爾納斯塔皮（Arnarstapi）海岸、布迪爾黑教堂（Búðakirkja）與海豹沙灘（Ytri-Tunga）。夏季植被翠綠，半島風光層次豐富。傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupSummer10Day6Highlights,
      optionalActivities: icelandGroupSummer10Day6OptionalActivities,
    },
    {
      day: 7,
      title: "夏日探險：觀鯨&火山",
      accommodation: "雷克雅維克",
      description:
        "今日安排兩項夏季特色體驗。上午從雷克雅維克老港口出海觀鯨，專業船員將介紹當地海洋生態，夏季常可見到座頭鯨、小鬚鯨與海豚等海洋生物。\n\n下午搭乘開放式纜索電梯深入 Þríhnúkagígur 火山內部，在專業嚮導帶領下探索休眠火山的彩色岩壁與地質奇觀；火山內部探險僅於每年 5 月至 10 月開放。若第一天未能前往 Sky Lagoon，亦可調整至今日。今晚入住雷克雅維克。",
      highlights: icelandGroupSummer10Day7Highlights,
      optionalActivities: icelandGroupSummer10Day7OptionalActivities,
    },
    {
      day: 8,
      title: "絲浮拉浮潛與溫泉體驗",
      accommodation: "雷克雅維克",
      description:
        "今日安排兩項夏季特色體驗。上午前往辛格維利爾國家公園內的絲浮拉大裂縫（Silfra）進行浮潛，在北美與歐亞板塊之間的清澈冰水中，體驗能見度極高的水下世界；水溫約 2 至 4 攝氏度，將由專業嚮導提供防寒裝備。\n\n下午前往 Hvammsvik 溫泉，坐落於鯨魚峽灣（Hvalfjörður）畔，可眺望山脈與海灣景致，在地熱溫泉中放鬆身心。今晚入住雷克雅維克。",
      highlights: icelandGroupSummer10Day8Highlights,
      optionalActivities: icelandGroupSummer10Day8OptionalActivities,
    },
    {
      day: 9,
      title: "雷克雅維克自由活動日",
      accommodation: "雷克雅維克",
      description:
        "今日為雷克雅維克自由活動日，您可依個人興趣安排行程。建議造訪哈爾格林姆斯大教堂、哈帕音樂廳或市區博物館，亦可另行加購騎冰島馬、冰川隧道探險、內陸高地健行或海釣等夏季活動。\n\n今晚入住雷克雅維克。",
      highlights: icelandGroupSummer10Day9Highlights,
      optionalActivities: icelandGroupSummer10Day9OptionalActivities,
    },
    {
      day: 10,
      title: "離境日（含送機）",
      accommodation: "—",
      description:
        "今天是離境日。請依預訂時間搭乘機場送機巴士前往凱夫拉維克國際機場。\n\n若班機時間較晚，可在雷克雅維克市區多留片刻，造訪哈爾格林姆斯大教堂、托寧湖（Tjörnin）等景點，或於機場免稅店選購伴手禮並辦理退稅。",
      highlights: icelandGroupSummer10Day10Highlights,
      optionalActivities: icelandGroupSummer10Day10OptionalActivities,
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
          question: "這個行程的行李額是多少？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"您能夠攜帶上車的行李箱最大尺寸為56 x 45 x 25 cm（大約為22寸行李箱大小）。如果您有其他大件行李，也可以聯繫飯店寄存。\"]",
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
          question: "為什麼我只能選擇首都雷克雅維克地區的飯店等級？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為首都雷克雅維克的飯店選擇更多，且行程相對更靈活。而套餐內冰島其他地區的行程中，參團的顧客都是統一行動的，有固定的行程路線和固定的飯店。因此為保障行程的統一性與合理性，並不浪費顧客的遊覽時間，其他地區暫時無法選擇飯店等級，請您體諒。\"]",
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
          question: "在冰島需要給嚮導付小費嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在冰島，付小費不是一件必需的事。但如果您真心認為您的嚮導給予了您很大幫助和關照，也可以付一些小費以示感謝。\"]",
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
      tripKey: "iceland/group/summer/9",
      title: "9 天 8 夜冰島夏季深度體驗跟團遊",
      tourCode: "SMD-093",
      durationLabel: "9 天／8 夜",
      description:
        "觀鯨、黑沙灘與西部小眾景觀，適合時間較緊的夏季旅客。",
    },
    {
      tripKey: "iceland/group/summer/11",
      title: "11 天 10 夜冰島夏季跟團遊",
      tourCode: "SMD-113",
      durationLabel: "11 天／10 夜",
      description:
        "更完整的夏季跟團路線，涵蓋更多冰島精華景點。",
    },
  ],
};
