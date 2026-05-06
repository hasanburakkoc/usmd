"use client";

import Link from "next/link";
import Image from "next/image";
import { House, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "All Treatments", href: "/treatments" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/about" }
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-clean-white/80 backdrop-blur-md">
      <div className="mx-auto flex min-h-[4.25rem] w-full max-w-7xl items-center justify-between gap-3 px-4 py-2 md:min-h-[5rem] md:px-8 md:py-2.5 lg:px-12">
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity hover:opacity-90"
          aria-label="USMD home"
        >
          <Image
            src="/lal-altin-logo.png"
            alt="Lal Altın logo"
            width={280}
            height={88}
            priority
            className="h-12 w-auto sm:h-14 md:h-16 lg:h-[4.5rem]"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          <Link
            href="/"
            className={cn(
              "inline-flex items-center gap-1.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal/50",
              isHome ? "text-trust-green" : "text-slate-gray hover:text-trust-green"
            )}
          >
            <House size={16} strokeWidth={2.25} className="shrink-0" aria-hidden />
            Home
          </Link>
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
            href="/#consultation"
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
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold text-trust-green transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal/50"
          >
            <House size={18} aria-hidden />
            Home
          </Link>
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
            href="/#consultation"
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
