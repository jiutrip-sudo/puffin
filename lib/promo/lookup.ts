import { getDynamicPromo } from "./dynamic";
import { findPromoDefinition, normalizePromoCode } from "./registry";
import type { PromoCodeDefinition } from "./types";

export type PromoDefinitionSource = "registry" | "dynamic";

export type ResolvedPromoLookup = {
  promo: PromoCodeDefinition;
  source: PromoDefinitionSource;
};

export async function lookupPromoDefinition(
  code: string,
): Promise<ResolvedPromoLookup | null> {
  const normalized = normalizePromoCode(code);
  if (!normalized) return null;

  const dynamic = await getDynamicPromo(normalized);
  if (dynamic) {
    const { createdAt: _createdAt, updatedAt: _updatedAt, ...promo } = dynamic;
    return { promo, source: "dynamic" };
  }

  const registry = findPromoDefinition(normalized);
  if (registry) {
    return { promo: registry, source: "registry" };
  }

  return null;
}
