"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAppDownloadModal } from "@/components/app-download-modal-context";

export function Hero() {
  const { open } = useAppDownloadModal();

  return (
    // overflow-x-clip: corta o que passar da largura da tela SEM criar scroll container
    // (o eixo Y continua visível, então a imagem ainda pode "vazar" pra cima/baixo)
    <section className="relative w-full overflow-x-clip">
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex w-full items-center justify-center px-6 py-12 sm:py-16 md:w-[70%] md:px-12 md:py-28 lg:px-20">
          <div className="w-full max-w-4xl">
            <p className="animate-[hero-fade-up_0.7s_ease-out_0.1s_both] text-sm font-medium text-flare">
              Recrutamento sem enrolação
            </p>

            <h1 className="mt-5 max-w-4xl animate-[hero-fade-up_0.8s_ease-out_0.25s_both] text-[2.125rem] font-extrabold leading-[1.05] tracking-tight text-paper min-[360px]:text-[2.75rem] sm:mt-6 sm:text-6xl lg:text-7xl">
              O <span className="match-highlight">MATCH</span> CERTO ENTRE{" "}
              <span className="bg-[linear-gradient(90deg,#DC4D00,#FA8E12)] bg-clip-text text-transparent">
                TALENTOS E EMPRESAS!
              </span>
            </h1>

            <p className="mt-6 max-w-2xl animate-[hero-fade-up_0.8s_ease-out_0.4s_both] text-base leading-relaxed text-paper-dim sm:mt-8 sm:text-lg lg:text-xl">
              Empresas <span className="font-semibold text-paper">descobrem talentos</span>.
              Pessoas <span className="font-semibold text-paper">descobrem oportunidades</span>.
              Sem processo enrolado, sem precisar ter o currículo perfeito.
            </p>

            <div className="mt-10 flex animate-[hero-fade-up_0.8s_ease-out_0.55s_both] flex-col gap-4 sm:mt-12 sm:flex-row">
              <Button size="lg" className="btn-candidate gap-0" onClick={open}>
                Sou<span className="ml-1 font-extrabold">CANDIDATO</span>
              </Button>

              <Button size="lg" variant="outline" className="btn-company gap-0">
                <a
                  href="http://descobre.app.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sou<span className="ml-1 font-extrabold">EMPRESA</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/*
          Mobile: o wrapper vira flex centralizado e corta só o eixo X.
          A imagem pode ser MAIOR que a tela (max-w-none) e, como o pai
          usa justify-center, ela sobra igualmente dos dois lados e é cortada
          na borda da tela em vez de gerar scroll horizontal.
        */}
        <div className="hero-mockup-wrap relative w-full max-md:flex! max-md:min-h-[clamp(300px,85vw,500px)]! max-md:items-center! max-md:justify-center! max-md:overflow-x-clip md:w-[30%] md:overflow-visible">
          <div className="hero-gradient-card absolute inset-0 animate-[hero-fade-up_0.9s_ease-out_0.2s_both] max-md:absolute! max-md:inset-0! max-md:h-full! max-md:w-full! max-md:rounded-[40px_40px_0_0]! md:animate-[hero-slide-in-right_0.9s_ease-out_0.2s_both]" />

          <Image
            src="/imagens/image-app-pc-hero.png"
            alt=""
            width={900}
            height={600}
            sizes="(max-width: 767px) 125vw, 30vw"
            className="hero-section-image-pc-mobile animate-[hero-fade-up_0.9s_ease-out_0.35s_both] max-md:relative! max-md:z-10 max-md:m-0! max-md:h-auto! max-md:w-[min(125vw,44rem)]! max-md:max-w-none! max-md:shrink-0! md:animate-[hero-slide-in-right_0.9s_ease-out_0.35s_both]"
            priority
          />
        </div>
      </div>
    </section>
  );
}