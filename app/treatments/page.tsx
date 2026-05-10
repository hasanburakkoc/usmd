import Image from "next/image";
import Link from "next/link";
import { LeadCTA } from "@/components/sections/LeadCTA";
import { treatmentImageSrcForSlug } from "@/lib/constants";
import {
  listTreatmentCategories,
  treatmentNamesForLeadForm
} from "@/lib/firestore/queries";

export const dynamic = "force-dynamic";

export default async function TreatmentsPage() {
  const categories = await listTreatmentCategories();
  const treatmentOptions = treatmentNamesForLeadForm(categories);

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-trust-green md:text-5xl">
          Treatments
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-gray md:text-base">
          The four focus areas highlighted on our homepage match the departments
          below; explore our full catalog across certified medical departments in
          Türkiye, curated for US patient coordination and continuity of care.
        </p>
        <Link
          href="/#consultation"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-trust-green px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-trust-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-green/40 md:text-base"
        >
          Request Your Custom Treatment Plan
        </Link>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => {
          const imgSrc = treatmentImageSrcForSlug(category.slug);

          return (
            <div key={category.slug} className="contents">
              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-trust-green/30">
                <div className="relative overflow-hidden rounded-xl bg-slate-100">
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={category.name}
                      width={1200}
                      height={700}
                      className="h-44 w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  ) : (
                    <div
                      className="flex h-44 w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100 text-sm text-slate-500"
                      role="img"
                      aria-label={category.name}
                    >
                      {category.name}
                    </div>
                  )}
                </div>
                <h2 className="mt-4 text-lg font-semibold text-trust-green">
                  {category.name}
                </h2>
                <ul className="mt-3 space-y-2">
                  {category.treatments.map((treatment) => (
                    <li
                      key={`${category.slug}-${treatment}`}
                      className="rounded-lg bg-clean-white px-3 py-2 text-sm text-slate-gray"
                    >
                      {treatment}
                    </li>
                  ))}
                </ul>
              </article>
              {(index + 1) % 3 === 0 && index < categories.length - 1 ? (
                <div className="md:col-span-2 lg:col-span-3">
                  <div className="rounded-2xl border border-trust-green/20 bg-gradient-to-r from-trust-green/[0.08] via-white to-trust-green/[0.08] p-5 text-center shadow-soft">
                    <p className="text-sm font-medium text-slate-gray md:text-base">
                      Need guidance on these options?
                    </p>
                    <Link
                      href="/#consultation"
                      className="mt-3 inline-flex items-center justify-center rounded-full bg-medical-teal px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-medical-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal/50"
                    >
                      Get a Quote for These Treatments
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </section>

      <section className="mt-10 rounded-2xl border border-trust-green/20 bg-gradient-to-br from-trust-green/[0.07] to-white p-6 text-center shadow-soft md:mt-14 md:p-10">
        <h2 className="text-lg font-semibold text-trust-green md:text-xl">
          Ready to explore your options?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-slate-gray md:text-base">
          Tell us what you are considering—we will respond with a clear, no-pressure
          next step.
        </p>
        <Link
          href="/#consultation"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-medical-teal px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-medical-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal/50 md:text-base"
        >
          Inquire now
        </Link>
      </section>

      <LeadCTA treatmentOptions={treatmentOptions} />
    </main>
  );
}
