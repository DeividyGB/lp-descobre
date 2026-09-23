"use client";

import { useState } from "react";
import Image from "next/image";

type Audience = "candidato" | "empresa";

export function Audiences() {
    const [audience, setAudience] = useState<Audience>("candidato");
    const isCandidato = audience === "candidato";

    return (
        <section className="relative z-10 -mt-8 rounded-t-[28px] border-b border-hairline/60 bg-ink pt-14 sm:-mt-12 sm:pt-20" id="empresas">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-24 md:flex-row md:items-center md:justify-center md:gap-6">
                <div
                    key={`hero-${audience}`}
                    className={`w-full min-w-[500px] animate-hero-fade-up ${isCandidato ? "md:order-1" : "md:order-3"
                        }`}
                >
                    {isCandidato ? (
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
                        />
                    ) : (
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
                    )}
                </div>

                <div className="order-2 flex shrink-0 items-center justify-center py-2 md:py-0">
                    <AudienceSwitch value={audience} onChange={setAudience} />
                </div>

                <div
                    key={`switch-card-${audience}`}
                    className={`w-full max-w-lg min-w-[450px] animate-hero-fade-up ${isCandidato ? "md:order-3" : "md:order-1"
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

function HeroCard({
    headline,
    mockupSrc,
    mockupWidth,
    mockupHeight,
    wide = false,
    secondaryImageSrc,
}: {
    headline: React.ReactNode;
    mockupSrc: string;
    mockupWidth: number;
    mockupHeight: number;
    wide?: boolean;
    secondaryImageSrc?: string;
}) {
    return (
        <div className="audience-hero-wrap relative">
            <Image
                src="/imagens/glow-mockup-audiencia.png"
                alt=""
                width={900}
                height={900}
                className="audience-hero-glow"
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
                        className={`audience-mockup-phone ${wide ? "audience-mockup-phone--wide" : "audience-mockup-phone--mobile"
                            }`}
                        priority
                    />
                </div>

                {wide && secondaryImageSrc && (
                    <div className="audience-secondary-wrap relative w-full">
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
        <div className="card-glass audience-switch-card flex flex-col items-center justify-center gap-6 rounded-[28px] text-center">
            <p className="audience-switch-title leading-tight text-paper">{title}</p>
            <button onClick={onClick} className="btn-glass-white audience-switch-btn rounded-[32px]">
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
        <div className="audience-switch-wrap">
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