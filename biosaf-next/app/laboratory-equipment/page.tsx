import type { Metadata } from "next";
import LaboratoryEquipmentContent from "./content";

export const metadata: Metadata = {
  title: "Laboratory Equipment & Scientific Solutions",
  description: "Premium scientific instruments, glassware, chemicals, laboratory furniture, and food & water testing equipment supplied by BIOSAF Enterprises.",
  keywords: ["Laboratory Equipment", "Scientific Instruments", "Glassware", "Lab Furniture", "BIOSAF"],
  alternates: { canonical: "/laboratory-equipment" },
  openGraph: {
    title: "Laboratory Equipment & Scientific Solutions",
    description: "Premium scientific instruments, glassware, chemicals, laboratory furniture, and food & water testing equipment supplied by BIOSAF Enterprises.",
    url: "/laboratory-equipment",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function LaboratoryEquipmentPage() {
  return <LaboratoryEquipmentContent />;
}
