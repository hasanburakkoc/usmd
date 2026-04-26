import type { Metadata } from "next";
import { Eye, Headphones, Star, Waypoints } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | USMD",
  description:
    "Quality policy, core values, and years of experience coordinating safe, transparent healthcare travel from the United States to trusted providers in Türkiye."
};

const QUALITY_VALUES = [
  {
    title: "Seamless single-point coordination",
    body: "Your case stays under one umbrella: authorized hospitals, specialist physicians, VIP transfers, and vetted accommodations are orchestrated by a single dedicated team. That means fewer handoffs, fewer mixed messages, and a clear chain of responsibility from your first inquiry through your last follow-up call.",
    icon: Waypoints
  },
  {
    title: "Patient safety, transparency & ethics",
    body: "We anchor every itinerary in ethical standards—honest timelines, clinically appropriate referrals, and plain-language explanations of what is—and is not—possible. Personalized planning is not a buzzword here; it is how we protect your trust when you are making high-stakes decisions far from home.",
    icon: Eye
  },
  {
    title: "24/7 dedicated US-English support in Türkiye",
    body: "While you are in Türkiye, you are never on your own after business hours. Native US-English speaking guides and consultants stay within reach around the clock for questions about appointments, medications, logistics, or simply the anxiety that can surface in an unfamiliar setting.",
    icon: Headphones
  }
] as const;

const TESTIMONIALS = [
  {
    quote:
      "From the first video call to landing back home, every step was explained in plain English. I never felt rushed into a decision.",
    name: "Michael R.",
    detail: "Orthopedic care, Texas",
    rating: 5
  },
  {
    quote:
      "The team handled logistics I didn’t even know I’d need—transfers, appointments, and someone on the ground who actually picked up the phone.",
    name: "Elena V.",
    detail: "Dental restoration, New Jersey",
    rating: 5
  },
  {
    quote:
      "What mattered most was continuity: clear records, follow-up questions answered quickly, and a calm process when I was already stressed about surgery.",
    name: "James T.",
    detail: "General surgery coordination, Ohio",
    rating: 5
  }
] as const;

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <Star
          key={i}
          size={18}
          className="fill-amber-400 text-amber-400"
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-10 lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-wide text-medical-teal">
          About USMD
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-trust-green md:text-5xl">
          Experience you can lean on—coordination you can understand
        </h1>
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-slate-gray md:text-base md:leading-8">
          <p>
            For years, our team has focused on one thing: helping U.S. patients
            navigate international care without guesswork. We have built our
            process around clear communication, vetted facility relationships,
            and careful planning before, during, and after your time in Türkiye.
          </p>
          <p>
            Health tourism is not about promises—it is about preparation. We
            work to connect you with authorized, carefully reviewed providers,
            align expectations with clinical reality, and keep logistics
            organized so you can focus on your health, not paperwork.
          </p>
          <p>
            Whether you are comparing options or already committed to a pathway,
            USMD exists to support informed, coordinated decisions—not to replace
            your physician, but to make cross-border care feel structured and
            human.
          </p>
        </div>
      </section>

      <section className="mt-12 md:mt-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-trust-green md:text-3xl">
          Our quality policy & core values
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-slate-gray md:text-base">
          Our medical partner network operates under a published quality policy
          designed for international patients—especially Americans who need
          clarity, continuity, and a human voice on the other end of the line.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {QUALITY_VALUES.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:border-trust-green/30 md:p-7"
              >
                <div className="inline-flex w-fit rounded-xl bg-trust-green/10 p-3 text-trust-green">
                  <Icon size={24} aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-trust-green">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-gray md:text-[0.9375rem]">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-trust-green/20 bg-trust-green/[0.04] p-5 md:p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-medical-teal">
            One-year post-treatment commitment
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-gray md:text-base">
            A cornerstone of our partner policy is{" "}
            <strong className="font-semibold text-slate-800">
              one full year of post-treatment follow-up
            </strong>{" "}
            —including structured phone consultations—so recovery questions,
            medication clarifications, and next-step guidance do not disappear
            the moment your flight takes off. This is coordination you can plan
            around, not a one-way ticket and a handshake.
          </p>
        </div>
      </section>

      <section className="mt-10 md:mt-14">
        <h2 className="text-center text-2xl font-bold tracking-tight text-trust-green md:text-3xl">
          What patients tell us
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-gray md:text-base">
          Representative feedback themes from U.S. patients we have supported.
          Individual experiences vary.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:border-trust-green/25 md:p-6"
            >
              <StarRow count={t.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-gray md:text-[0.9375rem]">
                “{t.quote}”
              </blockquote>
              <footer className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                <p className="text-xs text-slate-500">{t.detail}</p>
              </footer>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
