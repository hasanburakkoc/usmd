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

function HeroWaveDivider() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 overflow-hidden leading-[0]"
      aria-hidden
    >
      <svg
        className="relative block h-10 w-full min-w-[1200px] md:h-12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
      >
        <path
          fill="#F8FAFC"
          d="M0,34 Q720,31 1440,34 L1440,40 L0,40 Z"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero/new-hero.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      {/* Readable copy on any photo */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-black/75 via-black/55 to-black/35"
        aria-hidden
      />
      <div className="absolute inset-0 z-[1] bg-slate-900/25" aria-hidden />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 mx-auto flex min-h-[min(88vh,56rem)] w-full max-w-7xl flex-col justify-center px-4 pb-24 pt-20 md:px-8 md:pb-28 md:pt-24 lg:px-12 lg:pb-32"
      >
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-tight">
            Medical Treatment in Turkey, Coordinated for US Patients
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/90 md:text-lg md:leading-8">
            From consultation to airport pickup, hospital appointments, hotel
            coordination, and follow-up support, we guide you through every
            step of your health journey.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#consultation"
              className="inline-flex items-center justify-center rounded-full bg-trust-green px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all hover:bg-trust-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:text-base"
            >
              Get a Treatment Plan
            </Link>
            <Link
              href="/treatments"
              className="inline-flex items-center justify-center rounded-full border border-white bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:text-base"
            >
              Explore Treatments
            </Link>
          </div>

          <p className="mt-8 max-w-xl text-xs text-white/80 md:text-sm">
            Dedicated coordinators supporting your full treatment trip in
            Turkey.
          </p>
        </div>
      </motion.div>

      <HeroWaveDivider />
    </section>
  );
}
