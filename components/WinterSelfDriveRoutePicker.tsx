import { CircleButton } from "@/components/CircleButton";
import { getIcelandSelfDriveWinterRouteOptions } from "@/lib/trip-options";

type WinterSelfDriveRoutePickerProps = {
  duration: string;
};

export function WinterSelfDriveRoutePicker({
  duration,
}: WinterSelfDriveRoutePickerProps) {
  const routeOptions = getIcelandSelfDriveWinterRouteOptions(duration);

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
