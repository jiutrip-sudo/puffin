import type { TripPackage } from "./types";
import { goldenCircleSpot } from "./spots/golden-circle";
import { budakirkjaSpot } from "./spots/budakirkja";
import { kirkjufellSpot } from "./spots/kirkjufell";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import {
  icelandGroupSummer8Day1Highlights,
  icelandGroupSummer8Day1OptionalActivities,
} from "./iceland-group-summer-8-day1-cards";
import {
  icelandGroupSummer8Day2Highlights,
  icelandGroupSummer8Day2OptionalActivities,
  icelandGroupSummer8Day3Highlights,
  icelandGroupSummer8Day3OptionalActivities,
  icelandGroupSummer8Day4Highlights,
  icelandGroupSummer8Day4OptionalActivities,
  icelandGroupSummer8Day5Highlights,
  icelandGroupSummer8Day5OptionalActivities,
  icelandGroupSummer8Day6Highlights,
  icelandGroupSummer8Day6OptionalActivities,
  icelandGroupSummer8Day7Highlights,
  icelandGroupSummer8Day7OptionalActivities,
  icelandGroupSummer8Day8Highlights,
  icelandGroupSummer8Day8OptionalActivities,
} from "./iceland-group-summer-8-days2-8-cards";

export const icelandGroupSummer8: TripPackage = {
  id: "iceland-group-summer-8",
  tripKey: "iceland/group/summer/8",
  slug: "iceland-summer-8-day-fire-and-ice-tour-package-snaefellsnes-volcano-jokulsarlon",
  tourCode: "SMD-083",
  title: "8 天 7 夜冰島夏季冰與火跟團遊",
  subtitle: "斯奈山半島&火山&冰河湖",
  duration: { days: 8, nights: 7 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-083",
  },
  eyebrow: "冰島集合 · 跟團 · 夏季",
  backHref: "/trips/iceland/group/summer",
  backLabel: "返回夏季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/adventurer_in_iceland_2ebebe9ba0.jpg",
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
      "這個 8 天 7 夜冰島夏季跟團遊，由品質小巴團與專業嚮導帶您走訪黃金圈、南岸、冰河湖與斯奈山半島，並安排火山內部探險與出海觀鯨。套餐含機場接送，以雷克雅維克為中心，夏季日照充沛，行程節奏適中、安排務實。",
    full: `這個 8 天 7 夜冰島夏季跟團遊，由品質小巴團與專業嚮導帶您走訪黃金圈、南岸、冰河湖與斯奈山半島，並安排火山內部探險與出海觀鯨。套餐含機場接送，以雷克雅維克為中心，夏季日照充沛，行程安排合理、節奏適中。

您將造訪黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss），以及凱瑞斯火山口（Kerið Crater）；沿南岸探索塞里雅蘭瀑布、斯科加瀑布，參加索爾黑馬冰川健行，並在黑沙灘（Reynisfjara）遠眺雷尼斯岩（Reynisdrangar），途中經過維克（Vík）。繼續造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）；斯奈山半島則遊覽教會山（Kirkjufell）與布迪爾黑教堂。

行程另安排一日火山內部探險與出海觀鯨，並留有一日自由活動，可另行加購內陸高地健行等夏季限定體驗。完成預訂後，您將收到行程策劃師為您客製的中文行程手冊。`,
  },
  gallery: [
    {
      id: "adventurer_in_iceland_2e",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/adventurer_in_iceland_2ebebe9ba0.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "jokulsarlon_icebergs_and",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jokulsarlon_icebergs_and_zodiac_boats_a5aba51c43.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "seljalandsfoss_with_suns",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/seljalandsfoss_with_sunshine_49cd84bda9.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "todd_cravens_Qn_Brj_Y_n_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/todd_cravens_Qn_Brj_Y_n_F_Us_unsplash_3ab688c433.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    }
  ],
  highlights: [
    "徜徉於迤邐的冰島南岸風光",
    "漫步黑白相映的絕美冰島黑沙灘",
    "流連於傑古沙龍冰河湖的古老冰山",
    "沐浴精緻舒適的冰島溫泉",
    "探索神秘而多樣化的斯奈山半島",
    "深入探索火山內部景觀",
    "揚帆出海追尋座頭鯨身影",
    "漫步迷你首都感受北歐風情",
  ],
  attractions: [
        goldenCircleSpot,seljalandsfossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    kirkjufellSpot,
    budakirkjaSpot,],
  routeOverviewSubtitle: "黃金圈、南岸、冰河湖、斯奈山半島與火山體驗夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送）" },
    { label: "第 2 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布 → 火山口）" },
    { label: "第 3 天", detail: "南岸瀑布 → 冰川健行 → 黑沙灘" },
    { label: "第 4 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘" },
    { label: "第 5 天", detail: "斯奈山半島（教會山 → 布迪爾黑教堂）" },
    { label: "第 6 天", detail: "火山內部探秘 & 出海觀鯨" },
    { label: "第 7 天", detail: "雷克雅維克（自由活動日）" },
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
        lng: -23.8,
        lat: 64.8,
        label: "第 5 天",
        detail: "斯奈山半島（教會山 → 布迪爾黑教堂）",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 6 天",
        detail: "火山內部探秘 & 出海觀鯨",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 7 天",
        detail: "雷克雅維克（自由活動日）",
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
        "抵達凱夫拉維克國際機場後，搭乘套餐安排的機場巴士前往雷克雅維克市區飯店辦理入住。\n\n若班機抵達時間較早，可在市區散步熟悉環境，或另行加購 Sky Lagoon 天空之境溫泉放鬆身心。晚間抵達者可在市區用餐後早些休息，為次日黃金圈品質小巴團儲備體力。",
      highlights: icelandGroupSummer8Day1Highlights,
      optionalActivities: icelandGroupSummer8Day1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈3+1：國家公園 & 蓋錫爾間歇泉地帶 & 黃金瀑布 & 火山口",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。史托克間歇泉（Strokkur）每隔數分鐘噴發一次，請在嚮導指定的安全區域內觀賞。行程另造訪凱瑞斯火山口（Kerið Crater），環湖步道可近距離欣賞火山口湖與彩色岩壁。今晚入住雷克雅維克。",
      highlights: icelandGroupSummer8Day2Highlights,
      optionalActivities: icelandGroupSummer8Day2OptionalActivities,
    },
    {
      day: 3,
      title: "南岸風光：瀑布 & 冰川健行 & 黑沙灘",
      accommodation: "南岸",
      description:
        "今日品質小巴團沿南岸一號公路南下。夏季日照充沛，綠意與瀑布相映成趣。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；夏季可繞行至塞里雅蘭瀑布後方小徑，請注意路面濕滑。行程另安排索爾黑馬冰川（Sólheimajökull）健行，由專業嚮導帶領並提供安全裝備。繼續前往黑沙灘（Reynisfjara），遠眺雷尼斯岩（Reynisdrangar）矗立海中，途中經過維克（Vík）。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸。",
      highlights: icelandGroupSummer8Day3Highlights,
      optionalActivities: icelandGroupSummer8Day3OptionalActivities,
    },
    {
      day: 4,
      title: "冰河湖之旅：傑古沙龍冰河湖 & 鑽石沙灘",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園。造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach），夏季浮冰在黑色沙灘上晶瑩閃耀，黑白對比格外清晰。\n\n返程途中將途經羽毛峽谷（Fjaðrárgljúfur）與埃爾德熔岩原（Eldhraun），並在維克（Vík）短暫停留。亦可另行加購冰河湖船遊，近距離穿梭浮冰之間。今晚返回雷克雅維克住宿。",
      highlights: icelandGroupSummer8Day4Highlights,
      optionalActivities: icelandGroupSummer8Day4OptionalActivities,
    },
    {
      day: 5,
      title: "斯奈山半島：教會山 & 黑教堂",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團前往斯奈山半島（Snæfellsnes），被稱為「冰島縮影」。造訪教會山（Kirkjufell）與教會山瀑布（Kirkjufellsfoss）、布迪爾黑教堂（Búðakirkja），以及阿爾納斯塔皮（Arnarstapi）海岸與海豹沙灘（Ytri-Tunga）。夏季植被翠綠，半島風光層次豐富。傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupSummer8Day5Highlights,
      optionalActivities: icelandGroupSummer8Day5OptionalActivities,
    },
    {
      day: 6,
      title: "活動日1：火山內部 & 出海觀鯨",
      accommodation: "雷克雅維克",
      description:
        "今日安排兩項夏季特色體驗。上午搭乘開放式纜索電梯深入 Þríhnúkagígur 火山內部，在專業嚮導帶領下探索休眠火山的彩色岩壁與地質奇觀；火山內部探險僅於每年 5 月至 10 月開放。\n\n下午從雷克雅維克老港口出海觀鯨，專業船員將介紹當地海洋生態，夏季常可見到座頭鯨、小鬚鯨與海豚等海洋生物。若第一天未能前往 Sky Lagoon，亦可調整至今日。今晚入住雷克雅維克。",
      highlights: icelandGroupSummer8Day6Highlights,
      optionalActivities: icelandGroupSummer8Day6OptionalActivities,
    },
    {
      day: 7,
      title: "活動日2：自由活動日",
      accommodation: "雷克雅維克",
      description:
        "今日為自由活動日，您可依個人興趣安排行程。建議造訪哈爾格林姆斯大教堂、哈帕音樂廳或市區博物館，亦可另行加購蘭德曼納勞卡（Landmannalaugar）內陸高地健行——此路線僅於夏季 6 月至 9 月開放，彩色山脈與溫泉地帶是冰島高地最具代表性的夏季風光。\n\n其他可加購項目包括騎冰島馬、冰川隧道探險或溫泉體驗等。今晚入住雷克雅維克。",
      highlights: icelandGroupSummer8Day7Highlights,
      optionalActivities: icelandGroupSummer8Day7OptionalActivities,
    },
    {
      day: 8,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依預訂時間搭乘機場巴士前往凱夫拉維克國際機場。\n\n若班機時間較晚，可在雷克雅維克市區多留片刻，造訪哈爾格林姆斯大教堂、托寧湖（Tjörnin）等景點，或於機場免稅店選購伴手禮。",
      highlights: icelandGroupSummer8Day8Highlights,
      optionalActivities: icelandGroupSummer8Day8OptionalActivities,
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
      tripKey: "iceland/group/summer/7",
      title: "7 天 6 夜冰島夏季經典跟團遊",
      tourCode: "SMD-071",
      durationLabel: "7 天／6 夜",
      description:
        "黃金圈、南岸、斯奈山半島與自由活動日，適合時間較緊的夏季旅客。",
    },
    {
      tripKey: "iceland/group/summer/9",
      title: "9 天 8 夜冰島夏季跟團遊",
      tourCode: "SMD-093",
      durationLabel: "9 天／8 夜",
      description:
        "更完整的夏季跟團路線，涵蓋更多冰島精華景點。",
    },
  ],
};
