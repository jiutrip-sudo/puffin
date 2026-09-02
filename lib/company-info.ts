export const BRAND_NAME = "Tomoaki Travel Service Ltd., Co.";

export const COMPANY_LOGO = {
  src: "/images/dollar-travel-logo.png",
  width: 399,
  height: 363,
} as const;

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
      value: "vip@dollar-travel.com",
      href: "mailto:vip@dollar-travel.com",
    },
    { label: "地址", value: "高雄市苓雅區中華四路126號11樓之1" },
  ],
} as const;
