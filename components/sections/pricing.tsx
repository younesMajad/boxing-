'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

gsap.registerPlugin(ScrollTrigger)

const pricing_plans = [
  {
    name: 'Amateur',
    price: '$49',
    period: '/month',
    description: 'For those just starting their journey in the ring.',
    features: [
      '3 Group Sessions / Week',
      'Basic Equipment Access',
      'Foundation Techniques',
      'Locker Room Access',
    ],
    cta: 'Start Training',
    featured: false,
  },
  {
    name: 'Contender',
    price: '$89',
    period: '/month',
    description: 'Serious training for those who want to compete.',
    features: [
      'Daily Group Sessions',
      'Full Gym Access',
      'Sparring Privileges',
      'Nutrition Guide',
    ],
    cta: 'Join the Fight',
    featured: true,
  },
  {
    name: 'Champion',
    price: '$149',
    period: '/month',
    description: 'Personalized elite training for the best.',
    features: [
      'Unlimited Access',
      '2 Personal Training / Week',
      'Advanced Sparring',
      'Competition Prep',
    ],
    cta: 'Elite Access',
    featured: false,
  },
]

export function Pricing() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll('.pricing-card')
      const header = containerRef.current?.querySelector('.section-header')

      gsap.from(header || null, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        duration: 1.2,
        opacity: 0,
        y: 60,
        ease: 'power4.out',
      })

      gsap.from(cards || [], {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        duration: 1.5,
        opacity: 0,
        y: 100,
        stagger: 0.25,
        rotateX: -15,
        ease: 'power4.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-6 section-header">
           <div className="inline-block bg-primary/10 text-primary border border-primary/20 px-4 py-1 font-black italic uppercase tracking-widest text-xs rounded-lg">
             Investment in Yourself
           </div>
           <h2 className="text-6xl sm:text-7xl font-black italic uppercase leading-none tracking-tighter">
             Competitive Pricing
           </h2>
           <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium leading-relaxed">
             Listing your product prices helps interested customers quickly determine if it suits their budget and needs. Invest in the best training.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 perspective-[2000px]">
          {pricing_plans.map((plan, i) => (
            <Card
              key={i}
              className={`pricing-card relative p-12 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] ${
                plan.featured 
                ? 'border-primary ring-8 ring-primary/5 bg-linear-to-br from-card to-primary/3 scale-105 z-10' 
                : 'border-border'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 p-3 bg-primary text-primary-foreground transform rotate-45 translate-x-12 -translate-y-12 w-32 h-32 flex items-end justify-center pb-2">
                  <span className="text-[10px] font-black uppercase tracking-tighter">POPULAR</span>
                </div>
              )}
              
              <div className="space-y-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-black uppercase italic tracking-tighter">{plan.name}</h3>
                    {plan.featured && <Star className="h-5 w-5 text-primary fill-primary" />}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black italic tracking-tighter text-primary drop-shadow-sm">{plan.price}</span>
                    <span className="text-foreground/50 font-black uppercase tracking-widest text-xs">{plan.period}</span>
                  </div>
                  <p className="text-sm text-foreground/70 font-medium leading-relaxed italic">{plan.description}</p>
                </div>
                
                <div className="h-px bg-linear-to-r from-border to-transparent" />
                
                <ul className="space-y-4 mb-2">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex gap-4 items-center text-sm group/item">
                      <div className="p-1 rounded-full bg-primary/20 text-primary group-hover/item:scale-125 transition-transform duration-300">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="font-bold uppercase tracking-wide opacity-80 group-hover/item:opacity-100 transition-opacity">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-12 space-y-6">
                <Button
                  size="lg"
                  className={`w-full h-16 rounded-none font-black uppercase tracking-[0.2em] text-lg transition-all active:scale-95 ${
                    plan.featured 
                    ? 'shadow-[6px_6px_0px_0px_rgba(220,38,38,0.3)] hover:shadow-none' 
                    : 'border-2 hover:bg-primary hover:text-primary-foreground active:scale-95'
                  }`}
                  variant={plan.featured ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
                <div className="flex flex-col items-center gap-2 opacity-50">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">Instant Setup & Satisfaction Guaranteed</div>
                  <div className="flex gap-1.5 grayscale">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-2.5 h-2.5" />)}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
