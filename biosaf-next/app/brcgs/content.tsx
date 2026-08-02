'use client';

import {
  Award,
  ClipboardCheck,
  FileCheck2,
  Search,
  GraduationCap,
  ShieldCheck,
  Store,
  Factory,
} from 'lucide-react';
import ServicePageShell, { type ServicePageData } from '@/components/pages/ServicePageShell';

const data: ServicePageData = {
  badge: 'BRCGS',
  heroTitle: 'BRCGS Global Food Safety',
  heroHighlight: 'Standard',
  heroSubtitle:
    'A rigorous, globally recognized food safety standard for manufacturers, packaging, and storage operations. BIOSAF prepares your facility to achieve and maintain BRCGS certification.',
  heroStats: [
    { value: 'GFSI', label: 'Recognized Standard' },
    { value: '100%', label: 'Audit Readiness' },
    { value: '24/7', label: 'Technical Support' },
  ],
  overviewEyebrow: 'BRCGS Certification',
  overviewTitle: 'Global Standard for Food Safety Excellence',
  overviewParagraphs: [
    'BRCGS is one of the world\'s leading Global Food Safety Initiative (GFSI) recognized standards, accepted by retailers and manufacturers across the UK, Europe, and beyond. Certification opens doors to major retail and international supply contracts.',
    'BIOSAF Enterprises takes you from gap analysis to certification readiness — building the food safety culture, prerequisite programs, HACCP system, and documentation BRCGS auditors expect.',
  ],
  overviewPoints: [
    'Gap Analysis Against BRCGS Clauses',
    'Senior Management Commitment Program',
    'Food Safety Plan & HACCP Development',
    'Site Standards & Facility Upgrade Guidance',
    'Internal Audit & Pre-Certification Audit',
    'Corrective Action Support',
  ],
  overviewImage:
    'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80',
  overviewImageAlt: 'Certified food production facility preparing for BRCGS audit',
  benefitsTitle: 'Why BRCGS Certification Matters',
  benefits: [
    { icon: Store, title: 'Retailer Acceptance', desc: 'Recognized by major UK, European, and international retailers as a condition of supply.' },
    { icon: Award, title: 'Competitive Advantage', desc: 'Certification differentiates your brand as a safe, reliable, professionally managed supplier.' },
    { icon: ShieldCheck, title: 'Fewer Failures', desc: 'Embed food safety culture and preventive controls that reduce rejects, complaints, and recalls.' },
    { icon: Factory, title: 'Operational Discipline', desc: 'Structured site standards, pest control, hygiene, and traceability improve overall efficiency.' },
    { icon: FileCheck2, title: 'Comprehensive Audits', desc: 'Full support through the audit cycle — from planning and preparation to certification and surveillance.' },
    { icon: GraduationCap, title: 'Leadership Buy-In', desc: 'Senior management commitment program ensures compliance is driven from the top down.' },
  ],
  servicesTitle: 'BRCGS Services We Deliver',
  services: [
    { icon: Search, title: 'Gap Analysis', desc: 'Detailed clause-by-clause assessment of your facility against the latest BRCGS issue.', cta: 'Book Assessment', href: '/brcgs#contact' },
    { icon: FileCheck2, title: 'System Development', desc: 'PRPs, food safety plan, documentation, and monitoring systems built to BRCGS requirements.', cta: 'Build My System', href: '/brcgs#contact' },
    { icon: ClipboardCheck, title: 'Internal Audits', desc: 'Realistic pre-audit evaluations that mirror the certification body\'s audit approach.', cta: 'Book Internal Audit', href: '/brcgs#contact' },
    { icon: ShieldCheck, title: 'Corrective Action Support', desc: 'Root-cause analysis and corrective action plans to close non-conformities quickly.', cta: 'Get Support', href: '/brcgs#contact' },
    { icon: GraduationCap, title: 'Audit Team Training', desc: 'Internal auditor and food safety team training aligned to BRCGS requirements.', cta: 'Book Training', href: '/brcgs#contact' },
    { icon: Award, title: 'Certification Support', desc: 'Coordination with accredited certification bodies through the formal audit and award.', cta: 'Start Certification', href: '/iso-standards#brcgs' },
  ],
  processTitle: 'Our BRCGS Readiness Process',
  process: [
    { title: 'Assessment', desc: 'Clause-by-clause gap analysis with a prioritized action roadmap.' },
    { title: 'Implementation', desc: 'Facility, system, and documentation upgrades delivered with your team.' },
    { title: 'Training & Audit', desc: 'Staff training followed by a full internal audit in the style of the real certification audit.' },
    { title: 'Certification & Beyond', desc: 'Certification body coordination, corrective actions, and surveillance support.' },
  ],
  industries: [
    'Food Manufacturing', 'Dairy', 'Meat Processing', 'Poultry', 'Seafood', 'Bakery', 'Snack Foods', 'Beverage', 'Packaging', 'Warehousing', 'Cold Storage', 'Distribution', 'Exporters', 'Retail Own-Brand',
  ],
  faqs: [
    { q: 'Which BRCGS standard applies to my business?', a: 'Most food producers work with the BRCGS Global Food Safety Standard. Separate standards cover packaging materials, storage & distribution, agents & brokers, and retail. We confirm the right scheme for your operation.' },
    { q: 'Is BRCGS recognized in Pakistan and internationally?', a: 'Yes. BRCGS is a GFSI benchmarked standard accepted globally, and it is a common requirement for Pakistani exporters supplying UK, European, and other international retailers.' },
    { q: 'How long does BRCGS certification take?', a: 'For an average food manufacturer, readiness typically takes 4–8 months depending on current practices, facility condition, and team availability. We build a realistic project plan after the initial gap analysis.' },
    { q: 'Do you handle the formal certification audit?', a: 'We prepare and coach you, and coordinate with the certification body on your behalf. The certificate itself is issued by the accredited certification body.' },
  ],
  ctaTitle: 'GET YOUR FACILITY',
  ctaHighlight: 'BRCGS READY?',
  ctaText:
    'Book a BRCGS gap analysis and receive a prioritized roadmap to certification — with our team supporting you at every stage of the audit cycle.',
  related: [
    { label: 'FSSC 22000', href: '/fssc-22000' },
    { label: 'HACCP Implementation', href: '/haccp' },
    { label: 'Food Safety Compliance', href: '/food-safety-compliance' },
    { label: 'ISO 22000', href: '/iso-standards#iso-22000' },
    { label: 'Pest Management for Food Industry', href: '/pest-management' },
  ],
  formOptions: [
    { value: 'brcgs-gap', label: 'BRCGS Gap Analysis' },
    { value: 'brcgs-system', label: 'BRCGS System Development' },
    { value: 'brcgs-audit', label: 'BRCGS Internal Audit' },
    { value: 'brcgs-training', label: 'BRCGS Team Training' },
    { value: 'brcgs-certification', label: 'BRCGS Certification Support' },
  ],
};

export default function BrcgsContent() {
  return <ServicePageShell data={data} />;
}
