import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

interface Props {
  title: string
  intro: string
  sections: {
    title: string
    body: string
  }[]
}

export default function SimplePage({ title, intro, sections }: Props) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white px-4 py-12">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-950">{title}</h1>
          <p className="mt-4 text-base leading-7 text-gray-600">{intro}</p>
          <div className="mt-10 space-y-8">
            {sections.map(section => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-gray-950">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-gray-600">{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
