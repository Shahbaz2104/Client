import type { Metadata } from "next";
import Fssc22000Content from "./content";

export const metadata: Metadata = {
  title: "FSSC 22000 Certification",
  description: "FSSC 22000 Food Safety System Certification — GAP analysis, PRP and HACCP development, documentation, internal audits, and certification support from BIOSAF Enterprises.",
  keywords: ["FSSC 22000", "Food Safety System Certification", "HACCP", "PRP", "ISO 22000", "Certification"],
  alternates: { canonical: "/fssc-22000" },
  openGraph: {
    title: "FSSC 22000 Certification",
    description: "FSSC 22000 Food Safety System Certification — GAP analysis, PRP and HACCP development, documentation, internal audits, and certification support from BIOSAF Enterprises.",
    url: "/fssc-22000",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function Fssc22000Page() {
  return <Fssc22000Content />;
}
