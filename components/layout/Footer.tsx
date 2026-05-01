import Link from "next/link";

const SITE_MAP = [
  { label: "Home", href: "/" },
  { label: "All Treatments", href: "/treatments" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Treatments on homepage", href: "/#treatments" },
  { label: "Request consultation", href: "/#consultation" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" }
] as const;

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-slate-gray text-white/80">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 md:gap-8 md:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-4">
          <h3 className="text-xl font-bold text-white">USMD</h3>
          <p className="mt-3 text-sm leading-6">
            Premium medical tourism coordination for US patients seeking trusted
            treatment pathways in Turkey.
          </p>
        </div>

        <div className="lg:col-span-5">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Site map
          </h4>
          <ul className="mt-4 columns-1 gap-x-10 sm:columns-2">
            {SITE_MAP.map((item) => (
              <li key={item.href + item.label} className="mb-2 break-inside-avoid">
                <Link
                  href={item.href}
                  className="text-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>US: +1 (212) 555-0177</li>
            <li>
              <a
                href="mailto:care@usmd.com"
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                care@usmd.com
              </a>
            </li>
          </ul>
          <h4 className="mt-8 text-sm font-semibold uppercase tracking-wide text-white">
            Legal
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 md:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 text-xs md:flex-row md:items-center md:justify-between md:text-sm">
          <p>© {year} USMD. All rights reserved.</p>
        </div>
        <p className="mx-auto mt-4 w-full max-w-7xl text-xs leading-5 text-white/70 md:text-sm">
          USMD is a medical tourism facilitator, not a healthcare provider.
          Treatments are performed by independent, certified medical facilities
          in Turkey. Please consult with your local physician before making
          medical decisions.
        </p>
      </div>
    </footer>
  );
}
