'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const categories = [
  { label: 'Pest Control', value: 'Integrated Corporate Pest Sourcing & Facility Assessment' },
  { label: 'ISO Audits', value: 'ISO Certification & Audit Support' },
  { label: 'Food Safety', value: 'Food Safety Systems Development' },
  { label: 'Lab Sourcing', value: 'Laboratory Equipment Procurement' }
];

const faqs = [
  {
    question: 'How rapidly can BIOSAF deploy chemical or pest technicians?',
    answer: 'For standard municipal pest control, sanitization, or container fumigation requests in Pakistan, BIOSAF is fully configured to deploy technical service units within 24-48 hours. Emergency dispatch routes are operational 24/7.'
  },
  {
    question: 'Does your consultancy cover complete documentation for ISO 22000 & Halal accreditation?',
    answer: 'Yes, our ISO Certification & Halal Consultancy covers the entire system lifecycle: gap assessments, formal manuals, standard operating procedure (SOP) design, implementation parameters, internal pre-audits, and complete certification support.'
  },
  {
    question: 'How do we request quotes for scientific equipment and glassware?',
    answer: 'Simply submit your specific items listing using the contact form or contact us directly. Our procurement coordinators will map global partner inventories (Thermo Fisher, etc.) and issue comprehensive RFPs.'
  },
  {
    question: 'Are the chemicals used in your fumigation protocols government-approved?',
    answer: 'Absolutely. BIOSAF adheres strictly to WHO, EPA, and local government compliance standards. We only process registered, non-toxic, eco-safe parameters designed for structural safety without compromising pet or plant biosecurity.'
  }
];

