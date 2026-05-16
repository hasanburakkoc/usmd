import type { Metadata } from "next";
import Link from "next/link";
import {
  PACKAGE_INCLUSION_ROWS,
  TRANSPARENCY_DISCLAIMER,
  US_TR_COMPARISON_ROWS
} from "@/lib/constants/transparency";
import { SITE_NAME, SITE_URL } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: `What's Included | ${SITE_NAME}`,
  description:
    "See what USMD typically coordinates for your medical trip to Türkiye—flights excluded, custom quote after review, no surprise billing.",
  alternates: { canonical: `${SITE_URL}/transparency` }
};

function inclusionLabel(typical: "included" | "discussed" | "patient") {
  if (typical === "included") return "Typically included";
  if (typical === "discussed") return "In your custom quote";
  return "You arrange";
}

export default function TransparencyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-10 lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-wide text-medical-teal">
          Transparency
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-trust-green md:text-5xl">
          Know what&apos;s included before you fly
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-gray md:text-base">
          We do not publish fixed procedure prices online. Every quote is
          personalized after medical review—with inclusions spelled out so you
          are not surprised later.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-trust-green">
          Package inclusion template
        </h2>
        <div className="mt-4 w-full overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-3 py-3 font-semibold text-slate-800">Item</th>
                <th className="px-3 py-3 font-semibold text-slate-800">Status</th>
                <th className="px-3 py-3 font-semibold text-slate-800">Notes</th>
              </tr>
            </thead>
            <tbody>
              {PACKAGE_INCLUSION_ROWS.map((row) => (
                <tr key={row.item} className="border-b border-slate-100">
                  <td className="px-3 py-3 text-slate-gray">{row.item}</td>
                  <td className="px-3 py-3 font-medium text-slate-800">
                    {inclusionLabel(row.typical)}
                  </td>
                  <td className="px-3 py-3 text-slate-500">{row.note ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 text-xl font-semibold text-trust-green">
          US care vs. USMD-coordinated care in Türkiye
        </h2>
        <p className="mt-2 text-sm text-slate-gray">
          Qualitative comparison only—not dollar amounts. Costs vary widely by
          procedure, city, and insurance in the US.
        </p>
        <div className="mt-4 w-full overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-3 py-3 font-semibold">Topic</th>
                <th className="px-3 py-3 font-semibold">Typical US experience</th>
                <th className="px-3 py-3 font-semibold">With USMD in Türkiye</th>
              </tr>
            </thead>
            <tbody>
              {US_TR_COMPARISON_ROWS.map((row) => (
                <tr key={row.topic} className="border-b border-slate-100">
                  <td className="px-3 py-3 font-medium text-slate-800">
                    {row.topic}
                  </td>
                  <td className="px-3 py-3 text-slate-gray">{row.us}</td>
                  <td className="px-3 py-3 text-slate-gray">{row.tr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-slate-500 md:text-sm">
          {TRANSPARENCY_DISCLAIMER}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/#consultation"
            className="inline-flex rounded-full bg-medical-teal px-6 py-3 text-sm font-semibold text-white hover:bg-medical-teal/90"
          >
            Request a custom quote
          </Link>
          <Link
            href="/safety"
            className="inline-flex rounded-full border border-trust-green px-6 py-3 text-sm font-semibold text-trust-green hover:bg-trust-green/5"
          >
            Patient safety
          </Link>
        </div>
      </article>
    </main>
  );
}
