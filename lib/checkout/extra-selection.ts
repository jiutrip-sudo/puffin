import type { CheckoutExtraSelection, CheckoutTravelerForm } from "./types";

/** 活動預設參與旅客：成人與兒童（嬰兒通常不計入活動名額） */
export function defaultExtraParticipantIds(
  travelers: CheckoutTravelerForm[],
): number[] {
  return travelers
    .filter((traveler) => traveler.type !== "INFANT")
    .map((traveler) => traveler.correlationId);
}

export function toggleExtraSelection(
  selected: CheckoutExtraSelection[],
  extra: {
    packageItemId: number;
    productId: number;
    packageTourDay: number;
    departureStartTime: string;
    minTravelers: number;
    maxTravelers: number;
  },
  travelers: CheckoutTravelerForm[],
): CheckoutExtraSelection[] {
  const exists = selected.some(
    (item) => item.packageItemId === extra.packageItemId,
  );

  if (exists) {
    return selected.filter(
      (item) => item.packageItemId !== extra.packageItemId,
    );
  }

  const participantIds = defaultExtraParticipantIds(travelers);
  const count = participantIds.length;

  if (count < extra.minTravelers || count > extra.maxTravelers) {
    return selected;
  }

  return [
    ...selected,
    {
      packageItemId: extra.packageItemId,
      productId: extra.productId,
      packageTourDay: extra.packageTourDay,
      departureStartTime: extra.departureStartTime,
      travelerCorrelationIds: participantIds,
    },
  ];
}

export function formatExtraDepartureLabel(startTime: string): string {
  const date = new Date(startTime);
  if (Number.isNaN(date.getTime())) return startTime;

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  if (hours === 0 && minutes === 0) {
    return "全天";
  }

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function parseCorivoDateTime(startTime: string): {
  date: string;
  time: string | undefined;
} {
  const date = new Date(startTime);
  if (Number.isNaN(date.getTime())) {
    return { date: startTime.slice(0, 10), time: undefined };
  }

  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  return {
    date: `${y}-${m}-${d}`,
    time:
      hours === 0 && minutes === 0 && seconds === 0
        ? undefined
        : `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
  };
}
