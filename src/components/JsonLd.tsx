export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Your Visa Planner",
    description:
      "Professional visa consultancy based in Nairobi, Kenya. Expert guidance for UK, Schengen, US, UAE, and other international visas.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourvisaplanner.com",
    telephone: `+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254796544253"}`,
    email: "edwin@yourvisaplanner.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.2921,
      longitude: 36.8219,
    },
    areaServed: [
      { "@type": "Country", name: "Kenya" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    serviceType: "Visa Consultancy",
    founder: {
      "@type": "Person",
      name: "Edwin Abuga Gekonge",
    },
    foundingDate: "2025-11",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
