import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Calendar, User, ArrowLeft } from "lucide-react";
import CTASection from "@/components/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = post.content
    .split("\n")
    .map((line) => {
      if (line.startsWith("## "))
        return `<h2 class="text-2xl font-bold text-white mt-10 mb-4">${line.slice(3)}</h2>`;
      if (line.startsWith("### "))
        return `<h3 class="text-xl font-semibold text-white mt-8 mb-3">${line.slice(4)}</h3>`;
      if (line.startsWith("- **"))
        return `<li class="ml-4 text-zinc-400">${line.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong class='text-zinc-200'>$1</strong>")}</li>`;
      if (line.startsWith("- "))
        return `<li class="ml-4 text-zinc-400">${line.slice(2)}</li>`;
      if (line.startsWith("---"))
        return `<hr class="my-8 border-zinc-800" />`;
      if (line.trim() === "") return "";
      return `<p class="text-zinc-400 leading-relaxed mb-4">${line.replace(/\*\*(.*?)\*\*/g, "<strong class='text-zinc-200'>$1</strong>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-bronze-400 hover:underline">$1</a>')}</p>`;
    })
    .join("\n");

  return (
    <>
      <section className="py-20 sm:py-28 px-4 pt-32">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-bronze-400 hover:underline mb-6"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-zinc-400">
            <span className="flex items-center gap-1">
              <User size={14} />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              <time>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </span>
          </div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <article className="py-16 px-4">
        <div
          className="mx-auto max-w-3xl"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

      <CTASection
        title="Need Help With Your Visa?"
        description="Our expert consultants are ready to help you with your application. Start with a free eligibility assessment today."
      />
    </>
  );
}
