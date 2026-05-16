"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Check, X } from "lucide-react";
import {
  WHATS_INCLUDED_FOOTNOTE,
  WHATS_INCLUDED_HEADING,
  WHATS_INCLUDED_ITEMS,
  WHATS_INCLUDED_SUBHEAD
} from "@/lib/constants/whats-included";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

export function WhatsIncluded() {
  return (
    <section
      id="whats-included"
      className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20"
      aria-labelledby="whats-included-heading"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: EASE }}
        variants={reveal}
        className="mb-8 md:mb-10"
      >
        <h2
          id="whats-included-heading"
          className="text-2xl font-bold tracking-tight text-trust-green md:text-4xl"
        >
          {WHATS_INCLUDED_HEADING}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-gray md:text-base">
          {WHATS_INCLUDED_SUBHEAD}
        </p>
      </motion.div>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {WHATS_INCLUDED_ITEMS.map((item, index) => (
          <motion.li
            key={item.label}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.04, ease: EASE }}
            variants={reveal}
            className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-soft"
          >
            <span
              className={
                item.included
                  ? "mt-0.5 rounded-full bg-trust-green/10 p-1 text-trust-green"
                  : "mt-0.5 rounded-full bg-slate-100 p-1 text-slate-400"
              }
              aria-hidden
            >
              {item.included ? <Check size={16} /> : <X size={16} />}
            </span>
            <span
              className={
                item.included
                  ? "text-sm text-slate-gray"
                  : "text-sm text-slate-gray/80"
              }
            >
              {item.label}
              {!item.included ? (
                <span className="ml-1 text-xs text-slate-500">(you arrange)</span>
              ) : null}
            </span>
          </motion.li>
        ))}
      </ul>

      <p className="mt-6 text-center text-sm text-slate-gray">{WHATS_INCLUDED_FOOTNOTE}</p>
      <div className="mt-4 flex justify-center">
        <Link
          href="/transparency"
          className="text-sm font-semibold text-medical-teal underline-offset-2 hover:underline"
        >
          See full inclusion template
        </Link>
      </div>
    </section>
  );
}
