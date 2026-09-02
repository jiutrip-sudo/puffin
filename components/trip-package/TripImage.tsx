import Image, { type ImageProps } from "next/image";
import { shouldBypassImageOptimization } from "@/lib/trip-image";

function resolveSrcString(src: ImageProps["src"]): string {
  return typeof src === "string" ? src : "";
}

export function TripImage({ src, unoptimized, ...props }: ImageProps) {
  return (
    <Image
      src={src}
      unoptimized={unoptimized ?? shouldBypassImageOptimization(resolveSrcString(src))}
      {...props}
    />
  );
}
