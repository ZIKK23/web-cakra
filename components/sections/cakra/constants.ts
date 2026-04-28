export const TOTAL_FRAMES = 144;

export const FRAME_SOURCES = Array.from({ length: TOTAL_FRAMES }, (_, index) => {
  return `/assets/logo-sequence/ezgif-frame-${String(index + 1).padStart(
    3,
    "0",
  )}.webp`;
});

export const sectionMotionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export const moduleAccentClasses = {
  gold:
    "from-[rgba(197,160,89,0.15)] via-[rgba(197,160,89,0.05)] to-transparent",
  navy:
    "from-[rgba(27,54,93,0.2)] via-[rgba(27,54,93,0.06)] to-transparent",
  cream:
    "from-[rgba(244,235,208,0.12)] via-[rgba(244,235,208,0.04)] to-transparent",
} as const;
