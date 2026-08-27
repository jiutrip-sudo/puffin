import { AuroraOverlay } from "./AuroraOverlay";
import { HeroBackground } from "./HeroBackground";

type HeroMediaProps = {
  priority?: boolean;
};

export function HeroMedia({ priority = true }: HeroMediaProps) {
  return (
    <>
      <HeroBackground priority={priority} />
      <AuroraOverlay />
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-b from-black/30 via-black/10 to-black/50"
      />
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-r from-black/40 via-transparent to-transparent"
      />
    </>
  );
}
