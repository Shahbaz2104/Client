import type { Metadata } from "next";
import IsoStandardsContent from "./content";

export const metadata: Metadata = {
  title: "ISO Standards & Certification Support",
  description: "Complete ISO certification support for ISO 9001, ISO 22000, ISO 14001, ISO 45001, ISO 17025, and ISO 13485 — gap analysis, documentation, training, internal audits, and registration support across Pakistan.",
  keywords: ["ISO 9001", "ISO 22000", "ISO 14001", "ISO 45001", "ISO 17025", "ISO 13485", "BRCGS", "FSSC 22000", "HACCP", "Certification"],
  alternates: { canonical: "/iso-standards" },
  openGraph: {
    title: "ISO Standards & Certification Support",
    description: "Complete ISO certification support for ISO 9001, ISO 22000, ISO 14001, ISO 45001, ISO 17025, and ISO 13485 — gap analysis, documentation, training, internal audits, and registration support across Pakistan.",
    url: "/iso-standards",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function IsoStandardsPage() {
  return <IsoStandardsContent />;
}
