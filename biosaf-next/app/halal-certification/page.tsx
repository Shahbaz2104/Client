import type { Metadata } from "next";
import HalalCertificationContent from "./content";

export const metadata: Metadata = {
  title: "Halal Certification Support",
  description: "Halal certification gap analysis, documentation, supplier verification, traceability, internal audits, and certification support for food, beverage, and FMCG businesses in Pakistan.",
  keywords: ["Halal", "Certification", "Halal Audit", "Traceability", "Supplier Verification", "Pakistan"],
  alternates: { canonical: "/halal-certification" },
  openGraph: {
    title: "Halal Certification Support",
    description: "Halal certification gap analysis, documentation, supplier verification, traceability, internal audits, and certification support for food, beverage, and FMCG businesses in Pakistan.",
    url: "/halal-certification",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function HalalCertificationPage() {
  return <HalalCertificationContent />;
}
