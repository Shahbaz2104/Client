import type { Metadata } from "next";
import ContactContent from "./content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact BIOSAF Enterprises for pest management, ISO certification, food safety systems, and laboratory equipment. Call +92 342 2766482 or email info@biosafenterprises.com.",
  keywords: ["Contact", "BIOSAF", "Get a Quote", "Pest Control", "ISO", "Pakistan"],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us",
    description: "Contact BIOSAF Enterprises for pest management, ISO certification, food safety systems, and laboratory equipment. Call +92 342 2766482 or email info@biosafenterprises.com.",
    url: "/contact",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
