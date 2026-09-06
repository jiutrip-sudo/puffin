import { CatalogIndexShell } from "@/components/CatalogIndexShell";

type TripsCatalogShellProps = {
  activeLabel: string;
  title: string;
  description: string;
  eyebrow?: string;
  variant?: "default" | "compact";
  children: React.ReactNode;
};

export function TripsCatalogShell(props: TripsCatalogShellProps) {
  return (
    <CatalogIndexShell
      {...props}
      wide
      eyebrow={props.eyebrow ?? "ICELAND TRIPS"}
    />
  );
}
