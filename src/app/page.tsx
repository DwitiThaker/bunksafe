import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ClientShell from "@/components/ClientShell"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import HowItWorks from "@/components/HowItWorks"
import AdSlot from "@/components/AdSlot"
import FAQSchema from "@/components/FAQSchema"

export default function Page() {
  return (
    <>
      <FAQSchema />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ClientShell />
        <FAQ />
        <AdSlot label="Future ad space between FAQ and guide" />
        <HowItWorks />
      </main>
      <Footer />
    </>
  )
}
