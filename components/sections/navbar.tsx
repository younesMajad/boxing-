'use client'

import  { useEffect, useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Menu, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer relative">
          <div className="w-12 h-12 rounded-none bg-primary text-primary-foreground flex items-center justify-center font-black italic text-2xl -skew-x-12 border-2 border-primary group-hover:bg-transparent group-hover:text-primary transition-all duration-300 shadow-lg shadow-primary/20 rotate-[-10deg] group-hover:rotate-0">
            B
          </div>
          <span className="font-black text-3xl uppercase tracking-tighter italic group-hover:text-primary transition-all group-hover:tracking-widest">Boxer</span>
          {/* Logo dot */}
          <div className="w-2 h-2 rounded-full bg-primary absolute -right-3 bottom-1 group-hover:translate-x-2 transition-transform" />
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Stats', href: '#stats' },
          ].map((link, i) => (
            <a 
              key={i}
              href={link.href} 
              className="text-xs font-black uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-all relative group overflow-hidden"
            >
              {link.label}
              <div className="h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300 -mb-1" />
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-5">
          <ThemeToggle />
          <Button className="rounded-none h-12 px-8 font-black uppercase tracking-widest hidden sm:flex italic cursor-pointer shadow-[4px_4px_0px_0px_rgba(220,38,38,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            Get Started
          </Button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay (simple for now) */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-3xl border-b border-border transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-[300px] opacity-100 py-8' : 'max-h-0 opacity-0 py-0'}`}>
         <div className="flex flex-col items-center gap-6 px-4">
            <a href="#features" className="text-xl font-black uppercase italic tracking-widest hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#pricing" className="text-xl font-black uppercase italic tracking-widest hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#stats" className="text-xl font-black uppercase italic tracking-widest hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Stats</a>
            <Button size="lg" className="w-full rounded-none font-black uppercase tracking-widest h-14 italic hover:text-2xl" onClick={() => setMobileMenuOpen(false)}>Get Started</Button>
         </div>
      </div>
    </nav>
  )
}
