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

export const ICELAND_SELF_DRIVE_WINTER_ROUTE_IDS = new Set(["ring", "non-ring"]);

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
  ...ICELAND_GROUP_SUMMER_DAY_OPTIONS.map(
    (option) => `iceland/group/summer/${option.id}`,
  ),
  ...ICELAND_GROUP_WINTER_DAY_OPTIONS.map(
    (option) => `iceland/group/winter/${option.id}`,
  ),
  ...ICELAND_SELF_DRIVE_SUMMER_DAY_OPTIONS.map(
    (option) => `iceland/self-drive/summer/${option.id}`,
  ),
  ...ICELAND_SELF_DRIVE_WINTER_DAY_OPTIONS.filter(
    (option) => option.id !== "4" && option.id !== "5" && option.id !== "6" && option.id !== "7" && option.id !== "8" && option.id !== "9" && option.id !== "10" && option.id !== "11" && option.id !== "12",
  ).map((option) => `iceland/self-drive/winter/${option.id}`),
  ...[...ICELAND_SELF_DRIVE_WINTER_ROUTE_PICKER_DAY_IDS]
    .filter((day) => day !== "8" && day !== "9" && day !== "10")
    .map((day) => `iceland/self-drive/winter/${day}/non-ring`),
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
