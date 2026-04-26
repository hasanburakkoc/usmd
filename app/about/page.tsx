import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | USMD",
  description:
    "Decades of combined experience helping U.S. patients plan confident, coordinated care in Türkiye—with clarity from day one."
};

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
      <article className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white via-white to-slate-50/80 p-6 shadow-soft md:p-12 lg:p-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-medical-teal">
          About USMD
        </p>
        <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-trust-green md:text-5xl lg:text-[3.25rem] lg:leading-tight">
          Built on years of experience—and on the belief that distance should
          never mean disconnection
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-sm leading-relaxed text-slate-gray md:text-base md:leading-8">
          <p>
            USMD grew from a simple observation: American families were already
            willing to travel for value and quality in care—but they were
            exhausted by opaque websites, conflicting advice, and the fear of
            being left alone the moment something went off-script. Our team
            brings{" "}
            <strong className="font-semibold text-slate-800">
              years of hands-on coordination experience
            </strong>{" "}
            bridging US expectations with Türkiye’s world-class clinical
            infrastructure, so you are not improvising your safety at 3 a.m. in
            a foreign city.
          </p>
          <p>
            We have walked this path beside countless patients: the pre-trip
            nerves, the relief of a clear plan, the small wins when a transfer
            arrives on time and someone greets you in fluent US English. That
            steadiness is not marketing fluff—it is the product of{" "}
            <strong className="font-semibold text-slate-800">
              disciplined process, long-standing provider relationships,
            </strong>{" "}
            and a refusal to treat your health like a one-click transaction.
          </p>
          <p>
            Whether you are exploring a single procedure or rebuilding confidence
            after years of putting care off, we meet you where you are—with
            honest timelines, ethical guidance, and a calm, senior team that
            treats your questions as signal, not noise.{" "}
            <strong className="font-semibold text-trust-green">
              Your story deserves continuity:
            </strong>{" "}
            from first conversation to follow-up after you land back home, we
            aim to be the constant you can name, not a forgotten inbox thread.
          </p>
          <p>
            Türkiye continues to welcome international patients at scale; our
            role is to help you navigate that landscape with dignity—so the
            decision you make is informed, coordinated, and truly yours.
          </p>
        </div>
      </article>
    </main>
  );
}
