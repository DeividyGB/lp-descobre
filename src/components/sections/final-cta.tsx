"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-ink px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-[1650px]">
        <div className="final-cta-shell relative overflow-hidden rounded-[40px] bg-surface">

          <div className="grid md:grid-cols-2 md:items-center">

            {/* Card de texto — flui normalmente, tamanho definido só pelo
                próprio conteúdo, centralizado verticalmente na linha */}
            <div className="card-glass final-cta-panel relative z-10 m-6 flex flex-col items-start gap-8 rounded-[32px] sm:m-10 md:m-16">
              <Image
                src="/icones/DESCOBRE-ICON.svg"
                alt="Descobre"
                width={40}
                height={40}
                className="final-cta-logo"
              />

              <h2 className="final-cta-heading text-paper">
                <span className="block">Seu talento.</span>
                <span className="block">Nossa missão!</span>
              </h2>

              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="btn-candidate rounded-full">
                  Sou <span className="font-extrabold">candidato</span>
                </Button>
                <Button size="lg" variant="outline" className="btn-company rounded-full">
                  Sou <span className="font-extrabold">empresa</span>
                </Button>
              </div>
            </div>

            <div className="final-cta-photo-wrap relative">
              <Image
                src="/imagens/background-mobile.png"
                alt=""
                width={1100}
                height={760}
                className="block h-auto w-full"
                priority
              />

              <Image
                src="/imagens/asterisco-mockup.png"
                alt=""
                width={300}
                height={300}
                className="final-cta-asterisk"
                aria-hidden
              />

              <Image
                src="/imagens/mockup-celular-final-cta.png"
                alt=""
                width={900}
                height={1800}
                className="final-cta-phone 6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}