import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { BreedsSection } from "@/components/sections/breeds"
import { ProcessSection } from "@/components/sections/process"
import { VaccinationSection } from "@/components/sections/vaccination"
import { AboutSection } from "@/components/sections/about"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BreedsSection />
      <ProcessSection />
      <VaccinationSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
