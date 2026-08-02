import type { Metadata } from "next";
import FounderContent from "./content";

export const metadata: Metadata = {
  title: "Founder — Arsalan Ahmed Khan",
  description:
    "Meet Arsalan Ahmed Khan, Founder of BIOSAF Enterprises — Master in Microbiology, M.Phil in Dairy Science Technology, and Lead Auditor for FSMS/FSSC 22000, ISO 9001, ISO 14001, ISO 45001 and BRC.",
  keywords: [
    "BIOSAF",
    "Founder",
    "Arsalan Ahmed Khan",
    "Microbiology",
    "Dairy Science",
    "Lead Auditor",
    "ISO 22000",
    "FSSC 22000",
    "HACCP",
    "BRC",
    "Food Safety",
    "Pakistan",
  ],
  alternates: { canonical: "/founder" },
  openGraph: {
    title: "Founder — Arsalan Ahmed Khan",
    description:
      "Meet Arsalan Ahmed Khan, Founder of BIOSAF Enterprises — a certified Lead Auditor and food safety specialist with expertise across GCC, CFIA, FDA and EU regulations.",
    url: "/founder",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function FounderPage() {
  return <FounderContent />;
}
