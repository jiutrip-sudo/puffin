"use client";

import { CircleButton } from "@/components/CircleButton";
import { getIcelandGroupSummerRouteOptions } from "@/lib/trip-options";
import { localizeTripOptions } from "@/lib/i18n/trip-options";
import { useSiteLocale } from "@/components/SiteLocaleProvider";

type SummerGroupRoutePickerProps = {
  duration: string;
};

export function SummerGroupRoutePicker({
  duration,
}: SummerGroupRoutePickerProps) {
  const locale = useSiteLocale();
  const routeOptions = localizeTripOptions(
    getIcelandGroupSummerRouteOptions(duration),
    locale,
  );

  return (
    <div className="flex items-center justify-center gap-10 md:gap-16">
      {routeOptions.map((routeOption) => (
        <CircleButton
          key={routeOption.id}
          href={routeOption.href}
          lines={routeOption.lines}
        >
          {routeOption.label}
        </CircleButton>
      ))}
    </div>
  );
}
