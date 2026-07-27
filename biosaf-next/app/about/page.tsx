'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal';
import { fadeUp, fadeIn } from '@/lib/motion';

const testimonials = [
  {
    text: '&quot;BIOSAF Enterprises implemented our corporate food safety system flawlessly. Their technical consulting and regulatory manual setup made our ISO 22000 certification audit completely seamless.&quot;',
    author: 'Kamran Shahzad',
    role: 'Quality Assurance Director, Indus Food Processing',
  },
  {
    text: '&quot;Outstanding response speed. We discovered an environmental monitoring gap in our cleanrooms, and their laboratory calibration support resolved the issue within 24 hours. Robust performance!&quot;',
    author: 'Dr. Sarah Naveed',
    role: 'Scientific Coordinator, Alpha Research Labs',
  },
  {
    text: '&quot;As an industrial EHS manager, compliance is absolute. BIOSAF provided meticulous documentation, continuous support, and flawless pest control protocols across our manufacturing depots.&quot;',
    author: 'M. Ibrahim Khan',
    role: 'EHS Lead, Hub Industrial Sector',
  },
];

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [aboutForm, setAboutForm] = useState({ name: '', phone: '', requirement: '' });
  const [aboutSubmitting, setAboutSubmitting] = useState(false);
  const [aboutToast, setAboutToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => { document.title = "About Us - BIOSAF Enterprises"; }, []);

  async function handleAboutSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!aboutForm.name || !aboutForm.phone) return;
    setAboutSubmitting(true);
    setAboutToast(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: aboutForm.name,
          email: 'callback@biosafenterprises.com',
          phone: aboutForm.phone,
          subject: `Assessment Request: ${aboutForm.requirement}`,
          message: `Callback requested for: ${aboutForm.requirement}`,
        }),
      });
      if (res.ok) {
        setAboutToast({ type: 'success', message: 'Callback requested! Our team will contact you shortly.' });
        setAboutForm({ name: '', phone: '', requirement: '' });
      } else {
        const err = await res.json();
        setAboutToast({ type: 'error', message: err.error || 'Failed to submit.' });
      }
    } catch {
      setAboutToast({ type: 'error', message: 'Network error.' });
    } finally {
      setAboutSubmitting(false);
    }
  }

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
            <span className="text-brand-accent font-bold">Solutions Overview</span>
          </motion.nav>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-8">
              <StaggerGroup>
                <StaggerItem>
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-2.5 h-2.5 rounded-full bg-brand-accent"
                    />
                    Trusted Scientific Advisory & Operations
                  </div>
                </StaggerItem>
                <StaggerItem variants={fadeUp}>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                    Integrated Laboratory, <br className="hidden sm:inline" />
                    Food Safety & <span className="text-brand-accent italic">Pest Solutions</span>
                  </h1>
                </StaggerItem>
                <StaggerItem variants={fadeIn}>
                  <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                    Helping progressive businesses achieve global quality standards, food security, compliance validation, and pest-free environments with customized operational methodologies.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-brand-accent hover:bg-[#b8e036] text-brand-dark px-8 py-5 rounded-full font-extrabold text-base transition-all flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(211,243,64,0.25)] group"
                    >
                      Request Quote
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href="/divisions"
                      className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-5 rounded-full font-semibold text-base transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                      Explore Services
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                  </div>
                </StaggerItem>
                <StaggerItem variants={fadeIn}>
                  <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
                    {[
                      { value: '15+', label: 'Years Experience', accent: false },
                      { value: '500+', label: 'Projects Completed', accent: true },
                      { value: '100+', label: 'Business Clients', accent: false },
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

            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto max-w-[420px] lg:max-w-none"
              >
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-accent rounded-full opacity-10 blur-3xl" />
                <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-brand-primary rounded-full opacity-20 blur-3xl" />

                <motion.div whileHover={{ scale: 1.01 }} className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&w=800&q=80" alt="Scientific Research Laboratory and Testing" className="w-full object-cover aspect-[4/5]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.6, type: 'spring' as const, damping: 15 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="absolute -bottom-6 -left-6 z-20 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-brand-dark leading-none">98%</h4>
                    <p className="text-xs text-gray-500 font-semibold mt-1">Satisfaction Rate</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' as const, damping: 15 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-12 -right-6 z-20 glass-panel text-white py-3 px-5 rounded-2xl border border-white/20 flex items-center gap-2 shadow-xl backdrop-blur-md"
                >
                  <svg className="w-6 h-6 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.111 7.505a.75.75 0 01.834-.667 3.5 3.5 0 012.615 2.468c.271.946.165 1.83-.276 2.54-.276.444-.708.808-1.234 1.101-.23.13-.437.27-.627.408a.75.75 0 01-.933-.258l-.003-.004a.75.75 0 01.258-1.03c.106-.076.235-.174.36-.277.25-.206.408-.397.491-.596.104-.253.158-.55.064-.879a2 2 0 00-1.494-1.411.75.75 0 01-.667-.833zm.889 6.495a.875.875 0 111.75 0 .875.875 0 01-1.75 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold tracking-wide">Scientific Standards</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <ScrollReveal>
        <section id="about" className="py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-6 relative">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid grid-cols-12 gap-4"
                >
                  <div className="col-span-10 rounded-[2rem] overflow-hidden shadow-2xl relative">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Advanced Safety Auditing Personnel" className="w-full object-cover aspect-[4/5]" />
                    <div className="absolute inset-0 bg-brand-primary/10" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring' as const, damping: 15 }}
                    className="absolute bottom-[-30px] right-0 col-span-5 w-[200px] sm:w-[240px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                  >
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="Consultation meeting on safety" className="w-full aspect-square object-cover" />
                  </motion.div>
                </motion.div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <StaggerGroup>
                  <StaggerItem>
                    <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light px-3.5 py-1.5 rounded-full">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0a10 10 0 00-3.162 19.492v-5.777a.75.75 0 01.75-.75h4.824a.75.75 0 01.75.75v5.777A10 10 0 1010 0zm0 5a3 3 0 110 6 3 3 0 010-6z" clipRule="evenodd" />
                      </svg>
                      Corporate Profile
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <h2 className="text-3xl sm:text-5xl font-black text-brand-dark leading-tight">Delivering Safe Environments & Quality Systems</h2>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                      <p className="font-medium text-brand-primary">BIOSAF Enterprises is a distinguished professional services and scientific trading company configured to align physical structures with strict international quality norms.</p>
                      <p>We specialize in configuring robust pest control frameworks, implementing global certifications, planning custom food safety systems, and procuring certified laboratory assets. Our mission is to secure human health, preserve resource values, and sustain regulatory compliance benchmarks.</p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                      {[
                        { title: 'Our Vision', desc: 'To be the region\'s premium scientific choice in engineering, technical, biological, and system certifications.' },
                        { title: 'Our Mission', desc: 'Providing high-grade equipment, tailored environmental compliance setups, and strategic audits that shield clients\' reputations.' },
                      ].map((item, i) => (
                        <motion.div key={item.title} whileHover={{ x: 4 }} className="space-y-2">
                          <div className="flex items-center gap-2 font-extrabold text-brand-dark">
                            <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                              {i === 0 ? (
                                <><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></>
                              ) : (
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                              )}
                            </svg>
                            <span>{item.title}</span>
                          </div>
                          <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-brand-dark">
                      {['Scientific Integrity', 'Client Security', 'Continuous Innovation'].map((item, i) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-center gap-1.5"
                        >
                          <svg className="w-4 h-4 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </StaggerItem>
                </StaggerGroup>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
        <section className="py-24 lg:py-36 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full inline-block mb-8">
              Corporate Endorsements
            </span>

            <div className="relative min-h-[250px] flex items-center justify-center">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="flex justify-center mb-6">
                  <div className="flex text-brand-accent">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-8 h-8 bg-brand-primary p-1 rounded-md ml-1 first:ml-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="font-serif italic text-2xl sm:text-3xl text-brand-dark leading-relaxed mb-8 max-w-3xl mx-auto">
                  {testimonials[currentTestimonial].text}
                </p>
                <div>
                  <h4 className="font-extrabold text-brand-primary text-lg">{testimonials[currentTestimonial].author}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous Review"
                className="w-12 h-12 rounded-full bg-brand-light text-brand-dark hover:bg-brand-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                aria-label="Next Review"
                className="w-12 h-12 rounded-full bg-brand-light text-brand-dark hover:bg-brand-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact */}
      <ScrollReveal>
        <section id="contact" className="py-24 lg:py-36 bg-brand-light relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
              <div className="grid lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10 flex flex-col justify-center">
                  <svg className="w-12 h-12 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  <h2 className="text-3xl sm:text-5xl font-black leading-tight">Need Professional <br className="hidden sm:inline"/>Technical Solutions?</h2>
                  <p className="text-gray-300 leading-relaxed text-base max-w-xl">
                    Our corporate specialists are prepared to audit your organization. Reach out today for laboratory equipment, food safety setups, ISO implementation, or pest management plans.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.a whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} href="tel:+923422766482" className="bg-brand-accent hover:bg-[#b8e036] text-brand-dark px-8 py-4 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                      Call +92 342 2766482
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} href="mailto:info@biosafenterprises.com" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2 backdrop-blur-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                      Email Our Support
                    </motion.a>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                  <h3 className="text-white text-xl font-bold mb-6">Schedule An Assessment</h3>
                  <form className="space-y-4" onSubmit={handleAboutSubmit}>
                    {[
                      { label: 'Company / Contact Name', name: 'name', type: 'text', placeholder: 'e.g. BIOSAF Representative', required: true },
                      { label: 'Active Phone Line', name: 'phone', type: 'tel', placeholder: 'e.g. +92 342 2766482', required: true },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">{field.label}</label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type={field.type}
                          value={(aboutForm as Record<string, string>)[field.name]}
                          onChange={(e) => setAboutForm({ ...aboutForm, [field.name]: e.target.value })}
                          placeholder={field.placeholder}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs transition-all"
                          required={field.required}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Primary Requirement</label>
                      <select value={aboutForm.requirement} onChange={(e) => setAboutForm({ ...aboutForm, requirement: e.target.value })} className="w-full bg-brand-primary border border-white/10 rounded-xl py-3.5 px-4 text-gray-300 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs transition-all">
                        <option value="Pest Management & Fumigation">Pest Management & Fumigation</option>
                        <option value="ISO Certification Support">ISO Certification Support</option>
                        <option value="Food Safety Systems Development">Food Safety Systems Development</option>
                        <option value="Laboratory Equipment Sales">Laboratory Equipment Sales</option>
                      </select>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      disabled={aboutSubmitting}
                      className="w-full bg-brand-accent hover:bg-[#b8e036] text-brand-dark font-extrabold py-4 rounded-xl transition-all text-xs tracking-wider uppercase mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {aboutSubmitting && (
                        <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full" />
                      )}
                      {aboutSubmitting ? 'Sending...' : 'Request Callback'}
                    </motion.button>
                    {aboutToast && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-xl text-xs font-bold text-center ${aboutToast.type === 'success' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30' : 'bg-red-950/80 text-red-400 border border-red-500/30'}`}
                      >
                        {aboutToast.message}
                      </motion.div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
