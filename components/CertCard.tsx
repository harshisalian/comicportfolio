"use client";
import { AnimatePresence, motion } from "framer-motion";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Cert } from "@/lib/certs";

type From = { x: number; y: number; s: number };

// Hover (or focus) turns the card around to show the certificate.
// Click zooms it up to full size; click again (or Esc) returns it to its original place.
export default function CertCard({ cert }: { cert: Cert }) {
  const [flipped, setFlipped] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [from, setFrom] = useState<From>({ x: 0, y: 0, s: 0.4 });
  const root = useRef<HTMLDivElement>(null);
  const justClosed = useRef(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: globalThis.KeyboardEvent) => e.key === "Escape" && close();
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  function openZoom() {
    const r = root.current?.getBoundingClientRect();
    if (r) {
      const finalW = Math.min(window.innerWidth * 0.92, 1000);
      setFrom({
        x: r.left + r.width / 2 - window.innerWidth / 2,
        y: r.top + r.height / 2 - window.innerHeight / 2,
        s: Math.max(r.width / finalW, 0.2),
      });
    }
    setOpen(true);
  }

  function close() {
    setOpen(false);
    setFlipped(false);
    justClosed.current = true; // stay face-up-front until the pointer leaves and comes back
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openZoom();
    }
  }

  return (
    <>
      <div
        ref={root}
        className={`badge cert-card${flipped ? " is-flipped" : ""}`}
        data-reveal="pop"
        role="button"
        tabIndex={0}
        aria-label={`${cert.title}. Show certificate`}
        onPointerEnter={() => { if (!justClosed.current) setFlipped(true); }}
        onPointerLeave={() => { justClosed.current = false; setFlipped(false); }}
        onFocus={() => setFlipped(true)}
        onBlur={() => setFlipped(false)}
        onKeyDown={onKeyDown}
        onClick={() => (flipped ? openZoom() : setFlipped(true))}
      >
        <div className="cert-flip">
          <div className="cert-face cert-front">
            <div className="seal">{cert.seal}</div>
            <h3>{cert.title}</h3>
            <div className="issuer">{cert.issuer}</div>
            <div className="date">{cert.kind} · {cert.date}</div>
          </div>
          <div className="cert-face cert-back">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cert.image} alt="" loading="lazy" />
            <span className="cert-hint">Click to enlarge</span>
          </div>
        </div>
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="cert-overlay"
              role="dialog"
              aria-modal="true"
              aria-label={`${cert.title} certificate`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
            >
              <motion.div
                className="cert-zoom"
                initial={{ x: from.x, y: from.y, scale: from.s }}
                animate={{ x: 0, y: 0, scale: 1 }}
                exit={{ x: from.x, y: from.y, scale: from.s }}
                transition={{ type: "spring", stiffness: 240, damping: 28 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cert.image} alt={`${cert.title} certificate`} />
                <div className="cert-zoom-bar">
                  <span>{cert.title}</span>
                  {cert.file && (
                    <a href={cert.file} target="_blank" rel="noopener noreferrer"
                       onClick={(e) => e.stopPropagation()}>Open original</a>
                  )}
                  <span className="cert-zoom-close">Click to close</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
