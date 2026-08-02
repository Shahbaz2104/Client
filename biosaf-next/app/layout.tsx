import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { MobileCallBar } from "@/components/ui/MobileCallBar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: { default: "BIOSAF Enterprises - Quality Systems & Scientific Solutions", template: "%s | BIOSAF Enterprises" },
  description: "Delivering Safe Environments & Scientific Quality Systems. ISO certification, pest management, food safety, and laboratory equipment solutions across Pakistan.",
  keywords: ["BIOSAF", "ISO Certification", "Pest Management", "Food Safety", "Laboratory Equipment", "Pakistan", "Quality Systems"],
  openGraph: {
    title: "BIOSAF Enterprises",
    description: "Delivering Safe Environments & Scientific Quality Systems",
    type: "website",
    siteName: "BIOSAF Enterprises",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased flex flex-col min-h-screen pb-14 md:pb-0`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <MobileCallBar />
      </body>
    </html>
  );
}
