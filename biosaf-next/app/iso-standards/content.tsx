'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Phone,
  Mail,
  MessageCircle,
  Award,
  ShieldCheck,
  Leaf,
  HardHat,
  Microscope,
  Stethoscope,
  AlertTriangle,
  Globe2,
  BadgeCheck,
  Target,
  FileCheck2,
  GraduationCap,
  Search,
  RefreshCcw,
  type LucideIcon,
} from 'lucide-react';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';
import { fadeUp, fadeIn } from '@/lib/motion';
import CallbackForm from '@/components/ui/CallbackForm';

interface Standard {
  id: string;
  icon: LucideIcon;
  short: string;
  name: string;
  tagline: string;
  desc: string;
  points: string[];
}

const standards: Standard[] = [
  {
    id: 'iso-9001',
    icon: Award,
    short: 'ISO 9001',
    name: 'Quality Management Systems',
    tagline: 'Build a culture of consistent quality.',
    desc: 'ISO 9001 is the world\'s most recognized quality management standard. We design a practical QMS covering policy, objectives, process control, risk management, and continuous improvement — documented and ready for certification.',
    points: ['QMS policy & objectives', 'Process mapping & controls', 'Documentation & records', 'Internal audits & management review'],
  },
  {
    id: 'iso-22000',
    icon: ShieldCheck,
    short: 'ISO 22000',
    name: 'Food Safety Management Systems',
    tagline: 'An internationally accepted food safety framework.',
    desc: 'ISO 22000 integrates HACCP with a complete food safety management system, covering prerequisite programs, communication, traceability, and continual improvement across the food chain.',
    points: ['HACCP integration', 'Prerequisite programs', 'Traceability systems', 'Emergency preparedness'],
  },
  {
    id: 'iso-14001',
    icon: Leaf,
    short: 'ISO 14001',
    name: 'Environmental Management Systems',
    tagline: 'Reduce impact, improve compliance.',
    desc: 'ISO 14001 helps you systematically manage environmental responsibilities, from waste and emissions to legal compliance, with a framework auditors and buyers recognize.',
    points: ['Environmental policy & aspects', 'Compliance obligations', 'Waste & resource management', 'Performance monitoring'],
  },
  {
    id: 'iso-45001',
    icon: HardHat,
    short: 'ISO 45001',
    name: 'Occupational Health & Safety',
    tagline: 'Protect your most valuable asset — your people.',
    desc: 'ISO 45001 provides a framework to prevent workplace injuries and ill health through hazard identification, risk assessment, operational controls, and worker participation.',
    points: ['Hazard identification & risk assessment', 'Safe work procedures', 'Emergency preparedness', 'Worker consultation & training'],
  },
  {
    id: 'iso-17025',
    icon: Microscope,
    short: 'ISO 17025',
    name: 'Laboratory Testing & Calibration',
    tagline: 'Accreditation for laboratories that deliver trusted results.',
    desc: 'ISO 17025 is the standard for testing and calibration laboratories. We support lab quality systems, method validation, uncertainty evaluation, and readiness for accreditation bodies.',
    points: ['Lab quality management system', 'Method validation & uncertainty', 'Equipment & traceability', 'Accreditation body readiness'],
  },
  {
    id: 'iso-13485',
    icon: Stethoscope,
    short: 'ISO 13485',
    name: 'Medical Device Quality Management',
    tagline: 'Quality systems for the medical device industry.',
    desc: 'ISO 13485 sets requirements for medical device quality management systems, emphasizing risk management, regulatory compliance, and effective processes from design to delivery.',
    points: ['Risk-based QMS', 'Design controls', 'Regulatory compliance', 'Process validation'],
  },
  {
    id: 'haccp',
    icon: AlertTriangle,
    short: 'HACCP',
    name: 'Hazard Analysis & Critical Control Points',
    tagline: 'The foundation of food safety control.',
    desc: 'HACCP systematically identifies and controls biological, chemical, and physical hazards at critical points in your process, aligned to Codex principles and accepted worldwide.',
    points: ['Hazard analysis', 'CCP determination & limits', 'Monitoring & corrective actions', 'Verification & records'],
  },
  {
    id: 'brcgs',
    icon: Globe2,
    short: 'BRCGS',
    name: 'Global Food Safety Standard',
    tagline: 'A GFSI benchmarked route to major retailers.',
    desc: 'BRCGS is a leading GFSI recognized food safety standard accepted by UK, European, and international retailers. We take your facility from gap analysis to certification readiness.',
    points: ['Clause-by-clause gap analysis', 'Food safety culture program', 'Site standards & HACCP', 'Pre-certification audit'],
  },
  {
    id: 'fssc-22000',
    icon: BadgeCheck,
    short: 'FSSC 22000',
    name: 'Food Safety System Certification',
    tagline: 'Complete GFSI recognized certification scheme.',
    desc: 'FSSC 22000 combines ISO 22000 with sector-specific prerequisite programs, offering a globally accepted, GFSI benchmarked certification for food manufacturers and more.',
    points: ['ISO 22000 + PRPs', 'HACCP integration', 'Internal audit program', 'Certification body coordination'],
  },
  {
    id: 'halal',
    icon: BadgeCheck,
    short: 'Halal',
    name: 'Halal Certification Support',
    tagline: 'Credible halal compliance for growing markets.',
    desc: 'From gap analysis and documentation to supplier verification, traceability, and internal audits, we prepare your business for halal certification with recognized bodies.',
    points: ['Halal gap analysis', 'Documentation & policy', 'Supplier verification & traceability', 'Internal audits & certification'],
  },
];

