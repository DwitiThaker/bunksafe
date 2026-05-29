import type { Metadata } from "next"
import SeoCalculatorPage from "@/components/SeoCalculatorPage"
import { SEO_PAGES } from "@/content/seoPages"

const page = SEO_PAGES["classes-needed-calculator"]

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/classes-needed-calculator" },
}

export default function Page() {
  return <SeoCalculatorPage slug="classes-needed-calculator" />
}
