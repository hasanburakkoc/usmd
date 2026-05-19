import type { Metadata } from "next";
import Link from "next/link";
import { ABOUT_PAGE } from "@/lib/constants/about";
import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: `About Us | ${SITE_NAME}`,
  description:
    "USMD International partners with Ibni Sina Health Care to deliver accredited, transparent medical journeys for global patients in Türkiye.",
  alternates: { canonical: `${SITE_URL}/about` }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
        <article className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white via-white to-slate-50/80 p-6 shadow-soft md:p-12 lg:p-14">
          <p className="text-xs font-semibold uppercase tracking-wide text-medical-teal">
            {ABOUT_PAGE.eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-trust-green md:text-5xl lg:leading-tight">
            {ABOUT_PAGE.title}
          </h1>

          <div className="mt-8 max-w-3xl space-y-5 text-sm leading-relaxed text-slate-gray md:text-base md:leading-8">
            {ABOUT_PAGE.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <section className="mt-12" aria-labelledby="alliance-heading">
            <h2
              id="alliance-heading"
              className="text-xl font-bold tracking-tight text-trust-green md:text-2xl"
            >
              {ABOUT_PAGE.allianceHeading}
            </h2>
            <div className="mt-6 space-y-6">
              {ABOUT_PAGE.alliancePillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:p-6"
                >
                  <h3 className="text-base font-semibold text-slate-800 md:text-lg">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-gray md:text-base md:leading-7">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            className="mt-12 rounded-2xl border border-trust-green/25 bg-trust-green/[0.06] p-6 md:p-8"
            aria-labelledby="certification-heading"
          >
            <h2
              id="certification-heading"
              className="text-xl font-bold tracking-tight text-trust-green md:text-2xl"
            >
              {ABOUT_PAGE.certificationHeading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-gray md:text-base md:leading-8">
              {ABOUT_PAGE.certificationBody}
            </p>
          </section>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#consultation"
              className="inline-flex rounded-full bg-medical-teal px-6 py-3 text-sm font-semibold text-white hover:bg-medical-teal/90"
            >
              Request a consultation
            </Link>
            <Link
              href="/patientjourney"
              className="inline-flex rounded-full border border-trust-green px-6 py-3 text-sm font-semibold text-trust-green hover:bg-trust-green/5"
            >
              Explore your patient journey
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
