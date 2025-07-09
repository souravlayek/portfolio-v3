import { getPosts } from "@/lib/ghost";
import BlogCard from "../Components/BlogCard";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen mt-24 text-white pb-12 px-8 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
