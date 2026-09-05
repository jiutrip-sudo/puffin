import { applyTripPackageMedia } from "@/lib/media/resolve";
import type { TripPackage } from "./types";
import { icelandSelfDriveWinter4 } from "./iceland-self-drive-winter-4";
import { icelandSelfDriveSummer4 } from "./iceland-self-drive-summer-4";
import { icelandSelfDriveSummer5 } from "./iceland-self-drive-summer-5";
import { icelandSelfDriveSummer6 } from "./iceland-self-drive-summer-6";
import { icelandSelfDriveSummer7 } from "./iceland-self-drive-summer-7";
import { icelandSelfDriveSummer8 } from "./iceland-self-drive-summer-8";
import { icelandSelfDriveSummer9 } from "./iceland-self-drive-summer-9";
import { icelandSelfDriveSummer10 } from "./iceland-self-drive-summer-10";
import { icelandSelfDriveSummer11 } from "./iceland-self-drive-summer-11";
import { icelandSelfDriveSummer12 } from "./iceland-self-drive-summer-12";
import { icelandSelfDriveSummer13 } from "./iceland-self-drive-summer-13";
import { icelandSelfDriveSummer14 } from "./iceland-self-drive-summer-14";
import { icelandSelfDriveWinter5 } from "./iceland-self-drive-winter-5";
import { icelandSelfDriveWinter6 } from "./iceland-self-drive-winter-6";
import { icelandSelfDriveWinter7 } from "./iceland-self-drive-winter-7";
import { icelandSelfDriveWinter8 } from "./iceland-self-drive-winter-8";
import { icelandSelfDriveWinter8NonRing } from "./iceland-self-drive-winter-8-non-ring";
import { icelandSelfDriveWinter9 } from "./iceland-self-drive-winter-9";
import { icelandSelfDriveWinter9NonRing } from "./iceland-self-drive-winter-9-non-ring";
import { icelandSelfDriveWinter10 } from "./iceland-self-drive-winter-10";
import { icelandSelfDriveWinter10NonRing } from "./iceland-self-drive-winter-10-non-ring";
import { icelandSelfDriveWinter11 } from "./iceland-self-drive-winter-11";
import { icelandSelfDriveWinter12 } from "./iceland-self-drive-winter-12";
import { icelandGroupWinter4 } from "./iceland-group-winter-4";
import { icelandGroupSummer4 } from "./iceland-group-summer-4";
import { icelandGroupSummer5 } from "./iceland-group-summer-5";
import { icelandGroupSummer5SouthGoldenCircle } from "./iceland-group-summer-5-south-golden-circle";
import { icelandGroupSummer6 } from "./iceland-group-summer-6";
import { icelandGroupSummer6SouthHiking } from "./iceland-group-summer-6-south-hiking";
import { icelandGroupSummer7 } from "./iceland-group-summer-7";
import { icelandGroupSummer7SouthGoldenCircleHiking } from "./iceland-group-summer-7-south-golden-circle-hiking";
import { icelandGroupSummer8 } from "./iceland-group-summer-8";
import { icelandGroupSummer9 } from "./iceland-group-summer-9";
import { icelandGroupSummer10 } from "./iceland-group-summer-10";
import { icelandGroupWinter5 } from "./iceland-group-winter-5";
import { icelandGroupWinter6 } from "./iceland-group-winter-6";
import { icelandGroupWinter7 } from "./iceland-group-winter-7";
import { icelandGroupWinter8 } from "./iceland-group-winter-8";
import { icelandGroupWinter8NonRing } from "./iceland-group-winter-8-non-ring";
import { icelandGroupWinter9 } from "./iceland-group-winter-9";
import { icelandGroupWinter9NonRing } from "./iceland-group-winter-9-non-ring";
import { icelandGroupWinter10 } from "./iceland-group-winter-10";
import { icelandGroupWinter10NonRing } from "./iceland-group-winter-10-non-ring";

