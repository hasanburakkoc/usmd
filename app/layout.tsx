import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "USMD | Premier Health Tourism",
  description:
    "Premium and secure health tourism platform connecting US patients with trusted medical treatment providers in Turkey.",
  keywords: [
    "health tourism",
    "medical tourism Turkey",
    "US patients Turkey treatment",
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
      "Explore trusted, premium treatment options in Turkey with a secure lead generation experience.",
    type: "website",
    locale: "en_US",
    url: "https://usmd.com",
    siteName: "USMD"
  },
  twitter: {
    card: "summary_large_image",
    title: "USMD | Premier Health Tourism",
    description:
      "Secure, trust-first medical tourism platform for US citizens seeking care in Turkey."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-clean-white text-slate-gray">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
