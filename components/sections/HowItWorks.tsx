"use client";

import { motion } from "framer-motion";
import { Plane, ShieldCheck, Stethoscope, Video } from "lucide-react";

const STEPS = [
  {
    title: "Free Online Consultation",
    description: "Video call and medical assessment tailored to your needs.",
    icon: Video
  },
  {
    title: "Travel & VIP Transfer",
    description: "Flight coordination and VIP airport greeting on arrival.",
    icon: Plane
  },
  {
    title: "Premium Treatment",
    description:
      "JCI-accredited hospital and a dedicated US-English speaking host.",
    icon: Stethoscope
  },
  {
    title: "Recovery & Safe Return",
    description: "5-star hotel recovery support and structured follow-up care.",
    icon: ShieldCheck
  }
] as const;

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        variants={reveal}
        className="mb-8 md:mb-10"
      >
        <h2 className="text-2xl font-bold tracking-tight text-trust-blue md:text-4xl">
          How It Works
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-gray md:text-base">
          A clear, guided journey designed to keep your treatment process safe,
          transparent, and stress-free from start to finish.
        </p>
      </motion.div>

      <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Connection line reinforces the guided journey on larger screens. */}
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 md:block" />

        {STEPS.map((step, index) => {
          const Icon = step.icon;
          const stepNumber = index + 1;

          return (
            <motion.article
              key={step.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              variants={reveal}
              className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-trust-blue/25 md:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-medical-teal text-sm font-semibold text-white">
                  {stepNumber}
                </span>
                <div className="flex-1">
                  <div className="inline-flex rounded-xl bg-trust-blue/10 p-2 text-trust-blue">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-slate-gray md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-gray/90">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
