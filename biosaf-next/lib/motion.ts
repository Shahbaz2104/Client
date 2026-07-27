import { type Variants } from 'framer-motion';

/* ── Duration & Easing Constants ── */
export const DURATION = {
  fast: 0.15,
  normal: 0.25,
  slow: 0.35,
  reveal: 0.5,
} as const;

export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT = [0, 0, 0.2, 1] as const;

/* ── Scroll Reveal Variants ── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.reveal, ease: EASE } },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.reveal, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.reveal, ease: EASE } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION.reveal, ease: EASE } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION.reveal, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: DURATION.reveal, ease: EASE } },
};

/* ── Stagger Container ── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/* ── Card Hover ── */
export const cardHover = {
  whileHover: { y: -4, scale: 1.01, transition: { duration: 0.25, ease: EASE_OUT } },
};

export const cardHoverElevated = {
  whileHover: { y: -6, scale: 1.02, transition: { duration: 0.25, ease: EASE_OUT } },
};

/* ── Button Tap ── */
export const buttonTap = {
  whileTap: { scale: 0.96 },
  whileHover: { scale: 1.03 },
};

export const buttonTapSubtle = {
  whileTap: { scale: 0.97 },
  whileHover: { scale: 1.02 },
};

/* ── Icon ── */
export const iconHover = {
  whileHover: { rotate: 5, scale: 1.1, transition: { duration: 0.2 } },
};

/* ── Page Transition ── */
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

/* ── Modal ── */
export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, damping: 25, stiffness: 300 } },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.15 } },
};

/* ── Toast ── */
export const toastVariants: Variants = {
  initial: { opacity: 0, x: 80, scale: 0.95 },
  animate: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring' as const, damping: 20, stiffness: 300 } },
  exit: { opacity: 0, x: 80, scale: 0.95, transition: { duration: 0.15 } },
};

/* ── Badge Ping ── */
export const badgePing = {
  animate: { opacity: [1, 0.3, 1] },
  transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
};
