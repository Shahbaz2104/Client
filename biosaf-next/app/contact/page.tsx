'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const categories = [
  { label: 'Pest Control', value: 'Integrated Corporate Pest Sourcing & Facility Assessment' },
  { label: 'ISO Audits', value: 'ISO Certification & Audit Support' },
  { label: 'Food Safety', value: 'Food Safety Systems Development' },
  { label: 'Lab Sourcing', value: 'Laboratory Equipment Procurement' },
];

const faqs = [
  {
    question: 'How rapidly can BIOSAF deploy chemical or pest technicians?',
    answer: 'For standard municipal pest control, sanitization, or container fumigation requests in Pakistan, BIOSAF is fully configured to deploy technical service units within 24-48 hours. Emergency dispatch routes are operational 24/7.',
  },
  {
    question: 'Does your consultancy cover complete documentation for ISO 22000 & Halal accreditation?',
    answer: 'Yes, our ISO Certification & Halal Consultancy covers the entire system lifecycle: gap assessments, formal manuals, standard operating procedure (SOP) design, implementation parameters, internal pre-audits, and complete certification support.',
  },
  {
    question: 'How do we request quotes for scientific equipment and glassware?',
    answer: 'Simply submit your specific items listing using the contact form or contact us directly. Our procurement coordinators will map global partner inventories (Thermo Fisher, etc.) and issue comprehensive RFPs.',
  },
  {
    question: 'Are the chemicals used in your fumigation protocols government-approved?',
    answer: 'Absolutely. BIOSAF adheres strictly to WHO, EPA, and local government compliance standards. We only process registered, non-toxic, eco-safe parameters designed for structural safety without compromising pet or plant biosecurity.',
  },
];

