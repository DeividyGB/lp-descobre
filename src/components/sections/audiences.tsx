"use client";

import { useState } from "react";
import Image from "next/image";

type Audience = "candidato" | "empresa";

export function Audiences() {
    const [audience, setAudience] = useState<Audience>("candidato");
    const isCandidato = audience === "candidato";

    return (
        <section className="relative z-10 -mt-8 rounded-t-[28px] border-b border-hairline/60 bg-ink pt-14 max-md:overflow-x-clip sm:-mt-12 sm:pt-20" id="empresas">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-24 max-md:pb-16 md:flex-row md:items-center md:justify-center md:gap-4 md:px-6 lg:gap-6 lg:px-8">
                <div
                    className={`w-full min-w-0 animate-hero-fade-up md:w-auto md:flex-[1.15_1_0%] xl:min-w-[500px] ${isCandidato ? "md:order-1" : "md:order-3"
                        }`}
                >
                    <div className="grid">
                        <HeroSlot active={isCandidato}>
                            <HeroCard
                                headline={
                                    <>
                                        Deixe o algoritmo achar a vaga{" "}
                                        <span className="font-extrabold">perfeita</span> enquanto
                                        você <span className="font-extrabold italic">foca no seu talento</span>.
                                    </>
                                }
                                mockupSrc="/imagens/mockup-mobile-audiencia.png"
                                mockupWidth={450}
                                mockupHeight={450}
                                priority
                            />
                        </HeroSlot>

                        <HeroSlot active={!isCandidato}>
                            <HeroCard
                                headline={
                                    <>
                                        Feche vagas em <span className="font-extrabold">48h</span>,
                                        não em 30 dias. Decisões baseadas em{" "}
                                        <span className="font-extrabold italic">dados e conexões reais</span>.
                                    </>
                                }
                                mockupSrc="/imagens/mockup-pc-audiencia.png"
                                mockupWidth={500}
                                mockupHeight={500}
                                wide
                                secondaryImageSrc="/imagens/print-sistema-mockup.png"
                            />
                        </HeroSlot>
                    </div>
                </div>

                <div className="order-2 flex shrink-0 items-center justify-center py-2 max-md:order-first md:py-0">
                    <AudienceSwitch value={audience} onChange={setAudience} />
                </div>

                <div
                    key={`switch-card-${audience}`}
                    className={`w-full min-w-0 max-w-lg animate-hero-fade-up md:w-auto md:flex-[1_1_0%] xl:min-w-[450px] ${isCandidato ? "md:order-3" : "md:order-1"
                        }`}
                >
                    {isCandidato ? (
                        <SwitchCard
                            title={
                                <>
                                    <span className="block">Quero</span>
                                    <span className="block text-gradient font-extrabold">contratar.</span>
                                </>
                            }
                            buttonLabel={
                                <>
                                    Descobrir <span className="text-gradient font-extrabold">talentos</span>
                                </>
                            }
                            onClick={() => setAudience("empresa")}
                        />
                    ) : (
                        <SwitchCard
                            title={
                                <>
                                    <span className="block">Quero</span>
                                    <span className="block text-gradient font-extrabold">trabalhar.</span>
                                </>
                            }
                            buttonLabel={
                                <>
                                    Descobrir <span className="text-gradient font-extrabold">vagas</span>
                                </>
                            }
                            onClick={() => setAudience("candidato")}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

function HeroSlot({ active, children }: { active: boolean; children: React.ReactNode }) {
    return (
        <div
            aria-hidden={!active}
            className={`col-start-1 row-start-1 self-center transition-all duration-500 ease-out ${active
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-3 opacity-0"
                }`}
        >
            {children}
        </div>
    );
}

function HeroCard({
    headline,
    mockupSrc,
    mockupWidth,
    mockupHeight,
    wide = false,
    secondaryImageSrc,
    priority = false,
}: {
    headline: React.ReactNode;
    mockupSrc: string;
    mockupWidth: number;
    mockupHeight: number;
    wide?: boolean;
    secondaryImageSrc?: string;
    priority?: boolean;
}) {
    return (
        <div className="audience-hero-wrap relative">
            <Image
                src="/imagens/glow-mockup-audiencia.png"
                alt=""
                width={900}
                height={900}
                className="audience-hero-glow max-md:left-1/2! max-md:h-[460px]! max-md:w-[400px]!"
                aria-hidden
            />

            <div className="audience-hero-card bg-orange-card-invert relative flex flex-col items-center rounded-[32px] text-center">
                <p className="audience-headline leading-snug text-white">
                    {headline}
                </p>

                <div className="audience-mockup-wrap relative flex w-full flex-1 items-end justify-center">
                    <Image
                        src="/imagens/background-mobile.png"
                        alt=""
                        width={450}
                        height={450}
                        className={`${wide ? "audience-mockup-glow--wide" : "audience-mockup-glow"
                            }`}
                        aria-hidden
                    />
                    <Image
                        src={mockupSrc}
                        alt=""
                        width={mockupWidth}
                        height={mockupHeight}
                        className={`audience-mockup-phone ${wide
                            ? "audience-mockup-phone--wide max-md:w-[min(100cqw,580px)]!"
                            : "audience-mockup-phone--mobile"
                            }`}
                        priority={priority}
                    />
                </div>

                {wide && secondaryImageSrc && (
                    <div className="audience-secondary-wrap relative w-full max-md:mt-[-41cqw]!">
                        <Image
                            src={secondaryImageSrc}
                            alt=""
                            width={900}
                            height={400}
                            className="audience-secondary-image"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

function SwitchCard({
    title,
    buttonLabel,
    onClick,
}: {
    title: React.ReactNode;
    buttonLabel: React.ReactNode;
    onClick: () => void;
}) {
    return (
        <div className="card-glass audience-switch-card flex flex-col items-center justify-center gap-6 rounded-[28px] text-center max-md:aspect-auto!">
            <p className="audience-switch-title leading-tight text-paper max-md:text-[clamp(2rem,11cqw,3rem)]! md:text-[clamp(1.75rem,3.6vw,2.5rem)]! xl:text-[clamp(2.5rem,4vw,3.5rem)]!">{title}</p>
            <button
                onClick={onClick}
                className="btn-glass-white audience-switch-btn rounded-[32px] max-md:text-[clamp(1rem,5cqw,1.3rem)]! md:text-[clamp(0.95rem,1.6vw,1.1rem)]! xl:text-[1.25rem]!"
            >
                {buttonLabel}
            </button>
        </div>
    );
}

function AudienceSwitch({
    value,
    onChange,
}: {
    value: Audience;
    onChange: (v: Audience) => void;
}) {
    const isCandidato = value === "candidato";

    return (
        <div className="audience-switch-wrap max-md:flex-row!">
            <span className={`audience-switch-label ${isCandidato ? "is-active" : ""}`}>
                Candidato
            </span>

            <button
                type="button"
                role="switch"
                aria-checked={!isCandidato}
                aria-label="Alternar entre candidato e empresa"
                onClick={() => onChange(isCandidato ? "empresa" : "candidato")}
                className="audience-switch-track"
            >
                <span
                    className="audience-switch-thumb"
                    style={{
                        transform: isCandidato ? "translateX(0)" : "translateX(40px)",
                    }}
                />
            </button>

            <span className={`audience-switch-label ${!isCandidato ? "is-active" : ""}`}>
                Empresa
            </span>
        </div>
    );
}