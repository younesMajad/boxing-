'use client'

import React from 'react'
import {  Heart, Youtube, Instagram, Facebook } from 'lucide-react'

const footer_links = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-card text-foreground pt-32 pb-12 border-t border-border px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-border/20 hidden lg:block" />
      <div className="absolute right-10 top-0 bottom-0 w-px bg-border/20 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 justify-between items-start">
          <div className="space-y-5 max-w-sm">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-none bg-primary text-primary-foreground flex items-center justify-center font-black italic text-xl -skew-x-12 border-2 border-primary">
                 B
               </div>
               <span className="font-black text-2xl uppercase tracking-tighter italic">Boxer</span>
            </div>
            
            <p className="text-foreground/70 text-lg font-medium leading-relaxed italic border-l-4 border-primary/20 pl-6 py-2 bg-muted/20">
              Unleash your potential and master the sweet science with the world's most elite boxing community.
            </p>
            
            <div className="flex gap-6 ">
              <a href="#" className="p-3 bg-muted/40 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"><Facebook className="w-5 h-5 shadow-sm" /></a>
              <a href="#" className="p-3 bg-muted/40 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"><Instagram className="w-5 h-5 shadow-sm" /></a>
              <a href="#" className="p-3 bg-muted/40 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"><Youtube className="w-5 h-5 shadow-sm" /></a>
            </div>
          </div>
          
          <div className=" grid grid-cols-2 pl-25 sm:grid-cols-3 gap-12 lg:gap-20">
            {footer_links.map((section, i) => (
              <div key={i} className="space-y-6"> 
                <h3 className="font-black  uppercase tracking-[0.3em] text-[14px] text-primary italic drop-shadow-sm ">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} className="text-foreground/60 hover:text-primary transition-all text-sm font-bold uppercase tracking-wider group flex items-center gap-2">
                        <span className="w-0 h-[2px] bg-primary group-hover:w-4 transition-all duration-300" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="h-px bg-linear-to-r from-transparent via-border/50 to-transparent" />
        
        <div className="flex flex-col md:flex-row items-center justify-between text-[14px] font-black uppercase tracking-[0.3em] text-foreground/40 italic gap-2">
          <p className="flex items-center gap-2">&copy; {new Date().getFullYear()} Boxer. Built with <Heart className="w-4 h-5 text-red-600 fill-red-600 " /> for champions.</p>
        </div>
      </div>
      
      {/* Decorative large background text */}
      <div className="absolute -bottom-10 right-0 text-[10rem] font-black italic uppercase text-primary opacity-[0.1] -skew-x-12 translate-y-1/2 translate-x-1/5 pointer-events-none select-none">BOXER ACADEMY</div>
    </footer>
  )
}
