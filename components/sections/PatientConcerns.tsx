"use client";

import { motion, type Variants } from "framer-motion";
import { PATIENT_CONCERNS } from "@/lib/constants/patient-concerns";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

export function PatientConcerns() {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20"
      aria-labelledby="patient-concerns-heading"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        variants={reveal}
        className="mb-8 text-center md:mb-10"
      >
        <h2
          id="patient-concerns-heading"
          className="text-2xl font-bold tracking-tight text-trust-green md:text-4xl"
        >
          We know what you&apos;re worried about
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {PATIENT_CONCERNS.map((item, index) => (
          <motion.article
            key={item.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
            variants={reveal}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-trust-green/25 md:p-7"
          >
            <h3 className="text-lg font-semibold text-trust-green md:text-xl">
              &ldquo;{item.question}&rdquo;
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-gray md:text-base">
              {item.answer}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
