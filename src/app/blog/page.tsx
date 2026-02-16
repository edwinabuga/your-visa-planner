import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Visa guides, tips, and news from Your Visa Planner. Helpful articles to prepare for your visa application from Kenya.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="py-20 sm:py-28 px-4 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-widest uppercase text-bronze-400 font-medium mb-4">
            Insights
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl font-medium text-white leading-[1.1]">
            Blog
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Helpful guides, tips, and the latest news about visa applications
            from Kenya. Stay informed and prepared.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-500">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block border border-zinc-800 overflow-hidden hover:border-bronze-800/50 transition-all"
                >
                  <div className="bg-gradient-to-br from-bronze-900/30 to-black h-40 flex items-center justify-center p-6">
                    <h3 className="text-white font-heading text-lg text-center leading-tight">
                      {post.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                      <Calendar size={14} />
                      <time>
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-bronze-400 group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
