import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[32px] border border-hairline/60 bg-surface">
          <div className="flex flex-col md:flex-row py-20">

            <div className="relative h-[280px] w-full overflow-visible md:h-auto md:w-[38%]">
              <Image
                src="/imagens/pessoas-escritorio.png"
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative flex w-full flex-col justify-center gap-6 px-8 py-10 md:w-[62%] md:px-12 md:py-14">
              <h1 className="text-3xl font-extrabold leading-tight text-paper sm:text-4xl">
                Aqui no
                <span className="inline-flex items-center gap-1 align-middle">
                  <Image
                    src="/icones/DESCOBRE-ICON.svg"
                    alt=""
                    width={250}
                    height={250}
                  />
                </span>{" "}
                é simples!
              </h1>

              <div className="-mx-8 bg-[linear-gradient(90deg,#DC4D00_0%,#FA8E12_100%)] px-8 py-4 md:-mx-12 md:px-12">
                <p className="text-base italic text-white sm:text-lg">
                  Você não precisa entender de{" "}
                  <span className="font-semibold">plataforma de emprego</span>{" "}
                  e não precisa ter um{" "}
                  <span className="font-semibold">currículo bonito</span>.
                </p>
              </div>

              <div>
                <Button size="lg" className="btn-company rounded-full">
                  Eu quero
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}