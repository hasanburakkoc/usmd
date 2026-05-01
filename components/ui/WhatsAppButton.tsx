import Image from "next/image";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905327400061"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with USMD on WhatsApp"
      className="fixed bottom-4 right-4 z-[60] inline-flex items-center gap-2 rounded-full bg-trust-green px-4 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-trust-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-green/50 md:bottom-6 md:right-6"
    >
      <Image
        src="/assets/icons/whatsapp-icon.svg"
        alt=""
        aria-hidden="true"
        width={18}
        height={18}
      />
      <span>WhatsApp</span>
    </a>
  );
}
