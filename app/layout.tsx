import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MEDIACOM Group - Agenzia di Comunicazione, Marketing e Ufficio Stampa",
  description: "Agenzia leader a Milano per strategie digitali, eventi e ufficio stampa. Collaboriamo esclusivamente con aziende pronte a dominare il mercato.",
  icons: {
    icon: "/favicon.avif",
  },
};

import { ActiveBackground } from "@/components/layout/active-background"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-transparent text-white selection:bg-[#ff3067]/30 selection:text-white antialiased overflow-x-hidden`}>
        <ActiveBackground />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
