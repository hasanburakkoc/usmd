import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | USMD Health Tourism",
  description:
    "How USMD collects, uses, stores, and protects personal and health-related information for medical tourism coordination and follow-up care."
};

const lastUpdated = "April 26, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <article className="rounded-2xl border border-slate-200 bg-white px-5 py-8 shadow-soft sm:px-8 sm:py-10 md:px-10 md:py-12">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Legal
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-trust-green md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-gray md:text-[0.9375rem] md:leading-7 [&_h2]:scroll-mt-24">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              1. Who we are
            </h2>
            <p>
              USMD (“we,” “us,” or “our”) operates a medical tourism coordination
              platform for U.S.-based individuals seeking treatment pathways in
              Türkiye. This policy describes how we handle personal information
              when you use our website, forms, or related communications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              2. Information we collect
            </h2>
            <p>We may collect the following categories of information:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-semibold text-slate-800">Identity & contact:</strong>{" "}
                full name, email address, phone number, and similar contact
                details you provide.
              </li>
              <li>
                <strong className="font-semibold text-slate-800">Coordination details:</strong>{" "}
                treatment or department of interest, travel preferences,
                timelines, and other information you choose to share in forms or
                messages.
              </li>
              <li>
                <strong className="font-semibold text-slate-800">Health-related context:</strong>{" "}
                limited information you voluntarily provide to help us route
                your inquiry (for example, high-level procedure interest or
                recovery needs). We do not require detailed medical records to
                submit an initial inquiry.
              </li>
              <li>
                <strong className="font-semibold text-slate-800">Technical data:</strong>{" "}
                standard web logs (such as IP address, browser type, and device
                information) used for security and basic analytics.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              3. How we use your information
            </h2>
            <p>We use personal information to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Respond to consultation requests and evaluate whether we can
                assist with coordination.
              </li>
              <li>
                Arrange and manage logistics you request, including hospital or
                clinic appointments, transfers, and accommodation, in
                coordination with independent third-party providers.
              </li>
              <li>
                Operate our{" "}
                <strong className="font-semibold text-slate-800">
                  up-to-one-year post-treatment follow-up program
                </strong>
                , including scheduled phone consultations and continuity
                messages related to your coordination file—so your questions after
                return travel can reach the same accountable team where
                applicable.
              </li>
              <li>
                Send administrative notices, safety-related communications, and
                (where permitted) service updates you can opt out of when
                marketing is involved.
              </li>
              <li>Comply with law, enforce our terms, and protect rights and security.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              4. How we share information
            </h2>
            <p>
              We share information only as reasonably necessary to provide
              coordination services you request. Recipients may include
              hospitals, physicians and clinical staff, ground transport
              operators, hotels or recovery properties, payment processors, and
              IT vendors bound by confidentiality obligations. We do not sell
              your personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              5. Retention
            </h2>
            <p>
              We retain inquiry and coordination records—including information
              relevant to post-treatment follow-up—for as long as needed to
              fulfill the purposes in this policy, satisfy legal obligations,
              resolve disputes, and enforce agreements. Follow-up program data is
              retained in line with the documented duration of that program and
              applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              6. Security
            </h2>
            <p>
              We implement administrative, technical, and organizational measures
              designed to protect personal information against unauthorized
              access, loss, or alteration. No method of transmission over the
              Internet is completely secure; we encourage you to use strong
              passwords and avoid sending highly sensitive clinical documents
              unless a secure channel is confirmed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              7. Your choices & rights
            </h2>
            <p>
              Depending on where you live, you may have rights to access,
              correct, delete, or restrict certain processing of your personal
              information, or to object to certain uses. To exercise these rights,
              contact us using the details below. We may need to verify your
              identity before responding.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              8. International transfers
            </h2>
            <p>
              Because coordination involves care in Türkiye, your information may
              be processed in the United States, Türkiye, and other countries
              where partners operate. We take steps designed to ensure
              appropriate safeguards where required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              9. Children
            </h2>
            <p>
              Our services are not directed to individuals under 18. We do not
              knowingly collect personal information from children.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              10. Changes
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The “Last
              updated” date will change when revisions are posted. Material
              changes may be communicated through the website or by email where
              appropriate.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-trust-green md:text-xl">
              11. Contact
            </h2>
            <p>
              Questions about this policy or our data practices:{" "}
              <a
                href="mailto:care@usmd.com"
                className="font-medium text-medical-teal underline-offset-2 hover:underline"
              >
                care@usmd.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
