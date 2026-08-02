import type { Metadata } from "next";
import BrcgsContent from "./content";

export const metadata: Metadata = {
  title: "BRCGS Certification",
  description: "BRCGS Global Food Safety Standard implementation — gap analysis, documentation, internal audits, and certification support for food manufacturers, packaging, and storage across Pakistan.",
  keywords: ["BRCGS", "Global Food Safety Standard", "Food Safety", "Certification", "Audit", "BIOSAF"],
  alternates: { canonical: "/brcgs" },
  openGraph: {
    title: "BRCGS Certification",
    description: "BRCGS Global Food Safety Standard implementation — gap analysis, documentation, internal audits, and certification support for food manufacturers, packaging, and storage across Pakistan.",
    url: "/brcgs",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function BrcgsPage() {
  return <BrcgsContent />;
}
