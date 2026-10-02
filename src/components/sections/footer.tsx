import { Wordmark } from "@/components/logo-mark";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 max-md:pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <Wordmark />
        <p className="text-sm leading-relaxed text-paper-dim">
          © {new Date().getFullYear()} Descobre. Todos os direitos reservados.
        </p>
        <Link
          href="/politica-de-privacidade"
          className="text-sm font-medium text-paper-dim transition-colors hover:text-flare"
        >
          Política de Privacidade
        </Link>
      </div>
    </footer>
  );
}