import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== "tasteoftoken") {
    return new Response("Invalid token", { status: 401 });
  }

  const body = await req.json();
  const slug = body.slug;

  try {
    if (!slug) {
      // Revalidate blog list
      await fetch(`https://souravlayek.com/blog`, {
        next: { revalidate: 0 },
      });
    } else {
      // Revalidate specific blog post
      await fetch(`https://souravlayek.com/blog/${slug}`, {
        next: { revalidate: 0 },
      });
    }

    return new Response("Revalidated", { status: 200 });
  } catch (err) {
    return new Response("Error revalidating", { status: 500 });
  }
}
