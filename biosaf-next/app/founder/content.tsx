'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  GraduationCap,
  Award,
  ShieldCheck,
  Microscope,
  FlaskConical,
  ClipboardCheck,
  Globe2,
  BadgeCheck,
  Scale,
  FileCheck2,
  ArrowRight,
  Quote,
} from 'lucide-react';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';
import { fadeUp, fadeIn, scaleIn } from '@/lib/motion';

const education = [
  {
    degree: 'Master in Microbiology',
    detail: 'Advanced microbiology, foodborne pathogens & laboratory science',
    icon: Microscope,
  },
  {
    degree: 'M.Phil in Dairy Science Technology',
    detail: 'Dairy processing, quality assurance & production technology',
    icon: FlaskConical,
  },
];

const leadAuditorStandards = [
  'FSMS 22000',
  'FSSC 22000',
  'ISO 9001',
  'ISO 14001',
  'ISO 45001',
  'BRC',
];

const certifications = [
  {
    title: 'Qualified Highfield HACCP',
    detail: 'Level 2, 3 & 4 — International food safety qualifications',
    icon: ShieldCheck,
  },
  {
    title: 'Certified PSCQCI',
    detail: 'Pakistan Standards & Quality Control Authority certification',
    icon: BadgeCheck,
  },
  {
    title: 'Diploma in Halal Regulations',
    detail: 'Halal compliance, certification standards & audit readiness',
    icon: Scale,
  },
  {
    title: 'Food Lab Testing & Equipment',
    detail: 'Diploma holder — food laboratory testing & equipment installation',
    icon: ClipboardCheck,
  },
];

const regulatoryExpertise = [
  {
    region: 'GCC',
    full: 'Gulf Cooperation Council',
    desc: 'GCC food import & labeling regulations',
  },
  {
    region: 'CFIA',
    full: 'Canadian Food Inspection Agency',
    desc: 'Canadian food safety & export compliance',
  },
  {
    region: 'FDA',
    full: 'Food and Drug Administration (US)',
    desc: 'US food facility & product regulations',
  },
  {
    region: 'EU',
    full: 'European Union',
    desc: 'EU food law, traceability & safety standards',
  },
];

