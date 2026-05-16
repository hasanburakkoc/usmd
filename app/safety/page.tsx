import type { Metadata } from "next";
import Link from "next/link";
import { SAFETY_SECTIONS } from "@/lib/constants/safety";
import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: `Patient Safety | ${SITE_NAME}`,
  description:
    "How USMD supports US patients with accredited hospitals, English coordination, insurance guidance, and escalation if plans change.",
  alternates: { canonical: `${SITE_URL}/safety` }
};

export default function SafetyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-10 lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-wide text-medical-teal">
          Patient safety
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-trust-green md:text-5xl">
          Your safety is the center of the plan
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-gray md:text-base">
          Traveling abroad for care is a serious decision. USMD exists so you
          are not improvising alone—we coordinate with accredited partners and
          stay reachable in US English before, during, and after your trip.
        </p>

        <div className="mt-10 space-y-8">
          {SAFETY_SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-trust-green md:text-xl">
                {section.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-gray md:text-base">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/transparency"
            className="inline-flex rounded-full border border-trust-green px-6 py-3 text-sm font-semibold text-trust-green hover:bg-trust-green/5"
          >
            What&apos;s included
          </Link>
          <Link
            href="/#consultation"
            className="inline-flex rounded-full bg-medical-teal px-6 py-3 text-sm font-semibold text-white hover:bg-medical-teal/90"
          >
            Ask a safety question
          </Link>
        </div>
      </article>
    </main>
  );
}
