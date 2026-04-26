"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { HeartPulse, Scissors, Smile, Weight } from "lucide-react";

const TREATMENTS = [
  {
    title: "Hair Transplant",
    description: "Advanced FUE and DHI solutions with natural-looking results.",
    icon: Scissors
  },
  {
    title: "Dental Aesthetics",
    description: "Smile design, veneers, and implant-supported restorations.",
    icon: Smile
  },
  {
    title: "Weight Loss Surgery",
    description: "Comprehensive bariatric pathways with multidisciplinary care.",
    icon: Weight
  },
  {
    title: "Plastic Surgery",
    description: "Personalized aesthetic procedures by certified specialists.",
    icon: HeartPulse
  }
] as const;

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

export function TreatmentsPreview() {
  return (
    <section
      id="treatments"
      className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: EASE }}
        variants={reveal}
        className="mb-8 md:mb-10"
      >
        <h2 className="text-2xl font-bold tracking-tight text-trust-green md:text-4xl">
          Treatments
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-gray md:text-base">
          Explore core departments designed for patients seeking premium,
          evidence-based treatment pathways in Turkey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TREATMENTS.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: EASE
              }}
              variants={reveal}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-medical-teal/30"
            >
              {/* Soft gradient keeps a premium clinical look without noise. */}
              <div className="rounded-xl bg-gradient-to-br from-trust-green/10 to-medical-teal/10 p-3">
                <Icon size={22} className="text-trust-green" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-gray">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-gray/90">
                {item.description}
              </p>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center md:mt-10">
        <Link
          href="/treatments"
          className="inline-flex items-center justify-center rounded-full border border-trust-green px-6 py-3 text-sm font-semibold text-trust-green transition-all hover:bg-trust-green hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-green/40 md:text-base"
        >
          View All Treatments
        </Link>
      </div>
    </section>
  );
}
