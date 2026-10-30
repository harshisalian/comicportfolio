import Link from "next/link";

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
            </div>
            <div className="scroll-cue"><span className="chev" /> Next Panel</div>
          </div>
          <div className="hero-side">
            <div className="panel avatar-panel fade-up d2">
              {/* Swap this for your avatar: <Image src="/avatar.png" alt="" fill /> */}
              <span className="mark">日</span>
              <span className="cap">Udupi, Karnataka — Open to Work</span>
            </div>
            <div className="panel speech-panel fade-up d3">
              &ldquo;Eligible for immediate joining. Currently building full-stack tools and looking for a team that wants both the engineer and the artist.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
