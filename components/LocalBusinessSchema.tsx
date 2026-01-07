// components/schema/LocalBusinessSchema.tsx

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": "https://www.google.com/maps/place/M%2Fs+Arpit+Paliwal+%26+Co.+Chartererd+Accountants",
    "name": "M/s Arpit Paliwal & Co. Chartered Accountants",
    "legalName": "M/s Arpit Paliwal & Co.",
    "url": "https://www.google.com/maps/place/M%2Fs+Arpit+Paliwal+%26+Co.+Chartererd+Accountants",
    "hasMap": "https://www.google.com/maps/place/M%2Fs+Arpit+Paliwal+%26+Co.+Chartererd+Accountants",
    "sameAs": [
      "https://www.google.com/maps/place/M%2Fs+Arpit+Paliwal+%26+Co.+Chartererd+Accountants"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": [
      "Chartered Accountant Services",
      "Accounting & Bookkeeping",
      "Tax Advisory",
      "GST Compliance",
      "Audit & Assurance"
    ],
    "priceRange": "₹₹"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
