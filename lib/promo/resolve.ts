import type { PromoCodeDefinition } from "./types";
import type { PromoOperationalOverride } from "./overrides";

export function resolvePromoDefinition(
  base: PromoCodeDefinition,
  override: PromoOperationalOverride | null,
): PromoCodeDefinition {
  if (!override) return base;

  return {
    ...base,
    active: override.active ?? base.active,
    maxUses:
      override.maxUses !== undefined
        ? override.maxUses ?? undefined
        : base.maxUses,
    validUntil:
      override.validUntil !== undefined
        ? override.validUntil ?? undefined
        : base.validUntil,
  };
}
