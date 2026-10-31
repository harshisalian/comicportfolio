import SectionHead from "./SectionHead";
import { internships, courses, type Cert } from "@/lib/certs";
import CertCard from "./CertCard";
import "@/app/content.css";

function Group({ title, items }: { title: string; items: Cert[] }) {
  return (
    <div className="cert-group">
      <div className="cert-group-title" data-reveal="left">{title}</div>
      <div className="cert-row">
        {items.map((c) =>
          c.image ? (
            <CertCard cert={c} key={c.title + c.date} />
          ) : (
            <div className="badge" key={c.title + c.date} data-reveal="pop">
              <div className="seal" data-reveal="stamp">{c.seal}</div>
              <h3>{c.title}</h3>
              <div className="issuer">{c.issuer}</div>
              <div className="date">{c.kind} · {c.date}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="wrap">
        <SectionHead title="Certifications" num="03 / Achievements Unlocked" />
        <Group title="Internships" items={internships} />
        <Group title="Courses, workshops & simulations" items={courses} />
      </div>
    </section>
  );
}
