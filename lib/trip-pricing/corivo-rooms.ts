import type {
  CorivoHotelRoomChoice,
  CorivoPackageItem,
  CorivoPriceItem,
  CorivoTravelerCounts,
} from "./corivo-client";

export type RoomTypeCategory = "TWIN" | "SINGLE" | "TRIPLE" | "DOUBLE";

type RoomSlot = {
  adults: number;
  children: number;
  roomTypeCategory: RoomTypeCategory;
};

type TravelerRoomConfig = {
  adults: number;
  children: number;
  infants: number;
  rooms: RoomSlot[];
};

// 與森林猫／Corivo SLMSD-042 預設房型配置一致
const DEFAULT_ROOM_CONFIGS: TravelerRoomConfig[] = [
  { adults: 2, children: 0, infants: 0, rooms: [{ adults: 2, children: 0, roomTypeCategory: "TWIN" }] },
  { adults: 1, children: 0, infants: 0, rooms: [{ adults: 1, children: 0, roomTypeCategory: "SINGLE" }] },
  { adults: 1, children: 1, infants: 0, rooms: [{ adults: 1, children: 1, roomTypeCategory: "TWIN" }] },
  {
    adults: 3,
    children: 0,
    infants: 0,
    rooms: [
      { adults: 2, children: 0, roomTypeCategory: "TWIN" },
      { adults: 1, children: 0, roomTypeCategory: "SINGLE" },
    ],
  },
  { adults: 1, children: 2, infants: 0, rooms: [{ adults: 1, children: 2, roomTypeCategory: "TRIPLE" }] },
  {
    adults: 2,
    children: 1,
    infants: 0,
    rooms: [
      { adults: 1, children: 1, roomTypeCategory: "TWIN" },
      { adults: 1, children: 0, roomTypeCategory: "SINGLE" },
    ],
  },
  {
    adults: 4,
    children: 0,
    infants: 0,
    rooms: [
      { adults: 2, children: 0, roomTypeCategory: "TWIN" },
      { adults: 2, children: 0, roomTypeCategory: "TWIN" },
    ],
  },
  {
    adults: 2,
    children: 2,
    infants: 0,
    rooms: [
      { adults: 1, children: 1, roomTypeCategory: "TWIN" },
      { adults: 1, children: 1, roomTypeCategory: "TWIN" },
    ],
  },
];

function findRoomConfig(counts: CorivoTravelerCounts): TravelerRoomConfig {
  const match = DEFAULT_ROOM_CONFIGS.find(
    (config) =>
      config.adults === counts.adults &&
      config.children === counts.children &&
      config.infants === counts.infants,
  );

  if (!match) {
    throw new Error("此旅客組合暫不支援線上計價，請聯絡客服");
  }

  return match;
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
  vehicleItemId: number,
  travelers: CorivoTravelerCounts,
): CorivoPriceItem[] {
  const roomConfig = findRoomConfig(travelers);
  const hotelSegments = packageItems.filter((item) => item.type === "HOTEL_ROOM");

  const items: CorivoPriceItem[] = [
    {
      id: vehicleItemId,
      quantity: 1,
      travelers,
    },
  ];

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

  return items;
}

export function getRoomTypeLabel(counts: CorivoTravelerCounts): string {
  const config = findRoomConfig(counts);
  if (config.rooms.every((room) => room.roomTypeCategory === "SINGLE")) {
    return "單人房";
  }
  if (config.rooms.some((room) => room.roomTypeCategory === "TRIPLE")) {
    return "多人房";
  }
  return "雙人房";
}
