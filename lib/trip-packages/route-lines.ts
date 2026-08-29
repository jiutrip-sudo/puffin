import { ICELAND_SELF_DRIVE_WINTER_4_ROUTE_LINE } from "./iceland-self-drive-winter-4-route-line";

const ROUTE_LINES: Record<string, [number, number][]> = {
  "iceland-self-drive-winter-4": ICELAND_SELF_DRIVE_WINTER_4_ROUTE_LINE,
};

export function getTripRouteLine(
  routeLineId: string,
): [number, number][] | undefined {
  return ROUTE_LINES[routeLineId];
}
