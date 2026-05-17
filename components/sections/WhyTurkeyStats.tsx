"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { US_HEALTHCARE_STAT_CARDS } from "@/lib/constants/stats-sources";
import { TURKEY_FACT_PILLARS } from "@/lib/constants/turkey-fact-pillars";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

function SurveyBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
      variants={reveal}
      className="mx-auto mt-6 max-w-6xl md:mt-8"
    >
      <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-medical-teal via-trust-green to-emerald-800 px-6 py-9 text-center shadow-[0_8px_40px_-12px_rgba(5,150,105,0.45)] ring-1 ring-white/10 md:px-12 md:py-11">
        <motion.p
          className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-emerald-50"
          initial={{ opacity: 0, y: 6 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: EASE }}
        >
          The reality for US patients
        </motion.p>
        <div
          className="mx-auto mt-4 h-px w-14 bg-gradient-to-r from-transparent via-white/45 to-transparent"
          aria-hidden
        />
        <p className="mx-auto mt-5 max-w-3xl font-light leading-relaxed text-white/90 md:mt-6 md:text-[0.9375rem] md:leading-8">
          <strong className="font-semibold text-white">1 in 3</strong> Americans
          skipped or postponed medical care in the past year because of cost —
          that&apos;s over{" "}
          <strong className="font-semibold text-white">82 million</strong> people
          making daily trade-offs just to afford healthcare. Nearly half of
          insured adults (
          <strong className="font-semibold text-white">41%</strong>) skipped
          appointments in 2025.{" "}
          <strong className="font-semibold text-white">35%</strong> of adults said
          they couldn&apos;t afford care if they needed it today.{" "}
          <span className="font-semibold text-emerald-50">
            You are not alone, and you don&apos;t have to keep waiting.
          </span>
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {US_HEALTHCARE_STAT_CARDS.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.15 + index * 0.08,
                ease: EASE
              }}
              className="flex flex-col items-center rounded-2xl bg-stone-50/95 px-4 py-6 text-center"
            >
              <p className="text-3xl font-bold tabular-nums tracking-tight text-trust-green md:text-4xl">
                {card.stat}
              </p>
              <p className="mt-3 text-sm font-medium leading-snug text-slate-gray md:text-base">
                {card.description}
              </p>
              <p className="mt-3 text-[0.65rem] leading-relaxed text-slate-500 md:text-xs">
                {card.source}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TurkeyFactPillars() {
  return (
    <div className="mt-12 md:mt-16">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-medical-teal">
        Why Turkey — The Facts
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TURKEY_FACT_PILLARS.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.article
              key={pillar.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: EASE }}
              variants={reveal}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:p-6"
            >
              <div className="inline-flex rounded-xl bg-trust-green/10 p-2.5 text-trust-green">
                <Icon size={22} aria-hidden />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-800 md:text-lg">
                {pillar.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-gray">
                {pillar.description}
              </p>
              <p className="mt-4 text-xs font-medium text-trust-green">
                {pillar.source}
              </p>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

export function WhyTurkeyStats() {
  const headingRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(headingRef, { once: true, amount: 0.5 });

  return (
    <section
      className="border-y border-slate-200/80 bg-gradient-to-b from-slate-50/90 to-white"
      aria-labelledby="why-turkiye-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
        <motion.div
          ref={headingRef}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: EASE }}
          variants={reveal}
          className="mb-10 text-center md:mb-12"
        >
          <h2
            id="why-turkiye-heading"
            className="text-2xl font-bold tracking-tight text-trust-green md:text-4xl"
          >
            Why Patients Choose Türkiye for Healthcare
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-gray md:text-base">
            Türkiye has become a major destination for international healthcare,
            combining experienced providers, modern facilities, and coordinated
            patient support.
          </p>

          <motion.div
            className="mx-auto mt-6 h-1 max-w-md overflow-hidden rounded-full bg-slate-200"
            initial={{ opacity: 0 }}
            animate={lineInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.35 }}
            aria-hidden
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-medical-teal to-trust-green"
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.85, ease: EASE, delay: 0.12 }}
              style={{ transformOrigin: "left center" }}
            />
          </motion.div>
        </motion.div>

        <SurveyBlock />

        <TurkeyFactPillars />

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.12, ease: EASE }}
          variants={reveal}
          className="mt-8 text-center text-xs leading-relaxed text-slate-500 md:mt-10 md:text-sm"
        >
          Statistics are provided for informational purposes only and do not
          guarantee individual medical outcomes. Every patient’s treatment plan and
          results may vary.
        </motion.p>
      </div>
    </section>
  );
}
