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
  amountDueFormatted: string;
  amountDueLabel: string;
  leadTravelerName: string;
  leadTravelerEmail: string;
  leadTravelerPhone: string;
  paymentInstructions: ManualPaymentInstructions;
  travelers: CheckoutConfirmationTravelerLine[];
};

export type CheckoutConfirmationEmailContent = {
  subject: string;
  html: string;
  text: string;
};
