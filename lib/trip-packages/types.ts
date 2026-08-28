export type ValueProp = {
  id: string;
  title: string;
  description: string;
};

export type ItineraryHighlight = {
  name: string;
  nameEn: string;
};

export type OptionalActivity = {
  name: string;
};

export type ItineraryDay = {
  day: number;
  title: string;
  accommodation: string;
  description: string;
  highlights?: ItineraryHighlight[];
  optionalActivities?: OptionalActivity[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  id: string;
  title: string;
  items: FaqItem[];
};

export type RouteStop = {
  label: string;
  detail?: string;
};

export type SimilarTrip = {
  tripKey: string;
  title: string;
  tourCode: string;
  durationLabel: string;
  description: string;
};

export type GalleryImage = {
  id: string;
  url: string;
  alt: string;
  caption?: string;
};

export type TripPackage = {
  id: string;
  tripKey: string;
  slug: string;
  tourCode: string;
  title: string;
  subtitle: string;
  duration: { days: number; nights: number };
  season: { label: string; months: string };
  meta: {
    departure: string;
    transport: string;
    tourCode: string;
  };
  whyChooseUs: ValueProp[];
  intro: { summary: string; full: string };
  gallery: GalleryImage[];
  highlights: string[];
  attractions: { name: string; nameEn: string }[];
  routeStops: RouteStop[];
  itinerary: ItineraryDay[];
  inclusions: { included: string[]; excluded: string[] };
  faq: FaqGroup[];
  similarTrips: SimilarTrip[];
  heroImage: string;
  backHref: string;
  backLabel: string;
  eyebrow: string;
};
