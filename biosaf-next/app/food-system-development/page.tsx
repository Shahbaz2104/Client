import type { Metadata } from "next";
import FoodSystemDevelopmentContent from "./content";

export const metadata: Metadata = {
  title: "Food Safety System Development",
  description: "HACCP manuals, operational SOPs, SSOPs, food safety audits, custom risk assessments, and corporate training programs by BIOSAF Enterprises.",
  keywords: ["HACCP", "Food Safety", "SOP", "SSOP", "Audit", "BIOSAF"],
  alternates: { canonical: "/food-system-development" },
  openGraph: {
    title: "Food Safety System Development",
    description: "HACCP manuals, operational SOPs, SSOPs, food safety audits, custom risk assessments, and corporate training programs by BIOSAF Enterprises.",
    url: "/food-system-development",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function FoodSystemDevelopmentPage() {
  return <FoodSystemDevelopmentContent />;
}
