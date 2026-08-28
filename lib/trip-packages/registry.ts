import type { TripPackage } from "./types";
import { icelandSelfDriveWinter4 } from "./iceland-self-drive-winter-4";

const PACKAGES: Record<string, TripPackage> = {
  [icelandSelfDriveWinter4.tripKey]: icelandSelfDriveWinter4,
};

export function getTripPackage(tripKey: string): TripPackage | undefined {
  return PACKAGES[tripKey];
}

export function getAllTripPackages(): TripPackage[] {
  return Object.values(PACKAGES);
}
