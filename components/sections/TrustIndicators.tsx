import Image from "next/image";
import {
  Building2,
  Eye,
  Headphones,
  PhoneCall,
  Waypoints
} from "lucide-react";

const FEATURED = [
  {
    id: "cost-delay",
    stat: "36%",
    title: "U.S. adults delayed or skipped care",
    body: "KFF reports that 36% of U.S. adults skipped or postponed needed healthcare in the past 12 months because of cost. When care feels out of reach at home, transparent international options deserve a careful, ethical introduction—not hype.",
    accent: "border-l-4 border-l-medical-teal"
  },
  {
    id: "one-year",
    stat: "1 year",
    title: "Post-treatment follow-up you can count on",
    body: "Our commitment does not end when you fly home. As part of our partner quality policy, we provide comprehensive follow-up and phone consultations for a full year after your treatment—so questions, recovery milestones, and next steps never land in a black hole.",
    icon: PhoneCall,
    accent: "border-l-4 border-l-trust-green ring-1 ring-trust-green/15 bg-gradient-to-br from-trust-green/[0.06] to-white"
  }
] as const;

const VALUE_PILLARS = [
  {
    title: "Single-point coordination",
    body: "One team from intake through follow-up—no silos.",
    icon: Waypoints,
    image: "/assets/how-it-works/single-point-coordination.png"
  },
  {
    title: "24/7 US-English support in Türkiye",
    body: "US-English guides on call around the clock while you are here.",
    icon: Headphones,
    image: "/assets/how-it-works/us-english-support.png"
  },
  {
    title: "Patient safety & transparency",
    body: "Honest timelines, clear risks, ethical standards.",
    icon: Eye,
    image: "/assets/how-it-works/patient-safety.png"
  },
  {
    title: "Authorized hospital network",
    body: "Vetted facilities only—no mystery referrals.",
    icon: Building2,
    image: "/assets/how-it-works/hospital-network.png"
  }
] as const;

export function TrustIndicators() {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-4 pb-12 pt-8 md:px-8 md:pb-16 lg:px-12 lg:pb-20"
      aria-labelledby="trust-indicators-heading"
    >
      <h2
        id="trust-indicators-heading"
        className="sr-only"
      >
        Trust and quality commitments
      </h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {FEATURED.map((item) => {
          if (item.id === "one-year") {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-trust-green/30 hover:shadow-lg md:p-7 ${item.accent}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-trust-green">
                      Strongest commitment
                    </p>
                    <p className="mt-2 text-4xl font-bold tabular-nums tracking-tight text-trust-green md:text-5xl">
                      {item.stat}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-800 md:text-xl">
                      {item.title}
                    </h3>
                  </div>
                  <div className="rounded-xl bg-trust-green/10 p-3 text-trust-green">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-gray md:text-[0.9375rem]">
                  {item.body}
                </p>
              </article>
            );
          }

          return (
            <article
              key={item.id}
              className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-medical-teal/25 md:p-7 ${item.accent}`}
            >
              <p className="text-4xl font-bold tabular-nums tracking-tight text-medical-teal md:text-5xl">
                {item.stat}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-800 md:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-gray md:text-[0.9375rem]">
                {item.body}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {VALUE_PILLARS.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-trust-green/25"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={700}
                  className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="inline-flex rounded-xl bg-trust-green/10 p-3 text-trust-green transition-colors group-hover:bg-trust-green/15">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-gray">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-gray/95">
                {item.body}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
