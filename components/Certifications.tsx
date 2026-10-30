import SectionHead from "./SectionHead";
import { certs } from "@/lib/data";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="wrap">
        <SectionHead title="Certifications" num="03 / Achievements Unlocked" />
        <div className="cert-row">
          {certs.map((c) => (
            <div className="badge" key={c.title} data-reveal="pop">
              <div className="seal" data-reveal="stamp">{c.seal}</div>
              <h3>{c.title}</h3>
              <div className="issuer">{c.issuer}</div>
              <div className="date">{c.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
