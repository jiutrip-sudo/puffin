type TripInclusionsPanelProps = {
  included: string[];
  excluded: string[];
};

export function TripInclusionsPanel({
  included,
  excluded,
}: TripInclusionsPanelProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
        <h3 className="text-sm font-bold text-foreground">費用包含</h3>
        <ul className="mt-3 space-y-2">
          {included.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-relaxed text-foreground/80"
            >
              <span className="text-emerald-600" aria-hidden>+</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-foreground/15 bg-foreground/5 p-5">
        <h3 className="text-sm font-bold text-foreground">費用不含</h3>
        <ul className="mt-3 space-y-2">
          {excluded.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-relaxed text-foreground/80"
            >
              <span className="text-foreground/40" aria-hidden>−</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
