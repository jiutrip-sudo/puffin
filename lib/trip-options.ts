import type { SiteLocale } from "@/lib/site-locale";
import { localePath } from "@/lib/i18n/paths";

export type TripOption = {
  id: string;
  label: string;
  href: string;
  lines?: [string, string];
};

export const DEPARTURE_OPTIONS: TripOption[] = [
  { id: "iceland", label: "冰島集合", href: "/iceland", lines: ["冰島", "集合"] },
  { id: "taiwan", label: "台灣出發", href: "/taiwan", lines: ["台灣", "出發"] },
];

export const TAIWAN_OPTIONS: TripOption[] = [
  { id: "summer", label: "夏季", href: "/trips/taiwan/summer" },
  { id: "winter", label: "冬季", href: "/trips/taiwan/winter" },
];

export const ICELAND_OPTIONS: TripOption[] = [
  { id: "self-drive", label: "自駕", href: "/trips/iceland/self-drive" },
  { id: "group", label: "跟團", href: "/trips/iceland/group" },
  { id: "experience", label: "體驗", href: "/trips/iceland/experience" },
];

export const ICELAND_GROUP_SEASON_OPTIONS: TripOption[] = [
  { id: "summer", label: "夏季", href: "/trips/iceland/group/summer" },
  { id: "winter", label: "冬季", href: "/trips/iceland/group/winter" },
];

export const ICELAND_SELF_DRIVE_OPTIONS: TripOption[] = [
  { id: "summer", label: "夏季", href: "/trips/iceland/self-drive/summer" },
  { id: "winter", label: "冬季", href: "/trips/iceland/self-drive/winter" },
];

export const ICELAND_GROUP_SUMMER_DAY_OPTIONS: TripOption[] = Array.from(
  { length: 7 },
  (_, index) => {
    const days = 4 + index;
    return {
      id: `${days}`,
      label: `${days}日`,
      href: `/trips/iceland/group/summer/${days}`,
    };
  },
);

export const ICELAND_GROUP_WINTER_DAY_OPTIONS: TripOption[] = Array.from(
  { length: 7 },
  (_, index) => {
    const days = 4 + index;
    return {
      id: `${days}`,
      label: `${days}日`,
      href: `/trips/iceland/group/winter/${days}`,
    };
  },
);

export const ICELAND_GROUP_SUMMER_DAY_IDS = new Set(
  ICELAND_GROUP_SUMMER_DAY_OPTIONS.map((option) => option.id),
);

export const ICELAND_GROUP_WINTER_DAY_IDS = new Set(
  ICELAND_GROUP_WINTER_DAY_OPTIONS.map((option) => option.id),
);

export const ICELAND_SELF_DRIVE_SUMMER_DAY_OPTIONS: TripOption[] = Array.from(
  { length: 11 },
  (_, index) => {
    const days = 4 + index;
    return {
      id: `${days}`,
      label: `${days}日`,
      href: `/trips/iceland/self-drive/summer/${days}`,
    };
  },
);

export const ICELAND_SELF_DRIVE_WINTER_DAY_OPTIONS: TripOption[] = Array.from(
  { length: 9 },
  (_, index) => {
    const days = 4 + index;
    return {
      id: `${days}`,
      label: `${days}日`,
      href: `/trips/iceland/self-drive/winter/${days}`,
    };
  },
);

/** 需先選環島路線的冬季自駕天數 */
export const ICELAND_SELF_DRIVE_WINTER_ROUTE_PICKER_DAY_IDS = new Set([
  "8",
  "9",
  "10",
]);

/** 需先選環島路線的冬季跟團天數 */
export const ICELAND_GROUP_WINTER_ROUTE_PICKER_DAY_IDS = new Set([
  "8",
  "9",
  "10",
]);

/** 需先選路線變體的夏季跟團天數 */
export const ICELAND_GROUP_SUMMER_ROUTE_PICKER_DAY_IDS = new Set([
  "5",
  "6",
  "7",
]);

