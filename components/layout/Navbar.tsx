"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Travel Support", href: "#travel-support" },
  { label: "About", href: "#about" }
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-clean-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8 lg:px-12">
        <Link
          href="/"
          className="text-2xl font-bold text-trust-green transition-opacity hover:opacity-90"
        >
          USMD
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-gray transition-colors hover:text-trust-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal/50"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#consultation"
            className="rounded-full bg-medical-teal px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-medical-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal/50"
          >
            Inquire Now
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-gray transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal/50 md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-slate-200 bg-clean-white px-4 transition-all duration-300 md:hidden",
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        )}
      >
        <nav className="flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-slate-gray transition-colors hover:bg-slate-100 hover:text-trust-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal/50"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#consultation"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-medical-teal px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-medical-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal/50"
          >
            Inquire Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
