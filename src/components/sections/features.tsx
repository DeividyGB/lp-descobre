import Image from "next/image";
import type { ReactNode } from "react";

export interface Feature {
  id: string;
  iconSrc: string;
  text: string;
}

interface FeaturesSectionProps {
  features?: Feature[];
  mockupSrc?: string;
}

export const features: Feature[] = [
  {
    id: "profile",
    iconSrc: "/imagens/features/icon-profile.png",
    text: "Crie seu perfil em **1 minuto**.",
  },
  {
    id: "ai-match",
    iconSrc: "/imagens/features/icon-ai.png",
    text: "Deixe a **IA** cruzar dados por você.",
  },
  {
    id: "alerts",
    iconSrc: "/imagens/features/icon-match.png",
    text: "Receba alertas de **match perfeito**.",
  },
  {
    id: "chat",
    iconSrc: "/imagens/features/icon-chat.png",
    text: "Converse **sem intermediários** pelo chat.",
  },
];

const DEFAULT_MOCKUP_SRC = "/imagens/blur-features.png";

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

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <li className="bg-orange-card-features relative flex flex-col items-center gap-6 overflow-hidden rounded-[28px] p-14 text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.45)] max-md:flex-row max-md:gap-4 max-md:rounded-[24px] max-md:p-4 max-md:text-left">
      <div
        className="btn-glass-white flex h-[200px] w-[240px] shrink-0 items-center justify-center rounded-3xl max-md:h-[88px] max-md:w-[88px] max-md:rounded-2xl"
        style={{ backgroundColor: "#f8a14c" }}
      >
        <Image
          src={feature.iconSrc}
          alt=""
          width={150}
          height={150}
          className="h-[150px] w-[150px] object-contain max-md:h-[60px] max-md:w-[60px]"
        />
      </div>

      <p className="text-[1.8rem] leading-snug text-white max-md:text-[1.15rem]">
        {renderWithBold(feature.text)}
      </p>
    </li>
  );
}

export function FeaturesSection({
  features: featuresProp,
  mockupSrc = DEFAULT_MOCKUP_SRC,
}: FeaturesSectionProps = {}) {
  const items = featuresProp ?? features;

  return (
    <section className="bg-ink py-24 text-white max-md:overflow-hidden sm:py-32">
      <div className="relative mx-auto max-w-[1500px] px-6">
        <Image
          src={mockupSrc}
          alt=""
          width={1800}
          height={1800}
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 max-w-none -translate-x-1/2 -translate-y-1/2 max-md:h-auto max-md:w-[900px]"
          aria-hidden="true"
        />

        <ul className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeaturesSection;