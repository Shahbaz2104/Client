import type { Metadata } from "next";
import ProductInnovationContent from "./content";

export const metadata: Metadata = {
  title: "Product Innovation & Development",
  description: "Product development, reformulation, shelf-life improvement, packaging guidance, food testing, consumer research, and commercialization support from BIOSAF Enterprises.",
  keywords: ["Product Innovation", "Product Development", "Reformulation", "Shelf Life", "Food Testing", "Commercialization"],
  alternates: { canonical: "/product-innovation" },
  openGraph: {
    title: "Product Innovation & Development",
    description: "Product development, reformulation, shelf-life improvement, packaging guidance, food testing, consumer research, and commercialization support from BIOSAF Enterprises.",
    url: "/product-innovation",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function ProductInnovationPage() {
  return <ProductInnovationContent />;
}
