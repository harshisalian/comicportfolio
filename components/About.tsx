import SectionHead from "./SectionHead";
import { about, stack } from "@/lib/data";
import "@/app/about.css";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead title="About" num="01 / Origin Story" />
        <div className="about-strip">
          {about.map((a) => (
            <div className="strip-panel" key={a.title} tabIndex={0} data-reveal="pop">
              <span className="corner">{a.kanji}</span>
              <span className="beat">{a.beat}</span>
              <div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-row" data-reveal="up">
          <div className="beat">Stack</div>
          <div className="chip-row">
            {stack.map((s) => <span className="chip" key={s} data-reveal="pop">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
