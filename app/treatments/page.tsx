import { TREATMENT_CATEGORIES } from "@/lib/constants";

export default function TreatmentsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-trust-green md:text-5xl">
          Treatments
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-gray md:text-base">
          Explore our full treatment catalog across certified medical
          departments in Turkey, curated for US patient coordination and
          continuity of care.
        </p>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
        {TREATMENT_CATEGORIES.map((category) => (
          <article
            key={category.category}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-trust-green/30"
          >
            <h2 className="text-lg font-semibold text-trust-green">
              {category.category}
            </h2>
            <ul className="mt-3 space-y-2">
              {category.treatments.map((treatment) => (
                <li
                  key={treatment}
                  className="rounded-lg bg-clean-white px-3 py-2 text-sm text-slate-gray"
                >
                  {treatment}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
