const siteUrl = "https://souravlayek.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"], // optional
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "weekly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const res = await fetch(
      "https://blog.souravlayek.com/ghost/api/content/posts/?key=47bbf6c0baf0904b6b2d6ca046&limit=all"
    );
    const data = await res.json();
    return data.posts.map((post) => ({
      loc: `${siteUrl}/blog/${post.slug}`,
      lastmod: post.updated_at,
    }));
  },
};
