"use client";

import { motion, type Variants } from "framer-motion";
import { HOW_IT_WORKS_INTRO, HOW_IT_WORKS_STEPS } from "@/lib/constants/how-it-works";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reveal: Variants = {
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
        transition={{ duration: 0.6, ease: EASE }}
        variants={reveal}
        className="mb-8 md:mb-10"
      >
        <h2 className="text-2xl font-bold tracking-tight text-trust-green md:text-4xl">
          {HOW_IT_WORKS_INTRO.title}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-gray md:text-base">
          {HOW_IT_WORKS_INTRO.description}
        </p>
      </motion.div>

      <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
        <div
          className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 md:block"
          aria-hidden
        />

        {HOW_IT_WORKS_STEPS.map((step, index) => {
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
                ease: EASE
              }}
              variants={reveal}
              className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-trust-green/25 md:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-medical-teal text-sm font-semibold text-white">
                  {stepNumber}
                </span>
                <div className="flex-1">
                  <div className="inline-flex rounded-xl bg-trust-green/10 p-2 text-trust-green">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-slate-gray md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-gray/90">
                    {step.description}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-gray/90">
                    {step.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
