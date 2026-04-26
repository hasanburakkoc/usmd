import { Building2, Hotel, Plane, UserCheck } from "lucide-react";

const TRUST_ITEMS = [
  {
    title: "End-to-End Coordination",
    icon: Plane
  },
  {
    title: "Premium Accommodation",
    icon: Hotel
  },
  {
    title: "World-Class Hospitals",
    icon: Building2
  },
  {
    title: "1-on-1 Patient Support",
    icon: UserCheck
  }
] as const;

export function TrustIndicators() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-12 pt-8 md:px-8 md:pb-16 lg:px-12 lg:pb-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-trust-blue/25"
            >
              <div className="inline-flex rounded-xl bg-trust-blue/10 p-3 text-trust-blue transition-colors group-hover:bg-trust-blue/15">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-gray">
                {item.title}
              </h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}
