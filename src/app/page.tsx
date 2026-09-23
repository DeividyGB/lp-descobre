import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Audiences } from "@/components/sections/audiences";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { HowItWorksCombined } from "@/components/sections/use-the-system";
import { ReviewsSection } from "@/components/sections/reviews";
import { FeaturesSection } from "@/components/sections/features";


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <HowItWorksCombined />
        <Audiences />
        <ReviewsSection />
        <FeaturesSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
