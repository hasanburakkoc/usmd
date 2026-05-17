import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LeadCTA } from "@/components/sections/LeadCTA";
import { PatientConcerns } from "@/components/sections/PatientConcerns";
import { PatientQuote } from "@/components/sections/PatientQuote";
import { TreatmentsPreview } from "@/components/sections/TreatmentsPreview";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { WhyTurkeyStats } from "@/components/sections/WhyTurkeyStats";
import {
  listTreatmentCategories,
  toHomeHighlights,
  treatmentNamesForLeadForm
} from "@/lib/firestore/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const categories = await listTreatmentCategories();
  const highlights = toHomeHighlights(categories);
  const treatmentOptions = treatmentNamesForLeadForm(categories);

  return (
    <main className="relative min-h-screen">
      <Hero />
      <TreatmentsPreview highlights={highlights} />
      <WhyTurkeyStats />
      <TrustIndicators />
      <HowItWorks />
      <PatientConcerns />
      <PatientQuote />
      <LeadCTA treatmentOptions={treatmentOptions} />
    </main>
  );
}
