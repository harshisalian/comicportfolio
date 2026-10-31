"use client";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

export default function BlogScroller({ children }: { children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft < 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    const el = track.current;
    update();
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".polaroid");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + 34), behavior: "smooth" });
  };

  return (
    <div className="blog-scroller">
      <div className="blog-controls">
        <span className="blog-hint">Newest first · swipe or use the arrows</span>
        <div className="blog-arrows">
          <button type="button" aria-label="Scroll to newer posts" onClick={() => scrollBy(-1)} disabled={edge.start}>←</button>
          <button type="button" aria-label="Scroll to older posts" onClick={() => scrollBy(1)} disabled={edge.end}>→</button>
        </div>
      </div>
      <div className="blog-track" ref={track} tabIndex={0} aria-label="Blog posts, newest first">
        {children}
      </div>
    </div>
  );
}
