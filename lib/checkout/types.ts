export type CheckoutStepId = 1 | 2 | 3 | 4 | 5;

export type CheckoutTravelerType = "ADULT" | "CHILD" | "INFANT";

/** 訂單成立後的付款方式（人工處理，不含線上刷卡） */
export type CheckoutPaymentMethod = "bank_transfer" | "cash";

export type CheckoutTravelerForm = {
  correlationId: number;
  type: CheckoutTravelerType;
  firstName: string;
  lastName: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  nationality: string;
  countryOfResidence: string;
  dateOfBirth: string;
};

/** 使用者於 Step 2 選擇的自選活動／一日遊 */
export type CheckoutExtraSelection = {
  packageItemId: number;
  productId: number;
  packageTourDay: number;
  departureStartTime: string;
  travelerCorrelationIds: number[];
};

/** 每間房的旅客與房型（Corivo roomTypeCategory） */
export type CheckoutRoomOccupancy = {
  adults: number;
  children: number;
  infants: number;
  roomTypeCategory: "TWIN" | "SINGLE" | "TRIPLE" | "DOUBLE";
};

export type CheckoutSession = {
  packageId: string;
  packageTitle: string;
  startDate: string;
  adults: number;
  children: number;
  infants: number;
  roomOccupancies: CheckoutRoomOccupancy[];
  accommodationTier: string;
  vehicleTier: string;
  preDays: number;
  postDays: number;
  promoCode: string;
  selectedExtras: CheckoutExtraSelection[];
  travelers: CheckoutTravelerForm[];
  specialRequests: string;
  agentName: string;
  acceptTerms: boolean;
  /** 是否一次付清全額；否則僅付訂金 */
  payFullAmount: boolean;
  paymentMethod: CheckoutPaymentMethod;
};

export const CHECKOUT_STEPS: Array<{ id: CheckoutStepId; label: string }> = [
  { id: 1, label: "套餐" },
  { id: 2, label: "活動" },
  { id: 3, label: "旅客資訊" },
  { id: 4, label: "付款方式" },
  { id: 5, label: "確認" },
];
