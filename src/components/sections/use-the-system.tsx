"use client";

import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";
import type { LucideIcon } from "lucide-react";
import {
    Bot,
    Building2,
    Network,
    HelpCircle,
    UserCircle2,
    FileEdit,
    Sparkles,
    ChevronLeft,
    ChevronRight,
    ArrowLeft,
    ArrowRight,
    User,
    Mail,
    CalendarDays,
    Phone,
    IdCard,
    ShieldCheck,
    Lock,
    Check,
    MapPin,
    TrendingUp,
    Briefcase,
    Star,
} from "lucide-react";
import { WifiHigh, CellSignalFull, BatteryFull, CheckCircle } from "@phosphor-icons/react";
import Image from "next/image";
import { useAppDownloadModal } from "@/components/app-download-modal-context";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useCarousel(length: number, interval = 6000) {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    const go = useCallback(
        (i: number) => setActive(((i % length) + length) % length),
        [length],
    );

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => setActive((a) => (a + 1) % length), interval);
        return () => clearInterval(id);
    }, [paused, length, interval, active]);

    return {
        active,
        go,
        next: () => go(active + 1),
        prev: () => go(active - 1),
        setPaused,
    };
}

function FitScale({ baseWidth, children }: { baseWidth: number; children: ReactNode }) {
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [fit, setFit] = useState<{ scale: number; height: number } | null>(null);

    useIsoLayoutEffect(() => {
        const outer = outerRef.current;
        const inner = innerRef.current;
        if (!outer || !inner) return;

        const query = window.matchMedia("(max-width: 767px)");

        const update = () => {
            if (!query.matches) {
                setFit(null);
                return;
            }
            const scale = Math.min(1, outer.clientWidth / baseWidth);
            setFit({ scale, height: inner.offsetHeight * scale });
        };

        update();

        const observer = new ResizeObserver(update);
        observer.observe(outer);
        observer.observe(inner);
        query.addEventListener("change", update);

        return () => {
            observer.disconnect();
            query.removeEventListener("change", update);
        };
    }, [baseWidth]);

    return (
        <div
            ref={outerRef}
            style={fit ? { position: "relative", height: fit.height } : undefined}
        >
            <div
                ref={innerRef}
                style={
                    fit
                        ? {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: baseWidth,
                            transform: `scale(${fit.scale})`,
                            transformOrigin: "top left",
                        }
                        : undefined
                }
            >
                {children}
            </div>
        </div>
    );
}

type Feature = { Icon: LucideIcon; label: string };

const hireFeatures: Feature[] = [
    { Icon: Bot, label: "Ajuda de IA" },
    { Icon: Building2, label: "Cadastro pelo CNPJ" },
    { Icon: Network, label: "Criação de Vagas" },
];

const jobFeatures: Feature[] = [
    { Icon: HelpCircle, label: "Teste de Perfil" },
    { Icon: UserCircle2, label: "Cadastro pelo CPF" },
    { Icon: FileEdit, label: "Perfil sem Currículo" },
];

