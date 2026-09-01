import { NextResponse } from "next/server";
import { PROMO_CODES } from "@/lib/promo/registry";
import { getPromoUseCount } from "@/lib/promo/promo-uses";

export async function GET() {
  try {
    const promos = await Promise.all(
      PROMO_CODES.map(async (promo) => {
        const used = await getPromoUseCount(promo.code);
        return {
          code: promo.code,
          label: promo.label,
          type: promo.type,
          value: promo.value,
          active: promo.active,
          maxUses: promo.maxUses ?? null,
          used,
          remaining:
            promo.maxUses != null ? Math.max(0, promo.maxUses - used) : null,
          validFrom: promo.validFrom ?? null,
          validUntil: promo.validUntil ?? null,
        };
      }),
    );

    return NextResponse.json({ promos });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "讀取優惠碼用量失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
