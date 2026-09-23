"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { AppDownloadModal } from "@/components/app-download-modal";

interface AppDownloadModalContextValue {
  open: () => void;
  close: () => void;
}

const AppDownloadModalContext = createContext<AppDownloadModalContextValue | null>(null);

export function AppDownloadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppDownloadModalContext.Provider
      value={{ open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
      <AppDownloadModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </AppDownloadModalContext.Provider>
  );
}

export function useAppDownloadModal() {
  const ctx = useContext(AppDownloadModalContext);
  if (!ctx) {
    throw new Error("useAppDownloadModal precisa estar dentro de AppDownloadModalProvider");
  }
  return ctx;
}