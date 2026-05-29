import type { Metadata } from "next"
import SimplePage from "@/components/SimplePage"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BunkSafe privacy policy explaining local subject storage and student data handling.",
  alternates: { canonical: "/privacy-policy" },
}

export default function PrivacyPolicyPage() {
  return (
    <SimplePage
      title="Privacy Policy"
      intro="BunkSafe is designed to be useful without collecting personal academic data."
      sections={[
        {
          title: "Information we store",
          body: "Saved subjects are stored in your browser using localStorage. This means your subject names, classes held, and attended classes remain on your device unless you clear browser data.",
        },
        {
          title: "Information we do not require",
          body: "BunkSafe does not require sign up, college ID, phone number, or password to use the attendance calculator.",
        },
        {
          title: "Analytics and ads",
          body: "BunkSafe may use privacy-conscious analytics or advertising in the future to understand usage and support the product. Any future integrations should be disclosed here before release.",
        },
        {
          title: "Your control",
          body: "You can clear saved subjects from the dashboard or remove BunkSafe data through your browser settings at any time.",
        },
      ]}
    />
  )
}
