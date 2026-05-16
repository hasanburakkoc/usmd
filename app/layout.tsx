import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Medical Tourism for US Patients`,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "medical tourism Turkey",
    "US patients Turkey healthcare",
    "dental tourism Turkey",
    "JCI hospital Turkey",
    "affordable surgery abroad",
    "USMD International"
  ],
  applicationName: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true },
  openGraph: {
    title: `${SITE_NAME} | Medical Tourism for US Patients`,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Medical Tourism for US Patients`,
    description: SITE_DESCRIPTION
  },
  alternates: { canonical: SITE_URL }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="bg-clean-white pb-20 text-slate-gray sm:pb-0">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
