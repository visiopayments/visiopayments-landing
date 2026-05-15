import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { Hero } from "./components/hero";
import { UseCases } from "./components/use-cases";
import { Pricing } from "./components/pricing";
import { ProductFlow } from "./components/product-flow";
import { PressArticles } from "./components/press-articles";
import { Security } from "./components/security";
import { Api } from "./components/api";
import { Support } from "./components/support";
import { Faq } from "./components/faq";
import { FinalCta } from "./components/final-cta";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <UseCases />
      <PressArticles />
      <Pricing />
      <ProductFlow />
      <Api />
      <Security />
      <Support />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
