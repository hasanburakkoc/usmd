import { SITE_NAME, SITE_URL } from "@/lib/constants/site";
import { CONTACT_PHONE_TEL, CONTACT_ADDRESS_LINES } from "@/lib/constants/contact";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Medical tourism coordination for international patients seeking treatment in Türkiye.",
    telephone: CONTACT_PHONE_TEL,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_ADDRESS_LINES[0],
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94109",
      addressCountry: "US"
    },
    areaServed: { "@type": "Place", name: "Worldwide" }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
