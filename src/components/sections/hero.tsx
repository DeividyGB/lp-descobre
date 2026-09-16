import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full">
      <div className="flex w-full flex-col md:flex-row">

        {/* ESQUERDA */}
        <div className="flex w-full items-center justify-center px-6 py-20 md:w-[70%] md:px-12 md:py-28 lg:px-20">
          <div className="w-full max-w-4xl">
            <p className="text-sm font-medium text-flare">
              Recrutamento sem enrolação
            </p>

            <h1 className="mt-6 max-w-4xl text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl">
              O <span className="match-highlight">MATCH</span> CERTO{" "}
              <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#DC4D00,#FA8E12)]">
                TALENTOS E EMPRESAS!
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-dim lg:text-xl">
              Empresas descobrem talentos. Pessoas descobrem oportunidades.
              Sem processo enrolado, sem precisar ter o currículo perfeito.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="btn-candidate gap-0">
                Sou<span className="ml-1 font-extrabold">CANDIDATO</span>
              </Button>

              <Button size="lg" variant="outline" className="btn-company gap-0">
                Sou<span className="ml-1 font-extrabold">EMPRESA</span>
              </Button>
            </div>

          </div>
        </div>

        <div className="relative min-h-[500px] w-full overflow-visible md:w-[30%]">
          <div className="hero-gradient-card absolute inset-0" />

          <Image
            src="/imagens/image-app-pc-hero.png"
            alt=""
            width={900}
            height={600}
            className="hero-section-image-pc-mobile"
            priority
          />
        </div>

      </div>
    </section>
  );
}