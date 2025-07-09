import { getSinglePost } from "@/lib/ghost";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Dynamically generate SEO / Social metadata using Ghost's meta & social fields
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = await getSinglePost(slug);

  if (!post) {
    return {
      title: "Post not found",
      description: "",
    };
  }

  const canonical = `https://souravlayek.com/blog/${slug}`;

  return {
    title: post.meta_title || post.og_title || post.twitter_title || post.title,
    description:
      post.meta_description ||
      post.og_description ||
      post.twitter_description ||
      post.custom_excerpt ||
      "",
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.og_title || post.meta_title || post.title,
      description:
        post.og_description ||
        post.meta_description ||
        post.custom_excerpt ||
        "",
      url: canonical,
      type: "article",
      images: post.og_image
        ? [{ url: post.og_image }]
        : post.feature_image
        ? [{ url: post.feature_image }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.twitter_title || post.meta_title || post.title,
      description:
        post.twitter_description ||
        post.meta_description ||
        post.custom_excerpt ||
        "",
      images: post.twitter_image
        ? [post.twitter_image]
        : post.feature_image
        ? [post.feature_image]
        : [],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  if (!slug?.trim()) {
    notFound();
  }
  const post = await getSinglePost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mt-24 min-h-screen text-white pb-12 px-4 md:px-0">
      <article className="max-w-4xl mx-auto pt-12">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-extrabold mb-8 leading-tight">
          {post.title}
        </h1>
        {/* Excerpt */}
        {post.custom_excerpt && (
          <p className="text-xl text-gray-300 mb-8">{post.custom_excerpt}</p>
        )}
        {/* Author, Date, Reading Time */}
        <div className="flex items-center gap-4 mb-12 text-gray-200 text-lg">
          {post.primary_author && (
            <div className="flex items-center gap-3">
              {post.primary_author.profile_image && (
                <img
                  src={post.primary_author.profile_image}
                  alt={post.primary_author.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-700"
                />
              )}
              <div className="flex flex-col">
                <span className="font-semibold">
                  {post.primary_author.name}
                </span>
                <span className="text-gray-400 text-base">
                  {post.published_at
                    ? new Date(post.published_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : ""}
                  {post.reading_time && ` — ${post.reading_time} min read`}
                </span>
              </div>
            </div>
          )}
        </div>
        {/* Feature Image */}
        {post.feature_image && (
          <div className="relative mb-8">
            <img
              src={post.feature_image}
              alt={post.title!}
              className="w-full rounded-2xl"
            />
          </div>
        )}
        {/* Content */}
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html || "" }}
        />
      </article>
    </main>
  );
}
