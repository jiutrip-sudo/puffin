import type { TripPackage } from "./types";
import { icelandSelfDriveWinter4 } from "./iceland-self-drive-winter-4";
import { icelandSelfDriveWinter5 } from "./iceland-self-drive-winter-5";
import { icelandSelfDriveWinter6 } from "./iceland-self-drive-winter-6";
import { icelandSelfDriveWinter7 } from "./iceland-self-drive-winter-7";
import { icelandSelfDriveWinter8 } from "./iceland-self-drive-winter-8";
import { icelandSelfDriveWinter8NonRing } from "./iceland-self-drive-winter-8-non-ring";
import { icelandSelfDriveWinter9 } from "./iceland-self-drive-winter-9";
import { icelandSelfDriveWinter9NonRing } from "./iceland-self-drive-winter-9-non-ring";
import { icelandSelfDriveWinter10 } from "./iceland-self-drive-winter-10";
import { icelandSelfDriveWinter11 } from "./iceland-self-drive-winter-11";
import { icelandSelfDriveWinter12 } from "./iceland-self-drive-winter-12";

const PACKAGES: Record<string, TripPackage> = {
  [icelandSelfDriveWinter4.tripKey]: icelandSelfDriveWinter4,
  [icelandSelfDriveWinter5.tripKey]: icelandSelfDriveWinter5,
  [icelandSelfDriveWinter6.tripKey]: icelandSelfDriveWinter6,
  [icelandSelfDriveWinter7.tripKey]: icelandSelfDriveWinter7,
  [icelandSelfDriveWinter8.tripKey]: icelandSelfDriveWinter8,
  [icelandSelfDriveWinter8NonRing.tripKey]: icelandSelfDriveWinter8NonRing,
  [icelandSelfDriveWinter9.tripKey]: icelandSelfDriveWinter9,
  [icelandSelfDriveWinter9NonRing.tripKey]: icelandSelfDriveWinter9NonRing,
  [icelandSelfDriveWinter10.tripKey]: icelandSelfDriveWinter10,
  [icelandSelfDriveWinter11.tripKey]: icelandSelfDriveWinter11,
  [icelandSelfDriveWinter12.tripKey]: icelandSelfDriveWinter12,
};

export function getTripPackageByPackageId(packageId: string): TripPackage | undefined {
  return Object.values(PACKAGES).find((pkg) => pkg.id === packageId);
}

export function getTripPackage(tripKey: string): TripPackage | undefined {
  return PACKAGES[tripKey];
}

export function getAllTripPackages(): TripPackage[] {
  return Object.values(PACKAGES);
}
