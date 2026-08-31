import type { CheckoutTravelerForm } from "./types";

export function emptyTravelerForms(
  adults: number,
  children: number,
  infants: number,
): CheckoutTravelerForm[] {
  const forms: CheckoutTravelerForm[] = [];
  let correlationId = 1;

  for (let i = 0; i < adults; i += 1) {
    forms.push({
      correlationId,
      type: "ADULT",
      firstName: "",
      lastName: "",
      email: "",
      phoneCountryCode: "+886",
      phoneNumber: "",
      nationality: "",
      countryOfResidence: "",
      dateOfBirth: "",
    });
    correlationId += 1;
  }

  for (let i = 0; i < children; i += 1) {
    forms.push({
      correlationId,
      type: "CHILD",
      firstName: "",
      lastName: "",
      email: "",
      phoneCountryCode: "",
      phoneNumber: "",
      nationality: "",
      countryOfResidence: "",
      dateOfBirth: "",
    });
    correlationId += 1;
  }

  for (let i = 0; i < infants; i += 1) {
    forms.push({
      correlationId,
      type: "INFANT",
      firstName: "",
      lastName: "",
      email: "",
      phoneCountryCode: "",
      phoneNumber: "",
      nationality: "",
      countryOfResidence: "",
      dateOfBirth: "",
    });
    correlationId += 1;
  }

  return forms;
}

export function syncTravelerForms(
  existing: CheckoutTravelerForm[],
  adults: number,
  children: number,
  infants: number,
): CheckoutTravelerForm[] {
  const fresh = emptyTravelerForms(adults, children, infants);

  const adultsExisting = existing.filter((t) => t.type === "ADULT");
  const childrenExisting = existing.filter((t) => t.type === "CHILD");
  const infantsExisting = existing.filter((t) => t.type === "INFANT");

  return fresh.map((traveler) => {
    let source: CheckoutTravelerForm | undefined;
    if (traveler.type === "ADULT") {
      source = adultsExisting.find((t) => t.correlationId === traveler.correlationId);
      if (!source) {
        const index = fresh
          .slice(0, fresh.indexOf(traveler))
          .filter((t) => t.type === "ADULT").length;
        source = adultsExisting[index];
      }
    } else if (traveler.type === "CHILD") {
      const index = fresh
        .slice(0, fresh.indexOf(traveler))
        .filter((t) => t.type === "CHILD").length;
      source = childrenExisting[index];
    } else {
      const index = fresh
        .slice(0, fresh.indexOf(traveler))
        .filter((t) => t.type === "INFANT").length;
      source = infantsExisting[index];
    }

    if (!source) return traveler;

    return {
      ...traveler,
      firstName: source.firstName,
      lastName: source.lastName,
      email: source.email,
      phoneCountryCode: source.phoneCountryCode || traveler.phoneCountryCode,
      phoneNumber: source.phoneNumber,
      nationality: source.nationality,
      countryOfResidence: source.countryOfResidence,
      dateOfBirth: source.dateOfBirth,
    };
  });
}
