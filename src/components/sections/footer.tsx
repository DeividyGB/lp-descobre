import { Wordmark } from "@/components/logo-mark";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 max-md:pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
      <div className="flex flex-col items-center gap-4 text-center">
        <Wordmark />

        <p className="text-sm leading-relaxed text-paper-dim">
          © {new Date().getFullYear()} Descobre. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="/politica-de-privacidade"
            className="text-sm font-medium text-paper-dim transition-colors hover:text-flare"
          >
            • Política de Privacidade
          </Link>

          <Link
            href="/termos-de-uso"
            className="text-sm font-medium text-paper-dim transition-colors hover:text-flare"
          >
            • Termos de uso
          </Link>
        </div>
      </div>
    </footer>
  );
}