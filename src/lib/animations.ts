import type { Transition, Variants } from "framer-motion";

/* ── Easing Curves ── */

export const easing = {
  smooth: [0.25, 0.1, 0.25, 1.0] as const,      // Apple-style smooth
  luxuryOut: [0.16, 1.0, 0.3, 1.0] as const,     // Dramatic entry
  gentle: [0.4, 0.0, 0.2, 1.0] as const,          // Ambient loops
  snappy: [0.6, 0.05, 0.01, 0.9] as const,        // Micro-interactions
};

/* ── Duration Presets ── */

export const duration = {
  instant: 0.15,
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  dramatic: 1.2,
  cinematic: 1.8,
};

/* ── Reusable Transitions ── */

export const transitions = {
  smooth: { duration: duration.normal, ease: easing.smooth } satisfies Transition,
  luxury: { duration: duration.dramatic, ease: easing.luxuryOut } satisfies Transition,
  snappy: { duration: duration.fast, ease: easing.snappy } satisfies Transition,
  spring: { type: "spring", stiffness: 150, damping: 20 } satisfies Transition,
};

/* ── Section Reveal ── */

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.luxuryOut,
    },
  },
};

/* ── Stagger Container ── */

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/* ── Stagger Item ── */

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease: easing.luxuryOut,
    },
  },
};

/* ── Character Reveal (for hero heading) ── */

export const charReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: 90,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: duration.normal,
      ease: easing.luxuryOut,
    },
  },
};

/* ── Word Reveal (with blur-to-sharp) ── */

export const wordReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: duration.slow,
      ease: easing.smooth,
    },
  },
};

/* ── Fade Scale ── */

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.normal,
      ease: easing.smooth,
    },
  },
};

/* ── Slide Variants ── */

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration.slow,
      ease: easing.luxuryOut,
    },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration.slow,
      ease: easing.luxuryOut,
    },
  },
};

/* ── Line Expand (decorative dividers) ── */

export const lineExpand: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: duration.dramatic,
      ease: easing.luxuryOut,
    },
  },
};

/* ── Button Interactions ── */

export const buttonHover = {
  scale: 1.03,
  transition: { duration: duration.fast, ease: easing.snappy },
};

export const buttonTap = {
  scale: 0.97,
};
