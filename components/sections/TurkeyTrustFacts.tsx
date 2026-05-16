import { TURKEY_TRUST_FACTS } from "@/lib/constants/stats-sources";

export function TurkeyTrustFacts() {
  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 md:p-8">
      <h2 className="text-lg font-semibold text-trust-green md:text-xl">
        Why Türkiye for accredited care
      </h2>
      <ul className="mt-4 space-y-4">
        {TURKEY_TRUST_FACTS.map((fact) => (
          <li key={fact.label}>
            <p className="text-sm font-semibold text-slate-800">{fact.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-gray">
              {fact.detail}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
