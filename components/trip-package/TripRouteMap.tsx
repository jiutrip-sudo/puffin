"use client";

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Map, { Layer, Marker, Source, type MapRef } from "react-map-gl/mapbox";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { fetchMapboxDrivingRoute } from "@/lib/mapbox/fetch-driving-route";
import type { RouteMapConfig } from "@/lib/trip-packages/types";

const MAP_STYLES = {
  light: "mapbox://styles/mapbox/outdoors-v12",
  dark: "mapbox://styles/mapbox/dark-v11",
} as const;

const ROUTE_LINE_COLOR = "#e67e22";

type SiteTheme = "light" | "dark";

function readSiteTheme(): SiteTheme {
  if (typeof document === "undefined") {
    return "light";
  }
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function subscribeSiteTheme(onStoreChange: () => void) {
  window.addEventListener("site-theme-change", onStoreChange);
  return () => window.removeEventListener("site-theme-change", onStoreChange);
}

function useSiteTheme(): SiteTheme {
  return useSyncExternalStore(subscribeSiteTheme, readSiteTheme, () => "light");
}

type TripRouteMapProps = {
  routeMap: RouteMapConfig;
};

export default function TripRouteMap({ routeMap }: TripRouteMapProps) {
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  const theme = useSiteTheme();
  const [mapRef, setMapRef] = useState<MapRef | null>(null);
  const [routeCoordinates, setRouteCoordinates] = useState<
    [number, number][] | null
  >(routeMap.lineCoordinates ?? null);

  const { waypoints } = routeMap;
  const waypointKey = waypoints
    .map((w) => `${w.lng},${w.lat}`)
    .join("|");

  useEffect(() => {
    if (!accessToken || waypoints.length < 2) {
      return;
    }

    let cancelled = false;

    fetchMapboxDrivingRoute(accessToken, waypoints)
      .then((coordinates) => {
        if (!cancelled && coordinates.length > 0) {
          setRouteCoordinates(coordinates);
        }
      })
      .catch(() => {
        // 保留 package 內預存路線作為備援
      });

    return () => {
      cancelled = true;
    };
  }, [accessToken, waypointKey, waypoints]);

  const routeGeoJson = useMemo(() => {
    if (!routeCoordinates?.length) {
      return null;
    }

    return {
      type: "Feature" as const,
      properties: {},
      geometry: {
        type: "LineString" as const,
        coordinates: routeCoordinates,
      },
    };
  }, [routeCoordinates]);

  const fitRouteBounds = useCallback(
    (map: mapboxgl.Map) => {
      const bounds = new mapboxgl.LngLatBounds();

      for (const waypoint of waypoints) {
        bounds.extend([waypoint.lng, waypoint.lat]);
      }

      if (routeCoordinates?.length) {
        for (const [lng, lat] of routeCoordinates) {
          bounds.extend([lng, lat]);
        }
      }

      if (!bounds.isEmpty()) {
        map.fitBounds(bounds, { padding: 48, duration: 0 });
      }
    },
    [routeCoordinates, waypoints],
  );

  useEffect(() => {
    if (!mapRef) {
      return;
    }

    const map = mapRef.getMap();
    fitRouteBounds(map);
  }, [fitRouteBounds, mapRef, routeCoordinates]);

  useEffect(() => {
    if (!mapRef) {
      return;
    }

    const map = mapRef.getMap();
    const onStyleLoad = () => fitRouteBounds(map);
    map.on("style.load", onStyleLoad);
    return () => {
      map.off("style.load", onStyleLoad);
    };
  }, [fitRouteBounds, mapRef, theme]);

  if (!accessToken) {
    return (
      <div
        className="flex min-h-[320px] items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/5 px-6 text-center text-sm text-foreground/65 lg:h-[420px]"
        role="status"
      >
        地圖載入需要 Mapbox 存取權杖。請在環境變數設定
        NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN。
      </div>
    );
  }

  return (
    <div className="min-h-[320px] overflow-hidden rounded-2xl border border-foreground/10 lg:h-[420px]">
      <Map
        ref={setMapRef}
        mapboxAccessToken={accessToken}
        mapStyle={MAP_STYLES[theme]}
        initialViewState={{
          longitude: waypoints[0]?.lng ?? -21.9426,
          latitude: waypoints[0]?.lat ?? 64.1466,
          zoom: 7,
        }}
        style={{ width: "100%", height: "100%", minHeight: "320px" }}
        doubleClickZoom={false}
        attributionControl={true}
        onLoad={(event) => fitRouteBounds(event.target)}
      >
        {routeGeoJson && (
          <Source id="trip-route" type="geojson" data={routeGeoJson}>
            <Layer
              id="trip-route-line"
              type="line"
              layout={{
                "line-cap": "round",
                "line-join": "round",
              }}
              paint={{
                "line-color": ROUTE_LINE_COLOR,
                "line-width": 4,
                "line-opacity": 0.92,
              }}
            />
          </Source>
        )}

        {waypoints.map((waypoint, index) => (
          <Marker
            key={`${waypoint.label}-${index}`}
            longitude={waypoint.lng}
            latitude={waypoint.lat}
            anchor="center"
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-dark text-xs font-bold text-white shadow-md ring-2 ring-white/90"
              aria-label={`${waypoint.label}：${waypoint.detail ?? waypoint.label}`}
            >
              {index + 1}
            </div>
          </Marker>
        ))}
      </Map>
    </div>
  );
}
