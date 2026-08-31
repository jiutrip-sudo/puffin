import { getAllTripPackages } from "@/lib/trip-packages/registry";

export function getCheckoutExtraDayTitle(
  packageId: string,
  packageTourDay: number,
): string | null {
  const tripPackage = getAllTripPackages().find((pkg) => pkg.id === packageId);
  if (!tripPackage?.itinerary) return null;

  const day = tripPackage.itinerary.find((item) => item.day === packageTourDay);
  return day?.title ?? null;
}

export function formatCheckoutExtraDayDate(dateString: string): string {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
}
