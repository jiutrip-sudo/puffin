import { buildCorivoPriceItems, resolveRoomConfig } from "@/lib/trip-pricing/corivo-rooms";
import type { CorivoPackageItem } from "@/lib/trip-pricing/corivo-client";
import type { CorivoPricingConfig } from "@/lib/trip-pricing/types";
import { parseCorivoDateTime } from "./extra-selection";
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
  promoCode: string;
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
    dateOfBirth: string;
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
  const roomConfig = resolveRoomConfig({
    adults: session.adults,
    children: session.children,
    infants: session.infants,
  });

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

function vehicleTravelerIds(session: CheckoutSession): number[] {
  return session.travelers
    .filter((traveler) => traveler.type !== "INFANT")
    .map((traveler) => traveler.correlationId);
}

function buildBasePackageTourItems(
  packageItems: CorivoPackageItem[],
  classificationId: number,
  vehicleItemId: number,
  session: CheckoutSession,
): CorivoCheckoutPackageTourItem[] {
  const travelers = {
    adults: session.adults,
    children: session.children,
    infants: session.infants,
  };

  const priceItems = buildCorivoPriceItems(
    packageItems,
    classificationId,
    vehicleItemId,
    travelers,
  );

  const roomTravelerIds = assignRoomTravelerIds(session);
  const vehicleIds = vehicleTravelerIds(session);
  let roomIndex = 0;

  return priceItems.map((item) => {
    const isVehicle = item.id === vehicleItemId;
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
      date,
      time,
    };
  });
}

/**
 * 將 checkout session 對應為 Corivo `checkout` mutation 的 CheckoutInput。
 * 付款以匯款／現金人工處理，不經線上閘道；ownerId 仍須依 Corivo 後台設定補齊。
 */
export function buildCorivoCheckoutInput(
  config: CorivoPricingConfig,
  packageItems: CorivoPackageItem[],
  session: CheckoutSession,
): CorivoCheckoutGraphqlInput {
  const corivo = config.corivo;
  const classificationId = corivo.classifications[session.accommodationTier];
  const vehicleItemId = corivo.vehicleItems[session.vehicleTier];

  if (!classificationId || !vehicleItemId) {
    throw new Error("住宿或租車選項無效");
  }

  const lead =
    session.travelers.find((t) => t.type === "ADULT") ?? session.travelers[0];

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
    promoCode: session.promoCode,
    products: [
      {
        package: {
          packageTourItems,
        },
      },
    ],
    travelers: session.travelers.map((traveler) => ({
      correlationId: traveler.correlationId,
      type: traveler.type,
      firstName: traveler.firstName,
      lastName: traveler.lastName,
      email: traveler.email,
      phoneNumber: traveler.phoneNumber,
      nationality: traveler.nationality,
      dateOfBirth: traveler.dateOfBirth
        ? `${traveler.dateOfBirth}T00:00:00.000Z`
        : "",
    })),
    customer: {
      firstName: lead?.firstName ?? "",
      lastName: lead?.lastName ?? "",
      email: lead?.email ?? "",
      phoneMobile: lead?.phoneNumber ?? "",
      country: lead?.countryOfResidence ?? "",
    },
  };
}
