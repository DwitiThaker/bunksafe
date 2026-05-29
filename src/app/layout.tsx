import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })

export const metadata: Metadata = {
  metadataBase: new URL("https://bunksafe.app"),
  title: {
    default: "Attendance Calculator & Bunk Planner | BunkSafe",
    template: "%s | BunkSafe",
  },
  description:
    "Free attendance calculator to calculate attendance percentage, track bunk limits, and know how many classes you can miss.",
  keywords: [
    "attendance calculator",
    "75 attendance calculator",
    "bunk calculator",
    "attendance percentage calculator",
    "attendance shortage calculator",
    "how many classes can I miss",
    "classes needed for 75 attendance",
    "college attendance tracker",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Attendance Calculator & Bunk Planner | BunkSafe",
    description:
      "Calculate attendance percentage, track bunk limits, and know exactly how many classes you can miss.",
    type: "website",
    url: "/",
    siteName: "BunkSafe",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attendance Calculator & Bunk Planner | BunkSafe",
    description:
      "Free attendance calculator for students who want to plan classes without panic.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  )
}
