import { CatalogIndexShell } from "@/components/CatalogIndexShell";

type GuidesIndexShellProps = {
  activeLabel: string;
  title: string;
  description: string;
  eyebrow?: string;
  variant?: "default" | "compact";
  children: React.ReactNode;
};

export function GuidesIndexShell(props: GuidesIndexShellProps) {
  return (
    <CatalogIndexShell
      {...props}
      eyebrow={props.eyebrow ?? "ICELAND GUIDES"}
    />
  );
}
