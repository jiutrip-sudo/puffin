export const BRAND_NAME = "Tomoaki Travel Service Ltd., Co.";

/** 前台對外品牌名稱（頁面 title、OG、郵件等） */
export const SITE_DISPLAY_NAME = "帕芬假期";

/** 對外客服／聯絡信箱 */
export const COMPANY_EMAIL = "vip@puffinholiday.com";

export const COMPANY_LOGO = {
  src: "/images/puffin-logo.png",
  width: 512,
  height: 512,
} as const;

/** 全站預設 Open Graph 橫幅（1200×630，供 Threads / Facebook 等連結預覽） */
export const DEFAULT_OG_IMAGE = {
  src: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: SITE_DISPLAY_NAME,
} as const;

export const SOCIAL_LINKS = [
  { id: "line", href: "https://lin.ee/XJTgHN5", label: "LINE" },
  { id: "threads", href: "https://www.threads.com/@puffin.tw", label: "Threads" },
  { id: "facebook", href: "https://www.facebook.com/puffin.tw", label: "Facebook" },
  { id: "instagram", href: "https://www.instagram.com/puffin.tw/", label: "Instagram" },
] as const;

/** 官方 LINE Brand Icon（https://line.me/tw/logo，請勿變形或改色） */
export const LINE_BRAND_ICON_SRC = "/images/social/line-brand-icon.png";

/** 官方 Threads Logo（https://www.meta.com/brand/resources/threads/，深色底用白版，請勿變形或改色） */
export const THREADS_BRAND_ICON_SRC = "/images/social/threads-brand-icon.png";

/** 官方 Facebook Primary Logo（https://www.meta.com/brand/resources/facebook/logo/，請勿變形或改色） */
export const FACEBOOK_BRAND_ICON_SRC = "/images/social/facebook-brand-icon.png";

/** 官方 Instagram Glyph（https://www.meta.com/brand/resources/instagram/，Gradient 全彩版，請勿變形或改色） */
export const INSTAGRAM_BRAND_ICON_SRC = "/images/social/instagram-brand-icon.png";

export const COMPANY_INFO = {
  name: "友明旅行社有限公司",
  registration: [
    { label: "負責人", value: "林森木" },
    { label: "業別", value: "甲種旅行業" },
    { label: "旅行業註冊", value: "556900" },
    { label: "品質認證", value: "品保高0032" },
    { label: "統一編號", value: "89418731" },
  ],
  contact: [
    { label: "聯絡人", value: "林森木" },
    { label: "電話", value: "07-332-7375", href: "tel:+88673327375" },
    { label: "傳真", value: "07-339-2355" },
    {
      label: "信箱",
      value: COMPANY_EMAIL,
      href: `mailto:${COMPANY_EMAIL}`,
    },
    { label: "地址", value: "高雄市苓雅區中華四路126號11樓之1" },
  ],
} as const;
