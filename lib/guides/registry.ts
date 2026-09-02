export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
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
    publishedAt: "2026-03-01",
    sections: [
      {
        heading: "冬季南岸自駕，4 天夠嗎？",
        paragraphs: [
          "多數旅客第一次冬季自駕冰島，會集中在南岸：黑沙灘、瀑布群、冰川與冰河湖。若從雷克雅維克出發，4 天 3 夜可涵蓋南岸主幹動線，並保留冰川徒步等體驗時間。",
          "若還想深入高地或環島，通常需要 7 天以上，且冬季路況與日照會明顯影響可行性。",
        ],
      },
      {
        heading: "4 天行程通常包含什麼",
        bullets: [
          "經典南岸瀑布與黑沙灘",
          "冰川徒步或冰河湖周邊體驗",
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
    publishedAt: "2026-03-01",
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
    title: "冰川徒步與冬季自駕怎麼排？南岸行程建議",
    description:
      "想同時體驗冰川徒步與自駕自由度？行程節奏、天數與預訂時機建議。",
    publishedAt: "2026-03-01",
    sections: [
      {
        heading: "為什麼常和自駕一起規劃",
        paragraphs: [
          "冰川徒步多數在南岸或冰河湖周邊，與自駕動線高度重疊。自駕可彈性安排活動日，但熱門時段名額有限，建議提早預訂。",
        ],
      },
      {
        heading: "行程節奏建議",
        bullets: [
          "第 1 天：抵達、取車、適應路況",
          "中間日：冰川徒步 + 南岸景點",
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
      "大樂旅行社線上預訂流程：訂金、銀行匯款、現金付款與訂單查詢方式。",
    publishedAt: "2026-03-01",
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
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDE_ARTICLES.find((article) => article.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return GUIDE_ARTICLES.map((article) => article.slug);
}
