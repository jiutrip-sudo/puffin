import type {
  CorivoHotelRoomChoice,
  CorivoPackageItem,
  CorivoPackageItemSelection,
  CorivoPriceItem,
  CorivoTravelerCounts,
} from "./corivo-client";

export type RoomTypeCategory = "TWIN" | "SINGLE" | "TRIPLE" | "DOUBLE";

export type RoomSlot = {
  adults: number;
  children: number;
  roomTypeCategory: RoomTypeCategory;
};

export type TravelerRoomConfig = {
  adults: number;
  children: number;
  infants: number;
  rooms: RoomSlot[];
};

function roomConfig(
  adults: number,
  children: number,
  rooms: RoomSlot[],
): TravelerRoomConfig {
  return { adults, children, infants: 0, rooms };
}

// 與森林猫 SLMSD-042 defaultRoomConfiguration 一致（36 種旅客組合）
const DEFAULT_ROOM_CONFIGS: TravelerRoomConfig[] = [
  roomConfig(2, 0, [{ adults: 2, children: 0, roomTypeCategory: "TWIN" }]),
  roomConfig(1, 0, [{ adults: 1, children: 0, roomTypeCategory: "SINGLE" }]),
  roomConfig(1, 1, [{ adults: 1, children: 1, roomTypeCategory: "TWIN" }]),
  roomConfig(3, 0, [
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 1, children: 0, roomTypeCategory: "SINGLE" },
  ]),
  roomConfig(1, 2, [{ adults: 1, children: 2, roomTypeCategory: "TRIPLE" }]),
  roomConfig(2, 1, [
    { adults: 1, children: 1, roomTypeCategory: "TWIN" },
    { adults: 1, children: 0, roomTypeCategory: "SINGLE" },
  ]),
  roomConfig(4, 0, [
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(5, 0, [
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 1, children: 0, roomTypeCategory: "SINGLE" },
  ]),
  roomConfig(6, 0, [
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(7, 0, [
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 1, children: 0, roomTypeCategory: "SINGLE" },
  ]),
  roomConfig(8, 0, [
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(9, 0, [
    { adults: 3, children: 0, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(3, 1, [
    { adults: 1, children: 1, roomTypeCategory: "TWIN" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(2, 2, [
    { adults: 1, children: 1, roomTypeCategory: "TWIN" },
    { adults: 1, children: 1, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(4, 1, [
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(3, 2, [
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 1, children: 1, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(2, 3, [
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
    { adults: 1, children: 1, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(5, 1, [
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 3, children: 0, roomTypeCategory: "TRIPLE" },
  ]),
  roomConfig(4, 2, [
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
  ]),
  roomConfig(3, 3, [
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
  ]),
  roomConfig(2, 4, [
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
  ]),
  roomConfig(6, 1, [
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(5, 2, [
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 1, children: 1, roomTypeCategory: "TWIN" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(4, 3, [
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 1, children: 1, roomTypeCategory: "TWIN" },
    { adults: 1, children: 1, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(3, 4, [
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
    { adults: 1, children: 1, roomTypeCategory: "TWIN" },
    { adults: 1, children: 1, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(7, 1, [
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 3, children: 0, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(6, 2, [
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(5, 3, [
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 1, children: 1, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(4, 4, [
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 0, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(3, 5, [
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
    { adults: 1, children: 1, roomTypeCategory: "TWIN" },
  ]),
  roomConfig(8, 1, [
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 3, children: 0, roomTypeCategory: "TRIPLE" },
    { adults: 3, children: 0, roomTypeCategory: "TRIPLE" },
  ]),
  roomConfig(7, 2, [
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 3, children: 0, roomTypeCategory: "TRIPLE" },
  ]),
  roomConfig(6, 3, [
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
  ]),
  roomConfig(5, 4, [
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
  ]),
  roomConfig(4, 5, [
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
    { adults: 2, children: 1, roomTypeCategory: "TRIPLE" },
  ]),
  roomConfig(3, 6, [
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
    { adults: 1, children: 2, roomTypeCategory: "TRIPLE" },
  ]),
];

function findRoomConfig(counts: CorivoTravelerCounts): TravelerRoomConfig {
  const match = DEFAULT_ROOM_CONFIGS.find(
    (config) =>
      config.adults === counts.adults && config.children === counts.children,
  );

  if (!match) {
    throw new Error("此旅客組合暫不支援線上計價，請聯絡客服");
  }

  return match;
}

export function buildTravelerRoomConfig(
  travelers: CorivoTravelerCounts,
  customRooms?: RoomSlot[],
): TravelerRoomConfig {
  if (customRooms?.length) {
    return {
      adults: travelers.adults,
      children: travelers.children,
      infants: travelers.infants,
      rooms: customRooms,
    };
  }

  return findRoomConfig(travelers);
}

/** 依成人＋兒童人數取得 Corivo 預設房型配置（與森林猫 defaultRoomConfiguration 一致） */
export function resolveRoomConfig(counts: CorivoTravelerCounts): TravelerRoomConfig {
  return findRoomConfig(counts);
}

export function formatRoomSlotLabel(room: RoomSlot): string {
  if (room.roomTypeCategory === "SINGLE") return "單人房";
  if (room.roomTypeCategory === "TRIPLE") return "三人房";
  if (room.roomTypeCategory === "DOUBLE") return "雙人房（一大床）";
  return "雙床房";
}

function findHotelChoice(
  choices: CorivoHotelRoomChoice[],
  classificationId: number,
  category: RoomTypeCategory,
): CorivoHotelRoomChoice | undefined {
  return choices.find(
    (choice) =>
      choice.product?.classification?.id === classificationId &&
      choice.product?.category === category,
  );
}

export function buildCorivoPriceItems(
  packageItems: CorivoPackageItem[],
  classificationId: number,
  vehicleItemId: number | undefined,
  travelers: CorivoTravelerCounts,
  customRooms?: RoomSlot[],
): CorivoPriceItem[] {
  const roomConfig = buildTravelerRoomConfig(travelers, customRooms);
  const hotelSegments = packageItems.filter((item) => item.type === "HOTEL_ROOM");

  const items: CorivoPriceItem[] = [];
  if (vehicleItemId != null) {
    items.push({
      id: vehicleItemId,
      quantity: 1,
      travelers,
    });
  }

  for (const segment of hotelSegments) {
    for (const room of roomConfig.rooms) {
      const choice = findHotelChoice(
        segment.choices ?? [],
        classificationId,
        room.roomTypeCategory,
      );

      if (!choice) {
        throw new Error("找不到符合條件的住宿選項");
      }

      items.push({
        id: choice.id,
        quantity: 1,
        travelers: {
          adults: room.adults,
          children: room.children,
          infants: 0,
        },
      });
    }
  }

  for (const segment of packageItems) {
    if (segment.type !== "SERVICE") continue;

    for (const choice of segment.choices ?? []) {
      if (!choice.isMandatory) continue;

      items.push({
        id: choice.id,
        quantity: 1,
        travelers,
      });
    }
  }

  return items;
}

export function buildCorivoAvailabilitySelections(
  packageItems: CorivoPackageItem[],
  classificationId: number,
  vehicleItemId: number | undefined,
  travelers: CorivoTravelerCounts,
  customRooms?: RoomSlot[],
): CorivoPackageItemSelection[] {
  return buildCorivoPriceItems(
    packageItems,
    classificationId,
    vehicleItemId,
    travelers,
    customRooms,
  ).map((item) => ({
    itemId: item.id,
    quantity: item.quantity,
    travelers: item.travelers,
  }));
}

export function getRoomTypeLabel(
  travelers: CorivoTravelerCounts,
  customRooms?: RoomSlot[],
): string {
  const config = buildTravelerRoomConfig(travelers, customRooms);
  if (config.rooms.every((room) => room.roomTypeCategory === "SINGLE")) {
    return "單人房";
  }
  if (config.rooms.some((room) => room.roomTypeCategory === "TRIPLE")) {
    return "多人房";
  }
  return "雙人房";
}
