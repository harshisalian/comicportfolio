"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroLines } from "@/lib/hero";

export default function SpeechBubble() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % heroLines.length), 5500);
    return () => clearInterval(t);
  }, [reduce, i]);

  return (
    <div className="bubble">
      <AnimatePresence mode="wait">
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          &ldquo;{heroLines[i]}&rdquo;
        </motion.p>
      </AnimatePresence>
      <div className="bubble-dots">
        {heroLines.map((_, n) => (
          <button
            key={n}
            type="button"
            aria-label={`Show message ${n + 1}`}
            aria-current={n === i}
            className={n === i ? "on" : ""}
            onClick={() => setI(n)}
          />
        ))}
      </div>
    </div>
  );
}
