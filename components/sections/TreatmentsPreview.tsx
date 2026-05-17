"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { treatmentImageSrcForSlug } from "@/lib/constants";
import type { TreatmentHomeHighlight } from "@/lib/firestore/types";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

type Props = {
  highlights: TreatmentHomeHighlight[];
};

export function TreatmentsPreview({ highlights }: Props) {
  return (
    <section
      id="treatments"
      className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: EASE }}
        variants={reveal}
        className="mb-10 text-center md:mb-12"
      >
        <h2 className="text-2xl font-bold tracking-tight text-trust-green md:text-4xl">
          Treatments
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-gray md:text-lg md:leading-9">
          Explore core departments designed for patients seeking{" "}
          <strong className="font-semibold text-slate-800">premium</strong>,{" "}
          <strong className="font-semibold text-slate-800">evidence-based</strong>{" "}
          treatment pathways in Türkiye.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {highlights.length === 0 ? (
          <p className="col-span-full rounded-2xl border border-slate-200 bg-clean-white px-4 py-6 text-center text-sm text-slate-gray">
            Treatment highlights are not configured yet.
          </p>
        ) : null}
        {highlights.map((item, index) => {
          const imgSrc = treatmentImageSrcForSlug(item.slug);

          return (
            <motion.article
              key={item.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: EASE
              }}
              variants={reveal}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-medical-teal/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                {imgSrc ? (
                  <Image
                    src={imgSrc}
                    alt={item.category}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100 px-4 text-center text-sm text-slate-500"
                    role="img"
                    aria-label={item.category}
                  >
                    {item.category}
                  </div>
                )}
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-lg font-semibold text-slate-gray md:text-xl">
                  {item.category}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-gray/90 md:text-base md:leading-7">
                  {item.teaser}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center md:mt-12">
        <Link
          href="/treatments"
          className="inline-flex items-center justify-center rounded-full border border-trust-green px-7 py-3.5 text-sm font-semibold text-trust-green transition-all hover:bg-trust-green hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-green/40 md:text-base"
        >
          View All Treatments
        </Link>
      </div>
    </section>
  );
}
