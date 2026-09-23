import Image from "next/image";
import { Bot, Flame, MessageCircle, UserCheck, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Feature {
  id: string;
  icon: LucideIcon;
  /** Plain text. Wrap any part in **double asterisks** to render it bold. */
  text: string;
}

interface FeaturesSectionProps {
  /** Steps/features to render. Defaults to the `features` array below. */
  features?: Feature[];
  /** Single decorative image centered behind the whole grid. */
  mockupSrc?: string;
}

// ---------------------------------------------------------------------------
// Data — edit freely. Swap the icon (any lucide-react icon works) or the
// text; **word** renders bold.
// ---------------------------------------------------------------------------

export const features: Feature[] = [
  {
    id: "profile",
    icon: UserCheck,
    text: "Crie seu perfil em **1 minuto**.",
  },
  {
    id: "ai-match",
    icon: Bot,
    text: "Deixe a **IA** cruzar dados por você.",
  },
  {
    id: "alerts",
    icon: Flame,
    text: "Receba alertas de **match perfeito**.",
  },
  {
    id: "chat",
    icon: MessageCircle,
    text: "Converse **sem intermediários** pelo chat.",
  },
];

// Swap this once you have the real mockup image.
const DEFAULT_MOCKUP_SRC = "/imagens/blur-features.png";

// ---------------------------------------------------------------------------
// Small helper — turns "text **bold** text" into styled JSX.
// ---------------------------------------------------------------------------

function renderWithBold(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

// ---------------------------------------------------------------------------
// One shared SVG gradient definition, rendered once by the section (not per
// card, so the id stays unique in the DOM). Colors match the FF7700 → A13800
// ramp from your reference. lucide-react icons are stroke-only, so passing
// this id as `color` (which lucide forwards straight to the `stroke`
// attribute) is enough to gradient-fill the whole icon.
// ---------------------------------------------------------------------------

const ICON_GRADIENT_ID = "feature-icon-gradient";

function IconGradientDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id={ICON_GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7700" />
          <stop offset="100%" stopColor="#A13800" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Single card — plain `bg-orange-card` surface. The glass effect lives only
// on the icon badge (`btn-glass-white`, already in globals.css), not on the
// card itself. The background mockup is no longer rendered per card — it's
// one shared image behind the whole grid (see ReviewsSection below).
// ---------------------------------------------------------------------------

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <li className="bg-orange-card relative flex flex-col items-center gap-6 overflow-hidden rounded-[28px] p-14 text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.45)]">
      <div className="btn-glass-white flex h-[200px] w-[220px] shrink-0 items-center justify-center rounded-3xl">
        <Icon
          className="h-[136px] w-[136px]"
          color={`url(#${ICON_GRADIENT_ID})`}
          strokeWidth={2}
        />
      </div>

      <p className="text-[1.8rem] leading-snug text-white">
        {renderWithBold(feature.text)}
      </p>
    </li>
  );
}

// ---------------------------------------------------------------------------
// Section — the mockup image sits once, centered behind the grid as a
// whole (`absolute` + `left-1/2 top-1/2` inside a `relative` wrapper), so
// it reads as a single piece of art peeking through/around the cards
// instead of being repeated inside each one.
// ---------------------------------------------------------------------------

export function FeaturesSection({
  features: featuresProp,
  mockupSrc = DEFAULT_MOCKUP_SRC,
}: FeaturesSectionProps = {}) {
  const items = featuresProp ?? features;

  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <IconGradientDefs />

      <div className="relative mx-auto max-w-[1500px] px-6">
        <Image
          src={mockupSrc}
          alt=""
          width={1800}
          height={1800}
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 max-w-none -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        />

        <ul className="relative z-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {items.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeaturesSection;