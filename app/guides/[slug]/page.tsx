import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllGuideSlugs,
  getGuideBySlug
} from "@/lib/content/guides/articles";
import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: SITE_NAME };
  return {
    title: `${guide.title} | ${SITE_NAME}`,
    description: guide.description,
    alternates: { canonical: `${SITE_URL}/guides/${slug}` }
  };
}

export default async function GuideArticlePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
      <article className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-10 lg:p-12">
        <Link
          href="/guides"
          className="text-sm font-semibold text-medical-teal hover:underline"
        >
          ← All guides
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-trust-green md:text-4xl">
          {guide.title}
        </h1>
        <p className="mt-3 text-sm text-slate-500">{guide.description}</p>

        <div className="mt-8 space-y-8">
          {guide.sections.map((section, i) => (
            <section key={i}>
              {section.heading ? (
                <h2 className="text-lg font-semibold text-slate-800">
                  {section.heading}
                </h2>
              ) : null}
              {section.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className={`text-sm leading-relaxed text-slate-gray md:text-base md:leading-8 ${section.heading ? "mt-3" : ""}`}
                >
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-10 text-xs text-slate-500">
          Educational content only—not medical, legal, or insurance advice.
        </p>
        <Link
          href="/#consultation"
          className="mt-6 inline-flex rounded-full bg-medical-teal px-6 py-3 text-sm font-semibold text-white hover:bg-medical-teal/90"
        >
          Talk to our team
        </Link>
      </article>
    </main>
  );
}
