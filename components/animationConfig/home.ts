export const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
} as const;

export const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export const fadeUpFromSide = {
  hidden: {
    opacity: 0,
    x: 100,
    rotate: 12,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
} as const;