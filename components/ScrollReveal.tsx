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
// Uses the Web Animations API on translate/scale/rotate, so it never fights hover transforms.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("reveal-ready");

    let pending = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
    let ticking = false;

    const check = () => {
      ticking = false;
      const vh = window.innerHeight;
      const ready: { el: HTMLElement; r: DOMRect }[] = [];
      pending = pending.filter((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92) { ready.push({ el, r }); return false; }
        return true;
      });
      ready.sort((a, b) => a.r.top - b.r.top || a.r.left - b.r.left);
      ready.forEach(({ el, r }, i) => {
        el.classList.add("is-in");
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

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return null;
}
