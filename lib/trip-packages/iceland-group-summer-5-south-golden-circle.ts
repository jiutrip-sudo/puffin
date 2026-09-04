import type { TripPackage } from "./types";
import { gullfossSpot } from "./spots/gullfoss";
import { geysirSpot } from "./spots/geysir";
import { thingvellirSpot } from "./spots/thingvellir";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import {
  icelandGroupSummer5GoldenCircleDay1Highlights,
  icelandGroupSummer5GoldenCircleDay1OptionalActivities,
} from "./iceland-group-summer-5-south-golden-circle-day1-cards";
import {
  icelandGroupSummer5GoldenCircleDay2Highlights,
  icelandGroupSummer5GoldenCircleDay2OptionalActivities,
  icelandGroupSummer5GoldenCircleDay3Highlights,
  icelandGroupSummer5GoldenCircleDay3OptionalActivities,
  icelandGroupSummer5GoldenCircleDay4Highlights,
  icelandGroupSummer5GoldenCircleDay4OptionalActivities,
  icelandGroupSummer5GoldenCircleDay5Highlights,
  icelandGroupSummer5GoldenCircleDay5OptionalActivities,
} from "./iceland-group-summer-5-south-golden-circle-days2-5-cards";

export const icelandGroupSummer5SouthGoldenCircle: TripPackage = {
  id: "iceland-group-summer-5-south-golden-circle",
  tripKey: "iceland/group/summer/5/south-golden-circle",
  slug: "iceland-summer-5-day-tour-package-golden-circle-south-coast-jokulsarlon",
  tourCode: "SMD-053",
  title: "5 天 4 夜冰島夏季精華跟團遊",
  subtitle: "黃金圈&南岸風光&傑古沙龍冰河湖",
  duration: { days: 5, nights: 4 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-053",
  },
  eyebrow: "冰島集合 · 跟團 · 夏季",
  backHref: "/trips/iceland/group/summer",
  backLabel: "返回夏季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/gyesir_eruption_group_watching_sightseeing_iceland_summer_35a76fb314.png",
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
      "這個 5 天 4 夜夏季跟團套餐涵蓋黃金圈與南岸兩日，由品質小巴團與專業嚮導帶領，含冰川健行與 Sky Lagoon 體驗。行程善用夏季長日照，節奏適中、安排務實。",
    full: `這個 5 天 4 夜夏季跟團套餐涵蓋黃金圈與南岸兩日，由品質小巴團與專業嚮導帶領。套餐含凱夫拉維克機場至市區大巴接送與 Sky Lagoon 溫泉體驗，充分利用夏季長日照與午夜陽光，行程安排務實。

第二日造訪黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss），並前往凱瑞斯火山口（Kerid Crater）。南岸動線串連塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、黑沙灘（Reynisfjara）、傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）；冰川健行由嚮導陪同並提供安全裝備（10 月前為冰川健行，之後改為藍冰洞體驗）。`,
  },
  gallery: [
    {
      id: "gyesir_eruption_group_wa",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/gyesir_eruption_group_watching_sightseeing_iceland_summer_35a76fb314.png",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "Seljalandsfoss_5864fea1e",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Seljalandsfoss_5864fea1ea.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "View_over_Reynisdrangar_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/View_over_Reynisdrangar_97bb3d41fd.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "laila_gebhard_Rt4p0_K_Mo",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/laila_gebhard_Rt4p0_K_Mo86k_unsplash_c8a960fa02.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    }
  ],
  highlights: [
    "遊覽冰島黃金圈的三大著名景點",
    "探索黃金圈小眾絕美火山口",
    "一網打盡南岸瀑布與海岸景觀",
    "置身於異星球般的黑沙灘上",
    "感受千年冰山的震撼與壯美",
    "深度體驗冰島地熱溫泉",
  ],
  attractions: [
        gullfossSpot,geysirSpot,thingvellirSpot,seljalandsfossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,],
  routeOverviewSubtitle: "南岸與黃金圈夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、Sky Lagoon 溫泉）" },
    { label: "第 2 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布 → 凱瑞斯火山口）" },
    { label: "第 3 天", detail: "塞里雅蘭／斯科加瀑布 → 冰川健行 → 黑沙灘" },
    { label: "第 4 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 維克" },
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
        lng: -21.1274,
        lat: 64.255,
        label: "第 2 天",
        detail: "黃金圈經典路線",
      },
      {
        lng: -19.511,
        lat: 63.615,
        label: "第 3 天",
        detail: "南岸瀑布 → 冰川健行 → 黑沙灘",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 4 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 維克",
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
      title: "入境日：雷克雅維克 & Sky Lagoon溫泉",
      accommodation: "雷克雅維克",
      description:
        "抵達凱夫拉維克機場後，搭乘套餐安排的機場大巴前往雷克雅維克市區飯店辦理入住。\n\n入境日安排 Sky Lagoon 天空之境溫泉體驗，在無邊泳池中眺望北大西洋海景，體驗冰島地熱溫泉文化。夏季長日照下，晚間仍有機會感受午夜陽光。建議早些休息，為次日品質小巴團儲備體力。",
      highlights: icelandGroupSummer5GoldenCircleDay1Highlights,
      optionalActivities: icelandGroupSummer5GoldenCircleDay1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈3+1：辛格維利爾國家公園 & 蓋錫爾間歇泉地帶 & 黃金瀑布 & 凱瑞斯火山口",
      accommodation: "南岸",
      description:
        "今日搭乘品質小巴團造訪黃金圈。辛格維利爾國家公園（Þingvellir National Park）位於歐亞與北美板塊裂谷邊緣，也是冰島議會昔日開會之地。接著前往蓋錫爾間歇泉地帶，活躍的史托克間歇泉（Strokkur）每數分鐘噴發一次，水柱高達約 30 公尺。黃金瀑布（Gullfoss）雙層水幕在陽光下常形成彩虹。\n\n行程另安排凱瑞斯火山口（Kerid Crater），這座三千年前形成的休眠火山口湖水色彩鮮明。夏季長日照讓各景點色彩飽和。今晚入住南岸附近飯店。",
      highlights: icelandGroupSummer5GoldenCircleDay2Highlights,
      optionalActivities: icelandGroupSummer5GoldenCircleDay2OptionalActivities,
    },
    {
      day: 3,
      title: "塞里雅蘭瀑布 & 斯科加瀑布 & 索爾黑馬冰川 & 黑沙灘",
      accommodation: "南岸",
      description:
        "今日搭乘品質小巴團沿南岸一號公路南下。夏季南岸瀑布水量充沛、草木蔥鬱。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）、秘密瀑布（Gljúfrabúi）與斯科加瀑布（Skógafoss）；夏季可沿小徑繞至塞里雅蘭瀑布後方，斯科加瀑布晴朗時常可見彩虹。接著在專業嚮導帶領下進行索爾黑馬冰川（Sólheimajökull）健行，穿戴安全裝備近距離感受千年冰川地貌（10 月前為冰川健行，之後改為藍冰洞體驗）。最後前往黑沙灘（Reynisfjara），遠處可見雷尼斯岩（Reynisdrangar）；夏季加達爾懸崖常有海鳥棲息。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸附近飯店。",
      highlights: icelandGroupSummer5GoldenCircleDay3Highlights,
      optionalActivities: icelandGroupSummer5GoldenCircleDay3OptionalActivities,
    },
    {
      day: 4,
      title: "傑古沙龍冰河湖 & 鑽石沙灘 & 維克",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園。傑古沙龍冰河湖（Jökulsárlón）上漂浮著形態各異的冰山；對岸的鑽石沙灘（Diamond Beach）上，浮冰在黑色沙灘上晶瑩閃耀。夏季長日照讓冰河湖色彩格外飽和。\n\n回程途中經過覆蓋綠色苔蘚的埃爾德熔岩原（Eldhraun），並途經維克（Vík）。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupSummer5GoldenCircleDay4Highlights,
      optionalActivities: icelandGroupSummer5GoldenCircleDay4OptionalActivities,
    },
    {
      day: 5,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續。\n\n若仍有餘裕，可在市區漫步：托寧湖（Tjörnin）、哈爾格林姆斯教堂（Hallgrímskirkja）或哈帕音樂廳（Harpa）都是不錯的選擇。",
      highlights: icelandGroupSummer5GoldenCircleDay5Highlights,
      optionalActivities: icelandGroupSummer5GoldenCircleDay5OptionalActivities,
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
        },
        {
          question: "我應該提前多久預訂冰島行程？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"由於冰島的旅遊業資源有限，為了保障您的出行品質，我們建議您\"]},{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"至少在出行前幾週開始在我們的官網預訂行程\"]",
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
      tripKey: "iceland/group/summer/5/south-snaefellsnes",
      title: "5 天 4 夜冰島夏季夢幻跟團遊",
      tourCode: "SMD-051",
      durationLabel: "5 天／4 夜",
      description:
        "斯奈山半島與南岸精華，適合想兼顧西線風光的旅客。",
    },
    {
      tripKey: "iceland/group/summer/6/south-snaefellsnes-golden-circle",
      title: "6 天 5 夜冰島夏季跟團遊",
      tourCode: "SMD-061",
      durationLabel: "6 天／5 夜",
      description:
        "黃金圈、南岸與斯奈山半島一次走遍的樂享路線。",
    },
  ],
};
