import type { TripPackage } from "./types";
import { fjadrargljufurSpot } from "./spots/fjadrargljufur";
import { kirkjubaejarklausturSpot } from "./spots/kirkjubaejarklaustur";
import { reykholtSpot } from "./spots/reykholt";
import { dyrholaeySpot } from "./spots/dyrholaey";
import { vikSpot } from "./spots/vik";
import { hraunfossarSpot } from "./spots/hraunfossar";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import { reykjavikSpot } from "./spots/reykjavik";
import {
  icelandSelfDriveSummer6Day1Highlights,
  icelandSelfDriveSummer6Day1OptionalActivities,
} from "./iceland-self-drive-summer-6-day1-cards";
import {
  icelandSelfDriveSummer6Day2Highlights,
  icelandSelfDriveSummer6Day2OptionalActivities,
  icelandSelfDriveSummer6Day3Highlights,
  icelandSelfDriveSummer6Day3OptionalActivities,
  icelandSelfDriveSummer6Day4Highlights,
  icelandSelfDriveSummer6Day4OptionalActivities,
  icelandSelfDriveSummer6Day5Highlights,
  icelandSelfDriveSummer6Day5OptionalActivities,
  icelandSelfDriveSummer6Day6Highlights,
  icelandSelfDriveSummer6Day6OptionalActivities,
} from "./iceland-self-drive-summer-6-days2-6-cards";

