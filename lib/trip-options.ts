export type TripOption = {
  id: string;
  label: string;
  href: string;
  lines?: [string, string];
};

export const DEPARTURE_OPTIONS: TripOption[] = [
  { id: "taiwan", label: "台灣出發", href: "/taiwan", lines: ["台灣", "出發"] },
  { id: "iceland", label: "冰島集合", href: "/iceland", lines: ["冰島", "集合"] },
];

export const TAIWAN_OPTIONS: TripOption[] = [
  { id: "summer", label: "夏季", href: "/trips/taiwan/summer" },
  { id: "winter", label: "冬季", href: "/trips/taiwan/winter" },
];

export const ICELAND_OPTIONS: TripOption[] = [
  { id: "group", label: "跟團", href: "/trips/iceland/group" },
  { id: "self-drive", label: "自駕", href: "/trips/iceland/self-drive" },
  { id: "experience", label: "體驗", href: "/trips/iceland/experience" },
];

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
  "iceland/group",
  "iceland/self-drive",
  "iceland/experience",
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
      "https://images.unsplash.com/photo-1531168914074-09a1a6261276?w=800&q=80",
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
