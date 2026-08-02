import type { Metadata } from "next";
import prisma from "@/lib/prisma";
import HomeContent from "./content";
import type { ProjectSummary } from "@/components/pages/ProjectCard";

export const metadata: Metadata = {
  title: "Integrated Laboratory, Food Safety & Pest Management",
  description: "BIOSAF Enterprises delivers integrated pest management, food safety systems, ISO certification support, and laboratory equipment solutions across Pakistan with 24/7 emergency response.",
  keywords: ["BIOSAF", "Pest Management", "Fumigation", "ISO Certification", "Food Safety", "Laboratory Equipment", "Pakistan"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Integrated Laboratory, Food Safety & Pest Management",
    description: "BIOSAF Enterprises delivers integrated pest management, food safety systems, ISO certification support, and laboratory equipment solutions across Pakistan with 24/7 emergency response.",
    url: "/",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export const revalidate = 3600;

export default async function HomePage() {
  let featuredProjects: ProjectSummary[] = [];
  try {
    const items = await prisma.project.findMany({
      where: { status: "published" },
      orderBy: [{ isFeatured: "desc" }, { completionDate: "desc" }],
      take: 6,
    });
    featuredProjects = items.map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      clientName: p.clientName,
      location: p.location,
      industry: p.industry,
      serviceType: p.serviceType,
      description: p.description,
      completionDate: p.completionDate ? p.completionDate.toISOString() : null,
      image: p.image,
      isFeatured: p.isFeatured,
    }));
  } catch (error) {
    console.error("Failed to load featured projects:", error);
  }
  return <HomeContent featuredProjects={featuredProjects} />;
}
