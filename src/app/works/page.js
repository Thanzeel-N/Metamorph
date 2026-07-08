import WorksClient from "./page-client";
import { works } from "@/lib/data";
import SchemaMarkup from "@/components/SEO/SchemaMarkup";

export const metadata = {
  title: "Our Work — Case Studies | Metamorph.live",
  description: "Real results: brand identities, ad campaigns, viral reels, and enterprise web platforms.",
  alternates: {
    canonical: "https://metamorph.live/works",
  },
};

export default function Page() {
  const worksSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": works.map((work, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://metamorph.live/works/${work.slug}`,
      "name": work.name
    }))
  };

  return (
    <>
      <SchemaMarkup schema={worksSchema} />
      <WorksClient />
    </>
  );
}
