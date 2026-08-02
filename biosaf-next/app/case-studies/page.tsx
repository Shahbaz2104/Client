import type { Metadata } from "next";
import prisma from "@/lib/prisma";
import CaseStudiesContent from "./content";
import type { ProjectSummary } from "@/components/pages/ProjectCard";

export const metadata: Metadata = {
  title: "Case Studies & Client Projects",
  description: "Explore BIOSAF Enterprises client projects — pest management, laboratory procurement, food safety systems, ISO certification, and product innovation delivered across Pakistan.",
  keywords: ["Case Studies", "Client Projects", "Pest Management", "Food Safety", "ISO Certification", "BIOSAF"],
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies & Client Projects",
    description: "Explore BIOSAF Enterprises client projects delivered across Pakistan.",
    url: "/case-studies",
    siteName: "BIOSAF Enterprises",
    type: "website",
  },
};

export const dynamic = "force-dynamic";

export default async function CaseStudiesPage() {
  let projects: ProjectSummary[] = [];
  try {
    const items = await prisma.project.findMany({
      where: { status: "published" },
      orderBy: [{ isFeatured: "desc" }, { completionDate: "desc" }],
    });
    projects = items.map((p) => ({
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
    console.error("Failed to load projects:", error);
  }
  return <CaseStudiesContent projects={projects} />;
}
