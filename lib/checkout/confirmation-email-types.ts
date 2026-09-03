import type { ManualPaymentInstructions } from "./manual-payment";

export type CheckoutConfirmationTravelerLine = {
  name: string;
  typeLabel: string;
};

export type CheckoutConfirmationEmailData = {
  packageTitle: string;
  startDate: string;
  endDate: string;
  tripDays: number;
  accommodationLabel: string;
  vehicleLabel: string;
  adults: number;
  children: number;
  infants: number;
  selectedExtrasCount: number;
  confirmationCode: string | null;
  bookingId: string;
  paymentMethodLabel: string;
  payFullAmount: boolean;
  totalAmountFormatted: string;
  corivoTotalFormatted: string | null;
  supplierTotalFormatted: string | null;
  retailTotalFormatted: string | null;
  promoCode: string | null;
  promoDiscountFormatted: string | null;
  amountDueFormatted: string | null;
  amountDueLabel: string;
  leadTravelerName: string;
  leadTravelerEmail: string;
  leadTravelerPhone: string;
  paymentInstructions: ManualPaymentInstructions | null;
  travelers: CheckoutConfirmationTravelerLine[];
  /** 新單預設 true：僅通知已收到申請，不含匯款說明 */
  awaitingSupplier: boolean;
  corivoPackageTourId?: number;
  fxDisclaimer?: string;
};

export type CheckoutConfirmationEmailContent = {
  subject: string;
  html: string;
  text: string;
};
