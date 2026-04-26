"use client";

import { animate, motion, useInView, type Variants } from "framer-motion";
import { ClipboardList, TrendingUp, Users, Wallet } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

const STATS = [
  {
    id: "visitors",
    label: "International healthcare visitors in 2024",
    body: "Türkiye welcomed more than 1.5 million international healthcare visitors in 2024. Source: USHAŞ, referencing TurkStat (TÜİK).",
    icon: Users,
    anim: { kind: "millions" as const, target: 1.5, final: "1.5M+" }
  },
  {
    id: "revenue",
    label: "Health tourism revenue in 2024",
    body: "Official health tourism revenue shows a mature, well-supported sector. Source: USHAŞ, referencing TurkStat (TÜİK).",
    icon: Wallet,
    anim: { kind: "billions" as const, target: 3.02 }
  },
  {
    id: "growth",
    label: "Visitor growth since 2019",
    body: "Türkiye’s international healthcare visitor volume nearly doubled between 2019 and 2024, per USHAŞ / TurkStat trend data.",
    icon: TrendingUp,
    anim: { kind: "multiplier" as const }
  },
  {
    id: "us-delay",
    label: "U.S. adults delayed or skipped care",
    body: "KFF reports 36% of U.S. adults skipped or postponed needed healthcare in the past 12 months because of cost. The CDC states millions of U.S. residents travel abroad for medical care each year, with cost a common driver.",
    icon: ClipboardList,
    anim: { kind: "percentInt" as const, target: 36 }
  }
] as const;

function useAnimatedStatText(
  inView: boolean,
  anim: (typeof STATS)[number]["anim"]
): string {
  const [text, setText] = useState(() => {
    if (anim.kind === "multiplier") return "≈2×";
    if (anim.kind === "percentInt") return "0%";
    if (anim.kind === "millions") return "0.0M+";
    return "$0.00B+";
  });

  useEffect(() => {
    if (!inView) return;

    if (anim.kind === "multiplier") {
      setText("≈2×");
      return;
    }

    if (anim.kind === "millions") {
      const ctrl = animate(0, anim.target, {
        duration: 1.35,
        ease: EASE,
        onUpdate: (v) =>
          setText(`${Math.min(v, anim.target).toFixed(1)}M+`),
        onComplete: () => setText(anim.final)
      });
      return () => ctrl.stop();
    }

    if (anim.kind === "billions") {
      const ctrl = animate(0, anim.target, {
        duration: 1.35,
        ease: EASE,
        onUpdate: (v) =>
          setText(`$${Math.min(v, anim.target).toFixed(2)}B+`)
      });
      return () => ctrl.stop();
    }

    if (anim.kind === "percentInt") {
      const ctrl = animate(0, anim.target, {
        duration: 1.2,
        ease: EASE,
        onUpdate: (v) => setText(`${Math.round(v)}%`)
      });
      return () => ctrl.stop();
    }

    return undefined;
  }, [inView, anim]);

  return text;
}

function StatCard({
  stat,
  index
}: {
  stat: (typeof STATS)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const Icon = stat.icon;
  const valueText = useAnimatedStatText(inView, stat.anim);

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: EASE
      }}
      variants={reveal}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 420, damping: 22 }
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-shadow duration-300 hover:border-trust-green/25 hover:shadow-lg md:p-7"
    >
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-medical-teal/80 to-trust-green/90"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? 1 : 0 }}
        transition={{
          duration: 0.75,
          ease: EASE,
          delay: inView ? 0.1 + index * 0.09 : 0
        }}
        style={{ transformOrigin: "left center" }}
      />

      <div className="flex items-start justify-between gap-4">
        <motion.div
          className="min-h-[3rem] md:min-h-[3.5rem]"
          initial={false}
          animate={
            stat.anim.kind === "multiplier" && inView
              ? { scale: [0.88, 1.04, 1], opacity: [0, 1] }
              : { scale: 1, opacity: 1 }
          }
          transition={{
            duration: stat.anim.kind === "multiplier" ? 0.75 : 0,
            ease: EASE,
            times: stat.anim.kind === "multiplier" ? [0, 0.55, 1] : undefined
          }}
        >
          <p className="text-4xl font-bold tabular-nums tracking-tight text-trust-green md:text-5xl">
            {stat.anim.kind === "multiplier" ? (
              <span className="inline-block">≈2×</span>
            ) : (
              <span className="inline-block tabular-nums">{valueText}</span>
            )}
          </p>
        </motion.div>

        <motion.div
          className="shrink-0 rounded-xl bg-trust-green/10 p-2.5 text-trust-green"
          aria-hidden
          initial={{ rotate: -12, scale: 0.85, opacity: 0.6 }}
          animate={
            inView
              ? { rotate: 0, scale: 1, opacity: 1 }
              : { rotate: -12, scale: 0.85, opacity: 0.6 }
          }
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 18,
            delay: 0.15 + index * 0.05
          }}
        >
          <Icon size={22} />
        </motion.div>
      </div>

      <h3 className="mt-3 text-base font-semibold text-slate-800">
        {stat.label}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-gray">{stat.body}</p>
    </motion.article>
  );
}

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
      className="rounded-xl border border-slate-200/90 bg-white/90 px-4 py-3 text-center shadow-sm"
    >
      <p className="text-2xl font-bold tabular-nums text-trust-green md:text-3xl">
        {display}
        <span className="text-lg font-bold md:text-xl">{metric.suffix}</span>
      </p>
      <p className="mt-1 text-xs font-medium leading-snug text-slate-gray">
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
      className="mt-6 rounded-2xl border border-dashed border-slate-300/90 bg-slate-50/80 p-5 md:mt-8 md:p-6"
    >
      <motion.p
        className="text-xs font-semibold uppercase tracking-wide text-medical-teal"
        initial={{ opacity: 0, x: -6 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, ease: EASE }}
      >
        Survey-based research
      </motion.p>
      <p className="mt-2 text-sm leading-relaxed text-slate-gray md:text-base">
        In a 2025 patient satisfaction study, surveyed medical travelers
        reported strong willingness to return and to recommend Türkiye. The
        figures below are from that study only—not a national or universal
        patient sample.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {SURVEY_METRICS.map((m, i) => (
          <SurveyMetricPill key={m.label} metric={m} index={i} inView={inView} />
        ))}
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {STATS.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        <SurveyBlock />

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.12, ease: EASE }}
          variants={reveal}
          className="mt-6 text-center text-xs leading-relaxed text-slate-500 md:mt-8 md:text-sm"
        >
          Statistics are provided for informational purposes only and do not
          guarantee individual medical outcomes. Every patient’s treatment plan and
          results may vary.
        </motion.p>
      </div>
    </section>
  );
}
