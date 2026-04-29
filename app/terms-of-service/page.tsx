import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | USMD Health Tourism",
  description:
    "Terms governing use of USMD’s medical tourism coordination services, including medical disclaimer, scope of services, and limitation of liability."
};

const lastUpdated = "April 26, 2026";

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <article className="rounded-2xl border border-slate-200 bg-white px-5 py-8 shadow-soft sm:px-8 sm:py-10 md:px-10 md:py-12">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Legal
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-trust-green md:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-gray md:text-[0.9375rem] md:leading-7 [&_h2]:scroll-mt-24">
          <section className="space-y-3 rounded-xl border border-amber-200/80 bg-amber-50/50 p-4 md:p-5">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              Medical disclaimer
            </h2>
            <p className="font-medium text-slate-800">
              USMD is a medical tourism facilitator and coordination service. We
              are not a healthcare provider, hospital, clinic, or licensed medical
              practice. We do not diagnose conditions, prescribe treatment, or
              perform medical procedures.
            </p>
            <p>
              All medical decisions, procedures, and clinical judgments are made
              solely by independent licensed physicians and facilities in
              Türkiye (or elsewhere) that you choose to engage. Nothing on this
              website or in our communications constitutes medical advice. You
              should consult your own physician in the United States before
              traveling for care or changing your treatment plan.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              1. Acceptance of terms
            </h2>
            <p>
              By accessing our website or submitting an inquiry, you agree to
              these Terms of Service. If you do not agree, please do not use our
              services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              2. Scope of coordination services
            </h2>
            <p>
              Subject to separate written agreements where applicable, USMD may
              assist with non-clinical coordination, which may include:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Intake, screening for fit, and introductory consultations;</li>
              <li>Scheduling and confirming hospital or clinic appointments;</li>
              <li>VIP airport meet-and-greet and ground transfer coordination;</li>
              <li>Hotel or recovery-stay booking support aligned to your plan;</li>
              <li>
                US-English language liaison support during your stay in Türkiye;
              </li>
              <li>
                Post-return follow-up coordination, including up to one year of
                structured phone consultations related to your coordination
                file, where offered as part of your package.
              </li>
            </ul>
            <p>
              Specific inclusions, fees, cancellation rules, and clinical
              responsibilities are defined in your written coordination agreement
              and by the independent provider’s consent and policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              3. Independent third parties
            </h2>
            <p>
              Hospitals, physicians, laboratories, hotels, transport companies,
              and insurers are independent third parties. Your relationship with
              them is separate from your relationship with USMD. We do not control
              their clinical practices, staffing, or availability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              4. Your responsibilities
            </h2>
            <p>You agree to provide accurate information, follow travel and health instructions issued by your treating clinicians, obtain required visas and documents, maintain adequate insurance where recommended, and pay agreed coordination and third-party fees on time.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              5. Limitation of liability
            </h2>
            <p>
              <strong className="font-semibold text-slate-800">
                To the fullest extent permitted by applicable law, USMD and its
                affiliates, officers, employees, and contractors shall not be
                liable for any direct, indirect, incidental, special,
                consequential, or exemplary damages arising out of or in connection
                with medical outcomes, surgical complications, infections,
                misdiagnosis, anesthesia events, dissatisfaction with aesthetic
                results, travel delays, lost baggage, or any other matter related
                to clinical care or third-party performance.
              </strong>
            </p>
            <p>
              Our aggregate liability for any claim arising from coordination
              services (excluding gross negligence or willful misconduct, where
              such limitation is not enforceable) shall not exceed the total fees
              you paid to USMD for the specific engagement giving rise to the
              claim during the twelve (12) months preceding the event.
            </p>
            <p>
              Some jurisdictions do not allow certain limitations; in those cases,
              our liability is limited to the maximum permitted by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              6. Indemnification
            </h2>
            <p>
              You agree to defend and indemnify USMD against claims, losses, or
              expenses arising from your misuse of our services, your violation of
              these terms, or your violation of third-party rights—except to the
              extent caused by our proven gross negligence.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              7. Dispute resolution & governing law
            </h2>
            <p>
              These terms are governed by the laws of the United States and the
              State of New York, without regard to conflict-of-law rules, except
              where preempted by federal law. Exclusive jurisdiction and venue
              for disputes shall lie in the state and federal courts located in
              New York County, New York, unless otherwise required by applicable
              consumer protection law in your home state.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              8. Changes
            </h2>
            <p>
              We may modify these terms at any time. Continued use of our website
              or services after the “Last updated” date constitutes acceptance of
              the revised terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              9. Contact
            </h2>
            <p>
              <a
                href="mailto:care@usmd.com"
                className="font-medium text-medical-teal underline-offset-2 hover:underline"
              >
                care@usmd.com
              </a>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
