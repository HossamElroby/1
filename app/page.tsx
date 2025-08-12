import Header from '@/components/sections/Header'
import HeroSlider from '@/components/sections/HeroSlider'
import PropertyGrid from '@/components/sections/PropertyGrid'
import FeaturesSection from '@/components/sections/FeaturesSection'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <PropertyGrid />
      <FeaturesSection />
      <Footer />
    </main>
  )
}