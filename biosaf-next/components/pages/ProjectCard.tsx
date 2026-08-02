import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, CalendarDays, Building2 } from 'lucide-react';

export interface ProjectSummary {
  id: number;
  title: string;
  slug: string;
  clientName: string;
  location: string | null;
  industry: string | null;
  serviceType: string | null;
  description: string | null;
  completionDate: string | null;
  image: string | null;
  isFeatured: boolean;
}

function formatDate(value: string | null): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export default function ProjectCard({ project }: { project: ProjectSummary }) {
  return (
    <Link
      href={`/case-studies/${project.slug}`}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-brand-accent/30 flex flex-col relative"
    >
      {project.isFeatured && (
        <span className="absolute top-4 left-4 z-10 bg-brand-accent text-brand-dark text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
          Featured
        </span>
      )}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-light">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} — ${project.clientName}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            decoding="async"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Building2 className="w-12 h-12 text-brand-primary/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {project.industry && (
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary mb-2">
            {project.industry}
          </span>
        )}
        <h3 className="font-extrabold text-brand-dark text-lg leading-snug group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed mt-2 line-clamp-2 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-4 pt-4 border-t border-gray-100 text-[11px] font-semibold text-gray-500">
          <span className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-brand-secondary" />
            {project.clientName}
          </span>
          {project.location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-secondary" />
              {project.location}
            </span>
          )}
          {project.completionDate && (
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5 text-brand-secondary" />
              {formatDate(project.completionDate)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
