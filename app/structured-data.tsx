export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "cln.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS",
    description: "A photo cleaning app that uses tinder like swiping to go through your photo gallery effortlessly.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "125",
    },
    author: {
      "@type": "Organization",
      name: "Risk Creatives",
      url: "https://riskstudios.my",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
