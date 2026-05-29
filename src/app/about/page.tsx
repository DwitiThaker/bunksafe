import type { Metadata } from "next"
import SimplePage from "@/components/SimplePage"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about BunkSafe, a smart attendance planner built for Indian college students.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <SimplePage
      title="About BunkSafe"
      intro="BunkSafe is a student utility platform built to make attendance planning clearer, calmer, and less last-minute."
      sections={[
        {
          title: "Why it exists",
          body: "College attendance rules can be confusing when every subject has different classes held, labs, tutorials, and faculty updates. BunkSafe turns those numbers into practical answers: current attendance, safe bunk count, and classes needed to recover.",
        },
        {
          title: "Who it is for",
          body: "BunkSafe is designed for Indian college students who need a fast attendance calculator, 75 attendance calculator, bunk calculator, and subject-wise attendance tracker without creating an account.",
        },
        {
          title: "Our approach",
          body: "The product keeps calculations transparent and student-friendly. It explains recovery logic clearly, saves subjects locally in the browser, and avoids clutter so the tool stays useful on mobile.",
        },
      ]}
    />
  )
}
