"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface Review {
  id: string;
  name: string;
  avatarSrc: string;
  rating: number;
  quote: string;
}

interface ReviewsSectionProps {
  reviews?: Review[];
  headingPrefix?: string;
  headingHighlight?: string;
  ctaLabel?: string;
  logoSrc?: string;
  backgroundSrc?: string;
  quoteMaxLength?: number;
  ctaMaxLength?: number;
}

export const reviews: Review[] = [
  {
    id: "review-1",
    name: "Marina Alves",
    avatarSrc: "/imagens/reviews/avatar-1.jpg",
    rating: 5,
    quote: "Consegui meu emprego pelo D.ESCOBRE!",
  },
  {
    id: "review-2",
    name: "Camila Torres",
    avatarSrc: "/imagens/reviews/avatar-2.jpg",
    rating: 5,
    quote:
      "Em duas semanas já estava contratada. O processo foi rápido e direto ao ponto.",
  },
  {
    id: "review-3",
    name: "Beatriz Lima",
    avatarSrc: "/imagens/reviews/avatar-3.png",
    rating: 5,
    quote:
      "Nunca imaginei que arrumar emprego pudesse ser tão simples. Recomendo pra todo mundo que está procurando uma recolocação de verdade.",
  },
  {
    id: "review-4",
    name: "Juliana Ramos",
    avatarSrc: "/imagens/reviews/avatar-4.png",
    rating: 5,
    quote: "Plataforma excelente, indico de olhos fechados.",
  },
  {
    id: "review-5",
    name: "Fernanda Costa",
    avatarSrc: "/imagens/reviews/avatar-5.png",
    rating: 5,
    quote: "Finalmente encontrei a oportunidade certa e consegui meu emprego com o D.ESCOBRE!",
  },
];

const DEFAULT_LOGO_SRC = "/imagens/icon-descobre.png";
const DEFAULT_BACKGROUND_SRC = "/imagens/brazil-map-glow.png";
const DEFAULT_HEADING_PREFIX = "O Brasil que produz,";
const DEFAULT_HEADING_HIGHLIGHT = "está aqui.";
const DEFAULT_CTA_LABEL = "Eu quero!";
const FOCUS_THRESHOLD = 0.65;


export function truncateText(text: string, maxLength?: number) {
  if (!maxLength || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          strokeWidth={1.5}
          className={
            index < rating
              ? "h-6 w-6 fill-amber-400 text-amber-400 sm:h-7 sm:w-7"
              : "h-6 w-6 fill-white/10 text-white/10 sm:h-7 sm:w-7"
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

interface ReviewCardProps {
  review: Review;
  quoteMaxLength?: number;
}

function ReviewCard({ review, quoteMaxLength }: ReviewCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const displayQuote = truncateText(review.quote, quoteMaxLength);

  return (
    <li
      data-review-id={review.id}
      className="card-glass flex w-[380px] shrink-0 items-center gap-4 overflow-hidden rounded-[28px] p-4 will-change-[filter,opacity,transform] sm:w-[480px] sm:gap-5 sm:p-5"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/15 sm:h-20 sm:w-20">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/20 to-white/5 text-sm font-semibold text-white/70">
            {getInitials(review.name)}
          </div>
        ) : (
          <Image
            src={review.avatarSrc}
            alt={review.name}
            fill
            sizes="80px"
            className="object-cover"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 text-left">
        <StarRating rating={review.rating} />
        <p className="text-lg leading-snug text-white/90">{displayQuote}</p>
      </div>
    </li>
  );
}

export function ReviewsSection({
  reviews: reviewsProp,
  headingPrefix = DEFAULT_HEADING_PREFIX,
  headingHighlight = DEFAULT_HEADING_HIGHLIGHT,
  ctaLabel = DEFAULT_CTA_LABEL,
  logoSrc = DEFAULT_LOGO_SRC,
  backgroundSrc = DEFAULT_BACKGROUND_SRC,
  quoteMaxLength,
  ctaMaxLength,
}: ReviewsSectionProps = {}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const items = reviewsProp ?? reviews;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const syncCardHeights = () => {
      const cards = Array.from(
        track.querySelectorAll<HTMLElement>("[data-review-id]")
      );
      if (cards.length === 0) return;

      cards.forEach((card) => {
        card.style.height = "auto";
      });

      const maxHeight = Math.max(
        ...cards.map((card) => card.getBoundingClientRect().height)
      );

      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    };

    syncCardHeights();

    const resizeObserver = new ResizeObserver(syncCardHeights);
    resizeObserver.observe(track);
    window.addEventListener("resize", syncCardHeights);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncCardHeights);
    };
  }, [items]);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const tick = () => {
      const containerRect = container.getBoundingClientRect();
      const center = containerRect.left + containerRect.width / 2;
      const maxDistance = containerRect.width / 2;

      Array.from(track.children).forEach((child) => {
        const el = child as HTMLElement;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - center);
        const normalized = 1 - Math.min(distance / maxDistance, 1);
        const focus = Math.min(Math.max(normalized, 0), 1);
        const isSharp = focus >= FOCUS_THRESHOLD;

        el.style.filter = isSharp ? "none" : `blur(${(1 - focus) * 4}px)`;
        el.style.opacity = String(0.3 + focus * 0.7);
        el.style.transform = `scale(${0.9 + focus * 0.1})`;
      });

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [items.length]);

  const pauseMarquee = () => trackRef.current?.classList.add("is-paused");
  const resumeMarquee = () => trackRef.current?.classList.remove("is-paused");
  const loopedReviews = [...items, ...items];
  const displayCtaLabel = truncateText(ctaLabel, ctaMaxLength);

  return (
    <section className="relative overflow-hidden border-b border-hairline/60 bg-[#0b0908] py-52 text-white">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-70"
        aria-hidden="true"
      >
        <Image
          src={backgroundSrc}
          alt=""
          width={1200}
          height={1200}
          className="max-w-none"
          priority={false}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <div className="relative h-[100px] w-[100px]">
          <Image
            src={logoSrc}
            alt="D.escobre"
            fill
            sizes="73px"
            className="object-contain"
          />
        </div>

        <h2 className="mt-8 text-4xl tracking-tight sm:text-5xl">
          {headingPrefix}{" "}
          <span className="text-orange-500 font-semibold ">{headingHighlight}</span>
        </h2>

        <div
          ref={containerRef}
          className="relative mt-16 w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
          onMouseEnter={pauseMarquee}
          onMouseLeave={resumeMarquee}
        >
          <ul ref={trackRef} className="reviews-track flex w-max gap-5">
            {loopedReviews.map((review, index) => (
              <ReviewCard
                key={`${review.id}-${index}`}
                review={review}
                quoteMaxLength={quoteMaxLength}
              />
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="bg-flare text-ink hover:bg-flare-deep hover:text-paper h-18 px-12 btn-company rounded-full mt-16 text-[46px]"
        >
          {displayCtaLabel}
        </button>
      </div>
    </section>
  );
}

export default ReviewsSection;