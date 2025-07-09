import { getPosts } from "@/lib/ghost";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "./Components/BlogCard";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import SubscribeForm from "./Components/SubscribeForm";
import type { Metadata } from "next";
export const revalidate = 3600; // Revalidate every 1 hour

export const metadata: Metadata = {
  title: "Blog | Sourav Layek",
  description:
    "Explore articles on system design, software engineering, and building creative side projects. Written by Sourav Layek.",
  openGraph: {
    title: "Blog | Sourav Layek",
    description:
      "Explore articles on system design, software engineering, and building creative side projects. Written by Sourav Layek.",
    url: "https://souravlayek.com/blog",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDMyfHxhcnRpY2xlfGVufDB8fHx8MTc0NjU2NTA2M3ww&ixlib=rb-4.1.0&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Smart Reads on Systems and Side Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Sourav Layek",
    description:
      "Explore articles on system design, software engineering, and building creative side projects. Written by Sourav Layek.",
    images: [
      "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDMyfHxhcnRpY2xlfGVufDB8fHx8MTc0NjU2NTA2M3ww&ixlib=rb-4.1.0&q=80&w=1200",
    ],
  },
};

export default async function BlogPage() {
  const posts = await getPosts("9");

  return (
    <main className="min-h-screen mt-24 text-white pb-12 px-4 md:px-12">
      {/* Banner Section */}
      <section className="relative flex flex-col items-center justify-center h-[340px] md:h-[400px] w-full mb-12 overflow-hidden rounded-b-3xl bg-gradient-to-br from-[#181A20] to-[#23262f]">
        <Image
          src="https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDMyfHxhcnRpY2xlfGVufDB8fHx8MTc0NjU2NTA2M3ww&ixlib=rb-4.1.0&q=80&w=2000"
          alt="Banner background"
          fill
          className="object-cover object-center absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 max-w-3xl leading-tight">
            Get Smart Reads on Systems, Side Projects & Software Design
          </h1>
          <SubscribeForm />
        </div>
      </section>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-bold mb-8 border border-b-white/20 pb-2">
          Latest
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-8 text-brightOrange border border-b-brightOrange w-fit flex items-center gap-2 hover:gap-3 transition-all">
          <Link href="/blog/articles">See All</Link> <ArrowRightIcon />
        </div>
      </div>
    </main>
  );
}
