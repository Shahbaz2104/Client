'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  return (
    <div>
      {/* Hero Showcase Section */}
      <section className="relative pt-48 pb-28 sm:pt-56 sm:pb-36 lg:pt-60 lg:pb-48 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,51,31,0.6),transparent_60%)]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(211,243,64,0.06),transparent_70%)]"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse"></span>
                Premium Corporate Technical Solutions
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                Integrated Laboratory,<br className="hidden sm:inline"/>
                Food Safety & <span className="text-brand-accent italic">Pest</span> Management
              </h1>

              <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                Helping businesses achieve safety, quality, compliance, and operational excellence through professional technical services and scientific solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="bg-brand-accent hover:bg-[#b8e036] text-brand-dark px-8 py-5 rounded-full font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(211,243,64,0.25)] hover:-translate-y-1 group">
                  Request Quote
                </a>
                <a href="#services" className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-5 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
                  Explore Services
                </a>
              </div>

              <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl">
                <div>
                  <h3 className="text-3xl font-extrabold text-white">100%</h3>
                  <p className="text-xs text-gray-400 mt-1">Complete Technical Solutions</p>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-brand-accent">ISO</h3>
                  <p className="text-xs text-gray-400 mt-1">International Standards</p>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-white">24/7</h3>
                  <p className="text-xs text-gray-400 mt-1">Reliable Support</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-accent rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-brand-primary rounded-full opacity-20 blur-3xl"></div>

                <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Advanced Corporate Laboratory Facility" className="w-full object-cover aspect-[4/5]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                </div>

                <div className="absolute -bottom-6 -left-6 z-20 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-brand-dark leading-none">500+</h4>
                    <p className="text-xs text-gray-500 font-semibold mt-1">Projects Completed</p>
                  </div>
                </div>

                <div className="absolute top-12 -right-6 z-20 glass-panel text-white py-3 px-5 rounded-2xl border border-white/20 flex items-center gap-2 shadow-xl backdrop-blur-sm">
                  <svg className="w-6 h-6 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold tracking-wide">Accredited Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Logos / Compliance Ribbon */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest w-full lg:w-auto mb-4 lg:mb-0">Global Framework Compliance:</span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
              <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              ISO 9001:2015
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
              <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.664-1.118A9.956 9.956 0 0110 10c-.997 0-1.967-.246-2.815-.701a1 1 0 10-1.042 1.705A11.957 11.957 0 0010 12c1.195 0 2.342-.295 3.375-.824z" clipRule="evenodd" />
              </svg>
              HACCP & Food Safety
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
              <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v1h10V4a2 2 0 00-2-2H7zm3 14a1 1 0 01-1-1v-1H7a1 1 0 110-2h2V9a1 1 0 112 0v2h2a1 1 0 110 2h-2v1a1 1 0 01-1 1z" clipRule="evenodd" />
              </svg>
              ISO 17025 Standards
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
              <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              GMP & GHP Systems
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative" ref={(el) => { if (el) revealRefs.current.push(el); }}>
              <div className="relative grid grid-cols-12 gap-4">
                <div className="col-span-10 rounded-[2rem] overflow-hidden shadow-2xl relative">
                  <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80" alt="Scientific Lab Auditing and Safety Checks" className="w-full object-cover aspect-[4/5]" />
                  <div className="absolute inset-0 bg-brand-primary/10"></div>
                </div>
                <div className="absolute bottom-[-40px] right-0 col-span-5 w-[200px] sm:w-[240px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="ISO Certification Consultation" className="w-full aspect-square object-cover" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6" ref={(el) => { if (el) revealRefs.current.push(el); }}>
              <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light px-3.5 py-1.5 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Scientific Excellence
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark leading-tight">
                Delivering Safe Environments & Scientific Solutions
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p className="font-medium text-brand-primary">
                  BIOSAF Enterprises is a professional service and trading company providing integrated, scientific, and safety systems across diverse technical disciplines.
                </p>
                <p>
                  We provide comprehensive and highly specialized services in Pest Management & Fumigation, ISO Certification, Food Safety System Development, and Laboratory Equipment Sales. Our main goal is to deliver quality, compliance-backed solutions with operational warmth, friendliness, and maximum technical value.
                </p>
                <p>
                  We work diligently to earn our clients trust and absolute confidence by building long-term corporate relationships. No matter your industry, you can rest assured that BIOSAF will offer a fast, efficient, and professional response program tailored to your technical specifications.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary shadow-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-bold text-brand-dark text-sm">ISO Certified Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary shadow-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.664-1.118A9.956 9.956 0 0110 10c-.997 0-1.967-.246-2.815-.701a1 1 0 10-1.042 1.705A11.957 11.957 0 0010 12c1.195 0 2.342-.295 3.375-.824z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-bold text-brand-dark text-sm">Complete Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Showcase */}
      <section id="services" className="py-24 lg:py-36 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(11,51,31,0.5),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20" ref={(el) => { if (el) revealRefs.current.push(el); }}>
            <span className="text-brand-accent text-xs font-extrabold tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block">
              Corporate Divisions
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mt-6 mb-4">
              Our Core Business Areas
            </h2>
            <p className="text-gray-400">Integrated scientific frameworks, safety solutions, compliance audits, and specialized equipment procurements designed for industrial sectors.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Division 1 */}
            <div className="glass-panel rounded-[2rem] p-8 glow-hover flex flex-col justify-between" ref={(el) => { if (el) revealRefs.current.push(el); }}>
              <div>
                <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Pest Management & Fumigation</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">Professional pest control, termite management, rodent control, warehouse fumigation, annual maintenance contracts, and food industry pest management.</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm hover:underline mt-auto">
                Request Quote
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Division 2 */}
            <div className="glass-panel rounded-[2rem] p-8 glow-hover flex flex-col justify-between" ref={(el) => { if (el) revealRefs.current.push(el); }}>
              <div>
                <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">ISO Certification Support</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">Expert guidance for ISO 9001, ISO 22000, ISO 14001, ISO 45001, HACCP, GMP, GHP, documentation, internal audits, and registration support.</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm hover:underline mt-auto">
                Get Certified
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Division 3 */}
            <div className="glass-panel rounded-[2rem] p-8 glow-hover flex flex-col justify-between" ref={(el) => { if (el) revealRefs.current.push(el); }}>
              <div>
                <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.664-1.118A9.956 9.956 0 0110 10c-.997 0-1.967-.246-2.815-.701a1 1 0 10-1.042 1.705A11.957 11.957 0 0010 12c1.195 0 2.342-.295 3.375-.824z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Food Safety Systems</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">Development of HACCP manuals, operational SOPs, SSOPs, food safety audits, custom risk assessments, and targeted corporate training programs.</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm hover:underline mt-auto">
                Analyze System
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Division 4 */}
            <div className="glass-panel rounded-[2rem] p-8 glow-hover flex flex-col justify-between" ref={(el) => { if (el) revealRefs.current.push(el); }}>
              <div>
                <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v1h10V4a2 2 0 00-2-2H7zm3 14a1 1 0 01-1-1v-1H7a1 1 0 110-2h2V9a1 1 0 112 0v2h2a1 1 0 110 2h-2v1a1 1 0 01-1 1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Laboratory Equipment Sales</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">Procurement of premium scientific instruments, glassware, chemicals, custom lab furniture, food & water testing equipment, and consumables.</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm hover:underline mt-auto">
                Browse Equipment
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Contact / Conversion Block */}
      <section id="contact" className="py-24 lg:py-36 bg-brand-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative">
            <div className="grid lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 p-8 md:p-16 text-white space-y-6 relative z-10">
                <svg className="w-12 h-12 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                <h2 className="text-3xl sm:text-5xl font-black leading-tight">NEED PROFESSIONAL <br className="hidden sm:inline"/>TECHNICAL SOLUTIONS?</h2>
                <p className="text-gray-300 leading-relaxed text-base max-w-xl">
                  Our specialists are ready to help your organization with laboratory equipment, food safety systems, ISO implementation, and pest management services.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="tel:+923422766482" className="bg-brand-accent hover:bg-[#b8e036] text-brand-dark px-8 py-4 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call +92 342 2766482
                  </a>
                  <a href="mailto:info@biosafenterprises.com" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2 backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email Us Direct
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 border-l border-white/10 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                <h3 className="text-white text-xl font-bold mb-6">Request Technical Callback</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Company / Full Name</label>
                    <input type="text" name="name" placeholder="Your Enterprise Ltd." className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Active Contact Number</label>
                    <input type="tel" name="phone" placeholder="+92 342 0000000" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Required System Area</label>
                    <select name="service" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-gray-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm">
                      <option value="">Select a service...</option>
                      <option value="pest">Pest Management & Fumigation</option>
                      <option value="iso">ISO Certification Consultation</option>
                      <option value="food-safety">Food Safety System Development</option>
                      <option value="lab">Laboratory Equipment Sales</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Your Message (Optional)</label>
                    <textarea name="message" rows={3} placeholder="Tell us about your requirements..." className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-accent hover:bg-[#b8e036] text-brand-dark px-6 py-3 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2">
                    Submit Request
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
