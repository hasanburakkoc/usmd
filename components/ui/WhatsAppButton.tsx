import Image from "next/image";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/16282643139"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with USMD on WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[60] inline-flex items-center justify-center rounded-full bg-trust-green p-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-trust-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-green/50 sm:bottom-6 sm:right-6 sm:gap-2 sm:px-4 sm:py-3 md:bottom-6 md:right-6"
    >
      <Image
        src="/assets/icons/whatsapp-icon.svg"
        alt=""
        aria-hidden="true"
        width={18}
        height={18}
      />
      <span className="hidden pl-1 sm:inline">WhatsApp</span>
    </a>
  );
}
