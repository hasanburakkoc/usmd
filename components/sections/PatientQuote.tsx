"use client";

import { motion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

/** Placeholder until client provides signed video/text testimonials. */
const PLACEHOLDER_QUOTE = {
  quote:
    "I was nervous about going abroad for care—but having one coordinator in US English, a clear airport pickup, and follow-up calls after I got home made it feel manageable.",
  attribution: "US patient, coordinated care in Türkiye",
  note: "Representative experience; individual results vary."
};

export function PatientQuote() {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8 lg:px-12"
      aria-label="Patient experience"
    >
      <motion.blockquote
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        variants={reveal}
        className="rounded-2xl border border-trust-green/20 bg-gradient-to-br from-trust-green/[0.06] to-white p-6 text-center shadow-soft md:p-10"
      >
        <p className="text-lg font-medium leading-relaxed text-slate-800 md:text-xl">
          &ldquo;{PLACEHOLDER_QUOTE.quote}&rdquo;
        </p>
        <footer className="mt-4 text-sm font-semibold text-trust-green">
          — {PLACEHOLDER_QUOTE.attribution}
        </footer>
        <p className="mt-2 text-xs text-slate-500">{PLACEHOLDER_QUOTE.note}</p>
      </motion.blockquote>
    </section>
  );
}
