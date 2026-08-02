'use client';

import {
  ShieldCheck,
  ClipboardCheck,
  FileCheck2,
  Search,
  GraduationCap,
  Layers,
  Factory,
} from 'lucide-react';
import ServicePageShell, { type ServicePageData } from '@/components/pages/ServicePageShell';

const data: ServicePageData = {
  badge: 'FSSC 22000',
  heroTitle: 'FSSC 22000 Food Safety',
  heroHighlight: 'System Certification',
  heroSubtitle:
    'A complete, GFSI-recognized food safety certification scheme built on ISO 22000 plus prerequisite programs. BIOSAF implements and certifies your system end to end.',
  heroStats: [
    { value: 'GFSI', label: 'Recognized Scheme' },
    { value: 'ISO', label: '22000 Based' },
    { value: '24/7', label: 'Technical Support' },
  ],
  overviewEyebrow: 'FSSC 22000 Certification',
  overviewTitle: 'A Globally Accepted Food Safety Scheme',
  overviewParagraphs: [
    'FSSC 22000 is a complete certification scheme for food safety management systems, combining ISO 22000 with sector-specific Prerequisite Programmes (PRPs). It is benchmarked by GFSI and widely accepted by retailers and manufacturers worldwide.',
    'BIOSAF Enterprises manages the full journey — gap analysis, PRP and HACCP development, documentation, internal audits, and coordination with an accredited certification body.',
  ],
  overviewPoints: [
    'ISO 22000 Food Safety Management System',
    'Sector-Specific Prerequisite Programmes (PRPs)',
    'HACCP Plan Integration',
    'Documentation & Record Systems',
    'Internal Audit Program',
    'Certification Body Coordination',
  ],
  overviewImage:
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1200&q=80',
  overviewImageAlt: 'Food safety system documentation and laboratory testing',
  benefitsTitle: 'Why Choose FSSC 22000',
  benefits: [
    { icon: ShieldCheck, title: 'Global Acceptance', desc: 'GFSI benchmarked scheme accepted by retailers, manufacturers, and importers worldwide.' },
    { icon: Layers, title: 'Complete Framework', desc: 'Combines management systems, PRPs, and HACCP in a single auditable certification.' },
    { icon: Factory, title: 'Supply Chain Trust', desc: 'Demonstrate rigorous, internationally validated food safety control to buyers and regulators.' },
    { icon: ClipboardCheck, title: 'Continuous Improvement', desc: 'Built-in management review and improvement cycles keep your system current and effective.' },
    { icon: FileCheck2, title: 'Streamlined Audits', desc: 'One integrated system that satisfies food safety, quality, and audit requirements together.' },
    { icon: GraduationCap, title: 'Team Competence', desc: 'Your team learns to operate and improve the system confidently and independently.' },
  ],
  servicesTitle: 'FSSC 22000 Services We Deliver',
  services: [
    { icon: Search, title: 'Gap Analysis', desc: 'Assessment of your current system against FSSC 22000 version requirements.', cta: 'Book Assessment', href: '/fssc-22000#contact' },
    { icon: Layers, title: 'PRP Development', desc: 'Sector-specific prerequisite programmes covering facility, utilities, personnel, and more.', cta: 'Build PRPs', href: '/fssc-22000#contact' },
    { icon: ShieldCheck, title: 'FSMS Implementation', desc: 'ISO 22000 management system, HACCP plan, policy, objectives, and operational controls.', cta: 'Build My System', href: '/fssc-22000#contact' },
    { icon: FileCheck2, title: 'Documentation', desc: 'Complete manual, procedures, records, and registers organized for audit review.', cta: 'See Documentation', href: '/fssc-22000#contact' },
    { icon: ClipboardCheck, title: 'Internal Audits', desc: 'Internal audits and management review facilitation ahead of the certification audit.', cta: 'Book Internal Audit', href: '/fssc-22000#contact' },
    { icon: GraduationCap, title: 'Training & Certification', desc: 'Team training, audit coaching, and coordination with an accredited certification body.', cta: 'Start Certification', href: '/iso-standards#fssc-22000' },
  ],
  processTitle: 'Our FSSC 22000 Implementation Process',
  process: [
    { title: 'Gap Analysis', desc: 'Baseline assessment against FSSC 22000 requirements with a prioritized plan.' },
    { title: 'System Build', desc: 'PRPs, HACCP, FSMS documentation, and operational controls implemented with your team.' },
    { title: 'Training & Audit', desc: 'Staff training, internal audits, and management review to confirm readiness.' },
    { title: 'Certification', desc: 'Coordination with the certification body and support through corrective actions.' },
  ],
  industries: [
    'Food Manufacturing', 'Dairy', 'Meat Processing', 'Poultry', 'Seafood', 'Beverage', 'Bakery', 'Snack Foods', 'Food Packaging', 'Warehousing', 'Cold Storage', 'Distribution', 'Exporters', 'Pet Food',
  ],
  faqs: [
    { q: 'What is the difference between FSSC 22000 and ISO 22000?', a: 'ISO 22000 is the management system standard; FSSC 22000 adds sector-specific Prerequisite Programmes and is benchmarked by GFSI, making it widely accepted by retailers and international buyers.' },
    { q: 'Is FSSC 22000 recognized in Pakistan?', a: 'Yes — it is a globally accepted GFSI scheme and a common requirement for Pakistani food exporters supplying international markets.' },
    { q: 'Can we migrate from ISO 22000 to FSSC 22000?', a: 'Yes. If you already hold ISO 22000 certification, we extend it with the required PRPs and FSSC 22000 scheme requirements for a smoother, shorter path.' },
    { q: 'How long does implementation take?', a: 'Most facilities reach certification within 4–6 months, depending on size and the maturity of existing food safety systems.' },
  ],
  ctaTitle: 'CERTIFY YOUR SYSTEM WITH',
  ctaHighlight: 'FSSC 22000?',
  ctaText:
    'Our consultants will implement the complete FSSC 22000 system and walk you through certification with an accredited certification body.',
  related: [
    { label: 'ISO 22000', href: '/iso-standards#iso-22000' },
    { label: 'HACCP Implementation', href: '/haccp' },
    { label: 'BRCGS Certification', href: '/brcgs' },
    { label: 'Food Safety Compliance', href: '/food-safety-compliance' },
  ],
  formOptions: [
    { value: 'fssc-gap', label: 'FSSC 22000 Gap Analysis' },
    { value: 'fssc-prp', label: 'PRP Development' },
    { value: 'fssc-system', label: 'FSMS Implementation' },
    { value: 'fssc-audit', label: 'FSSC 22000 Internal Audit' },
    { value: 'fssc-certification', label: 'FSSC 22000 Certification Support' },
  ],
};

export default function Fssc22000Content() {
  return <ServicePageShell data={data} />;
}
