import type { Metadata } from "next";
import PestManagementContent from "./content";

export const metadata: Metadata = {
  title: "Pest Management & Fumigation",
  description: "Professional pest control, termite management, rodent control, warehouse fumigation, and annual maintenance contracts with 24/7 emergency response from BIOSAF.",
  keywords: ["Pest Management", "Fumigation", "Termite", "Rodent Control", "Pest Control", "BIOSAF"],
  alternates: { canonical: "/pest-management" },
  openGraph: {
    title: "Pest Management & Fumigation",
    description: "Professional pest control, termite management, rodent control, warehouse fumigation, and annual maintenance contracts with 24/7 emergency response from BIOSAF.",
    url: "/pest-management",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function PestManagementPage() {
  return <PestManagementContent />;
}
