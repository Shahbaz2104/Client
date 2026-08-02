import type { Metadata } from "next";
import ProductsContent from "./content";

export const metadata: Metadata = {
  title: "Products & Scientific Instruments",
  description: "Browse the BIOSAF Enterprises catalog of laboratory equipment, food & water testing instruments, glassware, chemicals, and laboratory consumables.",
  keywords: ["Products", "Laboratory Equipment", "Testing Instruments", "Chemicals", "BIOSAF"],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products & Scientific Instruments",
    description: "Browse the BIOSAF Enterprises catalog of laboratory equipment, food & water testing instruments, glassware, chemicals, and laboratory consumables.",
    url: "/products",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
