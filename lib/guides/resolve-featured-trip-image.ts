import { mediaUrl } from "@/lib/media/url";
import { resolveRoutePagePackageTripKey } from "@/lib/trip-options";
import { getTripPackage } from "@/lib/trip-packages/registry";

const ICELAND_HUB_IMAGE_KEY = "guides/assets/how-to-book-and-pay.webp";

/** 依 featuredTrip.href 解析套餐 hero 圖（R2）；冰島總覽用通用封面 */
export function resolveGuideFeaturedTripImage(href: string): string | undefined {
  const path = href.split("?")[0]?.replace(/\/$/, "") ?? href;

  if (path === "/iceland") {
    return mediaUrl(ICELAND_HUB_IMAGE_KEY);
  }

  if (!path.startsWith("/trips/")) {
    return undefined;
  }

  const segments = path.slice("/trips/".length).split("/");
  if (segments[0] !== "iceland") {
    return undefined;
  }

  let tripKey: string | null = null;

  if (segments.length === 5) {
    const [source, option, suboption, duration, route] = segments;
    tripKey = resolveRoutePagePackageTripKey(
      source,
      option,
      suboption,
      duration,
      route,
    );
  } else if (segments.length === 4) {
    tripKey = segments.join("/");
  }

  if (!tripKey) {
    return undefined;
  }

  return getTripPackage(tripKey)?.heroImage;
}
