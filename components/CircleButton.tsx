import Link from "next/link";

type CircleButtonProps = {
  href: string;
  children: React.ReactNode;
  lines?: [string, string];
  className?: string;
};

export function CircleButton({
  href,
  children,
  lines,
  className = "",
}: CircleButtonProps) {
  return (
    <Link href={href} className={`circle-button group ${className}`}>
      <span className="circle-button-ring" aria-hidden="true" />
      <span className="circle-button-face">
        {lines ? (
          <span className="flex flex-col items-center gap-1 text-[13px] leading-none md:text-sm">
            <span>{lines[0]}</span>
            <span>{lines[1]}</span>
          </span>
        ) : (
          <span className="px-2 text-[13px] leading-snug md:text-sm">{children}</span>
        )}
      </span>
    </Link>
  );
}
