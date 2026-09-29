"use client";

import { Button } from "@/components/ui/button";
import { useAppDownloadModal } from "../app-download-modal-context";
import Image from "next/image";
import {
  Layers,
  Hourglass,
  Video,
  CheckCircle2,
  Briefcase,
  FileText,
  UserRound,
  Bell,
} from "lucide-react";
import { WifiHigh, CellSignalFull, BatteryFull } from "@phosphor-icons/react";

/* ------------------------------------------------------------------ */
/*  Tipografia do mockup: tudo em cqw (largura da tela do celular),    */
/*  com piso em px para nunca ficar ilegível. Assim o layout escala    */
/*  igual em qualquer tamanho, sem precisar de um breakpoint por item. */
/* ------------------------------------------------------------------ */
const T = {
  micro: "text-[length:max(8px,3cqw)]",
  small: "text-[length:max(9px,3.4cqw)]",
  body: "text-[length:max(10px,3.9cqw)]",
  strong: "text-[length:max(11px,4.3cqw)]",
  stat: "text-[length:max(13px,5cqw)]",
  title: "text-[length:max(16px,6.2cqw)]",
};

type Status = "enviada" | "analise" | "entrevista" | "aprovado";

const STATUS: Record<Status, { label: string; chip: string; dot: string }> = {
  enviada: { label: "Enviada", chip: "bg-hairline/10 text-paper-dim", dot: "bg-paper-dim" },
  analise: { label: "Em análise", chip: "bg-amber-500/10 text-amber-600", dot: "bg-amber-500" },
  entrevista: { label: "Entrevista", chip: "bg-red-500/10 text-red-600", dot: "bg-red-500" },
  aprovado: { label: "Aprovado", chip: "bg-green-600/10 text-green-700", dot: "bg-green-600" },
};

type Candidacy = {
  logoSrc?: string;
  title: string;
  company: string;
  time: string;
  status: Status;
};

const CANDIDACIES: Candidacy[] = [
  {
    logoSrc: "/imagens/logos/novapack.png",
    title: "Auxiliar de Produção",
    company: "NovaPack Indústria LTDA",
    time: "Hoje",
    status: "enviada",
  },
  {
    logoSrc: "/imagens/logos/rota-sul.png",
    title: "Auxiliar de Logística",
    company: "Rota Sul Distribuidora LTDA",
    time: "Ontem",
    status: "analise",
  },
  {
    title: "Operador de Empilhadeira",
    company: "Vértice Armazéns LTDA",
    time: "2 dias",
    status: "entrevista",
  },
  {
    title: "Ajudante Geral",
    company: "Construtora Alvorada",
    time: "3 dias",
    status: "analise",
  },
  {
    title: "Auxiliar Administrativo",
    company: "Grupo Horizonte",
    time: "1 sem",
    status: "aprovado",
  },
];

