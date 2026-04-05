'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, Trophy, Flame, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

const features_data = [
  { 
    title: 'Technical Mastery', 
    desc: 'Perfect your stance, footwork, and core boxing techniques with expert guidance.',
    icon: Target,
  },
  { 
    title: 'Power & Speed', 
    desc: 'Explosive drills designed to increase your impact and reaction time significantly.',
    icon: Flame,
  },
  { 
    title: 'Mental Resilience', 
    desc: 'Develop the unwavering mindset and discipline of a professional fighter.',
    icon: Trophy,
  },
]

export function Features() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll('.feature-item')
      const image = containerRef.current?.querySelector('.feature-image')
      const header = containerRef.current?.querySelector('.section-header')

      gsap.from(header || null, {
        scrollTrigger: {
          trigger: header || null,
          start: 'top 85%',
        },
        duration: 1,
        opacity: 0,
        y: 40,
        ease: 'power3.out',
      })

      gsap.from(items || [], {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        duration: 1.2,
        opacity: 0,
        x: -50,
        stagger: 0.2,
        ease: 'power4.out',
      })

      gsap.from(image || null, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        },
        duration: 1.5,
        opacity: 0,
        scale: 0.9,
        rotate: -5,
        ease: 'power2.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-160 h-160 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative order-2 lg:order-1 feature-image group">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-4xl overflow-hidden border-2 border-primary/20 shadow-2xl skew-y-1 group-hover:skew-y-0 transition-all duration-700">
              <img 
                src="/pexels-photo-4752825.webp" 
                alt="Elite Training Session" 
                className="w-full h-auto object-cover brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              
              {/* Image Label Overlay */}
              <div className="absolute top-8 right-8 bg-card/60 backdrop-blur-md px-6 py-2 border rounded-full font-black italic uppercase tracking-widest text-[10px] drop-shadow-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110 duration-500">
                PRO TRAINING
              </div>
            </div>
            
            {/* Background floating squares */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 border-2 border-primary/20 rounded-2xl rotate-12 -z-10 group-hover:rotate-45 transition-transform duration-700" />
            <div className="absolute top-0 -left-12 w-16 h-16 bg-red-600/10 border-2 border-red-600/20 rounded-xl -rotate-12 -z-10 group-hover:-rotate-45 transition-transform duration-700" />
          </div>
          
          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-6 section-header">
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.3em] text-xs">
                <div className="h-0.5 w-12 bg-primary" />
                <span>Elite Excellence</span>
              </div>
              <h2 className="text-6xl sm:text-7xl font-black italic uppercase tracking-tighter leading-none">
                World Class <br />
                <span className="text-secondary-foreground underline decoration-primary decoration-8 underline-offset-10">Coaching</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-xl leading-relaxed">
                Our trainers are experienced professionals who have been in the ring. They know what it takes to build a champion. Every drill is calculated for maximum performance.
              </p>
            </div>
            
            <div className="grid gap-8">
              {features_data.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div key={i} className="flex justify-center feature-item group  gap-8 items-start hover:-translate-y-1  transition-transform duration-400">
                    <div className="relative group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg rotate-12 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative p-4 rounded-2xl bg-card border border-border shadow-md text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                        <Icon className="h-8 w-8 stroke-[2.5]" />
                      </div>
                    </div>
                    
                    <div className="space-y-2 pt-2">
                      <h3 className="font-black text-2xl uppercase italic tracking-tight group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/60 text-base leading-relaxed max-w-sm">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-none font-black uppercase tracking-widest px-10 h-16 shadow-[6px_6px_0px_0px_rgba(var(--primary-rgb),0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                Join the Academy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
