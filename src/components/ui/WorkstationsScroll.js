"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IconPalette,
  IconSpeakerphone,
  IconMovie,
  IconCode,
  IconSettingsAutomation,
  IconChevronRight,
} from "@tabler/icons-react";

export default function WorkstationsScroll() {
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setPrevTab] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tabsRef = useRef(null);
  const displayRef = useRef(null);
  const screenRef = useRef(null);
  const lineRef = useRef(null);

  const workstations = [
    {
      specialist: "Vipin Das",
      role: "Creative Head",
      service: "Branding",
      task: "Vector Identity Paths",
      description:
        "Vipin is aligning the visual anchor coordinates for Luna Beverage's retro-futuristic packaging, refining typography tracking and defining vector bezier curves.",
      icon: <IconPalette className="w-4 h-4" />,
      accent: "#ace539",
      screen: (
        <div className="w-full h-full bg-white text-[#020349] p-5 flex flex-col justify-between font-mono text-[9px] relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0ea_1px,transparent_1px),linear-gradient(to_bottom,#f0f0ea_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
          <div className="flex justify-between items-center border-b border-[#020349]/10 pb-2 z-10 relative">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ace539]" />
              luna_can_wrap_v2.ai *
            </span>
            <span className="text-[#8ab82e] font-bold tracking-wider">GRID ACCURATE</span>
          </div>
          <div className="flex-grow flex items-center justify-center relative z-10">
            <svg className="w-32 h-32" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(2, 3, 73, 0.08)" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(2, 3, 73, 0.08)" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(2, 3, 73, 0.08)" strokeWidth="1" strokeDasharray="2,2" />
              <path d="M 50 15 C 30 15, 15 30, 15 50 C 15 70, 30 85, 50 85" fill="none" stroke="#020349" strokeWidth="4" />
              <path d="M 50 15 C 70 15, 85 30, 85 50" fill="none" stroke="#ace539" strokeWidth="4" />
              <line x1="15" y1="50" x2="15" y2="30" stroke="#8ab82e" strokeWidth="1" />
              <circle cx="15" cy="30" r="2" fill="#8ab82e" />
              <circle cx="15" cy="50" r="2" fill="#020349" />
              <circle cx="85" cy="50" r="2" fill="#ace539" />
              <circle cx="50" cy="15" r="2" fill="#020349" />
            </svg>
            <div className="absolute bottom-2 right-2 bg-[#020349] text-white p-1.5 rounded-sm text-[7px] font-sans">
              <div>P: (15.2, 50.0)</div>
              <div>H: (15.0, 30.0)</div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[#8ab82e] border-t border-[#020349]/5 pt-2 z-10 relative">
            <div className="flex gap-1.5">
              <span className="bg-[#020349] text-white px-2 py-0.5 rounded-sm">Navy</span>
              <span className="bg-[#ace539] text-[#020349] px-2 py-0.5 rounded-sm">Lime</span>
              <span className="bg-[#f5f5f0] text-[#020349] px-2 py-0.5 rounded-sm border border-slate-200">Neutral</span>
            </div>
            <span>Scale: 100%</span>
          </div>
        </div>
      ),
    },
    {
      specialist: "Khairunnisa K",
      role: "Digital Marketing Head",
      service: "Marketing",
      task: "Paid Funnel Acquisition",
      description:
        "Khairunnisa is auditing an active social ad account, allocating budgets to high-converting keyword cohorts and checking real-time funnel ROI.",
      icon: <IconSpeakerphone className="w-4 h-4" />,
      accent: "#ace539",
      screen: (
        <div className="w-full h-full bg-[#0a0c24] text-white p-5 flex flex-col justify-between font-mono text-[9px] select-none">
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ace539] animate-pulse" />
              apex_ads_dashboard.panel
            </span>
            <span className="text-[#ace539] font-bold">● LIVE CAMPAIGN</span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2">
            {[
              { label: "Daily Spend", val: "$450.00", accent: true },
              { label: "Total Leads", val: "2,481", accent: false },
              { label: "ROAS", val: "3.2x", accent: true },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-2 rounded-sm">
                <div className="text-slate-400 text-[7px]">{item.label}</div>
                <div className={`text-sm font-bold mt-1 ${item.accent ? "text-[#ace539]" : "text-white"}`}>{item.val}</div>
              </div>
            ))}
          </div>
          <div className="flex-grow flex flex-col justify-end h-20 my-1 border-b border-l border-white/10 relative">
            <svg className="w-full h-16" viewBox="0 0 100 50">
              <defs>
                <linearGradient id="chartGrad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ace539" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ace539" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="12" x2="100" y2="12" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              <line x1="0" y1="37" x2="100" y2="37" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              <path d="M 0 45 Q 20 38, 40 42 T 80 15 T 100 5 L 100 50 L 0 50 Z" fill="url(#chartGrad2)" />
              <path d="M 0 45 Q 20 38, 40 42 T 80 15 T 100 5" fill="none" stroke="#ace539" strokeWidth="1.5" />
            </svg>
            <div className="absolute top-1 left-1.5 text-[7px] bg-[#020349] border border-[#ace539]/20 px-1.5 py-0.5 rounded-sm">
              Conversions +18%
            </div>
          </div>
          <div className="flex justify-between items-center text-slate-400 border-t border-white/10 pt-2">
            <span>CPM: $8.40</span>
            <span>CTR: 4.12%</span>
          </div>
        </div>
      ),
    },
    {
      specialist: "Anshif",
      role: "Branding & VFX Coordinator",
      service: "Media Production",
      task: "Timeline Track Grade",
      description:
        "Anshif is grading high-retention vertical reels, adjusting color offsets and syncing keyframes for animated text assets.",
      icon: <IconMovie className="w-4 h-4" />,
      accent: "#ace539",
      screen: (
        <div className="w-full h-full bg-[#18181b] text-white p-5 flex flex-col justify-between font-mono text-[9px] select-none">
          <div className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              vibe_reel_04.prproj
            </span>
            <span className="text-[#ace539] font-bold">RENDERING (60 FPS)</span>
          </div>
          <div className="flex-grow grid grid-cols-3 gap-2 my-2 items-center">
            <div className="col-span-2 aspect-video bg-black rounded-sm border border-white/10 relative flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=180&q=80"
                className="w-full h-full object-cover opacity-60"
                alt="grading thumbnail"
              />
              <div className="absolute top-1.5 right-1.5 bg-black/60 px-1 py-0.5 text-[7px] text-[#ace539]">00:12:04</div>
              <div className="w-5 h-5 rounded-full bg-[#ace539] text-[#020349] flex items-center justify-center font-bold text-[8px]">▶</div>
            </div>
            <div className="space-y-2 border-l border-white/5 pl-2">
              <span className="text-[7px] text-slate-400 block">Luma Offset</span>
              <div className="w-8 h-8 rounded-full border border-[#ace539] mx-auto relative flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ace539] absolute top-1 left-2" />
              </div>
              <span className="text-[7px] text-slate-400 block text-center">Gain: +1.2</span>
            </div>
          </div>
          <div className="space-y-1.5 border-t border-white/5 pt-2">
            {[
              { label: "V1 (Reels)", color: "#ace539", width: "60%" },
              { label: "A1 (Audio)", color: "#3b82f6", width: "85%" },
            ].map((track, i) => (
              <div key={i} className="flex gap-1.5 items-center">
                <span className="text-[7px] w-10 text-slate-400">{track.label}</span>
                <div className={`flex-grow h-2.5 rounded-sm relative overflow-hidden`} style={{ background: `${track.color}20`, border: `1px solid ${track.color}30` }}>
                  <div className="h-full rounded-sm" style={{ width: track.width, background: `${track.color}60` }} />
                  {i === 0 && <div className="absolute left-[30%] top-0 w-0.5 h-full bg-white/80" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      specialist: "Mohammed Thanzeel .N",
      role: "Software Developer",
      service: "IT & Tech",
      task: "Turbopack Next.js Build",
      description:
        "Thanzeel is inspecting code segments, implementing dynamic route layouts, and executing hot-reloading checks under Next.js 16.",
      icon: <IconCode className="w-4 h-4" />,
      accent: "#ace539",
      screen: (
        <div className="w-full h-full bg-[#0d0e15] text-[#ededed] p-5 flex flex-col justify-between font-mono text-[9px] select-none">
          <div className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ace539]" />
              app/works/[slug]/page.js
            </span>
            <span className="text-[#ace539] font-bold">TSC ACTIVE</span>
          </div>
          <div className="flex-grow py-2 space-y-0.5 overflow-hidden leading-relaxed">
            {[
              <><span className="text-slate-600">1  </span><span className="text-purple-400">import</span> {"{ works }"} <span className="text-purple-400">from</span> <span className="text-emerald-400">&quot;@/lib/data&quot;</span>;</>,
              <><span className="text-slate-600">2  </span><span className="text-purple-400">export default async function</span> <span className="text-blue-400">Page</span>({"{ params }"}) {"{"}</>,
              <><span className="text-slate-600">3  </span>{"  "}<span className="text-purple-400">const</span> {"{ slug }"} = <span className="text-purple-400">await</span> params;</>,
              <><span className="text-slate-600">4  </span>{"  "}<span className="text-purple-400">const</span> project = works.<span className="text-blue-400">find</span>(p =&gt; p.slug === slug);</>,
              <><span className="text-slate-600">5  </span>{"  "}<span className="text-purple-400">return</span> (</>,
              <><span className="text-slate-600 bg-white/5 block w-full px-1 -mx-1">6  </span><span className="text-[#ace539]">{"    "}&lt;h1 className=&quot;text-stroke-lime&quot;&gt;{"{ project.name }"}&lt;/h1&gt;</span></>,
              <><span className="text-slate-600">7  </span>{"  "});</>,
              <><span className="text-slate-600">8  </span>{"}"}</>,
            ].map((line, i) => (
              <div key={i} className="text-[8.5px]">{line}</div>
            ))}
          </div>
          <div className="bg-[#161623] border border-white/5 p-2 rounded-sm">
            <div className="text-[#ace539] flex justify-between text-[8px]">
              <span>▲ Next.js 16.2.9 (Turbopack)</span>
              <span>100% Compiled</span>
            </div>
            <div className="text-slate-500 text-[7px] mt-1">✓ Compiled successfully in 104ms · Ready on port 3001</div>
          </div>
        </div>
      ),
    },
    {
      specialist: "Bijin Lal",
      role: "Operations Manager",
      service: "AI & Automations",
      task: "Node Logic Integrations",
      description:
        "Bijin is creating automation loops, syncing API webhooks between database actions, email servers, and project logs.",
      icon: <IconSettingsAutomation className="w-4 h-4" />,
      accent: "#ace539",
      screen: (
        <div className="w-full h-full bg-[#0a0518] text-white p-5 flex flex-col justify-between font-mono text-[9px] select-none">
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ace539] animate-pulse" />
              project_brief_trigger.flow
            </span>
            <span className="text-[#ace539] font-bold">ACTIVE WORKFLOW</span>
          </div>
          <div className="flex-grow flex items-center justify-around relative">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path d="M 72 50% H 110" stroke="#ace539" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" />
              <path d="M 160 50% H 195" stroke="#ace539" strokeWidth="1.5" opacity="0.6" />
            </svg>
            {[
              { label: "STRIPE HOOK", sub: "Trigger: Paid", highlight: false },
              { label: "GPT-4 Engine", sub: "Parse Brief", highlight: true },
              { label: "SLACK NOTIFY", sub: "Sync Channel", highlight: false },
            ].map((node, i) => (
              <div
                key={i}
                className={`p-2.5 rounded-sm text-center z-10 ${node.highlight
                    ? "bg-[#ace539] text-[#020349] font-bold shadow-[0_0_20px_rgba(172,229,57,0.3)]"
                    : "bg-white/5 border border-white/10"
                  }`}
              >
                <div className="text-[8px] uppercase font-bold">{node.label}</div>
                <div className={`text-[7px] mt-0.5 ${node.highlight ? "opacity-70" : "text-slate-400"}`}>{node.sub}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center text-slate-400 border-t border-white/10 pt-2">
            <span>Runs: 1,480/day</span>
            <span>Error Rate: 0.00%</span>
          </div>
        </div>
      ),
    },
  ];

  // Handle tab switch with screen animation
  const handleTabChange = (idx) => {
    if (idx === activeTab) return;
    setPrevTab(activeTab);
    if (screenRef.current) {
      gsap.to(screenRef.current, {
        opacity: 0,
        y: 8,
        duration: 0.15,
        ease: "power2.in",
        onComplete: () => {
          setActiveTab(idx);
          gsap.fromTo(
            screenRef.current,
            { opacity: 0, y: -8 },
            { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
          );
        },
      });
    } else {
      setActiveTab(idx);
    }
  };

  // Scroll-triggered entrance animations
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title reveal
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // Tabs stagger reveal
      if (tabsRef.current) {
        const tabs = tabsRef.current.querySelectorAll(".tab-item");
        gsap.fromTo(
          tabs,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.07,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: tabsRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }

      // Display panel reveal
      if (displayRef.current) {
        gsap.fromTo(
          displayRef.current,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: displayRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0a0a0a] text-white py-24 md:py-32 relative overflow-hidden border-t border-white/5"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ace539]/[0.03] rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#ace539]/[0.02] rounded-full filter blur-[100px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="mb-16 md:mb-20 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-[#ace539]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#ace539]">
              Our Capabilities
            </span>
          </div>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight max-w-3xl leading-[1.05]">
            Specialized workflows,{" "}
            <span className="text-white/30">specific outcomes.</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mt-2 leading-relaxed">
            Each discipline runs as a focused unit — a dedicated specialist, tested tools, and a clear outcome.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-[540px]">

          {/* Left: Tabs */}
          <div ref={tabsRef} className="lg:col-span-5 flex flex-col gap-1.5">
            {workstations.map((work, idx) => (
              <button
                key={idx}
                onClick={() => handleTabChange(idx)}
                className={`tab-item group text-left rounded-xl transition-all duration-300 border relative overflow-hidden ${activeTab === idx
                    ? "bg-[#131310] border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                    : "bg-transparent border-transparent hover:bg-white/[0.03] hover:border-white/5"
                  }`}
              >
                {/* Active indicator line */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${activeTab === idx ? "bg-[#ace539]" : "bg-transparent"
                    }`}
                />

                <div className={`px-5 py-4 flex items-center gap-4 transition-all duration-300 ${activeTab === idx ? "opacity-100" : "opacity-50 group-hover:opacity-80"}`}>
                  {/* Icon */}
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${activeTab === idx
                        ? "bg-[#ace539] text-[#0a0a0a]"
                        : "bg-white/5 text-white/50"
                      }`}
                  >
                    {work.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`font-display font-bold text-base transition-colors duration-300 ${activeTab === idx ? "text-white" : "text-slate-300"}`}>
                        {work.service}
                      </span>
                      {activeTab === idx && (
                        <span className="font-mono text-[9px] text-[#ace539]/70 uppercase tracking-widest hidden sm:block">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-xs mt-0.5 truncate">
                      <span className={`${activeTab === idx ? "text-slate-400" : ""}`}>{work.specialist}</span>
                      {" — "}{work.role}
                    </p>
                  </div>

                  {/* Arrow */}
                  <IconChevronRight
                    className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${activeTab === idx ? "text-[#ace539] translate-x-0" : "text-white/20 -translate-x-1"
                      }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Right: Display */}
          <div
            ref={displayRef}
            className="lg:col-span-7 bg-[#0f0f0c] rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col relative shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            {/* Panel top bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-[#111110]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">
                metamorph // {workstations[activeTab].service}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ace539] animate-pulse" />
                <span className="font-mono text-[9px] text-[#ace539]/70 uppercase tracking-wider">online</span>
              </div>
            </div>

            {/* Info strip */}
            <div className="px-5 py-4 border-b border-white/[0.05] flex items-start gap-4">
              <div ref={screenRef} className="flex-grow">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-[#ace539] bg-[#ace539]/10 rounded-full border border-[#ace539]/15">
                    {workstations[activeTab].task}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                  {workstations[activeTab].description}
                </p>
              </div>
            </div>

            {/* Screen */}
            <div className="flex-grow relative">
              {/* Scan-line effect */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.05)_2px,rgba(0,0,0,0.05)_4px)] pointer-events-none z-10" />
              <div className="w-full h-full min-h-[280px]">
                {workstations[activeTab].screen}
              </div>
            </div>

            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ace539]/[0.04] rounded-full filter blur-[80px]" />
            </div>
          </div>
        </div>

        {/* Bottom progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {workstations.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleTabChange(idx)}
              className={`rounded-full transition-all duration-300 ${activeTab === idx
                  ? "w-6 h-1.5 bg-[#ace539]"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
              aria-label={`Switch to ${workstations[idx].service}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
