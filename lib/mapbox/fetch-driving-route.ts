import type { RouteWaypoint } from "@/lib/trip-packages/types";

type LngLat = [number, number];

function mergeRouteSegments(segments: LngLat[][]): LngLat[] {
  const merged: LngLat[] = [];

  for (const segment of segments) {
    for (const point of segment) {
      const prev = merged[merged.length - 1];
      if (!prev || prev[0] !== point[0] || prev[1] !== point[1]) {
        merged.push(point);
      }
    }
  }

  return merged;
}

async function fetchMapboxDrivingSegment(
  token: string,
  from: RouteWaypoint,
  to: RouteWaypoint,
): Promise<LngLat[]> {
  const coordStr = `${from.lng},${from.lat};${to.lng},${to.lat}`;
  const url = new URL(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${coordStr}`,
  );
  url.searchParams.set("geometries", "geojson");
  url.searchParams.set("overview", "full");
  url.searchParams.set("access_token", token);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Mapbox Directions 請求失敗（${response.status}）`);
  }

  const data = (await response.json()) as {
    routes?: Array<{
      geometry?: { coordinates?: LngLat[] };
    }>;
  };

  const coordinates = data.routes?.[0]?.geometry?.coordinates;
  if (!coordinates?.length) {
    throw new Error("Mapbox Directions 未回傳路線座標");
  }

  return coordinates;
}

/** 依行程停靠點分段查詢 Mapbox 駕駛路線，合併為單一 LineString */
export async function fetchMapboxDrivingRoute(
  token: string,
  waypoints: RouteWaypoint[],
): Promise<LngLat[]> {
  if (waypoints.length < 2) {
    return [];
  }

  const segments: LngLat[][] = [];

  for (let i = 0; i < waypoints.length - 1; i++) {
    const segment = await fetchMapboxDrivingSegment(
      token,
      waypoints[i],
      waypoints[i + 1],
    );
    segments.push(segment);
  }

  return mergeRouteSegments(segments);
}