export const ICELAND_GROUP_SUMMER_ROUTE_IDS = new Set([
  "south-snaefellsnes",
  "south-golden-circle",
  "south-snaefellsnes-golden-circle",
  "south-hiking",
  "south-golden-circle-hiking",
]);

export const ICELAND_WINTER_ROUTE_IDS = new Set(["ring", "non-ring"]);

/** @deprecated 使用 ICELAND_WINTER_ROUTE_IDS */
export const ICELAND_SELF_DRIVE_WINTER_ROUTE_IDS = ICELAND_WINTER_ROUTE_IDS;

export function getIcelandSelfDriveWinterRouteOptions(
  duration: string,
): TripOption[] {
  return [
    {
      id: "ring",
      label: "環島",
      href: `/trips/iceland/self-drive/winter/${duration}/ring`,
    },
    {
      id: "non-ring",
      label: "非環島",
      href: `/trips/iceland/self-drive/winter/${duration}/non-ring`,
    },
  ];
}

export function getIcelandGroupWinterRouteOptions(
  duration: string,
): TripOption[] {
  return [
    {
      id: "ring",
      label: "環島",
      href: `/trips/iceland/group/winter/${duration}/ring`,
    },
    {
      id: "non-ring",
      label: "非環島",
      href: `/trips/iceland/group/winter/${duration}/non-ring`,
    },
  ];
}

const ICELAND_GROUP_SUMMER_ROUTE_OPTIONS_BY_DAY: Record<string, TripOption[]> = {
  "5": [
    {
      id: "south-snaefellsnes",
      label: "南岸+斯奈山",
      href: "/trips/iceland/group/summer/5/south-snaefellsnes",
    },
    {
      id: "south-golden-circle",
      label: "南岸+黃金圈",
      href: "/trips/iceland/group/summer/5/south-golden-circle",
    },
  ],
  "6": [
    {
      id: "south-snaefellsnes-golden-circle",
      label: "南岸+斯奈山+黃金圈",
      lines: ["南岸+斯奈山", "+黃金圈"],
      href: "/trips/iceland/group/summer/6/south-snaefellsnes-golden-circle",
    },
    {
      id: "south-hiking",
      label: "南岸+健行",
      href: "/trips/iceland/group/summer/6/south-hiking",
    },
  ],
  "7": [
    {
      id: "south-snaefellsnes-golden-circle",
      label: "南岸+斯奈山+黃金圈",
      lines: ["南岸+斯奈山", "+黃金圈"],
      href: "/trips/iceland/group/summer/7/south-snaefellsnes-golden-circle",
    },
    {
      id: "south-golden-circle-hiking",
      label: "南岸+黃金圈+健行",
      lines: ["南岸+黃金圈", "+健行"],
      href: "/trips/iceland/group/summer/7/south-golden-circle-hiking",
    },
  ],
};

export function getIcelandGroupSummerRouteOptions(
  duration: string,
): TripOption[] {
  return ICELAND_GROUP_SUMMER_ROUTE_OPTIONS_BY_DAY[duration] ?? [];
}

/** 夏季跟團路線變體對應的套餐 tripKey（已上線變體不含 route 後綴） */
export function getIcelandGroupSummerPackageTripKey(
  duration: string,
  route: string,
): string {
  const baseTripKey = `iceland/group/summer/${duration}`;

  if (duration === "5" && route === "south-snaefellsnes") {
    return baseTripKey;
  }

  if (
    (duration === "6" || duration === "7") &&
    route === "south-snaefellsnes-golden-circle"
  ) {
    return baseTripKey;
  }

  return `${baseTripKey}/${route}`;
}

