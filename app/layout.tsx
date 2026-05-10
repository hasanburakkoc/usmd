import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "USMD | Premier Health Tourism",
  description:
    "Premium and secure health tourism platform connecting US patients with trusted medical treatment providers in Türkiye.",
  keywords: [
    "health tourism",
    "medical tourism Türkiye",
    "US patients Türkiye treatment",
    "secure medical consultation"
  ],
  applicationName: "USMD",
  metadataBase: new URL("https://usmd.com"),
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "USMD | Premier Health Tourism",
    description:
      "Explore trusted, premium treatment options in Türkiye with a secure lead generation experience.",
    type: "website",
    locale: "en_US",
    url: "https://usmd.com",
    siteName: "USMD"
  },
  twitter: {
    card: "summary_large_image",
    title: "USMD | Premier Health Tourism",
    description:
      "Secure, trust-first medical tourism platform for US citizens seeking care in Türkiye."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-clean-white pb-20 text-slate-gray sm:pb-0">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
