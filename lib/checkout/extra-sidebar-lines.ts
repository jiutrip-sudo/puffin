import type { CorivoOptionalExtraDeparture } from "@/lib/checkout/corivo-optional-extras";
import type { CorivoOptionalExtraDay } from "@/lib/checkout/corivo-optional-extras";
import {
  countsFromExtraSelection,
  type ExtraParticipantCounts,
} from "@/lib/checkout/extra-participants";
import type {
  CheckoutExtraSelection,
  CheckoutRoomOccupancy,
  CheckoutTravelerForm,
} from "@/lib/checkout/types";

export type ExtraSidebarLine = {
  packageItemId: number;
  name: string;
  participantLabel: string;
  amount: number;
};

export function formatExtraParticipantLabel(counts: ExtraParticipantCounts): string {
  const parts: string[] = [];
  if (counts.adults > 0) parts.push(`${counts.adults} 位成人`);
  if (counts.children > 0) parts.push(`${counts.children} 位兒童`);
  if (counts.infants > 0) parts.push(`${counts.infants} 位嬰兒`);
  if (parts.length === 0) return "";
  return `（${parts.join("、")}）`;
}

export function computeExtraLineAmount(
  departure: CorivoOptionalExtraDeparture,
  counts: ExtraParticipantCounts,
): number {
  const adultUnit = departure.pricePerAdultInCurrency ?? 0;
  const childUnit = departure.pricePerChildInCurrency ?? 0;
  const infantUnit = departure.pricePerInfantInCurrency ?? 0;

  return (
    adultUnit * counts.adults +
    childUnit * counts.children +
    infantUnit * counts.infants
  );
}

function catalogExtraByPackageItemId(
  days: CorivoOptionalExtraDay[],
  packageItemId: number,
) {
  for (const day of days) {
    const match = day.extras.find((extra) => extra.packageItemId === packageItemId);
    if (match) return match;
  }
  return null;
}

export function buildExtraSidebarLines(
  selectedExtras: CheckoutExtraSelection[],
  travelers: CheckoutTravelerForm[],
  catalogDays: CorivoOptionalExtraDay[],
): ExtraSidebarLine[] {
  return selectedExtras.map((selection) => {
    const catalogExtra = catalogExtraByPackageItemId(
      catalogDays,
      selection.packageItemId,
    );
    const counts = countsFromExtraSelection(travelers, selection);
    const departure = catalogExtra?.departures[0];
    const participantLabel = formatExtraParticipantLabel(counts);

    return {
      packageItemId: selection.packageItemId,
      name: catalogExtra?.name ?? `自選活動 #${selection.packageItemId}`,
      participantLabel,
      amount: departure ? computeExtraLineAmount(departure, counts) : 0,
    };
  });
}

export function formatRoomTypeCategoryLabel(
  category: CheckoutRoomOccupancy["roomTypeCategory"],
): string {
  if (category === "SINGLE") return "單人房";
  if (category === "DOUBLE") return "雙人大床房";
  if (category === "TWIN") return "雙床房";
  if (category === "TRIPLE") return "三人房";
  return "客房";
}

export function formatRoomOccupantSummary(room: CheckoutRoomOccupancy): string {
  const parts: string[] = [];
  if (room.adults > 0) parts.push(`${room.adults} 位成人`);
  if (room.children > 0) parts.push(`${room.children} 名兒童`);
  if (room.infants > 0) parts.push(`${room.infants} 名嬰兒`);
  return parts.join("、");
}

export function formatRoomOccupancyLine(room: CheckoutRoomOccupancy): string {
  return `${formatRoomTypeCategoryLabel(room.roomTypeCategory)}: ${formatRoomOccupantSummary(room)}`;
}