export const icelandSelfDriveSummer6: TripPackage = {
  id: "iceland-self-drive-summer-6",
  tripKey: "iceland/self-drive/summer/6",
  slug: "6-days-south-coast-and-golden-circle-summer-self-drive-tour",
  tourCode: "SSD-061",
  title: "6 天 5 夜冰島夏季精選自駕遊",
  subtitle: "南岸風光 & 傑古沙龍冰河湖",
  duration: { days: 6, nights: 5 },
  season: { label: "夏季", months: "4 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "自駕",
    tourCode: "SSD-061",
  },
  eyebrow: "冰島集合 · 自駕 · 夏季",
  backHref: "/trips/iceland/self-drive/summer",
  backLabel: "返回夏季自駕",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/_b6fee84594.jpg",
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
      description: "豐富冰島自駕服務經驗",
    },
    {
      id: "local",
      title: "本地優選供應商",
      description: "直連冰島合規車行與住宿",
    },
  ],
  intro: {
    summary:
      "這個 6 天 5 夜冰島夏季精選自駕遊涵蓋南岸精華、黃金圈與斯奈山半島，在充足日照下盡覽冰島西南部經典風光。行程充分顧及夏季路況與長日照，節奏適中、安排務實。",
    full: `這個 6 天 5 夜冰島夏季精選自駕遊涵蓋南岸精華、黃金圈與斯奈山半島，在充足日照下盡覽冰島西南部經典風光。套餐充分顧及夏季日照時數與路況，行程安排合理、節奏適中，讓您既能盡覽經典，也能細細感受夏日風貌。

行程涵蓋黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）；南岸則有黑沙灘（Reynisfjara）、傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）等代表性風景；第五日更將探索被譽為「冰島縮影」的斯奈山半島。夏季亦可另行加購冰川健行、冰河湖船遊或地熱溫泉體驗；盛夏時分，日照可延續至深夜，別忘了留意午夜太陽下的暮色風光。

完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，沿途景點、人文、歷史與自然皆有詳盡說明，讓您輕鬆盡享冰島夏季精華。不論是在藍湖溫泉中放鬆身心，或是在黑沙灘聆聽海浪聲，都將留下獨一無二的回憶。`,
  },
  gallery: [
    {
      id: "_b6fee84594",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/_b6fee84594.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    },
    {
      id: "Seljalandsfoss_9def270af",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Seljalandsfoss_9def270af0.avif",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    },
    {
      id: "DJI_0443_30e25d42d6",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/DJI_0443_30e25d42d6.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    }
  ],
  highlights: [
    "全程由您掌控方向盤並設定自己的旅行節奏",
    "沿著經典的環島1號公路啟程",
    "參觀著名的黃金圈三大景點",
    "探索冰島南岸瀑布、黑沙灘、飛機殘骸",
    "遨遊傑古沙龍冰河湖，欣賞鑽石沙灘的魅力",
    "遊覽西部秀美的熔岩瀑布與兒童瀑布",
    "探索小眾羽毛峽谷，拜訪最南端小鎮維克",
    "擁有充足的時間漫遊首都雷克雅維克",
  ],
  attractions: [
        reykjavikSpot,
    reynisfjaraSpot,seljalandsfossSpot,
    skogafossSpot,
    kirkjubaejarklausturSpot,dyrholaeySpot,
    fjadrargljufurSpot,vikSpot,hraunfossarSpot,
    reykholtSpot,],
  routeOverviewSubtitle: "南岸、黃金圈與斯奈山半島夏季自駕動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、取車、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "南岸瀑布群 → 黑沙灘 → 南岸住宿" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 返回首都途中" },
    { label: "第 4 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）" },
    { label: "第 5 天", detail: "斯奈山半島（教會山 → 布迪爾 → 漁村海岸）→ 雷克雅維克" },
    { label: "第 6 天", detail: "雷克雅維克市區（可選）→ 機場離境" }
  ],
  routeMap: {
    waypoints: [
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 1 天",
        detail: "雷克雅維克（入境、取車）",
      },
      {
        lng: -18.057,
        lat: 63.794,
        label: "第 2 天",
        detail: "南岸瀑布群 → 黑沙灘",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 3 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘",
      },
      {
        lng: -20.5322,
        lat: 64.3271,
        label: "第 4 天",
        detail: "黃金圈三大景點",
      },
      {
        lng: -23.783,
        lat: 64.926,
        label: "第 5 天",
        detail: "斯奈山半島 → 教會山",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 6 天",
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
        "今天是您入境冰島的第一天。抵達後請先至租車櫃檯取車，工作人員會協助檢查車輛，並說明冰島安全駕駛須知。之後即可前往雷克雅維克精選飯店入住安頓。\n\n若時間充裕，可造訪哈爾格林姆斯大教堂、哈帕音樂廳與彩虹街，或另行加購 Sky Lagoon 天空之境溫泉放鬆身心，為接下來的南岸自駕儲備體力。",
      highlights: icelandSelfDriveSummer6Day1Highlights,
      optionalActivities: icelandSelfDriveSummer6Day1OptionalActivities,
    },
    {
      day: 2,
      title: "南岸瀑布風光、黑沙灘",
      accommodation: "南岸",
      description:
        "今天請一早出發，沿冰島南岸一號公路南下。夏季南岸草木蒼翠，日照時間長，適合從容造訪沿途景點。\n\n首先來到塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；夏季塞里雅蘭瀑布後方小徑通常開放，但極其濕滑，請注意腳下。斯科加瀑布晴朗時常可見彩虹，亦可攀登步道眺望南岸海岸線。\n\n繼續南下造訪迪霍拉里（Dyrhólaey）自然保護區，夏季是觀賞海鸚的絕佳時機；隨後來到黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中。亦可另行加購索爾黑馬冰川健行。今晚入住南岸附近飯店。",
      highlights: icelandSelfDriveSummer6Day2Highlights,
      optionalActivities: icelandSelfDriveSummer6Day2OptionalActivities,
    },
    {
      day: 3,
      title: "傑古沙龍冰河湖、鑽石沙灘",
      accommodation: "南岸",
      description:
        "今日繼續往東南前進，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。浮冰在夏日陽光下呈現純白至藍綠的多種色調，擱淺於黑色沙灘上的冰塊晶瑩閃耀，黑白對比格外震撼。\n\n夏季冰河湖船遊開放時間最長，亦可另行加購船遊或斯卡夫塔山冰川健行。結束後折返西岸，入住南岸附近飯店。",
      highlights: icelandSelfDriveSummer6Day3Highlights,
      optionalActivities: icelandSelfDriveSummer6Day3OptionalActivities,
    },
    {
      day: 4,
      title: "黃金圈",
      accommodation: "西部",
      description:
        "今日造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。走近黃金瀑布時，您將被巨大的水流所震撼；夏季陽光下水珠有時散發金色光芒。於蓋錫爾間歇泉地帶，可目睹史托克間歇泉（Strokkur）每隔數分鐘噴發的熱水柱。\n\n於辛格維利爾國家公園漫步時，亦可另行加購絲浮拉裂谷（Silfra）浮潛體驗。沿線亦可順道造訪凱瑞斯火山口（Kerið）等景點。結束後前往西部住宿。",
      highlights: icelandSelfDriveSummer6Day4Highlights,
      optionalActivities: icelandSelfDriveSummer6Day4OptionalActivities,
    },
    {
      day: 5,
      title: "斯奈山半島",
      accommodation: "雷克雅維克",
      description:
        "今日探索斯奈山半島，這片被譽為「冰島縮影」的半島距離雷克雅維克約兩小時車程。您將以順時針方向環繞半島，造訪海豹沙灘（Ytri Tunga）、布迪爾黑教堂（Búðakirkja）、阿爾納斯塔皮（Arnarstapi）漁村海岸，以及 Djúpalónssandur 黑沙灘。\n\n半島最著名的地標教會山（Kirkjufell）在夏季翠綠植被的襯托下格外醒目。若時間充裕，亦可北上造訪斯蒂基斯霍爾米（Stykkishólmur）漁港小鎮。傍晚返回雷克雅維克住宿。",
      highlights: icelandSelfDriveSummer6Day5Highlights,
      optionalActivities: icelandSelfDriveSummer6Day5OptionalActivities,
    },
    {
      day: 6,
      title: "離境日",
      accommodation: "—",
      description:
        "歡樂時光總是過得特別快。今天是離境日，請預留時間前往機場辦理退稅與還車。若班機時間較晚，可在雷克雅維克市區多留片刻，最後感受這座北歐首都的獨特氛圍。期待您下次再來冰島！",
      highlights: icelandSelfDriveSummer6Day6Highlights,
      optionalActivities: icelandSelfDriveSummer6Day6OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含冰島駕駛實用資訊，以及各類景點、歷史、文化和自然等資訊描述）",
      "5整天租車（多種車型可選，包含CDW碰撞險）",
      "冰島行程期間5晚住宿",
      "每日住宿提供早餐",
      "台灣冰島雙時區服務",
      "VAT增值稅",
    ],
    excluded: [
      "午餐",
      "晚餐",
      "自選報名活動",
      "個人旅行保險",
      "車輛升級保險",
      "途中各種其他費用（包括油費、停車費、罰款等）",
      "里程稅",
    ],
  },
  faq: [
    {
      id: "rental",
      title: "租車相關",
      items: [
        {
          question: "在冰島租車有什麼要求？最低年齡是多少？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在帕芬假期旅行租車，SUV、越野車、商務旅行等車型的最低年齡限制為\"]},{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"23\"]",
        },
        {
          question: "在冰島租車需要什麼證件？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"通過帕芬假期旅行租車，在取車時需要駕駛員攜帶以下3種證件：\"]",
        },
        {
          question: "在冰島自駕租車保險主要包括哪幾種？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在冰島租車保險主要包括如下：\"]",
        }
      ],
    },
    {
      id: "insurance",
      title: "保險相關",
      items: [
        {
          question: "為什麼必須通過冰島本地車行購買保險？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這樣做的目的是避開第三方平台“全險”陷阱，保障您的權益。\"]",
        },
        {
          question: "為什麼說來冰島自駕建議您買全險或零賠付保險套餐？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在冰島自駕是探索壯麗景觀的最佳方式，但獨特的路況和氣候也潛藏風險。冰島地理環境、天氣路況特殊，遇到大風或者暴風雪、沙塵暴等極端不可抗天氣。為避免高價賠付，強烈建議您升級全險套餐（或稱零賠付保險），最大程度消除您的後顧之憂，讓旅程專注享受而非擔憂賠償。\"]",
        },
        {
          question: "冰島自駕過程中什麼情況即便您購買全險也不賠付？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島自駕租車雖說全險和0賠付保險基本涵蓋所有保險類型，但以下情況任何保險均不覆蓋，租車人需承擔全額維修及罰金（主要為主觀故意或重大過失造成的損失）\"]",
        }
      ],
    },
    {
      id: "trip",
      title: "行程與自駕",
      items: [
        {
          question: "冰島哪個季節最適合自駕遊？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"夏季是冰島最受歡迎的自駕遊季節。6月到8月的天氣最好，日照時間最長，陽光最為充足，這意味著您每天可以有更多的時間來遊玩，開車也會更加安心。另外，有些景區會在夏季開放更多的體驗遊玩項目，例如傑古沙龍冰河湖的船遊服務在夏季的開放時間最長，且在11月中旬至次年五月期間暫停運營。\"]",
        },
        {
          question: "去冰島自駕需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"無論您在哪個季節前往冰島，都可能會遇到各種天氣情況。有鑑於此，參加冰島自駕套餐時，您最好確保帶上能夠適應不同天氣所需的衣物：\"]",
        },
        {
          question: "我可以自由安排自駕的時間嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"完全可以！\"]",
        },
        {
          question: "冰島值得去嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這個問題可能不同的人有不同的答案。但是作為一個專注於冰島旅行的團隊，以及作為一群熱愛自然、熱愛美好的個體來說：\"]},{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"是的！冰島太值得了！\"]",
        },
        {
          question: "什麼是自選報名活動？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"帕芬假期旅行在每一天的行程下方增加了對應的自選報名活動，您可以根據自己的需求選擇是否自費參加這些額外的活動。\"]",
        },
        {
          question: "套餐單人間為什麼需要補差價？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為冰島的單人間房價要高於雙人間房價的一半，而預訂時的預設房價是按雙人間均攤至每人的價格來計算的。因此套餐內的單人間需要補交一筆差價。由於旅行團套餐系統設定在預訂環節僅可以選首都雷克雅維克地區的房間數量，如果需要將套餐中包含的旅行團增加單人間，那麼需要在初始頁面選中1人來查看全程單人間價格，具體細節可諮詢客服。\"]",
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
      tripKey: "iceland/self-drive/summer/4",
      title: "4 天 3 夜冰島南岸夏季自駕遊",
      tourCode: "SSD-042",
      durationLabel: "4 天／3 夜",
      description:
        "在有限的夏季日照裡，將南岸精華景點一網打盡，包含傑古沙龍冰河湖與黃金瀑布。",
    },
    {
      tripKey: "iceland/self-drive/summer/5",
      title: "5 天 4 夜冰島夏季精簡自駕套餐",
      tourCode: "SSD-051",
      durationLabel: "5 天／4 夜",
      description:
        "將冰島南部精華收入囊中，搭配戶外體驗與黃金圈經典路線。",
    },
    {
      tripKey: "iceland/self-drive/summer/7",
      title: "冰島西南岸 7 天 6 夜夏季自駕遊",
      tourCode: "SSD-072",
      durationLabel: "7 天／6 夜",
      description:
        "黃金圈、南岸與斯奈山半島盡收囊中，更從容探索冰島西南部。",
    },
    {
      tripKey: "iceland/self-drive/summer/8",
      title: "8 天 7 夜冰島夏季精選自駕",
      tourCode: "SSD-082",
      durationLabel: "8 天／7 夜",
      description:
        "沿一號公路環島，遊覽黃金圈、南岸、冰河湖、東部峽灣、米湖與西部白銀圈。",
    },
  ],
};