/** 將套餐 tripKey 轉為可直達詳細頁的 URL 路徑（含路線變體後綴） */
export function getTripPackageHref(
  tripKey: string,
  locale: SiteLocale = "zh-TW",
): string {
  const parts = tripKey.split("/");
  if (parts.length < 4 || parts[0] !== "iceland") {
    return localePath(`/trips/${tripKey}`, locale);
  }

  const [, option, suboption, duration, ...routeParts] = parts;

  if (routeParts.length > 0) {
    const route = routeParts[0];
    if (
      option === "group" &&
      suboption === "summer" &&
      ICELAND_GROUP_SUMMER_ROUTE_IDS.has(route)
    ) {
      return localePath(`/trips/${tripKey}`, locale);
    }
    if (ICELAND_WINTER_ROUTE_IDS.has(route)) {
      return localePath(`/trips/${tripKey}`, locale);
    }
  }

  if (
    option === "self-drive" &&
    suboption === "winter" &&
    ICELAND_SELF_DRIVE_WINTER_ROUTE_PICKER_DAY_IDS.has(duration)
  ) {
    return localePath(
      `/trips/iceland/self-drive/winter/${duration}/ring`,
      locale,
    );
  }

  if (
    option === "group" &&
    suboption === "winter" &&
    ICELAND_GROUP_WINTER_ROUTE_PICKER_DAY_IDS.has(duration)
  ) {
    return localePath(`/trips/iceland/group/winter/${duration}/ring`, locale);
  }

  if (
    option === "group" &&
    suboption === "summer" &&
    ICELAND_GROUP_SUMMER_ROUTE_PICKER_DAY_IDS.has(duration)
  ) {
    const defaultRoute = getIcelandGroupSummerRouteOptions(duration)[0]?.id;
    if (defaultRoute) {
      return localePath(
        `/trips/iceland/group/summer/${duration}/${defaultRoute}`,
        locale,
      );
    }
  }

  return localePath(`/trips/${tripKey}`, locale);
}

/** 四段 tripKey 是否為路線選擇頁（非產品 canonical 頁） */
export function isTripRoutePickerPage(
  option: string,
  suboption: string,
  duration: string,
): boolean {
  return (
    (option === "self-drive" &&
      suboption === "winter" &&
      ICELAND_SELF_DRIVE_WINTER_ROUTE_PICKER_DAY_IDS.has(duration)) ||
    (option === "group" &&
      suboption === "summer" &&
      ICELAND_GROUP_SUMMER_ROUTE_PICKER_DAY_IDS.has(duration)) ||
    (option === "group" &&
      suboption === "winter" &&
      ICELAND_GROUP_WINTER_ROUTE_PICKER_DAY_IDS.has(duration))
  );
}

export function isTripRoutePickerTripKey(tripKey: string): boolean {
  const parts = tripKey.split("/");
  if (parts.length !== 4 || parts[0] !== "iceland") return false;
  return isTripRoutePickerPage(parts[1], parts[2], parts[3]);
}

export function isTripRoutePickerHref(href: string): boolean {
  const match = href.match(
    /^\/trips\/iceland\/(self-drive|group)\/(summer|winter)\/(\d+)$/,
  );
  if (!match) return false;
  const [, option, suboption, duration] = match;
  return isTripRoutePickerPage(option, suboption, duration);
}

/** 五段路線頁 URL 參數 → 套餐 tripKey */
export function resolveRoutePagePackageTripKey(
  source: string,
  option: string,
  suboption: string,
  duration: string,
  route: string,
): string | null {
  if (
    option === "group" &&
    suboption === "summer" &&
    ICELAND_GROUP_SUMMER_ROUTE_PICKER_DAY_IDS.has(duration) &&
    ICELAND_GROUP_SUMMER_ROUTE_IDS.has(route)
  ) {
    return getIcelandGroupSummerPackageTripKey(duration, route);
  }

  const tripKey = `${source}/${option}/${suboption}/${duration}`;

  if (ICELAND_WINTER_ROUTE_IDS.has(route)) {
    return route === "ring" ? tripKey : `${tripKey}/${route}`;
  }

  return null;
}

