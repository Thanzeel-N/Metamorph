"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    sub: "Audit & Opportunity",
    body: "We audit your brand, tech stack, and marketing channels to uncover inefficiencies and untapped growth. Every decision starts with data, not assumptions.",
    tags: ["Brand Audit", "Competitor Research", "Growth Mapping"],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Strategize",
    sub: "Blueprint & Roadmap",
    body: "We design an integrated roadmap that bridges identity, media campaigns, and system architecture — all aligned to one measurable outcome: your growth.",
    tags: ["Roadmap Design", "System Architecture", "Campaign Planning"],
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Create",
    sub: "Design & Build",
    body: "Our design, production, and dev teams execute with precision. From pixel-perfect UI to scroll-stopping reels — every asset is built for a specific outcome.",
    tags: ["Brand Design", "Media Production", "Development"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Launch",
    sub: "Deploy & Optimize",
    body: "We deploy, monitor, and continuously improve. Launch day is the start, not the finish — analytics and iteration keep your systems compounding over time.",
    tags: ["Live Deployment", "Analytics Setup", "Iteration"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function ProcessScroll() {
  const [activeIdx, setActiveIdx] = useState(0);
  const stepRefs = useRef([]);

  // IntersectionObserver — track which step is most visible
  useEffect(() => {
    const observers = stepRefs.current.map((el, idx) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx(idx);
        },
        { threshold: 0.55 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="w-full bg-[#080808] border-t border-white/[0.06] relative">

      {/* ── Sticky Fullscreen Background Panel ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0 pointer-events-none">
        {/* Background Images with smooth crossfade */}
        {STEPS.map((step, idx) => (
          <Image
            key={idx}
            src={step.img}
            alt={step.title}
            fill
            sizes="100vw"
            className="object-cover transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: activeIdx === idx ? 1 : 0,
              filter: "brightness(0.35) saturate(0.7)",
            }}
          />
        ))}

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/75 to-[#080808]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />

        {/* Large Decorative Step Number Background Overlay */}
        <div className="absolute bottom-12 right-12 md:right-24 z-10">
          <span
            className="font-display font-extrabold text-[12rem] md:text-[18rem] leading-none select-none transition-opacity duration-1000 block"
            style={{
              WebkitTextStroke: "1px rgba(172,229,57,0.06)",
              color: "transparent",
            }}
          >
            {STEPS[activeIdx].num}
          </span>
        </div>
      </div>

      {/* ── Scrolling Content (Positioned over sticky background) ── */}
      <div className="relative z-10 -mt-[100vh]">

        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-14 pt-20 flex items-end justify-between relative z-20">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-px bg-[#ace539]/60" />
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#ace539]/70">
                Our Process
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-[1.05]">
              How we work.
            </h2>
          </div>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 hover:text-[#ace539] transition-colors duration-300 group"
          >
            <span className="w-6 h-px bg-white/20 group-hover:bg-[#ace539] group-hover:w-10 transition-all duration-300" />
            Start a Project
          </Link>
        </div>

        {/* Steps Scroll Layout */}
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => (stepRefs.current[idx] = el)}
              className="h-screen flex flex-col justify-center relative"
            >
              <div className="max-w-2xl relative">
                {/* Step Eyebrow */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-6 bg-[#ace539]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#ace539]/80 font-bold">
                    {step.num} — {step.sub}
                  </span>
                </div>

                {/* Step Title */}
                <h3
                  className="font-display font-extrabold text-white leading-[0.9] tracking-tight mb-6"
                  style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
                >
                  {step.title}
                </h3>

                {/* Step Body Description */}
                <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                  {step.body}
                </p>

                {/* Step Deliverables Tags */}
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag, t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-[#ace539]/60 border border-[#ace539]/15 bg-[#ace539]/[0.04] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Final Step Call-To-Actions */}
                {idx === STEPS.length - 1 && (
                  <div className="mt-10 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact"
                      className="group relative px-7 py-3.5 bg-[#ace539] text-[#080808] font-bold text-xs uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(172,229,57,0.3)] inline-flex items-center justify-center"
                    >
                      <span className="relative z-10">Start Your Project</span>
                      <span className="absolute inset-0 bg-white translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />
                    </Link>
                    <Link
                      href="/process"
                      className="px-7 py-3.5 border border-white/10 text-white/50 font-bold text-xs uppercase tracking-[0.2em] hover:border-white/25 hover:text-white/80 transition-all duration-300 inline-flex items-center justify-center bg-black/40 backdrop-blur-sm"
                    >
                      Full Process →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom divider ── */}
      <div className="h-px bg-white/[0.06] relative z-20" />
    </section>
  );
}
