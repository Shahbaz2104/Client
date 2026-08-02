import type { Metadata } from "next";
import IsoCertificationContent from "./content";

export const metadata: Metadata = {
  title: "ISO Certification Support",
  description: "Expert ISO 9001, ISO 22000, ISO 14001, ISO 45001, HACCP, GMP, and GHP certification support including documentation, internal audits, and registration assistance.",
  keywords: ["ISO 9001", "ISO 22000", "HACCP", "GMP", "GHP", "Certification", "BIOSAF"],
  alternates: { canonical: "/iso-certification" },
  openGraph: {
    title: "ISO Certification Support",
    description: "Expert ISO 9001, ISO 22000, ISO 14001, ISO 45001, HACCP, GMP, and GHP certification support including documentation, internal audits, and registration assistance.",
    url: "/iso-certification",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function IsoCertificationPage() {
  return <IsoCertificationContent />;
}
