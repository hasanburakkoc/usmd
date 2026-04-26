"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE
    }
  }
};

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-12 md:px-8 md:pt-16 lg:px-12 lg:pt-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-10"
      >
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-trust-blue md:text-5xl md:leading-tight">
          Medical Treatment in Turkey, Coordinated for US Patients
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-gray md:text-lg">
          From consultation to airport pickup, hospital appointments, hotel
          coordination, and follow-up support, we guide you through every step
          of your health journey.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#consultation"
            className="inline-flex items-center justify-center rounded-full bg-medical-teal px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-medical-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal/50 md:text-base"
          >
            Get a Free Consultation
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-trust-blue px-6 py-3 text-sm font-semibold text-trust-blue transition-all hover:bg-trust-blue hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-blue/40 md:text-base"
          >
            Explore Treatments
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
