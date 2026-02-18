import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { LogoTicker } from "@/components/sections/logo-ticker";
import { ResultsIntro } from "@/components/sections/results-intro";
import { CaseStudies } from "@/components/sections/case-studies";
import { StrategiesGrid } from "@/components/sections/strategies-grid";
import { IdeaToStrategy } from "@/components/sections/idea-to-strategy";
import { TailoredStrategies } from "@/components/sections/tailored-strategies";
import { FinalCta } from "@/components/sections/final-cta";

import { PortfolioFeed } from "@/components/sections/portfolio-feed";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative">
      <Navbar />
      <Hero />
      <LogoTicker />
      <ResultsIntro />
      <CaseStudies />
      <PortfolioFeed />
      <StrategiesGrid />
      <IdeaToStrategy />
      <TailoredStrategies />
      <FinalCta />

      <Footer />
    </main>
  );
}
