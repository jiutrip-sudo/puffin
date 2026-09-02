export type GuideFeaturedTrip = {
  href: string;
  title: string;
  blurb: string;
};

export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  publishedAt: string;
  featuredTrip: GuideFeaturedTrip;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
};

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    slug: "iceland-winter-self-drive-days",
    title: "冰島冬季自駕適合幾天？南岸 4 天行程怎麼排",
    description:
      "第一次冬季自駕冰島，天數怎麼抓？從雷克雅維克到南岸精華，4 天 3 夜是否夠用，一次說清楚。",
    category: "冬季自駕",
    coverImage:
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1200&q=80",
    publishedAt: "2026-03-01",
    featuredTrip: {
      href: "/trips/iceland/self-drive/winter/4",
      title: "4 天 3 夜冰島南岸冬季自駕遊",
      blurb: "濃縮南岸瀑布、黑沙灘與冰河湖，適合第一次冬季自駕的入門選擇。",
    },
    sections: [
      {
        heading: "冬季南岸自駕，4 天夠嗎？",
        paragraphs: [
          "多數旅客第一次冬季自駕冰島，會集中在南岸：黑沙灘、瀑布群、冰川與冰河湖。若從雷克雅維克出發，4 天 3 夜可涵蓋南岸主幹動線，並保留冰川健行等體驗時間。",
          "若還想深入高地或環島，通常需要 7 天以上，且冬季路況與日照會明顯影響可行性。",
        ],
      },
      {
        heading: "4 天行程通常包含什麼",
        bullets: [
          "經典南岸瀑布與黑沙灘",
          "冰川健行或冰河湖周邊體驗",
          "冬季自駕必備：彈性出發日與 CDW 保險",
          "住宿與租車由套餐一次整合",
        ],
        paragraphs: [],
      },
      {
        heading: "建議怎麼選",
        paragraphs: [
          "若您時間有限、想先完成南岸精華，4 天冬季自駕是性價比很高的起點。出發前請預留匯款與護照資料準備時間，並留意冬季天氣對路況的影響。",
        ],
      },
    ],
  },
  {
    slug: "iceland-winter-driving-prep",
    title: "冰島南岸冬季自駕必備：路況、服裝、保險與 CDW",
    description:
      "冬季自駕冰島前要準備什麼？路況、服裝、保險與 CDW 碰撞險重點整理。",
    category: "行前準備",
    coverImage:
      "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/3_H6_A4177_2f23f858c9.jpg",
    publishedAt: "2026-03-01",
    featuredTrip: {
      href: "/trips/iceland/self-drive/winter/6",
      title: "6 天 5 夜冰島冬季經典自駕遊",
      blurb: "涵蓋南岸、藍冰洞與黃金圈，節奏較從容，適合想多留緩衝日的旅客。",
    },
    sections: [
      {
        heading: "路況與駕駛",
        paragraphs: [
          "冬季南岸可能遇到冰雪、強風與短日照。建議每日出發前查看 road.is 路況，並預留比夏季更多的行車時間。",
          "四驅車款在部分路段較安心；套餐內租車通常含 CDW，請確認自負額與保障範圍。",
        ],
      },
      {
        heading: "服裝與裝備",
        bullets: [
          "防風防水外層、保暖中層、防滑鞋",
          "墨鏡與頭燈（日照短、反光強）",
          "行動電源與離線地圖",
        ],
        paragraphs: [],
      },
      {
        heading: "保險與套餐",
        paragraphs: [
          "自駕套餐一般含基礎碰撞險（CDW）。出發前確認是否需加購額外險種，並了解冰川活動等自選項目的裝備與安全規定。",
        ],
      },
    ],
  },
  {
    slug: "glacier-hike-and-self-drive",
    title: "冰川健行與冬季自駕怎麼排？南岸行程建議",
    description:
      "想同時體驗冰川健行與自駕自由度？行程節奏、天數與預訂時機建議。",
    category: "冬季自駕",
    coverImage:
      "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/skaftafell_49295564f1.jpg",
    publishedAt: "2026-03-01",
    featuredTrip: {
      href: "/trips/iceland/self-drive/winter/5",
      title: "5 天 4 夜冰島冬季精簡自駕套餐",
      blurb: "南岸與黃金圈雙動線，可另行加購冰川健行或藍冰洞體驗。",
    },
    sections: [
      {
        heading: "為什麼常和自駕一起規劃",
        paragraphs: [
          "冰川健行多數在南岸或冰河湖周邊，與自駕動線高度重疊。自駕可彈性安排活動日，但熱門時段名額有限，建議提早預訂。",
        ],
      },
      {
        heading: "行程節奏建議",
        bullets: [
          "第 1 天：抵達、取車、適應路況",
          "中間日：冰川健行 + 南岸景點",
          "最後一天：返程至雷克雅維克，預留還車時間",
        ],
        paragraphs: [],
      },
      {
        heading: "預訂時注意",
        paragraphs: [
          "戶外活動可能受天氣影響而改期。選擇含活動選項的套餐時，請預留緩衝日，並留意確認信中的集合時間與裝備要求。",
        ],
      },
    ],
  },
  {
    slug: "how-to-book-and-pay",
    title: "如何預訂冰島行程？匯款付款與訂單查詢說明",
    description:
      "線上預訂流程：訂金、銀行匯款、現金付款與訂單查詢方式。",
    category: "預訂付款",
    coverImage: "/images/hero-1920.webp",
    publishedAt: "2026-03-01",
    featuredTrip: {
      href: "/iceland",
      title: "冰島行程總覽",
      blurb: "瀏覽冬季／夏季、自駕／跟團等 40 餘種套餐，選定後即可線上預訂。",
    },
    sections: [
      {
        heading: "線上預訂流程",
        paragraphs: [
          "在行程頁選擇出發日、人數與住宿／車型後，進入 checkout 填寫旅客資料與付款方式，提交後會收到訂單號（例如 DLT-123456）與確認信。",
        ],
      },
      {
        heading: "付款方式",
        bullets: [
          "銀行匯款：請於備註欄填寫訂單號，匯款後聯絡顧問確認",
          "現金付款：可至辦公室付款，建議先電話預約",
          "可先付訂金或一次付清，依套餐頁選項為準",
        ],
        paragraphs: [],
      },
      {
        heading: "下單後如何查詢",
        paragraphs: [
          "使用訂單號與預訂 Email 可在網站「查詢訂單」頁查看付款狀態與匯款說明。款項確認由顧問人工處理，確認後會以 Email 或電話通知。",
        ],
      },
    ],
  },
  {
    slug: "group-tour-vs-self-drive",
    title: "冰島跟團還是自駕？怎麼選適合你的方式",
    description:
      "第一次到冰島，不確定跟團或自駕哪個好？從駕駛、預算、自由度與適合族群比較。",
    category: "行程選擇",
    coverImage:
      "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/66_5e073a69d6.jpg",
    publishedAt: "2026-03-02",
    featuredTrip: {
      href: "/trips/iceland/group/winter/6",
      title: "6 天 5 夜冰島冬季跟團遊",
      blurb: "品質小巴團與專業嚮導帶領，含南岸、黃金圈與斯奈山半島，無需自行開車。",
    },
    sections: [
      {
        heading: "跟團適合誰",
        bullets: [
          "不想在冰雪路況中自行開車",
          "希望由嚮導依天候調整節奏與停留點",
          "冰川健行等戶外活動需專業帶領時更安心",
        ],
        paragraphs: [
          "冬季跟團以品質小巴團為主，含機場大巴接送與專業嚮導。您只需跟著行程走，不必研究租車保險與還車時間。",
        ],
      },
      {
        heading: "自駕適合誰",
        bullets: [
          "有海外自駕經驗，願意自行查路況",
          "想彈性停留、臨時改變小眾景點",
          "同行人數較多，分攤租車成本較划算",
        ],
        paragraphs: [
          "自駕套餐含租車、住宿與中文行程手冊。抵達後至租車櫃檯取車，沿一號公路依自己的步調安排每一天，戶外體驗可另行加購。",
        ],
      },
      {
        heading: "可以怎麼搭配",
        paragraphs: [
          "若時間有限，可先選 5–6 天跟團或自駕完成南岸與黃金圈，之後再規劃環島深度遊。不確定時可先聯絡顧問，依出發月份與同行成員給建議。",
        ],
      },
    ],
  },
  {
    slug: "summer-ring-road-days",
    title: "冰島夏季環島要幾天？一號公路天數建議",
    description:
      "夏季日照長、路況佳，想走一號公路環島該排幾天？8 天、10 天與 12 天差在哪。",
    category: "夏季環島",
    coverImage:
      "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/_cc18d6eba7.jpg",
    publishedAt: "2026-03-02",
    featuredTrip: {
      href: "/trips/iceland/self-drive/summer/10",
      title: "10 天 9 夜冰島夏季深度環島自駕",
      blurb: "沿一號公路環島，涵蓋南岸、東部峽灣、米湖、北部與斯奈山半島。",
    },
    sections: [
      {
        heading: "為什麼夏季適合環島",
        paragraphs: [
          "4 月至 10 月日照時數長，高地與東部路段較容易通行。一號公路串聯雷克雅維克、南岸、東部峽灣、米湖、阿克雷里與斯奈山半島，是第一次環島最常選的動線。",
        ],
      },
      {
        heading: "常見天數怎麼選",
        bullets: [
          "8 天 7 夜：快環，適合時間緊、想先走完一輪的旅客",
          "10 天 9 夜：節奏適中，南岸與北部各能留足停留時間",
          "12 天以上：可加入西峽灣或更多小眾景點，不必趕路",
        ],
        paragraphs: [],
      },
      {
        heading: "規劃時注意",
        paragraphs: [
          "夏季仍可能遇到大風或濃霧，建議每日保留彈性。熱門住宿與冰川健行名額建議提早預訂；套餐含行程手冊，可協助您依班機時間安排取還車。",
        ],
      },
    ],
  },
  {
    slug: "northern-lights-season",
    title: "冰島極光什麼時候看？冬季追光實用指南",
    description:
      "極光季節、觀測條件與行程怎麼排，提高冬季看到北極光的機會。",
    category: "極光",
    coverImage:
      "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Kirkjufell1_053dfbdc9a.jpg",
    publishedAt: "2026-03-02",
    featuredTrip: {
      href: "/trips/iceland/self-drive/winter/7",
      title: "冰島西南岸 7 天 6 夜冬季自駕遊",
      blurb: "涵蓋南岸、黃金圈與斯奈山半島，多個夜晚有機會遠離光害追尋極光。",
    },
    sections: [
      {
        heading: "最佳觀測季節",
        paragraphs: [
          "冰島極光多見於 9 月至隔年 3 月，其中 10 月至 2 月夜長較長，較有機會在晚間看見北極光。夏季午夜陽光下不適合觀測極光。",
        ],
      },
      {
        heading: "需要什麼條件",
        bullets: [
          "天空晴朗、雲量少",
          "遠離雷克雅維克等光源",
          "KP 指數與太陽活動僅供參考，無法保證當晚一定出現",
        ],
        paragraphs: [
          "極光屬自然現象，無法 100% 保證。選擇停留天數較長的套餐、並預留機動夜晚，可提高遇見機率。",
        ],
      },
      {
        heading: "行程怎麼排",
        paragraphs: [
          "南岸與斯奈山半島皆有開闊海岸與較暗環境，適合自駕或跟團時於住宿點附近守候。若參加極光團，請留意集合時間與防寒裝備；自駕旅客請勿在路邊違規停車，注意行車安全。",
        ],
      },
    ],
  },
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDE_ARTICLES.find((article) => article.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return GUIDE_ARTICLES.map((article) => article.slug);
}
