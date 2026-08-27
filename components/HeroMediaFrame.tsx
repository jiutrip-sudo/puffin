type HeroMediaFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeroMediaFrame({
  children,
  className = "",
}: HeroMediaFrameProps) {
  return (
    <div className={`hero-media-frame ${className}`.trim()}>{children}</div>
  );
}
