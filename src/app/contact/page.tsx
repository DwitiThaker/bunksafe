import type { Metadata } from "next"
import SimplePage from "@/components/SimplePage"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact BunkSafe for feedback, corrections, and student utility suggestions.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <SimplePage
      title="Contact"
      intro="Have feedback, a correction, or an idea for a student utility? BunkSafe is built to get better with real student use."
      sections={[
        {
          title: "Email",
          body: "You can reach the BunkSafe team at hello@bunksafe.app. For now, use this for feedback, bug reports, partnership queries, and content corrections.",
        },
        {
          title: "Corrections",
          body: "If an explanation about attendance rules is unclear, tell us what your college follows. BunkSafe is a calculator, not an official academic authority, so local rules should always be verified with your institution.",
        },
      ]}
    />
  )
}