export function HowItWorksCombined() {
    const { open } = useAppDownloadModal();

    const hire = useCarousel(hireFeatures.length);
    const job = useCarousel(jobFeatures.length);

    const webScreens = [
        { path: "vaga-com-ia", node: <AiDescriptionScreen /> },
        { path: "cadastro-empresa", node: <CnpjScreen /> },
        { path: "nova-vaga", node: <NewJobScreen /> },
    ];

    const mobileScreens = [<ProfileTestScreen key="t" />, <CpfSignupScreen key="c" />, <ProfileScreen key="p" />];

    return (
        <section id="como-funciona">
            <div className="relative overflow-hidden rounded-t-[32px] bg-orange-card px-5 pt-16 pb-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="decor-ring absolute -left-32 top-[15%] h-[440px] w-[440px]" />
                    <div className="decor-ring absolute -right-32 bottom-[8%] h-[440px] w-[440px]" />
                </div>

                <div className="relative flex flex-col gap-42 max-md:gap-28">
                    <div className="grid md:grid-cols-2 md:items-center md:gap-8 xl:gap-0">
                        <div className="relative flex justify-center pb-6 ml-6 md:justify-start xl:ml-10 max-md:ml-5">
                            <div className="mockup-wrapper relative w-full">
                                <div className="mockup-backing absolute -left-5 -top-5 h-full w-full rounded-[24px] bg-ink/70" />

                                <FitScale baseWidth={400}>
                                    <div key={hire.active} className="mockup-fade">
                                        <WebMockup title={webScreens[hire.active].path}>
                                            {webScreens[hire.active].node}
                                        </WebMockup>
                                    </div>
                                </FitScale>

                                <div className="notif-card absolute -right-4 top-6 z-20 hidden items-center gap-2 rounded-2xl bg-ink/95 px-6 py-4 shadow-xl sm:flex md:-right-4 xl:-right-8">
                                    <span className="match-ring relative flex h-10 w-10 items-center justify-center rounded-full bg-icon-badge text-[12px] font-bold text-white">
                                        98%
                                    </span>
                                    <div className="leading-tight">
                                        <p className="text-[14px] font-semibold text-paper">Novo candidato</p>
                                        <p className="text-[12px] text-paper-dim">Compatibilidade alta</p>
                                    </div>
                                </div>

                                <div className="absolute -bottom-9 left-1/2 -translate-x-1/2">
                                    <a
                                        href="http://descobre.app.br/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button-encontrar-gente whitespace-nowrap rounded-full px-6 py-3 text-sm text-white shadow-lg"
                                    >
                                        Quero <span className="font-extrabold">encontrar gente</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-6 md:items-center max-md:mt-15">
                            <div className="relative flex justify-center pt-8">
                                <span className="absolute left-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-icon-badge shadow-lg">
                                    <Building2 className="h-12 w-12 text-white" />
                                </span>
                                <div className="w-full max-w-md rounded-[24px] px-8 pb-12 pt-16 text-center card-contratar sm:px-10 xl:px-14">
                                    <p className="text-[26px] leading-tight text-paper sm:text-[30px] xl:text-[36px]">
                                        <span className="block">Para quem</span>
                                        <span className="block">precisa <span className="font-extrabold">contratar</span>.</span>
                                    </p>
                                </div>
                            </div>

                            <FeatureCarousel
                                features={hireFeatures}
                                active={hire.active}
                                onSelect={hire.go}
                                onPrev={hire.prev}
                                onNext={hire.next}
                                onPause={hire.setPaused}
                            />
                        </div>
                    </div>

                    <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-10 xl:gap-20">
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

                            <FeatureCarousel
                                features={jobFeatures}
                                active={job.active}
                                onSelect={job.go}
                                onPrev={job.prev}
                                onNext={job.next}
                                onPause={job.setPaused}
                            />
                        </div>

                        <div className="order-1 relative flex justify-center pb-10 md:order-2">
                            <Image
                                src="/imagens/background-mobile.png"
                                alt=""
                                aria-hidden
                                width={600}
                                height={500}
                                sizes="(max-width: 767px) 90vw, (max-width: 1279px) 42vw, 520px"
                                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-[min(90vw,420px)] max-w-none -translate-x-1/2 -translate-y-1/2 select-none md:w-[clamp(320px,42vw,440px)] xl:w-[520px]"
                                priority
                            />

                            <div className="mockup-wrapper relative z-10 w-full max-w-[340px]">
                                <div className="mockup-backing absolute -right-4 -top-4 h-full w-full rounded-[46px] bg-ink/70" />

                                <FitScale baseWidth={340}>
                                    <PhoneShell>
                                        <div key={job.active} className="mockup-fade h-full">
                                            {mobileScreens[job.active]}
                                        </div>
                                    </PhoneShell>
                                </FitScale>

                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                                    <button
                                        className="button-encontrar-gente flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm shadow-lg"
                                        onClick={open}
                                    >
                                        Quero <span className="font-extrabold">uma oportunidade</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-photo-wrap relative -mx-5 py-4 sm:-mx-8 md:-mx-10 lg:-mx-12 xl:-mx-16">
                    <Image
                        src="/imagens/man-woman-working.jpeg"
                        alt=""
                        width={2000}
                        height={1000}
                        className="object-cover w-full h-auto max-md:h-[clamp(220px,62vw,420px)]"
                        priority
                    />

                    <a
                        href="http://descobre.app.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glass-white cta-conhecer flex items-center gap-2 rounded-full shadow-lg max-md:bottom-[6%]! max-md:left-[4%]! max-md:px-4! max-md:py-2.5!"
                    >
                        Quero <span className="font-extrabold"><span className="text-gradient font-extrabold">conhecer</span></span>
                    </a>

                    <button
                        className="btn-glass-white cta-vaga flex items-center gap-2 rounded-full shadow-lg max-md:bottom-[6%]! max-md:left-auto! max-md:right-[4%]! max-md:px-4! max-md:py-2.5!"
                        onClick={open}
                    >
                        Quero uma <span className="text-gradient font-extrabold">vaga</span>
                    </button>
                </div>

                <div className="my-22 flex justify-center text-center max-md:my-14">
                    <p className="text-3xl leading-tight text-paper sm:text-4xl md:text-5xl xl:text-6xl">                        <span className="block">É para essa conexão que</span>
                        <span className="flex flex-wrap items-center justify-center gap-2">
                            o
                            <Image
                                src="/icones/DESCOBRE-ICON.svg"
                                alt=""
                                width={350}
                                height={350}
                                className="max-md:h-auto max-md:w-[min(60vw,240px)]"
                            />
                            <span className="font-extrabold">existe!</span>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}

function FeatureCarousel({
    features,
    active,
    onSelect,
    onPrev,
    onNext,
    onPause,
}: {
    features: Feature[];
    active: number;
    onSelect: (i: number) => void;
    onPrev: () => void;
    onNext: () => void;
    onPause: (paused: boolean) => void;
}) {
    const n = features.length;
    const order = [(active - 1 + n) % n, active, (active + 1) % n];

    return (
        <div
            className="flex flex-col items-center gap-5"
            onMouseEnter={() => onPause(true)}
            onMouseLeave={() => onPause(false)}
        >
            <div className="flex items-center">
                {order.map((idx, pos) => (
                    <FeatureItem
                        key={idx}
                        Icon={features[idx].Icon}
                        label={features[idx].label}
                        highlighted={pos === 1}
                        onClick={() => onSelect(idx)}
                        className={
                            pos === 0
                                ? "relative z-0 -mr-3 sm:-mr-4 max-xl:hidden"
                                : pos === 1
                                    ? "relative z-10"
                                    : "relative z-0 -ml-3 sm:-ml-4 max-xl:hidden"
                        }
                    />
                ))}
            </div>

            <div className="flex items-center gap-4">
                <button
                    type="button"
                    onClick={onPrev}
                    aria-label="Funcionalidade anterior"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/35"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex items-center gap-2">
                    {features.map((f, i) => (
                        <button
                            key={f.label}
                            type="button"
                            onClick={() => onSelect(i)}
                            aria-label={f.label}
                            aria-current={i === active}
                            className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
                                }`}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={onNext}
                    aria-label="Próxima funcionalidade"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/35"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}

function FeatureItem({
    Icon,
    label,
    highlighted,
    onClick,
    className = "",
}: {
    Icon: LucideIcon;
    label: string;
    highlighted?: boolean;
    onClick: () => void;
    className?: string;
}) {
    const words = label.split(" ");

    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={highlighted}
            className={`feature-card flex flex-col items-center gap-3 rounded-[28px] text-center text-[#5C1E00] transition-all duration-300 ${highlighted ? "feature-card--highlighted py-10" : "cursor-pointer px-3 py-7 hover:scale-105"
                } ${className}`}
        >
            <span>
                <Icon className={highlighted ? "h-16 w-16" : "h-12 w-12"} />
            </span>
            <span className={`font-medium leading-tight text-white ${highlighted ? "text-[24px]" : "text-[16px]"}`}>
                {words.length > 1 ? (
                    <>
                        {words.slice(0, -2).join(" ")}
                        <br />
                        <span className="font-extrabold">{words.slice(-2).join(" ")}</span>
                    </>
                ) : (
                    label
                )}
            </span>
        </button>
    );
}

function WebMockup({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div className="mockup-card relative overflow-hidden rounded-[20px] bg-paper shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-hairline/20 bg-white px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-hairline/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-hairline/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-hairline/40" />
                <span className="ml-3 text-[14px] font-medium text-paper-dim">{title}</span>
            </div>
            <div className="h-[470px] overflow-hidden">{children}</div>
        </div>
    );
}

function PhoneShell({ children }: { children: ReactNode }) {
    return (
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

                <div className="h-[560px]">{children}</div>

                <div className="flex justify-center pb-2">
                    <div className="h-1 w-28 rounded-full bg-ink/20" />
                </div>
            </div>
        </div>
    );
}

function Field({ label, value, placeholder }: { label: string; value?: string; placeholder?: string }) {
    return (
        <div className="min-w-0">
            <p className="mb-1 text-[10px] font-semibold text-ink">{label}</p>
            <div className="truncate rounded-lg border border-hairline/25 bg-white px-2.5 py-1.5 text-[10px]">
                {value ? <span className="text-ink">{value}</span> : <span className="text-paper-dim">{placeholder}</span>}
            </div>
        </div>
    );
}

function Card({ title, subtitle, action, children }: { title: string; subtitle: string; action?: ReactNode; children: ReactNode }) {
    return (
        <div className="rounded-2xl border border-hairline/20 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-start justify-between gap-2">
                <div>
                    <p className="text-[12px] font-bold text-ink">{title}</p>
                    <p className="text-[10px] text-paper-dim">{subtitle}</p>
                </div>
                {action}
            </div>
            {children}
        </div>
    );
}

function Stepper({ step }: { step: 1 | 2 }) {
    const dot = (n: number, label: string) => (
        <div className="flex items-center gap-2">
            <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold ${step >= n ? "bg-flare text-white" : "bg-hairline/20 text-paper-dim"
                    }`}
            >
                {n}
            </span>
            <span className={`text-[10px] font-semibold ${step >= n ? "text-ink" : "text-paper-dim"}`}>{label}</span>
        </div>
    );
    return (
        <div className="flex items-center gap-3 rounded-2xl border border-hairline/20 bg-white px-4 py-2.5">
            {dot(1, "Informações da vaga")}
            <div className="h-px flex-1 bg-hairline/25" />
            {dot(2, "Contrato e configurações")}
        </div>
    );
}

function NewJobScreen() {
    return (
        <div className="space-y-3 p-4">
            <div>
                <p className="text-[16px] font-bold text-ink">Nova vaga</p>
                <p className="text-[10px] text-paper-dim">Preencha os dados para publicar uma nova vaga</p>
            </div>

            <Stepper step={1} />

            <Card title="Informações básicas" subtitle="Dados principais da vaga">
                <div className="grid grid-cols-3 gap-2.5">
                    <div className="col-span-2">
                        <Field label="Título da vaga" value="Auxiliar de Produção" />
                    </div>
                    <Field label="Formato" value="Presencial" />
                    <div className="col-span-1">
                        <Field label="Setor" value="Indústria" />
                    </div>
                    <div className="col-span-2">
                        <Field label="Cargo / Nível" value="Auxiliar · Operacional" />
                    </div>
                </div>
            </Card>

            <Card
                title="Descrição da vaga"
                subtitle="Responsabilidades, requisitos e informações essenciais"
                action={
                    <span className="flex items-center gap-1 rounded-md border border-flare/30 bg-flare/10 px-2 py-1 text-[9px] font-semibold text-flare">
                        <Sparkles className="h-3 w-3" /> Gerar com IA
                    </span>
                }
            >
                <div className="h-14 rounded-lg border border-hairline/20 bg-paper px-2.5 py-2 text-[10px] text-paper-dim">
                    Descreva as responsabilidades, requisitos e diferenciais, ou use a IA para gerar automaticamente...
                </div>
            </Card>

            <div className="flex items-center justify-between pt-1">
                <span className="flex items-center gap-1 rounded-lg border border-hairline/25 bg-white px-3 py-1.5 text-[10px] text-ink">
                    <ArrowLeft className="h-3 w-3" /> Cancelar
                </span>
                <span className="flex items-center gap-1 rounded-lg bg-flare px-3.5 py-1.5 text-[10px] font-semibold text-white shadow">
                    Próximo <ArrowRight className="h-3 w-3" />
                </span>
            </div>
        </div>
    );
}

function AiDescriptionScreen() {
    return (
        <div className="space-y-3 p-4">
            <div>
                <p className="text-[16px] font-bold text-ink">Nova vaga</p>
                <p className="text-[10px] text-paper-dim">Deixe a IA escrever a descrição para você</p>
            </div>

            <Stepper step={1} />

            <Card title="Informações básicas" subtitle="Dados principais da vaga">
                <div className="grid grid-cols-3 gap-2.5">
                    <div className="col-span-2">
                        <Field label="Título da vaga" value="Auxiliar de Produção" />
                    </div>
                    <Field label="Formato" value="Presencial" />
                </div>
            </Card>

            <Card
                title="Descrição da vaga"
                subtitle="Gerada com base no título e no cargo"
                action={
                    <span className="flex items-center gap-1 rounded-md bg-flare px-2 py-1 text-[9px] font-semibold text-white shadow">
                        <Sparkles className="h-3 w-3" /> Gerando...
                    </span>
                }
            >
                <div className="space-y-2 rounded-lg border border-flare/25 bg-flare/5 p-3 text-[10px] leading-relaxed text-ink">
                    <p className="font-semibold">Responsabilidades</p>
                    <ul className="list-disc space-y-0.5 pl-4 text-paper-dim">
                        <li>Abastecer a linha de produção com materiais e embalagens</li>
                        <li>Embalar, conferir e organizar os produtos finalizados</li>
                    </ul>
                    <p className="font-semibold">Requisitos</p>
                    <ul className="list-disc space-y-0.5 pl-4 text-paper-dim">
                        <li>Ensino médio completo</li>
                        <li>Disponibilidade de horário</li>
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="rounded-full bg-flare/15 px-2 py-0.5 text-[9px] font-semibold text-flare">
                            R$ 2.350,00
                        </span>
                        <span className="rounded-full bg-hairline/15 px-2 py-0.5 text-[9px] font-medium text-paper-dim">CLT</span>
                        <span className="rounded-full bg-hairline/15 px-2 py-0.5 text-[9px] font-medium text-paper-dim">Presencial</span>
                    </div>
                    <span className="inline-block h-3 w-1 animate-pulse rounded bg-flare align-middle" />
                </div>
            </Card>
        </div>
    );
}

function CnpjScreen() {
    return (
        <div className="space-y-3 p-4">
            <div>
                <p className="text-[16px] font-bold text-ink">Cadastre sua empresa</p>
                <p className="text-[10px] text-paper-dim">Informe o CNPJ e preenchemos o resto</p>
            </div>

            <Card title="Buscar empresa" subtitle="Consulta automática na Receita Federal">
                <div className="flex items-end gap-2">
                    <div className="flex-1">
                        <Field label="CNPJ" value="12.345.678/0001-90" />
                    </div>
                    <span className="flex items-center gap-1 rounded-lg bg-flare px-3 py-1.5 text-[10px] font-semibold text-white">
                        Buscar
                    </span>
                </div>
                <p className="mt-2 flex items-center gap-1 text-[10px] font-medium text-green-600">
                    <CheckCircle size={13} weight="fill" /> Empresa encontrada e ativa
                </p>
            </Card>

            <Card title="Dados da empresa" subtitle="Preenchidos automaticamente">
                <div className="grid grid-cols-2 gap-2.5">
                    <div className="col-span-2">
                        <Field label="Razão social" value="NovaPack Indústria LTDA" />
                    </div>
                    <Field label="Nome fantasia" value="NovaPack" />
                    <Field label="Porte" value="Média empresa" />
                    <Field label="Cidade / UF" value="Campinas / SP" />
                    <Field label="Atividade" value="Embalagens" />
                </div>
            </Card>

            <div className="flex justify-end">
                <span className="flex items-center gap-1 rounded-lg bg-flare px-3.5 py-1.5 text-[10px] font-semibold text-white shadow">
                    Confirmar empresa <ArrowRight className="h-3 w-3" />
                </span>
            </div>
        </div>
    );
}

function MobileHeader({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <div className="bg-flare px-5 py-5 text-white">
            <p className="text-base font-semibold">{title}</p>
            <p className="text-[11px] text-white/80">{subtitle}</p>
        </div>
    );
}

function MobileField({
    label,
    value,
    Icon,
    valid,
    className = "",
}: {
    label: string;
    value: string;
    Icon: LucideIcon;
    valid?: boolean;
    className?: string;
}) {
    return (
        <div className={`min-w-0 ${className}`}>
            <p className="mb-1 text-[10px] font-semibold text-ink">{label}</p>
            <div
                className={`flex items-center gap-2 rounded-xl border bg-white px-3 py-2.5 shadow-sm ${valid ? "border-green-500/50" : "border-hairline/25"
                    }`}
            >
                <Icon className={`h-3.5 w-3.5 shrink-0 ${valid ? "text-green-600" : "text-paper-dim"}`} />
                <span className="flex-1 truncate text-[11px] font-medium text-ink">{value}</span>
                {valid && (
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-500">
                        <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                    </span>
                )}
            </div>
        </div>
    );
}

function MobileButton({ children }: { children: ReactNode }) {
    return (
        <div className="rounded-full bg-flare py-2.5 text-center text-[12px] font-semibold text-white shadow-md">
            {children}
        </div>
    );
}

function ProfileTestScreen() {
    const options = ["Sozinho, com foco total", "Em equipe, trocando ideias", "Liderando o time", "Depende do projeto"];
    return (
        <div className="flex h-full flex-col">
            <MobileHeader title="Teste de Perfil" subtitle="Descubra como você trabalha melhor" />
            <div className="flex-1 space-y-4 px-5 py-5">
                <div>
                    <div className="mb-1 flex justify-between text-[10px] text-paper-dim">
                        <span>Pergunta 3 de 10</span>
                        <span className="font-semibold text-ink">30%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-hairline/30">
                        <div className="h-full rounded-full bg-flare" style={{ width: "30%" }} />
                    </div>
                </div>

                <p className="text-[14px] font-semibold leading-snug text-ink">Como você prefere trabalhar no dia a dia?</p>

                <div className="space-y-2">
                    {options.map((o, i) => (
                        <div
                            key={o}
                            className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-[11px] ${i === 1 ? "border-flare bg-flare/10 font-semibold text-ink" : "border-hairline/20 bg-white text-paper-dim"
                                }`}
                        >
                            <span
                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${i === 1 ? "border-flare bg-flare" : "border-hairline/40"
                                    }`}
                            >
                                {i === 1 && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                            </span>
                            {o}
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-5 pb-4">
                <MobileButton>Próxima</MobileButton>
            </div>
        </div>
    );
}

function CpfSignupScreen() {
    return (
        <div className="flex h-full flex-col">
            <MobileHeader title="Crie seu perfil" subtitle="Leva menos de 1 minuto" />

            <div className="flex-1 space-y-3 px-5 pt-4">
                <div>
                    <div className="mb-1.5 flex items-center justify-between text-[10px]">
                        <span className="font-semibold text-ink">Etapa 1 de 3</span>
                        <span className="text-paper-dim">Dados pessoais</span>
                    </div>
                    <div className="flex gap-1.5">
                        <span className="h-1.5 flex-1 rounded-full bg-flare" />
                        <span className="h-1.5 flex-1 rounded-full bg-hairline/30" />
                        <span className="h-1.5 flex-1 rounded-full bg-hairline/30" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <MobileField label="CPF" value="123.456.789-00" Icon={IdCard} valid />
                    <p className="flex items-center gap-1 text-[9px] font-medium text-green-600">
                        <ShieldCheck className="h-3 w-3" /> CPF verificado com sucesso
                    </p>
                </div>

                <MobileField label="Nome completo" value="Marina Souza" Icon={User} valid />

                <div className="grid grid-cols-2 gap-2.5">
                    <MobileField label="Nascimento" value="14/03/1998" Icon={CalendarDays} />
                    <MobileField label="Celular" value="(11) 98765-4321" Icon={Phone} />
                </div>

                <MobileField label="E-mail" value="marina@email.com" Icon={Mail} valid />

                <div className="flex items-start gap-2 pt-0.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-flare">
                        <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                    </span>
                    <p className="text-[9px] leading-snug text-paper-dim">
                        Li e concordo com os <span className="font-semibold text-flare">Termos de uso</span> e a{" "}
                        <span className="font-semibold text-flare">Política de privacidade</span>.
                    </p>
                </div>
            </div>

            <div className="space-y-2 px-5 pb-4 pt-3">
                <div className="flex items-center justify-center gap-2 rounded-full bg-flare py-3 text-[12px] font-semibold text-white shadow-md">
                    Continuar <ArrowRight className="h-3.5 w-3.5" />
                </div>
                <p className="flex items-center justify-center gap-1 text-[9px] text-paper-dim">
                    <Lock className="h-2.5 w-2.5" /> Seus dados estão protegidos
                </p>
            </div>
        </div>
    );
}

function ProfileScreen() {
    return (
        <div className="flex h-full flex-col">
            <MobileHeader title="Meu perfil" subtitle="Sem currículo, sem complicação" />

            <div className="flex-1 space-y-3 overflow-y-auto px-2 pt-4">
                <div className="flex items-center gap-3 rounded-xl border border-hairline/20 bg-white p-3 shadow-sm">
                    <span className="relative h-14 w-14 shrink-0">
                        <span className="relative block h-full w-full overflow-hidden rounded-full border-[3px] border-white bg-[linear-gradient(135deg,#FA8E12,#DC4D00)] shadow-md ring-2 ring-flare/40">
                            <Image
                                src="/imagens/woman-smiling.png"
                                alt="Ana Ferreira"
                                fill
                                sizes="56px"
                                className="object-cover"
                            />
                        </span>
                        <span className="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-green-500">
                            <Check className="h-2 w-2 text-white" strokeWidth={4} />
                        </span>
                    </span>

                    <div className="min-w-0 flex-1 leading-tight">
                        <p className="truncate text-[13px] font-semibold text-ink">Ana Ferreira</p>
                        <p className="flex items-center gap-1 text-[10px] text-paper-dim">
                            <Briefcase className="h-2.5 w-2.5" /> Auxiliar de Produção
                        </p>
                        <p className="flex items-center gap-1 text-[10px] text-paper-dim">
                            <MapPin className="h-2.5 w-2.5" /> Campinas, SP
                        </p>
                    </div>
                </div>

                <div className="rounded-xl border border-hairline/20 bg-white p-3 shadow-sm">
                    <div className="mb-1.5 flex items-center justify-between text-[10px]">
                        <span className="flex items-center gap-1 font-semibold text-ink">
                            <Sparkles className="h-3 w-3 text-flare" /> Perfil completo
                        </span>
                        <span className="font-bold text-flare">85%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-hairline/30">
                        <div className="h-full rounded-full bg-flare" style={{ width: "85%" }} />
                    </div>
                    <p className="mt-1.5 text-[9px] text-paper-dim">Adicione uma experiência para chegar a 100%</p>
                </div>

                {/* Perfil comportamental */}
                <div className="rounded-xl border border-hairline/20 bg-white p-3 shadow-sm">
                    <p className="mb-2 flex items-center gap-1 text-[11px] font-semibold text-ink">
                        <Star className="h-3 w-3 text-flare" /> Perfil comportamental
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {["Pontual", "Dedicada", "Trabalha bem em equipe"].map((t) => (
                            <span key={t} className="rounded-full bg-flare/10 px-2.5 py-1 text-[10px] font-medium text-flare">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Experiência */}
                <div className="rounded-xl border border-hairline/20 bg-white p-3 shadow-sm">
                    <p className="mb-2 flex items-center gap-1 text-[11px] font-semibold text-ink">
                        <Briefcase className="h-3 w-3 text-flare" /> Experiência
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {["Linha de produção", "Embalagem", "Controle de qualidade", "Disponível p/ turnos"].map((t) => (
                            <span key={t} className="rounded-full bg-hairline/15 px-2.5 py-1 text-[10px] font-medium text-paper-dim">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl border border-flare/25 bg-flare/5 p-3">
                    <div className="mb-2 flex items-center justify-between">
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-ink">
                            <TrendingUp className="h-3 w-3 text-flare" /> Vagas compatíveis
                        </span>
                        <span className="rounded-full bg-flare px-2 py-0.5 text-[10px] font-bold text-white">8 novas</span>
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between rounded-lg bg-white px-2.5 py-2 shadow-sm">
                            <div className="min-w-0">
                                <p className="truncate text-[10px] font-semibold text-ink">Auxiliar de Produção</p>
                                <p className="text-[9px] text-paper-dim">NovaPack Indústria · R$ 2.350,00</p>
                            </div>
                            <span className="shrink-0 text-[10px] font-bold text-flare">96%</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-white px-2.5 py-2 shadow-sm">
                            <div className="min-w-0">
                                <p className="truncate text-[10px] font-semibold text-ink">Auxiliar de Logística</p>
                                <p className="text-[9px] text-paper-dim">Rota Sul Distribuidora · R$ 2.400,00</p>
                            </div>
                            <span className="shrink-0 text-[10px] font-bold text-flare">89%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}