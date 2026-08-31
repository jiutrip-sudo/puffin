import type {
  CheckoutExtraSelection,
  CheckoutSession,
  CheckoutTravelerForm,
} from "./types";

export type ExtraParticipantCounts = {
  adults: number;
  children: number;
  infants: number;
};

export function defaultExtraParticipantCounts(
  session: Pick<CheckoutSession, "adults" | "children" | "infants">,
): ExtraParticipantCounts {
  return {
    adults: session.adults,
    children: session.children,
    infants: session.infants,
  };
}

export function countsFromExtraSelection(
  travelers: CheckoutTravelerForm[],
  selection: CheckoutExtraSelection,
): ExtraParticipantCounts {
  const idSet = new Set(selection.travelerCorrelationIds);
  const selected = travelers.filter((traveler) => idSet.has(traveler.correlationId));

  return {
    adults: selected.filter((traveler) => traveler.type === "ADULT").length,
    children: selected.filter((traveler) => traveler.type === "CHILD").length,
    infants: selected.filter((traveler) => traveler.type === "INFANT").length,
  };
}

export function travelerIdsFromCounts(
  travelers: CheckoutTravelerForm[],
  counts: ExtraParticipantCounts,
): number[] {
  const adultIds = travelers
    .filter((traveler) => traveler.type === "ADULT")
    .map((traveler) => traveler.correlationId);
  const childIds = travelers
    .filter((traveler) => traveler.type === "CHILD")
    .map((traveler) => traveler.correlationId);
  const infantIds = travelers
    .filter((traveler) => traveler.type === "INFANT")
    .map((traveler) => traveler.correlationId);

  return [
    ...adultIds.slice(0, counts.adults),
    ...childIds.slice(0, counts.children),
    ...infantIds.slice(0, counts.infants),
  ];
}

/** 計入活動名額的人數（嬰兒通常不計入最低人數） */
export function extraActivityParticipantTotal(
  counts: ExtraParticipantCounts,
): number {
  return counts.adults + counts.children;
}

export function extraParticipantTotal(counts: ExtraParticipantCounts): number {
  return counts.adults + counts.children + counts.infants;
}

export function isExtraParticipantCountsValid(
  counts: ExtraParticipantCounts,
  session: Pick<CheckoutSession, "adults" | "children" | "infants">,
  minTravelers: number,
  maxTravelers: number,
): boolean {
  if (
    counts.adults > session.adults ||
    counts.children > session.children ||
    counts.infants > session.infants
  ) {
    return false;
  }

  if (extraParticipantTotal(counts) === 0) {
    return false;
  }

  const activityTotal = extraActivityParticipantTotal(counts);
  return activityTotal >= minTravelers && activityTotal <= maxTravelers;
}

export function upsertExtraSelection(
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
  counts: ExtraParticipantCounts,
  session: Pick<CheckoutSession, "adults" | "children" | "infants">,
): CheckoutExtraSelection[] {
  const without = selected.filter(
    (item) => item.packageItemId !== extra.packageItemId,
  );

  if (extraParticipantTotal(counts) === 0) {
    return without;
  }

  if (
    !isExtraParticipantCountsValid(
      counts,
      session,
      extra.minTravelers,
      extra.maxTravelers,
    )
  ) {
    return selected;
  }

  const travelerCorrelationIds = travelerIdsFromCounts(travelers, counts);

  return [
    ...without,
    {
      packageItemId: extra.packageItemId,
      productId: extra.productId,
      packageTourDay: extra.packageTourDay,
      departureStartTime: extra.departureStartTime,
      travelerCorrelationIds,
    },
  ];
}
