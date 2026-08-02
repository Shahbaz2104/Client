'use client';

import {
  ShieldCheck,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  FlaskConical,
  Target,
  BookOpen,
  Scale,
} from 'lucide-react';
import ServicePageShell, { type ServicePageData } from '@/components/pages/ServicePageShell';

const data: ServicePageData = {
  badge: 'Food Safety Compliance',
  heroTitle: 'Complete Food Safety',
  heroHighlight: 'Compliance Programs',
  heroSubtitle:
    'From HACCP to BRCGS and FSSC 22000, BIOSAF builds and maintains complete food safety management systems — legally compliant, audit-ready, and scientifically validated for food businesses across Pakistan.',
  heroStats: [
    { value: '100%', label: 'Audit-Ready Systems' },
    { value: 'ISO', label: 'Recognized Frameworks' },
    { value: '24/7', label: 'Technical Support' },
  ],
  overviewEyebrow: 'Food Safety Compliance',
  overviewTitle: 'A Complete Food Safety Management System',
  overviewParagraphs: [
    'Food businesses in Pakistan face increasing regulatory, export, and buyer-driven food safety expectations. BIOSAF Enterprises helps you meet them with structured compliance programs built on internationally recognized frameworks including HACCP, GMP, GHP, BRCGS, and FSSC 22000.',
    'We conduct a full gap analysis of your current operations, then design, document, and implement the management systems, monitoring procedures, and training your team needs — so every shift follows the same safe, traceable, and defensible process.',
  ],
  overviewPoints: [
    'HACCP Plan Development',
    'GMP & GHP Implementation',
    'BRCGS & FSSC 22000 Readiness',
    'Food Safety Risk Assessment',
    'Operational SOPs & SSOPs',
    'Staff Training & Certification',
  ],
  overviewImage:
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  overviewImageAlt: 'Food safety compliance and inspection in a commercial kitchen',
  benefitsTitle: 'Why Food Safety Compliance Matters',
  benefits: [
    { icon: Scale, title: 'Regulatory Compliance', desc: 'Meet the requirements of Punjab Food Authority, export markets, and retail audits with systems that stand up to inspection.' },
    { icon: ShieldCheck, title: 'Protect Your Brand', desc: 'Prevent recalls, complaints, and reputational damage with robust preventive controls and full traceability.' },
    { icon: Target, title: 'Open New Markets', desc: 'Unlock retail, hotel, airline, export, and multinational buyer contracts that demand certified food safety systems.' },
    { icon: ClipboardCheck, title: 'Audit-Ready Operations', desc: 'Be inspection-ready at any time with documented procedures, verified monitoring, and an effective corrective-action trail.' },
    { icon: GraduationCap, title: 'Capable Teams', desc: 'Your staff learn the why behind the rules, so compliance becomes daily behavior rather than a paper exercise.' },
    { icon: BookOpen, title: 'Complete Documentation', desc: 'Manuals, policies, logs, and records maintained in a single organized, updatable food safety management system.' },
  ],
  servicesTitle: 'Our Food Safety Compliance Services',
  services: [
    { icon: Scale, title: 'HACCP Implementation', desc: 'Hazard analysis, CCP identification, monitoring, verification, and record-keeping per Codex principles.', cta: 'Explore HACCP', href: '/haccp' },
    { icon: ShieldCheck, title: 'GMP & GHP Systems', desc: 'Good Manufacturing and Hygiene Practices covering premises, personnel, sanitation, and handling.', cta: 'Ask an Expert', href: '/food-safety-compliance#contact' },
    { icon: Target, title: 'BRCGS Certification', desc: 'Full readiness for the BRCGS Global Food Safety Standard — from gap analysis to internal audit.', cta: 'Explore BRCGS', href: '/brcgs' },
    { icon: FileCheck2, title: 'FSSC 22000 Systems', desc: 'PRP and HACCP development, documentation, and certification support under ISO 22000.', cta: 'Explore FSSC 22000', href: '/fssc-22000' },
    { icon: FlaskConical, title: 'Food Testing Support', desc: 'Microbiological, chemical, and nutritional testing coordination with accredited laboratories.', cta: 'Request Testing', href: '/food-safety-compliance#contact' },
    { icon: GraduationCap, title: 'Compliance Training', desc: 'Practical HACCP, allergen, hygiene, and internal-audit training for operational teams.', cta: 'Book Training', href: '/food-safety-compliance#contact' },
  ],
  processTitle: 'Our Compliance Implementation Process',
  process: [
    { title: 'Gap Analysis', desc: 'On-site assessment of your current practices against the target standard or framework.' },
    { title: 'System Design', desc: 'Tailored HACCP plans, PRPs, SOPs, and monitoring programs built around your real operations.' },
    { title: 'Documentation & Training', desc: 'Complete documented system delivered with hands-on team training and awareness sessions.' },
    { title: 'Audit Support & Improvement', desc: 'Pre-certification internal audits, corrective actions, and continuous improvement follow-up.' },
  ],
  industries: [
    'Food Manufacturing', 'Dairy', 'Meat Processing', 'Poultry', 'Seafood', 'Beverage', 'Restaurants', 'Hotels', 'Catering', 'Bakery', 'Snack Foods', 'Packaging', 'Cold Storage', 'Exporters', 'Retail',
  ],
  faqs: [
    { q: 'Which food safety standard should my business implement?', a: 'It depends on your customers and target markets. Retailers and exporters commonly require BRCGS or FSSC 22000, while many local food businesses begin with HACCP, GMP, and GHP. We assess your operation and advise the most commercially valuable path.' },
    { q: 'How long does certification take?', a: 'Timelines vary with facility size and current maturity. Most food businesses reach audit-ready status within 3–6 months of engagement, working through gap analysis, implementation, documentation, and a pre-certification internal audit.' },
    { q: 'Do you provide the actual certification certificate?', a: 'BIOSAF prepares your system and supports certification, while the final certificate is issued by an accredited certification body (CB). We manage the relationship, documentation, and internal audit on your behalf.' },
    { q: 'Can you train our internal food safety team?', a: 'Yes. We deliver practical HACCP, hygiene, allergen management, and internal audit training tailored to your products and processes, in English and Urdu.' },
  ],
  ctaTitle: 'BUILD AN AUDIT-READY',
  ctaHighlight: 'FOOD SAFETY SYSTEM?',
  ctaText:
    'Our food safety specialists will assess your facility, recommend the right framework, and build the complete system your business needs to comply, export, and grow.',
  related: [
    { label: 'HACCP Implementation', href: '/haccp' },
    { label: 'BRCGS Certification', href: '/brcgs' },
    { label: 'FSSC 22000', href: '/fssc-22000' },
    { label: 'ISO 22000', href: '/iso-standards#iso-22000' },
    { label: 'ISO Consultancy', href: '/iso-certification' },
    { label: 'Industries We Serve', href: '/industries' },
  ],
  formOptions: [
    { value: 'haccp', label: 'HACCP Implementation' },
    { value: 'brcgs', label: 'BRCGS Certification' },
    { value: 'fssc-22000', label: 'FSSC 22000 Certification' },
    { value: 'gmp-ghp', label: 'GMP & GHP Systems' },
    { value: 'food-testing', label: 'Food Testing Support' },
    { value: 'food-safety-training', label: 'Food Safety Training' },
  ],
};

export default function FoodSafetyComplianceContent() {
  return <ServicePageShell data={data} />;
}
