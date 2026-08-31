/** 表單顯示用中文國名 → Corivo 期望之 ISO 3166-1 alpha-2 */
const COUNTRY_NAME_TO_CODE: Record<string, string> = {
  台灣: "TW",
  中國: "CN",
  香港: "HK",
  澳門: "MO",
  日本: "JP",
  韓國: "KR",
  新加坡: "SG",
  馬來西亞: "MY",
  美國: "US",
  加拿大: "CA",
  英國: "GB",
  冰島: "IS",
  澳洲: "AU",
};

/**
 * 將居住國家／國籍轉為 Corivo 可接受的代碼；已是兩碼大寫則原樣回傳。
 */
export function toCorivoCountryCode(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";

  const upper = trimmed.toUpperCase();
  if (/^[A-Z]{2}$/.test(upper)) {
    return upper;
  }

  return COUNTRY_NAME_TO_CODE[trimmed] ?? trimmed;
}
