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
    <section className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-[1400px]">
        <div
          ref={sectionRef}
          className="relative overflow-hidden rounded-[32px] border border-hairline/60 bg-surface"
        >
          <div
            className={`z-20 relative h-[440px] w-full overflow-hidden rounded-t-[24px] transition-all duration-[900ms] ease-out md:absolute md:inset-y-3 md:left-3 md:h-auto md:rounded-[24px] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-6 opacity-0 md:-translate-x-12"
            }`}
          >
            <Image
              src="/imagens/image-coworkes.svg"
              alt=""
              width={1200}
              height={600}
              className="coworkers-image object-cover"
              priority
            />
          </div>

          <div className="relative z-10 flex w-full flex-col items-end justify-center gap-8 px-8 py-10 md:ml-[38%] mmin-h-[450px] md:w-[62%] md:gap-12 md:px-12 md:py-14">
            <h1
              className={`flex flex-wrap items-center justify-end text-right text-[clamp(1.5rem,4vw,12rem)] !font-extrabold !leading-[0.95] !text-paper transition-all duration-700 ease-out ${
                isVisible
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
                />
              </span>
              <span>é simples!</span>
            </h1>

            <div
              className={`bg-flare px-8 py-4 transition-all duration-700 ease-out md:-mx-12 md:px-12 ${
                isVisible
                  ? "translate-y-0 opacity-100 delay-[400ms]"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <p className="text-right text-base text-white sm:text-lg">
                Você não precisa entender de{" "}
                <span className="font-semibold italic ">plataforma de emprego</span>{" "}
                e não precisa ter um{" "}
                <span className="font-semibold italic">currículo bonito</span>.
              </p>
            </div>

            <div
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100 delay-[550ms]"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Button size="lg" className="btn-company rounded-full">
                Eu quero
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}