import { works } from "@/lib/data";

export default function sitemap() {
  const baseUrl = "https://metamorph.live";

  // Define static routes
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/works",
    "/contact",
    "/clients",
    "/process",
    "/privacy",
    "/terms",
    "/archive",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Map dynamic works routes
  const workRoutes = works.map((work) => ({
    url: `${baseUrl}/works/${work.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes];
}
