'use client';

import {
  ShieldCheck,
  AlertTriangle,
  Thermometer,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  RefreshCcw,
  Factory,
} from 'lucide-react';
import ServicePageShell, { type ServicePageData } from '@/components/pages/ServicePageShell';

const data: ServicePageData = {
  badge: 'HACCP',
  heroTitle: 'Hazard Analysis & Critical Control Point',
  heroHighlight: 'Implementation',
  heroSubtitle:
    'A structured, science-based HACCP system that identifies food safety hazards, controls them at critical points, and keeps your business audit-ready and export-ready.',
  heroStats: [
    { value: '7', label: 'Codex Principles' },
    { value: '100%', label: 'Controlled Processes' },
    { value: '24/7', label: 'Technical Support' },
  ],
  overviewEyebrow: 'HACCP Implementation',
  overviewTitle: 'Control Hazards at Every Critical Point',
  overviewParagraphs: [
    'HACCP is the internationally recognized system for managing food safety risk. BIOSAF Enterprises designs and implements complete HACCP plans — from hazard analysis and CCP determination to monitoring, verification, and record-keeping — fully aligned with Codex Alimentarius principles.',
    'Whether you are a manufacturer, processor, restaurant, or exporter, we translate the seven HACCP principles into practical procedures your team can run every day, giving you a defensible, documented safety system.',
  ],
  overviewPoints: [
    'Hazard Analysis (Biological, Chemical, Physical)',
    'Critical Control Point (CCP) Determination',
    'Critical Limits & Monitoring Procedures',
    'Corrective Actions & Verification',
    'Documentation & Record Keeping',
    'HACCP Team Training',
  ],
  overviewImage:
    'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1200&q=80',
  overviewImageAlt: 'Food manufacturing facility with HACCP-controlled processes',
  benefitsTitle: 'Benefits of a Certified HACCP System',
  benefits: [
    { icon: ShieldCheck, title: 'Prevent Hazards', desc: 'Identify and control biological, chemical, and physical risks before they reach your customers.' },
    { icon: ClipboardCheck, title: 'Compliance & Audits', desc: 'Satisfy food authority, buyer, and third-party auditors with a structured, verifiable system.' },
    { icon: Factory, title: 'Market Access', desc: 'Qualify for retail, hotel, airline, export, and multinational supply chains that mandate HACCP.' },
    { icon: RefreshCcw, title: 'Fewer Incidents', desc: 'Reduce complaints, rejects, and recalls through systematic preventive control.' },
    { icon: GraduationCap, title: 'Team Ownership', desc: 'Equip staff with the skills to monitor CCPs confidently and act on deviations.' },
    { icon: FileCheck2, title: 'Audit Trails', desc: 'Complete, organized records that prove your safety system works — any time, any audit.' },
  ],
  servicesTitle: 'HACCP Services We Deliver',
  services: [
    { icon: AlertTriangle, title: 'Hazard Analysis', desc: 'Step-by-step identification of biological, chemical, and physical hazards across your process flow.', cta: 'Get Assessed', href: '/haccp#contact' },
    { icon: Thermometer, title: 'CCP Monitoring', desc: 'Critical limits, monitoring methods, and frequencies engineered around your actual equipment and process.', cta: 'Build My Plan', href: '/haccp#contact' },
    { icon: FileCheck2, title: 'HACCP Documentation', desc: 'HACCP plan, flow diagrams, supporting programs, log sheets, and verification records — all in one system.', cta: 'See Documentation', href: '/haccp#contact' },
    { icon: ClipboardCheck, title: 'Verification & Validation', desc: 'Scheduled verification activities that confirm your controls remain effective over time.', cta: 'Book Verification', href: '/haccp#contact' },
    { icon: GraduationCap, title: 'HACCP Team Training', desc: 'Practical training for HACCP team members, CCP monitors, and management, in English and Urdu.', cta: 'Book Training', href: '/haccp#contact' },
    { icon: ShieldCheck, title: 'Certification Support', desc: 'Pre-certification internal audits and corrective action guidance before your formal certification audit.', cta: 'Start Certification', href: '/iso-standards#haccp' },
  ],
  processTitle: 'How We Build Your HACCP Plan',
  process: [
    { title: 'Process Mapping', desc: 'Walk your facility and document the complete flow diagram of your product from intake to dispatch.' },
    { title: 'Hazard Analysis', desc: 'Identify and assess significant hazards at each step of the process.' },
    { title: 'CCP & Limit Design', desc: 'Determine Critical Control Points, set critical limits, and design monitoring systems.' },
    { title: 'Docs, Training & Audit', desc: 'Deliver the documented system, train your team, and run a pre-certification internal audit.' },
  ],
  industries: [
    'Food Manufacturing', 'Dairy', 'Meat Processing', 'Poultry', 'Seafood', 'Beverage', 'Bakery', 'Snack Foods', 'Restaurants', 'Catering', 'Hotels', 'Cold Storage', 'Warehousing', 'Exporters', 'Retail',
  ],
  faqs: [
    { q: 'What are the seven HACCP principles?', a: 'The seven principles are: hazard analysis, CCP determination, establishing critical limits, monitoring procedures, corrective actions, verification procedures, and documentation/record-keeping. Our plans address all seven in a practical, auditable way.' },
    { q: 'Is HACCP mandatory in Pakistan?', a: 'HACCP-based food safety management is required or strongly expected for food manufacturing, export, retail, and hospitality businesses under food authority regulations and buyer requirements. We help you implement a proportionate, compliant system.' },
    { q: 'Do we need a full team for HACCP?', a: 'HACCP works best with a cross-functional team. We train your existing staff to form a working HACCP team — you do not need to hire specialists.' },
    { q: 'Can HACCP be combined with ISO 22000 or BRCGS?', a: 'Yes. HACCP is the core of ISO 22000, BRCGS, and FSSC 22000. We build your HACCP plan so it satisfies these frameworks too, avoiding duplicated effort.' },
  ],
  ctaTitle: 'READY FOR A COMPLETE',
  ctaHighlight: 'HACCP PLAN?',
  ctaText:
    'Our HACCP specialists will map your process, identify every hazard, and hand you a documented, team-trained system that stands up to any audit.',
  related: [
    { label: 'ISO 22000', href: '/iso-standards#iso-22000' },
    { label: 'FSSC 22000', href: '/fssc-22000' },
    { label: 'BRCGS Certification', href: '/brcgs' },
    { label: 'Food Safety Compliance', href: '/food-safety-compliance' },
    { label: 'Halal Certification', href: '/halal-certification' },
  ],
  formOptions: [
    { value: 'haccp-plan', label: 'HACCP Plan Development' },
    { value: 'haccp-training', label: 'HACCP Team Training' },
    { value: 'haccp-audit', label: 'HACCP Internal Audit' },
    { value: 'haccp-certification', label: 'HACCP Certification Support' },
  ],
};

export default function HaccpContent() {
  return <ServicePageShell data={data} />;
}
