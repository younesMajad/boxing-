'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats_data = [
  { label: 'Revenue Growth', value: '54%' },
  { label: 'Projects Completed', value: '+225' },
  { label: 'Expected Revenue', value: '$50M' },
  { label: 'Online Customers', value: '235,403' },
]

export function Stats() {
  const statsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!statsRef.current) return

    const ctx = gsap.context(() => {
      const statValues = statsRef.current?.querySelectorAll('.stat-value')
      
      statValues?.forEach((stat) => {
        const finalValue = stat.getAttribute('data-value')
        const isPercentage = finalValue?.includes('%')
        const isPlus = finalValue?.includes('+')
        const isDollar = finalValue?.includes('$')
        const isComma = finalValue?.includes(',')
        
        const numericValue = parseInt(finalValue?.replace(/[^0-9]/g, '') || '0')

        gsap.to(stat, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          duration: 2.5,
          textContent: numericValue,
          snap: { textContent: 1 },
          ease: 'expo.out',
          onUpdate() {
            const current = parseInt(stat.textContent || '0')
            let displayValue = current.toString()
            
            if (isPercentage) displayValue = current + '%'
            else if (isPlus) displayValue = '+' + current
            else if (isDollar) displayValue = '$' + current + 'M'
            else if (isComma) displayValue = current.toLocaleString()
            
            stat.textContent = displayValue
          },
        })
      })

      const statCards = statsRef.current?.querySelectorAll('.stat-card')
      gsap.from(statCards || [], {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
        duration: 0.8,
        opacity: 0,
        y: 60,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, statsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={statsRef} id="stats" className="py-24 px-4 sm:px-6 lg:px-8 border-y-2 border-primary/20 bg-card relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden flex flex-col items-center justify-center -z-10">
        <div className="text-[20rem] font-black italic uppercase leading-none text-primary brightness-50">STATS</div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats_data.map((stat, i) => (
            <div key={i} className="stat-card relative flex flex-col items-center text-center space-y-4 group">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -m-4 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out" />
              
              <div className="relative">
                <div className="stat-value text-5xl sm:text-6xl font-black text-primary italic tracking-tightest drop-shadow-sm" data-value={stat.value}>
                  0
                </div>
                {/* Decorative dot */}
                <div className="absolute -top-1 -right-4 w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>
              
              <div className="relative text-sm font-black uppercase tracking-[0.2em] text-foreground/60 group-hover:text-primary transition-colors">
                {stat.label}
                <div className="h-0.5 w-0 group-hover:w-full bg-primary mt-1 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
