'use client';

import {
  Lightbulb,
  FlaskConical,
  Timer,
  Package,
  Microscope,
  Users,
  Rocket,
  Beaker,
} from 'lucide-react';
import ServicePageShell, { type ServicePageData } from '@/components/pages/ServicePageShell';

const data: ServicePageData = {
  badge: 'Product Innovation',
  heroTitle: 'Product Innovation &',
  heroHighlight: 'Development',
  heroSubtitle:
    'From concept to commercial shelf — BIOSAF supports product development, reformulation, shelf-life improvement, packaging guidance, food testing, and market launch.',
  heroStats: [
    { value: 'IDEAS', label: 'To Market' },
    { value: 'LAB', label: 'Supported Testing' },
    { value: '24/7', label: 'Technical Support' },
  ],
  overviewEyebrow: 'Product Innovation',
  overviewTitle: 'Turn Ideas Into Market-Ready Products',
  overviewParagraphs: [
    'Developing a successful food product takes more than a recipe. BIOSAF Enterprises brings scientific rigor to every stage — concept validation, formulation, reformulation, shelf-life testing, packaging, and consumer research — so your product launches compliant, consistent, and commercially strong.',
    'We work alongside your internal team to accelerate innovation while keeping regulatory, food safety, and quality requirements firmly in view.',
  ],
  overviewPoints: [
    'Product Development & Prototyping',
    'Reformulation for Cost, Nutrition & Clean Label',
    'Shelf-Life Improvement Studies',
    'Packaging & Labeling Guidance',
    'Food Testing Coordination',
    'Consumer Research & Commercialization',
  ],
  overviewImage:
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
  overviewImageAlt: 'Product innovation and laboratory development of new food products',
  benefitsTitle: 'Why Innovate With BIOSAF',
  benefits: [
    { icon: Lightbulb, title: 'Concept to Shelf', desc: 'One partner managing the full journey from idea to commercial launch.' },
    { icon: FlaskConical, title: 'Scientific Rigor', desc: 'Evidence-based formulation, testing, and validation at every decision point.' },
    { icon: Timer, title: 'Faster Development', desc: 'Structured milestones and expert coordination compress time to market.' },
    { icon: Package, title: 'Compliant Products', desc: 'Packaging, labeling, and regulatory alignment built in from the start.' },
    { icon: Users, title: 'Consumer Insight', desc: 'Consumer research that de-risks launch and guides product-market fit.' },
    { icon: Rocket, title: 'Commercial Success', desc: 'Cost-efficient formulations and solid quality systems that scale.' },
  ],
  servicesTitle: 'Product Innovation Services',
  services: [
    { icon: FlaskConical, title: 'Product Development', desc: 'Prototype development, formulation, and optimization for new products or line extensions.', cta: 'Start a Project', href: '/product-innovation#contact' },
    { icon: Beaker, title: 'Reformulation', desc: 'Improve cost, nutrition, clean label, allergens, or sensory performance of existing products.', cta: 'Improve My Product', href: '/product-innovation#contact' },
    { icon: Timer, title: 'Shelf-Life Studies', desc: 'Accelerated and real-time shelf-life testing to set accurate, defensible expiry claims.', cta: 'Test Shelf Life', href: '/product-innovation#contact' },
    { icon: Package, title: 'Packaging Guidance', desc: 'Material selection, barrier, and labeling guidance that preserves quality and meets regulations.', cta: 'Review Packaging', href: '/product-innovation#contact' },
    { icon: Microscope, title: 'Food Testing', desc: 'Microbiological, chemical, nutritional, and sensory testing with accredited laboratories.', cta: 'Request Testing', href: '/product-innovation#contact' },
    { icon: Users, title: 'Consumer Research', desc: 'Sensory panels and consumer testing to validate acceptance before you invest in scale-up.', cta: 'Book Research', href: '/product-innovation#contact' },
  ],
  processTitle: 'Our Innovation Process',
  process: [
    { title: 'Discovery', desc: 'Define the opportunity, target consumer, and success criteria for the product.' },
    { title: 'Development', desc: 'Formulate, prototype, and test in the lab with iteration on cost and quality.' },
    { title: 'Validation', desc: 'Shelf-life, sensory, nutritional, and regulatory validation with documented evidence.' },
    { title: 'Commercialization', desc: 'Scale-up guidance, packaging, and launch support to take the product to market.' },
  ],
  industries: [
    'Food Manufacturing', 'Beverage', 'Dairy', 'Bakery', 'Confectionery', 'Snack Foods', 'Meat & Poultry', 'Seafood', 'Sauces & Dressings', 'Nutraceuticals', 'Pet Food', 'Retail Own-Brand', 'Startups', 'Exporters',
  ],
  faqs: [
    { q: 'Can you help with both new products and existing product improvements?', a: 'Yes. We handle full new-product development as well as reformulation and shelf-life improvement of products already on your range.' },
    { q: 'Do you have your own laboratory?', a: 'We coordinate product development and testing through our network of accredited laboratories and technical facilities rather than maintaining in-house labs.' },
    { q: 'How do you handle confidentiality?', a: 'Your formulations, ideas, and market plans are treated as strictly confidential. We work under NDA before any technical detail is shared.' },
    { q: 'What does commercialization support include?', a: 'Scale-up guidance, supplier sourcing, packaging and labeling review, regulatory compliance checks, and quality system setup for the new line.' },
  ],
  ctaTitle: 'READY TO LAUNCH YOUR NEXT',
  ctaHighlight: 'PRODUCT?',
  ctaText:
    'Our product innovation team will help you validate, develop, test, and commercialize your next winning product — from first idea to shelf.',
  related: [
    { label: 'Food Testing', href: '/laboratory-equipment' },
    { label: 'Food Safety Compliance', href: '/food-safety-compliance' },
    { label: 'Laboratory Equipment', href: '/laboratory-equipment' },
    { label: 'Industries We Serve', href: '/industries' },
  ],
  formOptions: [
    { value: 'product-development', label: 'Product Development' },
    { value: 'reformulation', label: 'Reformulation' },
    { value: 'shelf-life', label: 'Shelf-Life Studies' },
    { value: 'packaging', label: 'Packaging Guidance' },
    { value: 'food-testing', label: 'Food Testing' },
    { value: 'consumer-research', label: 'Consumer Research' },
  ],
};

export default function ProductInnovationContent() {
  return <ServicePageShell data={data} />;
}
