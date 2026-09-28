"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  googlePlayUrl?: string;
  appStoreUrl?: string;
}

const DEFAULT_GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.seuapp";
const DEFAULT_APP_STORE_URL = "https://apps.apple.com/app/idSEU_ID_AQUI";

const GOOGLE_PLAY_BADGE_SRC = "/imagens/badges/google-play-badge.webp";
const APP_STORE_BADGE_SRC = "/imagens/badges/app-store-badge.webp";

const CARD_CLASS =
  "group relative flex aspect-square flex-col items-center justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/35 hover:bg-white/[0.09] hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-5";

const BADGE_CLASS =
  "h-auto w-full max-w-[90px] transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none";

export function AppDownloadModal({
  isOpen,
  onClose,
  googlePlayUrl = DEFAULT_GOOGLE_PLAY_URL,
  appStoreUrl = DEFAULT_APP_STORE_URL,
}: AppDownloadModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setVisible(false);
      return;
    }

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = requestAnimationFrame(() => {
      setVisible(true);
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className={`app-modal-overlay fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-md transition-opacity duration-300 motion-reduce:transition-none sm:items-center ${visible ? "opacity-100" : "opacity-0"
        }`}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="app-download-modal-title"
        aria-describedby="app-download-modal-desc"
        className={`card-glass app-modal-panel relative my-auto w-full max-w-lg overflow-hidden rounded-[32px] p-6 text-center transition-all duration-300 ease-out motion-reduce:transition-none sm:p-10 ${visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-6 scale-95 opacity-0"
          }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
        />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute cursor-pointer right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:right-5 sm:top-5"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative">
          <span className="inline-flex bg-orange-card items-center gap-2 rounded-full px-4 py-2 text-sm font-medium uppercase tracking-widest text-white">
            {/* <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> */}
            App disponível
          </span>

          <h2
            id="app-download-modal-title"
            className="text-gradient mt-4 text-2xl font-bold leading-tight sm:text-3xl"
          >
            Baixe o app e comece agora !
          </h2>
          <p
            id="app-download-modal-desc"
            className="mx-auto mt-3 max-w-xs text-sm text-paper-dim sm:text-base"
          >
            Escolha sua loja para continuar o cadastro pelo app.
          </p>
        </div>

        <div className="relative mt-8 grid grid-cols-2 gap-3 sm:gap-5">
          <Link
            href={googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixar no Google Play (abre em nova aba)"
            className={CARD_CLASS}
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/50">
              Android
            </span>
            <Image
              src={GOOGLE_PLAY_BADGE_SRC}
              alt="Disponível no Google Play"
              width={140}
              height={42}
              className={BADGE_CLASS}
            />
            <span className="flex items-center gap-1 text-xs font-medium text-white/60 transition-colors group-hover:text-white">
              Baixar agora
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>

          <Link
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixar na App Store (abre em nova aba)"
            className={CARD_CLASS}
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/50">
              iPhone
            </span>
            <Image
              src={APP_STORE_BADGE_SRC}
              alt="Disponível na App Store"
              width={140}
              height={42}
              className={BADGE_CLASS}
            />
            <span className="flex items-center gap-1 text-xs font-medium text-white/60 transition-colors group-hover:text-white">
              Baixar agora
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        <p className="relative mt-6 text-xs text-white/40">
          Você será redirecionado para a loja em uma nova aba.
        </p>
      </div>
    </div>,
    document.body
  );
}

export default AppDownloadModal;