const AVATAR_TONES = [
  "bg-flare/10 text-flare",
  "bg-amber-500/15 text-amber-700",
  "bg-green-600/10 text-green-700",
  "bg-sky-500/10 text-sky-700",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function StatFinal({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center gap-[0.6cqw]">
      <span className={color}>{icon}</span>
      <p className={`${T.stat} font-bold leading-none text-ink`}>{value}</p>
      <p className={`${T.micro} leading-none text-paper-dim`}>{label}</p>
    </div>
  );
}

function CandidacyRow({ item, index }: { item: Candidacy; index: number }) {
  const status = STATUS[item.status];

  return (
    <div className="flex items-center gap-[2.8cqw] rounded-[5cqw] border border-hairline/15 bg-white px-[3.5cqw] py-[3cqw] shadow-sm">
      <span className="relative size-[max(32px,11cqw)] shrink-0 overflow-hidden rounded-full border border-hairline/15 bg-white">
        {item.logoSrc ? (
          <Image
            src={item.logoSrc}
            alt={item.company}
            fill
            sizes="48px"
            className="object-cover"
          />
        ) : (
          <span
            aria-label={item.company}
            className={`flex h-full w-full items-center justify-center font-bold ${T.small} ${AVATAR_TONES[index % AVATAR_TONES.length]
              }`}
          >
            {initials(item.company)}
          </span>
        )}
      </span>

      <div className="min-w-0 flex-1 leading-tight">
        <p className={`truncate ${T.strong} font-bold text-ink`}>{item.title}</p>
        <p className={`truncate ${T.small} text-paper-dim`}>{item.company}</p>
        <div className="mt-[1.4cqw] flex items-center gap-[2cqw]">
          <span
            className={`inline-flex items-center gap-[1.2cqw] rounded-full px-[2.2cqw] py-[0.7cqw] font-medium ${T.micro} ${status.chip}`}
          >
            <span className={`size-[1.4cqw] min-h-[4px] min-w-[4px] rounded-full ${status.dot}`} />
            {status.label}
          </span>
          <span className={`${T.micro} text-paper-dim`}>{item.time}</span>
        </div>
      </div>

      <span className={`${T.strong} text-paper-dim`}>›</span>
    </div>
  );
}

function FinalCtaPhoneMockup() {
  const count = (s: Status) => CANDIDACIES.filter((c) => c.status === s).length;

  return (
    <div className="final-cta-float relative max-md:h-full md:w-[270px] lg:w-[300px] xl:w-[400px]">

      {/* Corpo do celular: a proporção manda; no mobile a altura é do pai e a largura sai dela */}
      <div className="relative aspect-[9/19] rounded-[34px] bg-ink p-2 shadow-2xl max-md:h-full md:aspect-[9/18] md:rounded-[42px] md:p-2.5 lg:aspect-[9/19] lg:rounded-[46px] lg:p-2.5 xl:rounded-[54px] xl:p-3">
        {/* Botões laterais (posição em %, acompanha a altura) */}
        <span className="absolute -left-[3px] top-[14%] h-[4%] w-[3px] rounded-l bg-ink/80" />
        <span className="absolute -left-[3px] top-[20%] h-[7%] w-[3px] rounded-l bg-ink/80" />
        <span className="absolute -left-[3px] top-[29%] h-[7%] w-[3px] rounded-l bg-ink/80" />
        <span className="absolute -right-[3px] top-[23%] h-[8%] w-[3px] rounded-r bg-ink/80" />

        <div className="@container relative flex h-full flex-col overflow-hidden rounded-[26px] bg-paper md:rounded-[32px] lg:rounded-[36px] xl:rounded-[42px]">
          <div className="absolute left-1/2 top-[2.4cqw] z-20 h-[6.4cqw] w-[26cqw] -translate-x-1/2 rounded-full bg-ink" />

          <div
            className={`flex shrink-0 items-center justify-between bg-white px-[7cqw] pb-[2cqw] pt-[3.6cqw] font-semibold text-ink ${T.small}`}
          >
            <span>16:04</span>
            <div className="flex items-center gap-[1cqw]" style={{ fontSize: "max(12px,4.2cqw)" }}>
              <CellSignalFull size="1em" weight="fill" />
              <WifiHigh size="1em" weight="fill" />
              <BatteryFull size="1.15em" weight="fill" />
            </div>
          </div>

          <div className="relative min-h-0 flex-1 overflow-hidden">
            <div className="flex items-start justify-between bg-flare px-[6cqw] pb-[10cqw] pt-[5cqw] text-white">
              <div>
                <p className={`${T.title} font-bold leading-tight`}>Candidaturas</p>
                <p className={`${T.small} text-white/80`}>Acompanhe o status das suas vagas</p>
              </div>
              <span className="grid size-[max(28px,9cqw)] shrink-0 place-items-center rounded-full bg-white/15">
                <Bell className="size-[max(14px,4.6cqw)]" />
              </span>
            </div>

            <div className="relative -mt-[6.5cqw] mx-[4.5cqw] grid grid-cols-4 gap-[1cqw] rounded-[5cqw] bg-white px-[2cqw] py-[3.6cqw] text-center shadow-md">
              <StatFinal
                icon={<Layers className="size-[max(13px,4.6cqw)]" />}
                value={CANDIDACIES.length}
                label="Total"
                color="text-ink"
              />
              <StatFinal
                icon={<Hourglass className="size-[max(13px,4.6cqw)]" />}
                value={count("analise")}
                label="Em análise"
                color="text-amber-500"
              />
              <StatFinal
                icon={<Video className="size-[max(13px,4.6cqw)]" />}
                value={count("entrevista")}
                label="Entrevistas"
                color="text-red-500"
              />
              <StatFinal
                icon={<CheckCircle2 className="size-[max(13px,4.6cqw)]" />}
                value={count("aprovado")}
                label="Aprovado"
                color="text-green-600"
              />
            </div>

            <div
              className={`flex gap-[2cqw] overflow-hidden whitespace-nowrap px-[4.5cqw] py-[3.6cqw] font-medium ${T.micro}`}
            >
              <span className="rounded-full bg-flare px-[3.2cqw] py-[1.6cqw] text-white shadow-sm">
                ✓ Todas
              </span>
              <span className="rounded-full border border-hairline/25 bg-white px-[3.2cqw] py-[1.6cqw] text-paper-dim">
                Em análise
              </span>
              <span className="rounded-full border border-hairline/25 bg-white px-[3.2cqw] py-[1.6cqw] text-paper-dim">
                Entrevista
              </span>
              <span className="rounded-full border border-hairline/25 bg-white px-[3.2cqw] py-[1.6cqw] text-paper-dim">
                Aprovado
              </span>
            </div>

            <div className="space-y-[2.6cqw] px-[4.5cqw]">
              <div className="flex items-center justify-between">
                <p className={`${T.small} font-semibold text-ink`}>Todas as candidaturas</p>
                <span className={`rounded-full bg-hairline/10 px-[2.2cqw] py-[0.7cqw] text-paper-dim ${T.micro}`}>
                  {CANDIDACIES.length} vagas
                </span>
              </div>

              {CANDIDACIES.map((item, i) => (
                <CandidacyRow key={item.title} item={item} index={i} />
              ))}
            </div>

            {/* Fade indicando que a lista continua */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18cqw] bg-linear-to-t from-paper via-paper/80 to-transparent" />
          </div>

          {/* Barra de navegação */}
          <div
            className={`flex shrink-0 items-center justify-around border-t border-hairline/15 bg-white px-[4cqw] py-[3cqw] font-medium text-paper-dim ${T.micro}`}
          >
            <span className="flex flex-col items-center gap-[0.8cqw]">
              <Briefcase className="size-[max(14px,4.6cqw)]" /> Vagas
            </span>
            <span className="flex flex-col items-center gap-[0.8cqw] text-flare">
              <FileText className="size-[max(14px,4.6cqw)]" /> Candidaturas
            </span>
            <span className="flex flex-col items-center gap-[0.8cqw]">
              <UserRound className="size-[max(14px,4.6cqw)]" /> Perfil
            </span>
          </div>
        </div>
      </div>

      {/* Balões flutuantes */}
      <div className="float-badge-1 absolute -right-3 top-[38%] whitespace-nowrap rounded-full bg-white px-3.5 py-2 text-[11px] font-semibold text-ink shadow-xl sm:-right-6 sm:px-5 sm:py-3 sm:text-[13px] lg:-right-6 lg:px-4 lg:py-2.5 lg:text-[12px] xl:-right-10 xl:px-5 xl:py-3 xl:text-[13px]">
        Empresas <span className="font-extrabold text-flare">via Web</span>
      </div>
      <div className="float-badge-2 absolute -right-1 top-[52%] whitespace-nowrap rounded-full bg-white px-3.5 py-2 text-[11px] font-semibold text-ink shadow-xl sm:-right-3 sm:px-5 sm:py-3 sm:text-[13px] lg:-right-3 lg:px-4 lg:py-2.5 lg:text-[12px] xl:-right-4 xl:px-5 xl:py-3 xl:text-[13px]">
        Candidatos <span className="font-extrabold text-flare">via App</span>
      </div>
    </div>
  );
}

export function FinalCta() {
  const { open } = useAppDownloadModal();

  return (
    <section className="bg-ink px-4 py-20 max-md:py-12 sm:px-6">
      <div className="relative mx-auto max-w-[1650px]">
        <div className="final-cta-shell relative overflow-hidden rounded-[40px] bg-surface max-md:rounded-[28px]">
          <div className="grid md:grid-cols-2 md:items-center max-md:gap-20">

            <div className="card-glass final-cta-panel relative z-10 m-6 flex flex-col items-start gap-8 rounded-[32px] max-sm:m-3 sm:m-10 md:m-16">
              <Image
                src="/icones/DESCOBRE-ICON.svg"
                alt="Descobre"
                width={40}
                height={40}
                className="final-cta-logo max-md:w-[clamp(140px,60cqw,220px)]!"
              />

              <h2 className="final-cta-heading text-paper">
                <span className="block">Seu talento.</span>
                <span className="block">Nossa missão!</span>
              </h2>

              <div className="flex flex-wrap items-center gap-4 max-sm:w-full max-sm:flex-col max-sm:items-stretch">
                <Button size="lg" className="btn-candidate rounded-full max-sm:w-full" onClick={open}>
                  Sou <span className="font-extrabold">candidato</span>
                </Button>
                <Button size="lg" variant="outline" className="btn-company rounded-full max-sm:w-full">
                  <a href="http://descobre.app.br/" target="_blank" rel="noopener noreferrer">
                    Sou <span className="font-extrabold">empresa</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="final-cta-photo-wrap relative max-md:h-[clamp(380px,120vw,560px)] max-md:overflow-hidden">
              <Image
                src="/imagens/background-mobile.png"
                alt=""
                width={1100}
                height={760}
                className="block h-auto w-full max-md:h-full max-md:object-cover"
                priority
              />
              <Image
                src="/imagens/asterisco-mockup.png"
                alt=""
                width={300}
                height={300}
                className="final-cta-asterisk"
                aria-hidden
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-30 grid md:grid-cols-2 md:items-center">
          <div aria-hidden />
          <div className="relative flex h-full items-center justify-center">
            <div className="pointer-events-auto final-cta-phone max-md:left-15! max-md:right-0! max-md:mx-auto! max-md:h-[115%]! max-md:top-[225px]! max-md:w-auto!">
              <FinalCtaPhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}