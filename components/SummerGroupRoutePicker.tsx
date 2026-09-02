import { CircleButton } from "@/components/CircleButton";
import { getIcelandGroupSummerRouteOptions } from "@/lib/trip-options";

type SummerGroupRoutePickerProps = {
  duration: string;
};

export function SummerGroupRoutePicker({
  duration,
}: SummerGroupRoutePickerProps) {
  const routeOptions = getIcelandGroupSummerRouteOptions(duration);

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
