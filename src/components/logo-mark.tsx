import { cn } from "@/lib/utils";
import Image from "next/image";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
    >
      <path
        d="M16 2C9.4 2 4 7.2 4 13.6 4 22 16 30 16 30s12-8 12-16.4C28 7.2 22.6 2 16 2Z"
        fill="var(--color-flare)"
      />
      <circle cx="16" cy="13" r="5.5" fill="var(--color-ink)" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/icones/DESCOBRE-ICON.svg"
        alt="Descobre"
        width={180}
        height={180}
        className="object-contain"
      />
    </span>
  );
}
