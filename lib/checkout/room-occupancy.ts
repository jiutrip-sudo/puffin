import {
  resolveRoomConfig,
  type RoomSlot,
  type RoomTypeCategory,
} from "@/lib/trip-pricing/corivo-rooms";
import type { CheckoutRoomOccupancy } from "./types";

const MAX_OCCUPANTS_PER_ROOM = 3;
export const MAX_CHECKOUT_ROOMS = 4;
import { COMPANY_EMAIL } from "@/lib/company-info";

export const CHECKOUT_ROOM_LIMIT_EMAIL = COMPANY_EMAIL;

export function inferRoomTypeCategory(
  adults: number,
  children: number,
): RoomTypeCategory {
  const occupants = adults + children;
  if (occupants <= 1) return "SINGLE";
  if (adults === 2 && children === 0) return "TWIN";
  if (occupants === 2) return "TWIN";
  return "TRIPLE";
}

export function canChooseBedType(adults: number, children: number): boolean {
  return adults === 2 && children === 0;
}

export function occupanciesToRoomSlots(
  occupancies: CheckoutRoomOccupancy[],
): RoomSlot[] {
  return occupancies.map((room) => ({
    adults: room.adults,
    children: room.children,
    roomTypeCategory: room.roomTypeCategory,
  }));
}

export function aggregateRoomOccupancies(occupancies: CheckoutRoomOccupancy[]) {
  return {
    adults: occupancies.reduce((sum, room) => sum + room.adults, 0),
    children: occupancies.reduce((sum, room) => sum + room.children, 0),
    infants: occupancies.reduce((sum, room) => sum + room.infants, 0),
  };
}

export function createRoomOccupanciesFromCounts(
  adults: number,
  children: number,
  infants: number,
): CheckoutRoomOccupancy[] {
  const config = resolveRoomConfig({ adults, children, infants });
  return config.rooms.map((room, index) => ({
    adults: room.adults,
    children: room.children,
    infants: index === 0 ? infants : 0,
    roomTypeCategory: room.roomTypeCategory,
  }));
}

export function normalizeRoomOccupancy(
  room: CheckoutRoomOccupancy,
): CheckoutRoomOccupancy {
  const nextCategory = canChooseBedType(room.adults, room.children)
    ? room.roomTypeCategory === "DOUBLE" || room.roomTypeCategory === "TWIN"
      ? room.roomTypeCategory
      : inferRoomTypeCategory(room.adults, room.children)
    : inferRoomTypeCategory(room.adults, room.children);

  return {
    ...room,
    roomTypeCategory: nextCategory,
  };
}

export function normalizeRoomOccupancies(
  occupancies: CheckoutRoomOccupancy[],
): CheckoutRoomOccupancy[] {
  return occupancies.map((room) => normalizeRoomOccupancy(room));
}

export function maxRoomOccupants(room: CheckoutRoomOccupancy): number {
  return MAX_OCCUPANTS_PER_ROOM;
}

export function roomOccupantTotal(room: CheckoutRoomOccupancy): number {
  return room.adults + room.children;
}

function singleOccupanciesPerAdult(
  roomCount: number,
  infants: number,
): CheckoutRoomOccupancy[] {
  return Array.from({ length: roomCount }, (_, index) => ({
    adults: 1,
    children: 0,
    infants: index === 0 ? infants : 0,
    roomTypeCategory: "SINGLE" as const,
  }));
}

/** 成人數與房間數相同且無兒童時，每人一間單人房 */
export function applySingleRoomPerAdultIfNeeded(
  occupancies: CheckoutRoomOccupancy[],
): CheckoutRoomOccupancy[] {
  const totals = aggregateRoomOccupancies(occupancies);
  if (
    totals.adults === occupancies.length &&
    totals.children === 0 &&
    occupancies.length > 0
  ) {
    return singleOccupanciesPerAdult(occupancies.length, totals.infants);
  }
  return occupancies;
}

function greedyRedistributeRooms(
  adults: number,
  children: number,
  infants: number,
  roomCount: number,
): CheckoutRoomOccupancy[] {
  const rooms: CheckoutRoomOccupancy[] = Array.from({ length: roomCount }, () => ({
    adults: 0,
    children: 0,
    infants: 0,
    roomTypeCategory: "SINGLE" as const,
  }));

  let remainingAdults = adults;
  let remainingChildren = children;

  for (let i = 0; i < roomCount && remainingAdults > 0; i += 1) {
    rooms[i].adults = 1;
    remainingAdults -= 1;
  }

  for (let i = 0; remainingAdults > 0; i = (i + 1) % roomCount) {
    if (roomOccupantTotal(rooms[i]) >= MAX_OCCUPANTS_PER_ROOM) {
      if (i === roomCount - 1) break;
      continue;
    }
    rooms[i].adults += 1;
    remainingAdults -= 1;
  }

  for (let i = 0; remainingChildren > 0; i = (i + 1) % roomCount) {
    if (roomOccupantTotal(rooms[i]) >= MAX_OCCUPANTS_PER_ROOM) {
      if (i === roomCount - 1) break;
      continue;
    }
    rooms[i].children += 1;
    remainingChildren -= 1;
  }

  rooms[0].infants = infants;

  return normalizeRoomOccupancies(rooms);
}

/** 依旅客人數與目標房間數重新分配（不增減旅客總數） */
export function buildRoomOccupanciesForCounts(
  adults: number,
  children: number,
  infants: number,
  roomCount: number,
): CheckoutRoomOccupancy[] {
  const count = Math.max(1, Math.min(roomCount, MAX_CHECKOUT_ROOMS));

  if (adults === count && children === 0) {
    return singleOccupanciesPerAdult(count, infants);
  }

  try {
    const config = resolveRoomConfig({ adults, children, infants });
    if (config.rooms.length === count) {
      return config.rooms.map((room, index) => ({
        adults: room.adults,
        children: room.children,
        infants: index === 0 ? infants : 0,
        roomTypeCategory: room.roomTypeCategory,
      }));
    }
  } catch {
    // 不支援的組合，改用貪婪分配
  }

  const greedy = greedyRedistributeRooms(adults, children, infants, count);
  return applySingleRoomPerAdultIfNeeded(greedy);
}
