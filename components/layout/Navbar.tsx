"use client";

import Link from "next/link";
import Image from "next/image";
import { House, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants/nav";
import { cn } from "@/lib/utils";

const navLinkBase =
  "text-[0.83rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2";

const inquireBase =
  "inline-flex h-10 shrink-0 items-center justify-center rounded-full px-5 text-[0.83rem] font-semibold transition-all focus-visible:outline-none focus-visible:ring-2";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const linkClass = isHome
    ? "text-white/90 hover:text-white focus-visible:ring-white/50"
    : "text-slate-gray hover:text-trust-green focus-visible:ring-medical-teal/50";

  const homeLinkClass = isHome
    ? "text-white hover:text-white/90 focus-visible:ring-white/50"
    : "text-trust-green hover:text-trust-green/90 focus-visible:ring-medical-teal/50";

  return (
    <header
      className={cn(
        "z-50 w-full",
        isHome
          ? "absolute inset-x-0 top-0 border-0 bg-transparent"
          : "sticky top-0 border-b border-slate-200/80 bg-clean-white/80 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-end px-4 py-2 md:justify-center md:px-8 md:py-2.5 lg:px-12">
        <div
          className={cn(
            "hidden items-center justify-center gap-6 origin-top scale-[1.18] md:flex lg:gap-8"
          )}
        >
          <Link
            href="/"
            className="flex h-10 shrink-0 items-center transition-opacity hover:opacity-90"
            aria-label="USMD home"
          >
            <Image
              src="/yenilogo2.png"
              alt="Lal Altın logo"
              width={3093}
              height={1227}
              priority
              className={cn(
                "h-[59.8px] w-auto",
                isHome ? "brightness-0 invert" : "brightness-0"
              )}
            />
          </Link>

          <Link
            href="/"
            className={cn(
              "inline-flex h-10 items-center gap-1.5 text-[0.83rem] font-semibold",
              navLinkBase,
              homeLinkClass
            )}
          >
            <House size={19} strokeWidth={2.25} className="shrink-0" aria-hidden />
            Home
          </Link>

          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "inline-flex h-10 items-center",
                navLinkBase,
                linkClass
              )}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/#consultation"
            className={cn(
              inquireBase,
              isHome
                ? "bg-white text-trust-green hover:bg-white/90 focus-visible:ring-white/60"
                : "bg-medical-teal text-white hover:bg-medical-teal/90 focus-visible:ring-medical-teal/50"
            )}
          >
            Inquire Now
          </Link>
        </div>

        <div className="flex w-full items-center justify-between md:hidden">
          <Link
            href="/"
            className="flex shrink-0 items-center transition-opacity hover:opacity-90"
            aria-label="USMD home"
          >
            <Image
              src="/yenilogo2.png"
              alt="Lal Altın logo"
              width={3093}
              height={1227}
              priority
              className={cn(
                "h-[65.8px] w-auto sm:h-[71.8px]",
                isHome ? "brightness-0 invert" : "brightness-0"
              )}
            />
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className={cn(
              "inline-flex items-center justify-center rounded-md p-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2",
              isHome
                ? "text-white hover:bg-white/10 focus-visible:ring-white/50"
                : "text-slate-gray hover:bg-slate-100 focus-visible:ring-medical-teal/50"
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          isHome
            ? "border-t border-white/15 bg-black/90 px-4 backdrop-blur-md"
            : "border-t border-slate-200 bg-clean-white px-4",
          isOpen ? "max-h-[28rem] py-4" : "max-h-0 py-0"
        )}
      >
        <nav className="flex flex-col gap-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-2 py-2.5 text-[0.95rem] font-semibold focus-visible:outline-none focus-visible:ring-2",
              isHome
                ? "text-white hover:bg-white/10 focus-visible:ring-white/50"
                : "text-trust-green hover:bg-slate-100 focus-visible:ring-medical-teal/50"
            )}
          >
            <House size={20} aria-hidden />
            Home
          </Link>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "rounded-md px-2 py-2.5 text-[0.95rem] font-medium focus-visible:outline-none focus-visible:ring-2",
                isHome
                  ? "text-white/90 hover:bg-white/10 hover:text-white focus-visible:ring-white/50"
                  : "text-slate-gray hover:bg-slate-100 hover:text-trust-green focus-visible:ring-medical-teal/50"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#consultation"
            onClick={() => setIsOpen(false)}
            className={cn(
              "mt-2 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-[0.95rem] font-semibold transition-all focus-visible:outline-none focus-visible:ring-2",
              isHome
                ? "bg-white text-trust-green hover:bg-white/90 focus-visible:ring-white/60"
                : "bg-medical-teal text-white hover:bg-medical-teal/90 focus-visible:ring-medical-teal/50"
            )}
          >
            Inquire Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
