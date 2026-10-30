"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { avatarSrc } from "@/lib/hero";

export default function Mascot() {
  const reduce = useReducedMotion();
  const [failed, setFailed] = useState(false);

  // If /public/avatar.png is missing, show the 日 placeholder instead of a broken image.
  useEffect(() => {
    const probe = new window.Image();
    probe.onerror = () => setFailed(true);
    probe.src = avatarSrc;
  }, []);

  return (
    <div className="mascot">
      {failed ? (
        <span className="mark">日</span>
      ) : (
        <motion.img
          src={avatarSrc}
          alt="Cartoon avatar of Harshitha"
          className="mascot-img"
          onError={() => setFailed(true)}
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={reduce ? undefined : { rotate: [0, -4, 4, -3, 0], transition: { duration: 0.6 } }}
          whileTap={{ scale: 0.96 }}
        />
      )}
      <motion.span
        className="hi-sticker"
        aria-hidden="true"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: -8 }}
        transition={{ type: "spring", delay: 0.9, stiffness: 300, damping: 12 }}
      >
        Hi!
      </motion.span>
    </div>
  );
}
