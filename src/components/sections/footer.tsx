import { Wordmark } from "@/components/logo-mark";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <Wordmark />
        <p className="text-sm text-paper-dim">
          © {new Date().getFullYear()} Descobre. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
