

export const viewportOnce = {
  initial: "hidden",
  whileInView: "show",
  viewport: {
    once: true,
    amount: 0.2,
  },
};

// ── CONTAINERS ────────────────────────────────────────────────

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
} as const;

export const staggerContainerFast = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
} as const;

export const staggerContainerSlow = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
} as const;

// ── FADE ──────────────────────────────────────────────────────

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
} as const;

export const fadeOut = {
  show: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: { duration: 1.5, ease: "easeIn" },
  },
} as const;

// ── FADE + DIRECTIONAL ────────────────────────────────────────

export const fadeUpReveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
} as const;



export const fadeDownReveal = {
  hidden: { opacity: 0, y: -40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

export const fadeLeftReveal = {
  hidden: { opacity: 0, x: -60, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

export const fadeRightReveal = {
  hidden: { opacity: 0, x: 60, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

// ── SLIDE (no blur, stronger movement) ───────────────────────

export const slideUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export const slideDown = {
  hidden: { opacity: 0, y: -60, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export const slideLeft = {
  hidden: { opacity: 0, x: -80, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export const slideRight = {
  hidden: { opacity: 0, x: 80, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
} as const;



// ── CLIP REVEAL (text/panel wipe effect) ─────────────────────

export const clipRevealUp = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

export const clipRevealLeft = {
  hidden: { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

export const clipRevealRight = {
  hidden: { clipPath: "inset(0% 0% 0% 100%)", opacity: 0 },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

// ── SCALE ─────────────────────────────────────────────────────

export const scaleUp = {
  hidden: { opacity: 0, scale: 1.55 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

export const scaleDown = {
  hidden: { opacity: 0, scale: 1.15 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

// ── IMAGE REVEAL (zoom out from inside) ───────────────────────

export const imageReveal = {
  hidden: { scale: 1.12, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

// ── BLUR IN (no movement) ─────────────────────────────────────

export const blurIn = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
  },
} as const;

// ── FLIP ──────────────────────────────────────────────────────

export const flipUp = {
  hidden: { opacity: 0, rotateX: 90, transformOrigin: "bottom" },
  show: {
    opacity: 1,
    rotateX: 0,
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

export const flipLeft = {
  hidden: { opacity: 0, rotateY: -90, transformOrigin: "right" },
  show: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

// ── BOUNCE ────────────────────────────────────────────────────

export const bounceUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "backOut" },
  },
} as const;

// ── CARD / PANEL ──────────────────────────────────────────────

export const cardReveal = {
  hidden: { opacity: 0, y: 70, scale: 1.56, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

// ── DRAW (SVG stroke) ─────────────────────────────────────────

export const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
} as const;

// ── ROTATE + SLIDE (for dynamic image reveals) ─────────────────
export const rotateRevealRight = {
  hidden: {
    opacity: 0,
    x: 120,
    rotate: 12,
    scale: 1.40,
    transformOrigin: "bottom right",
    filter: "blur(4px)",
  },

  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration:3.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
} as const;

// ---- CUSTOM VARIANTS FOR TEAM MEMBERS (combines fade + slide based on direction prop) ----
export const staggerSlideUpItem = (i: number) => ({
  hidden: {
    y: 80,
    opacity: 0.2,
  },

  show: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.9,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}) as const;