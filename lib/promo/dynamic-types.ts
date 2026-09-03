import type { PromoCodeDefinition } from "./types";

export type DynamicPromoRecord = PromoCodeDefinition & {
  createdAt: string;
  updatedAt: string;
};
