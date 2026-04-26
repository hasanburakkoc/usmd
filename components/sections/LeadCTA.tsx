"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

const TREATMENT_OPTIONS = [
  "Hair Transplant",
  "Dental Aesthetics",
  "Weight Loss Surgery",
  "Plastic Surgery",
  "Other"
] as const;

export function LeadCTA() {
  return (
    <section
      id="consultation"
      className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        variants={reveal}
        className="grid grid-cols-1 gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:gap-8 md:p-8 lg:grid-cols-2 lg:p-10"
      >
        <div className="flex flex-col justify-center">
          <p className="inline-flex w-fit rounded-full bg-trust-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-trust-blue">
            Confidential Consultation
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-trust-blue md:text-4xl">
            Start Your Health Journey Today
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-gray md:text-base">
            Speak with our care coordination team to receive a personalized and
            secure treatment pathway. We support you from planning to return.
          </p>
        </div>

        {/* Native HTML validation keeps the first release secure and reliable. */}
        <form className="grid grid-cols-1 gap-4" noValidate={false}>
          <label className="text-sm font-medium text-slate-gray" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className="rounded-xl border border-slate-300 bg-clean-white px-4 py-3 text-sm text-slate-gray outline-none transition focus:border-medical-teal focus:ring-2 focus:ring-medical-teal/20"
            placeholder="John Doe"
          />

          <label className="text-sm font-medium text-slate-gray" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-xl border border-slate-300 bg-clean-white px-4 py-3 text-sm text-slate-gray outline-none transition focus:border-medical-teal focus:ring-2 focus:ring-medical-teal/20"
            placeholder="john@email.com"
          />

          <label className="text-sm font-medium text-slate-gray" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="rounded-xl border border-slate-300 bg-clean-white px-4 py-3 text-sm text-slate-gray outline-none transition focus:border-medical-teal focus:ring-2 focus:ring-medical-teal/20"
            placeholder="+1 (555) 123-4567"
          />

          <label className="text-sm font-medium text-slate-gray" htmlFor="treatment">
            Treatment of Interest
          </label>
          <select
            id="treatment"
            name="treatment"
            required
            defaultValue=""
            className="rounded-xl border border-slate-300 bg-clean-white px-4 py-3 text-sm text-slate-gray outline-none transition focus:border-medical-teal focus:ring-2 focus:ring-medical-teal/20"
          >
            <option value="" disabled>
              Select a treatment
            </option>
            {TREATMENT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <label className="text-sm font-medium text-slate-gray" htmlFor="message">
            Brief Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="rounded-xl border border-slate-300 bg-clean-white px-4 py-3 text-sm text-slate-gray outline-none transition focus:border-medical-teal focus:ring-2 focus:ring-medical-teal/20"
            placeholder="Tell us about your treatment goals and timeline."
          />

          <button
            type="submit"
            className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-medical-teal px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-medical-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal/50 md:text-base"
          >
            Request Free Consultation
          </button>

          <p className="inline-flex items-center justify-center gap-2 text-xs text-slate-gray/90 md:text-sm">
            <ShieldCheck size={16} className="text-medical-teal" aria-hidden="true" />
            Your data is secure and confidential.
          </p>
        </form>
      </motion.div>
    </section>
  );
}
