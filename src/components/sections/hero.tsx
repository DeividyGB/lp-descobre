"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAppDownloadModal } from "@/components/app-download-modal-context";

export function Hero() {
  const { open } = useAppDownloadModal();

  return (
    <section className="relative w-full">
      <div className="flex w-full flex-col md:flex-row">

        <div className="flex w-full items-center justify-center px-6 py-20 md:w-[70%] md:px-12 md:py-28 lg:px-20">
          <div className="w-full max-w-4xl">
            <p className="animate-[hero-fade-up_0.7s_ease-out_0.1s_both] text-sm font-medium text-flare">
              Recrutamento sem enrolação
            </p>

            <h1 className="mt-6 max-w-4xl animate-[hero-fade-up_0.8s_ease-out_0.25s_both] text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl">
              O <span className="match-highlight">MATCH</span> CERTO ENTRE{" "}
              <span className="bg-[linear-gradient(90deg,#DC4D00,#FA8E12)] bg-clip-text text-transparent">
                TALENTOS E EMPRESAS!
              </span>
            </h1>

            <p className="mt-8 max-w-2xl animate-[hero-fade-up_0.8s_ease-out_0.4s_both] text-lg leading-relaxed text-paper-dim lg:text-xl">
              Empresas <span className="font-semibold text-paper">descobrem talentos</span>.
              Pessoas <span className="font-semibold text-paper">descobrem oportunidades</span>.
              Sem processo enrolado, sem precisar ter o currículo perfeito.
            </p>

            <div className="mt-12 flex animate-[hero-fade-up_0.8s_ease-out_0.55s_both] flex-col gap-4 sm:flex-row">
              <Button size="lg" className="btn-candidate gap-0" onClick={open}>
                Sou<span className="ml-1 font-extrabold">CANDIDATO</span>
              </Button>

              <Button size="lg" variant="outline" className="btn-company gap-0">
                Sou<span className="ml-1 font-extrabold">EMPRESA</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="hero-mockup-wrap relative w-full overflow-visible md:w-[30%]">
          <div className="hero-gradient-card absolute inset-0 animate-[hero-slide-in-right_0.9s_ease-out_0.2s_both]" />

          <Image
            src="/imagens/image-app-pc-hero.png"
            alt=""
            width={900}
            height={600}
            className="hero-section-image-pc-mobile animate-[hero-slide-in-right_0.9s_ease-out_0.35s_both]"
            priority
          />
        </div>

      </div>
    </section>
  );
}