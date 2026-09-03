import { NextResponse } from "next/server";
import { signOut } from "@/lib/admin/auth/auth";

export async function POST() {
  await signOut({ redirect: false });
  return NextResponse.json({ ok: true });
}
