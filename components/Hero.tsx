import Link from "next/link";
import Mascot from "./Mascot";
import SpeechBubble from "./SpeechBubble";
import { cvHref, facts } from "@/lib/hero";
import "@/app/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="hero-grid">
          <div className="panel hero-title-panel fade-up d1">
            <span className="eyebrow-tag">Full Stack Developer</span>
            <h1 className="display">Harshitha<br />Salian</h1>
            <p className="sub">Building web applications with Python, React and Node — and drawing the panels in between. Engineer by profession, artist by passion.</p>
            <div className="hero-cta-row">
              <Link href="/#projects" className="btn">View Projects</Link>
              <Link href="/#connect" className="btn ghost">Get in Touch</Link>
              <a href={cvHref} className="btn ghost" download>Download CV</a>
            </div>
            <div className="scroll-cue"><span className="chev" /> Next Panel</div>
          </div>
          <div className="hero-side">
            <div className="panel avatar-panel fade-up d2">
              <Mascot />
              <span className="cap">Udupi, Karnataka — Open to Work anywhere in the world </span>
            </div>
            <div className="panel speech-panel fade-up d3">
              <SpeechBubble />
            </div>
          </div>
        </div>
        <div className="hero-facts fade-up d3">
          {facts.map((f) => (
            <div className="panel fact" key={f.label}>
              <span className="fact-num">{f.value}</span>
              <span className="fact-label">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
