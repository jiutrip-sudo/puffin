import type { CheckoutTravelerForm } from "./types";

export type TravelerFieldKey =
  | "firstName"
  | "lastName"
  | "email"
  | "phoneNumber"
  | "countryOfResidence";

export type TravelerFieldErrors = Record<
  number,
  Partial<Record<TravelerFieldKey, string>>
>;

function isLeadAdult(traveler: CheckoutTravelerForm): boolean {
  return traveler.type === "ADULT" && traveler.correlationId === 1;
}

export function validateTravelerForms(
  travelers: CheckoutTravelerForm[],
): TravelerFieldErrors {
  const errors: TravelerFieldErrors = {};

  for (const traveler of travelers) {
    const fieldErrors: Partial<Record<TravelerFieldKey, string>> = {};

    if (!traveler.firstName.trim()) {
      fieldErrors.firstName = "必填欄位";
    }
    if (!traveler.lastName.trim()) {
      fieldErrors.lastName = "必填欄位";
    }

    if (isLeadAdult(traveler)) {
      if (!traveler.email.trim()) {
        fieldErrors.email = "必填欄位";
      }
      if (!traveler.phoneNumber.trim()) {
        fieldErrors.phoneNumber = "必填欄位";
      }
      if (!traveler.countryOfResidence.trim()) {
        fieldErrors.countryOfResidence = "必填欄位";
      }
    }

    if (Object.keys(fieldErrors).length > 0) {
      errors[traveler.correlationId] = fieldErrors;
    }
  }

  return errors;
}

export function hasTravelerFormErrors(errors: TravelerFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function formatTravelerPhoneNumber(traveler: CheckoutTravelerForm): string {
  const digits = traveler.phoneNumber.replace(/\D/g, "");
  if (!digits) return "";
  const code = traveler.phoneCountryCode.trim();
  if (!code) return digits;
  return `${code}${digits}`;
}
