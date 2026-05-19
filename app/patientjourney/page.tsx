import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { PatientJourneyNav } from "@/components/sections/PatientJourneyNav";
import { PatientJourneySectionBridge } from "@/components/sections/PatientJourneySectionBridge";
import { PatientJourneySteps } from "@/components/sections/PatientJourneySteps";
import { PATIENT_JOURNEY_GUIDE_BULLETS } from "@/lib/constants/patient-journey";
import {
  PACKAGE_INCLUSION_ROWS,
  TRANSPARENCY_DISCLAIMER,
  US_TR_COMPARISON_ROWS
} from "@/lib/constants/transparency";
import {
  WHATS_INCLUDED_FOOTNOTE,
  WHATS_INCLUDED_HEADING,
  WHATS_INCLUDED_ITEMS,
  WHATS_INCLUDED_SUBHEAD
} from "@/lib/constants/whats-included";
import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: `Patient Journey | ${SITE_NAME}`,
  description:
    "Your step-by-step path to coordinated care in Türkiye—consultation, travel, treatment, recovery, and what is included in your custom quote.",
  alternates: { canonical: `${SITE_URL}/patientjourney` }
};

function inclusionLabel(typical: "included" | "discussed" | "patient") {
  if (typical === "included") return "Typically included";
  if (typical === "discussed") return "In your custom quote";
  return "You arrange";
}

export default function PatientJourneyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-clean-white via-white to-slate-50/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-wide text-medical-teal">
            Patient Journey
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-trust-green md:text-5xl">
            From first call to follow-up at home
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-gray md:text-base">
            Everything you need to understand how USMD coordinates your trip—what
            happens at each step, what is typically included, and how planning
            works before you fly.
          </p>
          <PatientJourneyNav />
        </article>
      </div>

      <PatientJourneySectionBridge
        part="Part 1"
        title="How your care is coordinated, step by step"
        description="Follow the four phases below from consultation through follow-up at home—the same path every coordinated patient travels with USMD."
      />

      <PatientJourneySteps showFootnote />

      <PatientJourneySectionBridge
        part="Part 2"
        title="What your quote typically covers"
        description="The timeline above is delivered through clear, written inclusions. Review what we coordinate versus what you arrange—so nothing feels hidden before you commit."
      />

      <section
        className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-8 md:pb-16 lg:px-12"
        aria-labelledby="whats-included-heading"
      >
        <div className="rounded-3xl border border-slate-200 border-t-4 border-t-trust-green/40 bg-white p-6 shadow-soft md:p-10">
          <h2
            id="whats-included-heading"
            className="text-2xl font-bold tracking-tight text-trust-green md:text-3xl"
          >
            {WHATS_INCLUDED_HEADING}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-gray md:text-base">
            {WHATS_INCLUDED_SUBHEAD}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-gray md:text-base">
            We do not publish fixed procedure prices online. Every quote is
            personalized after medical review—with inclusions spelled out so you
            are not surprised later.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {WHATS_INCLUDED_ITEMS.map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-clean-white px-4 py-3"
              >
                <span
                  className={
                    item.included
                      ? "mt-0.5 rounded-full bg-trust-green/10 p-1 text-trust-green"
                      : "mt-0.5 rounded-full bg-slate-100 p-1 text-slate-400"
                  }
                  aria-hidden
                >
                  {item.included ? <Check size={16} /> : <X size={16} />}
                </span>
                <span
                  className={
                    item.included
                      ? "text-sm text-slate-gray"
                      : "text-sm text-slate-gray/80"
                  }
                >
                  {item.label}
                  {!item.included ? (
                    <span className="ml-1 text-xs text-slate-500">
                      (you arrange)
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-gray">{WHATS_INCLUDED_FOOTNOTE}</p>

          <h3 className="mt-10 text-xl font-semibold text-trust-green">
            Package inclusion template
          </h3>
          <div className="mt-4 w-full overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-3 font-semibold text-slate-800">Item</th>
                  <th className="px-3 py-3 font-semibold text-slate-800">Status</th>
                  <th className="px-3 py-3 font-semibold text-slate-800">Notes</th>
                </tr>
              </thead>
              <tbody>
                {PACKAGE_INCLUSION_ROWS.map((row) => (
                  <tr key={row.item} className="border-b border-slate-100">
                    <td className="px-3 py-3 text-slate-gray">{row.item}</td>
                    <td className="px-3 py-3 font-medium text-slate-800">
                      {inclusionLabel(row.typical)}
                    </td>
                    <td className="px-3 py-3 text-slate-500">{row.note ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-xl font-semibold text-trust-green">
            Home-country care vs. USMD-coordinated care in Türkiye
          </h3>
          <p className="mt-2 text-sm text-slate-gray">
            Qualitative comparison only—not dollar amounts. Costs vary widely by
            procedure, country, and insurance.
          </p>
          <div className="mt-4 w-full overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-3 font-semibold">Topic</th>
                  <th className="px-3 py-3 font-semibold">
                    Typical experience at home
                  </th>
                  <th className="px-3 py-3 font-semibold">With USMD in Türkiye</th>
                </tr>
              </thead>
              <tbody>
                {US_TR_COMPARISON_ROWS.map((row) => (
                  <tr key={row.topic} className="border-b border-slate-100">
                    <td className="px-3 py-3 font-medium text-slate-800">
                      {row.topic}
                    </td>
                    <td className="px-3 py-3 text-slate-gray">{row.us}</td>
                    <td className="px-3 py-3 text-slate-gray">{row.tr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-slate-500 md:text-sm">
            {TRANSPARENCY_DISCLAIMER}
          </p>
        </div>
      </section>

      <PatientJourneySectionBridge
        part="Part 3"
        title="Questions to clarify before you fly"
        description="Use this checklist alongside Parts 1 and 2—then request a quote when you are ready to take the next step."
      />

      <section
        className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-8 md:pb-20 lg:px-12"
        aria-labelledby="planning-essentials-heading"
      >
        <div className="rounded-3xl border border-slate-200 border-t-4 border-t-medical-teal/40 bg-gradient-to-br from-trust-green/[0.06] to-white p-6 shadow-soft md:p-10">
          <h2
            id="planning-essentials-heading"
            className="text-xl font-semibold text-trust-green md:text-2xl"
          >
            Planning essentials
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-gray md:text-base">
            Key topics patients ask about before they commit—not medical or legal
            advice.
          </p>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-gray md:text-base">
            {PATIENT_JOURNEY_GUIDE_BULLETS.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#consultation"
              className="inline-flex rounded-full bg-medical-teal px-6 py-3 text-sm font-semibold text-white hover:bg-medical-teal/90"
            >
              Request a custom quote
            </Link>
            <Link
              href="/treatments"
              className="inline-flex rounded-full border border-trust-green px-6 py-3 text-sm font-semibold text-trust-green hover:bg-trust-green/5"
            >
              Explore treatments
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
