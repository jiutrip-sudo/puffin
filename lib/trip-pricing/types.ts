export type AvailabilityStatus =
  | "AVAILABLE"
  | "UNAVAILABLE"
  | "SOLD_OUT"
  | "FEW_REMAINING";

export type TierAvailabilityMap = Record<string, AvailabilityStatus>;

export type TripAvailabilityResult = {
  accommodation: TierAvailabilityMap;
  vehicles: TierAvailabilityMap;
};

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
  /** 可乘人數 */
  seats?: number;
  /** 車門數 */
  doors?: number;
  /** 可放行李件數（大行李箱） */
  luggage?: number;
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
  /** Corivo packageItemId，用於 checkout 自選活動加價 */
  extraPackageItemIds?: number[];
  /** Checkout 自訂每間房配置（覆寫預設 defaultRoomConfiguration） */
  roomSlots?: Array<{
    adults: number;
    children: number;
    roomTypeCategory: "TWIN" | "SINGLE" | "TRIPLE" | "DOUBLE";
  }>;
  /** Corivo 優惠碼 */
  promoCode?: string;
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
  /** Corivo 原價（折前）；有優惠碼時與 total 不同 */
  corivoTotal?: number;
  /** 已套用的優惠碼 */
  promoCodeApplied?: string;
  /** 優惠碼折抵金額（ISK） */
  promoDiscount?: number;
  /** 優惠碼無效或無折扣 */
  promoCodeInvalid?: boolean;
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
  /** 成人＋兒童＋嬰兒合計上限 */
  maxTravelers?: number;
  /** 嬰兒人數上限（仍受 maxTravelers 約束） */
  maxInfants?: number;
  accommodationIntro?: string;
  vehicleIntro?: string;
  corivo?: CorivoPricingBinding;
};

export type CorivoPricingConfig = PricingConfig & {
  corivo: CorivoPricingBinding;
};
