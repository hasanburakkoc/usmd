"use client";

import { animate, motion, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

const SURVEY_METRICS = [
  { label: "Would choose Türkiye again", value: 77.2, suffix: "%" },
  { label: "Would recommend Türkiye", value: 75.4, suffix: "%" },
  { label: "Had prior treatment visit", value: 63.2, suffix: "%" }
] as const;

function SurveyMetricPill({
  metric,
  index,
  inView
}: {
  metric: (typeof SURVEY_METRICS)[number];
  index: number;
  inView: boolean;
}) {
  const [display, setDisplay] = useState("0.0");

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, metric.value, {
      duration: 1.1,
      delay: 0.2 + index * 0.12,
      ease: EASE,
      onUpdate: (v) => setDisplay(v.toFixed(1))
    });
    return () => ctrl.stop();
  }, [inView, metric.value, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.45,
        delay: 0.15 + index * 0.08,
        ease: EASE
      }}
      className="flex flex-col items-center px-2 text-center md:px-6 lg:px-10"
    >
      <p className="text-4xl font-semibold tabular-nums tracking-tight text-trust-green md:text-[2.625rem] md:leading-none lg:text-5xl">
        {display}
        <span className="ml-0.5 align-top text-2xl font-semibold md:text-3xl lg:text-4xl">
          {metric.suffix}
        </span>
      </p>
      <p className="mx-auto mt-3 max-w-[15rem] text-xs font-medium leading-relaxed text-slate-600 md:max-w-none md:text-sm">
        {metric.label}
      </p>
    </motion.div>
  );
}

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
      className="mx-auto mt-6 max-w-5xl md:mt-8"
    >
      <div className="rounded-3xl border border-slate-200/50 bg-gradient-to-b from-white to-slate-50/40 px-6 py-9 text-center shadow-[0_2px_44px_-16px_rgba(15,23,42,0.12)] ring-1 ring-slate-100 md:px-12 md:py-11">
        <motion.p
          className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-medical-teal"
          initial={{ opacity: 0, y: 6 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: EASE }}
        >
          Survey-based research
        </motion.p>
        <div
          className="mx-auto mt-4 h-px w-14 bg-gradient-to-r from-transparent via-medical-teal/55 to-transparent"
          aria-hidden
        />
        <p className="mx-auto mt-5 max-w-2xl font-light leading-relaxed text-slate-500 md:mt-6 md:max-w-2xl md:text-[0.9375rem] md:leading-8">
          In a 2025 patient satisfaction study, surveyed medical travelers
          reported strong willingness to return and to recommend Türkiye. The
          figures below are from that study only—not a national or universal
          patient sample.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-12 border-t border-slate-200/60 pt-10 sm:mt-12 sm:gap-10 md:mt-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-slate-200/55 md:border-t-0 md:pt-0">
          {SURVEY_METRICS.map((m, i) => (
            <SurveyMetricPill key={m.label} metric={m} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function WhyTurkeyStats() {
  const headingRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(headingRef, { once: true, amount: 0.5 });

  return (
    <section
      className="border-y border-slate-200/80 bg-gradient-to-b from-slate-50/90 to-white"
      aria-labelledby="why-turkey-heading"
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
            id="why-turkey-heading"
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
