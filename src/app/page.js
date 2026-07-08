import HomeClient from "./page-client";
import SchemaMarkup from "@/components/SEO/SchemaMarkup";

export const metadata = {
  title: "Metamorph.live | Expert Branding, Marketing & IT Solutions",
  description: "Metamorph is a full-service creative agency specializing in Brand Strategy, Digital Marketing, Media Production, and High-Performance IT Solutions.",
  alternates: {
    canonical: "https://metamorph.live",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Metamorph.live",
  image: "https://metamorph.live/icon.png",
  url: "https://metamorph.live",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "",
    addressRegion: "",
    postalCode: "",
    addressCountry: "",
  },
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Metamorph.live",
  url: "https://metamorph.live",
};

export default function Page() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />
      <SchemaMarkup schema={websiteSchema} />
      <HomeClient />
    </>
  );
}
