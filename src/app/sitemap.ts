import type { MetadataRoute } from "next"

const BASE_URL = "https://bunksafe-nu.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/75-attendance-calculator",
    "/80-attendance-calculator",
    "/bunk-calculator",
    "/attendance-shortage-calculator",
    "/classes-needed-calculator",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ]

  return routes.map(route => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("calculator") ? 0.85 : 0.5,
  }))
}
