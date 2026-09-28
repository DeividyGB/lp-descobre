"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAppDownloadModal } from "../app-download-modal-context";

export function FinalCta() {
  const { open } = useAppDownloadModal();

  return (
    <section className="bg-ink px-4 py-20 max-md:py-12 sm:px-6">
      <div className="mx-auto max-w-[1650px]">
        <div className="final-cta-shell relative overflow-hidden rounded-[40px] bg-surface max-md:rounded-[28px]">

          <div className="grid md:grid-cols-2 md:items-center">

            <div className="card-glass final-cta-panel relative z-10 m-6 flex flex-col items-start gap-8 rounded-[32px] max-sm:m-3 sm:m-10 md:m-16">
              <Image
                src="/icones/DESCOBRE-ICON.svg"
                alt="Descobre"
                width={40}
                height={40}
                className="final-cta-logo max-md:w-[clamp(140px,60cqw,220px)]!"
              />

              <h2 className="final-cta-heading text-paper">
                <span className="block">Seu talento.</span>
                <span className="block">Nossa missão!</span>
              </h2>

              <div className="flex flex-wrap items-center gap-4 max-sm:w-full max-sm:flex-col max-sm:items-stretch">
                <Button size="lg" className="btn-candidate rounded-full max-sm:w-full" onClick={open}>
                  Sou <span className="font-extrabold">candidato</span>
                </Button>
                <Button size="lg" variant="outline" className="btn-company rounded-full max-sm:w-full">
                  <a
                    href="http://descobre.app.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    Sou <span className="font-extrabold">empresa</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="final-cta-photo-wrap relative max-md:h-[clamp(380px,120vw,560px)] max-md:overflow-hidden">
              <Image
                src="/imagens/background-mobile.png"
                alt=""
                width={1100}
                height={760}
                className="block h-auto w-full max-md:h-full max-md:object-cover"
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
                className="final-cta-phone 6 max-md:left-0! max-md:right-0! max-md:mx-auto! max-md:h-[92%]! max-md:w-auto!"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}