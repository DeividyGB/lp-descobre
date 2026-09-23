"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/logo-mark";

const links = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para empresas", href: "#empresas" },
  // { label: "Para candidatos", href: "#candidatos" },
];

const loginHref = "https://app.seudominio.com/login"; // ajuste para a URL do sistema

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline/60 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto grid h-[6rem] max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6">
        <Wordmark />

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-medium text-paper-dim transition-colors hover:text-paper"
            >
              {link.label}
              <span
                className="pointer-events-none absolute inset-x-4 -bottom-[1px] h-[2px] origin-center scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundImage: "var(--gradient-flare)" }}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end md:flex">
          <a
            href={loginHref}
            className="rounded-full border border-hairline px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-flare/60 hover:text-flare"
          >
            Entrar
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-paper transition-colors hover:border-flare/60 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-hairline/60 bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-paper-dim transition-colors hover:bg-white/5 hover:text-paper"
            >
              {link.label}
            </a>
          ))}
          <a
            href={loginHref}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg border border-hairline px-3 py-2.5 text-center text-sm font-medium text-paper transition-colors hover:border-flare/60 hover:text-flare"
          >
            Entrar
          </a>
        </nav>
      </div>
    </header>
  );
}