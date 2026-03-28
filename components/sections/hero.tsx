'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, TrendingUp } from 'lucide-react'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      const heroElements = heroRef.current?.querySelectorAll('.hero-content > *')
      const heroImage = heroRef.current?.querySelector('.hero-image')

      gsap.from(heroElements || [], {
        duration: 1.2,
        opacity: 0,
        y: 60,
        stagger: 0.15,
        ease: 'power4.out',
      })

      gsap.from(heroImage || null, {
        duration: 1.8,
        opacity: 0,
        scale: 1.15,
        rotate: 3,
        ease: 'power3.out',
        delay: 0.3,
      })

      // Refined floating animation
      const heading = heroRef.current?.querySelector('h1')
      if (heading) {
        gsap.to(heading, {
          y: -15,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }

      // Parallax effect on mouse move for the image
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        const xPos = (clientX / window.innerWidth - 0.5) * 20
        const yPos = (clientY / window.innerHeight - 0.5) * 20
        
        gsap.to(heroImage as any, {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: 'power2.out'
        })
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 z-0 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="hero-content space-y-10">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black italic uppercase leading-[0.85] tracking-tighter">
            Push Your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-br from-primary via-primary to-red-600 drop-shadow-sm animate-pulse">
              Limits
            </span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-lg leading-relaxed font-medium">
            Master the art of boxing with world-class training and a community that pushes you to be your best. Every punch counts, every round matters.
          </p>
          
          <div className="flex flex-wrap gap-5 pt-4">
            <Button size="lg" className="h-16 px-10 rounded-none font-black uppercase tracking-widest text-lg group overflow-hidden relative transition-all active:scale-95 shadow-[8px_8px_0px_0px_rgba(var(--primary-rgb),0.3)] hover:shadow-none">
              <span className="relative z-10 flex items-center gap-2">
                Join the Fold <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button size="lg" variant="outline" className="h-16 px-10 rounded-none font-black uppercase tracking-widest text-lg border-2 hover:bg-primary hover:text-primary-foreground transition-all active:scale-95">
              View Schedule
            </Button>
          </div>
        </div>
        
        <div className="hero-image relative group perspective-[1000px]">
          <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
          
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl transition-all duration-700 group-hover:border-primary/60 group-hover:scale-[1.02]">
            <img 
              src="/boxing-power.webp" 
              alt="Boxing Power" 
              className="w-full h-auto object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80" />
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          {/* Floating Stats Overlay */}
          <div className="absolute -bottom-8 -left-8 bg-card/80 backdrop-blur-xl border-2 border-primary/20 p-8 shadow-2xl rounded-2xl hidden lg:block group-hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-primary text-primary-foreground rounded-xl shadow-lg shadow-primary/20">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div>
                <div className="text-3xl font-black italic uppercase tracking-tighter">+500%</div>
                <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Endurance Boost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 h-full w-px bg-border/40 hidden xl:block" />
      <div className="absolute right-10 top-0 h-full w-px bg-border/40 hidden xl:block" />
    </section>
  )
}
