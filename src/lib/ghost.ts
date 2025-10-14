import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://blog.souravlayek.com", // e.g., https://demo.ghost.io
  key: process.env.GHOST_API_KEY!, // get this from Ghost Admin > Integrations
  version: "v5.0",
});

export async function getPosts(limit: string = "all") {
  return await api.posts
    .browse({
      include: ["tags", "authors"],
      limit: limit,
      filter: "tags:-pitchmirror",
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
}
export async function getSinglePost(slug: string) {
  return await api.posts.read({ slug }, { include: ["tags", "authors"] });
}
