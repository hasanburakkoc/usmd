import Link from "next/link";

const QUICK_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Consultation", href: "#consultation" },
  { label: "About", href: "#about" }
] as const;

const TREATMENT_LINKS = [
  { label: "Hair Transplant", href: "#services" },
  { label: "Dental Aesthetics", href: "#services" },
  { label: "Weight Loss Surgery", href: "#services" },
  { label: "Plastic Surgery", href: "#services" }
] as const;

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-slate-gray text-white/80">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-12">
        <div>
          <h3 className="text-xl font-bold text-white">USMD</h3>
          <p className="mt-3 text-sm leading-6">
            Premium medical tourism coordination for US patients seeking trusted
            treatment pathways in Turkey.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            {QUICK_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Treatments
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            {TREATMENT_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
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
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 md:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 text-xs md:flex-row md:items-center md:justify-between md:text-sm">
          <p>© {year} USMD. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="#privacy"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Terms of Service
            </Link>
          </div>
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
