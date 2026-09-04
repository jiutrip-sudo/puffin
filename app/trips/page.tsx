import { redirect } from "next/navigation";
import { getRequestLocale } from "@/lib/i18n/server";
import { localePath } from "@/lib/i18n/paths";

export default async function TripsRedirectPage() {
  const locale = await getRequestLocale();
  redirect(localePath("/iceland", locale));
}
