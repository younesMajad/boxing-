'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

export function CTA() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const texts = containerRef.current?.querySelectorAll('.cta-text > *')
      const button = containerRef.current?.querySelector('.cta-button')

      gsap.from(texts || [], {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        duration: 1.2,
        opacity: 0,
        y: 40,
        stagger: 0.15,
        ease: 'power3.out',
      })

      gsap.from(button || null, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
        },
        duration: 1,
        opacity: 0,
        scale: 0.8,
        ease: 'back.out(1.8)',
        delay: 0.5,
      })

      // Background pulse animation
      const pulse = containerRef.current?.querySelector('.pulse-bg')
      if (pulse) {
        gsap.to(pulse, {
          scale: 1.2,
          opacity: 0.3,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-primary shadow-2xl">
      {/* Dynamic Background */}
      <div className="pulse-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-240 h-240 bg-white opacity-10 rounded-full blur-[120px] pointer-events-none select-none" />
      
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 text-[30rem] font-black italic uppercase leading-none text-white/5 whitespace-nowrap pointer-events-none select-none -rotate-12 translate-x-20">
        JOIN NOW
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10 cta-text">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-[0.3em] shadow-lg animate-bounce duration-[3s]">
          <Zap className="w-4 h-4 fill-white animate-pulse" /> Final Round
        </div>
        
        <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black italic uppercase leading-[0.85] tracking-tightest drop-shadow-2xl text-primary-foreground">
          Ready to Step Into <br /> 
          <span className="text-white brightness-200 contrast-200">The Ring?</span>
        </h2>
        
        <p className="text-xl sm:text-2xl text-primary-foreground/80 max-w-2xl mx-auto font-medium italic drop-shadow-md">
          Join thousands of satisfied warriors and experience the difference today. Start your journey with the best.
        </p>
        
        <div className="cta-button pt-8 flex justify-center">
          <Button size="lg" className="rounded-none h-20 px-16 text-xl font-black uppercase tracking-[0.2em] bg-white text-primary hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/40 group overflow-hidden relative italic">
             <span className="relative z-10 flex items-center gap-3">
               Start Your Free Trial <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-500" />
             </span>
             {/* Glossy hover sheen */}
             <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </Button>
        </div>
        
        <div className="pt-6 text-[10px] font-black uppercase tracking-[0.5em] text-white/40 italic">
          No commitment. Cancel anytime. Full access.
        </div>
      </div>
    </section>
  )
}