const benefits = [
  { icon: Target, title: 'Clarity & Direction', desc: 'A clear, prioritized roadmap shows exactly what your business needs to achieve and maintain certification.' },
  { icon: FileCheck2, title: 'Complete Documentation', desc: 'Manuals, procedures, forms, and records developed for your real operations — not off-the-shelf templates.' },
  { icon: GraduationCap, title: 'Team Training', desc: 'Practical training builds internal competence so your team runs the system confidently.' },
  { icon: Search, title: 'Internal Audits', desc: 'Pre-certification audits that mirror the certification body and surface issues before the real audit.' },
  { icon: RefreshCcw, title: 'Continuous Improvement', desc: 'Embedded review cycles keep your system effective and current after certification.' },
  { icon: ShieldCheck, title: 'Certification Support', desc: 'We coordinate with accredited certification bodies from application to certificate award.' },
];

const process = [
  { title: 'Gap Analysis', desc: 'On-site assessment of your current practices against the target standard.' },
  { title: 'System Design', desc: 'Policies, procedures, controls, and records tailored to your operation.' },
  { title: 'Implementation & Training', desc: 'Roll-out with your team, hands-on training, and operational support.' },
  { title: 'Audit & Certification', desc: 'Internal audit, corrective actions, and certification body coordination.' },
];

const faqs = [
  { q: 'How do we choose the right ISO standard?', a: 'The right standard depends on your industry, customers, and goals. We assess your operations and advise the most commercially valuable certification path.' },
  { q: 'Does BIOSAF issue the certificate?', a: 'No. Certification certificates are issued by accredited certification bodies. We build your system, train your team, run internal audits, and manage coordination with the certification body.' },
  { q: 'How long does ISO certification take?', a: 'Typical timelines are 3–6 months depending on standard, facility size, and current maturity. Complex schemes such as BRCGS or FSSC 22000 may take longer.' },
  { q: 'Can you maintain our system after certification?', a: 'Yes. We offer surveillance support, internal audits, management review facilitation, and annual system reviews to keep your certification current.' },
];

