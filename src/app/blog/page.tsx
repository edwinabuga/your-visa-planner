import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "UK visa guides, tips, and news from Your Visa Planner. Helpful articles to prepare for your UK visa application from Kenya.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="py-20 px-4 bg-neutral-50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-primary">Blog</h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Helpful guides, tips, and the latest news about UK visa applications
            from Kenya. Stay informed and prepared.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-500">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-lg border border-neutral-200 overflow-hidden hover:shadow-md hover:border-accent/40 transition-all"
                >
                  <div className="bg-gradient-to-br from-primary to-primary-dark h-40 flex items-center justify-center p-6">
                    <h3 className="text-white font-heading font-semibold text-lg text-center leading-tight">
                      {post.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                      <Calendar size={14} />
                      <time>
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
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
