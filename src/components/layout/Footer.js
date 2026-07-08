"use client";
import Link from "next/link";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandBehance, IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 md:pt-40 overflow-hidden relative border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top: Massive CTA Statement */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-40 gap-12">
          <h2 className="text-5xl md:text-[7rem] lg:text-[9rem] font-display font-extrabold tracking-tighter leading-[0.85] max-w-4xl">
            Let's build <br/>
            something <br/>
            <span className="text-[#ace539] italic pr-4">iconic.</span>
          </h2>
          <Link href="/contact" className="group relative flex items-center justify-center w-32 h-32 md:w-48 md:h-48 bg-[#ace539] text-black rounded-full hover:scale-105 transition-transform duration-500 shrink-0">
            <span className="font-display font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-center relative z-10">
              Get In<br/>Touch
            </span>
            <div className="absolute inset-0 border border-[#ace539] rounded-full scale-110 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700" />
          </Link>
        </div>

        {/* Middle: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-20 md:mb-32">
          <div className="col-span-2 md:col-span-1">
            <div className="relative h-14 w-40">
              <Image 
                src="/images/logo/metamorph1.png" 
                alt="Metamorph Logo" 
                fill
                sizes="160px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-slate-400 mt-6 text-sm max-w-xs font-sans leading-relaxed">
              From identity to IT — strategy, design, media, and tech under one roof.
            </p>
            <div className="flex items-center gap-4 pt-8">
              <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-[#ace539] transition-colors"><IconBrandLinkedin className="w-5 h-5" /></a>
              <a href="#" aria-label="Instagram" className="text-slate-500 hover:text-[#ace539] transition-colors"><IconBrandInstagram className="w-5 h-5" /></a>
              <a href="#" aria-label="Behance" className="text-slate-500 hover:text-[#ace539] transition-colors"><IconBrandBehance className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-slate-500 mb-6">Services</h4>
            <ul className="space-y-4 text-sm md:text-base font-display text-slate-300">
              <li><Link href="/services#branding" className="hover:text-[#ace539] transition-colors inline-flex items-center gap-1 group">Branding <IconArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link href="/services#marketing" className="hover:text-[#ace539] transition-colors inline-flex items-center gap-1 group">Marketing <IconArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link href="/services#media" className="hover:text-[#ace539] transition-colors inline-flex items-center gap-1 group">Media <IconArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link href="/services#it" className="hover:text-[#ace539] transition-colors inline-flex items-center gap-1 group">IT & Tech <IconArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-slate-500 mb-6">Company</h4>
            <ul className="space-y-4 text-sm md:text-base font-display text-slate-300">
              <li><Link href="/archive" className="hover:text-white transition-colors">Poster Archive</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-slate-500 mb-6">Connect</h4>
            <div className="space-y-6 text-sm md:text-base font-display text-slate-300">
              <div>
                <a href="mailto:Hello@metamorph.live" className="text-xl md:text-2xl text-white hover:text-[#ace539] transition-colors underline decoration-white/20 underline-offset-4 hover:decoration-[#ace539]">
                  Hello@metamorph.live
                </a>
              </div>
              <div className="pt-2">
                <a href="tel:+919605109910" className="block text-slate-300 hover:text-[#ace539] transition-colors mb-2">+91 96051 09910</a>
                <span className="block text-slate-500 mb-1">Majestic Tower, Vengara</span>
                <span>Malappuram, Kerala</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Massive Brand Text & Copyright */}
      <div className="w-full relative mt-10">
        
        {/* Copyright Bar Overlay */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full z-20 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#ace539] mix-blend-difference pointer-events-none">
          <span>© {currentYear} Metamorph</span>
          <div className="flex gap-8 pointer-events-auto mix-blend-normal text-slate-500 hover:text-white">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>

        {/* Massive Text */}
        <h1 className="text-[14vw] leading-none font-display font-black text-white/5 text-center select-none tracking-tighter w-full overflow-hidden whitespace-nowrap">
          METAMORPH
        </h1>
      </div>

    </footer>
  );
}
