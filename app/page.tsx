'use client'

import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { Features } from '@/components/sections/features'
import { Preparation } from '@/components/sections/preparation'
// import { Pricing } from '@/components/sections/pricing'
import { Partners } from '@/components/sections/partners'
import { CTA } from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/10 selection:bg-primary selection:text-white dark:selection:bg-primary dark:selection:text-primary-foreground">
      <Navbar />

      <main className="relative z-10 w-full overflow-x-hidden">
        <Hero />
        <Stats />
        <Features />
        <Preparation />
        {/* <Pricing /> */}
        <Partners />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
