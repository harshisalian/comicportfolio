"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ComicBackground() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Halftone drifts slowly as you scroll; the outlined sound-words float up and down.
  const dotsY = useTransform(scrollY, (v) => `${reduce ? 0 : -v * 0.12}px`);
  const w1 = useTransform(scrollY, (v) => (reduce ? 0 : Math.sin(v / 650) * 70));
  const w2 = useTransform(scrollY, (v) => (reduce ? 0 : Math.sin(v / 520 + 2) * 60));
  const w3 = useTransform(scrollY, (v) => (reduce ? 0 : Math.sin(v / 780 + 4) * 80));

  // A soft halftone spotlight follows the cursor (mouse devices only).
  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || !window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0, x = 0, y = 0;
    const onMove = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
        el.dataset.active = "1";
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <div className="comic-bg" ref={ref} aria-hidden="true">
      <motion.div className="comic-dots" style={{ backgroundPositionY: dotsY }} />
      <div className="comic-glow" />
      <div className="comic-rays" />
      <motion.span className="comic-word w1" style={{ y: w1 }}>Pow!</motion.span>
      <motion.span className="comic-word w2" style={{ y: w2 }}>Zap!</motion.span>
      <motion.span className="comic-word w3" style={{ y: w3 }}>Bam!</motion.span>
    </div>
  );
}
