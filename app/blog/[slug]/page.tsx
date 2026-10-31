import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import "@/app/content.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return post ? { title: `${post.title} — Harshitha Salian`, description: post.excerpt } : {};
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const post = posts[index];
  const newer = posts[index - 1];
  const older = posts[index + 1];

  return (
    <>
      <section className="post-header">
        <div className="wrap">
          <Link href="/#blog" className="post-back">Back to blog</Link>
          <div className="post-vol">{post.kind}</div>
          <h1 className="display" data-reveal="left">{post.title}</h1>
          <div className="post-date">{post.date}</div>
        </div>
      </section>
      <div className="wrap">
        <article className="post-body" data-reveal="up">
          {post.image && (
            <figure className="post-figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.image} alt={`Certificate: ${post.title}`} />
            </figure>
          )}
          <dl className="post-facts">
            {post.facts.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
          {post.body.map((para, i) => <p key={i}>{para}</p>)}
          <nav className="post-nav" aria-label="More posts">
            {newer ? <Link href={`/blog/${newer.slug}`}>← Newer: {newer.title}</Link> : <span />}
            {older ? <Link href={`/blog/${older.slug}`}>Older: {older.title} →</Link> : <span />}
          </nav>
        </article>
      </div>
    </>
  );
}
