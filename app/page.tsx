import Hero from "@/components/Hero"
import EventSection from "@/components/EventSection"
import ConceptSection from "@/components/ConceptSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-[var(--black)]">
      <Hero />
      <EventSection />
      <ConceptSection />
      <Footer />
    </main>
  )
}
