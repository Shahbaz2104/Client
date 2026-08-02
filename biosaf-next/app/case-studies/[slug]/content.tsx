'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import BrandBanner from '@/components/ui/BrandBanner';
import { ChevronLeft, MapPin, Building2, Tag, CalendarDays, Target, Lightbulb, TrendingUp, Award, Phone, Mail } from 'lucide-react';

export interface ProjectDetail {
  id: number;
  title: string;
  slug: string;
  clientName: string;
  location: string | null;
  industry: string | null;
  serviceType: string | null;
  description: string | null;
  challenge: string | null;
  solution: string | null;
  outcome: string | null;
  completionDate: string | null;
  image: string | null;
  certificateFile: string | null;
  isFeatured: boolean;
}

function formatDate(value: string | null): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export default function ProjectDetailContent({ project }: { project: ProjectDetail }) {
  const hasCase = Boolean(project.challenge && project.solution && project.outcome);

  return (
    <PageTransition>
      <div>
        {/* Hero */}
        <section className="relative pt-44 pb-20 md:pt-52 md:pb-24 bg-brand-dark overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,51,31,0.65),transparent_60%)]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(211,243,64,0.08),transparent_70%)]" />
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.nav initial="hidden" animate="visible" className="flex flex-wrap items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
              <motion.span><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></motion.span>
              <motion.span className="text-[10px]">›</motion.span>
              <motion.span><Link href="/case-studies" className="hover:text-brand-accent transition-colors">Case Studies</Link></motion.span>
              <motion.span className="text-[10px]">›</motion.span>
              <motion.span className="text-brand-accent font-bold max-w-[200px] truncate">{project.clientName}</motion.span>
            </motion.nav>

            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8 space-y-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                  className="flex flex-wrap items-center gap-3">
                  {project.industry && (
                    <span className="bg-white/5 border border-white/10 text-brand-accent px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase">{project.industry}</span>
                  )}
                  {project.serviceType && (
                    <span className="bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase">{project.serviceType}</span>
                  )}
                  {project.isFeatured && (
                    <span className="bg-brand-accent text-brand-dark px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase">Featured</span>
                  )}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
                >
                  {project.title}
                </motion.h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-gray-300">
                  <span className="flex items-center gap-2"><Building2 className="w-4 h-4 text-brand-accent" /> {project.clientName}</span>
                  {project.location && <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-accent" /> {project.location}</span>}
                  {project.completionDate && <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-brand-accent" /> {formatDate(project.completionDate)}</span>}
                </motion.div>
              </div>

              {project.image && (
                <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-4 relative">
                  <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full object-cover aspect-[4/3]"
                      priority
                      decoding="async"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-20 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-12">
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest hover:text-brand-dark transition-colors">
                <ChevronLeft className="w-4 h-4" /> All Case Studies
              </Link>
            </ScrollReveal>

            {project.description && (
              <ScrollReveal className="mb-10">
                <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">Overview</span>
                <p className="text-gray-600 leading-relaxed text-lg mt-4">{project.description}</p>
              </ScrollReveal>
            )}

            {hasCase && (
              <div className="space-y-8">
                <ScrollReveal>
                  <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm flex gap-5">
                    <div className="w-12 h-12 shrink-0 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold text-brand-dark mb-2">The Challenge</h2>
                      <p className="text-sm text-gray-600 leading-relaxed">{project.challenge}</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm flex gap-5">
                    <div className="w-12 h-12 shrink-0 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold text-brand-dark mb-2">Our Solution</h2>
                      <p className="text-sm text-gray-600 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="p-8 rounded-3xl bg-brand-dark text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(211,243,64,0.05),transparent_60%)]" />
                    <div className="relative z-10 flex gap-5">
                      <div className="w-12 h-12 shrink-0 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-lg font-extrabold mb-2">The Outcome</h2>
                        <p className="text-sm text-gray-300 leading-relaxed">{project.outcome}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            )}

            {!hasCase && (
              <ScrollReveal className="mt-10">
                <div className="p-8 rounded-3xl border border-gray-100 bg-[#F8FAF6] flex gap-5 items-start">
                  <div className="w-12 h-12 shrink-0 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-brand-dark mb-2">Documented Delivery</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      BIOSAF delivered this engagement with full documentation, audits, and post-completion support. Contact our team for detailed results, references, and certificates.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {project.certificateFile && (
              <ScrollReveal className="mt-8 text-center">
                <a
                  href={project.certificateFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-full transition-colors"
                >
                  <Award className="w-4 h-4" /> View Certificate
                </a>
              </ScrollReveal>
            )}

            {/* CTA */}
            <ScrollReveal className="mt-16">
              <div className="rounded-[2rem] bg-brand-primary text-white p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(211,243,64,0.06),transparent_60%)]" />
                <div className="relative z-10 text-center">
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-white/10 border border-white/10 px-4 py-2 rounded-full">
                    <Tag className="w-4 h-4 text-brand-accent" /> Similar Project?
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black mt-5">Need a similar solution?</h2>
                  <p className="text-gray-300 text-sm mt-3 max-w-xl mx-auto">
                    Talk to our technical team about replicating this outcome for your facility, brand, or supply chain.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3 mt-7">
                    <a href="tel:+923422766482" className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-full transition-colors">
                      <Phone className="w-4 h-4" /> +92 342 2766482
                    </a>
                    <a href="mailto:info@biosafenterprises.com" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-full transition-colors">
                      <Mail className="w-4 h-4" /> Email Us
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Download Company Profile */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAF6]">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <BrandBanner />
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
