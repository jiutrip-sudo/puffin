export type RoomType = "double" | "twin" | "single";

export type VehicleTier = {
  id: string;
  label: string;
  description?: string;
  footnote?: string;
  imageUrl: string;
  co2Emission?: number;
  co2Note?: string;
  addonTotal: number;
  acriss?: string;
  gearType?: "automatic" | "manual";
};

export type PricingInput = {
  packageId: string;
  startDate: string;
  adults: number;
  children: number;
  infants: number;
  accommodationTier: string;
  roomType: RoomType;
  vehicleTier: string;
};

export type PricingResult = {
  perPersonDouble: number;
  subtotal: number;
  singleSupplement: number;
  vehicleAddon: number;
  total: number;
  deposit: number;
  currency: "ISK";
  travelerCount: number;
  vehicleLabel: string;
  roomTypeLabel: string;
};

export type AccommodationTier = {
  id: string;
  label: string;
  description: string;
  perPersonDouble: number;
  singleSupplementPerNight: number;
  nights: number;
  imageUrl: string;
  modalTitle: string;
  paragraphs: string[];
  galleryImages?: string[];
};

export type AgeBandRates = {
  childMultiplier: number;
  infantMultiplier: number;
};

export type SeasonalMultiplier = {
  months: number[];
  multiplier: number;
};

export type BookingDateRange = {
  min: string;
  max: string;
};

export type CorivoPricingBinding = {
  instanceId: string;
  packageTourId: number;
  classifications: Record<string, number>;
  vehicleItems: Record<string, number>;
  baseVehicleTier: string;
};

export type PricingConfig = {
  packageId: string;
  currency: "ISK";
  depositRate: number;
  occupancyBase: number;
  tiers: AccommodationTier[];
  vehicleTiers: VehicleTier[];
  ageBands: AgeBandRates;
  seasonalMultipliers?: SeasonalMultiplier[];
  bookingDateRange?: BookingDateRange;
  tripDurationDays?: number;
  minAdults?: number;
  accommodationIntro?: string;
  vehicleIntro?: string;
  corivo?: CorivoPricingBinding;
};

export type CorivoPricingConfig = PricingConfig & {
  corivo: CorivoPricingBinding;
};
