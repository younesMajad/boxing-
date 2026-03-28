'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export function Preparation() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const quoteBox = containerRef.current?.querySelector('.quote-box')
      const imageBox = containerRef.current?.querySelector('.image-box')
      const texts = containerRef.current?.querySelectorAll('.training-text > *')

      gsap.from(quoteBox || null, {
        scrollTrigger: {
          trigger: quoteBox || null,
          start: 'top 80%',
        },
        duration: 1.5,
        opacity: 0,
        x: 100,
        rotate: 5,
        ease: 'power4.out',
      })

      gsap.from(imageBox || null, {
        scrollTrigger: {
          trigger: imageBox || null,
          start: 'top 85%',
        },
        duration: 1.2,
        opacity: 0,
        x: -100,
        scale: 0.8,
        ease: 'back.out(1.5)',
      })

      gsap.from(texts || [], {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        duration: 1,
        opacity: 0,
        y: 40,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative min-h-[70vh] flex items-center">
      {/* Background with subtle boxing motif */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none grayscale brightness-50 contrast-150 transition-transform duration-[20s] hover:scale-110">
        <img src="/360_F_545042737_5NaVzNavnmmTcYol1svcTdEiTEMMq9au.webp" className="w-full h-full object-cover" alt="" />
      </div>
      
      {/* Visual background separation */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-background to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12 training-text">
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl font-black italic uppercase tracking-tightest leading-none">
              Preparation is <span className="text-primary underline decoration-primary decoration-4 underline-offset-8 italic">Everything</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-lg leading-relaxed font-medium">
              Before you step into the ring, the work starts here. We provide top-tier equipment and a focused environment to help you prepare for any challenge. Champions are made in the shadows.
            </p>
          </div>
          
          <div className="image-box flex gap-8 items-center bg-card/60 backdrop-blur-xl border border-border p-8 rounded-4xl shadow-xl hover:-translate-y-2 transition-transform duration-500">
            <div className="relative group shrink-0">
              <div className="absolute -inset-2 bg-primary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="/boxing.webp" 
                alt="Intensive Preparation" 
                className="w-40 h-40 object-cover rounded-2xl border-2 border-primary/20 shadow-lg group-hover:scale-105 transition-transform" 
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <div className="text-4xl font-black italic text-primary/30 group-hover:text-primary transition-colors">01. </div>
              <div className="font-black uppercase tracking-widest text-lg">Hand Wrapping</div>
              <p className="text-sm text-foreground/60 leading-relaxed font-medium italic">
                Protecting your weapons is the first rule of the gym. Master the wrap, master the strike.
              </p>
            </div>
          </div>
        </div>
        
        <div className="quote-box relative perspective-[1000px] h-full flex items-center justify-center">
          <div className="p-12 sm:p-20 bg-primary/10 border-4 border-primary/20 rounded-[3rem] shadow-2xl relative backdrop-blur-2xl hover:bg-primary/15 transition-all duration-700 hover:rotate-1">
            <div className="absolute top-0 left-12 -translate-y-1/2 p-4 bg-primary rounded-2xl shadow-xl shadow-primary/30">
              <Quote className="w-8 h-8 text-primary-foreground fill-primary-foreground opacity-50" />
            </div>
            
            <div className="space-y-10 relative">
              <div className="text-8xl font-black italic opacity-[0.03] absolute -top-8 -right-8 pointer-events-none select-none">
                TRAIN
              </div>
              <p className="text-3xl sm:text-4xl font-black italic leading-[1.2] text-balance drop-shadow-sm uppercase tracking-tighter">
                "The fight is won or lost far away from witnesses - behind the lines, long before I dance under those lights."
              </p>
              
              <div className="flex items-center gap-6">
                <div className="h-[3px] w-20 bg-primary shadow-sm" />
                <div className="flex flex-col">
                  <span className="font-black uppercase tracking-[0.2em] text-xl text-primary drop-shadow-sm">Muhammad Ali</span>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">The Greatest / G.O.A.T</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative floating icon */}
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-card border-4 border-primary/20 rounded-full flex items-center justify-center -z-10 animate-bounce transition-all duration-1000">
             <div className="w-12 h-12 bg-primary rounded-full opacity-20" />
          </div>
        </div>
      </div>
    </section>
  )
}
