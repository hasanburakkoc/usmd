"use client";

import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "patient-journey-steps", label: "Your timeline" },
  { id: "whats-included-heading", label: "What's included" },
  { id: "planning-essentials-heading", label: "Planning essentials" }
] as const;

export function PatientJourneyNav() {
  return (
    <nav
      aria-label="On this page"
      className="mt-6 flex flex-wrap gap-2 border-t border-slate-200/80 pt-6"
    >
      <span className="w-full text-xs font-semibold uppercase tracking-wide text-slate-500">
        On this page
      </span>
      {SECTIONS.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-clean-white px-4 py-2 text-sm font-medium text-slate-gray transition-colors",
            "hover:border-trust-green/40 hover:bg-trust-green/5 hover:text-trust-green",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal/50"
          )}
        >
          <span
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-medical-teal/10 text-[0.65rem] font-bold text-medical-teal"
            aria-hidden
          >
            {index + 1}
          </span>
          {section.label}
        </a>
      ))}
    </nav>
  );
}
