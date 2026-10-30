"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Home", "home"], ["About", "about"], ["Projects", "projects"],
  ["Certifications", "certifications"], ["Blog", "blog"], ["Connect", "connect"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/#home" className="nav-mark"><span>HS</span></Link>
        <nav className={`links${open ? " open" : ""}`} aria-label="Primary">
          {links.map(([label, id]) => (
            <Link key={id} href={`/#${id}`} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
        <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open}
          onClick={() => setOpen((o) => !o)}><span /></button>
      </div>
    </header>
  );
}
