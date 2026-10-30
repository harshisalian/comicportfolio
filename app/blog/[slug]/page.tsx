import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/lib/data";

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

  return (
    <>
      <section className="post-header">
        <div className="wrap">
          <Link href="/#blog" className="post-back">Back to blog</Link>
          <div className="post-vol">Vol. {String(index + 1).padStart(2, "0")}</div>
          <h1 className="display" data-reveal="left">{post.title}</h1>
          <div className="post-date">{post.date}</div>
        </div>
      </section>
      <div className="wrap">
        <article className="post-body" data-reveal="up">
          <div className="edit-note">
            Draft placeholder. Write your post in app/blog/[slug]/page.tsx or move posts to MDX files later.
          </div>
          <p>{post.excerpt}</p>
        </article>
      </div>
    </>
  );
}