export const ICELAND_SELF_DRIVE_SEASON_DAY_IDS: Record<string, Set<string>> = {
  summer: new Set(ICELAND_SELF_DRIVE_SUMMER_DAY_OPTIONS.map((option) => option.id)),
  winter: new Set(ICELAND_SELF_DRIVE_WINTER_DAY_OPTIONS.map((option) => option.id)),
};

export const ICELAND_TRIP_SEASON_DAY_IDS: Record<
  string,
  Record<string, Set<string>>
> = {
  "self-drive": ICELAND_SELF_DRIVE_SEASON_DAY_IDS,
  group: {
    summer: ICELAND_GROUP_SUMMER_DAY_IDS,
    winter: ICELAND_GROUP_WINTER_DAY_IDS,
  },
};

export const SOURCE_LABELS: Record<string, string> = {
  taiwan: "台灣出發",
  iceland: "冰島集合",
};

export const OPTION_LABELS: Record<string, string> = {
  summer: "夏季",
  winter: "冬季",
  group: "跟團",
  "self-drive": "自駕",
  experience: "體驗",
};

export const COMING_SOON_TRIPS = new Set([
  "taiwan/summer",
  "taiwan/winter",
  "iceland/experience",
  ...ICELAND_GROUP_SUMMER_DAY_OPTIONS.filter(
    (option) =>
      option.id !== "4" &&
      option.id !== "5" &&
      option.id !== "6" &&
      option.id !== "7" &&
      option.id !== "8" &&
      option.id !== "9" &&
      option.id !== "10",
  ).map((option) => `iceland/group/summer/${option.id}`),
  ...ICELAND_GROUP_WINTER_DAY_OPTIONS.filter(
    (option) => option.id !== "4" && option.id !== "5" && option.id !== "6" && option.id !== "7" && option.id !== "8" && option.id !== "9" && option.id !== "10",
  ).map((option) => `iceland/group/winter/${option.id}`),
  ...ICELAND_SELF_DRIVE_SUMMER_DAY_OPTIONS.filter(
    (option) => option.id !== "4" && option.id !== "5" && option.id !== "6" && option.id !== "7" && option.id !== "8" && option.id !== "9" && option.id !== "10" && option.id !== "11" && option.id !== "12" && option.id !== "13" && option.id !== "14",
  ).map(
    (option) => `iceland/self-drive/summer/${option.id}`,
  ),
  ...ICELAND_SELF_DRIVE_WINTER_DAY_OPTIONS.filter(
    (option) => option.id !== "4" && option.id !== "5" && option.id !== "6" && option.id !== "7" && option.id !== "8" && option.id !== "9" && option.id !== "10" && option.id !== "11" && option.id !== "12",
  ).map((option) => `iceland/self-drive/winter/${option.id}`),
  ...[...ICELAND_SELF_DRIVE_WINTER_ROUTE_PICKER_DAY_IDS]
    .filter((day) => day !== "8" && day !== "9" && day !== "10")
    .map((day) => `iceland/self-drive/winter/${day}/non-ring`),
  ...[...ICELAND_GROUP_WINTER_ROUTE_PICKER_DAY_IDS]
    .filter((day) => day !== "8" && day !== "9" && day !== "10")
    .map((day) => `iceland/group/winter/${day}/non-ring`),
]);

export type PlaceholderTrip = {
  id: string;
  name: string;
  days: number;
  price: string;
  image: string;
};

export const PLACEHOLDER_TRIPS: PlaceholderTrip[] = [
  {
    id: "1",
    name: "冰島環島經典之旅",
    days: 7,
    price: "NT$ 89,900",
    image:
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&q=80",
  },
  {
    id: "2",
    name: "南岸冰川探險",
    days: 5,
    price: "NT$ 65,000",
    image:
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&q=80",
  },
  {
    id: "3",
    name: "極光追尋之旅",
    days: 6,
    price: "NT$ 78,500",
    image:
      "https://images.unsplash.com/photo-1579033461380-adb74574b31f?w=800&q=80",
  },
];
