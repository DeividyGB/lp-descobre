"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div
          ref={sectionRef}
          className="relative overflow-hidden rounded-[32px] border border-hairline/60 bg-surface"
        >
          <Image
            src="/imagens/image-coworkes.svg"
            alt=""
            width={1200}
            height={600}
            className="coworkers-image object-cover max-md:static! max-md:inset-auto! max-md:h-[clamp(200px,58vw,320px)]! max-md:w-full!"
            priority
          />

          <div className="relative z-10 flex w-full flex-col items-end justify-center gap-6 px-6 py-8 sm:px-8 md:ml-[38%] md:min-h-[450px] md:w-[62%] md:gap-12 md:px-12 md:py-14 lg:max-xl:ml-[56%] lg:max-xl:w-[44%] lg:max-xl:gap-8 lg:max-xl:px-8 lg:max-xl:py-10">            <h1
            className={`flex flex-wrap items-center justify-end text-right text-[clamp(1.5rem,4vw,12rem)] max-md:text-[clamp(1.75rem,8vw,2.5rem)] !font-extrabold !leading-[0.95] !text-paper transition-all duration-700 ease-out ${isVisible
              ? "translate-y-0 opacity-100 delay-[250ms]"
              : "translate-y-4 opacity-0"
              }`}
          >
            <span>Aqui no</span>
            <span className="relative inline-flex">
              <span
                aria-hidden
                className="absolute inset-0 -z-10 scale-150 rounded-full bg-[radial-gradient(circle,var(--color-flare-soft)_0%,transparent_70%)] opacity-40 blur-xl"
              />
              <Image
                src="/icones/DESCOBRE-ICON.svg"
                alt=""
                width={400}
                height={400}
                className="max-md:h-auto max-md:w-[min(56vw,220px)]"
              />
            </span>
            <span>é simples!</span>
          </h1>

            <div
              className={`bg-flare px-6 py-4 transition-all duration-700 ease-out max-sm:-mx-6 sm:max-md:-mx-8 max-md:self-stretch sm:px-8 md:-mx-12 md:px-12 lg:max-xl:-ml-0 lg:max-xl:-mr-8 lg:max-xl:px-6 lg:max-xl:py-3 ${isVisible
                ? "translate-y-0 opacity-100 delay-[400ms]"
                : "translate-y-4 opacity-0"
                }`}
            >
              <p className="text-right text-base text-white sm:text-lg lg:max-xl:text-[14px] lg:max-xl:leading-snug">
                Você não precisa entender de{" "}
                <span className="font-semibold italic">plataforma de emprego</span>{" "}
                e não precisa ter um{" "}
                <span className="font-semibold italic">currículo bonito</span>.
              </p>
            </div>

            <Button
              size="lg"
              className={`btn-company cursor-pointer rounded-full transition-all duration-700 ease-out ${isVisible
                ? "translate-y-0 opacity-100 delay-[550ms]"
                : "translate-y-4 opacity-0"
                }`}
            >
              <a
                href="http://descobre.app.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eu quero
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}