export default function IsoStandardsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-48 pb-28 sm:pt-56 sm:pb-36 lg:pt-60 lg:pb-44 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,51,31,0.6),transparent_60%)]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(211,243,64,0.06),transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8">
            <StaggerGroup>
              <StaggerItem>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-2.5 h-2.5 rounded-full bg-brand-accent"
                  />
                  ISO Standards & Certification
                </div>
              </StaggerItem>
              <StaggerItem variants={fadeUp}>
                <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                  Certification Support for <span className="text-brand-accent italic">Every Standard</span> You Need
                </h1>
              </StaggerItem>
              <StaggerItem variants={fadeIn}>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                  Gap analysis, documentation, training, internal audits, and certification support for ISO 9001, ISO 22000, ISO 14001, ISO 45001, ISO 17025, ISO 13485, HACCP, BRCGS, FSSC 22000, and Halal.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-5 rounded-full font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(211,243,64,0.25)] group"
                  >
                    Request Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a
                    href="#standards"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-5 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    Browse Standards
                  </motion.a>
                </div>
              </StaggerItem>
              <StaggerItem variants={fadeIn}>
                <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl">
                  {[
                    { value: '10', label: 'Standards Covered', accent: false },
                    { value: '100%', label: 'Documented Systems', accent: true },
                    { value: '24/7', label: 'Technical Support', accent: false },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <motion.h3
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.12, type: 'spring' as const, damping: 12 }}
                        className={`text-3xl font-extrabold ${stat.accent ? 'text-brand-accent' : 'text-white'}`}
                      >
                        {stat.value}
                      </motion.h3>
                      <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Standards grid */}
      <section id="standards" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-brand-primary text-xs font-extrabold tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full inline-block">
                Our Standards
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-6 mb-4">
                Standards We Support
              </h2>
              <p className="text-gray-600">
                Select a standard to explore the scope, requirements, and how BIOSAF supports your certification journey.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {standards.map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-brand-light rounded-[1.75rem] p-7 hover:bg-brand-dark hover:text-white group transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-5 group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-brand-dark group-hover:text-brand-accent mb-1">{s.short}</h3>
                <p className="text-xs font-semibold text-gray-600 group-hover:text-gray-300 mb-3">{s.name}</p>
                <span className="inline-flex items-center gap-1 text-brand-primary text-xs font-bold group-hover:text-brand-accent">
                  Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Standard details */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-7xl mx-auto space-y-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-brand-primary text-xs font-extrabold tracking-widest uppercase bg-white px-4 py-2 rounded-full inline-block shadow-sm">
                Detailed Scope
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-6 mb-4">
                What Each Standard Covers
              </h2>
            </div>
          </ScrollReveal>
          {standards.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 scroll-mt-32"
            >
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary shrink-0">
                      <s.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-brand-dark">{s.short}</h3>
                      <p className="text-sm font-semibold text-brand-primary">{s.name}</p>
                    </div>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{s.tagline}</p>
                  <p className="text-gray-600 leading-relaxed text-base">{s.desc}</p>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">What we deliver</p>
                  <ul className="space-y-3">
                    {s.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-brand-light rounded-lg flex items-center justify-center text-brand-primary shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-semibold text-brand-dark text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm hover:text-brand-dark transition-colors"
                  >
                    Get Certified
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-brand-primary text-xs font-extrabold tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full inline-block">
                Why It Matters
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-6 mb-4">
                What Certification Delivers
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-brand-light rounded-[2rem] p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-5">
                  <b.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-brand-primary text-xs font-extrabold tracking-widest uppercase bg-white px-4 py-2 rounded-full inline-block shadow-sm">
                How We Work
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-6 mb-4">
                Our Certification Process
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="bg-brand-dark rounded-[2rem] p-8 h-full text-white relative overflow-hidden">
                  <span className="absolute top-6 right-7 text-5xl font-black text-white/5">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-brand-primary text-xs font-extrabold tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full inline-block">
                Common Questions
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-6 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="bg-brand-light rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-bold text-brand-dark text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-primary shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <ScrollReveal>
        <section id="contact" className="py-24 lg:py-32 bg-brand-light relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
              <div className="grid lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10">
                  <h2 className="text-3xl sm:text-5xl font-black leading-tight">
                    START YOUR CERTIFICATION <br className="hidden sm:inline" />
                    <span className="text-brand-accent">JOURNEY TODAY</span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-base max-w-xl">
                    Tell us which standard you are targeting and our ISO consultants will respond with a clear plan, timeline, and investment estimate.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.a
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href="tel:+923422766482"
                      className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-4 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Call +92 342 2766482
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href="mailto:info@biosafenterprises.com"
                      className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                      <Mail className="w-5 h-5" />
                      Email Us Direct
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://wa.me/923422766482"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Chat on WhatsApp"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-lg transition-colors"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </motion.a>
                  </div>

                  <div className="pt-6 flex flex-wrap gap-2">
                    {[
                      { label: 'HACCP Implementation', href: '/haccp' },
                      { label: 'BRCGS Certification', href: '/brcgs' },
                      { label: 'FSSC 22000', href: '/fssc-22000' },
                      { label: 'Halal Certification', href: '/halal-certification' },
                      { label: 'Food Safety Compliance', href: '/food-safety-compliance' },
                    ].map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-brand-accent transition-colors bg-white/5 border border-white/10 rounded-full px-4 py-2"
                      >
                        {r.label}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                  <CallbackForm
                    title="Request Certification Callback"
                    options={[
                      { value: 'iso-9001', label: 'ISO 9001 Certification' },
                      { value: 'iso-22000', label: 'ISO 22000 Certification' },
                      { value: 'iso-14001', label: 'ISO 14001 Certification' },
                      { value: 'iso-45001', label: 'ISO 45001 Certification' },
                      { value: 'iso-17025', label: 'ISO 17025 Accreditation' },
                      { value: 'iso-13485', label: 'ISO 13485 Certification' },
                      { value: 'haccp', label: 'HACCP Implementation' },
                      { value: 'brcgs', label: 'BRCGS Certification' },
                      { value: 'fssc-22000', label: 'FSSC 22000 Certification' },
                      { value: 'halal', label: 'Halal Certification' },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
