'use client';

import {
  BadgeCheck,
  Search,
  FileCheck2,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  Link2,
  Factory,
} from 'lucide-react';
import ServicePageShell, { type ServicePageData } from '@/components/pages/ServicePageShell';

const data: ServicePageData = {
  badge: 'Halal Certification',
  heroTitle: 'Halal Certification',
  heroHighlight: 'Support',
  heroSubtitle:
    'A complete halal readiness program — gap analysis, documentation, supplier verification, traceability, and internal audits — that leads to trusted, credible halal certification.',
  heroStats: [
    { value: '100%', label: 'Documented Systems' },
    { value: 'GAP', label: 'Analysis First' },
    { value: '24/7', label: 'Technical Support' },
  ],
  overviewEyebrow: 'Halal Certification',
  overviewTitle: 'Credible Halal Compliance for Growing Markets',
  overviewParagraphs: [
    'The global halal market spans food, beverage, cosmetics, and FMCG. BIOSAF Enterprises helps you build a credible, auditable halal system that satisfies recognized certification bodies and the expectations of Muslim consumers worldwide.',
    'From raw material sourcing and supplier verification to traceability and internal auditing, we prepare your business for successful halal certification without disrupting your operations.',
  ],
  overviewPoints: [
    'Halal Gap Analysis',
    'Halal Documentation & Policy',
    'Supplier & Ingredient Verification',
    'Full Raw Material Traceability',
    'Internal Halal Audits',
    'Certification Body Liaison',
  ],
  overviewImage:
    'https://images.unsplash.com/photo-1600766436859-78b44cc139d2?auto=format&fit=crop&w=1200&q=80',
  overviewImageAlt: 'Halal food products with quality and traceability systems',
  benefitsTitle: 'Benefits of Halal Certification',
  benefits: [
    { icon: BadgeCheck, title: 'Market Access', desc: 'Enter and expand within the fast-growing global halal food and FMCG markets.' },
    { icon: ShieldCheck, title: 'Consumer Trust', desc: 'Signal genuine halal integrity to Muslim consumers and retail partners.' },
    { icon: Link2, title: 'Supply Chain Confidence', desc: 'Verified suppliers and full traceability strengthen your entire sourcing chain.' },
    { icon: ClipboardCheck, title: 'Audit Readiness', desc: 'Structured documentation and internal audits keep you ready for certification and surveillance.' },
    { icon: Factory, title: 'Export Eligibility', desc: 'Meet halal requirements of Gulf, South-East Asian, and other international buyers.' },
    { icon: GraduationCap, title: 'Team Awareness', desc: 'Training ensures every team member understands halal requirements and their role.' },
  ],
  servicesTitle: 'Halal Certification Services',
  services: [
    { icon: Search, title: 'Gap Analysis', desc: 'Assessment of your facility, products, and supply chain against halal requirements.', cta: 'Book Assessment', href: '/halal-certification#contact' },
    { icon: FileCheck2, title: 'Documentation', desc: 'Halal policy, procedures, ingredient specifications, and records built for audit.', cta: 'Build Documentation', href: '/halal-certification#contact' },
    { icon: ShieldCheck, title: 'Supplier Verification', desc: 'Verification of raw materials, additives, and suppliers for halal status.', cta: 'Verify Suppliers', href: '/halal-certification#contact' },
    { icon: Link2, title: 'Traceability Systems', desc: 'End-to-end traceability from raw material intake to finished product dispatch.', cta: 'Build Traceability', href: '/halal-certification#contact' },
    { icon: ClipboardCheck, title: 'Internal Audits', desc: 'Pre-certification internal audits that mirror the certification body\'s approach.', cta: 'Book Internal Audit', href: '/halal-certification#contact' },
    { icon: BadgeCheck, title: 'Certification Support', desc: 'Coordination with recognized halal certification bodies from application to award.', cta: 'Start Certification', href: '/iso-standards#halal' },
  ],
  processTitle: 'Our Halal Readiness Process',
  process: [
    { title: 'Gap Analysis', desc: 'Understand current compliance and build a prioritized halal readiness plan.' },
    { title: 'System & Suppliers', desc: 'Document the halal system and verify every supplier and ingredient.' },
    { title: 'Traceability & Audit', desc: 'Implement traceability and run an internal audit against certification requirements.' },
    { title: 'Certification', desc: 'Liaise with the certification body and resolve findings to secure certification.' },
  ],
  industries: [
    'Food Manufacturing', 'Beverage', 'Meat & Poultry', 'Dairy', 'Confectionery', 'Bakery', 'Snack Foods', 'Catering', 'Restaurants', 'Hotels', 'Cosmetics', 'Personal Care', 'Pharmaceutical', 'Exporters', 'Retail',
  ],
  faqs: [
    { q: 'Who issues halal certification?', a: 'Certification is issued by recognized halal certification bodies. BIOSAF prepares your system and coordinates the process with the certification body on your behalf.' },
    { q: 'How long does halal certification take?', a: 'Typical timelines range from 6 weeks to 4 months depending on product range, facility complexity, and current documentation readiness.' },
    { q: 'What do we need to demonstrate during the halal audit?', a: 'Auditors verify ingredient and supplier halal status, cross-contamination controls, staff training, cleaning protocols, packaging, and traceability records.' },
    { q: 'Can halal certification run alongside food safety certification?', a: 'Yes. We integrate halal requirements with your HACCP, ISO 22000, BRCGS, or FSSC 22000 system so audits and records work together.' },
  ],
  ctaTitle: 'PREPARE YOUR BUSINESS FOR',
  ctaHighlight: 'HALAL CERTIFICATION?',
  ctaText:
    'Our halal specialists will assess your facility and supply chain, build the complete documented system, and guide you through certification with a recognized body.',
  related: [
    { label: 'Food Safety Compliance', href: '/food-safety-compliance' },
    { label: 'HACCP Implementation', href: '/haccp' },
    { label: 'BRCGS Certification', href: '/brcgs' },
    { label: 'Product Innovation', href: '/product-innovation' },
  ],
  formOptions: [
    { value: 'halal-gap', label: 'Halal Gap Analysis' },
    { value: 'halal-docs', label: 'Halal Documentation' },
    { value: 'halal-supplier', label: 'Supplier Verification' },
    { value: 'halal-traceability', label: 'Halal Traceability System' },
    { value: 'halal-audit', label: 'Halal Internal Audit' },
    { value: 'halal-certification', label: 'Halal Certification Support' },
  ],
};

export default function HalalCertificationContent() {
  return <ServicePageShell data={data} />;
}