export default function Contact() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => { document.title = "Contact Us - BIOSAF Enterprises"; }, []);

  function validateForm() {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Contact officer name is required';
    if (!formData.email.trim()) {
      errors.email = 'Professional email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Technical requirements brief is required';
    } else if (formData.message.length < 5) {
      errors.message = 'Message must be at least 5 characters';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm() || loading) return;
    setLoading(true);
    setToast(null);
    try {
      const subject = `[${categories[selectedCategory].label}] ${formData.company || 'General Inquiry'}`;
      const payload = {
        name: formData.name, email: formData.email, phone: formData.phone || undefined,
        subject, message: `Scope: ${categories[selectedCategory].value}\n\nCompany: ${formData.company}\n\nDetails:\n${formData.message}`,
      };
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setToast({ type: 'success', text: 'Thank you! Your sourcing request has been registered successfully.' });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setFieldErrors({});
      } else {
        setToast({ type: 'error', text: data.error || 'Failed to submit inquiry. Please try again.' });
      }
    } catch {
      setToast({ type: 'error', text: 'Network or server error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.95 }}
            transition={{ type: 'spring' as const, damping: 20, stiffness: 300 }}
            className={`fixed top-24 right-4 z-50 px-6 py-4 rounded-2xl shadow-2xl border text-sm font-bold flex items-center gap-3 ${
              toast.type === 'success' ? 'bg-emerald-900 text-emerald-100 border-emerald-700' : 'bg-red-900 text-red-100 border-red-700'
            }`}
          >
            <span>{toast.type === 'success' ? '✓' : '✕'}</span>
            <span>{toast.text}</span>
            <button onClick={() => setToast(null)} className="ml-2 text-xs opacity-70 hover:opacity-100">✕</button>
            <motion.div
              initial={{ scaleX: 1 }} animate={{ scaleX: 0 }}
              transition={{ duration: 3.5, ease: 'linear' }}
              className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl origin-left ${toast.type === 'success' ? 'bg-emerald-400' : 'bg-red-400'}`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-brand-dark overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,89,53,0.4),transparent_60%)]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(211,243,64,0.05),transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
            className="flex justify-center items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6"
          >
            <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span className="text-[10px]">›</span>
            <span className="text-white">Contact Us</span>
          </motion.nav>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Connect With Our <span className="text-brand-accent italic">Compliance Specialists</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.4 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            Whether you require structured chemical sourcing, accredited ISO certification pathways, food safety protocol layouts, or active municipal pest containment, BIOSAF engineers are on-call globally.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">HQ Sourcing Desk</span>
                <h2 className="text-3xl sm:text-4xl font-black text-brand-dark mt-4">Operational Hub Details</h2>
                <p className="text-slate-500 mt-2 text-sm leading-relaxed">Our primary administrative desk and quality-assurance systems dispatch facility operates direct support coverage models across Pakistan.</p>
              </motion.div>

              <div className="space-y-4">
                {[
                  { icon: 'map', title: 'Headquarters Address', content: 'BIOSAF Corporate Complex, Office #4, Main Commercial Boulevard, Karachi, Sindh, Pakistan.' },
                  { icon: 'phone', title: 'Direct Compliance Desk', content: null, phones: ['+92 342 2766482', '+92 302 1266345'] },
                  { icon: 'email', title: 'Sourcing Queries', content: null, email: 'info@biosafenterprises.com' },
                  { icon: 'clock', title: 'Corporate Working Hours', content: 'Mon - Sat: 08:00 AM - 06:00 PM (PKT)', emergency: true },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    whileHover={{ y: -2, scale: 1.01 }}
                    className="p-6 bg-brand-light/40 border border-gray-100 rounded-2xl flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-white text-brand-primary rounded-xl flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                      <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                        {item.icon === 'map' && <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />}
                        {item.icon === 'phone' && <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />}
                        {item.icon === 'email' && <><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></>}
                        {item.icon === 'clock' && <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />}
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">{item.title}</h4>
                      {item.content && <p className="text-brand-dark font-bold text-sm mt-1 leading-relaxed">{item.content}</p>}
                      {(item as any).phones?.map((p: string) => (
                        <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="text-brand-dark hover:text-brand-primary font-extrabold text-sm transition-colors flex items-center gap-1.5 mt-1">{p}</a>
                      ))}
                      {(item as any).email && (
                        <a href={`mailto:${(item as any).email}`} className="text-brand-dark hover:text-brand-primary font-extrabold text-sm transition-colors block mt-1">{(item as any).email}</a>
                      )}
                      {item.emergency && (
                        <p className="text-xs text-brand-primary font-semibold mt-1 flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" /> 24/7 Emergency Dispatch Operational
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-2">
                <a href="https://wa.me/923422766482" target="_blank" rel="noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-3 text-sm"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.488-.49-.67-.5-.173-.009-.371-.009-.57-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.067 2.877 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.285-15.192c-2.17-2.176-5.061-3.366-8.125-3.368-6.346 0-11.51 5.16-11.513 11.504-.002 2.023.524 3.99 1.516 5.73l-1.027 3.765 3.867-1.012c1.693.957 3.596 1.473 5.655 1.476h.004c6.345 0 11.509-5.162 11.51-11.508.003-3.066-1.192-5.956-3.366-8.127z" />
                  </svg>
                  <span>Direct Route to Emergency WhatsApp Sourcing</span>
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-7 bg-brand-light/30 border border-gray-100 rounded-[2.5rem] p-8 md:p-12"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-black text-brand-dark">Send Structured RFP</h3>
                <p className="text-xs text-slate-500 mt-1.5">Select a category below to route your request directly to the appropriate compliance team.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => setSelectedCategory(index)}
                    className={`text-[11px] font-bold uppercase tracking-wider py-3 px-2 rounded-xl transition-all ${
                      selectedCategory === index ? 'bg-brand-accent text-brand-dark font-black shadow-xs' : 'bg-white text-slate-500 border border-gray-200 hover:bg-slate-50'
                    }`}
                  >
                    {category.label}
                  </motion.button>
                ))}
              </div>

              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { label: 'Company / Organization', name: 'company', placeholder: 'e.g. Paramount Foods Ltd', required: false },
                    { label: 'Contact Officer Name *', name: 'name', placeholder: 'e.g. Sarah Naveed', required: true },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">{field.label}</label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        placeholder={field.placeholder}
                        value={(formData as any)[field.name]}
                        onChange={(e) => { setFormData({ ...formData, [field.name]: e.target.value }); if (fieldErrors[field.name]) setFieldErrors({ ...fieldErrors, [field.name]: '' }); }}
                        className={`w-full bg-white border rounded-xl py-3.5 px-4 text-brand-dark placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs transition-all ${fieldErrors[field.name] ? 'border-red-500 bg-red-50/20' : 'border-gray-200'}`}
                      />
                      {fieldErrors[field.name] && <p className="text-red-500 text-[10px] font-bold mt-1">{fieldErrors[field.name]}</p>}
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { label: 'Professional Email *', name: 'email', type: 'email', placeholder: 'e.g. s.naveed@paramount.com', required: true },
                    { label: 'Active Mobile Line', name: 'phone', type: 'tel', placeholder: 'e.g. +92 342 0000000', required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">{field.label}</label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={(formData as any)[field.name]}
                        onChange={(e) => { setFormData({ ...formData, [field.name]: e.target.value }); if (fieldErrors[field.name]) setFieldErrors({ ...fieldErrors, [field.name]: '' }); }}
                        className={`w-full bg-white border rounded-xl py-3.5 px-4 text-brand-dark placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs transition-all ${fieldErrors[field.name] ? 'border-red-500 bg-red-50/20' : 'border-gray-200'}`}
                      />
                      {fieldErrors[field.name] && <p className="text-red-500 text-[10px] font-bold mt-1">{fieldErrors[field.name]}</p>}
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">Current Sourcing Area / Scope of Inquiry</label>
                  <input type="text" value={categories[selectedCategory].value} className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3.5 px-4 text-brand-dark font-semibold text-xs cursor-not-allowed" readOnly />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">Technical Requirements Brief / Site Specifics *</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    placeholder="Outline chemical limitations, desired ISO parameters, or timeline guidelines here."
                    value={formData.message}
                    onChange={(e) => { setFormData({ ...formData, message: e.target.value }); if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: '' }); }}
                    className={`w-full bg-white border rounded-xl py-3.5 px-4 text-brand-dark placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs h-36 resize-none transition-all ${fieldErrors.message ? 'border-red-500 bg-red-50/20' : 'border-gray-200'}`}
                  />
                  {fieldErrors.message && <p className="text-red-500 text-[10px] font-bold mt-1">{fieldErrors.message}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-primary hover:bg-brand-secondary disabled:opacity-50 text-white font-extrabold py-4 rounded-xl transition-all text-xs tracking-widest uppercase shadow-md flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <><motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" /><span>Processing Request...</span></>
                  ) : <span>Submit Sourcing Request</span>}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <ScrollReveal>
        <section className="py-12 bg-white relative border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-200 relative bg-slate-100 aspect-[16/6] min-h-[300px]">
              <iframe className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1367098754707!2d67.0305113!3d24.8420625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ef34d314051%3A0x600b991bdf1a07af!2sKarachi%20Cantt%20Station!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="BIOSAF Headquarters Location" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="py-24 bg-white relative border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-dark mt-4">Frequently Asked Questions</h2>
              <p className="text-slate-500 text-sm mt-2">Find answers to common inquiries about our services and operations.</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.3 }}
                  className="border border-gray-200 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-brand-dark text-sm pr-4">{faq.question}</span>
                    <motion.svg
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5 text-brand-primary shrink-0"
                      fill="currentColor" viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
