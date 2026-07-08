"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navClass = scrolled
    ? "top-4 max-w-5xl mx-auto glassmorphic rounded-full px-6 py-3 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
    : "top-0 max-w-7xl mx-auto px-6 py-6 border-b border-transparent bg-transparent";

  const linkClass = (path) =>
    `font-medium text-sm transition-colors py-2 ${pathname === path || pathname.startsWith(path + "/")
      ? "text-[#ace539]"
      : "text-slate-300 hover:text-white"
    }`;

  return (
    <>
      <nav className={`fixed left-0 right-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${navClass}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center select-none hover:opacity-80 transition-opacity" aria-label="Home">
            <div className="relative h-9 md:h-11 w-32 md:w-40">
              <Image 
                src="/images/logo/metamorph1.png" 
                alt="Metamorph Logo" 
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/services" className={linkClass("/services")}>Services</Link>
            <Link href="/works" className={linkClass("/works")}>Works</Link>
            <Link href="/about" className={linkClass("/about")}>About</Link>
            <Link href="/clients" className={linkClass("/clients")}>Clients</Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="group px-5 py-2 bg-white text-black hover:bg-[#ace539] hover:text-[#12130f] font-bold text-sm rounded-full transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(172,229,57,0.3)]">
              Start Project <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2" aria-label="Toggle mobile menu" aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl flex flex-col p-8 pt-32 transition-transform duration-500 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col gap-8 flex-grow">
          <Link href="/services" className="font-display font-extrabold text-4xl text-white hover:text-[#ace539] transition-colors">Services</Link>
          <Link href="/works" className="font-display font-extrabold text-4xl text-white hover:text-[#ace539] transition-colors">Works</Link>
          <Link href="/about" className="font-display font-extrabold text-4xl text-white hover:text-[#ace539] transition-colors">About</Link>
          <Link href="/contact" className="font-display font-extrabold text-4xl text-white hover:text-[#ace539] transition-colors">Contact</Link>
        </div>
        <Link href="/contact" className="w-full py-4 bg-[#ace539] text-[#12130f] font-bold text-center rounded-full text-lg shadow-lg hover:bg-white transition-colors duration-300">Start a Project →</Link>
      </div>
    </>
  );
}
