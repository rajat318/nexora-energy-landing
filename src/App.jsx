import { lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Intro from './components/sections/Intro'
import Features from './components/sections/Features'
import Specifications from './components/sections/Specifications'
import Statistics from './components/sections/Statistics'
import Applications from './components/sections/Applications'
import WhyNexora from './components/sections/WhyNexora'
import CTA from './components/sections/CTA'

const ProductShowcase = lazy(() => import('./components/sections/ProductShowcase'))

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Features />
        <Suspense fallback={<section id="showcase" className="min-h-screen" />}>
          <ProductShowcase />
        </Suspense>
        <Specifications />
        <Statistics />
        <Applications />
        <WhyNexora />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
