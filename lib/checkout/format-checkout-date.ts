/** 統一 checkout 內日期顯示：2026年11月4日 */
export function formatChineseDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map((part) => Number(part));
  if (!year || !month || !day) return dateStr;
  return `${year}年${month}月${day}日`;
}
