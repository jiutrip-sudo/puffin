import { getIcelandGroupSummerPackageTripKey } from "@/lib/trip-options";

/** 將 URL 風格 tripKey 解析為 registry 中的套餐 tripKey */
export function resolvePackageTripKey(tripKey: string): string {
  const parts = tripKey.split("/");
  if (
    parts.length === 5 &&
    parts[0] === "iceland" &&
    parts[1] === "group" &&
    parts[2] === "summer"
  ) {
    return getIcelandGroupSummerPackageTripKey(parts[3], parts[4]);
  }
  return tripKey;
}
