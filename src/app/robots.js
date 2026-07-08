export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/private/", "/admin/"],
    },
    sitemap: "https://metamorph.live/sitemap.xml",
  };
}
