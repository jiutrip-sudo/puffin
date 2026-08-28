type TripAttractionGridProps = {
  attractions: { name: string; nameEn: string }[];
};

export function TripAttractionGrid({ attractions }: TripAttractionGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {attractions.map((spot) => (
        <div
          key={spot.nameEn}
          className="rounded-2xl border border-foreground/10 bg-background p-4 transition-colors hover:border-primary/30 hover:bg-primary-surface/15"
        >
          <p className="font-semibold text-foreground">{spot.name}</p>
          <p className="mt-1 text-xs text-foreground/55">{spot.nameEn}</p>
        </div>
      ))}
    </div>
  );
}
