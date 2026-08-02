'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Check,
  type LucideIcon,
} from 'lucide-react';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';
import { fadeUp, fadeIn } from '@/lib/motion';
import CallbackForm from '@/components/ui/CallbackForm';

export interface ShellBenefit {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ShellService {
  icon: LucideIcon;
  title: string;
  desc: string;
  cta: string;
  href: string;
}

export interface ShellStep {
  title: string;
  desc: string;
}

export interface ShellFaq {
  q: string;
  a: string;
}

export interface ServicePageData {
  badge: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroStats: { value: string; label: string }[];
  overviewEyebrow: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  overviewPoints: string[];
  overviewImage: string;
  overviewImageAlt: string;
  benefitsTitle: string;
  benefits: ShellBenefit[];
  servicesTitle: string;
  services: ShellService[];
  processTitle: string;
  process: ShellStep[];
  industries: string[];
  faqs: ShellFaq[];
  ctaTitle: string;
  ctaHighlight: string;
  ctaText: string;
  related: { label: string; href: string }[];
  formOptions: { value: string; label: string }[];
}

export default function ServicePageShell({ data }: { data: ServicePageData }) {
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
                  {data.badge}
                </div>
              </StaggerItem>

              <StaggerItem variants={fadeUp}>
                <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                  {data.heroTitle} <span className="text-brand-accent italic">{data.heroHighlight}</span>
                </h1>
              </StaggerItem>

              <StaggerItem variants={fadeIn}>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">{data.heroSubtitle}</p>
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
                    href="#overview"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-5 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    Learn More
                  </motion.a>
                </div>
              </StaggerItem>

              <StaggerItem variants={fadeIn}>
                <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl">
                  {data.heroStats.map((stat, i) => (
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
                        className={`text-3xl font-extrabold ${i === 1 ? 'text-brand-accent' : 'text-white'}`}
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

      {/* Overview */}
      <ScrollReveal variants={fadeUp}>
        <section id="overview" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-6 relative">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[2rem] overflow-hidden shadow-2xl"
                >
                  <img
                    src={data.overviewImage}
                    alt={data.overviewImageAlt}
                    className="w-full object-cover aspect-[4/3]"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <StaggerGroup>
                  <StaggerItem>
                    <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light px-3.5 py-1.5 rounded-full">
                      {data.overviewEyebrow}
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark leading-tight">{data.overviewTitle}</h2>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                      {data.overviewParagraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {data.overviewPoints.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-brand-light rounded-lg flex items-center justify-center text-brand-primary shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-semibold text-brand-dark text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </StaggerItem>
                </StaggerGroup>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Benefits */}
      {data.benefits.length > 0 && (
        <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-brand-light">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-brand-primary text-xs font-extrabold tracking-widest uppercase bg-white px-4 py-2 rounded-full inline-block shadow-sm">
                  Why It Matters
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-6 mb-4">{data.benefitsTitle}</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary mb-5">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services offered */}
      {data.services.length > 0 && (
        <section className="py-24 lg:py-32 bg-brand-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(11,51,31,0.5),transparent_50%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-20">
                <span className="text-brand-accent text-xs font-extrabold tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block">
                  What We Deliver
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold mt-6 mb-4">{data.servicesTitle}</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="glass-panel rounded-[2rem] p-8 flex flex-col justify-between group cursor-default"
                >
                  <div>
                    <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm mt-auto group/link"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Implementation process */}
      {data.process.length > 0 && (
        <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-brand-primary text-xs font-extrabold tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full inline-block">
                  How We Work
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-6 mb-4">{data.processTitle}</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.process.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
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
      )}

      {/* Industries served */}
      {data.industries.length > 0 && (
        <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-brand-light">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-brand-primary text-xs font-extrabold tracking-widest uppercase bg-white px-4 py-2 rounded-full inline-block shadow-sm">
                  Who We Support
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-6 mb-4">Industries We Serve</h2>
              </div>
            </ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {data.industries.map((ind, i) => (
                <motion.span
                  key={ind}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  className="bg-white rounded-full px-6 py-3 text-sm font-bold text-brand-dark shadow-sm border border-gray-100"
                >
                  {ind}
                </motion.span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faqs.length > 0 && (
        <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-brand-primary text-xs font-extrabold tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full inline-block">
                  Common Questions
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mt-6 mb-4">Frequently Asked Questions</h2>
              </div>
            </ScrollReveal>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
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
      )}

      {/* CTA + Contact */}
      <ScrollReveal>
        <section id="contact" className="py-24 lg:py-32 bg-brand-light relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
              <div className="grid lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10">
                  <h2 className="text-3xl sm:text-5xl font-black leading-tight">
                    {data.ctaTitle} <br className="hidden sm:inline" />
                    <span className="text-brand-accent">{data.ctaHighlight}</span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-base max-w-xl">{data.ctaText}</p>

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

                  {data.related.length > 0 && (
                    <div className="pt-6 flex flex-wrap gap-2">
                      {data.related.map((r) => (
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
                  )}
                </div>

                <div className="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                  <CallbackForm options={data.formOptions} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
