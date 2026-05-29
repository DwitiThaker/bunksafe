import type { Metadata } from "next"
import SeoCalculatorPage from "@/components/SeoCalculatorPage"
import { SEO_PAGES } from "@/content/seoPages"

const page = SEO_PAGES["attendance-shortage-calculator"]

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/attendance-shortage-calculator" },
}

export default function Page() {
  return <SeoCalculatorPage slug="attendance-shortage-calculator" />
}
