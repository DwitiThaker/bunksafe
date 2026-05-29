import type { Metadata } from "next"
import SimplePage from "@/components/SimplePage"

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for BunkSafe attendance calculator and bunk planner.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <SimplePage
      title="Terms of Use"
      intro="By using BunkSafe, you agree to use the attendance calculations as guidance rather than official academic records."
      sections={[
        {
          title: "Calculator accuracy",
          body: "BunkSafe uses standard attendance formulas, but your college records may include special rules, exemptions, cancelled classes, practicals, or manual corrections. Always verify important decisions with your official attendance portal or department.",
        },
        {
          title: "Student responsibility",
          body: "The tool helps you understand attendance numbers. It does not encourage academic misconduct or guarantee exam eligibility.",
        },
        {
          title: "Availability",
          body: "BunkSafe may change, improve, or temporarily become unavailable as the product evolves.",
        },
      ]}
    />
  )
}
