"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
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

export function AppDownloadModal({
  isOpen,
  onClose,
  googlePlayUrl = DEFAULT_GOOGLE_PLAY_URL,
  appStoreUrl = DEFAULT_APP_STORE_URL,
}: AppDownloadModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="app-modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="app-download-modal-title"
        className="card-glass app-modal-panel relative w-full max-w-md rounded-[32px] p-8 text-center sm:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <h2
          id="app-download-modal-title"
          className="text-gradient text-2xl font-bold sm:text-3xl"
        >
          Baixe o app e comece agora
        </h2>
        <p className="mt-3 text-sm text-paper-dim sm:text-base">
          Escolha sua loja para continuar o cadastro pelo app.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-1 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          >
            <Image
              src={GOOGLE_PLAY_BADGE_SRC}
              alt="Disponível no Google Play"
              width={200}
              height={60}
              className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-1 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          >
            <Image
              src={APP_STORE_BADGE_SRC}
              alt="Disponível na App Store"
              width={200}
              height={60}
              className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default AppDownloadModal;