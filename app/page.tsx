import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LeadCTA } from "@/components/sections/LeadCTA";
import { TreatmentsPreview } from "@/components/sections/TreatmentsPreview";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { WhyTurkeyStats } from "@/components/sections/WhyTurkeyStats";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyTurkeyStats />
      <TrustIndicators />
      <HowItWorks />
      <TreatmentsPreview />
      <LeadCTA />
    </main>
  );
}
