import { Wordmark } from "@/components/logo-mark";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para empresas", href: "#empresas" },
  { label: "Para candidatos", href: "#candidatos" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline/60 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-paper-dim transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button size="sm" variant="outline">
          Entrar
        </Button>
      </div>
    </header>
  );
}
