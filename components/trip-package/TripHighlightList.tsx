type TripHighlightListProps = {
  highlights: string[];
};

export function TripHighlightList({ highlights }: TripHighlightListProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {highlights.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-2xl border border-foreground/10 bg-primary-surface/20 p-4"
        >
          <span
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/25 text-xs font-bold text-primary-dark"
            aria-hidden
          >
            ✓
          </span>
          <span className="text-sm leading-relaxed text-foreground/85">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
