"use client";

import Image from "next/image";
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
        className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft"
      >
        <div className="grid grid-cols-1 gap-8 p-6 md:p-10 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-trust-green md:text-5xl md:leading-tight">
              Medical Treatment in Turkey, Coordinated for US Patients
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-gray md:text-lg">
              From consultation to airport pickup, hospital appointments, hotel
              coordination, and follow-up support, we guide you through every
              step of your health journey.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#consultation"
                className="inline-flex items-center justify-center rounded-full bg-medical-teal px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-medical-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal/50 md:text-base"
              >
                Get a Treatment Plan
              </Link>
              <Link
                href="/treatments"
                className="inline-flex items-center justify-center rounded-full border border-trust-green px-6 py-3 text-sm font-semibold text-trust-green transition-all hover:bg-trust-green hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-green/40 md:text-base"
              >
                Explore Treatments
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-trust-green/10 bg-slate-100 shadow-lg">
              <Image
                src="/assets/hero/hero-medical-team.jpg"
                alt="Patient journey guidance team in a modern clinic lobby"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-gray/35 to-transparent" />
            </div>
            <p className="mt-3 text-xs text-slate-gray/80">
              Dedicated coordinators supporting your full treatment trip in
              Turkey.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
