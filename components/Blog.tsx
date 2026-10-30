import Link from "next/link";
import SectionHead from "./SectionHead";
import { posts } from "@/lib/data";

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="wrap">
        <SectionHead title="Blog" num="04 / Chapter Log" />
        <div className="blog-grid">
          {posts.map((p) => (
            <div className="polaroid" key={p.slug} data-reveal="pop">
              <div className="tape" />
              <div className="polaroid-photo"><span className="stamp">{p.stamp}</span></div>
              <div className="polaroid-date">{p.date}</div>
              <Link className="polaroid-title" href={`/blog/${p.slug}`}>{p.title}</Link>
              <p className="polaroid-excerpt">{p.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
