import { NextResponse } from "next/server";
import {
  createAdminPromo,
  listAdminPromos,
} from "@/lib/admin/promo-admin";

export async function GET() {
  try {
    const promos = await listAdminPromos();
    return NextResponse.json({ promos });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "讀取優惠碼用量失敗";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const promo = await createAdminPromo(body);
    return NextResponse.json({ promo }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "建立優惠碼失敗";
    const status =
      error instanceof Error && error.message.includes("已存在") ? 409 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
