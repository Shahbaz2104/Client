'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';
import ProjectCard, { type ProjectSummary } from '@/components/pages/ProjectCard';
import BrandBanner from '@/components/ui/BrandBanner';
import { ChevronRight, BadgeCheck } from 'lucide-react';

export default function CaseStudiesContent({ projects }: { projects: ProjectSummary[] }) {
  const featured = projects.filter((p) => p.isFeatured);

  return (
    <PageTransition>
      <div>
        {/* Hero */}
        <section className="relative pt-48 pb-24 bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,51,31,0.65),transparent_60%)]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(211,243,64,0.08),transparent_70%)]" />
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.nav initial="hidden" animate="visible" className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
              <motion.span><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></motion.span>
              <motion.span className="text-[10px]">›</motion.span>
              <motion.span className="text-brand-accent font-bold">Case Studies</motion.span>
            </motion.nav>

            <div className="max-w-3xl space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
              >
                Client Projects & <br className="hidden sm:inline" />
                <span className="text-brand-accent italic">Case Studies</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Real engagements across pest management, laboratory procurement, food safety certification, and product innovation — delivered with documented results.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full inline-block">
                Success Stories
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-4">Delivered with Results</h2>
              <p className="text-gray-600 mt-2">Explore how BIOSAF solves complex technical challenges for partners across industries.</p>
            </ScrollReveal>

            {projects.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 mx-auto mb-6 rounded-3xl bg-brand-light flex items-center justify-center">
                  <BadgeCheck className="w-8 h-8 text-brand-primary" />
                </div>
                <p className="text-gray-500 font-bold text-lg">New case studies coming soon.</p>
                <p className="text-sm text-gray-400 mt-1 max-w-md mx-auto">
                  BIOSAF delivers documented project outcomes. Check back shortly or contact our team for reference engagements.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm mt-6 hover:text-brand-dark transition-colors">
                  Contact us for references <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <StaggerItem key={project.id}>
                    <ProjectCard project={project} />
                  </StaggerItem>
                ))}
              </StaggerGroup>
            )}

            {featured.length > 0 && (
              <ScrollReveal className="mt-16">
                <div className="rounded-[2rem] bg-brand-dark text-white p-8 md:p-12 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(211,243,64,0.05),transparent_60%)]" />
                  <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <span className="text-brand-accent text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block">
                        Featured Engagement
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-extrabold mt-5 leading-tight">{featured[0].title}</h3>
                      <p className="text-gray-300 text-sm mt-3 leading-relaxed">{featured[0].description}</p>
                      <Link href={`/case-studies/${featured[0].slug}`} className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-full mt-7 transition-colors">
                        Read Case Study <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                      {featured[0].image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={featured[0].image} alt={featured[0].title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                      ) : (
                        <div className="w-full h-full bg-white/5 flex items-center justify-center">
                          <span className="text-brand-accent font-black text-5xl italic">BIOSAF</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}
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
