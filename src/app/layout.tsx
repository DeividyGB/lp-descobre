import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SvgFilters } from "@/components/ui/svg-filters";
import "./globals.css";
import { AppDownloadModalProvider } from "../components/app-download-modal-context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Descobre — O match certo entre talentos e empresas",
  description:
    "Empresas descobrem talentos. Pessoas descobrem oportunidades. Sem processo enrolado, sem currículo bonito.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className={`${poppins.className} min-h-full flex flex-col bg-ink text-paper overflow-x-hidden`}>
        <SvgFilters />
        <AppDownloadModalProvider>
          {children}
        </AppDownloadModalProvider>
      </body>
    </html>
  );
}