export default function Contact() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = revealRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

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
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        subject,
        message: `Scope: ${categories[selectedCategory].value}\n\nCompany: ${formData.company}\n\nDetails:\n${formData.message}`,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setToast({ type: 'success', text: 'Thank you! Your sourcing request has been registered successfully.' });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setFieldErrors({});
      } else {
        setToast({ type: 'error', text: data.error || 'Failed to submit inquiry. Please try again.' });
      }
    } catch (err) {
      console.error(err);
      setToast({ type: 'error', text: 'Network or server error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-24 right-4 z-50 px-6 py-4 rounded-2xl shadow-2xl border text-sm font-bold flex items-center gap-3 transition-all animate-bounce ${
          toast.type === 'success'
            ? 'bg-emerald-900 text-emerald-100 border-emerald-700'
            : 'bg-red-900 text-red-100 border-red-700'
        }`}>
          <span>{toast.type === 'success' ? '✓' : '✕'}</span>
          <span>{toast.text}</span>
          <button onClick={() => setToast(null)} className="ml-2 text-xs opacity-70 hover:opacity-100">✕</button>
        </div>
      )}

      {/* Hero */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-brand-dark overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,89,53,0.4),transparent_60%)]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(211,243,64,0.05),transparent_70%)]"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <nav className="flex justify-center items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span className="text-[10px]">›</span>
            <span className="text-white">Contact Us</span>
          </nav>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            Connect With Our <span className="text-brand-accent italic">Compliance Specialists</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            Whether you require structured chemical sourcing, accredited ISO certification pathways, food safety protocol layouts, or active municipal pest containment, BIOSAF engineers are on-call globally.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-8" ref={(el) => { if (el) revealRefs.current.push(el); }}>
              <div>
                <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full inline-block">
                  HQ Sourcing Desk
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-brand-dark mt-4">
                  Operational Hub Details
                </h2>
                <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                  Our primary administrative desk and quality-assurance systems dispatch facility operates direct support coverage models across Pakistan.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-brand-light/40 border border-gray-100 rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 bg-white text-brand-primary rounded-xl flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                    <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Headquarters Address</h4>
                    <p className="text-brand-dark font-bold text-sm mt-1 leading-relaxed">BIOSAF Corporate Complex, Office #4, Main Commercial Boulevard, Karachi, Sindh, Pakistan.</p>
                  </div>
                </div>

                <div className="p-6 bg-brand-light/40 border border-gray-100 rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 bg-white text-brand-primary rounded-xl flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                    <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Direct Compliance Desk</h4>
                    <div className="flex flex-col gap-1.5 mt-1">
                      <a href="tel:+923422766482" className="text-brand-dark hover:text-brand-primary font-extrabold text-sm transition-colors flex items-center gap-1.5">+92 342 2766482</a>
                      <a href="tel:+923021266345" className="text-brand-dark hover:text-brand-primary font-extrabold text-sm transition-colors flex items-center gap-1.5">+92 302 1266345</a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-brand-light/40 border border-gray-100 rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 bg-white text-brand-primary rounded-xl flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                    <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Sourcing Queries</h4>
                    <a href="mailto:info@biosafenterprises.com" className="text-brand-dark hover:text-brand-primary font-extrabold text-sm transition-colors block mt-1">info@biosafenterprises.com</a>
                  </div>
                </div>

                <div className="p-6 bg-brand-light/40 border border-gray-100 rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 bg-white text-brand-primary rounded-xl flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                    <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Corporate Working Hours</h4>
                    <p className="text-brand-dark font-bold text-sm mt-1 leading-relaxed">Mon - Sat: 08:00 AM - 06:00 PM (PKT)</p>
                    <p className="text-xs text-brand-primary font-semibold mt-1 flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping"></span> 24/7 Emergency Dispatch Operational
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a href="https://wa.me/923422766482" target="_blank" rel="noreferrer" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-3 text-sm">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.488-.49-.67-.5-.173-.009-.371-.009-.57-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.067 2.877 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.285-15.192c-2.17-2.176-5.061-3.366-8.125-3.368-6.346 0-11.51 5.16-11.513 11.504-.002 2.023.524 3.99 1.516 5.73l-1.027 3.765 3.867-1.012c1.693.957 3.596 1.473 5.655 1.476h.004c6.345 0 11.509-5.162 11.51-11.508.003-3.066-1.192-5.956-3.366-8.127z" />
                  </svg>
                  <span>Direct Route to Emergency WhatsApp Sourcing</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-brand-light/30 border border-gray-100 rounded-[2.5rem] p-8 md:p-12" ref={(el) => { if (el) revealRefs.current.push(el); }}>
              <div className="mb-8">
                <h3 className="text-2xl font-black text-brand-dark">Send Structured RFP</h3>
                <p className="text-xs text-slate-500 mt-1.5">Select a category below to route your request directly to the appropriate compliance team.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedCategory(index)}
                    className={`text-[11px] font-bold uppercase tracking-wider py-3 px-2 rounded-xl transition-all ${
                      selectedCategory === index ? 'bg-brand-accent text-brand-dark font-black shadow-xs' : 'bg-white text-slate-500 border border-gray-200 hover:bg-slate-50'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. Paramount Foods Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-brand-dark placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">Contact Officer Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Naveed"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: '' });
                      }}
                      className={`w-full bg-white border rounded-xl py-3.5 px-4 text-brand-dark placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs ${
                        fieldErrors.name ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                      }`}
                    />
                    {fieldErrors.name && <p className="text-red-500 text-[10px] font-bold mt-1">{fieldErrors.name}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">Professional Email *</label>
                    <input
                      type="email"
                      placeholder="e.g. s.naveed@paramount.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' });
                      }}
                      className={`w-full bg-white border rounded-xl py-3.5 px-4 text-brand-dark placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs ${
                        fieldErrors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                      }`}
                    />
                    {fieldErrors.email && <p className="text-red-500 text-[10px] font-bold mt-1">{fieldErrors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">Active Mobile Line</label>
                    <input
                      type="tel"
                      placeholder="e.g. +92 342 0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-brand-dark placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">Current Sourcing Area / Scope of Inquiry</label>
                  <input type="text" value={categories[selectedCategory].value} className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3.5 px-4 text-brand-dark font-semibold text-xs cursor-not-allowed" readOnly />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">Technical Requirements Brief / Site Specifics *</label>
                  <textarea
                    placeholder="Outline chemical limitations, desired ISO parameters, or timeline guidelines here."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: '' });
                    }}
                    className={`w-full bg-white border rounded-xl py-3.5 px-4 text-brand-dark placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs h-36 resize-none ${
                      fieldErrors.message ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                    }`}
                  />
                  {fieldErrors.message && <p className="text-red-500 text-[10px] font-bold mt-1">{fieldErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-primary hover:bg-brand-secondary disabled:opacity-50 text-white font-extrabold py-4 rounded-xl transition-all text-xs tracking-widest uppercase shadow-md flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <span>Submit Sourcing Request</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-white relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-200 relative bg-slate-100 aspect-[16/6] min-h-[300px]">
            <iframe
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1367098754707!2d67.0305113!3d24.8420625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ef34d314051%3A0x600b991bdf1a07af!2sKarachi%20Cantt%20Station!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="hidden md:block absolute top-8 left-8 bg-brand-primary text-white p-6 rounded-2xl max-w-xs shadow-2xl border border-white/10 backdrop-blur-md">
              <h4 className="font-extrabold text-sm tracking-wider uppercase text-brand-accent">Karachi Headquarters</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                BIOSAF Enterprises Corporate Complex, Karachi, Sindh, Pakistan.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-brand-accent font-bold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Corporate Desk Direct Hub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-light relative border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" ref={(el) => { if (el) revealRefs.current.push(el); }}>
            <span className="text-brand-primary text-xs font-bold tracking-widest uppercase bg-white border border-gray-100 px-3.5 py-1.5 rounded-full inline-block">
              Advisory Hub
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-dark mt-4">
              Frequently Asked Queries
            </h2>
            <p className="text-slate-500 mt-2 text-sm leading-relaxed">
              Review standard procedure protocols, deployment schedules, and compliance metrics.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full text-left py-6 px-8 flex justify-between items-center text-brand-dark hover:text-brand-primary font-extrabold text-sm transition-colors">
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 text-xs text-slate-500 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-16 bg-brand-primary text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-xl sm:text-2xl font-black">Stay Connected with BIOSAF Regulatory Updates</h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
            Connect with our social media networks or register with our compliance systems lists to keep abreast of modern laboratory advancements and technical protocols.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
