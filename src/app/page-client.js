"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IconArrowRight,
  IconPalette,
  IconSpeakerphone,
  IconCamera,
  IconCode,
  IconQuote
} from "@tabler/icons-react";

import { services, clients, testimonials, processSteps, stats } from "@/lib/data";
import SplitText from "@/components/ui/SplitText";
import ScrollHighlight from "@/components/ui/ScrollHighlight";
import CountUp from "@/components/ui/CountUp";
import WorkstationsScroll from "@/components/ui/WorkstationsScroll";
import ProcessScroll from "@/components/ui/ProcessScroll";

export default function HomeClient() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroImagesRef = useRef(null);
  const servicesGridRef = useRef(null);
  const processSectionRef = useRef(null);
  const connectorLineRef = useRef(null);

  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentTestimonialIdx((prev) => (prev + 1) % testimonials.length);
        setIsFading(false);
      }, 500); // 500ms fade duration
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    // Sub-timeline for hero animations
    if (heroRef.current && heroContentRef.current) {
      const spotlight = heroRef.current.querySelector('.hero-spotlight');

      if (spotlight) {
        // Use gsap.quickTo for highly performant mouse tracking
        const xTo = gsap.quickTo(spotlight, "x", { duration: 0.6, ease: "power3.out" });
        const yTo = gsap.quickTo(spotlight, "y", { duration: 0.6, ease: "power3.out" });

        const onMouseMove = (e) => {
          const rect = heroRef.current.getBoundingClientRect();
          // Assuming the spotlight is 800x800, we subtract 400 to center it on the cursor
          xTo(e.clientX - rect.left - 400);
          yTo(e.clientY - rect.top - 400);
        };

        heroRef.current.addEventListener("mousemove", onMouseMove);
      }

      // Foreground content fade up on load
      gsap.fromTo(heroContentRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.2 }
      );
    }



    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Map services to Tabler Icons
  const serviceIcons = {
    branding: <IconPalette className="w-8 h-8 text-[#ace539]" />,
    marketing: <IconSpeakerphone className="w-8 h-8 text-[#ace539]" />,
    media: <IconCamera className="w-8 h-8 text-[#ace539]" />,
    it: <IconCode className="w-8 h-8 text-[#ace539]" />,
  };



  // Split logo wall into 2 rows of 5
  const logoRow1 = clients.slice(0, 5);
  const logoRow2 = clients.slice(5, 10);

  // Poster Archive Images (Local Assets)
  const postersRow1 = [
    "/images/posters/poster1.jpeg",
    "/images/posters/poster2.jpg",
    "/images/posters/poster3.jpg",
    "/images/posters/poster4.jpg",
    "/images/posters/poster5.jpg",
  ];

  const postersRow2 = [
    "/images/posters/poster6.jpg",
    "/images/posters/poster7.jpg",
    "/images/posters/poster8.jpg",
    "/images/posters/poster9.jpg",
    "/images/posters/poster10.jpg",
  ];

  // Get current testimonial based on state
  const currentTestimonial = testimonials[currentTestimonialIdx] || testimonials[0];

  return (
    <div ref={containerRef} className="w-full relative" style={{ backgroundColor: "#12130f" }}>

      {/* SECTION 1: HERO — Modern Minimal Animated */}
      <section
        ref={heroRef}
        className="bg-[#080808] min-h-screen w-full relative overflow-hidden flex flex-col border-b border-white/[0.06]"
      >
        {/* ── Layered Background ── */}
        <div className="absolute inset-0 z-0">
          {/* Base noise texture (CSS) */}
          <div className="absolute inset-0 bg-[#080808]" />
          {/* Radial lime glow — top-left */}
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-[#ace539]/[0.06] rounded-full filter blur-[140px] animate-[heroGlow_8s_ease-in-out_infinite_alternate]" />
          {/* Radial subtle glow — bottom-right */}
          <div className="absolute -bottom-60 -right-40 w-[600px] h-[600px] bg-[#ace539]/[0.03] rounded-full filter blur-[120px]" />
          {/* Fine grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px]" />
          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,8,8,0.95)_100%)]" />
        </div>

        {/* ── Center Hero Content ── */}
        <div
          ref={heroContentRef}
          className="flex-grow flex flex-col items-center justify-center text-center px-6 pt-12 pb-24 md:pt-16 md:pb-28 relative z-20"
        >
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-3 mb-8 hero-eyebrow"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            <div className="h-px w-8 bg-[#ace539]/60" />
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#ace539]/80">
              Premium Digital Agency
            </span>
            <div className="h-px w-8 bg-[#ace539]/60" />
          </div>

          {/* Main Headline — word-by-word reveal via CSS */}
          <h1 className="font-display font-extrabold tracking-tight leading-[0.9] mb-6 hero-headline">
            {/* Line 1 */}
            <span className="block overflow-hidden">
              <span
                className="block text-white text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8.5rem] xl:text-[9.5rem]"
                style={{ transform: "translateY(110%)", animation: "heroLineUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s forwards" }}
              >
                MORPH
              </span>
            </span>
            {/* Line 2 — outlined */}
            <span className="block overflow-hidden">
              <span
                className="block text-transparent text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8.5rem] xl:text-[9.5rem]"
                style={{
                  WebkitTextStroke: "1.5px rgba(172,229,57,0.4)",
                  transform: "translateY(110%)",
                  animation: "heroLineUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s forwards",
                }}
              >
                INTO
              </span>
            </span>
            {/* Line 3 — accent highlight */}
            <span className="block overflow-hidden">
              <span
                className="block text-[#ace539] text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8.5rem] xl:text-[9.5rem]"
                style={{ transform: "translateY(110%)", animation: "heroLineUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s forwards" }}
              >
                GROWTH.
              </span>
            </span>
          </h1>

          {/* Sub-copy */}
          <p
            className="text-slate-400 text-base md:text-lg max-w-md leading-relaxed hero-sub pb-4"
            style={{ opacity: 0, transform: "translateY(16px)", animation: "heroFadeUp 0.8s ease 1.1s forwards" }}
          >
            Branding · Growth Marketing · Media Production · IT Systems
          </p>
        </div>

        {/* ── Bottom Scrolling Ticker ── */}
        <div
          className="relative z-20 border-t border-white/[0.06] overflow-hidden hero-ticker"
          style={{ opacity: 0, animation: "heroFadeUp 0.6s ease 1.7s forwards" }}
        >
          <div className="flex animate-[heroTicker_22s_linear_infinite] w-max">
            {[...Array(3)].map((_, rep) => (
              <div key={rep} className="flex items-center">
                {["Branding", "Growth Marketing", "Media Production", "IT Solutions", "AI & Automations"].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 px-6 py-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/80 whitespace-nowrap">
                      {item}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#ace539]/60 flex-shrink-0" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Scroll Indicator ── */}
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 hero-scroll"
          style={{ opacity: 0, animation: "heroFadeUp 0.6s ease 2s forwards" }}
        >
          <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-[scrollDot_1.8s_ease-in-out_infinite]" />
          </div>
          <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">Scroll</span>
        </div>

        {/* Injected keyframes */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes heroLineUp {
            to { transform: translateY(0); }
          }
          @keyframes heroFadeUp {
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes heroGlow {
            0% { transform: translate(0, 0) scale(1); opacity: 0.06; }
            100% { transform: translate(60px, 40px) scale(1.15); opacity: 0.1; }
          }
          @keyframes heroTicker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          @keyframes scrollDot {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(10px); opacity: 0.3; }
          }
        ` }} />
      </section>

      {/* SECTION 2: SERVICES INTRO (Scroll-driven pin) */}
      <ScrollHighlight />

      {/* SECTION 3: EXPANDING DRAWERS (Capabilities) */}
      <section className="bg-[#1a1b16] border-t border-b border-white/10" ref={servicesGridRef}>
        <div className="w-full h-[600px] md:h-[700px] flex flex-col md:flex-row overflow-hidden">

          {/* Drawer 1: Branding */}
          <div className="group relative flex-1 hover:flex-[3] md:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-b md:border-b-0 md:border-r border-white/10 overflow-hidden cursor-pointer bg-transparent">
            <div className="absolute inset-0 w-full h-full">
              <Image src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop" alt="Branding Strategy and Design" fill sizes="(max-width: 768px) 100vw, 33vw" priority className="object-cover opacity-20 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12130f] via-[#12130f]/80 to-transparent"></div>
            </div>

            {/* Collapsed State (Default) */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-end opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <span className="text-[#ace539] font-display font-bold text-4xl md:text-6xl md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-32 md:left-8">01</span>
              <h3 className="text-white font-display font-bold text-2xl md:text-3xl uppercase tracking-widest md:-rotate-90 md:origin-bottom-left whitespace-nowrap md:absolute md:bottom-12 md:left-24 lg:md:left-28">Branding</h3>
            </div>

            {/* Expanded State (Hover) */}
            <div className="absolute inset-0 p-6 md:p-16 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none group-hover:pointer-events-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ace539] text-[#12130f] rounded-full flex items-center justify-center">
                  {serviceIcons.branding}
                </div>
                <span className="text-[#ace539] font-display font-bold text-lg md:text-2xl uppercase tracking-widest">01 — Branding</span>
              </div>
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-display font-extrabold mb-4 max-w-2xl leading-tight">Identity Built to Scale.</h2>
              <p className="text-slate-300 text-base md:text-xl max-w-lg mb-8 leading-relaxed">
                Your brand is the first impression and the lasting one. We design identities that are distinct, purposeful, and dominate their markets.
              </p>
              <Link href="/services#branding" className="text-white font-bold text-sm md:text-base uppercase tracking-wider flex items-center gap-2 hover:text-[#ace539] transition-colors w-fit">
                Explore Branding <IconArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Drawer 2: Marketing */}
          <div className="group relative flex-1 hover:flex-[3] md:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-b md:border-b-0 md:border-r border-white/10 overflow-hidden cursor-pointer bg-transparent">
            <div className="absolute inset-0 w-full h-full">
              <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" alt="Digital Marketing and Growth" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-20 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12130f] via-[#12130f]/80 to-transparent"></div>
            </div>

            <div className="absolute inset-0 p-6 md:p-8 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-end opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <span className="text-[#ace539] font-display font-bold text-4xl md:text-6xl md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-32 md:left-8">02</span>
              <h3 className="text-white font-display font-bold text-2xl md:text-3xl uppercase tracking-widest md:-rotate-90 md:origin-bottom-left whitespace-nowrap md:absolute md:bottom-12 md:left-24 lg:md:left-28">Marketing</h3>
            </div>

            <div className="absolute inset-0 p-6 md:p-16 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none group-hover:pointer-events-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ace539] text-[#12130f] rounded-full flex items-center justify-center">
                  {serviceIcons.marketing}
                </div>
                <span className="text-[#ace539] font-display font-bold text-lg md:text-2xl uppercase tracking-widest">02 — Marketing</span>
              </div>
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-display font-extrabold mb-4 max-w-2xl leading-tight">Strategy meets Execution.</h2>
              <p className="text-slate-300 text-base md:text-xl max-w-lg mb-8 leading-relaxed">
                We build marketing systems that attract the right audience and turn them into customers through data-driven campaigns.
              </p>
              <Link href="/services#marketing" className="text-white font-bold text-sm md:text-base uppercase tracking-wider flex items-center gap-2 hover:text-[#ace539] transition-colors w-fit">
                Explore Marketing <IconArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Drawer 3: Media */}
          <div className="group relative flex-1 hover:flex-[3] md:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-b md:border-b-0 md:border-r border-white/10 overflow-hidden cursor-pointer bg-transparent">
            <div className="absolute inset-0 w-full h-full">
              <Image src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop" alt="Media Production and Photography" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-20 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12130f] via-[#12130f]/80 to-transparent"></div>
            </div>

            <div className="absolute inset-0 p-6 md:p-8 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-end opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <span className="text-[#ace539] font-display font-bold text-4xl md:text-6xl md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-32 md:left-8">03</span>
              <h3 className="text-white font-display font-bold text-2xl md:text-3xl uppercase tracking-widest md:-rotate-90 md:origin-bottom-left whitespace-nowrap md:absolute md:bottom-12 md:left-24 lg:md:left-28">Media</h3>
            </div>

            <div className="absolute inset-0 p-6 md:p-16 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none group-hover:pointer-events-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ace539] text-[#12130f] rounded-full flex items-center justify-center">
                  {serviceIcons.media}
                </div>
                <span className="text-[#ace539] font-display font-bold text-lg md:text-2xl uppercase tracking-widest">03 — Media Prod</span>
              </div>
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-display font-extrabold mb-4 max-w-2xl leading-tight">Content that Converts.</h2>
              <p className="text-slate-300 text-base md:text-xl max-w-lg mb-8 leading-relaxed">
                In a scroll-first world, content is currency. We produce media (reels, motion, photography) that stops thumbs and starts conversations.
              </p>
              <Link href="/services#media" className="text-white font-bold text-sm md:text-base uppercase tracking-wider flex items-center gap-2 hover:text-[#ace539] transition-colors w-fit">
                Explore Media <IconArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Drawer 4: IT & Tech */}
          <div className="group relative flex-1 hover:flex-[3] md:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-pointer bg-transparent">
            <div className="absolute inset-0 w-full h-full">
              <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" alt="IT Solutions and Web Development" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-20 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12130f] via-[#12130f]/80 to-transparent"></div>
            </div>

            <div className="absolute inset-0 p-6 md:p-8 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-end opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <span className="text-[#ace539] font-display font-bold text-4xl md:text-6xl md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-32 md:left-8">04</span>
              <h3 className="text-white font-display font-bold text-2xl md:text-3xl uppercase tracking-widest md:-rotate-90 md:origin-bottom-left whitespace-nowrap md:absolute md:bottom-12 md:left-24 lg:md:left-28">IT Solutions</h3>
            </div>

            <div className="absolute inset-0 p-6 md:p-16 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none group-hover:pointer-events-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ace539] text-[#12130f] rounded-full flex items-center justify-center">
                  {serviceIcons.it}
                </div>
                <span className="text-[#ace539] font-display font-bold text-lg md:text-2xl uppercase tracking-widest">04 — IT Stack</span>
              </div>
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-display font-extrabold mb-4 max-w-2xl leading-tight">High-Performance Tech.</h2>
              <p className="text-slate-300 text-base md:text-xl max-w-lg mb-8 leading-relaxed">
                Your digital infrastructure should work as hard as your team. We build scalable Next.js websites, platforms, custom tools, and automations.
              </p>
              <Link href="/services#it" className="text-white font-bold text-sm md:text-base uppercase tracking-wider flex items-center gap-2 hover:text-[#ace539] transition-colors w-fit">
                Explore IT Stack <IconArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: HOW WE WORK — Split-screen sticky scroll */}
      <ProcessScroll />

      {/* SECTION 5: WORKSTATIONS (Culture) */}
      <section className="bg-[#12130f] py-24">
        <WorkstationsScroll />
      </section>

      {/* SECTION 6: POSTER ARCHIVE (Visual Portfolio) */}
      <section className="bg-[#161616] py-24 overflow-hidden flex flex-col gap-6 md:gap-8 group/archive relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#161616]/10 to-transparent pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto px-6 w-full mb-8 relative z-20">
          <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#ace539] block mb-2">Visual Archive</span>
          <h2 className="text-white text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            Client Posters & Assets
          </h2>
        </div>

        {/* Top Row: Scrolling Left */}
        <div className="flex w-full relative z-0">
          <div className="animate-ticker gap-6 md:gap-8 px-3 md:px-4">
            {[...postersRow1, ...postersRow1].map((img, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-[200px] h-[260px] md:w-[320px] md:h-[400px] shrink-0 rounded-2xl overflow-hidden relative cursor-pointer group/poster filter grayscale-[50%] brightness-75 hover:grayscale-0 hover:brightness-110 transition-all duration-500 hover:scale-[1.03] hover:z-20 hover:shadow-[0_0_50px_rgba(172,229,57,0.15)]"
              >
                <Image src={img} alt="Client Poster" fill sizes="(max-width: 768px) 200px, 320px" className="object-cover" />
                <div className="absolute inset-0 bg-[#ace539]/20 mix-blend-overlay opacity-0 group-hover/poster:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: Scrolling Right */}
        <div className="flex w-full relative z-0">
          {/* We use -ml-[200px] to offset the second row so the posters interleave visually */}
          <div className="animate-ticker-reverse gap-6 md:gap-8 px-3 md:px-4 -ml-[140px] md:-ml-[200px]">
            {[...postersRow2, ...postersRow2].map((img, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-[200px] h-[260px] md:w-[320px] md:h-[400px] shrink-0 rounded-2xl overflow-hidden relative cursor-pointer group/poster filter grayscale-[50%] brightness-75 hover:grayscale-0 hover:brightness-110 transition-all duration-500 hover:scale-[1.03] hover:z-20 hover:shadow-[0_0_50px_rgba(172,229,57,0.15)]"
              >
                <Image src={img} alt="Client Poster" fill sizes="(max-width: 768px) 200px, 320px" className="object-cover" />
                <div className="absolute inset-0 bg-[#ace539]/20 mix-blend-overlay opacity-0 group-hover/poster:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TRUSTED CLIENTS (Single Marquee) */}
      <section className="bg-[#0a0a0a] py-20 md:py-32 relative overflow-hidden flex flex-col items-center border-t border-white/5">
        <div className="w-full relative z-10">
          <div className="text-center mb-16 px-6">
            <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#ace539] block mb-2">Our Network</span>
            <h2 className="text-white text-3xl md:text-5xl font-display font-bold tracking-tight">
              Trusted by industry leaders
            </h2>
          </div>

          <div className="flex w-full overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

            {/* Single Continuous Marquee */}
            <div className="animate-ticker flex items-center gap-16 md:gap-32 px-8">
              {[...logoRow1, ...logoRow2, ...logoRow1, ...logoRow2].map((logo, idx) => (
                <div
                  key={`marquee-${idx}`}
                  className={`shrink-0 flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-300 group ${logo.bgWhite ? "bg-white p-2 md:p-3 rounded-lg" : ""} ${logo.hoverBgWhite ? "p-2 md:p-3 rounded-lg hover:bg-white" : ""} ${logo.scale ? "h-16 md:h-20 min-w-32 md:min-w-40" : "h-12 md:h-14 min-w-24 md:min-w-28"}`}
                >
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    width={200}
                    height={80}
                    className={`object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300 ${logo.scale ? "max-w-[160px] max-h-16 md:max-w-[200px] md:max-h-20" : "max-w-[120px] max-h-12"}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIAL (Simple & Clean) */}
      <section className="bg-[#12130f] py-24 md:py-32 relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          {/* Minimal Quote Icon */}
          <IconQuote className="w-8 h-8 text-[#ace539] mb-8 opacity-80" />

          <div className={`transition-opacity duration-500 flex flex-col items-center ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            <p className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-slate-200 leading-[1.4] mb-10">
              "{currentTestimonial.quote}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1a1b16] border border-white/10 text-white flex items-center justify-center font-display font-bold text-sm shrink-0">
                {currentTestimonial.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="text-left">
                <span className="block font-display font-bold text-base text-white tracking-wide">
                  {currentTestimonial.name}
                </span>
                <span className="block font-sans text-xs text-slate-400 uppercase tracking-widest mt-0.5">
                  {currentTestimonial.company}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