const PACKAGES: Record<string, TripPackage> = {
  [icelandSelfDriveWinter4.tripKey]: icelandSelfDriveWinter4,
  [icelandSelfDriveSummer4.tripKey]: icelandSelfDriveSummer4,
  [icelandSelfDriveSummer5.tripKey]: icelandSelfDriveSummer5,
  [icelandSelfDriveSummer6.tripKey]: icelandSelfDriveSummer6,
  [icelandSelfDriveSummer7.tripKey]: icelandSelfDriveSummer7,
  [icelandSelfDriveSummer8.tripKey]: icelandSelfDriveSummer8,
  [icelandSelfDriveSummer9.tripKey]: icelandSelfDriveSummer9,
  [icelandSelfDriveSummer10.tripKey]: icelandSelfDriveSummer10,
  [icelandSelfDriveSummer11.tripKey]: icelandSelfDriveSummer11,
  [icelandSelfDriveSummer12.tripKey]: icelandSelfDriveSummer12,
  [icelandSelfDriveSummer13.tripKey]: icelandSelfDriveSummer13,
  [icelandSelfDriveSummer14.tripKey]: icelandSelfDriveSummer14,
  [icelandSelfDriveWinter5.tripKey]: icelandSelfDriveWinter5,
  [icelandSelfDriveWinter6.tripKey]: icelandSelfDriveWinter6,
  [icelandSelfDriveWinter7.tripKey]: icelandSelfDriveWinter7,
  [icelandSelfDriveWinter8.tripKey]: icelandSelfDriveWinter8,
  [icelandSelfDriveWinter8NonRing.tripKey]: icelandSelfDriveWinter8NonRing,
  [icelandSelfDriveWinter9.tripKey]: icelandSelfDriveWinter9,
  [icelandSelfDriveWinter9NonRing.tripKey]: icelandSelfDriveWinter9NonRing,
  [icelandSelfDriveWinter10.tripKey]: icelandSelfDriveWinter10,
  [icelandSelfDriveWinter10NonRing.tripKey]: icelandSelfDriveWinter10NonRing,
  [icelandSelfDriveWinter11.tripKey]: icelandSelfDriveWinter11,
  [icelandSelfDriveWinter12.tripKey]: icelandSelfDriveWinter12,
  [icelandGroupWinter4.tripKey]: icelandGroupWinter4,
  [icelandGroupSummer4.tripKey]: icelandGroupSummer4,
  [icelandGroupSummer5.tripKey]: icelandGroupSummer5,
  [icelandGroupSummer5SouthGoldenCircle.tripKey]: icelandGroupSummer5SouthGoldenCircle,
  [icelandGroupSummer6.tripKey]: icelandGroupSummer6,
  [icelandGroupSummer6SouthHiking.tripKey]: icelandGroupSummer6SouthHiking,
  [icelandGroupSummer7.tripKey]: icelandGroupSummer7,
  [icelandGroupSummer7SouthGoldenCircleHiking.tripKey]:
    icelandGroupSummer7SouthGoldenCircleHiking,
  [icelandGroupSummer8.tripKey]: icelandGroupSummer8,
  [icelandGroupSummer9.tripKey]: icelandGroupSummer9,
  [icelandGroupSummer10.tripKey]: icelandGroupSummer10,
  [icelandGroupWinter5.tripKey]: icelandGroupWinter5,
  [icelandGroupWinter6.tripKey]: icelandGroupWinter6,
  [icelandGroupWinter7.tripKey]: icelandGroupWinter7,
  [icelandGroupWinter8.tripKey]: icelandGroupWinter8,
  [icelandGroupWinter8NonRing.tripKey]: icelandGroupWinter8NonRing,
  [icelandGroupWinter9.tripKey]: icelandGroupWinter9,
  [icelandGroupWinter9NonRing.tripKey]: icelandGroupWinter9NonRing,
  [icelandGroupWinter10.tripKey]: icelandGroupWinter10,
  [icelandGroupWinter10NonRing.tripKey]: icelandGroupWinter10NonRing,
};

function withMedia(pkg: TripPackage | undefined): TripPackage | undefined {
  return pkg ? applyTripPackageMedia(pkg) : undefined;
}

export function getTripPackageByPackageId(packageId: string): TripPackage | undefined {
  return withMedia(Object.values(PACKAGES).find((pkg) => pkg.id === packageId));
}

export function getTripPackage(tripKey: string): TripPackage | undefined {
  return withMedia(PACKAGES[tripKey]);
}

export function getAllTripPackages(): TripPackage[] {
  return Object.values(PACKAGES).map((pkg) => applyTripPackageMedia(pkg));
}
