import type { Metadata } from "next";
import Link from "next/link";
import { GUIDE_ARTICLES } from "@/lib/content/guides/articles";
import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: `Guides | ${SITE_NAME}`,
  description:
    "Educational guides for US patients considering treatment in Türkiye—insurance, recovery, quotes, and what to expect.",
  alternates: { canonical: `${SITE_URL}/guides` }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-medical-teal">
          Guides
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-trust-green md:text-5xl">
          Plan with confidence
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-gray md:text-base">
          Straightforward information for Americans exploring care in Türkiye—not
          medical or legal advice. Questions?{" "}
          <Link href="/#consultation" className="font-semibold text-medical-teal">
            request a consultation
          </Link>
          .
        </p>
      </header>

      <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {GUIDE_ARTICLES.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/guides/${guide.slug}`}
              className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all hover:border-trust-green/30 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-trust-green">
                {guide.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-gray">
                {guide.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-medical-teal">
                Read guide →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
