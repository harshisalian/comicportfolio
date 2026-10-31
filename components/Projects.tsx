import SectionHead from "./SectionHead";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <SectionHead title="Projects" num="02 / Chapters" />
        <div className="proj-grid">
          {projects.map((p, i) => (
            <div className={`proj-card${p.wide ? " wide" : ""}`} key={p.title} data-reveal="up">
              <div className="proj-chapter">Chapter {String(i + 1).padStart(2, "0")}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="tag-row">
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              {p.href && (
                <a className="proj-link" href={p.href} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
