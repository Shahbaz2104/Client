import type { Metadata } from "next";
import DivisionsContent from "./content";

export const metadata: Metadata = {
  title: "Our Divisions",
  description: "Explore BIOSAF Enterprises' core divisions: Pest Management & Fumigation, ISO Certification Support, Food Safety Systems, and Laboratory Equipment Sales.",
  keywords: ["Divisions", "Pest Management", "ISO", "Food Safety", "Laboratory Equipment"],
  alternates: { canonical: "/divisions" },
  openGraph: {
    title: "Our Divisions",
    description: "Explore BIOSAF Enterprises' core divisions: Pest Management & Fumigation, ISO Certification Support, Food Safety Systems, and Laboratory Equipment Sales.",
    url: "/divisions",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function DivisionsPage() {
  return <DivisionsContent />;
}
