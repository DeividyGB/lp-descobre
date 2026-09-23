"use client";

import { Bot, Building2, Network, HelpCircle, UserCircle2, FileEdit } from "lucide-react";
import {
    WifiHigh,
    CellSignalFull,
    BatteryFull,
    Buildings,
    PaperPlaneTilt,
    Briefcase,
    ChatCircleDots,
    CheckCircle,
    FunnelSimple,
    MagnifyingGlassPlus,
} from "@phosphor-icons/react";
import Image from "next/image";

export function HowItWorksCombined() {
    return (
        <section>
            <div className="relative overflow-hidden rounded-t-[32px] bg-orange-card px-5 pt-16 pb-16 sm:px-8 md:px-16">
                
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="decor-ring absolute -left-32 top-[15%] h-[440px] w-[440px]" />
                    <div className="decor-ring absolute -right-32 bottom-[8%] h-[440px] w-[440px]" />
                </div>

                <div className="relative flex flex-col gap-20 md:gap-34">

                    <div className="grid md:grid-cols-2 md:items-center">

                        <div className="relative flex justify-center pb-6 md:justify-start ml-10">
                            <div className="mockup-wrapper relative w-full">

                                <div className="mockup-backing absolute -left-5 -top-5 h-full w-full rounded-[24px] bg-ink/70" />

                                <div className="mockup-card relative overflow-hidden rounded-[20px] bg-paper shadow-2xl">
                                    <div className="flex items-center gap-1.5 border-b border-hairline/20 bg-white px-4 py-2.5">
                                        <span className="h-2.5 w-2.5 rounded-full bg-hairline/40" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-hairline/40" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-hairline/40" />
                                        <span className="ml-3 text-[14px] font-medium text-paper-dim">
                                            painel-de-vagas
                                        </span>
                                    </div>

                                    <div className="bg-flare px-5 pb-9 pt-4 text-white">
                                        <div className="flex items-center justify-between text-[16px]">
                                            <span className="font-semibold">Vaga para RH</span>
                                            <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[14px] font-medium">
                                                <span className="status-dot" />
                                                CONTRATADA
                                            </span>
                                        </div>
                                        <div className="mt-3 flex flex-wrap gap-1.5">
                                            <span className="rounded-full bg-white/15 px-2.5 py-1 text-[12px] font-medium">
                                                Assistente Trabalhista
                                            </span>
                                            <span className="rounded-full bg-white/15 px-2.5 py-1 text-[12px] font-medium">
                                                Gestão de Vagas
                                            </span>
                                            <span className="rounded-full bg-white/15 px-2.5 py-1 text-[12px] font-medium">
                                                CLT
                                            </span>
                                        </div>
                                    </div>

                                    <div className="-mt-5 mx-4 grid grid-cols-3 gap-2 rounded-[14px] bg-white p-3 text-center text-[14px] shadow-md">
                                        <div>
                                            <p className="font-semibold text-ink">R$ 7.500,00</p>
                                            <p className="text-paper-dim">Salário</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-ink">30/07/2026</p>
                                            <p className="text-paper-dim">Prazo</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-ink">Remoto</p>
                                            <p className="text-paper-dim">Modalidade</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 px-5 py-6">
                                        <div className="flex items-center justify-between">
                                            <p className="text-xs font-semibold text-ink">Candidatos compatíveis</p>
                                            <span className="text-[14px] font-semibold text-flare">12 novos</span>
                                        </div>

                                        <div className="flex items-center">
                                            <div className="flex -space-x-2">
                                                <span className="h-7 w-7 rounded-full border-2 border-white bg-[linear-gradient(135deg,#FA8E12,#DC4D00)]" />
                                                <span className="h-7 w-7 rounded-full border-2 border-white bg-[linear-gradient(135deg,#ED4F00,#B72500)]" />
                                                <span className="h-7 w-7 rounded-full border-2 border-white bg-hairline/60" />
                                                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-ink text-[9px] font-semibold text-paper">
                                                    +9
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="mb-1 flex items-center justify-between text-[14px] text-paper-dim">
                                                <span>Melhor match</span>
                                                <span className="font-semibold text-ink">94%</span>
                                            </div>
                                            <div className="h-2 w-full overflow-hidden rounded-full bg-hairline/30">
                                                <div className="compat-bar h-full rounded-full bg-flare" style={{ width: "94%" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="notif-card absolute -right-4 top-6 z-20 hidden items-center gap-2 rounded-2xl bg-ink/95 px-6 py-4 shadow-xl sm:flex md:-right-8">
                                    <span className="match-ring relative flex h-10 w-10 items-center justify-center rounded-full bg-icon-badge text-[12px] font-bold text-white">
                                        98%
                                    </span>
                                    <div className="leading-tight">
                                        <p className="text-[14px] font-semibold text-paper">Novo candidato</p>
                                        <p className="text-[12px] text-paper-dim">Compatibilidade alta</p>
                                    </div>
                                </div>

                                <div className="absolute -bottom-9 left-1/2 -translate-x-1/2">
                                    <button className="button-encontrar-gente whitespace-nowrap rounded-full px-6 py-3 text-sm text-white shadow-lg">
                                        Quero <span className="font-extrabold">encontrar gente</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-6 md:items-center">
                            <div className="relative flex justify-center pt-8">
                                <span className="absolute left-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-icon-badge shadow-lg">
                                    <Building2 className="h-12 w-12 text-white" />
                                </span>
                                <div className="w-full max-w-md rounded-[24px] px-8 pb-12 pt-16 text-center card-contratar sm:px-14">
                                    <p className="text-[26px] leading-tight text-paper sm:text-[30px] md:text-[36px]">
                                        <span className="block">Para quem</span>
                                        <span className="block">precisa <span className="font-extrabold">contratar</span>.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <FeatureItem icon={<Bot className="h-14 w-14" />} label="Ajuda de IA" className="relative z-0 -mr-3 sm:-mr-4" />
                                <FeatureItem icon={<Building2 className="h-16 w-16" />} label="Cadastro pelo CNPJ" highlighted className="relative z-10" />
                                <FeatureItem icon={<Network className="h-12 w-12" />} label="Criação de Vagas" className="relative z-0 -ml-3 sm:-ml-4" />
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-20">

                        <div className="order-2 flex flex-col items-center gap-6 md:order-1 md:items-center">
                            <div className="relative flex justify-center pt-8">
                                <span className="absolute left-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-icon-badge shadow-lg">
                                    <UserCircle2 className="h-12 w-12 text-white" />
                                </span>
                                <div className="w-full max-w-md rounded-[24px] px-8 pb-12 pt-16 text-center card-contratar sm:px-14">
                                    <p className="text-[26px] leading-tight text-paper sm:text-[30px] md:text-[36px]">
                                        <span className="block">Para quem</span>
                                        <span className="block">procura <span className="font-extrabold">trabalho</span>.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <FeatureItem icon={<HelpCircle className="h-14 w-14" />} label="Teste de Perfil" className="relative z-0 -mr-3 sm:-mr-4" />
                                <FeatureItem icon={<UserCircle2 className="h-16 w-16" />} label="Cadastro pelo CPF" highlighted className="relative z-10" />
                                <FeatureItem icon={<FileEdit className="h-12 w-12" />} label="Perfil sem Currículo" className="relative z-0 -ml-3 sm:-ml-4" />
                            </div>
                        </div>

                        <div className="order-1 relative flex justify-center pb-10 md:order-2">

                            <Image
                                src="/imagens/background-mobile.png"
                                alt=""
                                width={600}
                                height={500}
                                className="background-mobile-icon"
                                // style={{ width: 450, height: 450, maxWidth: "none" }}
                                priority
                            />

                            <div className="mockup-wrapper relative z-10 w-full max-w-[340px]">

                                <div className="mockup-backing absolute -right-4 -top-4 h-full w-full rounded-[46px] bg-ink/70" />

                                <div className="relative rounded-[46px] bg-ink p-3 shadow-2xl">
                                    <span className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l bg-ink/80" />
                                    <span className="absolute -left-[3px] top-36 h-14 w-[3px] rounded-l bg-ink/80" />
                                    <span className="absolute -left-[3px] top-52 h-14 w-[3px] rounded-l bg-ink/80" />
                                    <span className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r bg-ink/80" />

                                    <div className="relative overflow-hidden rounded-[36px] bg-paper">
                                        <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />

                                        <div className="flex items-center justify-between bg-white px-6 pb-2 pt-3 text-[11px] font-semibold text-ink">
                                            <span>16:04</span>

                                            <div className="flex items-center gap-1">
                                                <CellSignalFull size={13} weight="fill" />
                                                <WifiHigh size={13} weight="fill" />
                                                <BatteryFull size={15} weight="fill" />
                                            </div>
                                        </div>

                                        <div className="bg-flare px-5 py-5 text-white">
                                            <p className="text-base font-semibold">Candidaturas</p>
                                            <p className="text-[11px] text-white/80">
                                                Acompanhe o status das suas vagas
                                            </p>
                                        </div>

                                        <div className="-mt-4 mx-4 grid grid-cols-4 gap-1 rounded-2xl bg-white p-3 text-center shadow-md">
                                            <StatItem icon={<Briefcase size={14} weight="bold" />} value="2" label="Total" />
                                            <StatItem icon={<ChatCircleDots size={14} weight="bold" />} value="1" label="Em análise" />
                                            <StatItem icon={<PaperPlaneTilt size={14} weight="bold" />} value="0" label="Entrevista" />
                                            <StatItem icon={<CheckCircle size={14} weight="bold" />} value="0" label="Aprovado" />
                                        </div>

                                        <div className="flex items-center gap-1.5 overflow-x-auto px-5 py-3 text-[10px] font-medium text-paper-dim">
                                            <span className="whitespace-nowrap rounded-full bg-flare px-3 py-1.5 text-white">
                                                Todas
                                            </span>
                                            <span className="whitespace-nowrap rounded-full bg-hairline/15 px-3 py-1.5">
                                                Em análise
                                            </span>
                                            <span className="whitespace-nowrap rounded-full bg-hairline/15 px-3 py-1.5">
                                                Entrevista
                                            </span>
                                            <FunnelSimple size={16} className="ml-auto shrink-0 text-paper-dim" />
                                        </div>

                                        <div className="space-y-2.5 px-5 pb-50">
                                            <p className="text-xs font-semibold text-ink">
                                                Todas as candidaturas{" "}
                                                <span className="font-normal text-paper-dim">(2 vagas)</span>
                                            </p>

                                            <CandidacyItem
                                                color="bg-[linear-gradient(135deg,#FA8E12,#DC4D00)]"
                                                initials="DE"
                                                title="Vaga para Engenheiro Civil"
                                                subtitle="D'Escobre App LTDA"
                                                status="Enviada"
                                            />

                                            <CandidacyItem
                                                color="bg-[linear-gradient(135deg,#8b5cf6,#6d28d9)]"
                                                initials="GC"
                                                title="Professor de CrossFit"
                                                subtitle="GYM O'Escobre Empresa LTDA"
                                                status="Enviada"
                                            />
                                        </div>

                                        <div className="flex justify-center pb-2">
                                            <div className="h-1 w-28 rounded-full bg-ink/20" />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                                    <button className="button-encontrar-gente flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm shadow-lg">
                                        Quero <span className="font-extrabold">uma oportunidade</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-photo-wrap relative -mx-5 py-4 sm:-mx-8 md:-mx-16">
                    <Image
                        src="/imagens/man-woman-working.jpeg"
                        alt=""
                        width={2000}
                        height={1000}
                        className="object-cover w-full h-auto"
                        priority
                    />

                    <button className="btn-glass-white cta-conhecer flex items-center gap-2 rounded-full shadow-lg">
                        Quero <span className="font-extrabold"><span className="text-gradient font-extrabold">conhecer</span></span>
                    </button>

                    <button className="btn-glass-white cta-vaga flex items-center gap-2 rounded-full shadow-lg">
                        Quero uma <span className="text-gradient font-extrabold">vaga</span>
                    </button>
                </div>

                <div className="my-22 flex justify-center text-center">
                    <p className="text-3xl leading-tight text-paper sm:text-4xl md:text-5xl lg:text-6xl">
                        <span className="block">É para essa conexão que</span>
                        <span className="flex flex-wrap items-center justify-center gap-2">
                            o
                            <Image
                                src="/icones/DESCOBRE-ICON.svg"
                                alt=""
                                width={350}
                                height={350}
                            />
                            <span className="font-extrabold">existe!</span>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}

function StatItem({ value, label }: { value: string; label: string }) {
    return (
        <div>
            <p className="text-sm font-semibold text-ink">{value}</p>
            <p className="text-[8px] text-paper-dim">{label}</p>
        </div>
    );
}

function CandidacyItem({
    color,
    initials,
    title,
    subtitle,
    status,
}: {
    color: string;
    initials: string;
    title: string;
    subtitle: string;
    status: string;
}) {
    return (
        <div className="flex items-center gap-2 rounded-[14px] border border-hairline/15 px-3 py-2.5">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white ${color}`}>
                {initials}
            </span>
            <div className="flex-1 leading-tight">
                <p className="text-[11px] font-semibold text-ink">{title}</p>
                <p className="text-[9px] text-paper-dim">{subtitle}</p>
                <span className="mt-0.5 inline-block rounded-full bg-hairline/15 px-2 py-0.5 text-[8px] font-medium text-paper-dim">
                    {status}
                </span>
            </div>
            <span className="text-paper-dim">›</span>
        </div>
    );
}

function FeatureItem({
    icon,
    label,
    highlighted,
    className = "",
}: {
    icon: React.ReactNode;
    label: string;
    highlighted?: boolean;
    className?: string;
}) {
    return (
        <div
            className={`feature-card flex flex-col items-center gap-3 rounded-[28px] text-center text-[#5C1E00] ${highlighted ? "feature-card--highlighted py-10" : "py-7 px-3"
                } ${className}`}
        >
            <span>{icon}</span>
            <span className={`font-medium leading-tight text-white ${highlighted ? "text-[24px]" : "text-[16px]"}`}>
                {label.split(" ").length > 1 ? (
                    <>
                        {label.split(" ").slice(0, -2).join(" ")}
                        <br />
                        <span className="font-extrabold">{label.split(" ").slice(-2).join(" ")}</span>
                    </>
                ) : (
                    label
                )}
            </span>
        </div>
    );
}