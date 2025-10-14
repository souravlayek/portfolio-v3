import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: { post: any }) {
  return (
    <Link
      key={post.id}
      href={`/blog/${post.slug}`}
      className="mt-auto inline-block text-orange-400 font-medium hover:underline"
    >
      <div className="bg-[#181A20] rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.03] transition-transform duration-200">
        <div className="h-48 w-full relative">
          <Image
            src={post.feature_image || "/default-image.jpg"}
            alt={post.title}
            className="object-cover"
            fill
          />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h2 className="text-lg font-semibold mb-2 leading-tight line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {post.custom_excerpt || post.excerpt}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 text-xs text-gray-500">
            {post.reading_time && (
              <span className="ml-auto text-gray-400">
                {post.reading_time} min read
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
