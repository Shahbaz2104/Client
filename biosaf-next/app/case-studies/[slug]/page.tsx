import type { Metadata } from "next";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import ProjectDetailContent from "./content";
import type { ProjectDetail } from "./content";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await prisma.project
    .findUnique({ where: { slug }, select: { title: true, clientName: true, description: true } })
    .catch(() => null);
  if (!project) return { title: "Case Study Not Found" };
  return {
    title: `${project.title} — Case Study`,
    description: project.description ?? `${project.clientName} project delivered by BIOSAF Enterprises.`,
    alternates: { canonical: `/case-studies/${slug}` },
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description ?? undefined,
      url: `/case-studies/${slug}`,
      siteName: "BIOSAF Enterprises",
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let project: ProjectDetail | null = null;
  try {
    const item = await prisma.project.findUnique({ where: { slug } });
    if (item) {
      project = {
        id: item.id,
        title: item.title,
        slug: item.slug,
        clientName: item.clientName,
        location: item.location,
        industry: item.industry,
        serviceType: item.serviceType,
        description: item.description,
        challenge: item.challenge,
        solution: item.solution,
        outcome: item.outcome,
        completionDate: item.completionDate ? item.completionDate.toISOString() : null,
        image: item.image,
        certificateFile: item.certificateFile,
        isFeatured: item.isFeatured,
      };
    }
  } catch (error) {
    console.error("Failed to load project:", error);
  }
  if (!project) notFound();
  return <ProjectDetailContent project={project} />;
}
