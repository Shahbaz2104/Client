import type { Metadata } from "next";
import IndustriesContent from "./content";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "BIOSAF Enterprises serves food & beverage, pharmaceutical, agriculture, healthcare, hospitality, and many more industries with pest control, compliance, and laboratory solutions.",
  keywords: ["Industries", "Food", "Pharmaceutical", "Healthcare", "Hospitality", "BIOSAF"],
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries We Serve",
    description: "BIOSAF Enterprises serves food & beverage, pharmaceutical, agriculture, healthcare, hospitality, and many more industries with pest control, compliance, and laboratory solutions.",
    url: "/industries",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
