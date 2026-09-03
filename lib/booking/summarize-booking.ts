import type { LocalBookingRecord } from "./types";

export type BookingListEntry = {
  id: string;
  confirmationCode: string;
  createdAt: string;
  packageId: string;
  status: LocalBookingRecord["status"];
  packageTitle: string;
  leadEmail: string;
  leadName: string;
  startDate: string;
  total: number;
  amountDue: number;
  promoCode: string | null;
};

export function summarizeBooking(record: LocalBookingRecord): BookingListEntry {
  const lead =
    record.session.travelers.find((traveler) => traveler.type === "ADULT") ??
    record.session.travelers[0];

  return {
    id: record.id,
    confirmationCode: record.confirmationCode,
    createdAt: record.createdAt,
    packageId: record.packageId,
    status: record.status,
    packageTitle: record.session.packageTitle,
    leadEmail: lead?.email?.trim() ?? "",
    leadName: [lead?.firstName, lead?.lastName].filter(Boolean).join(" ").trim(),
    startDate: record.session.startDate,
    total: record.pricing.total,
    amountDue: record.pricing.amountDue,
    promoCode:
      record.pricing.promoCode ?? record.session.promoCode?.trim() ?? null,
  };
}
