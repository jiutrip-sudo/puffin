import { WinterRoutePicker } from "@/components/WinterRoutePicker";

type WinterSelfDriveRoutePickerProps = {
  duration: string;
};

/** @deprecated 請改用 WinterRoutePicker */
export function WinterSelfDriveRoutePicker({
  duration,
}: WinterSelfDriveRoutePickerProps) {
  return <WinterRoutePicker duration={duration} variant="self-drive" />;
}
