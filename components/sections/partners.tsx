'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Users, TrendingUp, Zap, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

const partners_data = [
  { name: 'Global Pro Boxing', icon: Users },
  { name: 'Elite Performance', icon: TrendingUp },
  { name: 'Punch Metrics', icon: Zap },
  { name: 'Ring Verified', icon: CheckCircle2 },
]

export function Partners() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll('.partner-card')
      const header = containerRef.current?.querySelector('.section-header')

      gsap.from(header || null, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: 'power3.out',
      })

      gsap.from(cards || [], {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        duration: 0.8,
        opacity: 0,
        scale: 0.85,
        stagger: 0.1,
        ease: 'back.out(2)',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
      {/* Decorative vertical line accent */}
      <div className="absolute left-1/2 -top-10 bottom-0 w-px bg-primary/10 -translate-x-1/2 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 section-header relative z-10 transition-transform hover:-translate-y-1">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter">Partners & <span className="text-primary italic">References</span></h2>
          <p className="text-lg text-foreground/60 max-w-lg mx-auto font-medium font-italic">Trusted by the industry's finest and respected across the boxing world.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {partners_data.map((partner, i) => {
            const Icon = partner.icon
            return (
              <div
                key={i}
                className="partner-card h-40 group relative rounded-4xl border-2 border-border/40 bg-card hover:border-primary/40 hover:bg-primary/2 flex items-center justify-center transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-700 ease-in-out" />
                
                <div className="text-center space-y-4 relative">
                  <div className="relative group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
                    <Icon className="h-10 w-10 text-primary mx-auto stroke-2" />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all underline decoration-transparent group-hover:decoration-primary">{partner.name}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center relative pt-8">
           <Button size="lg" className="rounded-none h-14 font-black uppercase tracking-widest px-12 italic shadow-[6px_6px_0px_0px_rgba(var(--primary-rgb),0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
             View Case Studies
           </Button>
        </div>
      </div>
    </section>
  )
}
