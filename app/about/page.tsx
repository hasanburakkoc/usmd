import type { Metadata } from "next";
import Link from "next/link";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TeamProfiles } from "@/components/sections/TeamProfiles";
import { TurkeyTrustFacts } from "@/components/sections/TurkeyTrustFacts";
import { WhatsIncluded } from "@/components/sections/WhatsIncluded";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: `About Us | ${SITE_NAME}`,
  description:
    "USMD International connects Americans to coordinated care in Türkiye—hospitals, transfers, hotels, and follow-up. You book your flight.",
  alternates: { canonical: `${SITE_URL}/about` }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
        <article className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white via-white to-slate-50/80 p-6 shadow-soft md:p-12 lg:p-14">
          <p className="text-xs font-semibold uppercase tracking-wide text-medical-teal">
            About {SITE_NAME}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-trust-green md:text-5xl lg:leading-tight">
            {SITE_TAGLINE}
          </h1>

          <div className="mt-8 max-w-3xl space-y-5 text-sm leading-relaxed text-slate-gray md:text-base md:leading-8">
            <p>
              Americans pay too much and wait too long for healthcare. Türkiye has
              become one of the world&apos;s leading destinations for medical and
              dental procedures—internationally accredited hospitals, experienced
              specialists, and coordinated care at a fraction of US complexity.
            </p>
            <p>
              <strong className="font-semibold text-slate-800">
                USMD International is not a directory.
              </strong>{" "}
              We are your personal coordination team: we connect you to vetted
              coordinators and hospitals, arrange airport pickup and hotel
              coordination, and stay with you for one year of follow-up after you
              return home.{" "}
              <strong className="font-semibold text-trust-green">
                You book your flight.
              </strong>{" "}
              We handle the rest—with a custom quote after medical review and no
              surprise billing.
            </p>
          </div>

          <TurkeyTrustFacts />
          <TeamProfiles />

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#consultation"
              className="inline-flex rounded-full bg-medical-teal px-6 py-3 text-sm font-semibold text-white hover:bg-medical-teal/90"
            >
              Request a consultation
            </Link>
            <Link
              href="/guides"
              className="inline-flex rounded-full border border-trust-green px-6 py-3 text-sm font-semibold text-trust-green hover:bg-trust-green/5"
            >
              Read our guides
            </Link>
          </div>
        </article>
      </div>

      <WhatsIncluded />
      <HowItWorks />
    </main>
  );
}
