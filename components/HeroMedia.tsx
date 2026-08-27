import { HeroBackground } from "./HeroBackground";
import { HeroPopOverlay } from "./HeroPopOverlay";

type HeroMediaProps = {
  priority?: boolean;
};

export function HeroMedia({ priority = true }: HeroMediaProps) {
  return (
    <>
      <HeroBackground priority={priority} />
      <HeroPopOverlay />
    </>
  );
}
