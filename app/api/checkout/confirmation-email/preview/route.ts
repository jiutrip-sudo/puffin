import { NextResponse } from "next/server";
import { buildCheckoutConfirmationEmailData } from "@/lib/checkout/build-confirmation-email-data";
import {
  buildCustomerConfirmationEmail,
  buildStaffBookingNotificationEmail,
} from "@/lib/checkout/confirmation-email-template";
import {
  buildCheckoutEmailPreviewSession,
  parsePreviewPayFullAmount,
  parsePreviewPaymentMethod,
} from "@/lib/checkout/preview-email-session";
import type { CheckoutSession } from "@/lib/checkout/types";
import { calculateCorivoTripPrice } from "@/lib/trip-pricing/corivo-calculate";
import { getPricingConfig, usesCorivoPricing } from "@/lib/trip-pricing/fetch";

type PreviewRequest = CheckoutSession & {
  bookingId?: string;
  confirmationCode?: string | null;
};

type PreviewVariant = "customer" | "staff";

/** 預覽用：Corivo 計價失敗時仍顯示版型 */
const PREVIEW_FALLBACK_TOTAL_ISK = 189372;

async function buildPreviewPayload(
  session: CheckoutSession,
  booking: { bookingId: string; confirmationCode: string },
) {
  const config = getPricingConfig(session.packageId);
  if (!config || !usesCorivoPricing(config) || !config.corivo) {
    throw new Error(`找不到套餐設定（packageId: ${session.packageId ?? "未設定"}）`);
  }

  const corivoConfig = { ...config, corivo: config.corivo };
  const extraPackageItemIds = session.selectedExtras.map(
    (extra) => extra.packageItemId,
  );

  let total = PREVIEW_FALLBACK_TOTAL_ISK;
  try {
    const pricing = await calculateCorivoTripPrice(corivoConfig, {
      packageId: session.packageId,
      startDate: session.startDate,
      adults: session.adults,
      children: session.children,
      infants: session.infants,
      accommodationTier: session.accommodationTier,
      roomType: "double",
      vehicleTier: session.vehicleTier,
      extraPackageItemIds:
        extraPackageItemIds.length > 0 ? extraPackageItemIds : undefined,
    });
    total = pricing.total;
  } catch {
    // 預覽模式：計價失敗時用示範金額，仍可檢視 HTML 版型
  }

  const emailData = buildCheckoutConfirmationEmailData(
    session,
    corivoConfig,
    booking,
    total,
  );

  return {
    data: emailData,
    customer: buildCustomerConfirmationEmail(emailData),
    staff: buildStaffBookingNotificationEmail(emailData),
  };
}

/**
 * 瀏覽器預覽：GET 直接回傳 HTML。
 * 例：/api/checkout/confirmation-email/preview?variant=customer&paymentMethod=bank_transfer
 */
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const variant = (url.searchParams.get("variant") ?? "customer") as PreviewVariant;
    const paymentMethod = parsePreviewPaymentMethod(
      url.searchParams.get("paymentMethod"),
    );
    const payFullAmount = parsePreviewPayFullAmount(
      url.searchParams.get("payFullAmount"),
    );
    const packageIdParam = url.searchParams.get("packageId");

    const session = buildCheckoutEmailPreviewSession({
      ...(packageIdParam ? { packageId: packageIdParam } : {}),
      paymentMethod,
      payFullAmount,
    });

    if (!session) {
      return NextResponse.json({ error: "無法建立預覽資料" }, { status: 404 });
    }

    const payload = await buildPreviewPayload(session, {
      bookingId: "preview-booking-id",
      confirmationCode: "PREVIEW-001",
    });

    const content =
      variant === "staff" ? payload.staff : payload.customer;

    return new NextResponse(content.html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "預覽確認信時發生錯誤";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

/**
 * POST 預覽：回傳 JSON（含 html / text），不發信、不建立訂單。
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as PreviewRequest;

    if (!body.packageId || !body.startDate) {
      return NextResponse.json({ error: "缺少必要參數" }, { status: 400 });
    }

    const payload = await buildPreviewPayload(body, {
      bookingId: body.bookingId ?? "preview-booking-id",
      confirmationCode: body.confirmationCode ?? "PREVIEW-001",
    });

    return NextResponse.json(payload);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "預覽確認信時發生錯誤";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
