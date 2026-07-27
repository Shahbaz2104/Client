'use client';

import { motion, type Variants } from 'framer-motion';
import { fadeUp, DURATION, EASE } from '@/lib/motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  const delayedVariants: Variants = delay
    ? {
        hidden: variants.hidden,
        visible: {
          ...(variants.visible as object),
          transition: { ...((variants.visible as any)?.transition || {}), delay },
        },
      }
    : variants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={delayedVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerGroup({
  children,
  className,
  staggerDelay = 0.08,
  once = true,
}: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: 0.1 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
