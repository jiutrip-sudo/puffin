import { NextResponse } from "next/server";
import {
  deleteAdminDynamicPromo,
  getRegistryPromo,
  listAdminPromos,
  updateAdminDynamicPromo,
} from "@/lib/admin/promo-admin";
import { getDynamicPromo } from "@/lib/promo/dynamic";
import { setPromoOverride } from "@/lib/promo/overrides";
import { normalizePromoCode } from "@/lib/promo/registry";

type RouteParams = {
  params: Promise<{ code: string }>;
};

type RegistryPatchBody = {
  active?: boolean;
  maxUses?: number | null;
  validUntil?: string | null;
};

function isValidDateString(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function parseRegistryPatch(body: RegistryPatchBody): RegistryPatchBody {
  const patch: RegistryPatchBody = {};

  if (body.active !== undefined) {
    if (typeof body.active !== "boolean") {
      throw new Error("active 須為布林值");
    }
    patch.active = body.active;
  }

  if (body.maxUses !== undefined) {
    if (body.maxUses === null) {
      patch.maxUses = null;
    } else if (
      typeof body.maxUses !== "number" ||
      !Number.isInteger(body.maxUses) ||
      body.maxUses < 0
    ) {
      throw new Error("maxUses 須為非負整數或 null");
    } else {
      patch.maxUses = body.maxUses;
    }
  }

  if (body.validUntil !== undefined) {
    if (body.validUntil === null) {
      patch.validUntil = null;
    } else if (
      typeof body.validUntil !== "string" ||
      !isValidDateString(body.validUntil)
    ) {
      throw new Error("validUntil 須為 YYYY-MM-DD 或 null");
    } else {
      patch.validUntil = body.validUntil;
    }
  }

  return patch;
}

export async function PATCH(request: Request, { params }: RouteParams) {
  try {
    const { code: rawCode } = await params;
    const code = normalizePromoCode(rawCode);
    const body = (await request.json()) as Record<string, unknown>;
    const dynamic = await getDynamicPromo(code);

    if (dynamic) {
      const merged = {
        code: dynamic.code,
        label: dynamic.label,
        type: dynamic.type,
        value: dynamic.value,
        active: dynamic.active,
        categories: dynamic.categories,
        packageIds: dynamic.packageIds,
        validFrom: dynamic.validFrom ?? null,
        validUntil: dynamic.validUntil ?? null,
        departureFrom: dynamic.departureFrom ?? null,
        departureUntil: dynamic.departureUntil ?? null,
        minTravelers: dynamic.minTravelers ?? null,
        maxUses: dynamic.maxUses ?? null,
        minOrderTotal: dynamic.minOrderTotal ?? null,
        perCustomerLimit: dynamic.perCustomerLimit ?? null,
        ...body,
      };
      const promo = await updateAdminDynamicPromo(code, merged);
      return NextResponse.json({ promo });
    }

    const base = getRegistryPromo(code);
    if (!base) {
      return NextResponse.json({ error: "找不到優惠碼" }, { status: 404 });
    }

    const patch = parseRegistryPatch(body as RegistryPatchBody);
    if (
      patch.active === undefined &&
      patch.maxUses === undefined &&
      patch.validUntil === undefined
    ) {
      return NextResponse.json({ error: "未提供可更新欄位" }, { status: 400 });
    }

    await setPromoOverride(code, patch);
    const promos = await listAdminPromos();
    const promo = promos.find((entry) => entry.code === code);
    return NextResponse.json({ promo });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "更新優惠碼失敗";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  try {
    const { code: rawCode } = await params;
    const code = normalizePromoCode(rawCode);
    const dynamic = await getDynamicPromo(code);

    if (!dynamic) {
      return NextResponse.json(
        { error: "僅可刪除後台建立的優惠碼" },
        { status: 400 },
      );
    }

    await deleteAdminDynamicPromo(code);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "刪除優惠碼失敗";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
