import type { Metadata } from "next";
import FoodSafetyComplianceContent from "./content";

export const metadata: Metadata = {
  title: "Food Safety Compliance",
  description: "End-to-end food safety compliance programs — HACCP, GMP, GHP, FSSC 22000, BRCGS, and risk assessment with documentation, training, and audit support from BIOSAF Enterprises.",
  keywords: ["Food Safety", "Compliance", "HACCP", "GMP", "GHP", "BRCGS", "FSSC 22000", "Risk Assessment"],
  alternates: { canonical: "/food-safety-compliance" },
  openGraph: {
    title: "Food Safety Compliance",
    description: "End-to-end food safety compliance programs — HACCP, GMP, GHP, FSSC 22000, BRCGS, and risk assessment with documentation, training, and audit support from BIOSAF Enterprises.",
    url: "/food-safety-compliance",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function FoodSafetyCompliancePage() {
  return <FoodSafetyComplianceContent />;
}
