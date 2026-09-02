import {
  buildCorivoPriceItems,
  buildTravelerRoomConfig,
} from "@/lib/trip-pricing/corivo-rooms";
import { occupanciesToRoomSlots } from "@/lib/checkout/room-occupancy";
import type { CorivoPackageItem } from "@/lib/trip-pricing/corivo-client";
import { packageIncludesVehicle } from "@/lib/trip-pricing/calculate";
import type { CorivoPricingConfig } from "@/lib/trip-pricing/types";
import { toCorivoCountryCode } from "./country-codes";
import { parseCorivoDateTime } from "./extra-selection";
import { formatTravelerPhoneNumber } from "./validate-travelers";
import type { CheckoutSession } from "./types";

export type CorivoCheckoutPackageTourItem = {
  itemId: number;
  quantity: number;
  travelers: number[];
  date?: string;
  time?: string;
};

export type CorivoCheckoutGraphqlInput = {
  from: string;
  preDays: number;
  postDays: number;
  promoCode?: string;
  products: Array<{
    package: {
      packageTourItems: CorivoCheckoutPackageTourItem[];
    };
  }>;
  travelers: Array<{
    correlationId: number;
    type: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    nationality: string;
    dateOfBirth?: string;
  }>;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phoneMobile: string;
    country: string;
  };
};

function assignRoomTravelerIds(session: CheckoutSession): number[][] {
  const roomSlots = occupanciesToRoomSlots(session.roomOccupancies);
  const roomConfig = buildTravelerRoomConfig(
    {
      adults: session.adults,
      children: session.children,
      infants: session.infants,
    },
    roomSlots,
  );

  const adultIds = session.travelers
    .filter((traveler) => traveler.type === "ADULT")
    .map((traveler) => traveler.correlationId);
  const childIds = session.travelers
    .filter((traveler) => traveler.type === "CHILD")
    .map((traveler) => traveler.correlationId);

  let adultIndex = 0;
  let childIndex = 0;

  return roomConfig.rooms.map((room) => {
    const ids: number[] = [];
    for (let i = 0; i < room.adults; i += 1) {
      const id = adultIds[adultIndex];
      if (id !== undefined) ids.push(id);
      adultIndex += 1;
    }
    for (let i = 0; i < room.children; i += 1) {
      const id = childIds[childIndex];
      if (id !== undefined) ids.push(id);
      childIndex += 1;
    }
    return ids;
  });
}

function toCorivoDateTime(date: string): string {
  return date.includes("T") ? date : `${date}T00:00:00.000Z`;
}

function buildTravelerDateOfBirth(dateOfBirth: string): string | undefined {
  const trimmed = dateOfBirth.trim();
  if (!trimmed) return undefined;
  return toCorivoDateTime(trimmed);
}

function vehicleTravelerIds(session: CheckoutSession): number[] {
  return session.travelers
    .filter((traveler) => traveler.type !== "INFANT")
    .map((traveler) => traveler.correlationId);
}

function buildBasePackageTourItems(
  packageItems: CorivoPackageItem[],
  classificationId: number,
  vehicleItemId: number | undefined,
  session: CheckoutSession,
): CorivoCheckoutPackageTourItem[] {
  const travelers = {
    adults: session.adults,
    children: session.children,
    infants: session.infants,
  };

  const roomSlots = occupanciesToRoomSlots(session.roomOccupancies);

  const priceItems = buildCorivoPriceItems(
    packageItems,
    classificationId,
    vehicleItemId,
    travelers,
    roomSlots,
  );

  const roomTravelerIds = assignRoomTravelerIds(session);
  const vehicleIds = vehicleTravelerIds(session);
  let roomIndex = 0;

  return priceItems.map((item) => {
    const isVehicle =
      vehicleItemId != null && item.id === vehicleItemId;
    const travelersForItem = isVehicle
      ? vehicleIds
      : (roomTravelerIds[roomIndex] ?? vehicleIds);

    if (!isVehicle) {
      roomIndex += 1;
    }

    return {
      itemId: item.id,
      quantity: item.quantity,
      travelers: travelersForItem,
    };
  });
}

function buildExtraPackageTourItems(
  session: CheckoutSession,
): CorivoCheckoutPackageTourItem[] {
  return session.selectedExtras.map((extra) => {
    const { date, time } = parseCorivoDateTime(extra.departureStartTime);

    return {
      itemId: extra.packageItemId,
      quantity: 1,
      travelers: extra.travelerCorrelationIds,
      ...(date ? { date } : {}),
      ...(time ? { time } : {}),
    };
  });
}

function resolveLeadCountryCode(session: CheckoutSession): string {
  const lead =
    session.travelers.find((t) => t.type === "ADULT") ?? session.travelers[0];
  const raw =
    lead?.countryOfResidence.trim() ||
    lead?.nationality.trim() ||
    "TW";
  return toCorivoCountryCode(raw) || "TW";
}

function resolveTravelerNationality(
  traveler: CheckoutSession["travelers"][number],
  leadCountryCode: string,
): string {
  const raw =
    traveler.nationality.trim() ||
    traveler.countryOfResidence.trim() ||
    leadCountryCode;
  return toCorivoCountryCode(raw) || leadCountryCode;
}

/**
 * 將 checkout session 對應為 Corivo `checkout` mutation 的 CheckoutInput。
 *
 * @deprecated 預訂已改由本站 `lib/booking/create-local-booking.ts` 處理，不再呼叫 Corivo checkout。
 * 計價／可訂性仍使用 Corivo API 或快照。
 */
export function buildCorivoCheckoutInput(
  config: CorivoPricingConfig,
  packageItems: CorivoPackageItem[],
  session: CheckoutSession,
): CorivoCheckoutGraphqlInput {
  const corivo = config.corivo;
  const classificationId = corivo.classifications[session.accommodationTier];
  const includesVehicle = packageIncludesVehicle(config);
  const vehicleItemId = includesVehicle
    ? corivo.vehicleItems?.[session.vehicleTier]
    : undefined;

  if (!classificationId || (includesVehicle && !vehicleItemId)) {
    throw new Error("住宿或租車選項無效");
  }

  const lead =
    session.travelers.find((t) => t.type === "ADULT") ?? session.travelers[0];
  const leadCountryCode = resolveLeadCountryCode(session);

  const packageTourItems = [
    ...buildBasePackageTourItems(
      packageItems,
      classificationId,
      vehicleItemId,
      session,
    ),
    ...buildExtraPackageTourItems(session),
  ];

  return {
    from: session.startDate,
    preDays: session.preDays,
    postDays: session.postDays,
    ...(session.promoCode.trim() ? { promoCode: session.promoCode.trim() } : {}),
    products: [
      {
        package: {
          packageTourItems,
        },
      },
    ],
    travelers: session.travelers.map((traveler) => {
      const dateOfBirth = buildTravelerDateOfBirth(traveler.dateOfBirth);
      return {
        correlationId: traveler.correlationId,
        type: traveler.type,
        firstName: traveler.firstName.trim(),
        lastName: traveler.lastName.trim(),
        email: traveler.email.trim(),
        phoneNumber: formatTravelerPhoneNumber(traveler),
        nationality: resolveTravelerNationality(traveler, leadCountryCode),
        ...(dateOfBirth ? { dateOfBirth } : {}),
      };
    }),
    customer: {
      firstName: lead?.firstName.trim() ?? "",
      lastName: lead?.lastName.trim() ?? "",
      email: lead?.email.trim() ?? "",
      phoneMobile: lead ? formatTravelerPhoneNumber(lead) : "",
      country: leadCountryCode,
    },
  };
}
