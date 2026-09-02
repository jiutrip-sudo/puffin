"use client";

import { CircleButton } from "@/components/CircleButton";
import {
  getIcelandGroupWinterRouteOptions,
  getIcelandSelfDriveWinterRouteOptions,
} from "@/lib/trip-options";
import { localizeTripOptions } from "@/lib/i18n/trip-options";
import { useSiteLocale } from "@/components/SiteLocaleProvider";

type WinterRoutePickerProps = {
  duration: string;
  variant: "self-drive" | "group";
};

export function WinterRoutePicker({
  duration,
  variant,
}: WinterRoutePickerProps) {
  const locale = useSiteLocale();
  const routeOptions = localizeTripOptions(
    variant === "group"
      ? getIcelandGroupWinterRouteOptions(duration)
      : getIcelandSelfDriveWinterRouteOptions(duration),
    locale,
  );

  return (
    <div className="flex items-center justify-center gap-10 md:gap-16">
      {routeOptions.map((routeOption) => (
        <CircleButton key={routeOption.id} href={routeOption.href}>
          {routeOption.label}
        </CircleButton>
      ))}
    </div>
  );
}
