import type { Metadata } from "next"
import SeoCalculatorPage from "@/components/SeoCalculatorPage"
import { SEO_PAGES } from "@/content/seoPages"

const page = SEO_PAGES["75-attendance-calculator"]

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/75-attendance-calculator" },
}

export default function Page() {
  return <SeoCalculatorPage slug="75-attendance-calculator" />
}
