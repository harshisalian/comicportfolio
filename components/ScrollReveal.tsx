"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Kind = "up" | "left" | "right" | "pop" | "stamp";

const FROM: Record<Kind, Keyframe> = {
  up: { translate: "0 34px", scale: "0.96" },
  left: { translate: "-56px 0" },
  right: { translate: "56px 0" },
  pop: { scale: "0.82", rotate: "-3deg" },
  stamp: { scale: "1.8", rotate: "-14deg" },
};

// Any element with data-reveal="up|left|right|pop|stamp" animates in as it scrolls into view.
//
// Fail-safe by design: elements are visible by default. This script hides an element
// (data-hide) only while it waits below the fold, and un-hides it when it scrolls into
// view. If this script ever fails, or the page's elements get rebuilt (hot reload, a
// browser extension, React recovering from a mismatch), nothing stays invisible: new
// elements are simply picked up again, or shown without animation.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const seen = new WeakSet<Element>();
    let ticking = false;

    const prime = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        el.setAttribute("data-hide", "");
      });
    };

    const check = () => {
      ticking = false;
      prime();
      const vh = window.innerHeight;
      const ready: { el: HTMLElement; r: DOMRect }[] = [];
      document.querySelectorAll<HTMLElement>("[data-hide]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92) ready.push({ el, r });
      });
      ready.sort((a, b) => a.r.top - b.r.top || a.r.left - b.r.left);
      ready.forEach(({ el, r }, i) => {
        el.removeAttribute("data-hide");
        if (r.bottom < 0) return; // already scrolled past: just show it
        const kind = (el.dataset.reveal || "up") as Kind;
        el.animate(
          [
            { opacity: 0, ...FROM[kind] },
            { opacity: 1, translate: "0 0", scale: "1", rotate: "0deg" },
          ],
          {
            duration: kind === "stamp" ? 520 : 700,
            delay: Math.min(i * 70, 600),
            easing: "cubic-bezier(.34,1.4,.64,1)",
            fill: "backwards",
          }
        );
      });
    };

    const schedule = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };

    // New elements (route changes, rebuilt DOM) are picked up automatically.
    const observer = new MutationObserver(schedule);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    check();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return null;
}
