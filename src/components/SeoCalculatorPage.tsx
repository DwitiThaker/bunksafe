import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ClientShell from "@/components/ClientShell"
import type { SeoPageSlug } from "@/content/seoPages"
import { SEO_PAGES } from "@/content/seoPages"

interface Props {
  slug: SeoPageSlug
}

export default function SeoCalculatorPage({ slug }: Props) {
  const page = SEO_PAGES[slug]

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 px-4 py-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">BunkSafe student utility</p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-950">{page.h1}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">{page.intro}</p>
            <a
              href="#calculator"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700"
            >
              Calculate Attendance
            </a>
          </div>
        </section>
        <ClientShell initialTarget={page.target} />
        <section className="bg-white px-4 pb-14">
          <div className="mx-auto max-w-3xl space-y-5 rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-gray-950">About this calculator</h2>
            {page.sections.map(section => (
              <p key={section} className="text-sm leading-7 text-gray-600">{section}</p>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
