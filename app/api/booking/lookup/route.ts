import { NextResponse } from "next/server";
import { lookupLocalBooking } from "@/lib/booking/lookup-local-booking";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      confirmationCode?: string;
      email?: string;
    };

    const result = await lookupLocalBooking({
      confirmationCode: body.confirmationCode ?? "",
      email: body.email ?? "",
    });

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }

    return NextResponse.json({ booking: result.booking });
  } catch {
    return NextResponse.json(
      { error: "查詢訂單時發生錯誤，請稍後再試" },
      { status: 500 },
    );
  }
}
