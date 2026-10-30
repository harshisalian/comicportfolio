import SectionHead from "./SectionHead";
import ContactForm from "./ContactForm";
import { site } from "@/lib/data";

export default function Connect() {
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  return (
    <section className="section" id="connect">
      <div className="wrap">
        <SectionHead title="Connect" num="05 / Send a Signal" />
        <div className="connect-grid">
          <div className="stat-card" data-reveal="left">
            <div className="beat">Profile Sheet</div>
            <div className="stat-line"><span>Location</span><span>{site.location}</span></div>
            <div className="stat-line"><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
            <div className="stat-line"><span>Phone</span><a href={site.phoneHref}>{site.phone}</a></div>
            <div className="stat-line"><span>GitHub</span><a href={site.github.href} {...ext}>{site.github.label}</a></div>
            <div className="stat-line"><span>LinkedIn</span><a href={site.linkedin.href} {...ext}>{site.linkedin.label}</a></div>
            <div className="stat-line"><span>Instagram</span><a href={site.instagram.href} {...ext}>{site.instagram.label}</a></div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
