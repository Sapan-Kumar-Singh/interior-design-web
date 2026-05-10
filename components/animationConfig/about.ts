// ── CONTAINERS (viewport controlled) ─────────────────────────
export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.1,
        },
    },
};

// TEXT (scroll reveal)
export const textItem = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
} as const;


export const imageRight = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.9 },
    },
};