export default function FounderContent() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-48 pb-28 sm:pt-56 sm:pb-36 lg:pt-60 lg:pb-48 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,51,31,0.65),transparent_60%)]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(211,243,64,0.08),transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8"
          >
            <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span className="text-[10px]">›</span>
            <Link href="/about" className="hover:text-brand-accent transition-colors">About</Link>
            <span className="text-[10px]">›</span>
            <span className="text-brand-accent font-bold">Founder</span>
          </motion.nav>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-8">
              <StaggerGroup>
                <StaggerItem>
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-2.5 h-2.5 rounded-full bg-brand-accent"
                    />
                    Founder & Technical Director
                  </div>
                </StaggerItem>
                <StaggerItem variants={fadeUp}>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                    Arsalan <span className="text-brand-accent italic">Ahmed</span> Khan
                  </h1>
                </StaggerItem>
                <StaggerItem variants={fadeIn}>
                  <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                    Founder of BIOSAF Enterprises — a food safety scientist, certified lead auditor and
                    regulatory specialist shaping safe environments and quality systems across Pakistan
                    and global markets.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Master in Microbiology', 'M.Phil Dairy Science', 'Lead Auditor ×6', 'HACCP L2–L4'].map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.08, type: 'spring' as const, damping: 15 }}
                        className="bg-white/5 border border-white/10 text-brand-accent text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </StaggerItem>
                <StaggerItem variants={fadeIn}>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.a
                      href="#credentials"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-5 rounded-full font-extrabold text-base transition-all flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(211,243,64,0.25)] group"
                    >
                      View Credentials
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a
                      href="/about"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-5 rounded-full font-semibold text-base transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                      About BIOSAF
                    </motion.a>
                  </div>
                </StaggerItem>
              </StaggerGroup>
            </div>

            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto max-w-[420px] lg:max-w-none"
              >
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-accent rounded-full opacity-10 blur-3xl" />
                <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-brand-primary rounded-full opacity-20 blur-3xl" />

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
                >
                  <img
                    src="/images/founder.jpeg"
                    alt="Arsalan Ahmed Khan — Founder of BIOSAF Enterprises"
                    className="w-full object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                  <div className="absolute bottom-0 right-0 p-6 pl-24 flex items-center gap-3 sm:pl-28">
                    <img
                      src="/images/logo1.png"
                      alt="BIOSAF Enterprises Logo"
                      className="w-12 h-12 rounded-xl bg-white/95 p-1.5 shadow-lg object-contain"
                    />
                    <div>
                      <h4 className="text-white font-bold text-sm">BIOSAF Enterprises</h4>
                      <p className="text-gray-300 text-xs">Delivering Safe Environments & Quality Systems</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.6, type: 'spring' as const, damping: 15 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="absolute -bottom-6 -left-6 z-20 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-brand-dark leading-none">6×</h4>
                    <p className="text-xs text-gray-500 font-semibold mt-1">Certified Lead Auditor</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' as const, damping: 15 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-12 -right-6 z-20 glass-panel text-white py-3 px-5 rounded-2xl border border-white/20 flex items-center gap-2 shadow-xl backdrop-blur-md"
                >
                  <GraduationCap className="w-6 h-6 text-brand-accent" />
                  <span className="text-xs font-bold tracking-wide">M.Phil Dairy Science</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <ScrollReveal>
        <section className="py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-6 space-y-6">
                <StaggerGroup>
                  <StaggerItem>
                    <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light px-3.5 py-1.5 rounded-full">
                      <GraduationCap className="w-4 h-4" />
                      Academic Background
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <h2 className="text-3xl sm:text-5xl font-black text-brand-dark leading-tight">
                      A Scientist at the <span className="text-brand-primary">Core</span> of Every Standard
                    </h2>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="text-gray-600 leading-relaxed text-base max-w-xl">
                      Arsalan's academic training in microbiology and dairy science technology gives BIOSAF
                      a deeply scientific foundation — pairing laboratory rigor with real-world food
                      production systems.
                    </p>
                  </StaggerItem>
                </StaggerGroup>
              </div>

              <div className="lg:col-span-6 space-y-6">
                {education.map((item, i) => (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4 }}
                    className="group bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-primary/30 transition-all flex gap-5"
                  >
                    <div className="w-14 h-14 shrink-0 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-brand-dark group-hover:text-brand-primary transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Credentials */}
      <ScrollReveal>
        <section id="credentials" className="py-24 lg:py-36 bg-brand-light relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-white px-4 py-2 rounded-full inline-block mb-6">
                Certifications & Qualifications
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-brand-dark leading-tight">
                Internationally Recognized <span className="text-brand-primary">Credentials</span>
              </h2>
            </div>

            {/* Lead Auditor standards */}
            <div className="bg-brand-primary rounded-[2.5rem] p-8 md:p-12 mb-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent rounded-full opacity-10 blur-3xl" />
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 relative z-10">
                <div className="lg:w-1/3">
                  <div className="w-14 h-14 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark mb-5">
                    <ClipboardCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                    Certified Lead Auditor
                  </h3>
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                    Accredited lead auditing authority across six international standards, enabling
                    end-to-end certification support for client organizations.
                  </p>
                </div>
                <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {leadAuditorStandards.map((std, i) => (
                    <motion.div
                      key={std}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, type: 'spring' as const, damping: 15 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 hover:bg-brand-accent hover:text-brand-dark border border-white/15 text-white rounded-2xl px-5 py-6 text-center font-extrabold text-sm transition-colors backdrop-blur-sm"
                    >
                      {std}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other certifications */}
            <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <StaggerItem key={cert.title} variants={scaleIn}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="h-full bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark mb-5">
                      <cert.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-extrabold text-brand-dark text-base leading-snug">{cert.title}</h3>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">{cert.detail}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      </ScrollReveal>

      {/* Regulatory Expertise */}
      <ScrollReveal>
        <section className="py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-5 space-y-6">
                <StaggerGroup>
                  <StaggerItem>
                    <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light px-3.5 py-1.5 rounded-full">
                      <Globe2 className="w-4 h-4" />
                      Regulatory Expertise
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <h2 className="text-3xl sm:text-5xl font-black text-brand-dark leading-tight">
                      Global <span className="text-brand-primary">Food Regulation</span> Command
                    </h2>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="text-gray-600 leading-relaxed text-base">
                      Deep working knowledge of international food regulatory frameworks helps BIOSAF
                      clients export with confidence, meet importer requirements, and stay audit-ready
                      across jurisdictions.
                    </p>
                  </StaggerItem>
                  <StaggerItem variants={fadeIn}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 bg-brand-light rounded-2xl p-5 mt-2"
                    >
                      <Quote className="w-8 h-8 text-brand-primary shrink-0" />
                      <p className="text-sm font-semibold text-brand-dark leading-relaxed">
                        &ldquo;Compliance is not a document — it is a discipline built into the process.&rdquo;
                      </p>
                    </motion.div>
                  </StaggerItem>
                </StaggerGroup>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {regulatoryExpertise.map((reg, i) => (
                  <motion.div
                    key={reg.region}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:border-brand-primary/40 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-brand-primary tracking-tight">
                        {reg.region}
                      </span>
                      <FileCheck2 className="w-6 h-6 text-gray-300 group-hover:text-brand-accent transition-colors" />
                    </div>
                    <h3 className="font-bold text-brand-dark text-sm">{reg.full}</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{reg.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Signature / CTA */}
      <ScrollReveal>
        <section className="py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(211,243,64,0.12),transparent_60%)]" />
              <div className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[60%] bg-brand-accent rounded-full opacity-10 blur-3xl" />
              <div className="relative z-10 p-10 md:p-16 text-center text-white space-y-6">
                <img
                  src="/images/logo1.png"
                  alt="BIOSAF Enterprises Logo"
                  className="w-20 h-20 mx-auto rounded-2xl bg-white p-2 shadow-xl object-contain"
                />
                <h2 className="text-3xl sm:text-4xl font-black leading-tight">
                  Work With a Team Led by a <span className="text-brand-accent">Certified Scientist</span>
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
                  From ISO certification to food safety systems, laboratory equipment and pest
                  management — every BIOSAF solution is shaped by the founder&apos;s scientific and
                  regulatory expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-4 rounded-full font-extrabold text-sm transition-all flex items-center justify-center gap-2"
                  >
                    Request a Consultation
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="/about"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm transition-all backdrop-blur-sm"
                  >
                    Learn About BIOSAF
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
