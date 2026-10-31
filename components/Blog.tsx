import Link from "next/link";
import SectionHead from "./SectionHead";
import BlogScroller from "./BlogScroller";
import { posts } from "@/lib/posts";
import "@/app/content.css";

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="wrap">
        <SectionHead title="Blog" num="04 / Chapter Log" />
        <BlogScroller>
          {posts.map((p) => (
            <div className="polaroid" key={p.slug} data-reveal="pop">
              <div className="tape" />
              <div className={`polaroid-photo${p.image ? " has-img" : ""}`}>
                {p.image && /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={p.image} alt="" loading="lazy" />}
                <span className="stamp">{p.stamp}</span>
              </div>
              <div className="polaroid-date">{p.date}</div>
              <Link className="polaroid-title" href={`/blog/${p.slug}`}>{p.title}</Link>
              <p className="polaroid-excerpt">{p.excerpt}</p>
            </div>
          ))}
        </BlogScroller>
      </div>
    </section>
  );
}
