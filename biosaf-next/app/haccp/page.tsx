import type { Metadata } from "next";
import HaccpContent from "./content";

export const metadata: Metadata = {
  title: "HACCP Implementation",
  description: "HACCP plan development, hazard analysis, CCP determination, monitoring procedures, verification, and staff training to achieve HACCP certification with BIOSAF Enterprises.",
  keywords: ["HACCP", "Hazard Analysis", "Critical Control Points", "Food Safety", "Certification", "BIOSAF"],
  alternates: { canonical: "/haccp" },
  openGraph: {
    title: "HACCP Implementation",
    description: "HACCP plan development, hazard analysis, CCP determination, monitoring procedures, verification, and staff training to achieve HACCP certification with BIOSAF Enterprises.",
    url: "/haccp",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function HaccpPage() {
  return <HaccpContent />;
}
