"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/logo-mark";

const links = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para empresas", href: "#empresas" },
  // { label: "Para candidatos", href: "#candidatos" },
];

const loginHref = "https://descobre.app.br";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline/60 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto grid h-20 w-full grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:h-24 lg:px-8 xl:px-49">
        <div className="flex items-center">
          <Wordmark />
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative whitespace-nowrap px-4 py-2 text-sm font-medium text-paper-dim transition-colors hover:text-paper"
            >
              {link.label}

              <span
                className="pointer-events-none absolute inset-x-4 -bottom-[1px] h-[2px] origin-center scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundImage: "var(--gradient-flare)" }}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end lg:flex">
          <a
            href={loginHref}
            className="whitespace-nowrap rounded-full border border-hairline px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-flare/60 hover:text-flare"
          >
            Entrar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-paper transition-colors hover:border-flare/60 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-hairline/60 bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-paper-dim transition-colors hover:bg-white/5 hover:text-paper"
            >
              {link.label}
            </a>
          ))}

          <a
            href={loginHref}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg border border-hairline px-3 py-3 text-center text-sm font-medium text-paper transition-colors hover:border-flare/60 hover:text-flare"
          >
            Entrar
          </a>
        </nav>
      </div>
    </header>
  );
}