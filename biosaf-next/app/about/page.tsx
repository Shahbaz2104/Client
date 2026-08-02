import type { Metadata } from "next";
import AboutContent from "./content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about BIOSAF Enterprises — a professional service and trading company delivering integrated scientific, quality, and safety systems across Pakistan.",
  keywords: ["BIOSAF", "About", "Quality Systems", "Scientific Solutions", "Pakistan"],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us",
    description: "Learn about BIOSAF Enterprises — a professional service and trading company delivering integrated scientific, quality, and safety systems across Pakistan.",
    url: "/about",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
