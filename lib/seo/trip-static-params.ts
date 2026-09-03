import { getAllTripPackages } from "@/lib/trip-packages/registry";
import { COMING_SOON_TRIPS, getTripPackageHref } from "@/lib/trip-options";

export type TripProductPathParams = {
  source: string;
  option: string;
  suboption: string;
  duration: string;
  route?: string;
};

export function getTripPackagePathParams(
  tripKey: string,
): TripProductPathParams {
  const internalPath = getTripPackageHref(tripKey, "zh-TW");
  const segments = internalPath.replace(/^\/trips\//, "").split("/");
  const [source, option, suboption, duration, ...routeParts] = segments;

  return {
    source,
    option,
    suboption,
    duration,
    route: routeParts.length > 0 ? routeParts.join("/") : undefined,
  };
}

export function getAllTripProductStaticParams(): TripProductPathParams[] {
  return getAllTripPackages()
    .filter((pkg) => !COMING_SOON_TRIPS.has(pkg.tripKey))
    .map((pkg) => getTripPackagePathParams(pkg.tripKey));
}
